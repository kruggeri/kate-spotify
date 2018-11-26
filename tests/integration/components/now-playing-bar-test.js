import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('now-playing-bar', 'Integration | Component | now playing bar', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{now-playing-bar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#now-playing-bar}}
      template block text
    {{/now-playing-bar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
