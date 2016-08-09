Ext.define('EPCM.view.dictionary.notice.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'EPCM.view.dictionary.notice.Query',
    'EPCM.view.dictionary.notice.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'dnoticequery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'dnoticegrid',
    region: 'center'
  }]
});