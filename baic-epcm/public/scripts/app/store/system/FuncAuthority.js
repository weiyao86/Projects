Ext.define('EPCM.store.system.FuncAuthority', {
  extend: 'Ext.ux.store.Base',
  model: 'EPCM.model.system.FuncAuthority',
  proxyAPI: {
    read: EPCM.globalConfig.restpath + '/system/funcAuthority',
    create: EPCM.globalConfig.restpath + '/system/funcAuthority',
    update: EPCM.globalConfig.restpath + '/system/funcAuthority',
    destroy: EPCM.globalConfig.restpath + '/system/funcAuthority/index'
  }
});