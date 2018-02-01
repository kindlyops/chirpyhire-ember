import Route from '@ember/routing/route';

export default Route.extend({
  model({ segment_id }) {
    return this.get('store').findRecord('segment', segment_id, { 
      include: 'predicates' 
    });
  }
});
