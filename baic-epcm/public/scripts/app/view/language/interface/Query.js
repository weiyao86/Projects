Ext.define('EPCM.view.language.interface.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.interfacequery',
  items: [{
    items: [{
      fieldLabel: '品牌名称',
      name: 'name'
    }]
  }]
});