Ext.define('EPCM.view.part.supersessionDetail.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  title: '替换组详情',
  updateDisableItems: ['id'],
  items: [{
    items: [{
      fieldLabel: '替换组编码',
      name: 'name'
    }, {
      fieldLabel: '配件件号',
      name: 'name'
    }, {
      xtype: 'textarea',
      fieldLabel: '备注',
      name: 'name',
      allowBlank: true
    }]
  }]
});