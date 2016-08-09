define(['grid', 'kitDetail', 'jquery'], function (Grid, KitDetail) {

	var Kit = function () {
		this.init();
	};

	Kit.prototype = {

		init: function () {
			var self = this;

			self.initComponent();
		},

		initComponent: function () {
			var self = this;

			self.grid = new Grid({
				gridWrapId: 'kit-table',
				callbacks: {
					onRowClicked: function (selections, e) {
						var $target = $(e.target);
						if($target.attr('data-action') === 'view-detail') {
							self.kitDetail.open({'kitCode': $target.attr('data-partCode')});
						}
					}
				}
			});
			self.grid.load();

			self.kitDetail = new KitDetail();
		}

	};

	return Kit;

});