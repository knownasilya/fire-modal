import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bootstrap-modal-body', 'Integration | Component | bootstrap modal body', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{bootstrap-modal-body}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#bootstrap-modal-body}}
      template block text
    {{/bootstrap-modal-body}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
