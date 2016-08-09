define(['ajax' ,'mustache', 'jquery', 'jqExtend'], function (ajax, Mustache) {
	
	var CRUMBS_CONFIG = {
		brand:{
			label:'品牌',
			url: '/catalog'
		},
		series:{
			label:'车系',
			url: '/catalog'
		},
		model:{
			label:'车型',
			url: '/model'
		},
		modelGroup:{
			label:'车型组',
			url: '/catalog'
		},
		image: {
			label: '图例',
			url: '/model'
		}
	};
	var TYPES = ['brand', 'series', 'model', 'modelGroup', 'image'];
	var NO_SHOW = ['modelGroup'];

	var defaultOpts = {
		firstRenderCrumbs: true,
		isFilterData: true,
		callbacks: {
			onRenderFinished: null,
			onFristRenderCrumbs: null
		}
	};

	var Crumbs = function (options) {
		this.opts = $.extend({}, defaultOpts, options || {});
		this.init();
	};

	Crumbs.prototype = {

		init: function () {
			var self = this;

			self.bindEls();
			self.bindAttr();
			self.bindEvent();
			self.initCrumbsParams();
			if(self.opts.firstRenderCrumbs) {
				self.render();
				if(typeof self.opts.callbacks.onFristRenderCrumbs === 'function') {
					self.opts.callbacks.onFristRenderCrumbs.apply(self, [self.getCrumbsCode()]);
				}
			}
		},

		bindEls: function () {
			var self = this;

			self.$crumbs = $('#crumbs');
		},

		bindAttr: function () {
			var self = this;

			self.template = self.$crumbs.find('script').html();
		},

		bindEvent: function () {
			var self = this;

			self.$crumbs.on('click', 'a[data-type]', function () {
				window.location.href = $(this).attr('data-url');
			});
		},

		initCrumbsParams: function () {
			var self = this,
				data = [],
				type, code;

			for(var i = 0; i < TYPES.length; i++) {
				type = TYPES[i];
				code = $.getParameterByName(type+'Code');
				if(code.length > 0) {
					data.push({
						'type': type,
						'code': code,
						'label': CRUMBS_CONFIG[type].label
					})
				}
			}

			self.data = data;
		},

		buildData: function () {
			var self = this,
				data = self.data;
			
			return self.buildUrl(data);
		},

		buildUrl: function (data) {
			var self = this,
				params = self.getCrumbsCode(),
				type, code;

			for(var i = 0; i < data.length; i++) {
				type = data[i].type;
				code = data[i].code;
				data[i].url = self.getUrl(type, code, params);
			}

			return data;			
		},

		getUrl: function (type, code, params) {
			var self = this,
				path = CRUMBS_CONFIG[type] ? CRUMBS_CONFIG[type].url : '';

			switch (type) {
				case 'brand':
					url = path + '?brandCode=' + (code || '');
					break;
				case 'series':
					url = path + '?brandCode=' + (params['brandCode'] || '') + "&seriesCode=" + (code || '');
					break;
				case 'modelGroup':
					url = path + '?brandCode=' + (params['brandCode'] || '') + "&seriesCode=" + (params['seriesCode'] || '') + '&modelGroupCode=' + (code || '')
					break;
				case 'model':
					url = path + '?brandCode=' + (params['brandCode'] || '') + "&seriesCode=" + (params['seriesCode'] || '') + '&modelGroupCode=' + (params['modelGroupCode'] || '') + '&modelCode=' + (code || '');
					break;
				case 'image':
					url = path + '?brandCode=' + (params['brandCode'] || '') + "&seriesCode=" + (params['seriesCode'] || '') + '&modelGroupCode=' + (params['modelGroupCode'] || '') + '&modelCode=' + (params['modelCode'] || '') + '&imageCode=' + (code || '');
					break;
				default:
					url = '';
					break;
			}

			return url;
		},

		filterData: function (data) {
			var self = this;

			for(var i = 0; i < NO_SHOW.length; i++) {
				for(var j = 0; j < data.length; j++) {
					if(NO_SHOW[i] == data[j].type) {
						data[j].splice(i, 1);
					}
				}
			}

			return data;
		},

		removeSingle: function (type) {
			var self = this,
				data = self.data;

			for(var i = 0; i < data.length; i++) {
				if(data[i].type === type) {
					data.splice(i, 1);
				}
			}
		},

		replaceSingle: function (params) {
			var self = this,
				data = self.data,
				type = params.type, 
				code = params.code, 
				hasType = false,
				index;

			for(var i = 0 ; i < data.length; i++) {
				if(data[i].type == type) {
					data[i].code = code;
					hasType = true;
					index = i;
				}
			}

			if(!hasType) {
				data.push({
					'type': type,
					'code': code,
					'label': CRUMBS_CONFIG[type].label
				})
			}
		},

		loadCrumbsInfo: function (params, callbacks) {
			var self = this;

			ajax.invoke({
				type: 'GET',
				url: '/crumbs/getCrumbsInfo',
				data: params,
				contentType: 'application/json',
				success: function (result) {
					callbacks.apply(null, [result]);
				}
			});
		},

		render: function () {
			var self = this,
				originalData = self.buildData(),
				codeParams = self.getCrumbsCode(originalData),
				finalData;

			self.loadCrumbsInfo(codeParams, function (result) {
				for(var i = 0; i < originalData.length; i++) {
					var type = originalData[i].type;
					if(result[type+'Name']) {
						originalData[i].text = result[type+'Name'];
					}
				}

				finalData = (self.isFilterData ? self.filterData(originalData) : originalData),
				output = Mustache.render(self.template, {records: finalData});
				self.$crumbs.html(output);
			});
		},

		getCrumbsCode: function (data) {
			var self = this,
				data = data ? data : self.data,
				params = {};

			for(var i = 0; i < data.length; i++) {
				params[data[i].type + 'Code'] = data[i].code;
			}

			return params;
		}

	};

	return Crumbs;

});