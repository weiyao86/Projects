Ext.define('EPCM.view.part.supersessionDetail.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'EPCM.view.part.supersessionDetail.Query',
    'EPCM.view.part.supersessionDetail.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'supersessiondetailquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'supersessiondetailgrid',
    region: 'center'
  }]
});