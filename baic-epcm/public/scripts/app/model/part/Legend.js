Ext.define('EPCM.model.part.Legend', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'brandName'
  }, {
    name: 'seriesName'
  }, {
    name: 'groupCode'
  }, {
    name: 'groupName'
  }, {
    name: 'subGroupCode'
  }, {
    name: 'subGroupName'
  }, {
    name: 'code'
  }, {
    name: 'name'
  }, {
    name: 'note'
  }, {
    name: 'svgFilename'
  }, {
    name: 'gifFilename'
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