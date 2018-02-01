import { Factory, trait } from 'ember-cli-mirage';

export default Factory.extend({
  'all-seekers': trait({
    type: "role", 
    attribute: "role", 
    comparison: "eq", 
    value: "seeker_role"
  }),

  'all-leads': trait({
    type: "role", 
    attribute: "role", 
    comparison: "eq", 
    value: "lead_role"
  }),

  new: trait({
    type: "date",
    attribute: "created_at",
    comparison: "lt",
    value: "1"
  }),

  active: trait({
    type: "date", 
    attribute: "last_request_at", 
    comparison: "lt", 
    value: "30"
  }),

  'last_seen_more_than_30': trait({
    type: "date", 
    attribute: "last_request_at", 
    comparison: "gt", 
    value: "30"
  }),

  'last_seen_less_than_60': trait({
    type: "date", 
    attribute: "last_request_at", 
    comparison: "lt", 
    value: "60"
  }),

  'more_than_5_sessions': trait({
    type: "integer", 
    attribute: "session_count", 
    comparison: "gt", 
    value: "5"
  })
});
