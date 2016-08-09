Ext.define('EPCM.view.part.legend.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'EPCM.view.part.legend.Query',
    'EPCM.view.part.legend.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'legendquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'legendgrid',
    region: 'center'
  }]
});