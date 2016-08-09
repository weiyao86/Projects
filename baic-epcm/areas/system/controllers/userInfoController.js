var gu = require('guthrie-js');
var serverConfig = require('../../../config').server;
var doRequest = require('../../../core/doRequest');
var utils = require('../../../core/utils');
var baseController = require('../../../common/baseController');
var userInfoController = new gu.controller.inherit(baseController);

userInfoController.actions = {
  index: {
    GET: function (req, res) {
      var queryObj = req.query.args;
      var options = {
        //
        //host: '10.0.0.103',
        //port: 8080,
        //
        path: serverConfig.requestPrefix[0] + '/model/list',
        method: 'POST',
        contentType: 'application/json',
        data: queryObj,
        req: req
      };

      doRequest(options, function (result) {
        res.send(result);
      });
    },
    POST: function (req, res) {
      var options = {
        //
        //host: '10.0.0.103',
        //port: 8080,
        //
        path: serverConfig.requestPrefix[0] + '/model',
        method: 'POST',
        contentType: 'application/json',
        data: req.body,
        req: req
      };

      doRequest(options, function (result) {
        res.send(result);
      });
    },
    PUT: function (req, res) {
      var options = {
        //
        //host: '10.0.0.103',
        //port: 8080,
        //
        path: serverConfig.requestPrefix[0] + '/model',
        method: 'PUT',
        contentType: 'application/json',
        data: req.body,
        req: req
      };

      doRequest(options, function (result) {
        res.send(result);
      });
    },
    DELETE: function (req, res) {
      var codeList = utils.getCodeList(req.body);
      var options = {
        //
        //host: '10.0.0.103',
        //port: 8080,
        //
        path: serverConfig.requestPrefix[0] + '/model',
        method: 'DELETE',
        contentType: 'application/json',
        data: codeList,
        req: req
      };

      doRequest(options, function (result) {
        res.send(result);
      });
    }
  },
  createImport: {
    POST: function (req, res) {
      res.json({
        success: true,
        message: 'ok'
      });
    }
  },
  updateImport: {
    POST: function (req, res) {
      res.json({
        success: false,
        message: '上传文件出错说明'
      });
    }
  }
};

module.exports = userInfoController;
