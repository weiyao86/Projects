Ext.define('EPCM.view.part.partSupplier.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  title: '配件供应商',
  updateDisableItems: ['id'],
  items: [{
    items: [{
      fieldLabel: '配件件号',
      name: 'id'
    }, {
      xtype: 'basecombo',
      fieldLabel: '供应商',
      name: 'group',
      storeAutoLoad: true,
      withAll: true,
      url: EPCM.globalConfig.restpath + '/selectorList/brand',
      value: ''
    }, {
      xtype: 'textarea',
      fieldLabel: '供应商备注',
      name: 'id',
      allowBlank: true
    }]
  }]
});