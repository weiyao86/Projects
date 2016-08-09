Ext.define('EPCM.view.part.partStatus.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'EPCM.view.part.partStatus.Query',
    'EPCM.view.part.partStatus.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'partstatusquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'partstatusgrid',
    region: 'center'
  }]
});