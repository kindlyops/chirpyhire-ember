import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return {};
    // return this.get('store').create('search');
  }
});
