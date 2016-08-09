require(['ajax', 'group', 'crumbs', 'header', 'legend', 'parts', 'layout', 'legendList', 'mustache', 'jquery'],
	function (ajax, Group, Crumbs, Header, Legend, Parts, Layout, LegendList, Mustache) {
	
	var model = {

		init: function () {
			var self = this;

			self.bindEls();
			self.initComponent();
		},

		bindEls: function () {
			var self = this;

			
		},

		initComponent: function () {
			var self = this,
				firstShowLegendParts = false,
				imageCode;

			self.crumbs = new Crumbs({
				callbacks: {
					onFristRenderCrumbs: function (params) {
						if(params.imageCode && params.imageCode.length > 0) {
							firstShowLegendParts = true;
							imageCode = params.imageCode;
						}
					}
				}
			});
			self.header = new Header();
			self.legend = new Legend({
				callbacks: {
					onSelectionCallout: function (callouts) {
						self.parts.linkParts(callouts);
					}
				}
			});
			self.parts = new Parts({
				callbacks: {
					onClickedRow: function (callouts) {
						self.legend.linkLegend(callouts);
					}
				}
			});
			self.layout = new Layout();
			self.legendList = new LegendList({
				callbacks: {
					onClickedImage: function ($target, code) {
						self.replaceCrumbs('image', code);
						self.group.clickedLeaf(code);
					}
				}
			});
			self.group = new Group({
				callbacks: {
					onClickedLeaf: function ($target, code) {
						self.replaceCrumbs('image', code);
						self.loadLegendParts($target, code);
					},
					onClickedGroup: function ($target, code) {
						self.crumbs.removeSingle('image');
						self.crumbs.render();
						self.loadLegendList(this, $target);
					}
				}
			});

			if(firstShowLegendParts) {
				self.group.clickedLeaf(imageCode);
			} else {
				self.group.clickedFirstGroup();
			}
		},

		replaceCrumbs: function (type, code) {
			var self = this;

			self.crumbs.replaceSingle({'type': type, 'code': code});
			self.crumbs.render();
		},

		loadLegendList: function (group, $target) {
			var self = this;

			self.layout.showLegendList();
			self.legendList.render(group.getImagesEls($target));
		},

		loadLegendParts: function ($target) {
			var self = this;

			self.layout.showLegendParts();
			self.parts.load(self.crumbs.getCrumbsCode());
			self.legend.loadLegend({
				svgFile: $target.attr('data-svgFile'),
				gifFile: $target.attr('data-gifFile')
			});
		}
		
	};

	model.init();

});