import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  segments: computed('app', function() {
    return this.get('app.segments');
  }),
  allCandidates: computed('segments', function(){
    return this.get('segments').find((segment) => {
      return segment.get('identifier') === 'all-candidates';
    });
  }),
  allLeads: computed('segments', function(){
    return this.get('segments').find((segment) => {
      return segment.get('identifier') === 'all-leads';
    });
  }),
  newCandidates: computed('segments', function(){
    return this.get('segments').find((segment) => {
      return segment.get('identifier') === 'new';
    });
  }),
  activeCandidates: computed('segments', function(){
    return this.get('segments').find((segment) => {
      return segment.get('identifier') === 'active';
    });
  }),
  slippingAwayCandidates: computed('segments', function(){
    return this.get('segments').find((segment) => {
      return segment.get('identifier') === 'slipping-away';
    });
  }),
});
