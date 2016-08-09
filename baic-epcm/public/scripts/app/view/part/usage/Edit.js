Ext.define('EPCM.view.part.usage.Edit', {
  extend: 'Ext.ux.component.edit.Edit',
  requires: [
    'Ext.ux.component.combo.BaseCombo',
    'Ext.ux.component.datepicker.GroupDatePicker'
  ],
  title: '整编用法',
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
        fieldLabel: '整车编码',
        name: 'code'
      }, {
        xtype: 'basecombo',
        fieldLabel: '车系',
        name: 'group',
        storeAutoLoad: true,
        withAll: true,
        url: EPCM.globalConfig.restpath + '/selectorList/brand',
        value: ''
      }]
    }, {
      items: [{
        xtype: 'basecombo',
        fieldLabel: '车型',
        name: 'group',
        storeAutoLoad: true,
        withAll: true,
        url: EPCM.globalConfig.restpath + '/selectorList/brand',
        value: ''
      }, {
        xtype: 'basecombo',
        fieldLabel: '主组',
        name: 'group',
        storeAutoLoad: true,
        withAll: true,
        url: EPCM.globalConfig.restpath + '/selectorList/brand',
        value: ''
      }]
    }, {
      items: [{
        xtype: 'basecombo',
        fieldLabel: '分组',
        name: 'group',
        storeAutoLoad: true,
        withAll: true,
        url: EPCM.globalConfig.restpath + '/selectorList/brand',
        value: ''
      }, {
        fieldLabel: '爆炸图编号',
        name: 'code',
        allowBlank: true
      }]
    }, {
      items: [{
        fieldLabel: '标号',
        name: 'code',
        allowBlank: true
      }, {
        fieldLabel: '用量',
        name: 'name',
        allowBlank: true
      }]
    }, {
      items: [{
        fieldLabel: '配件件号',
        name: 'code',
        allowBlank: true
      }, {
        fieldLabel: '配件用法名称',
        name: 'name',
        allowBlank: true
      }]
    }, {
      items: [{
        xtype: 'datefield',
        fieldLabel: '开始时间',
        startName: 'startDateMin'
      }, {
        xtype: 'datefield',
        fieldLabel: '结束时间',
        endName: 'endDateMax'
      }]
    }, {
      items: [{
        xtype: 'textarea',
        fieldLabel: '用法备注',
        name: 'code',
        allowBlank: true
      }]
    }]
  }]
});