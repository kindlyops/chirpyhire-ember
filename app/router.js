import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('apps', function() {
    this.route('app',  { path: '/:app_id' }, function() {
      this.route('people', function() {
        this.route('segments', function() {
          this.route('segment', { path: '/:segment_id' });
        });
      });
    });
  });
});

export default Router;
