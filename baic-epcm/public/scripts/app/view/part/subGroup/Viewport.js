Ext.define('EPCM.view.part.subGroup.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'EPCM.view.part.subGroup.Query',
    'EPCM.view.part.subGroup.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'subgroupquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'subgroupgrid',
    region: 'center'
  }]
});