Ext.define('EPCM.model.part.PartPhoto', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'id'
  }, {
    name: 'name'
  }, {
    name: 'sort'
  }, {
    name: 'createdBy'
  }, {
    name: 'createdOn',
    convert: function (val) {
      return Ext.util.Format.localDate(val);
    }
  }, {
    name: 'modifiedBy'
  }, {
    name: 'modifiedOn',
    convert: function (val) {
      return Ext.util.Format.localDate(val);
    }
  }]
});