Ext.define('EPCM.view.part.partStatus.Grid', {
  extend: 'EPCM.view.common.grid.Grid',
  alias: 'widget.partstatusgrid',
  store: 'EPCM.store.part.PartStatus',
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
    text: '配件件号',
    dataIndex: 'code',
    width: 140
  }, {
    text: '配件名称',
    dataIndex: 'name',
    width: 140
  }, {
    text: '生产件号',
    dataIndex: 'designPartNumber',
    width: 140
  }, {
    text: '照片数量',
    dataIndex: 'photoCount',
    width: 140
  }, {
    text: '配件备注',
    dataIndex: 'sort',
    width: 140
  }, {
    text: '配件状态',
    dataIndex: 'statusName',
    width: 140
  }, {
    text: '配件类型编码',
    dataIndex: 'typeCode',
    width: 140
  }, {
    text: '配件类型名称',
    dataIndex: 'typeName',
    width: 140
  }, {
    text: '特殊采购标识',
    dataIndex: 'specialPurchaseTag',
    width: 140
  }, {
    text: '特殊采购备注',
    dataIndex: 'specialPurchaseNote',
    width: 140
  }, {
    text: '重量',
    dataIndex: 'weight',
    width: 140
  }, {
    text: '长',
    dataIndex: 'length',
    width: 140
  }, {
    text: '宽',
    dataIndex: 'width',
    width: 140
  }, {
    text: '高',
    dataIndex: 'height',
    width: 140
  }, {
    text: '规格型号',
    dataIndex: 'dimensionNo',
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