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
fullCal = function(){
	var currentUser = $('#user-now').attr('user-id');
	var uid = $('#calendar').attr('data-uid');
	$('#calendar').fullCalendar({
	  height: 275,
	  eventLimit: true,
	  allDayDefault: true,
	  allDaySlot: true,
	  eventSources:[
	  {url:'/unavailables/'+ uid +'.json',
	  cellColor: '#ff4351',
	  }],
	  eventColor: '#ff4351',
		dayClick: function(date) {
			if(uid === currentUser){
		        $(this).css('background-color', '#ff4351');
		//         var userInput = $('#user-now').attr('user-id');
		    	var unAvaliable = date.toString()
		    // alert("User ID: " + userID);
		        $.post("/unavailables", {
		        unavailable: {
		        date: unAvaliable,
		        user_id: currentUser,
		        }
		        });
			}
		}
	   });
}

$(document).ready(fullCal);
$(document).on('page:load', fullCal);