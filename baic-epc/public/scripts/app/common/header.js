define(['advancedSearch', 'modifyPassword', 'notice', 'supersessionSearch', 'userinfo', 'vinAnalysis', 'headerSearch', 'vehicleCode', 'supersessionDetail', 'select', 'jquery'],
 function (AdvancedSearch, ModifyPassword, Notice, SupersessionSearch, Userinfo, VinAnalysis, HeaderSearch, VehicleCode, SupersessionDetail) {

	var Header = function () {
		this.init();
	};

	Header.prototype = {

		init: function () {
			var self = this;

			self.initComponent();
			self.bindEls();
			self.bindEvent();
		},

		initComponent: function () {
			var self = this;

			self.advancedSearch = new AdvancedSearch();
			self.modifyPassword = new ModifyPassword();
			self.notice = new Notice();
			self.supersessionSearch = new SupersessionSearch({
				callbacks: {
					onClickedSupersessionDetail: function (params, parentObj) {
						self.supersessionDetail.open(params, parentObj);
					}
				}
			});
			self.userinfo = new Userinfo();
			self.vinAnalysis = new VinAnalysis();
			self.headerSearch = new HeaderSearch({
				callbacks: {
					onSearch: function (typeObj, val) {
						self.search(typeObj, val);
					}
				}
			});
			self.vehicleCode = new VehicleCode();
			self.supersessionDetail = new SupersessionDetail();
		},

		bindEls: function () {
			var self = this;

			self.$navigation = $('#page-navigation');
			self.$header = $('#page-header');
			self.$crumbs = $('#crumbs');
		},

		bindEvent: function () {
			var self = this,
				action;

			self.$navigation.on('click', '[data-action]', function () {
				action = $(this).attr('data-action');
				switch (action) {
					case 'shopping-cart':
						break;
					case 'notice':
						self.notice.open();
						break;
					case 'user-info':
						self.userinfo.open();
						break;
					case 'modify-password':
						self.modifyPassword.open();
						break;
					default:
						break;
				}
			});

			self.$header.on('click', 'a[data-action]', function () {
				action = $(this).attr('data-action');
				switch (action) {
					case 'advanced-search':
						self.advancedSearch.open();
						break;
					case 'supersession-search':
						self.supersessionSearch.open();
						break;
					default:
						break;
				}
			});
		},

		search: function (typeObj, val) {
			var self = this,
				type = typeObj.value || '';

			switch (type) {
				case 'vin':
					self.openVinAnalysis({'key': 'vin', 'val': val});
					break;
				case 'part-no':
					self.openAdvancedSearch('partNo', val);
					break;
				case 'part-name':
					self.openAdvancedSearch('partName', val);
					break;
				case 'vehicle-code':
					self.openVehicleCode({'key': 'vehicleCode', 'val': val});
					break;
				default:
					break;
			}
		},

		openVinAnalysis: function (obj) {
			var self = this;

			self.vinAnalysis.open(obj);
		},

		openVehicleCode: function (obj) {
			var self = this;

			self.vehicleCode.open(obj);
		},

		openAdvancedSearch: function (key, val) {
			var self = this,
				crumbsData = self.getCrumbsData(),
				params = {};

			params['brandCode'] = crumbsData['brandCode'];
			params[key] = val;

			self.advancedSearch.open(params);
			self.advancedSearch.grid.load();
		},

		getCrumbsData: function () {
			var self = this,
				$items = self.$crumbs.find('a[data-type]'),
				params = {},
				type, value;

			$items.each(function (i, e) {
				type = $(e).attr('data-type') + 'Code';
				value = $(e).attr('data-code');
				params[type] = value;
			});

			return params;
		}

	};

	return Header;

});