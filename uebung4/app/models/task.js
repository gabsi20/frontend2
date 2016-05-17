import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
  uid: DS.attr('string'),
  status: DS.attr('string'),
  editor: DS.attr('string'), //DS.belongsTo('user')
  creator: DS.attr('string'), //DS.belongsTo('user')
  title: DS.attr('string'),
  description: DS.attr('string'),
  priority: DS.attr('boolean'),
  createdAt: DS.attr('date'),
  changedAt: DS.attr('date')
});
