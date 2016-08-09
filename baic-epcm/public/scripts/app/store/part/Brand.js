Ext.define('EPCM.store.part.Brand', {
  extend: 'Ext.ux.store.Base',
  model: 'EPCM.model.part.Brand',
  proxyAPI: {
    read: EPCM.globalConfig.restpath + '/part/brand',
    create: EPCM.globalConfig.restpath + '/part/brand',
    update: EPCM.globalConfig.restpath + '/part/brand',
    destroy: EPCM.globalConfig.restpath + '/part/brand/index'
  }
});