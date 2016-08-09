define(['grid','jquery'], function (Grid) {

	var Supplier = function () {
		this.init();
	};

	Supplier.prototype = {

		init: function () {
			var self = this;

			self.initComponent();
		},

		initComponent: function () {
			var self = this;

			self.grid = new Grid({
				gridWrapId: 'supplier-table'
			});
			self.grid.load();
		}

	};

	return Supplier;

});