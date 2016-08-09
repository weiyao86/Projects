Ext.define('EPCM.view.language.data.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.dataquery',
  items: [{
    items: [{
      fieldLabel: '品牌名称',
      name: 'name'
    }]
  }]
});