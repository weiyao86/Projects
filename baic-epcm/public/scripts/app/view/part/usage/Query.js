Ext.define('EPCM.view.part.usage.Query', {
  extend: 'Ext.ux.component.filter.Query',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  alias: 'widget.usagequery',
  items: [{
    items: [{
      fieldLabel: '整车编码',
      name: 'name'
    }, {
      xtype: 'basecombo',
      fieldLabel: '车系',
      name: 'groupId',
      storeAutoLoad: true,
      withAll: true,
      url: EPCM.globalConfig.restpath + '/selectorList/brand',
      value: ''
    }, {
      xtype: 'basecombo',
      fieldLabel: '车型',
      name: 'groupId',
      storeAutoLoad: true,
      withAll: true,
      url: EPCM.globalConfig.restpath + '/selectorList/brand',
      value: ''
    }, {
      xtype: 'basecombo',
      fieldLabel: '主组',
      name: 'groupId',
      storeAutoLoad: true,
      withAll: true,
      url: EPCM.globalConfig.restpath + '/selectorList/brand',
      value: ''
    }, {
      xtype: 'basecombo',
      fieldLabel: '分组',
      name: 'groupId',
      storeAutoLoad: true,
      withAll: true,
      url: EPCM.globalConfig.restpath + '/selectorList/brand',
      value: ''
    }]
  }, {
    items: [{
      fieldLabel: '图例编号',
      name: 'name'
    }, {
      fieldLabel: '图例名称',
      name: 'name'
    }, {
      fieldLabel: '配件编号',
      name: 'name'
    }, {
      fieldLabel: '配件名称',
      name: 'name'
    }]
  }]
});