Ext.define('EPCM.view.part.group.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  title: '主组',
  updateDisableItems: ['code'],
  items: [{
    items: [{
      fieldLabel: '主组编码',
      name: 'code'
    }, {
      fieldLabel: '主组名称',
      name: 'name'
    }]
  }]
});