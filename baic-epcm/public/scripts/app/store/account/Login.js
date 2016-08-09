Ext.define('EPCM.store.account.Users', {
	extend: 'Ext.ux.store.Base',
	model: 'EPCM.model.account.Users',
	isUpload: true,
	proxyAPI: {
		read: 'account/user',
		create: 'account/user',
		update: 'account/user',
		destroy: 'account/user'
	}
});