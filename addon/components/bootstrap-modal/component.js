import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  layout: layout,
  actions: {
    overlayClick() {
      var allow = this.get('closeOnOverlayClick');

      if (allow && this.get('close')) {
        this.sendAction('close', true);
      }
    }
  }
});
