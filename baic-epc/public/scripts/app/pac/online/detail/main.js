require(['ajax', 'mustache', 'dialog', 'uploadFile', 'qustionCloseAction', 'jquery', 'select', 'getFormValue', 'jqForm'], function(ajax, Mustache, Dialog, UploadFile, CloseAction) {
	var detail = {
		init: function() {
			var self = this;

			self.initEls();
			self.initAttrs();
			self.initComponent();
			self.initEvents();

		},

		initEls: function() {
			var self = this;

			self.questionCode = $('#question-code');
			self.serviceQuality = $('#service-quality-wrap');
			self.$replyForm = $('#reply-form');
			self.$commentForm = $('.question-comment-form');
			self.$replyHistoryTempl = $('#reply-history-template');
			self.historyWrapper = $('#reply-history-wrapper');
			self.replyBtn = $('[data-action="reply"]');
		},

		initAttrs: function() {
			var self = this;

			self.code = self.questionCode.val();
		},

		initComponent: function() {
			var self = this;

			if(self.serviceQuality.length > 0) {
				self.qustionCloseAction = new CloseAction({
					callbacks: {
						onConfirm: function() {
							window.location.reload();
						}
					}
				});
			}
			self.getReplyHistory();
			self.uploadFile = new UploadFile();
		},

		initEvents: function() {
			var self = this;

			self.replyBtn.on('click', function() {
				self.postForm();
			});
		},

		getReplyHistory: function() {
			var self = this;

			var params = {questionCode: self.code};

			ajax.invoke({
				url: '/online/replyHistory',
				type: 'GET',
				dataType: 'json',
				data: params,
				success: function (data) {
					self.renderReplyHistory(data);
				}
			});
		},

		renderReplyHistory: function(data) {
			var self = this;

			var template = self.$replyHistoryTempl.html(), html;

			for(var i in data) {
				if(data[i].attachments.length > 0) {
					data[i].hasAttachment = true;
					data[i].columnClass = 'fix';
				} else {
					data[i].hasAttachment = false;
					data[i].columnClass = 'single';
				}
			}
			html = Mustache.render(template, {reply: data});
			self.historyWrapper.html(html);
		},

		postForm: function() {
			var self = this;

			var params = {questionCode: self.code};

			if(!self.$replyForm.verifyIsNull()) {
				new Dialog({
	                type:'error',
	                title:'提示',
	                content: '必填项不能为空'
	            });
				return;
			}

			self.$replyForm.ajaxSubmit({
				resetForm: true,
				iframe: true,
				type: 'post',
				url: '/online/uploadReplyForm',
				dataType: 'json',
				data: params,
				success: function (data) {
					if(data.success) {
						window.location.reload();
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
		}
		
	}
	detail.init();
})