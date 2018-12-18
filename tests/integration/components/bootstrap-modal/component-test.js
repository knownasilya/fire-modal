import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bootstrap modal', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.setProperties({
      close() {}
    });

    await render(hbs`
      <BootstrapModal
        @close={{this.close}}
      />
    `);

    assert.dom('#bootstrap-modal').exists();
  });
});
