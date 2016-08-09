Ext.define('EPCM.store.dictionary.PartStatus', {
  extend: 'Ext.ux.store.Base',
  model: 'EPCM.model.dictionary.PartStatus',
  proxyAPI: {
    read: EPCM.globalConfig.restpath + '/dictionary/partStatus',
    create: EPCM.globalConfig.restpath + '/dictionary/partStatus',
    update: EPCM.globalConfig.restpath + '/dictionary/partStatus',
    destroy: EPCM.globalConfig.restpath + '/dictionary/partStatus/index'
  }
});