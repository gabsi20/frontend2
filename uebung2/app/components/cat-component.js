import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		myfunc: function(cat){
			alert("Hello "+cat.name);
		}
	},
	tagName: "li",
	classNames: ["nostyles"],
	click(){
		this.element.firstChild.style.background = "blue";
	}
});


