import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  segments: computed('app', function() {
    return this.get('app.segments');
  }),
  allSeekers: computed('segments', function(){
    return this.get('segments').find((segment) => {
      return segment.get('identifier') === 'all-seekers';
    });
  }),
  allLeads: computed('segments', function(){
    return this.get('segments').find((segment) => {
      return segment.get('identifier') === 'all-leads';
    });
  }),
  newSeekers: computed('segments', function(){
    return this.get('segments').find((segment) => {
      return segment.get('identifier') === 'new';
    });
  }),
  activeSeekers: computed('segments', function(){
    return this.get('segments').find((segment) => {
      return segment.get('identifier') === 'active';
    });
  }),
  slippingAwaySeekers: computed('segments', function(){
    return this.get('segments').find((segment) => {
      return segment.get('identifier') === 'slipping-away';
    });
  }),
});
