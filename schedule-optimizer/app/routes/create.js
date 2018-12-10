import Route from '@ember/routing/route';

export default Route.extend({
	title:'Create a List of Schedules!',
	actions: {
    submit: function() {
    	var courses = [];
		var c1 = document.getElementById("course1").value;
		if(c1!="None"){
			courses.push(c1);
		}
		var c2 = document.getElementById("course2").value;
		if(c2!="None"){
			courses.push(c2);
		}
		var c3 = document.getElementById("course3").value;
		if(c3!="None"){
			courses.push(c3);
		}
		var c4 = document.getElementById("course4").value;
		if(c4!="None"){
			courses.push(c4);
		}
		var c5 = document.getElementById("course5").value;
		if(c5!="None"){
			courses.push(c5);
		}

    	this.transitionTo('/results/?selected='+courses);
    }
  }
});
