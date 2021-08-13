	var time;
 	var normar_title=document.title;
 	document.addEventListener('visibilitychange', function () {
 	if (document.visibilityState == 'hidden') {
 	clearTimeout(time);
 	document.title = '别走，你快回来~_~';
 	} else {
 	document.title = '欢迎回来^_^';
 	time=setTimeout(function(){ document.title = normar_title; }, 3000);