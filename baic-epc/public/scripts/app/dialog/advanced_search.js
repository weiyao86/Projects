define(['grid', 'search', 'paging', 'jquery', 'jqExtend'], function(Grid, Search, Paging) {

	var AdvancedSearch = function () {
		this.init();
	};

	AdvancedSearch.prototype = {

		init: function () {
			var self = this;

			self.bindEls();
			self.bindEvent();
			self.initComponent();
		},

		bindEls: function () {
			var self = this;

			self.$dialog = $('#advanced-search-dialog');
			self.$query = $('#advanced-search-query');
		},

		bindEvent: function () {
			var self = this;


		},

		initComponent: function () {
			var self = this;

			self.search = new Search({
				searchWrapId: 'advanced-search-query',
				selectFields: [{
						name: 'brandCode',
						root: 'list',
						clearTargets: ['seriesCode', 'modelCode', 'subModelCode', 'groupCode', 'subGroupCode'],
						nextTargets: ['seriesCode'],
						noParams: true
					}, {
						name: 'seriesCode',
						depend: ['brandCode'],
						root: 'list',
						clearTargets: ['modelCode', 'subModelCode', 'groupCode', 'subGroupCode'],
						nextTargets: ['modelCode']
					}, {
						name: 'modelCode',
						depend: ['seriesCode'],
						root: 'list',
						clearTargets: ['subModelCode', 'groupCode', 'subGroupCode'],
						nextTargets: ['subModelCode']
					}, {
						name: 'subModelCode',
						depend: ['modelCode'],
						root: 'list',
						clearTargets: ['subGroupCode'],
						nextTargets: ['groupCode']
					}, {
						name: 'groupCode',
						depend: ['subModelCode'],
						root: 'list',
						clearTargets: ['subGroupCode'],
						nextTargets: ['subGroupCode']
					}, {
						name: 'subGroupCode',
						depend: ['groupCode'],
						root: 'list'
					}]
			});
			self.paging = new Paging({
				pagingWrapId: 'advanced-search-paging'
			});
			self.grid = new Grid({
				gridWrapId: 'advanced-search-grid',
				search: self.search,
				paging: self.paging
			});
		},

		open: function (params) {
			var self = this;

			params ? self.search.setFieldsVal(params) : self.search.loadDropDownData();
			//self.grid.load();
			$.showBlockUI({
				message: $('#advanced-search-dialog'),
				name: 'advanced-search',
				callbacks: {
					onClosed: function () {
						self.search.reset();
					}
				}
			});
		}

	};

	return AdvancedSearch;

});