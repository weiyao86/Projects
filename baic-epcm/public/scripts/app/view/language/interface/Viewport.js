Ext.define('EPCM.view.language.interface.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'EPCM.view.language.interface.Query',
    'EPCM.view.language.interface.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'interfacequery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'interfacegrid',
    region: 'center'
  }]
});