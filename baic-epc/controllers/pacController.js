var gu = require('guthrie-js');
var doRequest = require('../core/doRequest');
var utils = require('../core/utils');
var baseController = require('../common/baseController');
var pacController = new gu.controller.inherit(baseController);
var url = require('url');

pacController.actions = {
    'survey': {
        GET: function(req, res) {
            var options = {
                host: '10.0.0.88',
                port: '8080',
                path: '/baic-core/questionnaire/current',
                method: 'GET',
                contentType: 'application/json',
                req: req,
            };

            doRequest(options, function(response, body) {

                res.status(response && response.statusCode || 200);
                if (response.statusCode === 404) {

                }
                if(response.statusCode === 200) {
                    res.render('pac/survey/index', {
                        pageTitle:'问卷调查',
                        usercode: req.session.usercode,
                        data: body
                    });
                }
            });         
        },

        POST: function(req, res) {
            var name = req.params.name;

            if(name === 'answer') {
                var data = req.body;
                var options = {
                    host: '10.0.0.88',
                    port: '10086',
                    path: '/baic-core/questionnaire/answer',
                    method: 'POST',
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
    },
    'online': {
    	GET: function(req, res) {
    		var name = req.params.name, pathUrl, pageTitle;
    		console.log(name)
            var callbacks = {
                detail: function(req, res) {
                    var questionCode = req.query.questionCode,
                        usercode = req.session.usercode || '';

                    var options = {
                        host: '10.0.0.88',
                        port: '10086',
                        path: '/baic-core/question/get?questionCode=' + questionCode,
                        method: 'GET',
                        contentType: 'application/json',
                        req: req
                    };

                    doRequest(options, function(response, body) {
                        console.log(body)
                        res.status(response && response.statusCode || 200);
                        if(response.statusCode === 200) {
                            res.render('pac/online/detail', {
                                pageTitle: '问题详情',
                                data: body,
                                usercode: usercode
                            });
                        }
                    });
                },
                myquestion: function(req, res) {
                    pathUrl = 'pac/online/myquestion';
                    pageTitle = '在线咨询';
                    res.render(pathUrl, {pageTitle: pageTitle});
                },
                question_search: function(req, res) {
                    pathUrl = 'pac/online/question_search';
                    pageTitle = '在线咨询';
                    res.render(pathUrl, {pageTitle: pageTitle});
                }
            };
            if(name) {
                callbacks[name](req,res);
            } else {
                res.render('pac/online', {pageTitle: '在线咨询'});
            }
    	}
    }
};

module.exports = pacController;
