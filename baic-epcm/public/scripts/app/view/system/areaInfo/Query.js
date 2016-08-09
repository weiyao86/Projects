Ext.define('EPCM.view.system.areaInfo.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.areainfoquery',
  items: [{
    items: [{
      fieldLabel: '品牌名称',
      name: 'name'
    }]
  }]
});