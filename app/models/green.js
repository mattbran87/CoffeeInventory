import DS from 'ember-data';

export default DS.Model.extend({
  Name: DS.attr(),
  Weight: DS.attr(),
  Description: DS.attr()
});
