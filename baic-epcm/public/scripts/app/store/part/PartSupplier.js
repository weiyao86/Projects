Ext.define('EPCM.store.part.PartSupplier', {
  extend: 'Ext.ux.store.Base',
  model: 'EPCM.model.part.PartSupplier',
  proxyAPI: {
    read: EPCM.globalConfig.restpath + '/part/partSupplier',
    create: EPCM.globalConfig.restpath + '/part/partSupplier',
    update: EPCM.globalConfig.restpath + '/part/partSupplier',
    destroy: EPCM.globalConfig.restpath + '/part/partSupplier/index'
  }
});