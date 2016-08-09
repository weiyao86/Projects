Ext.define('EPCM.view.part.supersessionInfo.Query', {
  extend: 'Ext.ux.component.filter.Query',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  alias: 'widget.supersessioninfoquery',
  items: [{
    items: [{
      fieldLabel: '配件件号',
      name: 'name'
    }, {
      fieldLabel: '配件名称',
      name: 'name'
    }]
  }]
});