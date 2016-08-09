Ext.define('EPCM.view.part.repairDetail.Query', {
  extend: 'Ext.ux.component.filter.Query',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  alias: 'widget.repairdetailquery',
  items: [{
    items: [{
      fieldLabel: '维修包件号',
      name: 'name'
    }, {
      fieldLabel: '维修包名称',
      name: 'name'
    }, {
      fieldLabel: '配件件号',
      name: 'name'
    }, {
      fieldLabel: '配件名称',
      name: 'name'
    }]
  }]
});