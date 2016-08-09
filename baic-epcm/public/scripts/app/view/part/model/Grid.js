Ext.define('EPCM.view.part.model.Grid', {
  extend: 'EPCM.view.common.grid.Grid',
  alias: 'widget.modelgrid',
  store: 'EPCM.store.part.Model',
  rownumberer: true,
  allowRowDrag: true,
  controlButtons: ['update', 'destroy'],
  tbar: [{
    xtype: 'button',
    text: '新增',
    action: 'create',
    iconCls: 'icon-min-add',
    handler: function(that) {
      this.up('grid').toolbarButtonsClick(that);
    }
  }, '-', {
    xtype: 'button',
    text: '修改',
    singleSelectEnable: true,
    action: 'update',
    disabled: true,
    iconCls: 'icon-min-edit',
    handler: function(that) {
      this.up('grid').toolbarButtonsClick(that);
    }
  }, '-', {
    xtype: 'button',
    text: '删除',
    iconCls: 'icon-delete',
    action: 'destroy',
    disabled: true,
    handler: function(that) {
      this.up('grid').toolbarButtonsClick(that);
    }
  }, '-', {
    xtype: 'button',
    text: '新增导入',
    iconCls: 'icon-import-excel',
    action: 'create-import',
    postUrl: '/model/create/import',
    handler: function(that) {
      this.up('grid').toolbarButtonsClick(that);
    }
  }, '-', {
    xtype: 'button',
    text: '更新导入',
    iconCls: 'icon-import-excel',
    action: 'update-import',
    postUrl: '/model/update/import',
    handler: function(that) {
      this.up('grid').toolbarButtonsClick(that);
    }
  }, '-', {
    xtype: 'button',
    text: '导出查询结果',
    iconCls: 'icon-export-excel',
    action: 'export',
    exportUrl:'/part/model/filterExport',
    handler: function(that) {
      this.up('grid').toolbarButtonsClick(that);
    }
  }, '-', {
    xtype: 'button',
    text: '保存顺序更改',
    iconCls: 'icon-save',
    action: 'save-sort',
    postUrl: '/part/brand/sort',
    handler: function(that) {
      this.up('grid').toolbarButtonsClick(that);
    }
  }],
  columns: [{
    text: '品牌名称',
    dataIndex: 'brandName',
    flex: 1
  }, {
    text: '车系名称',
    dataIndex: 'seriesName',
    flex: 1
  }, {
    text: '车型编码',
    dataIndex: 'code',
    flex: 1
  }, {
    text: '车型名称',
    dataIndex: 'name',
    flex: 1
  }, {
    text: '排序号',
    dataIndex: 'sort',
    flex: 1
  }, {
    text: '创建人',
    dataIndex: 'createdBy',
    flex: 1
  }, {
    text: '创建时间',
    dataIndex: 'createdOn',
    flex: 1
  }, {
    text: '修改人',
    dataIndex: 'modifiedBy',
    flex: 1
  }, {
    text: '修改时间',
    dataIndex: 'modifiedOn',
    flex: 1
  }]
});