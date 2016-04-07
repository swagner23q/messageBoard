import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    save1() {
      var params = {
        subject: this.get('subject'),
        author: this.get('author'),
        date: this.get('date'),
        content: this.get('content')
      };
      this.set('addNewQuestion', false);
      this.sendAction('save2', params);
    },
  }
});
