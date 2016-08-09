var gu = require('guthrie-js');
var serverConfig = require('../../../config').server;
var doRequest = require('../../../core/doRequest');
var utils = require('../../../core/utils');
var baseController = require('../../../common/baseController');
var loginController = new gu.controller.inherit(baseController);

loginController.actions = {
  index: {
    GET: function (req, res) {
      res.render('login/index', {
        pageTitle: '登陆页'
      });
    },
    POST: function (req, res) {
      var data = req.body;
      var options = {
        req: req,
        path: serverConfig.requestPrefix[0] + '/login',
        method: 'POST',
        contentType: 'application/json',
        data: data
      };

      doRequest(options, function (result) {
        var temp = JSON.parse(result);

        if (temp.result) { //后台验证通过
          console.log('ok');
          req.session.username = data.username;
          res.send({
            url: '/'
          });
        } else {
          res.status(401);
          res.send();
        }
      });
    }
  }
};

module.exports = loginController;