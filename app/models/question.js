import DS from 'ember-data';

export default DS.Model.extend({
  subject: DS.attr(),
  author: DS.attr(),
  date: DS.attr(),
  content: DS.attr()
});
