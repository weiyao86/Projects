Ext.define('EPCM.store.language.Interface', {
  extend: 'Ext.ux.store.Base',
  model: 'EPCM.model.language.Interface',
  proxyAPI: {
    read: EPCM.globalConfig.restpath + '/language/interface',
    create: EPCM.globalConfig.restpath + '/language/interface',
    update: EPCM.globalConfig.restpath + '/language/interface',
    destroy: EPCM.globalConfig.restpath + '/language/interface/index'
  }
});