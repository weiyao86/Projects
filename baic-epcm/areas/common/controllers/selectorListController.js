var gu = require('guthrie-js');
var serverConfig = require('../../../config').server;
var doRequest = require('../../../core/doRequest');
var utils = require('../../../core/utils');
var baseController = require('../../../common/baseController');
var selectorListController = new gu.controller.inherit(baseController);

selectorListController.actions = {
  list: {
    GET: function (req, res) {
      var options = {
        //
        host: '10.0.0.103',
        port: 8080,
        //
        path: serverConfig.requestPrefix[0] + '/' + req.params.id + '/select',
        method: 'GET',
        contentType: 'application/json',
        req: req
      };

      doRequest(options, function (result) {
        var obj = JSON.parse(result);
        var data = obj.data;

        res.send(data);
      });
    }
  }
};

module.exports = selectorListController;