import DS from 'ember-data';

export default DS.Model.extend({
	courseId: DS.attr('string'),
	courseName: DS.attr('string'),
	instructor: DS.attr('string'),
	sessionType: DS.attr('string'),
	sessionID: DS.attr('string'),
	startTime: DS.attr('string'),
	endTime: DS.attr('string'),
	onDay: DS.attr('string'),
	location: DS.attr('string')
});
