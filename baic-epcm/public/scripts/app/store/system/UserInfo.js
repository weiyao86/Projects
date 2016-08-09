Ext.define('EPCM.store.system.UserInfo', {
  extend: 'Ext.ux.store.Base',
  model: 'EPCM.model.system.UserInfo',
  proxyAPI: {
    read: EPCM.globalConfig.restpath + '/system/userInfo',
    create: EPCM.globalConfig.restpath + '/system/userInfo',
    update: EPCM.globalConfig.restpath + '/system/userInfo',
    destroy: EPCM.globalConfig.restpath + '/system/userInfo/index'
  }
});