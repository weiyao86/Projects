Ext.define('EPCM.view.dictionary.problem.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'EPCM.view.dictionary.problem.Query',
    'EPCM.view.dictionary.problem.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'problemquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'problemgrid',
    region: 'center'
  }]
});