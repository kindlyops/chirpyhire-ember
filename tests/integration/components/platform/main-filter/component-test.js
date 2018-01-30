import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('platform/main-filter', 'Integration | Component | platform/main filter', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{platform/main-filter}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#platform/main-filter}}
      template block text
    {{/platform/main-filter}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
