Ext.define('EPCM.view.language.data.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'EPCM.view.language.data.Query',
    'EPCM.view.language.data.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'dataquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'datagrid',
    region: 'center'
  }]
});