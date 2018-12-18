import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bootstrap modal footer', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.setProperties({
      close() {}
    });

    await render(hbs`
      <BootstrapModalFooter
        @close={{this.close}}
      />
    `);

    assert.dom('.modal-footer').exists();
  });
});
