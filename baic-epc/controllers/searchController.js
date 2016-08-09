var gu = require('guthrie-js');
var doRequest = require('../core/doRequest');
var baseController = require('../common/baseController');
var searchController = new gu.controller.inherit(baseController);
var url = require('url');

searchController.actions = {
    index: {
        GET: function (req, res) {
            var type = req.params.type;
            var arg = url.parse(req.url, true).query;
            var callbacks = {
                advancedSearch: function () {
                    var options = {
                        path: '/baic-epc/advanced-search/search?args=' + arg.args,
                        method: 'GET',
                        contentType: 'application/json',
                        req: req
                    };

                    doRequest(options, function (response, body) {
                        res.json(body);
                    });
                },
                supersessionSearch: function () {
                    var options = {
                        path: '/baic-epc/detail/part-substitute/' + arg.partNo,
                        method: 'GET',
                        contentType: 'application/json',
                        req: req
                    };

                    doRequest(options, function (response, body) {
                        res.json(body);
                    });
                },
                vinSearch: function () {
                    var options = {
                        path: '/baic-epc/vin/vin/' + arg.vin,
                        method: 'GET',
                        contentType: 'application/json',
                        req: req
                    };

                    doRequest(options, function (response, body) {
                        res.json(body);
                    });
                },
                vehicleSearch: function () {
                    var options = {
                        path: '/baic-epc/vin/vehicle/' + arg.vehicleCode,
                        method: 'GET',
                        contentType: 'application/json',
                        req: req
                    };

                    doRequest(options, function (response, body) {
                        res.json(body);
                    });
                },
                vinAutocomplete: function () {
                    var options = {
                        path: '/baic-epc/vin/search?vinNo=' + arg.vinNo,
                        method: 'GET',
                        contentType: 'application/json',
                        req: req
                    };

                    doRequest(options, function (response, body) {
                        res.json({list: body});
                    });
                },
                getSupersessionDetail: function () {
                    var options = {
                        path: '/baic-epc/detail/part-substitute-detail/' + arg.code,
                        method: 'GET',
                        contentType: 'application/json',
                        req: req
                    };

                    doRequest(options, function (response, body) {
                        res.json(body);
                    });
                }
            };

            if(callbacks[type]) callbacks[type]();
        }
    }
};

module.exports = searchController;
