Ext.define('EPCM.view.part.subGroup.Query', {
  extend: 'Ext.ux.component.filter.Query',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  alias: 'widget.subgroupquery',
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
      fieldLabel: '分组名称',
      name: 'name'
    }]
  }]
});