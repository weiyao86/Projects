Ext.define('EPCM.view.dictionary.supersession.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.supersessionquery',
  items: [{
    items: [{
      fieldLabel: '品牌名称',
      name: 'name'
    }]
  }]
});