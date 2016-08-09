Ext.define('EPCM.store.statistics.Consult', {
  extend: 'Ext.ux.store.Base',
  model: 'EPCM.model.statistics.Consult',
  proxyAPI: {
    read: EPCM.globalConfig.restpath + '/statistics/consult',
    create: EPCM.globalConfig.restpath + '/statistics/consult',
    update: EPCM.globalConfig.restpath + '/statistics/consult',
    destroy: EPCM.globalConfig.restpath + '/statistics/consult/index'
  }
});