Ext.define('EPCM.model.master.Menu', {
  extend: 'Ext.data.Model',
  fields: [
    {name: 'id'},
    {name: 'url'},
    {name: 'text', mapping: 'name'},
    {name: 'children'},
    {
      name: 'pingyin', mapping: function (data) {
      return Ext.util.pingyin.getFullChars(data.name);
    }
    },
    {
      name: 'py', mapping: function (data) {
      return Ext.util.pingyin.getCamelChars(data.name);
    }
    }
  ]
});