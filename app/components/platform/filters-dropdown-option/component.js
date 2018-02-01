import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  isSelected: computed('{dropdownSelection,label}', function() {
    return this.get('dropdownSelection') === this.get('label');
  }),
  isSelectedClass: computed('isSelected', function() {
    if(this.get('isSelected')) {
      return `${this.get('styleNamespace')}--selected`;
    }
  }),
  actions: {
    select() {
      this.get('dropdown').actions.close();
      this.get('onSelect')(this.get('label'));
    }
  }
});
