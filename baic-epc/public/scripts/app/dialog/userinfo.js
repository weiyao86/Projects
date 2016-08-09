define(['ajax', 'blockUI', 'jqExtend', 'jquery'], function (ajax) {

	var Userinfo = function () {
		this.init();
	};

	Userinfo.prototype = {

		init: function () {},

		bindEls: function () {},

		bindEvent: function () {},

		open: function () {
			var self = this;

			$.showBlockUI({
				message: $('#user-info-dialog'),
				name: 'user-info'
			});
		}

	};

	return Userinfo;

});