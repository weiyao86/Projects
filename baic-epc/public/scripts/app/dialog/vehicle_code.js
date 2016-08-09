define(['ajax', 'mustache', 'jquery'], function (ajax, Mustache) {

	var VehicleCode = function () {
		this.init();
	};

	VehicleCode.prototype = {

		init: function () {
			var self = this;

			self.bindEls();
			self.bindAttr();
			self.bindEvent();
		},

		bindEls: function () {
			var self = this;

			self.$dialog = $('#vehicle-code-dialog');
			self.$query = $('#vehicle-code-query');
			self.$result = $('#vehicle-code-result');
			self.$btnSearch = self.$dialog.find('[data-id=search]');
			self.$btnClear = self.$dialog.find('[data-id=reset]');
		},

		bindAttr: function () {
			var self = this;

			self.template = self.$result.find('script').html();
		},

		bindEvent: function () {
			var self = this;

			self.$btnSearch.click(function () {
				self.load();
			});

			self.$btnClear.click(function () {
				self.$query.find('input[data-name]').val('');
			});
		},

		load: function () {
			var self = this,
				val = self.$query.find('[data-name=vehicleCode]').val();

			ajax.invoke({
				url: '../search/vehicleSearch?vehicleCode=' + val,
				success: function (data) {
					self.render(data);
				}
			});
		},

		render: function (data) {
			var self = this,
				output = Mustache.render(self.template, {record: data});

			self.$result.html(output);
		},
		
		fillSearch: function (obj) {
			var self = this,
				$el;

			if(!obj) return false;

			$el = self.$query.find('[data-name=' + obj.key + ']');
			if($el.length > 0) $el.val(obj.val);
		},

		open: function (obj) {
			var self = this;

			self.fillSearch(obj);
			self.load();

			$.showBlockUI({
				message: self.$dialog,
				name: 'vehicle-code'
			});
		}

	};

	return VehicleCode;

});