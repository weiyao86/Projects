Ext.define('EPCM.view.common.grid.Grid', {
  extend: 'Ext.ux.component.grid.Grid',
  allowRowDrag: false,

  constructor: function(config) {
    var me = this;

    me.configRowDrag();
    this.callParent(arguments);
  },

  configRowDrag: function() {
    var me = this;

    if (me.allowRowDrag) {
      me.viewConfig = {
        enableTextSelection: true,
        plugins: {
          ptype: 'gridviewdragdrop',
          dragText: '拖动对本条数据进行排序'
        },
        listeners: {
          drop: function() {
            this.getSelectionModel().deselectAll();
            this.up("[itemId=grid-list]").isRowMove = true;
          }
        }
      }
    }
  },

  initEvents: function() {
    var me = this;

    me.on('toolbarclick', function(that) {
      me.toolbarClick(that)
    });

    me.callParent(arguments);
  },

  toolbarClick: function(that) {
    var me = this;

    switch (that.action) {
      case 'create-import':
      case 'update-import':
        me.openImportWindow(that);
        break;
      case 'save-sort':
        me.saveSort(that);
        break;
      default:
        break;
    }
  },

  saveSort: function(that) {
    if (!this.isRowMove) {
      Ext.Msg.alert("提示", "当前行的顺序未发生变化");
      return;
    }
    var me = this,
      url = that.postUrl,
      params = me.getSortSaveParams();

    me.setLoading(true);

    Ext.util.ajax({
      url: url,
      method: 'POST',
      jsonData: params,
      requestcomplete: function() {
        me.setLoading(false);
      },
      success: function(root) {
        me.handlerSortSaveSuccess(root);
      }
    });
  },

  handlerSortSaveSuccess: function(root) {
    var me = this;

    if (root.success) {
      Ext.Msg.alert("提示", "保存顺序更改成功");
      //me.reload();
      me.isRowMove = false;
    } else {
      Ext.Msg.alert("提示", "错误信息: " + root.message);
    }
  },

  getSortSaveParams: function() {
    var me = this,
      params = [],
      records = me.getStore().getRange();

    Ext.each(records, function(item, index) {
      params.push({
        code: item.get("code"),
        sort: index
      });
    });

    return params;
  },

  openImportWindow: function(that) {
    var me = this,
      importWindow,
      queryForm = me.getQuery();

    if (that.action === 'create-import') {
      importWindow = Ext.create('EPCM.view.common.window.Import', {
        title: '新增导入',
        mode: 'create',
        queryForm: queryForm,
        url: that.postUrl
      });
    } else if (that.action === 'update-import') {
      importWindow = Ext.create('EPCM.view.common.window.Import', {
        title: '更新导入',
        mode: 'update',
        queryForm: queryForm,
        url: that.postUrl
      });
    }

    importWindow.show();
  }
});