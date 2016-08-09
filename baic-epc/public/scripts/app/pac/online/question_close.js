define(['ajax' ,'mustache', 'dialog',  'getFormValue','jquery'], function(ajax, Mustache, Dialog) {
	var defaultOpts = {
		commentForm: '.question-comment-form',
		qualityTempl: '#service-quality-template',
		qualityWrapper: '#service-quality',
		questionCode: '#question-code',
		closeBtn: '[data-action="close-question"]',
		callbacks: {
			onConfirm: null
		}
	};

	var qustionCloseAction = function(options) {
		this.opts = $.extend(true, {}, defaultOpts, options);
		this.init();
	};

	qustionCloseAction.prototype = {
		init: function() {
			var self = this;

			self.initEls();
			self.initComponent();
			self.initEvents();

		},

		initEls: function() {
			var self = this;

			self.$commentForm = $(self.opts.commentForm);
			self.qualityTempl = $(self.opts.qualityTempl);
			self.$qualityWrapper = $(self.opts.qualityWrapper);
			self.$questionCode = $(self.opts.questionCode);
			self.closeBtn = $(self.opts.closeBtn);
		},

		initComponent: function() {
			var self = this;

			self.getServiceQuality();
		},

		initEvents: function() {
			var self = this;

			self.closeBtn.click(function() {
				self.postComments();
				return false;
			});
		},

		getServiceQuality: function() {
			var self = this;

			ajax.invoke({
				url: '/online/getQualityList',
				type: 'GET',
				success: function (data) {
					self.renderServiceQuality(data);
				}
			});
		},

		renderServiceQuality: function(data) {
			var self = this;

			var template = self.qualityTempl.html(),
				html = Mustache.render(template, {qulityList: data});
			self.$qualityWrapper.html(html);
		},

		postComments: function() {
			var self = this;

			var params;

			if(!self.$commentForm.verifyIsNull()) {
				new Dialog({
	                type:'error',
	                title:'提示',
	                content: '必填项不能为空'
	            });
				return;
			}
			var qd = {questionCode: self.$questionCode.val()};

			params = $.extend(self.$commentForm.getFormValue(), {questionCode: self.$questionCode.val()});

			ajax.invoke({
				url: '/online/closeQuestion',
				type: 'POST',
				data: params,
				success: function (data) {
					if(data.success) {
						if(typeof self.opts.callbacks.onConfirm === 'function') {
			            	self.opts.callbacks.onConfirm.apply(null, params);
			            }
					} else {
						new Dialog({
			            	type:'error',
			            	title:'提示',
			            	content: data.message || '关闭失败'
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
		}
	};

	return qustionCloseAction;
})