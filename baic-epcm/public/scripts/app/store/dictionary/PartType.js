Ext.define('EPCM.store.dictionary.PartType', {
  extend: 'Ext.ux.store.Base',
  model: 'EPCM.model.dictionary.PartType',
  proxyAPI: {
    read: EPCM.globalConfig.restpath + '/dictionary/partType',
    create: EPCM.globalConfig.restpath + '/dictionary/partType',
    update: EPCM.globalConfig.restpath + '/dictionary/partType',
    destroy: EPCM.globalConfig.restpath + '/dictionary/partType/index'
  }
});