/* UserAgent Check */
!(function(e) {
  "use strict";
  var o = (e.userAgent = function(e) {
    function o(e) {
      var o = {},
        i = /(dolfin)[ \/]([\w.]+)/.exec(e) || /(chrome)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(e) || /(webkit)(?:.*version)?[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || (e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(e)) || ["", "unknown"];
      return "webkit" === i[1] ? (i = /(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(e) || /(android)[ \/]([\w._\-]+);/.exec(e) || [i[0], "safari", i[2]]) : "mozilla" === i[1] ? (i[1] = /trident/.test(e) ? "msie" : "firefox") : /polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(e) && (i[1] = "polaris"), (o[i[1]] = !0), (o.name = i[1]), (o.version = n(i[2])), o;
    }
    function n(e) {
      var o = {},
        n = e ? e.split(/\.|-|_/) : ["0", "0", "0"];
      return (o.info = n.join(".")), (o.major = n[0] || "0"), (o.minor = n[1] || "0"), (o.patch = n[2] || "0"), o;
    }
    function i(e) {
      return t(e) ? "pc" : r(e) ? "tabvar" : a(e) ? "mobile" : "";
    }
    function t(e) {
      return e.match(/linux|windows (nt|98)|macintosh/) && !e.match(/android|mobile|polaris|lgtelecom|uzard|natebrowser|ktf;|skt;/) ? !0 : !1;
    }
    function r(e) {
      return e.match(/ipad/) || (e.match(/android/) && !e.match(/mobi|mini|fennec/)) ? !0 : !1;
    }
    function a(e) {
      return e.match(/ip(hone|od)|android.+mobile|windows (ce|phone)|blackberry|bb10|symbian|webos|firefox.+fennec|opera m(ob|in)i|polaris|iemobile|lgtelecom|nokia|sonyericsson|dolfin|uzard|natebrowser|ktf;|skt;/) ? !0 : !1;
    }
    function s(e) {
      var o = {},
        i = /(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(e) || /(android)[ \/]([\w._\-]+);/.exec(e) || (/android/.test(e) ? ["", "android", "0.0.0"] : !1) || (/polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(e) ? ["", "polaris", "0.0.0"] : !1) || /(windows)(?: nt | phone(?: os){0,1} | )([\w._\-]+)/.exec(e) || (/(windows)/.test(e) ? ["", "windows", "0.0.0"] : !1) || /(mac) os x ([\w._\-]+)/.exec(e) || (/(linux)/.test(e) ? ["", "linux", "0.0.0"] : !1) || (/webos/.test(e) ? ["", "webos", "0.0.0"] : !1) || /(bada)[ \/]([\w._\-]+)/.exec(e) || (/bada/.test(e) ? ["", "bada", "0.0.0"] : !1) || (/(rim|blackberry|bb10)/.test(e) ? ["", "blackberry", "0.0.0"] : !1) || ["", "unknown", "0.0.0"];
      return "iphone" === i[1] || "ipad" === i[1] || "ipod" === i[1] ? (i[1] = "ios") : "windows" === i[1] && "98" === i[2] && (i[2] = "0.98.0"), (o[i[1]] = !0), (o.name = i[1]), (o.version = n(i[2])), o;
    }
    function w(e) {
      var o = {},
        i = /(crios)[ \/]([\w.]+)/.exec(e) || /(daumapps)[ \/]([\w.]+)/.exec(e) || ["", ""];
      return i[1] ? ((o.isApp = !0), (o.name = i[1]), (o.version = n(i[2]))) : (o.isApp = !1), o;
    }
    return (e = (e || window.navigator.userAgent).toString().toLowerCase()), { ua: e, browser: o(e), platform: i(e), os: s(e), app: w(e) };
  });
  "object" == typeof window && window.navigator.userAgent && (window.ua_result = o(window.navigator.userAgent) || null);
})(
  (function() {
    return "object" == typeof exports ? ((exports.daumtools = exports), (exports.util = exports), exports) : "object" == typeof window ? ((window.daumtools = "undefined" == typeof window.daumtools ? {} : window.daumtools), (window.util = "undefined" == typeof window.util ? window.daumtools : window.util), window.daumtools) : void 0;
  })()
);
var uk = {
  init: function() {
    this.userAgent();
		this.gnbOnAction();
		this.siteMapSet();
  },
  userAgent: function() {
    var os = "os_" + ua_result.os.name;
    var platform = ua_result.platform;
    var browser = ua_result.browser.name;
    var version = "ver_" + ua_result.browser.version.major;
    var ua = os + " " + platform + " " + browser + " " + version;
    $("html").addClass(ua);
  },
	gnbOnAction: function() {
		var _gnb = $('.gnb');
		var _gnbItem = _gnb.find('li');
		// var _gnbLink = _gnbItem.find('a');
		_gnbItem.on('click',function(){
			$(this).addClass('on').siblings().removeClass('on');
		})
	},
	siteMapSet: function(){
		$('.depth_group').each(function(i, e){
			var depList = $(e).find('.dep_list');
			depList.find('.depth2').each(function(i, e){
				if( $(e).find('ul').length === 1 ){
					$(e).addClass('is-item');
				}
			})
		});
	},
};
$(document).ready(function(){
	var iframeTarget = $('.ifrm');
	uk.init();
	sethFunc();
	iframeHeight(iframeTarget);
//	cHeadBodySet();
	$('.table').find('select').wrap('<label class="selectlab" />');
    $('.flow_stage').find('.inplab').each(function(i, e){
        if ($(e).find('.unit').length == 1) {
            $(e).find('input').addClass('tright');
        }
    })
    $('.input-group').each(function (i, e) {
        var inpOnly = $(e).find('.form-control').attr('readonly') == "readonly";
        var inpDis = $(e).find('.form-control').attr('disabled') == "disabled";
        var btnOnlyAttr = $(e).find('.form-control[readonly]').next('.ui-datepicker-trigger').attr('disabled', 'disabled');
        var btnOnlyRemove = $(e).find('.form-control[readonly]').next('.ui-datepicker-trigger').attr('disabled', 'disabled');
        var btnDisAttr = $(e).find('.form-control[disabled]').next('.ui-datepicker-trigger').attr('disabled', 'disabled');
        var btnDisRemove = $(e).find('.form-control[disabled]').next('.ui-datepicker-trigger').attr('disabled', 'disabled');
        inpOnly ? btnOnlyAttr : btnOnlyRemove;
        inpDis ? btnDisAttr : btnDisRemove;
    })
    $('[lang="en"]').find('.nav_header .header_ci img').attr('src', '/images/skc_logo_gnblogo_en.png');
    $('[lang="en"]').find('.errwrap .ci_logo img').attr('src', '/images/skc_logo_en.png');
    $('.tab-pane').each(function (i, e) { 
        if ( $(e).find('.framewrap').length <= 1 ) {
            $(e).find('.framewrap').addClass('single');
        }
        else {
            $(e).find('.framewrap').removeClass('single');
        }
    })
});
$(window).on('resize', function(){
  setTimeout(function(){
    resizeFunc();
//    cHeadBodySet();
  },300);
})
function sethFunc(){
	var vh = window.innerHeight * 1;
	document.documentElement.style.setProperty('height',vh+'px');
	winH = $(window).height()
	winW = $(window).width();
}
function resizeFunc(){
  resizeW = 0;
  resizeH = 0;
  if( winW != $(window).width() ){
    winW = $(window).width();
  }
  if( winH != $(window).height() ){
    winH = $(window).height();
    var vh = window.innerHeight * 1;
    document.documentElement.style.setProperty('height',vh+'px');
  }
}
function iframeHeight(target){
	setInterval(function(){
		target.each(function(i, e){
			var i_height =  $(e).contents().find('.csection').outerHeight();
			$(e).height(i_height).css({'overflow-y':'hidden'});
		});
	}, 300);
}
function cHeadBodySet() {
	var htmlHeight = $('html').outerHeight();
	var cHeadHeight = $('.chead').height();
	var cBodyHeight = $('.cbody').outerHeight();
	var cBodyHset = htmlHeight - cHeadHeight - 30 + "px";
	$('.cbody').css({
		height:cBodyHset
	})
	console.log(cHeadHeight);
	console.log(cBodyHeight);
}

function checkboxClass(chkbox){
	if($(chkbox).prop('checked') == true){
		$(chkbox).parent('.chkrad').addClass('checked');
	}
	else{
		$(chkbox).parent('.chkrad').removeClass('checked');
	}
}

function gnbAniFunc() {
	$('.gnb').wrap('<div class="nav_gnb">');
	var gnb = $('.nav_gnb');
	var gnbItem = gnb.find('.gnb li a');
	var line = $('<div />').addClass('line');
	line.appendTo(gnb);

	var active = gnb.find('.on');
	var pos = 0;
	var wid = 0;

	if(active.length) {
		pos = active.position().left;
		wid = active.width();
		line.css({
			left: pos,
			width: wid
		});
	}

	gnbItem.click(function(e) {
		e.preventDefault();
		if(!$(this).parent().hasClass('on') && !gnb.hasClass('animate')) {
			gnb.addClass('animate');
			var _this = $(this);
			gnb.find('ul li').removeClass('on');
			// var position = _this.parent().position();
			// var width = _this.parent().width();
			var position = _this.position();
			var width = _this.width();

			if(position.left >= pos) {
				line.animate({
					// width: ((position.left - pos) + width)
				}, 300, function() {
					line.animate({
						left: position.left,
						width: width,
					}, 150, function() {
						gnb.removeClass('animate');
					});
					_this.parent().addClass('on');
				});
			} else {
				line.animate({
					left: position.left,
					// width: ((pos - position.left) + wid)
				}, 300, function() {
					line.animate({
						width: width
					}, 150, function() {
						gnb.removeClass('animate');
					});
					_this.parent().addClass('on');
				});
			}
			pos = position.left;
			wid = width;
		}
	});
}