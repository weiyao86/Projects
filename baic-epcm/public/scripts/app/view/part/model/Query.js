Ext.define('EPCM.view.part.model.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.modelquery',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
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
      fieldLabel: '车型名称',
      name: 'name'
    }]
  }]
});