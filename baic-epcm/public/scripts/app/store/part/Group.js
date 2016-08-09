Ext.define('EPCM.store.part.Group', {
  extend: 'Ext.ux.store.Base',
  model: 'EPCM.model.part.Group',
  proxyAPI: {
    read: EPCM.globalConfig.restpath + '/part/group',
    create: EPCM.globalConfig.restpath + '/part/group',
    update: EPCM.globalConfig.restpath + '/part/group',
    destroy: EPCM.globalConfig.restpath + '/part/group/index'
  }
});