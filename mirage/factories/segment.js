import { Factory, faker, trait } from 'ember-cli-mirage';

export default Factory.extend({
  is_company: false,
  is_editable: false,
  is_predefined: true,
  app_id: faker.random.number(),
  company_count: faker.random.number({ min: 0, max: 100 }),
  count: faker.random.number({ min: 0, max: 100 }),

  afterCreate(segment) {
    segment.user_count = segment.count;
  },

  'all-visitors': trait({
    identifier: "all-visitors",
    name: "All People",
    afterCreate(segment, server) {
      server.create('predicate', 'all-visitors', { segment });
    }
  }),

  'all-candidates': trait({
    identifier: "all-candidates",
    name: "All Candidates",
    afterCreate(segment, server) {
      server.create('predicate', 'all-candidates', { segment });
    }
  }),

  new: trait({
    identifier: "new",
    name: "New",
    afterCreate(segment, server) {
      server.create('predicate', 'new', { segment });
      server.create('predicate', 'all-candidates', { segment });
    }
  }),

  active: trait({
    identifier: "active",
    name: "Active",
    afterCreate(segment, server) {
      server.create('predicate', 'active', { segment });
      server.create('predicate', 'all-candidates', { segment });
    }
  }),

  'slipping-away': trait({
    identifier: "slipping-away",
    name: "Slipping Away",
    afterCreate(segment, server) {
      server.create('predicate', 'last_seen_more_than_30', { segment });
      server.create('predicate', 'last_seen_less_than_60', { segment });
      server.create('predicate', 'more_than_5_sessions', { segment });
      server.create('predicate', 'all-candidates', { segment });
    }
  })
});
