var gu = require('guthrie-js');
var baseController = require('../common/baseController');
var ContactController = new gu.controller.inherit(baseController);

ContactController.actions = {
	index: {
		GET: function(req, res) {
			res.view({
				pageTitle: 'found password'
			});
		}
	}
};

module.exports = ContactController;