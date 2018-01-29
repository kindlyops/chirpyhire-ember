import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').findRecord('app', params.app_id, { 
      include: 'segments.predicates' 
    });
  }
});
