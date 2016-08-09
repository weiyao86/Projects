Ext.define('EPCM.view.system.role.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'EPCM.view.system.role.Query',
    'EPCM.view.system.role.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'rolequery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'rolegrid',
    region: 'center'
  }]
});