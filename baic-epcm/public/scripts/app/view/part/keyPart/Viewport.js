Ext.define('EPCM.view.part.keyPart.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'EPCM.view.part.keyPart.Query',
    'EPCM.view.part.keyPart.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'keypartquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'keypartgrid',
    region: 'center'
  }]
});