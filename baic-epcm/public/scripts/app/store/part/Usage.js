Ext.define('EPCM.store.part.Usage', {
  extend: 'Ext.ux.store.Base',
  model: 'EPCM.model.part.Usage',
  proxyAPI: {
    read: EPCM.globalConfig.restpath + '/part/usage',
    create: EPCM.globalConfig.restpath + '/part/usage',
    update: EPCM.globalConfig.restpath + '/part/usage',
    destroy: EPCM.globalConfig.restpath + '/part/usage/index'
  }
});