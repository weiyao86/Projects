var gu = require('guthrie-js');
var doRequest = require('../core/doRequest');
var baseController = require('../common/baseController');
var comboController = new gu.controller.inherit(baseController);
var url = require('url');

comboController.actions = {
	index: {
		GET: function (req, res) {
			var type = req.params.type;
			var arg = url.parse(req.url, true).query;

			var callbacks = {
				brand: function (req, res) {
					var options = {
			            path: "/baic-epc/combo/brand/list",
			            method: 'GET',
			            contentType: 'application/json',
			            req: req
			        };

			        doRequest(options, function (response, body) {
			        	res.json({'list': body});
			        });
			    },
			    series: function (req, res) {
			    	var options = {
			            path: "/baic-epc/combo/series/list?parentCode=" + arg.parentCode,
			            method: 'GET',
			            contentType: 'application/json',
			            req: req
			        };

			        doRequest(options, function (response, body) {
			        	res.json({'list': body});
			        });
			    },
			    model: function (req, res) {
			    	var options = {
			            path: "/baic-epc/combo/model-group/list?parentCode=" + arg.parentCode,
			            method: 'GET',
			            contentType: 'application/json',
			            req: req
			        };

			        doRequest(options, function (response, body) {
			        	res.json({'list': body});
			        });
			    },
			    subModel: function (req, res) {
			    	var options = {
			            path: "/baic-epc/combo/model/list?parentCode=" + arg.parentCode,
			            method: 'GET',
			            contentType: 'application/json',
			            req: req
			        };

			        doRequest(options, function (response, body) {
			        	res.json({'list': body});
			        });
			    },
			    group: function (req, res) {
			    	var options = {
			            path: "/baic-epc/combo/group/list?parentCode=" + arg.parentCode,
			            method: 'GET',
			            contentType: 'application/json',
			            req: req
			        };

			        doRequest(options, function (response, body) {
			        	res.json({'list': body});
			        });
			    },
			    subGroup: function (req, res) {
			    	var options = {
			            path: "/baic-epc/combo/sub-group/list?parentCode=" + arg.parentCode,
			            method: 'GET',
			            contentType: 'application/json',
			            req: req
			        };

			        doRequest(options, function (response, body) {
			        	res.json({'list': body});
			        });
			    }
			}

			if(type) {
				callbacks[type](req, res);
			}
		}
	}
};

module.exports = comboController;