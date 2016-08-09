var gu = require('guthrie-js');
var doRequest = require('../core/doRequest');
var baseController = require('../common/baseController');
var loginController = new gu.controller.inherit(baseController);

loginController.filters = [];

loginController.actions = {
	index: {
		GET: function(req, res) {
			res.view({
				pageTitle: 'login'
			});
		},
		POST: function(req, res) {

			var data = req.body;
			var options = {
				host: '127.0.0.1',
				port: '9001',
				path: '/login',
				method: 'POST',
				contentType: 'application/json',
				data: data,
				req: req
			};

			doRequest(options, function(response, body) {
				req.session.hasLogined = true;
				req.session.usercode = data.usercode;
				req.session.lang = data.lang;
				req.session.database = data.database;
				res.send(body);
			});
		}
	}
};

module.exports = loginController;