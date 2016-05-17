import Mirage, {faker}  from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  id: faker.random.uuid,
  status: faker.list.random("open","active","closed"),
  editor: faker.name.lastName,
  creator: faker.name.lastName,
  title(i) { return `Task Nr. ${i}`; },
  description: faker.random.word,
  priority: faker.random.boolean,
  createdAt:  faker.date.past,
  changedAt: faker.date.past,
});

