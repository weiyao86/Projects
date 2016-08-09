Ext.define('EPCM.view.part.subGroup.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  title: '分组',
  updateDisableItems: ['code'],
  items: [{
    items: [{
      xtype: 'basecombo',
      fieldLabel: '主组',
      name: 'groupCode',
      storeAutoLoad: true,
      withAll: true,
      url: EPCM.globalConfig.restpath + '/selectorList/brand',
      value: ''
    }, {
      fieldLabel: '分组编码',
      name: 'code'
    }, {
      fieldLabel: '分组名称',
      name: 'name'
    }]
  }]
});