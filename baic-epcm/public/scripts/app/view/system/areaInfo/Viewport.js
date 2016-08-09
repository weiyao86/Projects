Ext.define('EPCM.view.system.areaInfo.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'EPCM.view.system.areaInfo.Query',
    'EPCM.view.system.areaInfo.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'areainfoquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'areainfogrid',
    region: 'center'
  }]
});