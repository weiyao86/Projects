Ext.define('EPCM.store.part.KeyPart', {
  extend: 'Ext.ux.store.Base',
  model: 'EPCM.model.part.KeyPart',
  proxyAPI: {
    read: EPCM.globalConfig.restpath + '/part/keyPart',
    create: EPCM.globalConfig.restpath + '/part/keyPart',
    update: EPCM.globalConfig.restpath + '/part/keyPart',
    destroy: EPCM.globalConfig.restpath + '/part/keyPart/index'
  }
});