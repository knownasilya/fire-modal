import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bootstrap modal body', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    await render(hbs`{{bootstrap-modal-body}}`);

    assert.equal(find('*').textContent.trim(), '');

    // Template block usage:" + EOL +
    await render(hbs`
      {{#bootstrap-modal-body}}
        template block text
      {{/bootstrap-modal-body}}
    `);

    assert.equal(find('*').textContent.trim(), 'template block text');
  });
});
