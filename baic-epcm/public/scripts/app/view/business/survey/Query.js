Ext.define('EPCM.view.business.survey.Query', {
  extend: 'Ext.ux.component.filter.Query',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  alias: 'widget.surveyquery',
  items: [{
    items: [{
      fieldLabel: '问卷编号',
      name: 'name'
    }, {
      fieldLabel: '问卷主题',
      name: 'name'
    }, {
      xtype: 'basecombo',
      fieldLabel: '状态',
      name: 'groupId',
      storeAutoLoad: true,
      withAll: true,
      url: EPCM.globalConfig.restpath + '/selectorList/brand',
      value: ''
    }]
  }]
});