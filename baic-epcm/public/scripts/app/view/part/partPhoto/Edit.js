Ext.define('EPCM.view.part.partPhoto.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  title: '配件照片',
  updateDisableItems: ['id'],
  items: [{
    items: [{
      fieldLabel: '配件件号',
      name: 'id'
    }, {
      fieldLabel: '配件名称',
      name: 'name'
    }, {
      xtype: 'filefield',
      fieldLabel: '上传品牌示意图',
      name: 'imageName',
      buttonText: '浏览',
      anchor: '100%',
      regex: /\.(png)$/i,
      regexText: '上传文件后缀必须是(png)'
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
      value: '（提示：图文件大小：56*56  <2M、格式：PNG）'
    }]
  }]
});