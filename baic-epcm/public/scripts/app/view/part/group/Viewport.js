Ext.define('EPCM.view.part.group.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'EPCM.view.part.group.Query',
    'EPCM.view.part.group.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'groupquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'groupgrid',
    region: 'center'
  }]
});