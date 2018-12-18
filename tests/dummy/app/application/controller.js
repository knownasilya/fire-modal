import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    toggleShow() {
      this.toggleProperty('showModal');
    }
  }
});
