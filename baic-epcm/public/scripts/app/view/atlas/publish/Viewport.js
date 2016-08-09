Ext.define('EPCM.view.atlas.publish.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'EPCM.view.atlas.publish.Query',
    'EPCM.view.atlas.publish.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'publishquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'publishgrid',
    region: 'center'
  }]
});