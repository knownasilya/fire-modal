import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  layout: layout,
  classNames: ['modal-header'],
  showCloseButton: true
});
