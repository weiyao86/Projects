Ext.define('EPCM.store.dictionary.Supersession', {
  extend: 'Ext.ux.store.Base',
  model: 'EPCM.model.dictionary.Supersession',
  proxyAPI: {
    read: EPCM.globalConfig.restpath + '/dictionary/supersession',
    create: EPCM.globalConfig.restpath + '/dictionary/supersession',
    update: EPCM.globalConfig.restpath + '/dictionary/supersession',
    destroy: EPCM.globalConfig.restpath + '/dictionary/supersession/index'
  }
});