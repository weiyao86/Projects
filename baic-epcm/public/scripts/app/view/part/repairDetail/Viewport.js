Ext.define('EPCM.view.part.repairDetail.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'EPCM.view.part.repairDetail.Query',
    'EPCM.view.part.repairDetail.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'repairdetailquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'repairdetailgrid',
    region: 'center'
  }]
});