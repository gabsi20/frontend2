import Ember from 'ember';

var cats = [{
  id: 1,
  name: 'Minki',
  gender: 'female',
  description: 'Minki is a little lovely cat.',
  picture: 'http://www.businessinsider.com/image/4f3433986bb3f7b67a00003c/cute-cat.jpg'
}, {
  id: 2,
  name: 'Benno',
  gender: 'male',
  description: 'Benno is the big boss in the house. Nobody ever tried to take his place.',
  picture: 'http://bestpethomeremedies.com/wp-content/uploads/2013/10/Cat-Constipation.jpg'
}, {
  id: 3,
  name: 'Barney',
  gender: 'male',
  description: 'Barney is the youngest of all the cats. He isn\'t very shy indeed.',
  picture: 'https://foguth.files.wordpress.com/2014/11/blue-cat.jpg'
}];

export default Ember.Route.extend({
  model() {
    return cats;
  }
});
