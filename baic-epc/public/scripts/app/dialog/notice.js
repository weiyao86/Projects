define(['grid', 'search', 'paging', 'jquery', 'jqExtend'], function(Grid, Search, Paging) {

	var Notice = function () {
		this.init();
	};

	Notice.prototype = {

		init: function () {
			var self = this;

			self.initComponent();
		},

		initComponent: function () {
			var self = this;

			self.search = new Search();
			self.grid = new Grid();
			self.Paging = new Paging();
		},

		open: function () {
			var self = this;

			$.showBlockUI({
				message: $('#notice-search-dialog'),
				name: 'notice-search'
			});
		}

	};

	return Notice;

});