function chooseImg(){
	var randNum = Math.floor((Math.random() * 10) + 1);
	document.getElementById("changeImg").src = "data/plants/plant" + randNum + ".JPG";
	document.getElementById("mpLink").href = "HTML/plantPages/plant" + randNum + ".html";
}

function gotoSame(url){
	var win = window.open(url, '_self');
    win.focus();
}

function gotoNew(url){
    var win = window.open(url, '_blank');
    win.focus();
}