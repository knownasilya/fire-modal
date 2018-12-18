import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { click } from 'ember-semantic-test-helpers/test-support';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bootstrap modal', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.setProperties({
      close() {
        assert.ok(true, 'close fired');
      }
    });

    await render(hbs`
      <BootstrapModal
        @close={{this.close}}
      as |modal|>
        <modal.footer as |close|>
          <button onclick={{close}} type='button'>
            Close
          </button>
        </modal.footer>
      </BootstrapModal>
    `);

    assert.dom('#bootstrap-modal').exists();
    await click('Close');
  });
});
