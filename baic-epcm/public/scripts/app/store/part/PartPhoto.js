Ext.define('EPCM.store.part.PartPhoto', {
  extend: 'Ext.ux.store.Base',
  model: 'EPCM.model.part.PartPhoto',
  proxyAPI: {
    read: EPCM.globalConfig.restpath + '/part/partPhoto',
    create: EPCM.globalConfig.restpath + '/part/partPhoto',
    update: EPCM.globalConfig.restpath + '/part/partPhoto',
    destroy: EPCM.globalConfig.restpath + '/part/partPhoto/index'
  }
});