Ext.define('EPCM.view.part.partSupplier.Query', {
  extend: 'Ext.ux.component.filter.Query',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  alias: 'widget.partsupplierquery',
  items: [{
    items: [{
      fieldLabel: '配件件号',
      name: 'name'
    }, {
      fieldLabel: '配件名称',
      name: 'name'
    }, {
      fieldLabel: '供应商编码',
      name: 'name'
    }, {
      fieldLabel: '供应商名称',
      name: 'name'
    }]
  }]
});