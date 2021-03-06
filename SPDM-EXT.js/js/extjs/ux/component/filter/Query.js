﻿Ext.define('Ext.ux.component.filter.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.componentfilterquery',
    bodyPadding: '10 10 0 10',
    autoScroll: true,
    autoLabelWidth: true,
    defaults: {
        layout: 'hbox',
        border: false,
        minWidth: 980,
        margin: '0 0 10 0',
        defaults: {
            xtype: 'textfield',
            margin: '0 10 0 0',
            enableKeyEvents: true
        }
    },
    itemId: "query-form",
    dockedItems: [{
        xtype: 'toolbar',
        ui: "footer",
        dock: 'bottom',
        layout: {
            align: 'middle',
            pack: 'center',
            type: 'hbox'
        },
        items: [{
            xtype: 'button',
            action: "query",
            text: "查询",
            iconCls: 'icon-find'
        }, {
            xtype: 'button',
            action: "reset",
            text: "重置",
            iconCls: 'icon-reset'
        }]
    }],

    constructor: function() {
        var me = this;

        if (me.bbrExtendItems) {
            me.extendBbrItems();
        }
        if (me.bbrOverrideItems) {
            me.overrideBarItems();
        }

        me.callParent(arguments);
    },

    initComponent: function() {
        var me = this;

        me.callParent(arguments);

        if (me.autoLabelWidth) {
            me.autoMetricsLabelWidth();
        }
    },

    autoMetricsLabelWidth: function() {
        var me = this,
            boxWidth = 120,
            labelPad = 5,
            fields = me.query("field"),
            tm = new Ext.util.TextMetrics();

        Ext.each(fields, function(item) {
            var labelWidth = tm.getWidth(item.fieldLabel + ':');

            if (item.range == 'end') {
                item.labelWidth = 0;
                item.width = boxWidth;
            } else {
                item.labelWidth = labelWidth;
                item.width = labelWidth + boxWidth + labelPad;
            }
        });
    },

    initEvents: function() {
        var me = this,
            fields = me.query("field"),
            btnQuery = me.down("[action=query]"),
            btnReset = me.down("[action=reset]"),
            btnAdvancedQuery = me.down("[action=advanced-query]");

        if (btnQuery) {
            btnQuery.on("click", function() {
                me.doQuery();
            });
        }
        if (btnReset) {
            btnReset.on("click", function() {
                me.doReset();
            });
        }
        if (btnAdvancedQuery) {
            btnAdvancedQuery.on("click", function() {
                me.doAdvancedQuery();
            });
        }
        Ext.each(fields, function(item) {
            item.on("keyup", function(sender, e) {
                if (e.getKey() === e.ENTER) me.doQuery();
            });
        });

        me.callParent(arguments);
    },

    doQuery: function() {
        if (!this.isValid()) return;

        var me = this,
            filters = me.getFilters();

        me.fireEvent('queryRecord', filters);
    },

    doAdvancedQuery: function() {
        var me = this;

        me.fireEvent('advancedQuery');
    },

    doReset: function() {
        var me = this,
            fields = me.query("field");

        Ext.each(fields, function(item) {
            item.setValue("");
        });
    },

    extendBbrItems: function() {
        var me = this,
            superItems = me.superclass.dockedItems[0].items;

        me.superclass.dockedItems[0].items = Ext.Array.merge(superItems, me.bbrExtendItems);
    },

    overrideBarItems: function() {
        this.superclass.dockedItems[0].items = this.bbrOverrideItems;
    },

    getFilters: function() {
        var me = this,
            params = {},
            fields = me.query("field");

        Ext.each(fields, function(item) {
            var value = me.formatValue(item);

            if (!me.isEmptyValue(value)) {
                params[item.name] = value;
            }
        });

        return params;
    },

    isEmptyValue: function(value) {
        var me = this;

        if (value == null || (typeof value == 'string' && value.length == 0)) {
            return true;
        }

        return false;
    },

    formatValue: function(item) {
        var me = this,
            value = item.getValue();

        if (item.xtype === "textfield") {
            return Ext.util.Format.trim(value);
        }
        if (item.xtype === "basecombo" || item.xtype === "combobox") {
            return Ext.isArray(value) ? value.join(",") : value;
        }
        if (item.xtype == "checkbox") {
            return value == true ? 1 : "";
        }

        return value;
    }
});