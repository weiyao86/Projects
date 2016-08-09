var gu = require('guthrie-js');
var doRequest = require('../core/doRequest');
var baseController = require('../common/baseController');
var detailController = new gu.controller.inherit(baseController);
var url = require('url');

detailController.actions = {
	index: {
		GET: function (req, res) {
			var arg = url.parse(req.url, true).query;
			var options = {
				path: '/baic-epc/detail/part/' + arg.partNo,
				method: 'GET',
				contentType: 'application/json',
				req: req
			};

			doRequest(options, function (response, body) {
				res.view({
					pageTitle: 'detail',
					partInfo: body[0]
				});
			});		
		}
	},
	getSupplier: {
		GET: function (req, res) {
			var arg = url.parse(req.url, true).query;
			var options = {
				path: '/baic-epc/detail/part-supplier/' + arg.partNo,
				method: 'GET',
				contentType: 'application/json',
				req: req
			};

			doRequest(options, function (response, body) {
				res.json({list: body});
			});	
		}
	},
	getSupersession: {
		GET: function (req, res) {
			var arg = url.parse(req.url, true).query;
			var options = {
				path: '/baic-epc/detail/part-substitute/' + arg.partNo,
				method: 'GET',
				contentType: 'application/json',
				req: req
			};

			doRequest(options, function (response, body) {
				res.json({list: body});
			});	
		}
	},
	getKit: {
		GET: function (req, res) {
			var arg = url.parse(req.url, true).query;
			var options = {
				path: '/baic-epc/detail/part-repairkit/' + arg.partNo,
				method: 'GET',
				contentType: 'application/json',
				req: req
			};

			doRequest(options, function (response, body) {
				res.json({list: body});
			});
		}
	},
	getKitDetail: {
		GET: function (req, res) {
			var arg = url.parse(req.url, true).query;
			var options = {
				path: '/baic-epc/detail/part-repairkit-detail?args=' + arg.args,
				method: 'GET',
				contentType: 'application/json',
				req: req
			};

			doRequest(options, function (response, body) {
				res.json(body);
			});
		}
	}
};

module.exports = detailController;