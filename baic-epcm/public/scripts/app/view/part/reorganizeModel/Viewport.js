Ext.define('EPCM.view.part.reorganizeModel.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'EPCM.view.part.reorganizeModel.Query',
    'EPCM.view.part.reorganizeModel.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'reorganizemodelquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'reorganizemodelgrid',
    region: 'center'
  }]
});