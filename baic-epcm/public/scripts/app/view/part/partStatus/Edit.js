Ext.define('EPCM.view.part.partStatus.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  requires: [
    'Ext.ux.component.combo.BaseCombo'
  ],
  title: '分组',
  updateDisableItems: ['code'],
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
        fieldLabel: '配件件号',
        name: 'code'
      }, {
        fieldLabel: '生产件号',
        name: 'name'
      }]
    }, {
      items: [{
        fieldLabel: '配件名称',
        name: 'code'
      }, {
        xtype: 'basecombo',
        fieldLabel: '配件类型',
        name: 'group',
        storeAutoLoad: true,
        withAll: true,
        url: EPCM.globalConfig.restpath + '/selectorList/brand',
        value: ''
      }]
    }, {
      items: [{
        xtype: 'basecombo',
        fieldLabel: '配件状态',
        name: 'group',
        storeAutoLoad: true,
        withAll: true,
        url: EPCM.globalConfig.restpath + '/selectorList/brand',
        value: ''
      }, {
        fieldLabel: '特殊采购标志',
        name: 'code',
        allowBlank: true
      }]
    }, {
      items: [{
        fieldLabel: '重量',
        name: 'code',
        allowBlank: true
      }, {
        fieldLabel: '长',
        name: 'name',
        allowBlank: true
      }]
    }, {
      items: [{
        fieldLabel: '宽',
        name: 'code',
        allowBlank: true
      }, {
        fieldLabel: '高',
        name: 'name',
        allowBlank: true
      }]
    }, {
      items: [{
        fieldLabel: '规格型号',
        name: 'code',
        allowBlank: true
      }, {
        fieldLabel: '配件备注',
        name: 'name',
        allowBlank: true
      }]
    }, {
      items: [{
        fieldLabel: '特殊采购备注',
        name: 'code',
        allowBlank: true
      }]
    }]
  }]
});