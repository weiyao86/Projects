Ext.define('EPCM.view.atlas.print.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'EPCM.view.atlas.print.Query',
    'EPCM.view.atlas.print.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'printquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'printgrid',
    region: 'center'
  }]
});