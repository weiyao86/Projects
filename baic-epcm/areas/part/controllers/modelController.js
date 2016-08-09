var gu = require('guthrie-js');
var serverConfig = require('../../../config').server;
var doRequest = require('../../../core/doRequest');
var utils = require('../../../core/utils');
var baseController = require('../../../common/baseController');
var modelController = new gu.controller.inherit(baseController);

modelController.actions = {
  index: {
    GET: function(req, res) {
      var queryObj = req.query.args;
      var options = {
        //
        host: '10.0.0.103',
        port: 8080,
        //
        path: serverConfig.requestPrefix[0] + '/model-group/list',
        method: 'POST',
        contentType: 'application/json',
        data: queryObj,
        req: req
      };

      doRequest(options, function(result) {
        var obj = JSON.parse(result);
        var data = obj.data;

        res.send(data);
      });
    },
    POST: function(req, res) {
      var options = {
        //
        host: '10.0.0.103',
        port: 8080,
        //
        path: serverConfig.requestPrefix[0] + '/model-group',
        method: 'POST',
        contentType: 'application/json',
        data: req.body,
        req: req
      };

      doRequest(options, function(result) {
        res.send(result);
      });
    },
    PUT: function(req, res) {
      var options = {
        //
        host: '10.0.0.103',
        port: 8080,
        //
        path: serverConfig.requestPrefix[0] + '/model-group',
        method: 'PUT',
        contentType: 'application/json',
        data: req.body,
        req: req
      };

      doRequest(options, function(result) {
        res.send(result);
      });
    },
    DELETE: function(req, res) {
      var codeList = utils.getCodeList(req.body);
      var options = {
        //
        host: '10.0.0.103',
        port: 8080,
        //
        path: serverConfig.requestPrefix[0] + '/model-group',
        method: 'DELETE',
        contentType: 'application/json',
        data: codeList,
        req: req
      };

      doRequest(options, function(result) {
        res.send(result);
      });
    }
  },
  createImport: {
    POST: function(req, res) {
      res.json({
        success: true,
        message: 'ok'
      });
    }
  },
  updateImport: {
    POST: function(req, res) {
      res.json({
        success: false,
        message: '上传文件出错说明'
      });
    }
  },
  filterExport: {
    GET: function(req, res) {
      var path = 'D:\\nodejs_dev\\baic-epcm\\upload\\download-test.xlsx';
      
      res.download(path);
    }
  }
};

module.exports = modelController;