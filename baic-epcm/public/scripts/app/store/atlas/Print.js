Ext.define('EPCM.store.atlas.Print', {
  extend: 'Ext.ux.store.Base',
  model: 'EPCM.model.atlas.Print',
  proxyAPI: {
    read: EPCM.globalConfig.restpath + '/atlas/print',
    create: EPCM.globalConfig.restpath + '/atlas/print',
    update: EPCM.globalConfig.restpath + '/atlas/print',
    destroy: EPCM.globalConfig.restpath + '/atlas/print/index'
  }
});