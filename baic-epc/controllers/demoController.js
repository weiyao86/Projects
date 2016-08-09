var gu = require('guthrie-js');
var doRequest = require('../core/doRequest');
var baseController = require('../common/baseController');
var loginController = new gu.controller.inherit(baseController);

loginController.actions = {
    index: {
        GET: function(req, res) {
            res.view({
                pageTitle: 'demo'
            });
        }
    }
};

module.exports = loginController;