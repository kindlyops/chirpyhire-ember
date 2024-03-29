import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('secondary-left-navigation', 'Integration | Component | secondary left navigation', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{secondary-left-navigation}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#secondary-left-navigation}}
      template block text
    {{/secondary-left-navigation}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
