"use strict";

var http = require('http');
var fs = require('fs');
var path = require('path');
var serverConfig = require('../config').server;
var request = require('request');
var urlencode = require('urlencode');

function doRequest(opts, callback) {
  var options = {
    url: opts.url || null,
    host: opts.host || serverConfig.host,
    port: opts.port || serverConfig.port,
    path: opts.path || serverConfig.requestPrefix[0] + '/',
    method: opts.method || 'POST',
    headers: {
      'Content-Type': opts.contentType || 'application/json',
      'X-USERNAME': opts.username || opts.req.session.usercode || ''
    }
  };

  var url = options.url ? options.url : 'http://' + options.host + ':' + options.port + options.path;

  if (opts.files) {

    var multipart = [];
    var props = Object.keys(opts.files);

    if (opts.data) {
      multipart.push({
        'content-type': 'application/json',
        'body': typeof opts.data === 'string' ?  opts.data : JSON.stringify(opts.data)
      });
    }

    props.forEach(function (prop) {
      if (opts.files[prop].size > 0) {
        var filename = urlencode(opts.files[prop].name);
        var obj = {
          'content-type': opts.files[prop].type,
          'content-disposition': 'attachment; filename=' + filename,
          'body': fs.createReadStream(opts.files[prop].path)
        };

        multipart.push(obj);
      }
    });

    var multipartOptions = {
      uri: url,
      method: options.method,
      headers: {
        'X-USERNAME': opts.username || opts.req.session.usercode || ''
      },
      multipart: multipart
    };

    if (opts.res) {

      request(multipartOptions)
        .on('error', function(err) {
          err.publish();
          return opts.res.send({messge: '后端服务错误！'});
        })
        .pipe(opts.res);

    } else {

      request(multipartOptions, createResponseHandle(callback));

    }
  } else {
console.log('url::::::::::::::' + url);
    var normalOptions = {
      url: url,
      method: options.method,
      headers:options.headers,
      body: typeof opts.data === 'string' ?  (opts.data || '') : JSON.stringify(opts.data || {})
    };

    if (opts.res) {

      request(normalOptions)
        .on('error', function(err) {
          err.publish();
          return opts.res.send({messge: '后端服务错误！'});
        })
        .pipe(opts.res);

    } else {

      request(normalOptions, createResponseHandle(callback));

    }
  }
}

function createResponseHandle(callback) {
  return function (err, res, body) {
    if (err) {
      err.publish();
      return callback(res, {success: false, message: '后端服务错误！'});
    }

    if (res.statusCode === 404) {
      return callback(res, {success: false, message: '后端服务404错误！'});
    }

    if (res && res.headers && res.headers['content-disposition']) {
      return callback(res, body);
    }

    if (body) {
      try {
        body = typeof body === 'string' ? JSON.parse(body) : body;
      } catch (e) {
        var temp = body;
        body = {};
        body.result = temp;
      }

      body.success = (res && res.statusCode === 200) ? true : false;
    } else {
      body = {};
      body.success = (res && res.statusCode === 200) ? true : false;
    }

    callback(res, body);
  };
}

module.exports = doRequest;