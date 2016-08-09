require(['ajax', 'mustache', 'crumbs', 'header', 'jquery'],function (ajax, Mustache, Crumbs, Header) {
	
	var catalog = {

		init: function () {
			var self = this;

			self.initComponent();
			self.bindEls();
			self.bindEvent();
			self.bindAttr();
			self.initCheckBrandSeries();
		},

		initComponent: function () {
			var self = this;

			self.crumbs = new Crumbs({
				firstRenderCrumbs: false
			});
			self.header = new Header();
		},

		bindEls: function () {
			var self = this;

			self.$brandTab = $('#brand-tab');
			self.$series = $('#series-wrap');
			self.$modelBody = $('#model-body');
		},

		bindEvent: function () {
			var self = this;

			self.$brandTab.on('click', '[data-code]', function () {
				self.clickedBrand($(this));
				self.clickedSeries(self.getFirstSeriesEl());
				self.crumbs.render();
			});

			self.$series.on('click','a', function () {
				self.clickedSeries($(this).closest('li'));
				self.crumbs.render();
			});

			self.$modelBody.on('click', '[data-action=toggle]', function () {
				self.toggleModel($(this));
			})
		},

		bindAttr: function () {
			var self = this;

			self.modelTemplate = self.$modelBody.find('script').html();
		},

		initCheckBrandSeries: function () {
			var self = this,
				params = self.crumbs.getCrumbsCode(),
				brandCode = params.brandCode,
				seriesCode = params.seriesCode;

			if(brandCode && brandCode.length > 0) {
				self.clickedBrand(self.getBrandEl(brandCode));
				if(seriesCode && seriesCode.length > 0) {
					self.clickedSeries(self.getSeriesEl(seriesCode));
				} else {
					self.clickedSeries(self.getFirstSeriesEl());
				}
			} else {
				if(self.userBrandCode) {
					self.clickedBrand(self.getBrandEl(self.userBrandCode));
					self.clickedSeries(self.getFirstSeriesEl());
				} else {
					self.clickedBrand(self.$brandTab.find('li:first'));
					self.clickedSeries(self.getFirstSeriesEl());
				}
			}
			self.crumbs.render();
		},

		clickedBrand: function ($target) {
			var self = this;

			self.checkedBrand($target);
			self.addCrumbsParams($target);
		},

		checkedBrand: function ($target) {
			var self = this,
				code = $target.attr('data-code');

			self.$brandTab.find('li').removeClass('checked');
			$target.addClass('checked');
			self.showSeries(code);
		},

		showSeries: function (code) {
			var self = this;

			self.$series.find('[data-brandCode='+ code +']').show().siblings().hide();
		},

		clickedSeries: function ($target) {
			var self = this;

			self.checkedSeries($target);
			self.addCrumbsParams($target);
		},

		checkedSeries: function ($target, code) {
			var self = this,
				code = $target.attr('data-code');

			$target.siblings().removeClass('checked');
			$target.addClass('checked');
			self.loadModel(code);
		},

		toggleModel: function ($target) {
			var self = this,
				parent = $target.parent().parent();

			parent.next().is("visible") ? parent.next().hide() : parent.next().show();
		},

		loadModel: function (seriesCode) {
			var self = this,
				location = window.location,
				brandCode = self.$brandTab.find('.checked').attr('data-code');

			ajax.invoke({
				url: location.protocol + '//' + location.host + '/catalog/getModel?brandCode=' + brandCode + '&seriesCode=' + seriesCode,
				success: function (root) {
					self.renderModel(self.buildModelData(root.data, brandCode, seriesCode));
				}
			})
		},

		buildModelData: function (data, brandCode, seriesCode) {
			var self = this,
				item;

			for(var i = 0; i < data.length; i++) {
				data[i]['brandCode'] = brandCode;
				data[i]['seriesCode'] = seriesCode;
				for(var j = 0; j < data[i].models.length; j++) {
					item = data[i].models[j];
					item['brandCode'] = brandCode;
					item['seriesCode'] = seriesCode;
					item['modelGroupCode'] = data[i].code;
				}
			}

			return data;
		},

		renderModel: function (data) {
			var self = this,
				output = Mustache.render(self.modelTemplate, {records: data});

			self.$modelBody.html(output);
		},

		getFirstSeriesEl: function () {
			var self = this;

			return self.$series.find(':visible').find('li:first');
		},

		getBrandEl: function (code) {
			var self = this;

			return self.$brandTab.find('[data-code=' + code + ']');
		},

		getSeriesEl: function (code) {
			var self = this;

			return self.$series.find(':visible').find('li[data-code=' + code + ']')
		},

		addCrumbsParams: function ($target) {
			var self = this;

			self.crumbs.replaceSingle({
				type: $target.attr('data-type'),
				code: $target.attr('data-code')
			});
		}

	};

	catalog.init();

});