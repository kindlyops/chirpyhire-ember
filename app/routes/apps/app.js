import Route from '@ember/routing/route';

export default Route.extend({
  model({ app_id }) {
    return this.get('store').findRecord('app', app_id, { 
      include: 'segments.predicates' 
    });
  }
});
