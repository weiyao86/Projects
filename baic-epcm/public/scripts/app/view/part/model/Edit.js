Ext.define('EPCM.view.part.model.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  title: '车型',
  updateDisableItems: ['code'],
  items: [{
    items: [{
      xtype: 'basecombo',
      fieldLabel: '品牌',
      name: 'brandCode',
      storeAutoLoad: true,
      withAll: true,
      url: EPCM.globalConfig.restpath + '/selectorList/list/brand',
      value: ''
    }, {
      xtype: 'basecombo',
      fieldLabel: '车系',
      name: 'seriesCode',
      storeAutoLoad: true,
      withAll: true,
      url: EPCM.globalConfig.restpath + '/selectorList/list/series',
      value: ''
    }, {
      fieldLabel: '车型编码',
      name: 'code'
    }, {
      fieldLabel: '车型名称',
      name: 'name'
    }]
  }]
});