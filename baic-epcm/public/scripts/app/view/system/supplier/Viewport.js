Ext.define('EPCM.view.system.supplier.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'EPCM.view.system.supplier.Query',
    'EPCM.view.system.supplier.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'supplierquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'suppliergrid',
    region: 'center'
  }]
});