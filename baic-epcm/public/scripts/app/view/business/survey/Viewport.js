Ext.define('EPCM.view.business.survey.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'EPCM.view.business.survey.Query',
    'EPCM.view.business.survey.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'surveyquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'surveygrid',
    region: 'center'
  }]
});