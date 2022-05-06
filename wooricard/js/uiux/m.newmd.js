/* userAgent.js */
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
  },
  userAgent: function() {
    var os = "os_" + ua_result.os.name;
    var platform = ua_result.platform;
    var browser = ua_result.browser.name;
    var version = "ver_" + ua_result.browser.version.major;
    var ua = os + " " + platform + " " + browser + " " + version;
    $("body").addClass(ua);
  },
};
$(document).ready(function(){
  // UI Font Setting font rem 
	// var vh = window.innerHeight * 0.01;
	// document.documentElement.style.setProperty('--vh',vh+'px');
	/* var vh = window.innerHeight * 1;
	document.documentElement.style.setProperty('height',vh+'px');
	winH = $(window).height()
	winW = $(window).width(); */

  $('.ukmain').each(function(i, e){
    if($(e).find('.foot_btngroup').length === 0) {
      $(e).addClass('nonfoot');
    } else {
      $(e).removeClass('nonfoot');
    }
  })

  // 약관동의 
  $('.termsWrap').each(function(i, e){
    var accBtn = $(e).find('.tit').children('.accoBtn');
    var accCnt = $(e).find('.accDep1');
    var accItem = $(e).find('.accoItem');
    var accItemBtn = accItem.find('.accoHead > .accoBtn');
    accBtn.on('click', function(){
      $(this).toggleClass('on');
      accCnt.toggleClass('on');
    })
    accItemBtn.on('click', function(){
      $(this).parent().parent().toggleClass('on');
    })
  })
  // Acordian
  $('.acc_checkwrap').each(function(i, e){
    var _accBtn = $(e).find('.btn_acc');
    _accBtn.on('click', function(){
      $(this).toggleClass('on');
      $(this).parent().toggleClass('on');
    })
  });
  // clear
  $('.inpgp').each(function(i, e){
    var itemInp = $(e).find('input[type="text"], input[type="password"], input[type="number"], input[type="tel"]');
    itemInp.on('keyup input', function(){
      if( $(this).val() ){
        $(e).find('.clear').addClass('show');
      } else {
        $(e).find('.clear').removeClass('show');
      }
    });
    $(e).find('.clear').on('click', function(){
      itemInp.val('').focus();
      $(e).find('.clear').removeClass('show');
    })
  })
  
  uk.init();
});
/* $(window).on('resize', function(){
  setTimeout(function(){
    resizeFunc();
  },300);
})
function resizeFunc(){
  // UI Font Setting Resize 
  resizeW = 0;
  resizeH = 0;
  if( winW != $(window).width() ){
    winW = $(window).width();
  }
  if( winH != $(window).height() ){
    winH = $(window).height();
    // var vh = window.innerHeight * 0.01;
    // document.documentElement.style.setProperty('--vh',vh+'px');
    var vh = window.innerHeight * 1;
    document.documentElement.style.setProperty('height',vh+'px');
  }
} */