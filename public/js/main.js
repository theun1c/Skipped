document.addEventListener('DOMContentLoaded', async function() {

    color = '';
    date = '';

    var element = document.getElementById('calendar');
    const today = new Date();

    var calendar = new jsCalendar(element, "30/01/2017", {
        zeroFill: true,
        backgroundColor: 'red',
    }); 
    
    today.setHours(0, 0, 0, 0);
    // console.log(today.toString());

    const response = await fetch('/api/data');
    const data = await response.json();
    // console.log(data);


    calendar.refresh();

    

    calendar.onDateClick(function(event, date) {

        if (event.target.style.backgroundColor == 'rgb(76, 187, 23)') {
            event.target.style.backgroundColor = "rgb(255, 165, 0)";
            event.target.style.color = 'black';
            saveData(date, 'rgb(255, 165, 0)');
        } else if (event.target.style.backgroundColor == "rgb(255, 165, 0)") {
            event.target.style.backgroundColor = 'rgb(255, 36, 0)';
            event.target.style.color = 'black';
            saveData(date, 'rgb(255, 36, 0)');
        } else if (event.target.style.backgroundColor == 'rgb(255, 36, 0)' && date.toString() != today.toString()) {
            event.target.style.backgroundColor = 'white';
            event.target.style.color = 'black';
            saveData(date, 'white');
        } else if (event.target.style.backgroundColor == 'rgb(255, 36, 0)' && date.toString() == today.toString()) {
            event.target.style.backgroundColor = '#52c9ff';
            event.target.style.color = 'white';
            saveData(date, '#52c9ff');
        } else {
            event.target.style.backgroundColor = 'rgb(76, 187, 23)';
            event.target.style.color = 'black';
            saveData(date, 'rgb(76, 187, 23)');
        }
    });
});

async function saveData(date, color) {
    await fetch(`/api/calendar`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            date: date,
            color: color
        })
    });

    console.log("Data saved");
}

