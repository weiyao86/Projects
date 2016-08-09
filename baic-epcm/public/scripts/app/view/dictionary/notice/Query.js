Ext.define('EPCM.view.dictionary.notice.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.dnoticequery',
  items: [{
    items: [{
      fieldLabel: '品牌名称',
      name: 'name'
    }]
  }]
});