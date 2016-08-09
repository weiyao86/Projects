Ext.define('EPCM.store.part.Model', {
  extend: 'Ext.ux.store.Base',
  model: 'EPCM.model.part.Model',
  proxyAPI: {
    read: EPCM.globalConfig.restpath + '/part/model',
    create: EPCM.globalConfig.restpath + '/part/model',
    update: EPCM.globalConfig.restpath + '/part/model',
    destroy: EPCM.globalConfig.restpath + '/part/model/index'
  }
});