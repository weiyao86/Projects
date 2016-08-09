Ext.define('EPCM.store.master.TreeMenu', {
    extend: 'Ext.data.TreeStore',
    model: 'EPCM.model.master.Menu',
    proxy: {
        type: 'ajax',
        url: EPCM.globalConfig.path + '/master/menu',
        reader: {
            type: 'json',
            root: ''
        }
    }
});