import Component from '@ember/component';
import { filter } from '@ember/object/computed';

export default Component.extend({
  uneditableSegments: filter('segments', function(segment){
    return !segment.get('is_editable');
  })
});
