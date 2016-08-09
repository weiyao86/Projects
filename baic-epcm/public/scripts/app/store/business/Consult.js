Ext.define('EPCM.store.business.Consult', {
  extend: 'Ext.ux.store.Base',
  model: 'EPCM.model.business.Consult',
  proxyAPI: {
    read: EPCM.globalConfig.restpath + '/business/consult',
    create: EPCM.globalConfig.restpath + '/business/consult',
    update: EPCM.globalConfig.restpath + '/business/consult',
    destroy: EPCM.globalConfig.restpath + '/business/consult/index'
  }
});