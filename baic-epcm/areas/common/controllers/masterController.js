var gu = require('guthrie-js');
var serverConfig = require('../../../config').server;
var doRequest = require('../../../core/doRequest');
var utils = require('../../../core/utils');
var baseController = require('../../../common/baseController');
var masterController = new gu.controller.inherit(baseController);

masterController.actions = {
  index: {
    GET: function (req, res) {
      res.render('master/index', {
        pageTitle: '电子配件目录EPC系统管理中心'
      });
    }
  },
  menu: {
    GET: function (req, res) {
      var options = {
        //
        //host: '10.0.0.103',
        //port: 8080,
        //
        path: serverConfig.requestPrefix[1] + '/menu/listMenuTree',
        method: 'GET',
        contentType: 'application/json',
        req: req
      };

      doRequest(options, function (result) {
        res.send(result);
      });
    }
  }
};

module.exports = masterController;
