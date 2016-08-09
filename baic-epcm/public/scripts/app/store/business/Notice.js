Ext.define('EPCM.store.business.Notice', {
  extend: 'Ext.ux.store.Base',
  model: 'EPCM.model.business.Notice',
  proxyAPI: {
    read: EPCM.globalConfig.restpath + '/business/notice',
    create: EPCM.globalConfig.restpath + '/business/notice',
    update: EPCM.globalConfig.restpath + '/business/notice',
    destroy: EPCM.globalConfig.restpath + '/business/notice/index'
  }
});