Ext.define('EPCM.view.statistics.consult.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'EPCM.view.statistics.consult.Query',
    'EPCM.view.statistics.consult.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'statisticsconsultquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'statisticsconsultgrid',
    region: 'center'
  }]
});