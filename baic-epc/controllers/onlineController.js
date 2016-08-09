var gu = require('guthrie-js');
var doRequest = require('../core/doRequest');
var utils = require('../core/utils');
var baseController = require('../common/baseController');
var onlineController = new gu.controller.inherit(baseController);
var url = require('url');

onlineController.actions = {
    'brandSeries': {
        GET: function(req, res) {
            var options = {
                host: '10.0.0.30',
                port: '1280',
                path: '/baic-epc/index/brand-series',
                method: 'GET',
                contentType: 'application/json',
                req: req
            };

            doRequest(options, function(response, body) {
                res.status(response && response.statusCode || 200);
                if(response.statusCode === 200) {
                    res.send(body);
                }
            });
        }
    },

    'brandGroups': {
        GET: function(req, res) {
            var code = req.query.code;

            var options = {
                host: '10.0.0.30',
                port: '1280',
                path: '/baic-epc/catelog/groups?' + 'seriesCode=' + code,
                method: 'GET',
                contentType: 'application/json',
                req: req
            };

            doRequest(options, function(response, body) {
                res.status(response && response.statusCode || 200);
                if(response.statusCode === 200) {
                    res.send(body);
                }
            });
        }
    },

    'questionType': {
        GET: function(req, res) {
            var options = {
                host: '10.0.0.88',
                port: '8080',
                path: '/baic-core/question/type/list',
                method: 'GET',
                contentType: 'application/json',
                req: req
            };

            doRequest(options, function(response, body) {
                res.status(response && response.statusCode || 200);
                if(response.statusCode === 200) {
                    res.send(body);
                }
            });
        }
    },

    'seriousStatus': {
        GET: function(req, res) {
            var options = {
                host: '10.0.0.88',
                port: '8080',
                path: '/baic-core/question/important/list',
                method: 'GET',
                contentType: 'application/json',
                req: req
            };

            doRequest(options, function(response, body) {
                res.status(response && response.statusCode || 200);
                if(response.statusCode === 200) {
                    res.send(body);
                }
            });
        }
    },

    'questionStatus': {
        GET: function(req, res) {
            var options = {
                host: '10.0.0.88',
                port: '8080',
                path: '/baic-core/question/status/list',
                method: 'GET',
                contentType: 'application/json',
                req: req
            };

            doRequest(options, function(response, body) {
                res.status(response && response.statusCode || 200);
                if(response.statusCode === 200) {
                    res.send(body);
                }
            });
        }
    },

    'serviceInfo': {
        GET: function(req, res) {
            var username = req.session.usercode;

            var options = {
                host: '10.0.0.88',
                port: '10086',
                path: '/baic-core/enterprise/name?username=' + username,
                method: 'GET',
                contentType: 'application/json',
                req: req
            };

            doRequest(options, function(response, body) {
                res.status(response && response.statusCode || 200);
                if(response.statusCode === 200) {
                    res.send(body);
                }
            });
        }
    },

    'getPublicQuestion': {
        GET: function(req, res) {
            var args = url.parse(req.url, true).query.args;

            var options = {
                host: '10.0.0.88',
                port: '8080',
                path: '/baic-core/question/list-public',
                method: 'POST',
                contentType: 'application/json',
                req: req,
                data: args
            };

            doRequest(options, function(response, body) {
                res.status(response && response.statusCode || 200);
                if(response.statusCode === 200) {
                    res.send(body);
                }
            });
        }
    },

    'getMyQuestion': {
        GET: function(req, res) {
            var args = url.parse(req.url, true).query.args;

            var options = {
                host: '10.0.0.88',
                port: '8080',
                path: '/baic-core/question/list-my',
                method: 'POST',
                contentType: 'application/json',
                req: req,
                data: args
            };

            doRequest(options, function(response, body) {
                res.status(response && response.statusCode || 200);
                if(response.statusCode === 200) {
                    res.send(body);
                }
            });
        }
    },

    'replyHistory': {
        GET: function(req, res) {
            var questionCode = req.query.questionCode;

            var options = {
                host: '10.0.0.88',
                port: '10086',
                path: '/baic-core/answer/get?questionCode=' + questionCode,
                method: 'GET',
                contentType: 'application/json',
                req: req
            };

            doRequest(options, function(response, body) {
                res.status(response && response.statusCode || 200);
                if(response.statusCode === 200) {
                    res.send(body);
                }
            });
        }
    },

    'getQualityList': {
        GET: function(req, res) {
            var options = {
                host: '10.0.0.88',
                port: '10086',
                path: '/baic-core/question/quality/list',
                method: 'GET',
                contentType: 'application/json',
                req: req
            };

            doRequest(options, function(response, body) {
                res.status(response && response.statusCode || 200);
                if(response.statusCode === 200) {
                    res.send(body);
                }
            });
        }
    },

    'uploadQuestionFile': {
        POST: function(req, res) {
            utils.parseUploadRequest(req, {}, function (err, fields, files) { //原始表单提交，不支持PUT请求
                var options = {
                  host: '10.0.0.88',
                  port: 10086,
                  path: '/baic-core/question',
                  method: 'POST',
                  contentType: 'application/json',
                  data: fields,
                  files: files,
                  req: req
                };

                for(var i in files) {
                    if(files[i]['size'] > 4 * 1024 * 1024) {
                        return res.send({
                            success: false,
                            message: '文件大小必须小于等于4M'
                        });
                    }
                }

                doRequest(options, function(response, body) {
                    res.status(response && response.statusCode || 200);
                    if(response.statusCode === 200) {
                        res.send(body);
                        utils.removeUploadFile(files);
                    }
                });
            });
        }
    },

    'uploadReplyForm': {
        POST: function(req, res) {
            utils.parseUploadRequest(req, {}, function (err, fields, files) { //原始表单提交，不支持PUT请求
                var options = {
                  host: '10.0.0.88',
                  port: 10086,
                  path: '/baic-core/answer',
                  method: 'POST',
                  contentType: 'application/json',
                  data: fields,
                  files: files,
                  req: req
                };

                for(var i in files) {
                    if(files[i]['size'] > 4 * 1024 * 1024) {
                        return res.send({message: '文件大小必须小于等于4M'});
                    }
                }

                doRequest(options, function(response, body) {
                    res.status(response && response.statusCode || 200);
                    if(response.statusCode === 200) {
                        res.send(body);
                        utils.removeUploadFile(files);
                    }
                });
            });
        }
    },

    'closeQuestion': {
        POST: function(req, res) {
            var data = req.body;

            var options = {
                host: '10.0.0.88',
                port: '10086',
                path: '/baic-core/question/close',
                method: 'PUT',
                contentType: 'application/json',
                req: req,
                data: data
            };

            doRequest(options, function(response, body) {
                res.status(response && response.statusCode || 200);
                if(response.statusCode === 200) {
                    res.send(body);
                }
            });
        }
    }
};

module.exports = onlineController;
