Ext.define('EPCM.view.part.partStatus.Query', {
  extend: 'Ext.ux.component.filter.Query',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  alias: 'widget.partstatusquery',
  items: [{
    items: [{
      fieldLabel: '配件件号',
      name: 'name'
    }, {
      fieldLabel: '配件名称',
      name: 'name'
    }, {
      fieldLabel: '照片数量',
      name: 'name'
    }]
  }]
});