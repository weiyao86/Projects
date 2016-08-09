Ext.define('EPCM.view.system.dataAuthority.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.dataauthorityquery',
  items: [{
    items: [{
      fieldLabel: '品牌名称',
      name: 'name'
    }]
  }]
});