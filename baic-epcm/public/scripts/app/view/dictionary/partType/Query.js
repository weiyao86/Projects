Ext.define('EPCM.view.dictionary.partType.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.dparttypequery',
  items: [{
    items: [{
      fieldLabel: '品牌名称',
      name: 'name'
    }]
  }]
});