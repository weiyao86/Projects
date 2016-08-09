Ext.define('EPCM.view.part.repair.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  title: '维修包',
  updateDisableItems: ['id'],
  items: [{
    items: [{
      fieldLabel: '隶属总成件号',
      name: 'id'
    }, {
      fieldLabel: '维修包件号',
      name: 'name'
    }, {
      xtype: 'textarea',
      fieldLabel: '维修包备注',
      name: 'name',
      allowBlank: true
    }]
  }]
});