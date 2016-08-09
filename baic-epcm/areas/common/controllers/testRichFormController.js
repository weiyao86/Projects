var gu = require('guthrie-js');
var serverConfig = require('../../../config').server;
var doRequest = require('../../../core/doRequest');
var utils = require('../../../core/utils');
var baseController = require('../../../common/baseController');
var testController = new gu.controller.inherit(baseController);

testController.actions = {
  index: {
    GET: function (req, res) {
      res.render('test/index');
    },
    POST: function (req, res) {
      utils.parseUploadRequest(req, {}, function (err, fields, files) {
        if (err) {
          res.send({message: 'parse file error!'});
        } else {
          var options = {
            path: serverConfig.requestPrefix[0] + '/upload',
            method: 'POST',
            data: fields,
            files: files,
            req: req
          };

          doRequest(options, function (result) {
            res.send(result);
            utils.removeUploadFile(files);
          });
        }
      });

    }
  },
  download: {
    GET: function (req, res)
    {
      var options = {
        path: serverConfig.requestPrefix[0] + '/download',
        method: 'GET',
        req: req
      };

      doRequest(options, function (result, body) {
        res.set(result.headers);
        res.send(body);
      });

    }
  }
};

module.exports = testController;
