Ext.define('EPCM.view.system.userInfo.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.userinfoquery',
  items: [{
    items: [{
      fieldLabel: '品牌名称',
      name: 'name'
    }]
  }]
});