Ext.define('EPCM.view.part.partSupplier.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'EPCM.view.part.partSupplier.Query',
    'EPCM.view.part.partSupplier.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'partsupplierquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'partsuppliergrid',
    region: 'center'
  }]
});