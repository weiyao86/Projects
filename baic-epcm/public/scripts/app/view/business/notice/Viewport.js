Ext.define('EPCM.view.business.notice.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'EPCM.view.business.notice.Query',
    'EPCM.view.business.notice.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'noticequery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'noticegrid',
    region: 'center'
  }]
});