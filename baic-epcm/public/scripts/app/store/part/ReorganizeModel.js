Ext.define('EPCM.store.part.ReorganizeModel', {
  extend: 'Ext.ux.store.Base',
  model: 'EPCM.model.part.ReorganizeModel',
  proxyAPI: {
    read: EPCM.globalConfig.restpath + '/part/reorganizeModel',
    create: EPCM.globalConfig.restpath + '/part/reorganizeModel',
    update: EPCM.globalConfig.restpath + '/part/reorganizeModel',
    destroy: EPCM.globalConfig.restpath + '/part/reorganizeModel/index'
  }
});