import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  count: DS.attr('number'),
  created_at: DS.attr('date'),
  created_by_id: DS.attr('number'),
  identifier: DS.attr('string'),
  is_editable: DS.attr('boolean'),
  is_predefined: DS.attr('boolean'),
  name: DS.attr('string'),
  predicates: DS.hasMany('predicate'),
  app: DS.belongsTo('app'),

  humanizedCount: computed('count', function() {
    if(this.get('is_predefined') && this.get('is_editable')) {
      if(this.get('count') !== 1) {
        return `${this.get('count')} seekers`;
      } else {
        return `${this.get('count')} seeker`;
      }
    } else {
      return this.get('count');
    }
  })
});
