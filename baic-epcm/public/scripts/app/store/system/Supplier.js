Ext.define('EPCM.store.system.Supplier', {
  extend: 'Ext.ux.store.Base',
  model: 'EPCM.model.system.Supplier',
  proxyAPI: {
    read: EPCM.globalConfig.restpath + '/system/supplier',
    create: EPCM.globalConfig.restpath + '/system/supplier',
    update: EPCM.globalConfig.restpath + '/system/supplier',
    destroy: EPCM.globalConfig.restpath + '/system/supplier/index'
  }
});