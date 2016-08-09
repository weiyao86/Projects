Ext.define('EPCM.view.system.role.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.rolequery',
  items: [{
    items: [{
      fieldLabel: '品牌名称',
      name: 'name'
    }]
  }]
});