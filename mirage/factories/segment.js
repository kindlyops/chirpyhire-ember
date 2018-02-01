import { Factory, faker, trait } from 'ember-cli-mirage';

export default Factory.extend({
  is_editable: false,
  is_predefined: true,
  app_id: faker.random.number(),
  count: faker.random.number({ min: 0, max: 100 }),

  'all-leads': trait({
    identifier: "all-leads",
    name: "All leads",
    afterCreate(segment, server) {
      server.create('predicate', 'all-leads', { segment });
    }
  }),

  'all-seekers': trait({
    identifier: "all-seekers",
    name: "All seekers",
    afterCreate(segment, server) {
      server.create('predicate', 'all-seekers', { segment });
    }
  }),

  new: trait({
    identifier: "new",
    name: "New",
    is_editable: true,
    afterCreate(segment, server) {
      server.create('predicate', 'new', { segment });
      server.create('predicate', 'all-seekers', { segment });
    }
  }),

  active: trait({
    identifier: "active",
    name: "Active",
    is_editable: true,
    afterCreate(segment, server) {
      server.create('predicate', 'active', { segment });
      server.create('predicate', 'all-seekers', { segment });
    }
  }),

  'slipping-away': trait({
    identifier: "slipping-away",
    name: "Slipping away",
    is_editable: true,
    afterCreate(segment, server) {
      server.create('predicate', 'last_seen_more_than_30', { segment });
      server.create('predicate', 'last_seen_less_than_60', { segment });
      server.create('predicate', 'more_than_5_sessions', { segment });
      server.create('predicate', 'all-seekers', { segment });
    }
  })
});
