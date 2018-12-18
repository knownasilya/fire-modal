import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bootstrap modal', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    await render(hbs`{{bootstrap-modal}}`);

    assert.equal(find('*').textContent.trim(), '');

    // Template block usage:" + EOL +
    await render(hbs`
      {{#bootstrap-modal}}
        template block text
      {{/bootstrap-modal}}
    `);

    assert.equal(find('*').textContent.trim(), 'template block text');
  });
});
