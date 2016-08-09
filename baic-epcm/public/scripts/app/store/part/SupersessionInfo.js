Ext.define('EPCM.store.part.SupersessionInfo', {
  extend: 'Ext.ux.store.Base',
  model: 'EPCM.model.part.SupersessionInfo',
  proxyAPI: {
    read: EPCM.globalConfig.restpath + '/part/supersessionInfo',
    create: EPCM.globalConfig.restpath + '/part/supersessionInfo',
    update: EPCM.globalConfig.restpath + '/part/supersessionInfo',
    destroy: EPCM.globalConfig.restpath + '/part/supersessionInfo/index'
  }
});