// Login Screen:
// =============

var divVertical = document.createElement('div');
divVertical.setAttribute('id','divVertical');
document.body.appendChild(divVertical);
divVertical.style.display = "none";

var div1 = document.createElement('div');
div1.setAttribute('id','div1');
document.body.appendChild(div1);
div1.style.display = "none";

var addEventScreen = document.createElement('div');
addEventScreen.setAttribute('id', 'addEventScreen');
document.body.appendChild(addEventScreen);
addEventScreen.style.display = "none";

var addEventScreenVertical = document.createElement('div');
addEventScreenVertical.setAttribute('id', 'addEventScreenVertical');
addEventScreen.appendChild(addEventScreenVertical);


var divModal = document.createElement('div');
divModal.setAttribute('id','divModal');
divModal.setAttribute('class','modal-content');
document.body.appendChild(divModal);
divModal.style.display = "none";

function login() {
    var login = document.createElement('div');
    login.setAttribute('id', 'loginDiv');
    document.body.appendChild(login);
    var img = document.createElement('img');
    img.setAttribute('src', 'saba.png');
    login.appendChild(img);
    var loginText = document.createElement('p');
    loginText.textContent = ':תעודת זהות';
    login.appendChild(loginText);
    var tz = document.createElement('input');
    tz.setAttribute('type', 'text');
    tz.setAttribute('id', 'tz');
    login.appendChild(tz);
    login.appendChild(document.createElement('br'));
    login.appendChild(document.createElement('br'));
    var enter = document.createElement('img');
    enter.setAttribute('src', 'enter.png');
    enter.setAttribute('id', 'img2');
    login.appendChild(enter);
    document.getElementById("img2").onclick = function(){
// this is what happens when we click the button:
        document.getElementById("loginDiv").style.display = 'none';
        loadgif();
    };
}
function loadgif() {
    var gifDiv = document.createElement('div');
    gifDiv.setAttribute('id', 'gifDiv');
    document.body.appendChild(gifDiv);
    var gif = document.createElement('img');
    gif.setAttribute('src', 'i_r_new.gif');
    gif.setAttribute('id', 'gif');
    gifDiv.appendChild(gif);
    setTimeout(function () {
        goToIndex();
    }, 2000);
}
function goToIndex() {
    var gifDiv = document.getElementById('gifDiv');
    gifDiv.style.display = 'none';
    document.getElementById('div1').style.display = 'block';
    document.getElementById('divVertical').style.display = 'block';
    main()
}
login();






var sabaPic2 = document.createElement('img');
sabaPic2.setAttribute('src', 'saba.png');
addEventScreenVertical.appendChild(sabaPic2);

var eventForm = document.createElement('form');
eventForm.setAttribute('id', 'eventForm');
addEventScreen.appendChild(eventForm);
// eventForm.appendChild(document.createElement('br'));

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
var dateImg = document.createElement('img');
dateImg.setAttribute('src', 'hour.png');
eventForm.appendChild(dateImg);
eventForm.appendChild(document.createElement('br'));
eventForm.appendChild(document.createElement('br'));


// Repeat Event
var eventRepeatDaily = document.createTextNode("כל יום");
eventForm.appendChild(eventRepeatDaily);
var separator = document.createTextNode(" | ");
eventForm.appendChild(separator);
var eventRepeatWeekly = document.createTextNode("כל שבוע");
eventForm.appendChild(eventRepeatWeekly);
var separator = document.createTextNode(" | ");
eventForm.appendChild(separator);
var eventRepeatMonthly = document.createTextNode("כל חודש");
eventForm.appendChild(eventRepeatMonthly);
var separator = document.createTextNode(" | ");
eventForm.appendChild(separator);
var eventRepeatYearly = document.createTextNode("כל שנה");
eventForm.appendChild(eventRepeatYearly);
var repeatImg = document.createElement('img');
repeatImg.setAttribute('src', 'repeat.png');
eventForm.appendChild(repeatImg);
eventForm.appendChild(document.createElement('br'));
eventForm.appendChild(document.createElement('br'));




// save
var saveEvent = document.createElement('button');
saveEvent.setAttribute('form', 'login');
saveEvent.setAttribute('type', 'submit');
saveEvent.setAttribute('id', 'saveEvent');
var saveImg = document.createElement('img');
saveImg.setAttribute('src', 'save_new.png');
saveImg.setAttribute('id', 'saveImg');
saveEvent.appendChild(saveImg);
eventForm.appendChild(saveEvent);

saveEvent.onclick = function() {funcPost()};


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
    if (s == 0 || s == 20 || s == 40) {
        main();
    }


    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('divClock').innerHTML =
        h + ":" + m;
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
daysWeekMonthPic.setAttribute('id', 'daysWeekMonthPic');
divVertical.appendChild(daysWeekMonthPic);

divVertical.appendChild(document.createElement('br'));
divVertical.appendChild(document.createElement('br'));
divVertical.appendChild(document.createElement('br'));
divVertical.appendChild(document.createElement('br'));
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

console.log("hi1");
addEvent.onclick = function() {addEventFunc()};

var divEvents = document.createElement('div');
divEvents.setAttribute('id','divEvents');
div1.appendChild(divEvents);

// divEvents.appendChild(document.createElement('br'));

// var eventsTable = document.createElement('table');
// divEvents.appendChild(eventsTable);
//
var x = document.createElement("TABLE");
x.setAttribute("id", "myTable");
divEvents.appendChild(x);

// Create the button

var divPopupButton = document.createElement('button');
divPopupButton.setAttribute('id','divPopupButton');
divPopupButton.setAttribute('class', 'button button2');
divPopupButton.appendChild(document.createTextNode("Clickaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa me!!!!"));
divPopupButton.onclick = function() {popupWindow()};
div1.appendChild(divPopupButton);







var listOfEventsHours = [];
var listOfEventsName = [];
var ListOfEventsDetails = [];
function main()
{
    var j = 0;
    var children = document.getElementById("myTable").childNodes;
    while (j < children.length)
    {
        document.getElementById("myTable").removeChild(children[j]);
        // j++;
    }
    children = document.getElementById("myTable").childNodes;

    var parsed = funcGet();


}

/* input: the answer from the server */
function parseEvents(inputEvents)
{
    var retL1 = [];
    var retL2 = [];
    var retL3 = [];
    var events = JSON.parse(inputEvents);
    var event2 = JSON.parse(events);
    for (i = 0; i < event2.length; i++)
    {
        retL1.push(event2[i].fields.name);
        var timeTemp = event2[i].fields.time;
        timeTemp = timeTemp.split('T');
        timeTemp = timeTemp[1];
        timeTemp = timeTemp.split(':');
        var timeVar = timeTemp[0] + ':' + timeTemp[1];
        retL2.push(timeVar);
        retL3.push(event2[i].fields.comment);
    }
    return [retL1, retL2, retL3];
}
function funcGet()
{
// periodic get to server
    initUrl = "http://127.0.0.1:8000/eventPage/getTodaysEvents/?ID=";
    id = "123456789";
    url = initUrl + id;
    var xhttp = new XMLHttpRequest();
    console.log("hi1");
    xhttp.onreadystatechange = function()
    {
        console.log("hi2");

        if (this.readyState == 4 && this.status == 200)
        {
            console.log("hi3");

            // parse the server's response:
            var ret = parseEvents(this.responseText);
            listOfEventsName = ret[0];
            listOfEventsHours = ret[1];
            ListOfEventsDetails = ret[2];
            listOfEventsName.toString();
            listOfEventsHours.toString();
            ListOfEventsDetails.toString();
            var i = 0;
            while (i<listOfEventsName.length) {
                var eventRow = document.createElement("tr");
                document.getElementById("myTable").appendChild(eventRow);

                var zDetails = document.createElement("TD");
                var tDetails = document.createTextNode(ListOfEventsDetails[i]);
                zDetails.appendChild(tDetails);
                eventRow.appendChild(zDetails);

                var zName = document.createElement("TD");
                var tName = document.createTextNode(listOfEventsName[i]);
                zName.appendChild(tName);
                eventRow.appendChild(zName);

                var zHours = document.createElement("TD");
                var tHours = document.createTextNode(listOfEventsHours[i]);
                zHours.appendChild(tHours);
                eventRow.appendChild(zHours);
                i++;
            }
        }
        console.log("hi4");

    };
    xhttp.open("GET", url, true);
    xhttp.send();
    console.log("hi5");
}


divEvents.appendChild(document.createElement('br'));
divEvents.appendChild(document.createElement('br'));






/*========================== SWICH BETWEEN SCREENS*/


function addEventFunc() {
    console.log("hi2");
    var div1 = document.getElementById("div1");
    div1.style.display = "none";
    var div1 = document.getElementById("divVertical");
    divVertical.style.display = "none";
    var addEventScreen = document.getElementById("addEventScreen");
    addEventScreen.style.display = "block";

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
    main()

}

function funcPost()
{

    var eventDate = document.getElementById("eventDate").value;
    var year = eventDate.slice(0,4);
    var month = eventDate.slice(5,7);
    var day = eventDate.slice(8,10);
    var eventHour = document.getElementById("eventHour").value;
    var hour = eventHour.slice(0,2);
    var minutes = eventHour.slice(3,5);
    var eventName = document.getElementById("eventName").value;
    var eventComments = document.getElementById("eventComments").value;

    var initUrl = "http://127.0.0.1:8000/eventPage/newEvent/?";
// ------ URIIIIIIII ---------
    var user = "123456789";

    var values = {"%Y%":year,"%m%":month,"%d%":day,"%H%":hour,"%M%":minutes,"%S%":"00"};
    var str = '%Y%-%m%-%d% %H%:%M%:%S%';
    str = str.replace("%Y%", values["%Y%"]).replace("%m%", values["%m%"]).replace("%d%", values["%d%" +
    ""]).replace("%H%", values["%H%"]).replace("%M%", values["%M%"]).replace("%S%", values["%S%"]);
    var time = str;

    var name = eventName;
    var comment = eventComments;
    var sound = "";
    var picture = "";
    var recurrence = "Day";
// ------- NO MORE -------
    var timeTag = "time=" + time + '&';
    var nameTag = "name=" + name + '&';
    var commentTag = "comment=" + comment + '&';
    var soundTag = "sound=" + sound + '&';
    var pictureTag = "picture=" + picture + '&';
    var recurrenceTag = "recurrence=" + recurrence + '&';
    var userTag = "user=" + user;
    var url = initUrl + timeTag + nameTag + commentTag + soundTag + pictureTag + recurrenceTag + userTag;
    // divPostButton.onclick = function() { post(url,divPost); };
    // function post(url, divPost)
    // {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function()
        {
            if (this.readyState == 4 && this.status == 200)
            {
// eveything is ok
//                 var par = document.createElement('p');
//                 par.innerHTML = "all cool!";
//                 divPost.appendChild(par);
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    // }

    var addEventScreen = document.getElementById("addEventScreen");
    addEventScreen.style.display = "none";
    document.getElementById("eventDate").value = '';
    document.getElementById("eventHour").value = '';
    document.getElementById("eventName").value = '';
    document.getElementById("eventComments").value = '';

    // addEventScreen.removeChild(document.getElementById("addEventScreenVertical"));
    var divVertical = document.getElementById("divVertical");
    divVertical.style.display = "block";
    var div1 = document.getElementById("div1");
    div1.style.display = "block";

    console.log("main in func");
    main();
    // get - call main
}


function startTime2() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime2(m);
    document.getElementById('divClock2').innerHTML = h + ":" + m;
    var t = setTimeout(startTime2, 1000);

}
function checkTime2(i) {
    if (i < 10) {i = "0" + i} // add zero in front of numbers < 10
    return i;
}
function popupWindow()
{
// Create the modal
    var div1 = document.getElementById("div1");
    div1.style.display = "none";
    var divVertical = document.getElementById("divVertical");
    divVertical.style.display = "none";
    var divModal = document.getElementById("divModal");
    divModal.style.display = "block";

// Create close button
    var spanModal = document.createElement('span');
    spanModal.setAttribute('class', 'close');
// spanModal.innerHTML = '&times;';
// Create Clock object
    var divClock2 = document.createElement('div');
    divClock2.setAttribute('id','divClock2');
// Create video object
    var video = document.createElement('video');
    var source = document.createElement('source');
    source.setAttribute('src', 'alert.mp4');
    source.setAttribute('type', 'video/mp4');
    video.appendChild(source);
    divModal.appendChild(video);
    divModal.appendChild(divClock2);
    divModal.appendChild(spanModal);
// Get the modal
    var modal = document.getElementById('divModal');
    modal.style.display = "none";
// Get the button that opens the modal
    var btn = document.getElementById("popupButton");
// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal
    modal.style.display = "block";

    startTime2();
    video.load();
    video.play();
// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        video.pause();
        modal.style.display = "none";
        var divVertical = document.getElementById("divVertical");
        divVertical.style.display = "block";
        var div1 = document.getElementById("div1");
        div1.style.display = "block";
    };
// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            var divVertical = document.getElementById("divVertical");
            divVertical.style.display = "block";
            var div1 = document.getElementById("div1");
            div1.style.display = "block";
        }
    };
}
