require(['ajax', 'dialog','jquery','json2'], function(ajax, Dialog) {
	var survey = {
		init: function() {
			var self = this;

			self.initEls();
			self.initEvents();
		},

		initEls: function() {
			var self = this;

			self.personalInfo = $('.personal-info');
			self.$phoneInput = $('input[data-name="phone"]');
			self.$nameInput = $('input[data-name="name"]');
			self.questionForm = $('#question-wrapper');
			self.needVerifyInput = $('input,textarea').filter('[data-null="false"]');
			self.$submitBtn = $('a[data-name="submit"]');
			self.questions = $('.question-box').find('.textarea-box');
		},

		initEvents: function() {
			var self = this;

			self.$phoneInput.on({
				'blur': function() {
					self.verifyPhone($(this));
				},
				'input': function(e) {
					if(e.which === 13) {
						self.trigger('blur');
					}
				},
				'propertychange': function(e) {
					if(e.which === 13) {
						self.trigger('blur');
					}
				}
			});

			self.$submitBtn.click(function() {
				self.submitForm();
			})

		},

		verifyPhone: function($this) {
			var self = this;

			var val = $.trim($this.val());

			if(val.length > 0) {
				if(!/^[1]\d{10}$/g.test(val)) {
					new Dialog({
		             	type:'error',
		             	title:'提示',
		             	content: '电话号码格式不对'
		        	});
		        	return false;
				}
				return true;
			}
			return false;
		},

		verifyIsNull: function() {
			var self = this;

			var result = true;
			self.needVerifyInput.each(function(index,element) {
				var val = $.trim($(element).val());

				if(!val || val.length === 0) {
					result = false;
					return;
				}
			});
			return result;
		},

		getAnawer: function() {
			var self = this;

			var data = [];

			self.questions.each(function(index, element) {
				var $ele = $(element);
				data.push({code: $ele.attr('data-code'), 'value': $ele.val()});
			});
			return data;
		},

		submitForm: function() {
			var self = this;

			var params = {};

			if(!self.verifyIsNull()) {
				new Dialog({
		             type:'error',
		             title:'提示',
		             content: '必填项不能为空' || '提交失败'
		        });
		        return;
			}
			if(!self.verifyPhone(self.$phoneInput)) {
		        return;
			}

			params = {
				answers: self.getAnawer(),
				phone: self.$phoneInput.val(),
				questionnaireCode: self.questionForm.attr('data-code'),
				respondent: self.$nameInput.val()
			};

			ajax.invoke({
				url: '/pac/survey/answer',
				type: 'POST',
				data: params,
				success: function (data) {
					if(data.success) {
						new Dialog({
			            	type:'ok',
			            	title:'提示',
			            	content: data.message || '提交成功',
			            	onConfirm: function() {
			            		self.resetForm();
			            	}
			        	});
					} else {
						new Dialog({
			            	type:'error',
			            	title:'提示',
			            	content: data.message || '提交失败'
			        	});
					}
				},
				failed: function (data) {
					new Dialog({
			            type:'error',
			            title:'提示',
			            content: data.message || '未知错误'
			        });
				}
		 	});
		},

		resetForm: function() {
			var self = this;

			self.questionForm.get(0).reset();
			self.personalInfo.find('input,textarea').not('[data-name="usercode"]').val('');
		}

	}
	survey.init();
})