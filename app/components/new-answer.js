import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    save4() {
      var params = {
        author: this.get('author'),
        date: this.get('date'),
        response: this.get('response'),
      };
      this.set('addNewAnswer', false);
      this.sendAction('save5', params);
    }
  }
});
