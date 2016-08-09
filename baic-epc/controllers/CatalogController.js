var gu = require('guthrie-js');
var doRequest = require('../core/doRequest');
var baseController = require('../common/baseController');
var catalogController = new gu.controller.inherit(baseController);
var url = require('url');
   
  catalogController.filters = [];

catalogController.actions = {
    index: {
        GET: function(req, res) {
            var arg = req.params;
                brandCode = arg.brandCode || null,
                seriesCode = arg.seriesCode || null,
                crumbsData = [];

            var options = {
                    path: '/baic-epc/index/brand-series',
                    method: 'GET',
                    contentType: 'application/json',
                    req: req
                };

            doRequest(options, function (response, body) {
                res.view({
                    pageTitle: '首页',
                    brands: body
                });
            });
        }
    },
    getModel: {
    	GET: function (req, res) {
    		var arg = url.parse(req.url, true).query,
                brandCode = arg.brandCode,
                seriesCode = arg.seriesCode;

            var options = {
                    path: '/baic-epc/index/group-model/' + seriesCode,
                    method: 'GET',
                    contentType: 'application/json',
                    req: req
                };
            
            doRequest(options, function (response, body) {
                res.json({'data': body});
            });
        }
    }
};

module.exports = catalogController;
