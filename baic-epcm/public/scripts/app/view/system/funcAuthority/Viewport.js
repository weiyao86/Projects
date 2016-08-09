Ext.define('EPCM.view.system.funcAuthority.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'EPCM.view.system.funcAuthority.Query',
    'EPCM.view.system.funcAuthority.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'funcauthorityquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'funcauthoritygrid',
    region: 'center'
  }]
});