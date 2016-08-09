Ext.define('EPCM.view.system.enterpriseInfo.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.enterpriseinfoquery',
  items: [{
    items: [{
      fieldLabel: '品牌名称',
      name: 'name'
    }]
  }]
});