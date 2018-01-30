import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `App ${i}`;
  },
  afterCreate(app, server) {
    server.create('segment', 'all-leads', { app });
    server.create('segment', 'all-candidates', { app });
    server.create('segment', 'new', { app });
    server.create('segment', 'active', { app });
    server.create('segment', 'slipping-away', { app });
  }
});
