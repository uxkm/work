var UK_STYLE = UK_STYLE||{};
var UK_TABGROUP = $('.tabgroup');
var UK_SUBTABGROUP = $('.subtabgroup');
var UK_DATE = new Date();
UK_STYLE.UXKM = {
  init : function(){
		this.tabMenu();
		this.subTabMenu();
		// this.ukTime();
		this.aBlank();
  },
  reset : function(){
    
  },
  tabMenu : function(){
		UK_TABGROUP.each(function(i, e){
			var uk_tabmenu = $(e).find('> .tabmenu > li');
			var uk_tabcnt = $(e).find('> .tabcnt');
			uk_tabmenu.on('click focusin', function(){
				var idx = $(this).index();
				uk_tabmenu.eq(idx).addClass('selected').siblings().removeClass('selected');
				uk_tabmenu.eq(idx).find('>a').attr('aria-selected','true').parent().siblings().find('>a').attr('aria-selected','false');
				uk_tabcnt.eq(idx).addClass('selected').siblings().removeClass('selected');
				uk_tabcnt.eq(idx).attr('aria-selected','true').siblings().attr('aria-selected','false');

			});
		});
	},
  subTabMenu : function(){
		UK_SUBTABGROUP.each(function(i, e){
			var uk_subtabmenu = $(e).find('> .subtabmenu > li');
			var uk_subtabcnt = $(e).find('> .subtabcnt');
			uk_subtabmenu.on('click focusin', function(){
				var idx = $(this).index();
				uk_subtabmenu.eq(idx).addClass('selected').siblings().removeClass('selected');
				uk_subtabmenu.eq(idx).find('>a').attr('aria-selected','true').parent().siblings().find('>a').attr('aria-selected','false');
				uk_subtabcnt.eq(idx).addClass('selected').siblings().removeClass('selected');
				uk_subtabcnt.eq(idx).attr('aria-selected','true').siblings().attr('aria-selected','false');

			});
		});
	},
	/* ukTime : function(){
		$('.time > b').text(UK_DATE.toLocaleTimeString('en-US'));
  }, */
  aBlank : function(){
    $('[target="_blank"]').attr('title','새 창 열림');
  }
};
UK_STYLE.UXKM.init();

$(function(){
	var iframeTarget = $('.ifrm-h');
	iframeHeight(iframeTarget);
	tabMenuFixed()
})

function iframeHeight(target){
	setInterval(function(){
		target.each(function(i, e){
			var i_height =  $(e).contents().find('.section').outerHeight();
			$(e).height(i_height).css({'overflow-y':'hidden'});
		});
	}, 300);
}
function tabMenuFixed() {
	var bodyFixed = $('body');
	var tabMenu = $('.tabmenu');
	var tabMenuOffset = tabMenu.offset();

	$( window ).on('scroll touchmove mousewheel', function() {
		$(document).scrollTop() > tabMenuOffset.top ? bodyFixed.addClass('ukfixed') : bodyFixed.removeClass('ukfixed')
	});
}

function scrollDisable(){
    $('body').addClass('scrollDisable').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();
    });
}
function scrollAble(){
    $('body').removeClass('scrollDisable').off('scroll touchmove mousewheel');
}

var clockTarget = $('.time > b');
function ukClock() {
    var date = new Date();
    var month = date.getMonth();
    var clockDate = date.getDate();
    var day = date.getDay();
    var week = ['일', '월', '화', '수', '목', '금', '토'];
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    // clockTarget.text( `${month+1}월 ${clockDate}일 ${week[day]}` + `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes }`  : minutes }:${seconds < 10 ? `0${seconds }`  : seconds }` );
    clockTarget.text( `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes }`  : minutes }:${seconds < 10 ? `0${seconds }`  : seconds }` );
}
function initClock() {
	ukClock();
	setInterval(ukClock, 1000);
}
initClock();