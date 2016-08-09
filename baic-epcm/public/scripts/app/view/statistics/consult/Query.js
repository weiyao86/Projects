Ext.define('EPCM.view.statistics.consult.Query', {
  extend: 'Ext.ux.component.filter.Query',
  alias: 'widget.statisticsconsultquery',
  items: [{
    items: [{
      fieldLabel: '品牌名称',
      name: 'name'
    }]
  }]
});