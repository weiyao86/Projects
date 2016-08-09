Ext.define('EPCM.store.part.RepairDetail', {
  extend: 'Ext.ux.store.Base',
  model: 'EPCM.model.part.RepairDetail',
  proxyAPI: {
    read: EPCM.globalConfig.restpath + '/part/repairDetail',
    create: EPCM.globalConfig.restpath + '/part/repairDetail',
    update: EPCM.globalConfig.restpath + '/part/repairDetail',
    destroy: EPCM.globalConfig.restpath + '/part/repairDetail/index'
  }
});