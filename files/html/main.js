// Login Screen:
// =============

var divVertical = document.createElement('div');
divVertical.setAttribute('id','divVertical');
document.body.appendChild(divVertical);

var div1 = document.createElement('div');
div1.setAttribute('id','div1');
document.body.appendChild(div1);


var addEventScreen = document.createElement('div');
addEventScreen.setAttribute('id', 'addEventScreen');
document.body.appendChild(addEventScreen);
addEventScreen.style.display = "none";

var CloudOrSun = document.createElement('img');
CloudOrSun.setAttribute('src', 'cloud.png');
div1.appendChild(CloudOrSun);
div1.appendChild(document.createElement('br'));

var dayAndDate = document.createElement('div');
dayAndDate.setAttribute('id', 'dayAndDate');
div1.appendChild(dayAndDate);

var d = new Date();
var weekday = new Array(7);
weekday[0] =  "יום ראשון ";
weekday[1] = "יום שני ";
weekday[2] = "יום שלישי ";
weekday[3] = "יום רביעי ";
weekday[4] = "יום חמישי ";
weekday[5] = "יום שישי ";
weekday[6] = "יום שבת ";

var n = weekday[d.getDay()];
dayAndDate.appendChild(document.createTextNode(n));

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
if(dd<10){
    dd='0'+dd;
}
if(mm<10){
    mm='0'+mm;
}
var today = dd+'.'+mm+'.'+yyyy;
dayAndDate.appendChild(document.createTextNode(today));

var divClock = document.createElement('div');
divClock.setAttribute('id','divClock');
div1.appendChild(divClock);


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    if (s == 0) {
        // document.body.appendChild(document.createTextNode("Periodic"));
        // document.body.appendChild(document.createElement('br'));
        main();
    }


    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('divClock').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

startTime();


var sabaPic = document.createElement('img');
sabaPic.setAttribute('src', 'saba.png');
divVertical.appendChild(sabaPic);

divVertical.appendChild(document.createElement('br'));
divVertical.appendChild(document.createElement('br'));
divVertical.appendChild(document.createElement('br'));
divVertical.appendChild(document.createElement('br'));
divVertical.appendChild(document.createElement('br'));
divVertical.appendChild(document.createElement('br'));

var daysWeekMonthPic = document.createElement('img');
daysWeekMonthPic.setAttribute('src', 'day_week.png');
divVertical.appendChild(daysWeekMonthPic);

divVertical.appendChild(document.createElement('br'));
divVertical.appendChild(document.createElement('br'));
divVertical.appendChild(document.createElement('br'));
divVertical.appendChild(document.createElement('br'));

var addEvent = document.createElement('button');
addEvent.setAttribute('id','addEvent');
addEvent.setAttribute('class', 'button button2');
var buttonAddEventImage = document.createElement('img');
buttonAddEventImage.setAttribute('src', 'new_reminder_button.png');
addEvent.appendChild(buttonAddEventImage);
divVertical.appendChild(addEvent);


var divEvents = document.createElement('div');
divEvents.setAttribute('id','divEvents');
div1.appendChild(divEvents);

divEvents.appendChild(document.createElement('br'));

// var eventsTable = document.createElement('table');
// divEvents.appendChild(eventsTable);
//
var x = document.createElement("TABLE");
x.setAttribute("id", "myTable");
divEvents.appendChild(x);

var listOfEventsHours = [];
var listOfEventsName = [];
var ListOfEventsDetails = [];

function main()
{
// example of 3 events:
    var inputEvents =  "[{\"model\": \"eventPage.event\", \"pk\": 2677921901, \"fields\": {\"time\": \"2017-01-04T22:22:00Z\",\"name\": \"\\u05e7\\u05d7 \\u05d0\\u05ea \\u05d4\\u05db\\u05d3\\u05d5\\u05e8\\u05d9\\u05dd \\u05e9\\u05dc\\u05da \\u05d1\\u05d1\\u05e7\\u05e9\\u05d4\", \"comment\": \"please take the red pill\", \"sound\": \"\", \"picture\": \"\", \"recurrence\": \"Day\", \"user\": 302184452}}, {\"model\": \"eventPage.event\", \"pk\": 5155344511, \"fields\": {\"time\": \"2017-01-04T22:22:00Z\", \"name\": \"\\u05e7\\u05d7 \\u05d0\\u05ea \\u05d4\\u05db\\u05d3\\u05d5\\u05e8\\u05d9\\u05dd \\u05e9\\u05dc\\u05da \\u05d1\\u05d1\\u05e7\\u05e9\\u05d4\", \"comment\": \"please take the red pill\", \"sound\": \"\", \"picture\": \"\", \"recurrence\": \"Day\", \"user\": 302184452}}, {\"model\": \"eventPage.event\", \"pk\": 8005982494, \"fields\": {\"time\": \"2017-01-04T22:22:00Z\", \"name\": \"Take your pills\", \"comment\": \"please take the red pill\", \"sound\": \"\", \"picture\": \"\", \"recurrence\": \"Day\", \"user\": 302184452}}]";
// these are the OLD lists!
    var OldListOfEventsName = [];
    var OldListOfEventsHours = [];
    var OldListOfEventsDetails = [];
// send a get request from the server:
    //var parsed = funcGet(OldListOfEventsName, OldListOfEventsHours, OldListOfEventsDetails);
    var parsed = parseEvents(inputEvents, OldListOfEventsName, OldListOfEventsHours, OldListOfEventsDetails);
// these are the NEW lists!
    var newListOfEventsName = parsed[0];
    var newListOfEventsHours = parsed[1];
    var newListOfEventsDetails = parsed[2];
// check if there is a new event
    var res = needUpdate(OldListOfEventsName, OldListOfEventsHours, OldListOfEventsDetails,
        newListOfEventsName, newListOfEventsHours, newListOfEventsDetails);

    if (res != false)
    {
        OldListOfEventsName = newListOfEventsName;
        OldListOfEventsHours = newListOfEventsHours;
        OldListOfEventsDetails = newListOfEventsDetails;
        OldListOfEventsName.toString();
        OldListOfEventsHours.toString();
        OldListOfEventsDetails.toString();
        var i = 0;
        while (i<OldListOfEventsName.length) {
            var eventRow = document.createElement("tr");
            document.getElementById("myTable").appendChild(eventRow);

            var zDetails = document.createElement("TD");
            var tDetails = document.createTextNode(OldListOfEventsDetails[i]);
            zDetails.appendChild(tDetails);
            eventRow.appendChild(zDetails);

            var zName = document.createElement("TD");
            var tName = document.createTextNode(OldListOfEventsName[i]);
            zName.appendChild(tName);
            eventRow.appendChild(zName);

            var zHours = document.createElement("TD");
            var tHours = document.createTextNode(OldListOfEventsHours[i]);
            zHours.appendChild(tHours);
            eventRow.appendChild(zHours);

            i++;
        }
    }
}

/* if there is something new in the events, the function returns the new lists (containing the new events)
 * and if there is no new events, the function returns false */
function needUpdate(l1Old, l2Old, l3Old, l1New, l2New, l3New)
{
    var res1 = areEventsEqual(l1Old, l1New);
    var res2 = areEventsEqual(l2Old, l2New);
    var res3 = areEventsEqual(l3Old, l3New);
// if there's a change in the events:
    if (res1 == false || res2 == false || res3 == false)
    {
        return [l1New, l2New, l3New];
    }
    else
    {
        return false;
    }
}
/* check if 2 lists are equal */
function areEventsEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            console.log("here70");
            return false;
    }
    return true;
}

/* input: the answer from the server */
function parseEvents(inputEvents, ListOfEventsName, ListOfEventsHours, ListOfEventsDetails)
{
    var retL1 = JSON.parse(JSON.stringify(ListOfEventsName));
    var retL2 = JSON.parse(JSON.stringify(ListOfEventsHours));
    var retL3 = JSON.parse(JSON.stringify(ListOfEventsDetails));
    var events = JSON.parse(inputEvents);
    for (i = 0; i < events.length; i++)
    {
        retL1.push(events[i].fields.name);
        var timeTemp = events[i].fields.time;
        timeTemp = timeTemp.split('T');
        timeTemp = timeTemp[1];
        timeTemp = timeTemp.split(':');
        var timeVar = timeTemp[0] + ':' + timeTemp[1];
        retL2.push(timeVar);
        retL3.push(events[i].fields.comment);
    }
    return [retL1, retL2, retL3];
}



function funcGet(ListOfEventsName, ListOfEventsHours, ListOfEventsDetails)
{
    var divGet = document.createElement('div');
    divGet.setAttribute('id','divGet');
    document.body.appendChild(divGet);
// periodic get to server
    initUrl = "http://192.168.1.108:8000/eventPage/getTodaysEvents/?ID=";
    id = "123456789";
    url = initUrl + id;
    // var divGetButton = document.createElement('button');
    // divGetButton.onclick = function() {periodicGet(url)};
    // divGet.appendChild(divGetButton);
    periodicGet(url);
    function periodicGet(url)
    {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function()
        {
            if (this.readyState == 4 && this.status == 200)
            {
            // parse the server's response:
                parseEvents(this.responseText, ListOfEventsName, ListOfEventsHours, ListOfEventsDetails);
                //return this.responseText;
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }
}










divEvents.appendChild(document.createElement('br'));
divEvents.appendChild(document.createElement('br'));



addEvent.onclick = function() {addEventFunc()};


///setInterval(checkForEvents, 5000); // 1000 miliseconds = 1 second



/*========================== ADD EVENT SCREEN*/
 // var addEventHeader = document.createElement('h1');
 // addEventHeader.appendChild(document.createTextNode('הכנסת אירוע חדש'));
 // addEventHeader.setAttribute('id', 'addEventHeader');
 // addEventScreen.appendChild(addEventHeader);



/*========================== SWICH BETWEEN SCREENS*/


function addEventFunc() {
    var div1 = document.getElementById("div1");
    div1.style.display = "none";
    var div1 = document.getElementById("divVertical");
    divVertical.style.display = "none";
    var addEventScreen = document.getElementById("addEventScreen");
    addEventScreen.style.display = "block";

    var addEventScreenVertical = document.createElement('div');
    addEventScreenVertical.setAttribute('id', 'addEventScreenVertical');
    addEventScreen.appendChild(addEventScreenVertical);

    var sabaPic2 = document.createElement('img');
    sabaPic2.setAttribute('src', 'saba.png');
    addEventScreenVertical.appendChild(sabaPic2);

    var eventForm = document.createElement('form');
    eventForm.setAttribute('id', 'eventForm');
    addEventScreen.appendChild(eventForm);
    eventForm.appendChild(document.createElement('br'));

    // Event Name:
    var eventName = document.createElement('input');
    eventForm.appendChild(eventName);
    eventName.setAttribute('class', 'bar');
    eventName.setAttribute('type','text');
    eventForm.appendChild(document.createTextNode(':שם התזכורת'));
    eventName.setAttribute('id', 'eventName');
    eventForm.appendChild(document.createElement('br'));
    eventForm.appendChild(document.createElement('br'));

    // Event Comments:
    var eventComments = document.createElement('input');
    eventForm.appendChild(eventComments);
    eventForm.appendChild(document.createTextNode(':הערות'));
    eventComments.setAttribute('id', 'eventComments');
    eventForm.appendChild(document.createElement('br'));
    eventForm.appendChild(document.createElement('br'));

    // Date:
    var eventDate = document.createElement('input');
    eventDate.setAttribute('type', 'date');
    eventDate.setAttribute('id', 'eventDate');
    eventForm.appendChild(eventDate);
    // eventForm.appendChild(document.createTextNode('בחר בבקשה תאריך'));
    var dateImg = document.createElement('img');
    dateImg.setAttribute('src', 'date.png');
    eventForm.appendChild(dateImg);
    eventForm.appendChild(document.createElement('br'));
    eventForm.appendChild(document.createElement('br'));

    // Hour:

    var eventHour = document.createElement('input');
    eventHour.setAttribute('type', 'time');
    eventHour.setAttribute('id', 'eventHour');
    eventForm.appendChild(eventHour);
    // eventForm.appendChild(document.createTextNode('בחר בבקשה שעה'));
    var dateImg = document.createElement('img');
    dateImg.setAttribute('src', 'hour.png');
    eventForm.appendChild(dateImg);
    eventForm.appendChild(document.createElement('br'));
    eventForm.appendChild(document.createElement('br'));
    eventForm.appendChild(document.createElement('br'));


    // Repeat Event


    var saveEvent = document.createElement('button');
    saveEvent.setAttribute('form', 'login');
    saveEvent.setAttribute('type', 'submit');
    saveEvent.setAttribute('id', 'saveEvent');
    saveEvent.appendChild(document.createTextNode('שמור'));
    eventForm.appendChild(saveEvent);
    saveEvent.onclick = function() {saveEventAndReturnFunc()};
}

function saveEventAndReturnFunc() {
    var addEventScreen = document.getElementById("addEventScreen");
    addEventScreen.style.display = "none";
    addEventScreen.removeChild(document.getElementById("eventForm"));
    addEventScreen.removeChild(document.getElementById("addEventScreenVertical"));
    var divVertical = document.getElementById("divVertical");
    divVertical.style.display = "block";
    var div1 = document.getElementById("div1");
    div1.style.display = "block";
}
