Ext.define('EPCM.view.dictionary.supersession.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'EPCM.view.dictionary.supersession.Query',
    'EPCM.view.dictionary.supersession.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'supersessionquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'supersessiongrid',
    region: 'center'
  }]
});