Ext.define('EPCM.view.business.consult.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'EPCM.view.business.consult.Query',
    'EPCM.view.business.consult.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'consultquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'consultgrid',
    region: 'center'
  }]
});