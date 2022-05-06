$(function(){
	var subPage = new Array;
	subPage[0] = "company";
	subPage[1] = "event";
	subPage[2] = "games";
	var url = location.href;
	var getAr0 = url.indexOf(subPage[0]);
	var getAr1 = url.indexOf(subPage[1]);
	var getAr2 = url.indexOf(subPage[2]);
	if(getAr0 != -1){
		$("li:eq(1) a").addClass("on")
	};
	if(getAr1 != -1){
		$("li:eq(2) a").addClass("on")
	};
	if(getAr2 != -1){
		$("li:eq(3) a").addClass("on")
	};
});