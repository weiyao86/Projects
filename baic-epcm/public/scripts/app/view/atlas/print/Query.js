Ext.define('EPCM.view.atlas.print.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.printquery',
  items: [{
    items: [{
      fieldLabel: '品牌名称',
      name: 'name'
    }]
  }]
});