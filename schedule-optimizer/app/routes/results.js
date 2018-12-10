import Route from '@ember/routing/route';

export default Route.extend({
	title:'Your Schedule Results!',

	queryParams: {
        selected: ''
    },
   model(params) {

   		console.log(params.selected);
		$('#content').html(`<div class="loader">Loading...</div>`);

   		let courses = params.selected.split(",");
		$.post( "http://localhost:8080/ScheduleMaker/query", JSON.stringify(courses), function(data) {
			$('#content').html('');


		for(var i = 0; i < data.length; i++) {

		    $('#content').append(`<table class="table table-striped table-dark" style="table-layout:fixed" onclick="saveSchedule(event)">
		    						<thead class = "thead-light">
										<tr>
											<th style="width: 20%; text-align: center;">Course Name</th>
											<th style="width: 20%; text-align: center;">Date(s)</th>
											<th style="width: 20%; text-align: center;">Time</th>
											<th style="width: 20%; text-align: center;">Instructor</th>
											<th style="width: 20%; text-align: center;">Location</th>
										</tr>
									</thead>`);

	    	$('#content').append('<tbody>');

		    var schedule = data[i];
	   		 for(var j = 0; j < schedule.length; j++) {
	   		 	var section = JSON.parse(schedule[j]);
	   		 	console.log(section.instructor);
	   		 	$('#content').append(`
	   		 		<tr class="border border-primary" style=" width:100%; display:table-header-group;">   
						<td style="width: 20%; text-align: center; ">`+section.courseName+`</td>
						<td style="width: 20%; text-align: center;">`+section.onDay+`</td>
						<td style="width: 20%; text-align: center;">`+section.startTime+` - `+section.endTime+` </td>
						<td style="width: 20%; text-align: center;">`+section.instructor+`</td>
						<td style="width: 20%; text-align: center;">`+section.location+`</td>
					</tr>
	   		 		`);
	    		}
	    	$('#content').append('</tbody>');

	    	$('#content').append('</table>');

	    	$('#content').append('<br><br><br>');
		}

		});
   }


});