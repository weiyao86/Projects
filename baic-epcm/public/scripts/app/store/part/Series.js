Ext.define('EPCM.store.part.Series', {
  extend: 'Ext.ux.store.Base',
  model: 'EPCM.model.part.Series',
  proxyAPI: {
    read: EPCM.globalConfig.restpath + '/part/series',
    create: EPCM.globalConfig.restpath + '/part/series',
    update: EPCM.globalConfig.restpath + '/part/series',
    destroy: EPCM.globalConfig.restpath + '/part/series/index'
  }
});