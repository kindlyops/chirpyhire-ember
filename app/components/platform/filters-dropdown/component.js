import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  isShowingDropdown: false,
  isShowingDropdownClass: computed('isShowingDropdown', function() {
    if(this.get('isShowingDropdown')) {
      return `${this.get('styleNamespace')}__button--open`;
    }
  }),
  actions: {
    toggleDropdown() {
      this.toggleProperty('isShowingDropdown');
    },
    updateSelection(selected) {
      this.set('selected', selected);
    }
  }
});
