Ext.define('EPCM.view.system.userInfo.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'EPCM.view.system.userInfo.Query',
    'EPCM.view.system.userInfo.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'userinfoquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'userinfogrid',
    region: 'center'
  }]
});