Ext.define('SPDM.view.modelRelate.modelManage.specification.Specification', {
	extend: 'Ext.panel.Panel',
	mixins: {
		viewBase: 'SPDM.view.common.class.Base'
	},
	requires: ['SPDM.view.modelRelate.modelManage.specification.Grid'],
	alias: 'widget.partstructurestandardnamespecificationspecification',
	layout: 'fit',
	items: [{
		xtype: 'partstructurestandardnamespecificationgrid',
		itemId: 'specificationGrid'
	}],

	afterRender: function() {
		var me = this;

		me.grid = me.down("[itemId=specificationGrid]");
		me.controller = me.getController('modelRelate.ModelManage');

		me.callParent(arguments);
	},

	initEvents: function() {
		var me = this;

		me.grid.on({
			createRecord: function() {
				var params = me.controller.structureTree.getSelectionNodeParams(['id', 'text', 'type']);

				me.openEditWin({
					nodeId: params.id,
					nodeType: params.type,
					nodeDesc: params.text
				}, 'create');
			},
			updateRecord: function() {
				var params = me.getUpdateParams();

				me.openEditWin(params, 'update');
			},
			deleteRecord: function() {
				me.deleteRecord();
			}
		});
	},

	getUpdateParams: function() {
		var me = this,
			records = me.grid.getSelectionModel().getSelection(),
			params = me.controller.structureTree.getSelectionNodeParams(['id', 'text', 'type']);

		if (records.length > 0) {
			return {
				nodeId: params.id,
				nodeType: params.type,
				nodeDesc: params.text,
				namezh: records[0].get('namezh'),
				nameen: records[0].get('nameen'),
				initiazh: records[0].get('initiazh'),
				initiaen: records[0].get('initiaen'),
				remark: records[0].get('remark'),
				id: records[0].get('id'),
				specGroupId: records[0].get('specGroupId'),
				specId: records[0].get('specId'),
				specvalId: records[0].get('specvalId')
			};
		}
	},

	load: function(params) {
		var me = this,
			id = params.id,
			store = me.grid.getStore();

		me.setBtnStatus(id);

		me.grid.getSelectionModel().clearSelections();

		me.grid.setLoading(true);

		store.proxy.extraFilters = {
			nodeId: id
		};

		store.loadPage(1, {
			callback: function(records, operation, success) {
				me.grid.setLoading(false);
			}
		});
	},

	resetSpecification: function() {
		var me = this,
			store;
		if (me.grid) {
			store = me.grid.getStore();
			store.loadData([], false);
			me.setBtnStatus();
		}
	},

	setBtnStatus: function(id) {
		var me = this,
			flag = !!id;
		me.grid.down("[action=create]").setDisabled(!flag);
	},

	openEditWin: function(params, action) {
		var me = this,
			editWin = Ext.create('SPDM.view.modelRelate.modelManage.specification.Edit', {
				editMode: action
			});

		editWin.down('form').getForm().setValues(params);

		editWin.on('doSave', function(params) {
			switch (action) {
				case 'create':
					me.createRecord(editWin, params);
					break;
				case 'update':
					me.updateRecord(editWin, params);
					break;
				default:
					break;
			}
		});

		editWin.show();
	},

	createRecord: function(editWin, params) {
		var me = this,
			store = me.grid.getStore();

		Ext.util.ajax({
			url: me.controller.baseDomainUrl + 'node/spec/save',
			method: 'POST',
			jsonData: params,
			beforerequest: function() {
				editWin.setLoading(true);
			},
			callback: function() {
				editWin.setLoading(false);
			},
			success: function() {
				Ext.Msg.alert('提示', "添加成功!", function() {
					editWin.close();
					store.reload();
				});
			}
		});
	},

	updateRecord: function(editWin, params) {
		var me = this,
			store = me.grid.getStore();

		Ext.util.ajax({
			url: me.controller.baseDomainUrl + 'node/spec/edit',
			method: 'POST',
			jsonData: params,
			beforerequest: function() {
				editWin.setLoading(true);
			},
			callback: function() {
				editWin.setLoading(false);
			},
			success: function() {
				Ext.Msg.alert('提示', "修改成功!", function() {
					editWin.close();
					store.reload();
				});
			}
		});
	},

	deleteRecord: function() {
		var me = this;

		Ext.Msg.confirm("提示", "确认删除被选中记录?", function(btn) {
			if (btn === 'yes') {
				var store = me.grid.getStore(),
					params = me.getDeleteParams();

				Ext.util.ajax({
					url: me.controller.baseDomainUrl + 'node/spec/delete',
					method: 'POST',
					jsonData: params,
					beforerequest: function() {
						me.grid.setLoading(true);
					},
					callback: function() {
						me.grid.setLoading(false);
					},
					success: function() {
						store.loadPage(1);
					}
				});
			}
		});
	},

	getDeleteParams: function() {
		var me = this,
			ids = [],
			records = me.grid.getSelectionModel().getSelection(),
			id = me.controller.structureTree.getSelectionNodeParams(['id']).id;

		Ext.each(records, function(record) {
			ids.push(record.get('id'));
		});

		return {
			ids: ids,
			nodeId: id
		};
	}
});