var gu = require('guthrie-js');
var baseController = new gu.controller.create();
var NO_VALID_URLS = ['/login', '/register', '/demo/index', '/demo/show', '/demo', '/part/series/upload'];

baseController.on('actionExecuting', function (req, res, next) {
  this.viewBag().isLocal = true;
  this.viewBag().releaseVersion = Date.now();

  if (req.session.username) {
    this.viewBag().username = req.session.username;

    next();
  } else {
    if (req.url !== '/login') {
      res.redirect('/login');
    } else {
      next();
    }
  }
});

function isNeedValid(url) {
  return NO_VALID_URLS.indexOf(url) === -1 ? true : false;
}

module.exports = baseController;
