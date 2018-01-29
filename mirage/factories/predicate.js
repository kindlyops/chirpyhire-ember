import { Factory, trait } from 'ember-cli-mirage';

export default Factory.extend({
  'all-candidates': trait({
    type: "role", 
    attribute: "role", 
    comparison: "eq", 
    value: "candidate_role"
  }),

  'all-visitors': trait({
    type: "role", 
    attribute: "role", 
    comparison: "eq", 
    value: "visitor_role"
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