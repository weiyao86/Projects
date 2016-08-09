Ext.define('EPCM.view.system.funcAuthority.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.funcauthorityquery',
  items: [{
    items: [{
      fieldLabel: '品牌名称',
      name: 'name'
    }]
  }]
});