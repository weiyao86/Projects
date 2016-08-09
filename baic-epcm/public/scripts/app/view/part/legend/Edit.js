Ext.define('EPCM.view.part.legend.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  title: '图例',
  updateDisableItems: ['code'],
  items: [{
    items: [{
      xtype: 'basecombo',
      fieldLabel: '品牌',
      name: 'brandCode',
      storeAutoLoad: true,
      withAll: true,
      url: EPCM.globalConfig.restpath + '/selectorList/brand',
      value: ''
    }, {
      xtype: 'basecombo',
      fieldLabel: '车系',
      name: 'seriesCode',
      storeAutoLoad: true,
      withAll: true,
      url: EPCM.globalConfig.restpath + '/selectorList/brand',
      value: ''
    }, {
      xtype: 'basecombo',
      fieldLabel: '主组',
      name: 'groupCode',
      storeAutoLoad: true,
      withAll: true,
      url: EPCM.globalConfig.restpath + '/model/list',
      value: ''
    }, {
      xtype: 'basecombo',
      fieldLabel: '分组',
      name: 'subGroupCode',
      storeAutoLoad: true,
      withAll: true,
      url: EPCM.globalConfig.restpath + '/model/list',
      value: ''
    }, {
      fieldLabel: '爆炸图编号',
      name: 'code'
    }, {
      fieldLabel: '爆炸图名称',
      name: 'name'
    }, {
      fieldLabel: '爆炸图备注',
      name: 'note',
      allowBlank: true
    }, {
      xtype: 'filefield',
      fieldLabel: '上传SVG图文件',
      name: 'svgFilename',
      buttonText: '浏览',
      anchor: '100%',
      regex: /\.(svg)$/i,
      regexText: '上传文件后缀必须是(svg)'
    }, {
      xtype: 'displayfield',
      fieldStyle: 'color:red;',
      value: '（大小：<2M）'
    }, {
      xtype: 'filefield',
      fieldLabel: '上传GIF图文件',
      name: 'imageName',
      buttonText: '浏览',
      anchor: '100%',
      regex: /\.(gif)$/i,
      regexText: '上传文件后缀必须是(gif)'
    }, {
      xtype: 'displayfield',
      fieldStyle: 'color:red;',
      value: '（大小：<2M）'
    }, {
      xtype: 'displayfield',
      fieldLabel: '当前文件',
      name: 'imageFileName',
      allowBlank: true,
      value: '',
      hidden: true
    }, {
      xtype: 'displayfield',
      fieldStyle: 'color:red;',
      value: '提示：GIF图文件是保障低于IE9以下浏览器查看图功能正常'
    }]
  }]
});