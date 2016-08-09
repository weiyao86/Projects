require(['ajax', 'jqExtend', 'jquery', 'domReady!'], function() {
	var defaults = {
			body: "body_pwdinfo"
		},
		PwdInfo = {

			init: function() {
				var self = this;
				self.buildDom();
				self.bindEvent();
			},

			buildDom: function() {
				var self = this;
				self.$body = $("#" + defaults.body);
			},

			bindEvent: function() {
				var self = this;
				self.$body.find("[placeholder]").initPlaceholder();
			}
		};

	PwdInfo.init();
});