var gu = require('guthrie-js');
var baseController = require('../common/baseController');
var utils = require('../core/utils');
var testController = new gu.controller.inherit(baseController);

testController.actions = {
    index: {
        GET: function(req, res) {
            res.view({
                pageTitle: 'test'
            });
        }
    },
    upload: {
        POST: function(req, res, next) {
            utils.parseUploadRequest(req, null, function(success, fields, files) {
                 console.log('upload success');

                 res.send('upload success');
            });
        }
    }
};

module.exports = testController;
