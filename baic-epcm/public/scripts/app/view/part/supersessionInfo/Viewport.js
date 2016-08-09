Ext.define('EPCM.view.part.supersessionInfo.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'EPCM.view.part.supersessionInfo.Query',
    'EPCM.view.part.supersessionInfo.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'supersessioninfoquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'supersessioninfogrid',
    region: 'center'
  }]
});