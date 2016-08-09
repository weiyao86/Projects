var gu = require('guthrie-js');
var doRequest = require('../core/doRequest');
var baseController = require('../common/baseController');
var modelController = new gu.controller.inherit(baseController);
var url = require('url');

modelController.filters = [];

modelController.actions = {
    index: {
        GET: function(req, res) {
            var arg = url.parse(req.url, true).query;

            var options = {
                path: '/baic-epc/catelog/group-image',
                method: 'GET',
                contentType: 'application/json',
                req: req,
                data: {
                    'seriesCode': arg.seriesCode || '',
                    'modelGroupCode': arg.modelGroupCode || '',
                    'modelCode': arg.modelCode || ''
                }
            };

            doRequest(options, function (response, body) {
                res.view({
                    pageTitle: 'model',
                    groups: body
                });
            });
        }
    },
    getSvg: {
        GET: function (req, res) {
            var arg = url.parse(req.url, true).query;

            var options = {
                url: arg.urlPath,
                method: 'GET',
                contentType: 'text/xml',
                req: req
            };

            doRequest(options, function (response, body) {
                if(body.success) {
                    res.send(body.result);
                }
            });
        }
    },
    getParts: {
        GET: function (req, res) {
            var arg = url.parse(req.url, true).query;

            var options = {
                path: '/baic-epc/catelog/usage',
                method: 'GET',
                contentType: 'application/json',
                req: req,
                data: {
                    'seriesCode': arg.seriesCode || '',
                    'modelGroupCode': arg.modelGroupCode || '',
                    'modelCode': arg.modelCode || '',
                    'imageCode': arg.imageCode || ''
                }
            };

            doRequest(options, function (response, body) {
                res.json(body);
            });
        }
    }
};

module.exports = modelController;
