import Component from '@ember/component';
import { computed } from '@ember/object';
import Table from 'ember-light-table';

export default Component.extend({

  model: null,

	columns: computed(function() {
    return [{
      label: 'Course Name',
      valuePath: 'name',
      width: '20%',
    }, {
      label: 'Day(s)',
      valuePath: 'onDay',
      width: '20%'
    }, {
      label: 'Time',
      valuePath: 'time',
      width: '20%'
    }, {
      label: 'Instructor',
      valuePath: 'instructor',
      width: '20%'
    }, {
      label: 'Location',
      valuePath: 'location',
      width: '20%'
    }];
  }),

	table: computed('model', function() {
   	return new Table(this.get('columns'), this.get('model'));
  })
});
