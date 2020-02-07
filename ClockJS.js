var startTime = function() {
    var today = new Date();
    var h = today.getHours();
    if (h > 12) {
        h -= 12
    }
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h + " : " + m + " : " + s;

    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i<10) {i = "0" + i};
    return i
}

var updateClock = function(){
    var time = new Date().getHours();
    var image = "C:\Users\HP\Desktop\Practise\JS\Night.png";
    var timeImageJS = document.getElementById("timeImage");

    if (time >= 5 ){
        image = "Morning.png"
    }
    else if (time >= 12){
        image = "Afternoon.png"
    }
    else if (time >= 17){
        image = "Evening.png"

        timeImageJS.src = image
    }

    updateClock();

}


