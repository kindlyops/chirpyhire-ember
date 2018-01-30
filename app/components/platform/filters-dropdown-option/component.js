import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  isSelected: computed('{dropDownSelected,option}', function() {
    return this.get('dropDownSelected').value === this.get('option').value;
  }),
  isSelectedClass: computed('isSelected', function() {
    if(this.get('isSelected')) {
      return `${this.get('styleNamespace')}--selected`;
    }
  })
});
