Ext.define('EPCM.controller.part.PartSupplier', {
  extend: 'Ext.ux.controller.CRUD',
  viewportReady: function () {
    var me = this;

    this.initSubEvents();
    this.callParent(arguments);
  },
  initSubEvents: function () {
    var me = this,
      grid = me.getGrid();

    grid.on('toolbarclick', function (that) {
      switch (that.action) {
        case 'delete':
          Ext.Msg.confirm('提示', '确认要删除该条记录？', function (btn) {
            if (btn === 'yes') {
              me.deleteRecord();
            }
          });
          break;
        default:
          break;
      }
    });
  },

  deleteRecord: function () {
    var me = this,
      grid = me.getGrid(),
      records = grid.getSelectionModel().getSelection();

    if (records.length > 0) {
      Ext.util.ajax({
        url: EPCM.globalConfig.restpath + '/part/brand/' + records[0].get('brandCode'),
        method: 'DELETE',
        beforerequest: function () {
          grid.setLoading('删除中,请稍候...');
        },
        callback: function () {
          grid.setLoading(false);
        },
        success: function () {
          me.statusUpdateFinish();
        }
      });
    }
  },

  statusUpdateFinish: function () {
    var me = this,
      grid = me.getGrid(),
      store = grid.getStore();

    store.loadPage(1);
    grid.controlToolbarStatus(grid, []);
    grid.getSelectionModel().clearSelections();
  }

});