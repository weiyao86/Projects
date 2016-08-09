Ext.define('EPCM.store.part.SupersessionDetail', {
  extend: 'Ext.ux.store.Base',
  model: 'EPCM.model.part.SupersessionDetail',
  proxyAPI: {
    read: EPCM.globalConfig.restpath + '/part/supersessionDetail',
    create: EPCM.globalConfig.restpath + '/part/supersessionDetail',
    update: EPCM.globalConfig.restpath + '/part/supersessionDetail',
    destroy: EPCM.globalConfig.restpath + '/part/supersessionDetail/index'
  }
});