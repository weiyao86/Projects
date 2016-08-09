Ext.define('EPCM.view.part.reorganizeModel.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.reorganizemodelquery',
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
      url: EPCM.globalConfig.restpath + '/selectorList/brand',
      value: ''
    }, {
      xtype: 'basecombo',
      fieldLabel: '车系',
      name: 'seriesCode',
      storeAutoLoad: true,
      withAll: true,
      url: EPCM.globalConfig.restpath + '/selectorList/brand',
      value: ''
    }, {
      xtype: 'basecombo',
      fieldLabel: '车型组',
      name: 'modelGroupCode',
      storeAutoLoad: true,
      withAll: true,
      url: EPCM.globalConfig.restpath + '/selectorList/brand',
      value: ''
    }, {
      fieldLabel: '整编车型名称',
      name: 'name'
    }]
  }]
});