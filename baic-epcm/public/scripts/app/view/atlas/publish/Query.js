Ext.define('EPCM.view.atlas.publish.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.publishquery',
  items: [{
    items: [{
      fieldLabel: '品牌名称',
      name: 'name'
    }]
  }]
});