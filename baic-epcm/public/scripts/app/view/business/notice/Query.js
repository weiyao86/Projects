Ext.define('EPCM.view.business.notice.Query', {
  extend: 'Ext.ux.component.filter.Query',
  requires: [
    'Ext.ux.component.combo.BaseCombo',
    'Ext.ux.component.datepicker.GroupDatePicker'
  ],
  alias: 'widget.noticequery',
  items: [{
    items: [{
      fieldLabel: '通知编码',
      name: 'name'
    }, {
      fieldLabel: '通知主题',
      name: 'name'
    }, {
      xtype: 'basecombo',
      fieldLabel: '通知类型',
      name: 'groupId',
      storeAutoLoad: true,
      withAll: true,
      url: EPCM.globalConfig.restpath + '/selectorList/brand',
      value: ''
    }]
  }, {
    items: [{
      xtype: 'basecombo',
      fieldLabel: '通知类型',
      name: 'groupId',
      storeAutoLoad: true,
      withAll: true,
      url: EPCM.globalConfig.restpath + '/selectorList/brand',
      value: ''
    }, {
      xtype: 'groupdatepicker',
      fieldLabel: '发布时间',
      startName: 'confirmedDateMin',
      endName: 'confirmedDateMax'
    }]
  }]
});