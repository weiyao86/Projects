Ext.define('EPCM.view.part.repairDetail.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  title: '维修包详情',
  updateDisableItems: ['id'],
  items: [{
    items: [{
      fieldLabel: '维修包件号',
      name: 'id'
    }, {
      fieldLabel: '配件件号',
      name: 'id'
    }, {
      fieldLabel: '用量',
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
      fieldLabel: '维修包备注',
      name: 'name',
      allowBlank: true
    }]
  }]
});