Ext.define('EPCM.view.common.class.Base', {
	getUrlParams: function() {
		var me = this,
			urlParams = Ext.Object.fromQueryString(window.location.search);

		return urlParams;
	},

	getMainController: function(){

		if (EPCM.app.controllers.items.length > 0){
			return EPCM.app.controllers.items[0];
		};
	},

	getController: function(controllerPath) {
		return EPCM.app.getController(controllerPath);
	}
});