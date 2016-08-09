Ext.define('EPCM.store.part.SubGroup', {
  extend: 'Ext.ux.store.Base',
  model: 'EPCM.model.part.SubGroup',
  proxyAPI: {
    read: EPCM.globalConfig.restpath + '/part/subGroup',
    create: EPCM.globalConfig.restpath + '/part/subGroup',
    update: EPCM.globalConfig.restpath + '/part/subGroup',
    destroy: EPCM.globalConfig.restpath + '/part/subGroup/index'
  }
});