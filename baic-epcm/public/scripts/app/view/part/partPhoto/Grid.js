Ext.define('EPCM.view.part.partPhoto.Grid', {
  extend: 'EPCM.view.common.grid.Grid',
  alias: 'widget.partphotogrid',
  store: 'EPCM.store.part.PartPhoto',
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
  }],
  columns: [{
    text: '主组编码',
    dataIndex: 'groupId',
    flex: 1
  }, {
    text: '主组名称',
    dataIndex: 'groupName',
    flex: 1
  }, {
    text: '分组编码',
    dataIndex: 'id',
    flex: 1
  }, {
    text: '分组名称',
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