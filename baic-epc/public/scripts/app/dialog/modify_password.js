define(['ajax', 'jquery', 'jqExtend'], function (ajax) {

	var ModifyPassword = function () {
		this.init();
	};

	ModifyPassword.prototype = {

		init: function () {
			var self = this;

			self.bindEls();
			self.bindEvent();
		},

		bindEls: function () {
			var self = this;

			self.$oldPassword = $('#old-password');
			self.$newPassword = $('#new-password');
			self.$confirmPassword = $('#confirm-password');
			self.$submit = $('#password-submit');
			self.$cancel = $('#password-cancel');
			self.$tip = $('#tip');
		},

		bindEvent: function () {
			var self = this;

			self.$submit.click(function () {
				if(self.validate()) {
					self.submit();
				}
			});

			self.$cancel.click(function () {
				$.hideBlockUI({
					message: $('#modify-password-dialog'),
					name: 'modify-password'
				});
			});
		},

		validate: function () {
			var self = this;

			if(!self.validateSingle(self.$oldPassword)) {
				return false;
			}
			if(!self.validateSingle(self.$newPassword)) {
				return false;
			}
			if(!self.validateSingle(self.$confirmPassword)) {
				return false;
			}
			if(self.$newPassword.val() != self.$confirmPassword.val()) {
				self.showTips('新密码与确认密码不一致');
				return false;
			}

			return true;
		},

		validateSingle: function ($target) {
			var self = this,
				val = $target.val(),
				label = $target.attr('data-label'),
				reg = $target.attr('data-reg'),
				regExp = new RegExp(reg),
				message;

			if(val.length === 0) {
				self.showTips('请输入' + label);
				$target.focus();
				return false;
			}
			if(reg) {
				if(!regExp.test(val)) {
					message = $target.attr('data-message');
					self.showTips(message);
					return false;
				}
			}

			self.hideTips();
			return true;
		},

		showTips: function(text) {
			var self = this;

			self.$tip.removeClass('hide').find('.text').text(text);
		},

		hideTips: function () {
			var self = this;

			self.$tip.addClass('hide').find('.text').text('');
		},

		submit: function () {
			var self = this,
				params = {'old': self.$oldPassword.val(), 'new': self.$newPassword.val()};

			ajax.invoke({
				url: '',
				data: params,
				success: function () {

				},
				failed: function () {

				}
			});
		},

		open: function () {
			var self = this;

			$.showBlockUI({
				message: $('#modify-password-dialog'),
				name: 'modify-password'
			});
		}

	};

	return ModifyPassword;

});