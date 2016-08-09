Ext.define('EPCM.store.master.CascadingMenu', {
    extend: 'Ext.data.Store',
    model: 'EPCM.model.master.Menu',
    proxy: {
        type: 'ajax',
        url: EPCM.globalConfig.path + '/master/menu',
        reader: {
            type: 'json',
            root: 'children'
        }
    }
});