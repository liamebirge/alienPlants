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
(function() {
	var randNum = Math.floor((Math.random() * 16) + 1);
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'shortcut icon';
    link.href = '../data/icons/icon' + randNum + ".png";
    document.getElementsByTagName('head')[0].appendChild(link);
})();