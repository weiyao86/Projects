Ext.define('EPCM.store.system.EnterpriseInfo', {
  extend: 'Ext.ux.store.Base',
  model: 'EPCM.model.system.EnterpriseInfo',
  proxyAPI: {
    read: EPCM.globalConfig.restpath + '/system/enterpriseInfo',
    create: EPCM.globalConfig.restpath + '/system/enterpriseInfo',
    update: EPCM.globalConfig.restpath + '/system/enterpriseInfo',
    destroy: EPCM.globalConfig.restpath + '/system/enterpriseInfo/index'
  }
});