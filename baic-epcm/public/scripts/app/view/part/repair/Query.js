Ext.define('EPCM.view.part.repair.Query', {
  extend: 'Ext.ux.component.filter.Query',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  alias: 'widget.repairquery',
  items: [{
    items: [{
      fieldLabel: '隶属总成件号',
      name: 'name'
    }, {
      fieldLabel: '维修包件号',
      name: 'name'
    }]
  }]
});