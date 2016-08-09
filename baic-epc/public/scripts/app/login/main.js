require(['ajax', 'jqExtend', 'select', 'jquery', 'domReady!'], function(ajax) {
	var logInUrl = "/login",
		catalogUrl = "/catalog",
		login = {
			init: function() {
				var self = this;

				self.buildDom();
				self.bindEvent();
			},
			buildDom: function() {
				var self = this;

				self.$container = $('#container');
				self.$btnLogin = $('#btn_login');
				self.$account = $('#account');
				self.$password = $('#password');

				self.$msgBox = $('#msg');
				self.$msg = self.$msgBox.find("[data-msg]");
			},
			bindEvent: function() {
				var self = this;

				self.$container.on("keyup", "input", function(e) {
					if (e.keyCode === 13) {
						self.submit();
					} else {
						self.hideMsg();
					}
				});
				self.$btnLogin.on('click', function() {
					self.submit();
				});
			},

			submit: function() {
				var self = this,
					data = self.$container.selectElByField(),
					rst = self.validata(data);
				if (rst.success) {
					self.logIn(data);
				} else {
					self.showMsg(rst.msg);
				}
			},

			validata: function(data) {
				var self = this,
					rst = {
						success: true,
						msg: ''
					};
				if ($.trim(data.usercode) === "") {
					rst.success = false;
					rst.msg = "帐号为必填项";
				} else if ($.trim(data.password) === "") {
					rst.success = false;
					rst.msg = "密码为必填项";
				}

				return rst;
			},

			logIn: function(data) {
				var self = this;
				ajax.invoke({
					url: logInUrl,
					type: 'post',
					contentType: 'application/json',
					data: JSON.stringify(data),
					success: function(res) {
						if (res.status === 200) {
							window.location.href = catalogUrl;
						} else {
							self.showMsg(res.message);
						}
					}
				});
			},

			showMsg: function(msg) {
				var self = this;
				self.$msgBox.stop(false, true).fadeIn();
				self.$msg.html(msg);
			},

			hideMsg: function() {
				var self = this;
				self.$msgBox.stop(false, true).fadeOut();
			}
		};

	login.init();

});