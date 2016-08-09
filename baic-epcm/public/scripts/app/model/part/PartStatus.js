Ext.define('EPCM.model.part.PartStatus', {
  extend: 'Ext.data.Model',
  fields: [{
    name: 'code'
  }, {
    name: 'name'
  }, {
    name: 'designPartNumber'
  }, {
    name: 'photoCount'
  }, {
    name: 'note'
  }, {
    name: 'statusName'
  }, {
    name: 'typeCode'
  }, {
    name: 'typeName'
  }, {
    name: 'specialPurchaseTag'
  }, {
    name: 'specialPurchaseNote'
  }, {
    name: 'weight'
  }, {
    name: 'length'
  }, {
    name: 'width'
  }, {
    name: 'height'
  }, {
    name: 'dimensionNo'
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