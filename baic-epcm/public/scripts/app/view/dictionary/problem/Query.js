Ext.define('EPCM.view.dictionary.problem.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.problemquery',
  items: [{
    items: [{
      fieldLabel: '品牌名称',
      name: 'name'
    }]
  }]
});