Ext.define('EPCM.store.language.Data', {
  extend: 'Ext.ux.store.Base',
  model: 'EPCM.model.language.Data',
  proxyAPI: {
    read: EPCM.globalConfig.restpath + '/language/data',
    create: EPCM.globalConfig.restpath + '/language/data',
    update: EPCM.globalConfig.restpath + '/language/data',
    destroy: EPCM.globalConfig.restpath + '/language/data/index'
  }
});