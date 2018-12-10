import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
	    // saveSchedule(event) {
	    //   	// var clickedThing = event.target;
					// console.log("SAVE");
					// // while(clickedThing.nodeName != "TABLE"){
					// // 	clickedThing = clickedThing.parentElement;
					// // }
					// // var scheduleId = clickedThing.id.substring(8);
					// // var thisSchedule = document.getElementById("hidden"+scheduleId).innerHTML;
					// // console.log(thisSchedule);
					// // var jsonSchedule = JSON.parse(thisSchedule);
					// // var courses=[]
					// // for(var i=0; i<jsonSchedule.length; i++){
					// // 	var myClass = JSON.stringify(jsonSchedule[i]);
					// // 	myClass = myClass.substr(16);
					// // 	var endPosition = myClass.indexOf("\'");
					// // 	console.log(myClass);
					// // 	myClass = myClass.substr(0, endPosition);
					// // 	courses.push(myClass);
					// // }
					// // if(email==null || email.length==0){
					// // 	email=document.getElementById("hiddenEmail").innerHTML;
					// // }
					// // if(email!=null && email.length>0){
					// // 	var body={
					// // 			"email": email,
					// // 			"schedule": courses
					// // 	};
					// // 	if(window.confirm("Save this Schedule?")){
					// // 		var xhttp = new XMLHttpRequest();
					// //   		xhttp.onreadystatechange = function(){
					// //   			console.log("Saved!");
					// //   			var response = xhttp.responseText;
					// //   			console.log(response);
					// //   		};
					// //   		xhttp.open("POST", "save", true);
					// //   		xhttp.send(JSON.stringify(body));
					// // 	}
					// // }else{
					// // 	window.alert("only logged in users can save schedules!");
					// // }
	    // }
  }
});
