Ext.define('EPCM.store.dictionary.Notice', {
  extend: 'Ext.ux.store.Base',
  model: 'EPCM.model.dictionary.Notice',
  proxyAPI: {
    read: EPCM.globalConfig.restpath + '/dictionary/notice',
    create: EPCM.globalConfig.restpath + '/dictionary/notice',
    update: EPCM.globalConfig.restpath + '/dictionary/notice',
    destroy: EPCM.globalConfig.restpath + '/dictionary/notice/index'
  }
});