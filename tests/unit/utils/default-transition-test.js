import defaultTransition from 'bootstrap-modal/utils/default-transition';
import { module, test } from 'qunit';

module('Unit | Utility | default transition');

// Replace this with your real tests.
test('it throws if incorrect context', function(assert) {
  assert.throws(() => {
    defaultTransition();
  }, new Error('[bootstrap-modal] Invalid transitions context supplied'), 'Should error if context is incorrect');
});
