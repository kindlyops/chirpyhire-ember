import Route from '@ember/routing/route';

export default Route.extend({
  model({ segment_id }) {
    return { segment_id };
  }
});
