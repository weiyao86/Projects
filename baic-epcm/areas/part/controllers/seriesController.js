var gu = require('guthrie-js');
var serverConfig = require('../../../config').server;
var doRequest = require('../../../core/doRequest');
var utils = require('../../../core/utils');
var baseController = require('../../../common/baseController');
var seriesController = new gu.controller.inherit(baseController);

seriesController.actions = {
  index: {
    GET: function (req, res) {
      var queryObj = req.query.args;
      var options = {
        //
        host: '10.0.0.103',
        port: 8080,
        //
        path: serverConfig.requestPrefix[0] + '/series/list',
        method: 'POST',
        contentType: 'application/json',
        data: queryObj,
        req: req
      };

      doRequest(options, function (result) {
        var obj = JSON.parse(result);
        var data = obj.data;

        res.send(data);
      });
    },
    POST: function (req, res) {
      utils.parseUploadRequest(req, {}, function (err, fields, files) {
        var options = {
          //
          host: '10.0.0.103',
          port: 8080,
          //
          path: serverConfig.requestPrefix[0] + '/series',
          method: 'POST',
          contentType: 'application/json',
          data: fields,
          files: files,
          req: req
        };
        console.log(fields);
        console.log(files);
        doRequest(options, function (result) {
          res.send(result);
          utils.removeUploadFile(files);
        });
      });
    },
    PUT: function (req, res) {
      utils.parseUploadRequest(req, {}, function (err, fields, files) {
        var options = {
          //
          host: '10.0.0.103',
          port: 8080,
          //
          path: serverConfig.requestPrefix[0] + '/series',
          method: 'PUT',
          contentType: 'application/json',
          data: fields,
          files: files,
          req: req
        };
        console.log(fields);
        doRequest(options, function (result) {
          res.send(result);
          utils.removeUploadFile(files);
        });
      });
    },
    DELETE: function (req, res) {
      var codeList = utils.getCodeList(req.body);
      var options = {
        //
        host: '10.0.0.103',
        port: 8080,
        //
        path: serverConfig.requestPrefix[0] + '/series',
        method: 'DELETE',
        contentType: 'application/json',
        data: codeList,
        req: req
      };

      doRequest(options, function (result) {
        res.send(result);
      });
    }
  }
};

module.exports = seriesController;
