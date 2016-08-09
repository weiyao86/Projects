Ext.define('EPCM.store.part.Repair', {
  extend: 'Ext.ux.store.Base',
  model: 'EPCM.model.part.Repair',
  proxyAPI: {
    read: EPCM.globalConfig.restpath + '/part/repair',
    create: EPCM.globalConfig.restpath + '/part/repair',
    update: EPCM.globalConfig.restpath + '/part/repair',
    destroy: EPCM.globalConfig.restpath + '/part/repair/index'
  }
});