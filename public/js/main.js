document.addEventListener('DOMContentLoaded', function() {


    var element = document.getElementById('calendar');
    const today = new Date();

    var calendar = new jsCalendar(element); 

    today.setHours(0, 0, 0, 0);
    console.log(today.toString());
    calendar.onDateClick(function(event, date) {

        if (event.target.style.backgroundColor == 'rgb(255, 36, 0)') {
            event.target.style.backgroundColor = "rgb(255, 165, 0)";
            event.target.style.color = 'black';
        } else if (event.target.style.backgroundColor == "rgb(255, 165, 0)") {
            event.target.style.backgroundColor = 'rgb(76, 187, 23)';
            event.target.style.color = 'black';
        } else if (event.target.style.backgroundColor == 'rgb(76, 187, 23)' && date.toString() != today.toString()) {
            event.target.style.backgroundColor = 'white';
            event.target.style.color = 'black';
        } else if (event.target.style.backgroundColor == 'rgb(76, 187, 23)' && date.toString() == today.toString()) {
            event.target.style.backgroundColor = '#52c9ff';
            event.target.style.color = 'white';
        } else {
            event.target.style.backgroundColor = 'rgb(255, 36, 0)';
            event.target.style.color = 'black';
        }
        console.log(date.toString());
        console.log(today.toString());
        console.log(today.toString() == date.toString());
    });

});

