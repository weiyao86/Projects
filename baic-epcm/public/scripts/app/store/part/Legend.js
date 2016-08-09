Ext.define('EPCM.store.part.Legend', {
  extend: 'Ext.ux.store.Base',
  model: 'EPCM.model.part.Legend',
  proxyAPI: {
    read: EPCM.globalConfig.restpath + '/part/legend',
    create: EPCM.globalConfig.restpath + '/part/legend',
    update: EPCM.globalConfig.restpath + '/part/legend',
    destroy: EPCM.globalConfig.restpath + '/part/legend/index'
  }
});