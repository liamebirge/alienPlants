function gotoSame(url){
  var win = window.open(url, '_self');
  win.focus();
}

function gotoNew(url){
  var win = window.open(url, '_blank');
  win.focus();
}