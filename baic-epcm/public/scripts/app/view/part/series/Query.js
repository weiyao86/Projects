Ext.define('EPCM.view.part.series.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.seriesquery',
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
      fieldLabel: '车系名称',
      name: 'name'
    }, {
      xtype: 'basecombo',
      fieldLabel: '无示意图文件',
      name: 'imageFilename',
      value: '',
      localData: [{
        name: '全部',
        code: ''
      }, {
        name: '是',
        code: true
      }, {
        name: '否',
        code: false
      }]
    }]
  }]
});