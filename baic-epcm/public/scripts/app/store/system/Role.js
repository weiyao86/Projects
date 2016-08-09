Ext.define('EPCM.store.system.Role', {
  extend: 'Ext.ux.store.Base',
  model: 'EPCM.model.system.Role',
  proxyAPI: {
    read: EPCM.globalConfig.restpath + '/system/role',
    create: EPCM.globalConfig.restpath + '/system/role',
    update: EPCM.globalConfig.restpath + '/system/role',
    destroy: EPCM.globalConfig.restpath + '/system/role/index'
  }
});