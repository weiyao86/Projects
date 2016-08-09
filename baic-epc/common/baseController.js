var gu = require('guthrie-js');
var utils = require('../core/utils');
var epcmConfig = require('../config').epcm;
var baseController = new gu.controller.create();
var NO_VALID_URLS = ['/login', '/register', '/demo/index', '/demo/show', '/demo'];

baseController.on('actionExecuting', function(req, res, next) {
	this.viewBag().isLocal = true;
	this.viewBag().releaseVersion = Date.now();
	this.viewBag().epcmPath = 'http://' + epcmConfig.host + ':' + epcmConfig.port + epcmConfig.path.login;
	this.epcHost = "10.0.0.30";
	this.epcPort = "1280";

	if (req.session.hasLogined) {
		next();
	} else {
		if (req.url !== '/login') {
			res.redirect('/login');
		} else {
			next();
		}
	}
});

function isNeedValid(url) {
	return NO_VALID_URLS.indexOf(url) === -1 ? true : false;
}

module.exports = baseController;