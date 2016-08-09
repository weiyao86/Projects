var gu = require('guthrie-js');
var serverConfig = require('../../../config').server;
var doRequest = require('../../../core/doRequest');
var utils = require('../../../core/utils');
var baseController = require('../../../common/baseController');
var logoutController = new gu.controller.inherit(baseController);

logoutController.actions = {
  index: {
    GET: function (req, res) {
      req.session.username = null;
      res.send();
    }
  }
};

module.exports = logoutController;