function chooseImg(){
	var randNum = Math.floor((Math.random() * 21) + 1);
	document.getElementById("changeImg").src = "data/plants/plant" + randNum + ".JPG";
	document.getElementById("mpLink").href = "HTML/PlantPages/plant" + randNum + ".html";
}

function gotoSame(url){
	var win = window.open(url, '_self');
    win.focus();
}

function gotoNew(url){
    var win = window.open(url, '_blank');
    win.focus();
}
//random icon
(function() {
	var randNum = Math.floor((Math.random() * 16) + 1);
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'shortcut icon';
    link.href = 'https://raw.githubusercontent.com/liamebirge/alienPlants/master/data/icons/icon' + randNum + ".png";
    //https://raw.githubusercontent.com/liamebirge/alienPlants/master/data/icons/icon1.png
    document.getElementsByTagName('head')[0].appendChild(link);
})();
//Chooses current month and year to display apropriate calendar
function calLink(){
    var date = new Date();
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var cMonth = month[date.getMonth()];
    var cYear = date.getFullYear();
    gotoNew("Calendar/" + cMonth + "-" + cYear + ".html");
}
if (document.addEventListener) { // IE >= 9; other browsers
    document.addEventListener('contextmenu', function(e) {
    alert("You've tried to open context menu"); //here you draw your own menu
    e.preventDefault();
}, false);
} else { // IE < 9
    document.attachEvent('oncontextmenu', function() {
    alert("You've tried to open context menu");
    window.event.returnValue = false;
    });
}