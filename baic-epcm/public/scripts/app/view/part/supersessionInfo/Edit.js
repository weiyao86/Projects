Ext.define('EPCM.view.part.supersessionInfo.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  title: '替换信息',
  updateDisableItems: ['id'],
  width: 520,
  items: [{
    xtype: 'form',
    layout: {
      type: 'vbox'
    },
    defaults: {
      width: '100%',
      layout: {
        type: 'hbox'
      },
      border: false,
      defaults: {
        xtype: "textfield",
        margin: '0 10 5 0',
        labelWidth: 70,
        labelPad: 10,
        flex: 1,
        allowBlank: false,
        labelAlign: 'left'
      }
    },
    items: [{
      items: [{
        fieldLabel: '新配件号',
        name: 'code'
      }, {
        fieldLabel: '旧配件号',
        name: 'code'
      }]
    }, {
      items: [{
        xtype: 'basecombo',
        fieldLabel: '替换类型',
        name: 'group',
        storeAutoLoad: true,
        withAll: true,
        url: EPCM.globalConfig.restpath + '/selectorList/brand',
        value: ''
      }, {
        xtype: 'datefield',
        fieldLabel: '替换时间',
        endName: 'endDateMax'
      }]
    }, {
      items: [{
        fieldLabel: '旧件起始VIN',
        name: 'code',
        allowBlank: true
      }, {
        fieldLabel: '旧件终止VIN',
        name: 'code',
        allowBlank: true
      }]
    }, {
      items: [{
        xtype: 'textarea',
        fieldLabel: '替换备注',
        name: 'code',
        allowBlank: true
      }, {
        xtype: 'textarea',
        fieldLabel: '断点信息',
        name: 'name',
        allowBlank: true
      }]
    }]
  }]
});