Ext.define('EPCM.view.common.window.Import', {
  extend: 'Ext.ux.component.edit.Base',
  requires: ['Ext.ux.component.button.LinkButton'],
  title: '导入',
  width: 610,
  bodyPadding: '10',
  initEvents: function () {
    var me = this,
      btnImport = me.down('[itemId=btnImport]');

    btnImport.on('click', function () {
      me.uploadImport();
    });

    this.callParent(arguments);
  },

  uploadImport: function () {
    var me = this,
      form = me.down('form').getForm(),
      url = me.url;

    if (form.isValid()) {
      form.submit({
        url: url,
        method: 'POST',
        success: function (that, action) {
          var root = Ext.decode(action.response.responseText);

          me.importSuccess(root);
        },
        failure: function (that, action) {
          var root = Ext.decode(action.response.responseText);

          me.importFailed(root);
        }
      });
    }
  },

  importSuccess: function (result) {
    var me = this;

    me.queryForm.doQuery();
    me.close();
  },

  importFailed: function (root) {
    var me = this,
      message = root.message,
      tbReportMessage = me.down('[itemId=tbReportMessage]');

    tbReportMessage.setValue(message);
  },
  items: [{
    border: false,
    items: [{
      xtype: 'form',
      height: 40,
      margin: '0 0 10 0',
      layout: {
        type: 'hbox',
        pack: 'start',
        align: 'middle'
      },
      border: false,
      defaults: {
        margin: '0 0 0 10'
      },
      items: [{
        xtype: 'filefield',
        name: 'filename',
        fieldLabel: '导入文件',
        labelWidth: 80,
        buttonText: '浏览',
        width: 450,
        allowBlank: false,
        regex: /\.(xls|xlsx)$/i,
        regexText: '上传文件后缀必须是(xls|xlsx)'
      }, {
        xtype: 'button',
        text: '导入',
        itemId: 'btnImport'
      }, {
        xtype: 'linkbutton',
        text: '下载模板',
        itemId: 'btnDownloadTpl'
      }]
    }, {
      height: 220,
      border: false,
      items: [{
        itemId: 'tbReportMessage',
        xtype: 'textareafield',
        width: '100%',
        height: 220
      }]
    }]
  }],
  dockedItems: []
});
