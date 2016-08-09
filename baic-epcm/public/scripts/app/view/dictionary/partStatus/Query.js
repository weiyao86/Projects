Ext.define('EPCM.view.dictionary.partStatus.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.dpartstatusquery',
  items: [{
    items: [{
      fieldLabel: '品牌名称',
      name: 'name'
    }]
  }]
});