Ext.define('EPCM.store.atlas.Publish', {
  extend: 'Ext.ux.store.Base',
  model: 'EPCM.model.atlas.Publish',
  proxyAPI: {
    read: EPCM.globalConfig.restpath + '/atlas/publish',
    create: EPCM.globalConfig.restpath + '/atlas/publish',
    update: EPCM.globalConfig.restpath + '/atlas/publish',
    destroy: EPCM.globalConfig.restpath + '/atlas/publish/index'
  }
});