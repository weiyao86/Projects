Ext.define('EPCM.view.part.reorganizeModel.Grid', {
  extend: 'EPCM.view.common.grid.Grid',
  alias: 'widget.reorganizemodelgrid',
  store: 'EPCM.store.part.ReorganizeModel',
  rownumberer: true,
  controlButtons: ['update', 'destroy'],
  tbar: [{
    xtype: 'button',
    text: '新增',
    action: 'create',
    iconCls: 'icon-min-add',
    handler: function (that) {
      this.up('grid').toolbarButtonsClick(that);
    }
  }, '-', {
    xtype: 'button',
    text: '修改',
    singleSelectEnable: true,
    action: 'update',
    disabled: true,
    iconCls: 'icon-min-edit',
    handler: function (that) {
      this.up('grid').toolbarButtonsClick(that);
    }
  }, '-', {
    xtype: 'button',
    text: '删除',
    iconCls: 'icon-delete',
    action: 'destroy',
    disabled: true,
    handler: function (that) {
      this.up('grid').toolbarButtonsClick(that);
    }
  }, '-', {
    xtype: 'button',
    text: '新增导入',
    iconCls: 'icon-import-excel',
    action: 'create-import',
    postUrl: '/reorganizeModel/import',
    handler: function (that) {
      this.up('grid').toolbarButtonsClick(that);
    }
  }, '-', {
    xtype: 'button',
    text: '更新导入',
    iconCls: 'icon-import-excel',
    action: 'update-import',
    postUrl: '/reorganizeModel/import',
    handler: function (that) {
      this.up('grid').toolbarButtonsClick(that);
    }
  }, '-', {
    xtype: 'button',
    text: '导出查询结果',
    iconCls: 'icon-export-excel',
    action: 'export',
    handler: function (that) {
      this.up('grid').toolbarButtonsClick(that);
    }
  }],
  columns: [{
    text: '品牌名称',
    dataIndex: 'brandName',
    width: 200
  }, {
    text: '车系编码',
    dataIndex: 'seriesCode',
    width: 200
  }, {
    text: '车型组编码',
    dataIndex: 'modelGroupCode',
    width: 200
  }, {
    text: '车型组名称',
    dataIndex: 'modelGroupName',
    width: 200
  }, {
    text: '整车车型编码',
    dataIndex: 'code',
    width: 200
  }, {
    text: '整车车型名称',
    dataIndex: 'name',
    width: 200
  }, {
    text: '创建人',
    dataIndex: 'createdBy',
    width: 200
  }, {
    text: '创建时间',
    dataIndex: 'createdOn',
    width: 200
  }, {
    text: '修改人',
    dataIndex: 'modifiedBy',
    width: 200
  }, {
    text: '修改时间',
    dataIndex: 'modifiedOn',
    width: 200
  }]
});