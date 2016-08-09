var initRoutesMap = function (router) {

  /*var pacArea = router.createArea('pac');

  pacArea.mapRoute('/pac/:controller/:action?/:id?');
*/
  router.mapRoute('/crumbs/getCrumbsInfo', {
    controller: 'crumbs',
    action: 'index'
  });

   router.mapRoute('/pac/survey/:name', {
     controller: 'pac',
     action: 'survey'
   });

  router.mapRoute('/catalog/getModel', {
    controller: 'catalog',
    action: 'getModel'
  });

  router.mapRoute('/model/getParts', {
    controller: 'model',
    action: 'getParts'
  });

  router.mapRoute('/model/getSvg', {
    controller: 'model',
    action: 'getSvg'
  });

  router.mapRoute('/detail/getSupersessionDetail', {
    controller: 'detail',
    action: 'getSupersessionDetail'
  });

  router.mapRoute('/detail/getKitDetail', {
    controller: 'detail',
    action: 'getKitDetail'
  });

  router.mapRoute('/detail/getSupplier', {
    controller: 'detail',
    action: 'getSupplier'
  });

  router.mapRoute('/detail/getSupersession', {
    controller: 'detail',
    action: 'getSupersession'
  });

  router.mapRoute('/detail/getKit', {
    controller: 'detail',
    action: 'getKit'
  });

  router.mapRoute('/combo/:type', {
    controller: 'combo',
    action: 'index'
  });  

  router.mapRoute('/search/:type', {
    controller: 'search',
    action: 'index'
  });
  
  router.mapRoute('/pac/online/:name', {
    controller: 'pac',
    action: 'online'
  });

  router.mapRoute('/pac/survey/:name', {
    controller: 'pac',
    action: 'survey'
  });

  router.mapRoute('/:controller/:action?');

  router.mapRoute('/', {
    controller: 'home',
    action: 'index'
  });

};

module.exports = initRoutesMap;