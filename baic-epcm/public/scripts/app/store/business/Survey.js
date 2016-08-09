Ext.define('EPCM.store.business.Survey', {
  extend: 'Ext.ux.store.Base',
  model: 'EPCM.model.business.Survey',
  proxyAPI: {
    read: EPCM.globalConfig.restpath + '/business/survey',
    create: EPCM.globalConfig.restpath + '/business/survey',
    update: EPCM.globalConfig.restpath + '/business/survey',
    destroy: EPCM.globalConfig.restpath + '/business/survey/index'
  }
});