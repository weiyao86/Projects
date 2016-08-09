Ext.define('EPCM.view.part.keyPart.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  title: '关重件清单',
  updateDisableItems: ['id'],
  items: [{
    items: [{
      fieldLabel: 'VIN',
      name: 'id'
    }, {
      fieldLabel: '生产件件号',
      name: 'name'
    }, {
      fieldLabel: '用量',
      name: 'id'
    }, {
      xtype: 'textarea',
      fieldLabel: '用法备注',
      name: 'name',
      allowBlank: true
    }]
  }]
});