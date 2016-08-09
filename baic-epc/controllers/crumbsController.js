var gu = require('guthrie-js');
var doRequest = require('../core/doRequest');
var baseController = require('../common/baseController');
var crumbsController = new gu.controller.inherit(baseController);
var url = require('url');

crumbsController.actions = {
    index: {
        GET: function (req, res) {
            var arg = url.parse(req.url, true).query,
                urlPath = '/baic-epc/breadcrumb/info?brandCode=' + (arg.brandCode || '') + '&seriesCode=' + (arg.seriesCode || '') + '&modelGroupCode=' + (arg.modelGroupCode || '') + '&modelCode=' + (arg.modelCode || '') + '&imageCode=' + (arg.imageCode || '');
            
            var options = {
                path: urlPath,
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

module.exports = crumbsController;
