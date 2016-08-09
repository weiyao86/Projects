Ext.define('EPCM.view.system.supplier.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.supplierquery',
  items: [{
    items: [{
      fieldLabel: '品牌名称',
      name: 'name'
    }]
  }]
});