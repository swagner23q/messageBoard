import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  question: DS.belongsTo('question', { async: true }),
  date: DS.attr(),
  response: DS.attr()
});
