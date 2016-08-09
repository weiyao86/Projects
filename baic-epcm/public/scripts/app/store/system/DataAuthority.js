Ext.define('EPCM.store.system.DataAuthority', {
  extend: 'Ext.ux.store.Base',
  model: 'EPCM.model.system.DataAuthority',
  proxyAPI: {
    read: EPCM.globalConfig.restpath + '/system/dataAuthority',
    create: EPCM.globalConfig.restpath + '/system/dataAuthority',
    update: EPCM.globalConfig.restpath + '/system/dataAuthority',
    destroy: EPCM.globalConfig.restpath + '/system/dataAuthority/index'
  }
});