Ext.define('EPCM.store.system.AreaInfo', {
  extend: 'Ext.ux.store.Base',
  model: 'EPCM.model.system.AreaInfo',
  proxyAPI: {
    read: EPCM.globalConfig.restpath + '/system/areaInfo',
    create: EPCM.globalConfig.restpath + '/system/areaInfo',
    update: EPCM.globalConfig.restpath + '/system/areaInfo',
    destroy: EPCM.globalConfig.restpath + '/system/areaInfo/index'
  }
});