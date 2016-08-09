Ext.define('EPCM.view.part.partPhoto.Viewport', {
  extend: 'Ext.ux.component.viewport.Base',
  requires: [
    'EPCM.view.part.partPhoto.Query',
    'EPCM.view.part.partPhoto.Grid'
  ],
  items: [{
    title: '查询区域',
    xtype: 'partphotoquery',
    region: 'north',
    split: true
  }, {
    title: '列表区域',
    xtype: 'partphotogrid',
    region: 'center'
  }]
});