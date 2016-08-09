Ext.define('EPCM.view.part.repair.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'EPCM.view.part.repair.Query',
    'EPCM.view.part.repair.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'repairquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'repairgrid',
    region: 'center'
  }]
});