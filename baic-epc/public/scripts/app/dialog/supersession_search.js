define(['ajax', 'mustache', 'jquery', 'jqExtend'], function(ajax, Mustache) {

	var defaultOpts = {
		callbacks: {
			onClickedSupersessionDetail: null
		}
	};

	var SupersessionSearch = function (options) {
		this.opts = $.extend({}, defaultOpts, options || {});
		this.init();
	};

	SupersessionSearch.prototype = {

		init: function () {
			var self = this;

			self.bindEls();
			self.bindAttr();
			self.bindEvent();
		},

		bindEls: function () {
			var self = this;

			self.$dialog = $('#supersession-search-dialog');
			self.$partNo = self.$dialog.find('[data-name=partNo]');
			self.$query = self.$dialog.find('[data-id=query]');
			self.$btnSearch = self.$dialog.find('[data-id=search]');
			self.$btnReset = self.$dialog.find('[data-id=reset]');
			self.$gridResult = self.$dialog.find('[data-id=grid-result]');
			self.$tip = self.$dialog.find('.tips');
		},

		bindAttr: function () {
			var self = this;

			self.template = self.$gridResult.find('script').html();
		},

		bindEvent: function () {
			var self = this,
				action, params;

			self.$partNo.on('keyup', function (e) {
				if(e.keyCode === 13) self.$btnSearch.trigger('click');
			});

			self.$btnSearch.click(function () {
				if(self.validate()) {
					self.load();
				}
			});

			self.$btnReset.click(function () {
				self.hideTips();
				self.reset();
			});

			self.$gridResult.on('click', '[data-action]', function () {
				action = $(this).attr('data-action');
				if(action === 'supersession-detail') {
					self.showSupersessionDetail($(this));
				}
			});
		},

		validate: function () {
			var self = this,
				val = $.trim(self.$partNo.val());

			if(val.length === 0) {
				self.showTips('请输入配件件号');
				return false;
			}
			self.hideTips();
			return true;
		},

		showTips: function () {
			var self = this;

			self.$tip.removeClass('hide');
		},

		hideTips: function () {
			var self = this;

			if(!self.$tip.hasClass('hide')) {self.$tip.addClass('hide');}
		},

		load: function () {
			var self = this,
				partNo = $.trim(self.$partNo.val());

			ajax.invoke({
				url: '/search/supersessionSearch?partNo=' + partNo,
				beforeSend: function () {
					self.hideTips();
					self.$gridResult.html('');
				},
				success: function (root) {
					self.render(self.buildData(root));
				},
				failed: function () {
				}
			});
		},

		buildData: function (data) {
			var self = this;

			for(var i = 0; i < data.length; i++) {
				data[i].rowNumber = i+1;
			}

			return data;
		},

		render: function (data) {
			var self = this,
				output = Mustache.render(self.template, {list: data});

			self.$gridResult.html(output).show();
		},

		reset: function () {
			var self = this;

			self.$query.find('[data-name]').val('');
		},
		
		open: function () {
			var self = this;

			$.showBlockUI({
				message: self.$dialog,
				name: 'supersession-search',
				callbacks: {
					onClosed: function () {
						self.close();
					}
				}
			});
		},

		close: function () {
			var self = this;

			self.hideTips();
			self.$gridResult.html('');
			self.reset();
		},

		showSupersessionDetail: function ($target) {
			var self = this;

			if(typeof self.opts.callbacks.onClickedSupersessionDetail === 'function') {
				params = {};
				params['code'] = $target.attr('data-code');
				self.opts.callbacks.onClickedSupersessionDetail.apply(this, [params, self.$dialog]);
			}
		}

	};

	return SupersessionSearch;

});