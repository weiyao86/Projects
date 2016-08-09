Ext.define('EPCM.view.part.brand.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'EPCM.view.part.brand.Query',
    'EPCM.view.part.brand.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'brandquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'brandgrid',
    region: 'center'
  }]
});