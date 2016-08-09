Ext.onReady(function () {
  var extjsConfig = EPCM.extjsConfig;
  var namespace = EPCM.globalConfig.namespace;
  var startPage = extjsConfig.pages[extjsConfig.pageCode];

  Ext.QuickTips.init();

  Ext.Loader.setConfig({
    enabled: true,
    paths: {
      'Ext.ux': extjsConfig.uxFolder
    }
  });

  Ext.application({
    name: EPCM.globalConfig.namespace,
    appFolder: extjsConfig.appFolder,
    controllers: [startPage.controller],
    launch: function () {
      Ext.create(namespace + ".view." + startPage.viewport);
    }
  });
});