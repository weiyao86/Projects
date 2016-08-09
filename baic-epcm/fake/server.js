var http = require('http');
var fs = require('fs');
var utils = require('../core/utils');
var masterMenuData = require('./data/masterMenuData');
var partData = require('./data/partData');


var server = http.createServer(function (req, res) {
  var data = '';

  req.setEncoding('utf8');

  req.on('data', function (chunk) {
    data += chunk;
  });
  req.on('error', function () {
    console.log('are kidding me?');
  });
  req.on('end', function () {
    switch (req.url) {
      case '/baic-epcm/upload':
          res.end(JSON.stringify({result: true}));
        break;
      case '/baic-epcm/download':
          var textStream = fs.createReadStream('../upload/holder.txt');

          res.setHeader('Content-Type', 'application/octet-stream');
          res.setHeader('Content-Disposition', 'attachment; filename=holder.txt');

          textStream.pipe(res);
        break;
      case '/baic-epcm/login':
          var user = JSON.parse(data);
          if (user.username === 'admin' && user.password === '96e79218965eb72c92a549dd5a330112') {
            res.end(JSON.stringify({result: true}));
          } else {
            res.end(JSON.stringify({result: false}));
          }
        break;

      case '/baic-core/menu/listMenuTree':
          res.end(JSON.stringify(masterMenuData));
        break;

      case '/baic-epcm/brand/list':
          res.end(JSON.stringify(partData.brand));
        break;

      case '/baic-epcm/brand':
          handleRequestMethod(req, {
            GET: function () {
              res.end(JSON.stringify({
                list: [
                  {name: '1111', code: '1'},
                  {name: '2222', code: '2'}
                ]
              }));
            },
            POST: function () {
              res.end(JSON.stringify({
                result: 'post ok'
              }));
            },
            PUT: function () {
              res.end(JSON.stringify({
                result: 'put ok'
              }));
            },
            DELETE: function () {
              res.end(JSON.stringify({
                result: 'delete ok'
              }));
            }
          });
        break;

      case '/baic-epcm/series/list':
          res.end(JSON.stringify(partData.series));
        break;

      case '/baic-epcm/series':
        handleRequestMethod(req, {
          GET: function () {
            res.end(JSON.stringify(partData.series));
          },
          POST: function () {
            res.end(JSON.stringify({
              result: 'post ok'
            }));
          },
          PUT: function () {
            res.end(JSON.stringify({
              result: 'put ok'
            }));
          },
          DELETE: function () {
            res.end(JSON.stringify({
              result: 'delete ok'
            }));
          }
        });
        break;
      case '/baic-epcm/series/upload':
        handleRequestMethod(req, {
          POST: function () {
            utils.parseUploadRequest(req, {}, function(success, fields, files){
                res.end(files.toString());
            });
          }
        });
       break;

      case '/baic-epcm/model/list':
        res.end(JSON.stringify(partData.model));
        break;

      case '/baic-epcm/model':
        handleRequestMethod(req, {
          GET: function () {
            res.end(JSON.stringify(partData.model));
          },
          POST: function () {
            res.end(JSON.stringify({
              result: 'post ok'
            }));
          },
          PUT: function () {
            res.end(JSON.stringify({
              result: 'put ok'
            }));
          },
          DELETE: function () {
            res.end(JSON.stringify({
              result: 'delete ok'
            }));
          }
        });
        break;

      case '/baic-epcm/reorganizeModel/list':
        res.end(JSON.stringify(partData.reorganizeModel));
        break;

      case '/baic-epcm/reorganizeModel':
        handleRequestMethod(req, {
          GET: function () {
            res.end(JSON.stringify(partData.reorganizeModel));
          },
          POST: function () {
            res.end(JSON.stringify({
              result: 'post ok'
            }));
          },
          PUT: function () {
            res.end(JSON.stringify({
              result: 'put ok'
            }));
          },
          DELETE: function () {
            res.end(JSON.stringify({
              result: 'delete ok'
            }));
          }
        });
        break;

      default:
          res.end(JSON.stringify({status: 404, message: 'request path '+ req.url +' is not exist!'}));
    }
  });
});

function handleRequestMethod(req, obj) {
  switch (req.method) {
    case 'GET':
        obj.GET && obj.GET();
      break;
    case 'POST':
      obj.POST && obj.POST();
      break;
    case 'PUT':
      obj.PUT && obj.PUT();
      break;
    case 'DELETE':
      obj.DELETE && obj.DELETE();
      break;
    default:
      console.log('request method is not support!');
  }
}

server.listen(9002);
console.log('server is listening on port 9002 !');