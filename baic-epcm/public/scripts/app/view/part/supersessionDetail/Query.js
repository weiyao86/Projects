Ext.define('EPCM.view.part.supersessionDetail.Query', {
  extend: 'Ext.ux.component.filter.Query',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  alias: 'widget.supersessiondetailquery',
  items: [{
    items: [{
      fieldLabel: '替换组编码',
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