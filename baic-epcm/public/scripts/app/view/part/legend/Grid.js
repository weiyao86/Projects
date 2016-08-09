Ext.define('EPCM.view.part.legend.Grid', {
  extend: 'EPCM.view.common.grid.Grid',
  alias: 'widget.legendgrid',
  store: 'EPCM.store.part.Legend',
  rownumberer: true,
  allowRowDrag: true,
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
    handler: function (that) {
      this.up('grid').toolbarButtonsClick(that);
    }
  }, '-', {
    xtype: 'button',
    text: '更新导入',
    iconCls: 'icon-import-excel',
    action: 'update-import',
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
  }, '-', {
    xtype: 'button',
    text: '保存顺序更改',
    iconCls: 'icon-save',
    action: 'save-sort',
    postUrl: '/part/legend/sort',
    handler: function(that) {
      this.up('grid').toolbarButtonsClick(that);
    }
  }],
  columns: [{
    text: '品牌名称',
    dataIndex: 'brandName',
    width: 140
  }, {
    text: '车系名称',
    dataIndex: 'seriesName',
    width: 140
  }, {
    text: '主组编码',
    dataIndex: 'groupCode',
    width: 140
  }, {
    text: '主组名称',
    dataIndex: 'groupName',
    width: 140
  }, {
    text: '分组编码',
    dataIndex: 'subGroupCode',
    width: 140
  }, {
    text: '分组名称',
    dataIndex: 'subGroupName',
    width: 140
  }, {
    text: '爆炸图编号',
    dataIndex: 'code',
    width: 140
  }, {
    text: '爆炸图名称',
    dataIndex: 'name',
    width: 140
  }, {
    text: '爆炸图备注',
    dataIndex: 'note',
    width: 140
  }, {
    text: 'SVG文件名',
    dataIndex: 'svgFilename',
    width: 140
  }, {
    text: 'GIF文件名',
    dataIndex: 'gifFilename',
    width: 140
  }, {
    text: '排序号',
    dataIndex: 'sort',
    width: 140
  }, {
    text: '创建人',
    dataIndex: 'createdBy',
    width: 140
  }, {
    text: '创建时间',
    dataIndex: 'createdOn',
    width: 140
  }, {
    text: '修改人',
    dataIndex: 'modifiedBy',
    width: 140
  }, {
    text: '修改时间',
    dataIndex: 'modifiedOn',
    width: 140
  }]
});