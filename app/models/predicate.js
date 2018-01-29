import DS from 'ember-data';

export default DS.Model.extend({
  attribute: DS.attr('string'),
  comparison: DS.attr('string'),
  type: DS.attr('string'),
  value: DS.attr('string'),
  segment: DS.belongsTo('segment')
});
