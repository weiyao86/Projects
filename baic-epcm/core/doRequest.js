"use strict";

var http = require('http');
var fs = require('fs');
var path = require('path');
var serverConfig = require('../config').server;
var request = require('request');

function doRequest(opts, callback) {
  var options = {
    host: opts.host || serverConfig.host,
    port: opts.port || serverConfig.port,
    path: opts.path || serverConfig.requestPrefix[0] + '/',
    method: opts.method || 'POST',
    headers: {
      'Content-Type': opts.contentType || 'application/json',
      'X-USERNAME': opts.username || opts.req.session.username || ''
    }
  };

  var url = 'http://' + options.host + ':' + options.port + options.path;

  if (opts.files) {

    var multipart = [{
      'content-type': 'application/json',
      'body': typeof opts.data === 'string' ?  (opts.data || '') : JSON.stringify(opts.data || {})
    }];

    var props = Object.keys(opts.files);

    props.forEach(function (prop) {

      var obj = {
        'content-type': opts.files[prop].type,
        'content-disposition': 'filename="' + opts.files[prop].name + '"',
        'body': fs.createReadStream(opts.files[prop].path, {
          encoding: 'utf-8'
        })
      };

      multipart.push(obj);
    });

    request({
      uri: url,
      method: options.method,
      headers: {
        'X-USERNAME': opts.username || opts.req.session.username || ''
      },
      multipart: multipart
    }, function (err, res, body) {

      if (err) {
        err.publish();
      }
      if (res && res.headers && res.headers['content-disposition']) {
        callback(res, body);
      } else {
        callback(body);
      }
    });
  } else {

    request({
      url: url,
      method: options.method,
      headers:options.headers,
      body: typeof opts.data === 'string' ?  (opts.data || '') : JSON.stringify(opts.data || {})
    }, function (err, res, body) {

      if (err) {
        err.publish();
      }

      if (res && res.headers && res.headers['content-disposition']) {
        callback(res, body);
      } else {
        callback(body);
      }
    });
  }
}

module.exports = doRequest;