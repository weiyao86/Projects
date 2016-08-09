require(['ajax', 'mustache', 'dialog', 'uploadFile', 'header', 'jquery','select','carCatalogSelect', 'getFormValue', 'jqForm'], 
	function(ajax, Mustache, Dialog, UploadFile, Header) {
	var online = {
		init: function () {
			var self = this;

			self.bindEls();
			self.buildAttrs();
			self.getQuestionsClassify();
			self.getServiceInfo();
			self.buildComponent();
			self.bindEvent();
		},

		bindEls: function () {
			var self = this;

			self.$tab = $('#tab');
			self.$tabCont = $('#tab-cont');
			self.$changedom = $('.change-item');
			self.$questionSelect = $('#question-select');
			self.$submitBtn = $('a[data-action="submit"]');
			self.$serviceCode = $('input[data-name="service-code"]');
			self.$serviceName = $('input[data-name="service-name"]');
			self.$phoneInput = $('input[name="contactPhone"]');
			self.$questionForm = $('#question-form');
		},

		buildAttrs: function() {
			var self = this;

			self.urlArray = ['/pac/online', '/pac/online/question_search', '/pac/online/myquestion'];
		},

		buildComponent: function() {
			var self = this;

			self.header = new Header();
			self.$tabCont.carCatalogSelect();
			self.uploadFile = new UploadFile();
		},

		bindEvent: function () {
			var self = this;

			self.$tab.on('click', '[data-field]', function () {
				self.toggleTab($(this));
			});
			self.$questionSelect.on('evtChange', function() {
				self.selectQuestion($(this));
			});
			self.$submitBtn.click(function() {
				self.submitForm();
			});
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
		},

		toggleTab: function ($this) {
			var self = this;

			var index = $this.attr('data-field');
			if($this.hasClass('checked')) { return; }
			window.location.href = globalConfig.context.path + self.urlArray[index];
		},

		getQuestionsClassify: function() {
			var self = this;

			ajax.invoke({
				url: '/online/questionType',
				type: 'GET',
				success: function (data) {
					self.renderTemplate(data);
				}
			 });
		},

		renderTemplate: function(data) {
			var self = this;

			var template = $('#deep-group-template').html(), html;

			html = Mustache.render(template, {data: data});

			$('#deep-group').html(html);
		},

		selectQuestion: function($this) {
			var self = this;

			var value = $this.attr('data-value'),
				type = $this.find('.form-select-option.currentOption').attr('data-type');

			if(type === '1') {
				self.$changedom.show().find('input,textarea').removeClass('hide');
			} else if(type === '2') {
				self.$changedom.hide().find('input,textarea').addClass('hide');
			}
		},

		getServiceInfo: function() {
			var self = this;

			ajax.invoke({
				url: '/online/serviceInfo',
				type: 'GET',
				success: function (data) {
					self.$serviceCode.val(data.CODE);
					self.$serviceName.val(data.NAME);
				}
			 });
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

		submitForm: function() {
			var self = this;

			var params;


			if(!self.$tabCont.verifyIsNull()) {
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

			self.$questionForm.ajaxSubmit({
				resetForm: true,
				iframe: true,
				type: 'post',
				url: '/online/uploadQuestionFile',
				dataType: 'json',
				success: function (data) {
					if(data.success) {
						new Dialog({
		                    type:'ok',
		                    title:'提示',
		                    content:'提交成功',
		                    onConfirm: function() {
		                    	self.resetForm();
		                    	self.getServiceInfo();
		                    }
	                	});
					} else {
						new Dialog({
		                    type:'error',
		                    title:'提示',
		                    content:data.message || '提交失败'
	                	});
					}
				},
				error: function(data) {
					new Dialog({
	                    type:'error',
	                    title:'提示',
	                    content: data.message || '上传失败，请稍候重试'
	                });
				}
			});

		},

		resetForm: function() {
			var self = this;

			var $fileName = $('.file-name');

			$fileName.text('');
			self.resetSelect();

		},

		resetSelect: function() {
			var self = this;
			
			var array = $('[data-input="select"]');

			array.each(function(index, ele) {
				var $ele = $(ele);

				$ele.find('.form-select-input').val('');
				$ele.find('.form-select-text').text('请选择');
			});
		}
	}
	online.init();
})