Ext.define('EPCM.view.dictionary.partStatus.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'EPCM.view.dictionary.partStatus.Query',
    'EPCM.view.dictionary.partStatus.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'dpartstatusquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'dpartstatusgrid',
    region: 'center'
  }]
});