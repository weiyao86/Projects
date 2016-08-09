Ext.define('EPCM.view.part.keyPart.Query', {
  extend: 'Ext.ux.component.filter.Query',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  alias: 'widget.keypartquery',
  items: [{
    items: [{
      fieldLabel: 'VIN',
      name: 'name'
    }, {
      fieldLabel: '生产件件号',
      name: 'name'
    }]
  }]
});