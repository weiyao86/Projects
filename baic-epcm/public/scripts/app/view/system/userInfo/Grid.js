Ext.define('EPCM.view.system.userInfo.Grid', {
  extend: 'EPCM.view.common.grid.Grid',
  alias: 'widget.userinfogrid',
  store: 'EPCM.store.system.UserInfo',
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
    text: '保存顺序更改',
    iconCls: 'icon-save',
    action: 'save-sort',
    postUrl: '/brand/sort',
    handler: function (that) {
      this.up('grid').toolbarButtonsClick(that);
    }
  }],
  columns: [{
    text: '品牌编码',
    dataIndex: 'code',
    flex: 1
  }, {
    text: '配件名称',
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