import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  layout,

  actions: {
    overlayClick() {
      let allow = this.get('closeOnOverlayClick');

      if (allow && this.close) {
        this.close(true);
      }
    }
  }
});
