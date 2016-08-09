Ext.define('EPCM.view.business.consult.Query', {
  extend: 'Ext.ux.component.filter.Query',
  requires: [
    'Ext.ux.component.combo.BaseCombo',
    'Ext.ux.component.datepicker.GroupDatePicker'
  ],
  alias: 'widget.consultquery',
  items: [{
    items: [{
      fieldLabel: '问题编码',
      name: 'name'
    }, {
      fieldLabel: '问题主题',
      name: 'name'
    }, {
      xtype: 'basecombo',
      fieldLabel: '问题分类',
      name: 'groupId',
      storeAutoLoad: true,
      withAll: true,
      url: EPCM.globalConfig.restpath + '/selectorList/brand',
      value: ''
    }, {
      xtype: 'groupdatepicker',
      fieldLabel: '递交时间',
      startName: 'confirmedDateMin',
      endName: 'confirmedDateMax'
    }]
  }, {
    items: [{
      xtype: 'basecombo',
      fieldLabel: '问题状态',
      name: 'groupId',
      storeAutoLoad: true,
      withAll: true,
      url: EPCM.globalConfig.restpath + '/selectorList/brand',
      value: ''
    }, {
      xtype: 'basecombo',
      fieldLabel: '品牌',
      name: 'groupId',
      storeAutoLoad: true,
      withAll: true,
      url: EPCM.globalConfig.restpath + '/selectorList/brand',
      value: ''
    }, {
      xtype: 'basecombo',
      fieldLabel: '车系',
      name: 'groupId',
      storeAutoLoad: true,
      withAll: true,
      url: EPCM.globalConfig.restpath + '/selectorList/brand',
      value: ''
    }, {
      fieldLabel: '配件件号',
      name: 'abc'
    }, {
      fieldLabel: '配件名称',
      name: 'abc'
    }]
  }, {
    items: [{
      xtype: 'basecombo',
      fieldLabel: '问题原因',
      name: 'groupId',
      storeAutoLoad: true,
      withAll: true,
      url: EPCM.globalConfig.restpath + '/selectorList/brand',
      value: ''
    }, {
      xtype: 'basecombo',
      fieldLabel: '是否公开',
      name: 'groupId',
      storeAutoLoad: true,
      withAll: true,
      url: EPCM.globalConfig.restpath + '/selectorList/brand',
      value: ''
    }, {
      xtype: 'basecombo',
      fieldLabel: '是否重点',
      name: 'groupId',
      storeAutoLoad: true,
      withAll: true,
      url: EPCM.globalConfig.restpath + '/selectorList/brand',
      value: ''
    }, {
      fieldLabel: '企业编码',
      name: 'abc'
    }, {
      fieldLabel: '提问人',
      name: 'abc'
    }]
  }]
});