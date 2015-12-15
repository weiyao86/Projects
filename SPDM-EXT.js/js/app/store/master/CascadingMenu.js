Ext.define('SPDM.store.master.CascadingMenu', {
    extend: 'Ext.data.Store',
    model: 'SPDM.model.master.Menu',
    proxy: {
        type: 'ajax',
        url: SPDM.globalConfig.path + '/main/menu',
        reader: {
            type: 'json',
            root: 'children'
        }
    }
});