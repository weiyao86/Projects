Ext.define('EPCM.model.part.Group', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'code'
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