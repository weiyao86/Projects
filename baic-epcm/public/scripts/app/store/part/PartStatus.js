Ext.define('EPCM.store.part.PartStatus', {
  extend: 'Ext.ux.store.Base',
  model: 'EPCM.model.part.PartStatus',
  proxyAPI: {
    read: EPCM.globalConfig.restpath + '/part/partStatus',
    create: EPCM.globalConfig.restpath + '/part/partStatus',
    update: EPCM.globalConfig.restpath + '/part/partStatus',
    destroy: EPCM.globalConfig.restpath + '/part/partStatus/index'
  }
});