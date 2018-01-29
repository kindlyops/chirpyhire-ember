import DS from 'ember-data';

export default DS.Model.extend({
  company_count: DS.attr('number'),
  count: DS.attr('number'),
  created_at: DS.attr('date'),
  created_by_id: DS.attr('number'),
  identifier: DS.attr('string'),
  is_company: DS.attr('boolean'),
  is_editable: DS.attr('boolean'),
  is_predefined: DS.attr('boolean'),
  name: DS.attr('string'),
  predicates: DS.hasMany('predicate'),
  user_count: DS.attr('number'),
  app: DS.belongsTo('app')
});
