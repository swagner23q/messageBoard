import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      answers: this.store.findAll('answer'),
      question: this.store.findRecord('question', params.question_id)
    });
  },
  actions: {
    save6(params) {
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      this.transitionTo('question', params.question_id);
    },
  }
});
