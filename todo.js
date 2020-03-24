//get date
var today = new Date();
var month = today.getMonth();
var day   = today.getDate()
var year  = today.getFullYear();

var strmonth = month.toString();
var strday   = day.toString();

//get months in words
var monthInWords = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthInWord  = monthInWords[month];

//get weekday in words
var weekdayInWords = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var weekday = weekdayInWords[today.getDay()];
document.getElementById("date").innerHTML = weekday + ", " + monthInWord + " " + day;

//next day
function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
var NUMweekdayNext = addDays(today, 1).getDay();
var todayNext = addDays(today, 1);
var dayNext = todayNext.getDate();
var weekdayNext = weekdayInWords[NUMweekdayNext];
document.getElementById("dateTomorrow").innerHTML = weekdayNext + ", " + monthInWord + " " + dayNext

//add text
function addText() { 
    var inputNode = document.getElementById("inputTodo");
    var node = document.createElement("li"); 
    node.onclick = delText;
    var textnode = document.createTextNode(inputNode.value);

    //input != "null"
    if (inputNode.value == "" ) {
        showError();
    } else {
        node.appendChild(textnode); 
        document.getElementById("todoList").appendChild(node); 
        inputNode.value = "";
    }
}

//add text with 'enter'
document.getElementById("inputTodo").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addText();
    }
});

//show modal
function showError() {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

//delete text
function delText(event) {
    var target = event.target;
    //document.getElementById("todoList").removeChild(target);
    target.style.textDecoration = "line-through"; 
}

//add text (T)
function addTextTomorrow() { 
    var inputNodeTomorrow = document.getElementById("inputTodoTomorrow");
    var nodeTomorrow = document.createElement("li"); 
    nodeTomorrow.onclick = delText;
    var textnodeTomorrow = document.createTextNode(inputNodeTomorrow.value);

    //input != "null"
    if (inputNodeTomorrow.value == "" ) {
        showErrorTomorrow();
    } else {
        nodeTomorrow.appendChild(textnodeTomorrow); 
        document.getElementById("todoListTomorrow").appendChild(nodeTomorrow); 
        inputNodeTomorrow.value = "";
    }
}

//add text with 'enter' (T)
document.getElementById("inputTodoTomorrow").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addTextTomorrow();
    }
});

//show modal (T)
function showErrorTomorrow() {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}