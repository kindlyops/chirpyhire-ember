import Component from '@ember/component';

export default Component.extend({
  roleOptions: [{
    label: 'Candidates',
    value: { type: "role", attribute: "role", comparison: "eq", value: "candidate_role" }
  },{
    label: 'Leads',
    value: { type: "role", attribute: "role", comparison: "eq", value: "lead_role" }
  }]
});
