// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//

//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require moment
//= require fullcalendar

$.ajaxSetup({
	headers: {
		'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
	}
});

fullCal = function(){
	var currentUser = $('#user-now').attr('user-id');
	var uid = $('#calendar').attr('data-uid');
	$('#calendar').fullCalendar({
		height: 275,
		eventLimit: true,
		allDayDefault: true,
		allDaySlot: true,
		eventSources:[
		{
			url:'/unavailables/'+ uid +'.json',
			cellColor: '#ff4351',
		}
		],
		eventColor: '#ff4351',
		dayClick: function(date) {
			if (uid === currentUser){
				// var userInput = $('#user-now').attr('user-id');
				var dateBox = this;
				var unAvaliable = date.toString()
				// alert("User ID: " + userID);
				$.ajax({
				  type: "POST",
				  url: "/unavailables",
				  data: {
				  	unavailable: {
							date: unAvaliable,
							user_id: currentUser,
						}
					},
					beforeSend: function(xhr) { xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
				  success: function() {
				  	// This is where you make the box red.
						$(dateBox).css('background-color', '#ff4351');
				  },
				  //dataType: dataType
				});
			}
		}
});
}


dropdown = function() {

	$('.dropdown-toggle').dropdown()
}

$(document).ready(fullCal);
$(document).ready(dropdown);
$(document).on('page:load', fullCal);
$(document).on('page:load', dropdown);









