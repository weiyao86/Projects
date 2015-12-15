Ext.define('SPDM.store.master.TreeMenu', {
    extend: 'Ext.data.TreeStore',
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