Ext.define('EPCM.store.dictionary.Problem', {
  extend: 'Ext.ux.store.Base',
  model: 'EPCM.model.dictionary.Problem',
  proxyAPI: {
    read: EPCM.globalConfig.restpath + '/dictionary/problem',
    create: EPCM.globalConfig.restpath + '/dictionary/problem',
    update: EPCM.globalConfig.restpath + '/dictionary/problem',
    destroy: EPCM.globalConfig.restpath + '/dictionary/problem/index'
  }
});