import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('platform/filters-dropdown', 'Integration | Component | chirpyhire dropdown', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{platform/filters-dropdown}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#platform/filters-dropdown}}
      template block text
    {{/platform/filters-dropdown}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
