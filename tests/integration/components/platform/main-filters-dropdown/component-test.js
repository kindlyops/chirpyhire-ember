import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('platform/main-filters-dropdown', 'Integration | Component | platform/main filters dropdown', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{platform/main-filters-dropdown}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#platform/main-filters-dropdown}}
      template block text
    {{/platform/main-filters-dropdown}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
