Ext.define('EPCM.view.system.enterpriseInfo.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'EPCM.view.system.enterpriseInfo.Query',
    'EPCM.view.system.enterpriseInfo.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'enterpriseinfoquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'enterpriseinfogrid',
    region: 'center'
  }]
});