function createGroupEventFunc() {

    // Creating the div for createEvent
    var createGroupEventDiv = document.createElement('div');
    createGroupEventDiv.setAttribute('id', 'createGroupEventDiv');
    createGroupEventDiv.style.display = 'block';
    document.body.appendChild(createGroupEventDiv);

    createGroupEventDiv.appendChild(document.createElement('br'));

    // Creating table for add event
    var rightDiv = document.createElement('div');
    rightDiv.setAttribute('id', 'rightDiv');
    var leftDiv = document.createElement('div');
    leftDiv.setAttribute('id', 'leftDiv');
    createGroupEventDiv.appendChild(leftDiv);
    createGroupEventDiv.appendChild(rightDiv);


    var eventFormRight = document.createElement('form');
    eventFormRight.setAttribute('id', 'managerEventFormRight');
    rightDiv.appendChild(eventFormRight);

    var eventFormLeft = document.createElement('form');
    eventFormLeft.setAttribute('id', 'managerEventFormLeft');
    leftDiv.appendChild(eventFormLeft);


    // ==== right side ====
    // Event Name:
    var eventName = document.createElement('input');
    eventFormRight.appendChild(eventName);
    eventName.setAttribute('class', 'bar');
    eventName.setAttribute('type','text');
    eventFormRight.appendChild(document.createTextNode(':שם התזכורת'));
    eventName.setAttribute('id', 'eventName');
    eventFormRight.appendChild(document.createElement('br'));
    eventFormRight.appendChild(document.createElement('br'));

    // Date:
    var eventDate = document.createElement('input');
    eventDate.setAttribute('type', 'date');
    eventDate.setAttribute('id', 'eventDate');
    eventFormRight.appendChild(eventDate);
    var dateImg = document.createElement('img');
    dateImg.setAttribute('src', 'date.png');
    eventFormRight.appendChild(dateImg);
    eventFormRight.appendChild(document.createElement('br'));
    eventFormRight.appendChild(document.createElement('br'));

    // Hour:
    var eventHour = document.createElement('input');
    eventHour.setAttribute('type', 'time');
    eventHour.setAttribute('id', 'eventHour');
    eventFormRight.appendChild(eventHour);
    var hourImg = document.createElement('img');
    hourImg.setAttribute('src', 'hour.png');
    eventFormRight.appendChild(hourImg);
    eventFormRight.appendChild(document.createElement('br'));
    // eventFormRight.appendChild(document.createElement('br'));
    // eventFormRight.appendChild(document.createElement('br'));

    // ==== left side ====
    // Event Comments:
    var eventComments = document.createElement('input');
    eventFormLeft.appendChild(eventComments);
    eventFormLeft.appendChild(document.createTextNode(':הערות'));
    eventComments.setAttribute('id', 'eventComments');
    eventFormLeft.appendChild(document.createElement('br'));
    eventFormLeft.appendChild(document.createElement('br'));

    // Repeat Event:
    var eventRepeatDaily = document.createTextNode("כל יום");
    eventFormLeft.appendChild(eventRepeatDaily);
    var separator = document.createTextNode(" | ");
    eventFormLeft.appendChild(separator);
    var eventRepeatWeekly = document.createTextNode("כל שבוע");
    eventFormLeft.appendChild(eventRepeatWeekly);
    var separator = document.createTextNode(" | ");
    eventFormLeft.appendChild(separator);
    var eventRepeatMonthly = document.createTextNode("כל חודש");
    eventFormLeft.appendChild(eventRepeatMonthly);
    var separator = document.createTextNode(" | ");
    eventFormLeft.appendChild(separator);
    var eventRepeatYearly = document.createTextNode("כל שנה");
    eventFormLeft.appendChild(eventRepeatYearly);
    var repeatImg = document.createElement('img');
    repeatImg.setAttribute('src', 'repeat.png');
    eventFormLeft.appendChild(repeatImg);

    eventFormLeft.appendChild(document.createElement('br'));
    eventFormLeft.appendChild(document.createElement('br'));
    eventFormLeft.appendChild(document.createElement('br'));

    // Location:
    var eventLocation = document.createElement('input');
    eventLocation.setAttribute('class', 'bar');
    eventLocation.setAttribute('type','text');
    eventLocation.setAttribute('id', 'eventLocation');
    eventFormLeft.appendChild(eventLocation);
    var locationImg = document.createElement('img');
    locationImg.setAttribute('src', 'location.png');
    eventFormLeft.appendChild(locationImg);
    eventFormLeft.appendChild(document.createElement('br'));
    // eventFormLeft.appendChild(document.createElement('br'));
    // eventFormLeft.appendChild(document.createElement('br'));

    // Old People:
    createGroupEventDiv.appendChild(document.createElement('br'));
    createGroupEventDiv.appendChild(document.createElement('br'));
    createGroupEventDiv.appendChild(document.createElement('br'));
    createGroupEventDiv.appendChild(document.createElement('br'));
    createGroupEventDiv.appendChild(document.createElement('br'));
    createGroupEventDiv.appendChild(document.createElement('br'));
    var oldPeopleDiv = document.createElement('div');
    oldPeopleDiv.setAttribute('id', 'oldDiv');
    oldPeopleDiv.setAttribute('align', 'center');
    createGroupEventDiv.appendChild(oldPeopleDiv)
    var oldPeoplesTable = document.createElement('table');
    oldPeopleDiv.appendChild(oldPeoplesTable);
    var firstRow = document.createElement('tr');
    oldPeoplesTable.appendChild(firstRow);
    var col1 = document.createElement('td');
    col1.setAttribute('id', 'col1');
    firstRow.appendChild(col1);
    var im1 = document.createElement('img');
    im1.setAttribute('src', '1black.png');
    im1.setAttribute('id', '1');
    col1.appendChild(im1);
    im1.onclick = function(){
        var cell = document.getElementById('col1');
        var im = document.getElementById('1');
        cell.removeChild(im);
        var colorIm = document.createElement('img');
        colorIm.setAttribute('src', '1.png');
        colorIm.setAttribute('id', '1');
        cell.appendChild(colorIm);
    };
    var col2 = document.createElement('td');
    col2.setAttribute('id', 'col2')
    firstRow.appendChild(col2);
    var im2 = document.createElement('img');
    im2.setAttribute('src', '2black.png');
    im2.setAttribute('id', '2');
    col2.appendChild(im2);
    im2.onclick = function(){
        var cell = document.getElementById('col2');
        var im = document.getElementById('2');
        cell.removeChild(im);
        var colorIm = document.createElement('img');
        colorIm.setAttribute('src', '2.png');
        colorIm.setAttribute('id', '2');
        cell.appendChild(colorIm);
    };
    var col3 = document.createElement('td');
    col3.setAttribute('id', 'col3')
    firstRow.appendChild(col3);
    var im3 = document.createElement('img');
    im3.setAttribute('src', '3black.png');
    im3.setAttribute('id', '3');
    col3.appendChild(im3);
    im3.onclick = function(){
        var cell = document.getElementById('col3');
        var im = document.getElementById('3');
        cell.removeChild(im);
        var colorIm = document.createElement('img');
        colorIm.setAttribute('src', '3.png');
        colorIm.setAttribute('id', '3');
        cell.appendChild(colorIm);
    };
    var col4 = document.createElement('td');
    col4.setAttribute('id', 'col4');
    firstRow.appendChild(col4);
    var im4 = document.createElement('img');
    im4.setAttribute('src', '4black.png');
    im4.setAttribute('id', '4');
    col4.appendChild(im4);
    im4.onclick = function(){
        var cell = document.getElementById('col4');
        var im = document.getElementById('4');
        cell.removeChild(im);
        var colorIm = document.createElement('img');
        colorIm.setAttribute('src', '4.png');
        colorIm.setAttribute('id', '4');
        cell.appendChild(colorIm);
    };
    var col9 = document.createElement('td');
    col9.setAttribute('id', 'col9');
    firstRow.appendChild(col9);
    var im9 = document.createElement('img');
    im9.setAttribute('src', '9black.png');
    im9.setAttribute('id', '9');
    col9.appendChild(im9);
    im9.onclick = function(){
        var cell = document.getElementById('col9');
        var im = document.getElementById('9');
        cell.removeChild(im);
        var colorIm = document.createElement('img');
        colorIm.setAttribute('src', '9.png');
        colorIm.setAttribute('id', '9');
        cell.appendChild(colorIm);
    };


    // second row of old people
    var secondRow = document.createElement('tr');
    oldPeoplesTable.appendChild(secondRow);
    var col5 = document.createElement('td');
    col5.setAttribute('id', 'col5');
    secondRow.appendChild(col5);
    var im5 = document.createElement('img');
    im5.setAttribute('src', '5black.png');
    im5.setAttribute('id', '5');
    col5.appendChild(im5);
    im5.onclick = function(){
        var cell = document.getElementById('col5');
        var im = document.getElementById('5');
        cell.removeChild(im);
        var colorIm = document.createElement('img');
        colorIm.setAttribute('src', '5.png');
        colorIm.setAttribute('id', '5');
        cell.appendChild(colorIm);
    };
    var col6 = document.createElement('td');
    col6.setAttribute('id', 'col6');
    secondRow.appendChild(col6);
    var im6 = document.createElement('img');
    im6.setAttribute('src', '6black.png');
    im6.setAttribute('id', '6');
    col6.appendChild(im6);
    im6.onclick = function(){
        var cell = document.getElementById('col6');
        var im = document.getElementById('6');
        cell.removeChild(im);
        var colorIm = document.createElement('img');
        colorIm.setAttribute('src', '6.png');
        colorIm.setAttribute('id', '6');
        cell.appendChild(colorIm);
    };
    var col7 = document.createElement('td');
    col7.setAttribute('id', 'col7');
    secondRow.appendChild(col7);
    var im7 = document.createElement('img');
    im7.setAttribute('src', '7black.png');
    im7.setAttribute('id', '7');
    col7.appendChild(im7);
    im7.onclick = function(){
        var cell = document.getElementById('col7');
        var im = document.getElementById('7');
        cell.removeChild(im);
        var colorIm = document.createElement('img');
        colorIm.setAttribute('src', '7.png');
        colorIm.setAttribute('id', '7');
        cell.appendChild(colorIm);
    };
    var col8 = document.createElement('td');
    col8.setAttribute('id', 'col8');
    secondRow.appendChild(col8);
    var im8 = document.createElement('img');
    im8.setAttribute('src', '8black.png');
    im8.setAttribute('id', '8');
    col8.appendChild(im8);
    im8.onclick = function(){
        var cell = document.getElementById('col8');
        var im = document.getElementById('8');
        cell.removeChild(im);
        var colorIm = document.createElement('img');
        colorIm.setAttribute('src', '8.png');
        colorIm.setAttribute('id', '8');
        cell.appendChild(colorIm);
    };
    var col10 = document.createElement('td');
    col10.setAttribute('id', 'col10');
    secondRow.appendChild(col10);
    var im10 = document.createElement('img');
    im10.setAttribute('src', '10black.png');
    im10.setAttribute('id', '10');
    col10.appendChild(im10);
    im10.onclick = function(){
        var cell = document.getElementById('col10');
        var im = document.getElementById('10');
        cell.removeChild(im);
        var colorIm = document.createElement('img');
        colorIm.setAttribute('src', '10.png');
        colorIm.setAttribute('id', '10');
        cell.appendChild(colorIm);
    };


    // Submit:
    var saveEvent = document.createElement('button');
    saveEvent.setAttribute('form', 'login');
    saveEvent.setAttribute('type', 'submit');
    saveEvent.setAttribute('id', 'saveEvent');
    var saveImg = document.createElement('img');
    saveImg.setAttribute('src', 'save_new.png')
    saveEvent.appendChild(saveImg);
    createGroupEventDiv.appendChild(saveEvent);
    saveEvent.onclick = function() {saveGroupEventAndReturnFunc()};
}


function saveGroupEventAndReturnFunc() {
    var addEventScreen = document.getElementById("createGroupEventDiv");
    addEventScreen.style.display = "none";

}

createGroupEventFunc();

//
// function removeGroupEventFunc() {
//     var choiceDiv = document.getElementById('choicesDiv');
//     choiceDiv.style.display = 'none';
//
//     // Creating the div for removeEvent
//     var removeGroupEventDiv = document.createElement('div');
//     removeGroupEventDiv.style.display = 'block';
//     var par = document.createElement('p');
//     par.innerHTML = 'Remove Event Here';
//     removeGroupEventDiv.appendChild(par);
//     document.body.appendChild(removeGroupEventDiv);
// }


// function createChoicesDiv() {
//     // Creating the div for the manager choices page
//     var choicesDiv = document.createElement('div');
//     choicesDiv.setAttribute('id', 'choicesDiv');
//     document.body.appendChild(choicesDiv);
//
//     // Creating the table for two buttons
//     var table = document.createElement('table');
//     table.setAttribute('class', 'choicesTable');
//     var tr = document.createElement('tr');
//     var td1 = document.createElement('td');
//     tr.appendChild(td1);
//     var td2 = document.createElement('td');
//     tr.appendChild(td2);
//     table.appendChild(tr);
//     choicesDiv.appendChild(table);
//
//     // Creating add event button
//     var createEventButton = document.createElement('button');
//     createEventButton.setAttribute('id', 'managerCreateEvent');
//     createEventButton.setAttribute('class', 'managerCreateEventButton');
//     var buttonAddEventImage = document.createElement('img');
//     buttonAddEventImage.setAttribute('src', 'new_reminder_button.png');
//     createEventButton.appendChild(buttonAddEventImage);
//     td1.appendChild(createEventButton);
//     createEventButton.onclick = function() {createGroupEventFunc();};
//
//     // Creating remove event button
//     var removeEventButton = document.createElement('button');
//     removeEventButton.setAttribute('id', 'managerRemoveEvent');
//     removeEventButton.setAttribute('class', 'managerRemoveEventButton');
//     var buttonRemoveEventImage = document.createElement('img');
//     buttonRemoveEventImage.setAttribute('src', 'delete.png');
//     removeEventButton.appendChild(buttonRemoveEventImage);
//     td2.appendChild(removeEventButton);
//     removeEventButton.onclick = function() {removeGroupEventFunc();};
//
// }
//
// createChoicesDiv();