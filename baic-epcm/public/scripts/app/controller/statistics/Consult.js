Ext.define('EPCM.controller.statistics.Consult', {
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
        case 'save-sort':
            me.saveSort(that);
          break;
        default:
          break;
      }
    });
  },

  deleteRecord: function () {
    var me = this,
      grid = me.getGrid(),
      records = grid.getSelectionModel().getSelection(),
      idList = [];

    for (var i = 0; i < records.length; i++) {
      idList.push(records[i].get('id'));
    }

    if (records.length > 0) {
      Ext.util.ajax({
        url: EPCM.globalConfig.restpath + '/part/brand',
        method: 'DELETE',
        jsonData: idList,
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