//<![CDATA[
/*  left menu */
$(document).ready(function(){
	var $oldtarget = null;

	if($(".sideNav>ul>li.selected ul a") == true){$oldtarget = $(".sideNav>ul>li.selected a");}
	
	$(".sideNav>ul>li>ul").css("display","none");
	$(".sideNav>ul>li.selected ul").css("display","block");

	$(".sideNav>ul>li>a").on('click',function(e) {
		var newtarget = $(e.target);
		 if($oldtarget == e.target ){// 중복 클릭 비활성화
			newtarget.parent().removeClass('selected');
			newtarget.next().css({'display':'none'});	
			$oldtarget = null;
		}else if($oldtarget != e.target){//선택처리
			if( $oldtarget != null){
				$($oldtarget).parent().removeClass('selected');
				$($oldtarget).next().css({'display':'none'});
			}
			newtarget.parents('li').addClass('selected');
			newtarget.next().css({'display':'block'});
			$oldtarget = e.target;
		}
	});

//	if($(".mainpopzone").length != 0) StartPopupzone();
	
	/* reBuild popupzone script - barikim */
	var total_length = $(".mainpopzone .mac_pic_pos").length;
	var time_delay = 3000;
	var start_popupzone = 0;
	var popupzoneTimer;
	var image_btn_path = "http://image.hyundaihmall.com/static/2014img/mac/";	
	
	// 처음 보여질 이미지 세팅
	$(".mainpopzone .mac_pic_pos").each(function(){
		if($(this).index() == start_popupzone) $(".mac_pic_pos").eq($(this).index()).css({ display : "block" }).siblings(".mac_pic_pos").css({ display : "none" });
	});

	// banner indicator
	var mac_indicator = "<ul class='indicator'>";
	for(i=0; i<total_length; i++){
		var indicator_class = "off";
		if(i==start_popupzone) indicator_class = "on";
		mac_indicator += "<li class='"+ indicator_class +"'></li>";
	}
	mac_indicator += "</ul>";
	$(".mainpopzone").append(mac_indicator);
	
	function automate_popupzone(){
		((total_length-1) == start_popupzone) ? start_popupzone = 0 : start_popupzone += 1;
		$(".mac_pic_pos").eq(start_popupzone).css({ display : "block" }).siblings(".mac_pic_pos").css({ display : "none" });
		$(".indicator > li").eq(start_popupzone).removeClass().addClass("on").siblings().addClass("off");
		flow_banner();
	}
	
	function flow_banner(){
		popupzoneTimer = setTimeout(automate_popupzone, time_delay);		
	}
	flow_banner();
	
	$(document).on("mouseenter", ".indicator > li", function(){
		clearTimeout(popupzoneTimer);
		start_popupzone = $(this).index();
		
		$(".mac_pic_pos").eq($(this).index()).css({ display : "block" }).siblings(".mac_pic_pos").css({ display : "none" });
		$(this).removeClass().addClass("on").siblings().addClass("off");
	}).on("mouseleave", ".indicator > li", function(){
		flow_banner();
	});
	
	$(document).on("click", "#pause", function(){
		clearTimeout(popupzoneTimer);
	});
	
	$(document).on("click", "#start", function(){
		flow_banner();
	});
	/* reBuild popupzone script - barikim */
});

function activeLNB(id) {
	for(var num=1; num<=6; num++) {
		if(num = 6 ) {
			continue;
		} else {
			document.getElementById('sub'+num).style.display='none';
		}
	}
	document.getElementById(id).style.display='block'; //해당 ID만 보임
}

/* popupzone start
var maxSize = 5;	// 최대 보여질 알림존 수;
var totalSize = 5;	// 보여줄 현재 알림존 수
var time_delay = 3000;		// 3초 딜레이
var popupzoneWhich = 1;		// 알림존 시작 위치 
var popupzoneTimer;
var image_btn_path = "http://image.hyundaihmall.com/static/2014img/mac/";

function forwardPopupzone(){
	var total_page = parseInt((popupzoneWhich-1) / maxSize)+1;

	var start_btn_no = parseInt((total_page-1)*maxSize+1);
	
	if(start_btn_no>totalSize){
		start_btn_no =  start_btn_no - maxSize
	}
	var end_btn_no = start_btn_no + maxSize - 1;
	if(end_btn_no>totalSize){
		end_btn_no = totalSize;
	}

	displayPoupzone(popupzoneWhich, start_btn_no, end_btn_no);
	
	popupzoneWhich++;
	if (popupzoneWhich > totalSize) popupzoneWhich = 1;
}

function forwardPopupzoneDirect(no){
	StopPopupzone();
	for (var i=1;i<=totalSize;i++) {
		var fldbtn = document.getElementById("popupzoneNumber"+i);
		fldbtn.src = (i == no) ? image_btn_path + 'mac_over.gif' : image_btn_path + 'mac_out.gif';
		var fld = document.getElementById("popupzone_content_"+i);
		fld.style.visibility = (i == no) ? 'visible' : 'hidden';
	}
}

function displayPoupzone(select_no, start_btn_no, end_btn_no){
	for (var i=1;i<=totalSize;i++) {
		var fldbtn = document.getElementById("popupzoneNumber"+i);
		fldbtn.src = (i == popupzoneWhich) ? image_btn_path + 'mac_over.gif' : image_btn_path + 'mac_out.gif';
		var fld = document.getElementById("popupzone_content_"+i);
		fld.style.visibility = (i == select_no) ? 'visible' : 'hidden';

		var popzone_area = document.getElementById("popzone_"+i);
	
		if(start_btn_no<=i && i<=end_btn_no){
			popzone_area.style.visibility = 'visible';
		}else{
			popzone_area.style.visibility = 'hidden';
		}
	}
}

function StopPopupzone() {
	clearInterval(popupzoneTimer);
}

function StartPopupzone() {
	clearInterval(popupzoneTimer);
	popupzoneTimer = setInterval('forwardPopupzone()',time_delay);
}
*/

/*
function prevPopupzone(){
	popupzoneWhich -= maxSize;
	
	popupzoneWhich1 = popupzoneWhich;
	popupzoneWhich = parseInt(popupzoneWhich / maxSize) * maxSize + 1;

	if (popupzoneWhich1 < 1) {
		popupzoneWhich = totalSize;
	}
	///////////////////////////
	var total_page = parseInt((popupzoneWhich-1) / maxSize)+1;
	var start_btn_no = parseInt((total_page-1)*maxSize+1);
	var end_btn_no = start_btn_no + maxSize - 1;
	if(end_btn_no>totalSize){
		end_btn_no = totalSize;
	}
	//////////////////////////
	displayPoupzone(popupzoneWhich, start_btn_no, end_btn_no);
	StartPopupzone();
}

function nextPopupzone(){
	popupzoneWhich += maxSize;
	popupzoneWhich1 = popupzoneWhich;
	popupzoneWhich = parseInt(popupzoneWhich / maxSize) * maxSize + 1;

	if (popupzoneWhich1 > totalSize) {
		popupzoneWhich = 1;
	}
	///////////////////////////
	var total_page = parseInt((popupzoneWhich-1) / maxSize)+1;
	var start_btn_no = parseInt((total_page-1)*maxSize+1);
	if(start_btn_no>totalSize){
		start_btn_no =  start_btn_no - maxSize
	}
	var end_btn_no = start_btn_no + maxSize - 1;
	if(end_btn_no>totalSize){
		end_btn_no = totalSize;
	}
	
	displayPoupzone(popupzoneWhich, start_btn_no, end_btn_no);
	StartPopupzone();
}
*/

this.tooltip = function(){	
	/* CONFIG */		
		xOffset = -5;
		yOffset = 15;		
		// these 2 variable determine popup's distance from the cursor
		// you might want to adjust to get the right result		
	/* END CONFIG */	
	var colortitle ='';	
	$("a.colortooltip").hover(function(e){											  
		$(this).parents(".content_list").find("span").eq(0).css('display','block');

		this.t = this.title;
		colortitle = this.title;
		this.title = "";									  
		$("body").append("<p id='colortooltip'>"+ this.t +"</p>");
		$("#colortooltip")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px")
			.fadeIn("fast");		
    },
	function(){
		$(this).parents(".content_list").find("span").eq(0).css('display','none');
		this.title = this.t;		
		$("#colortooltip").remove();
    });	
	$("a.colortooltip").mousemove(function(e){
		$("#colortooltip")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px");
	});		

	$("a.colortooltip").click(function(e){
		$(this).parents('.content_list').find(".buy_box #colorName").text(colortitle);
	});		


	$("a.detailtooltip").hover(function(e){					
		$(this).find('span').css('display','block');
    },
	function(){
		$(this).find('span').css('display','none');
    });		
};

// 프리미엄 상품평
jQuery(function(){
	
	var article = $('#tabMenu2 .tab2_table1 .article td');

	article.addClass('hide');
	article.slideUp(100);

	var selectText  = $('#tabMenu2 .tab2_table1 .trigger');

	$('#tabMenu2 .tab2_table1 .trigger').click(function(){
		var myArticle = $(this).parents('tr').next().find('td');
	
		if(myArticle.hasClass('hide')){
			
			selectText.removeClass('selectList');
			article.addClass('hide').removeClass('show');
			article.slideUp(100);
			myArticle.removeClass('hide').addClass('show');
			myArticle.slideDown(100);
			$(this).addClass('selectList');
		} else {
			myArticle.removeClass('show').addClass('hide');
			myArticle.slideUp(100);
			$(this).removeClass('selectList');
		}
	});
	
});

// 일반 상품평
jQuery(function(){
	
	var article = $('#tabMenu2 .tab2_table2 .article td');

	article.addClass('hide');
	article.slideUp(100);

	var selectText  = $('#tabMenu2 .tab2_table2 .trigger');

	$('#tabMenu2 .tab2_table2 .trigger').click(function(){
		var myArticle = $(this).parents('tr').next().find('td');
	
		if(myArticle.hasClass('hide')){
			
			selectText.removeClass('selectList');
			article.addClass('hide').removeClass('show');
			article.slideUp(100);
			myArticle.removeClass('hide').addClass('show');
			myArticle.slideDown(100);
			$(this).addClass('selectList');
		} else {
			myArticle.removeClass('show').addClass('hide');
			myArticle.slideUp(100);
			$(this).removeClass('selectList');
		}
	});
	
});

// 답변보기 
jQuery(function(){
	
	var article = $('#tabMenu3 .article td');

	article.addClass('hide');
	article.slideUp(100);

	var selectText  = $('#tabMenu3 .trigger');

	$('#tabMenu3 .trigger').click(function(){
		var myArticle = $(this).parents('tr').next().find('td');
	
		if(myArticle.hasClass('hide')){
			
			selectText.removeClass('selectList');
			article.addClass('hide').removeClass('show');
			article.slideUp(100);
			myArticle.removeClass('hide').addClass('show');
			myArticle.slideDown(100);
			$(this).addClass('selectList');
		} else {
			myArticle.removeClass('show').addClass('hide');
			myArticle.slideUp(100);
			$(this).removeClass('selectList');
		}
	});
	
});

//상품인도방법
function PTabPro(tot, n){
		for(i=1; i<= tot; i++){
			if(i == n){
				document.getElementById('tabPro'+i).src = "./images/btn_tabpro"+i+"_on.gif"
				document.getElementById('tabMenu'+i).style.display = "block"
			}
			else{
				document.getElementById('tabPro'+i).src = "./images/btn_tabpro"+i+".gif"
				document.getElementById('tabMenu'+i).style.display = "none"
			}
		}
	}
//]]>


jQuery(function(){
	/*** 인도장안내 ***/
	$(".mac_airlist-con a").click(function(event){
	event.preventDefault();
	});
		var newTab = function() {
		var args = arguments[0];
		var _this = this;
		this.id = args.id;
		this.tab = args.tab;
		this.random = (args.random) ? args.random : false;
		this.idx = (this.random) ? Math.floor(Math.random()*this.tab.length) : 0;
		this.evt = (args.evt!='') ? args.evt : 'click';
		this.show = function() {
		var idx = $(this).parent().index();
		$(_this.id).children('.on').removeClass('on');
		_this.tab.eq(idx).parent().addClass('on');
		};
		this.evtBind = function() {
		if(this.evt == 'mouseover') _this.tab.mouseover(_this.show).focus(_this.show);
		else _this.tab.click(_this.show);
		}
		this.tab.eq(this.idx).parent().addClass('on');
		this.evtBind();
		};
		var tab1 = new newTab ({
		id : '#mac_airlist-con',
		tab : $('#mac_airlist-con').find('.tit'),
		random : false,
		evt : 'click'
	});

	// 검색결과 리스트보기 썸네일 있는 경우 + 버튼
	$('.content_list > .btn_plus').each(function(){
		$(this).on('mouseenter',function(){
			$('#mac_container').attr('style','z-index:11;');
			$(this).addClass('on').parent().find('.result_plusWrap').show();
		});

		$(this).parent().on('mouseleave',function(){
			$('#mac_container').removeAttr('style');
			$('.content_list > .btn_plus').removeClass('on');
			$(this).find('.result_plusWrap').hide();
		});
	});

	$('.result_plusWrap').on('mouseleave', function(){
		$('#mac_container').removeAttr('style');
		$('.content_list > .btn_plus').removeClass('on');
		$(this).hide();
	});
});