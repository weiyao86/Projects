Ext.define('EPCM.view.part.series.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'EPCM.view.part.series.Query',
    'EPCM.view.part.series.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'seriesquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'seriesgrid',
    region: 'center'
  }]
});