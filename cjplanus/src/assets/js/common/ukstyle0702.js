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
      return t(e) ? "pc" : r(e) ? "tablet" : a(e) ? "mobile" : "";
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

var transitionend = "transitionend webkitTransitionEnd oTransitionEnd otransitionend";
var $ukWin, $uKBody, $ukWrap, $ukHeaderWrap, $ukheader, $ukMain, $ukCbodyIn, $cTitle, ukHeaderWrapH, ukRollHeader, scrollTop, docHeight, winHeight, scrollPercent, color;
$ukWin = $(window);
$uKHtml = $("html");
$uKBody = $("body");
$ukWrap = $(".ukwrap");
$ukHeaderWrap = $(".headerwrap");
$ukheader = $(".header");
$ukMain = $(".ukmain");
$ukCbodyIn = $(".cbody_in");
$cTitle = $("#cTitle").eq(0);

ukHeaderWrapH = $ukHeaderWrap.outerHeight();
ukRollHeader = 50;
scrollPercent = 0;
scrollTop = $ukWin.scrollTop();
docHeight = $(document).height();
winHeight = window.innerHeight;

var $window = null,
  $document = null,
  $html = null,
  $body = null,
  $html_body = null,
  $wrapper = null,
  $header = null,
  $dimmer = null,
  $activeFocus = null,
  _;

var uk = {
  init: function() {
    this.userAgent();
    this.elements();
    this.waveEffect();
  },
  userAgent: function() {
    var os = "os_" + ua_result.os.name;
    var platform = ua_result.platform;
    var browser = ua_result.browser.name;
    var version = "ver_" + ua_result.browser.version.major;
    var ua = os + " " + platform + " " + browser + " " + version;
    $("body").addClass(ua);
  },
  update: function() {},

  elements: function() {
    $window = $(window);
    $document = $(document);
    $html = $("html");
    $body = $("body");
    $html_body = $("html, body");
    $wrapper = $(".ukwrap");
    $header = $(".header");
    $dimmer = $(".dimmer");
    $document.off("focusin.eleEvent click.eleEvent").on("focusin.eleEvent click.eleEvent", function(e) {
      $activeFocus = $(e.target);
    });
  },

  customEvent: function() {
    var resizeStartTime, resizeEndTime, scrollStartTime, scrollEndTime;
    $window.off("scroll.customEvent").on("scroll.customEvent", function() {
      clearTimeout(scrollEndTime);
      scrollEndTime = setTimeout(function() {
        $window.trigger("scrollEnd");
      }, 100);
    });
    $window.off("resize.customEvent").on("resize.customEvent", function() {
      clearTimeout(resizeEndTime);
      resizeEndTime = setTimeout(function() {
        $window.trigger("resizeEnd");
      }, 100);
    });
  },

  setFocus: {
    eleTags: "input:not([tabindex]), button:not([tabindex]), a:not([tabindex]), select:not([tabindex]), textarea:not([tabindex])",
    eleTab0: '[tabindex="0"]',
    eleTab1: '[tabindex="-1"]',
    // 포커스 비활성
    disable: function($eleDisable, module) {
      $eleDisable.attr({ "aria-hidden": "true" }).addClass("is_disable-" + module + "-ariaHidden");
      $eleDisable.find(this.eleTab1).addClass("is_disable-" + module + "-fixed");
      $eleDisable
        .find(this.eleTags)
        .attr({ tabindex: "-1" })
        .addClass("is_disable-" + module + "-tags");
      $eleDisable
        .find(this.eleTab0)
        .attr({ tabindex: "-1" })
        .addClass("is_disable-" + module + "-tabindex");
    },
    // 포커스 활성
    enable: function($eleEnable, module) {
      $eleEnable.attr({ "aria-hidden": "false" }).removeClass("is_disable-" + module + "-ariaHidden");
      $eleEnable
        .find(".is_disable-" + module + "-tags")
        .removeClass("is_disable-" + module + "-tags")
        .removeAttr("tabindex");
      $eleEnable
        .find(".is_disable-" + module + "-tabindex")
        .removeClass("is_disable-" + module + "-tabindex")
        .attr({ tabindex: "0" });
      $eleEnable.find(".is_disable-" + module + "-fixed").removeClass("is_disable-" + module + "-fixed");
    },
  },

  /* 스크롤 설정 */
  setScroll: {
    clsLockAll: "is-locked-all",
    clsLockIOS: "is-locked-ios",
    scrTop: null,
    disable: function() {
      if (isIOS) {
        this.scrTop = $window.scrollTop();
        $html_body.addClass(this.clsLockIOS);
        $wrapper.css({ position: "relative", top: this.scrTop * -1 });
      } else {
        $html_body.addClass(this.clsLockAll);
      }
    },
    enable: function() {
      if (isIOS) {
        $html_body.removeClass(this.clsLockIOS);
        $wrapper.removeAttr("style");
        $window.scrollTop(this.scrTop);
      } else {
        $html_body.removeClass(this.clsLockAll);
      }
    },
  },

  /* 배경설정 */
  dimmer: {
    open: function($obj) {
      this.close($(".dimmer.is-active"));
      $obj.addClass("is-active");
    },
    close: function($obj) {
      if ($obj.length) {
        $obj.removeClass("is-active");
      }
    },
  },

  waveEffect: function() {
    var events = null;
    var ele = ".btn, .btn-ico";
    $document.off("mousedown.waveEffectEvent touchstart.waveEffectEvent").on("mousedown.waveEffectEvent touchstart.waveEffectEvent", ele, function(e) {
      events = "mousedown";
      var self = $(this),
        wave = ".effect-wave",
        btnWidth = self.outerWidth();
      if (e.type == "mousedown") {
        var x = e.offsetX,
          y = e.offsetY;
      }
      if (e.type == "touchstart") {
        var x = e.touches[0].pageX - self.offset().left,
          y = e.touches[0].pageY - self.offset().top;
      }
      if (self.find(wave).length == 0) {
        self.prepend('<span class="effect-wave"></span>');
        $(wave)
          .css({ top: y, left: x })
          .stop()
          .animate({ width: btnWidth * 3, height: btnWidth * 3 }, 400, function() {
            $(this).addClass("is-complete");
            if (events == "mouseup") {
              $(this)
                .stop()
                .animate({ opacity: "0" }, 200, function() {
                  $(this).remove();
                });
            }
          });
      }
    });
    $document.off("mouseup.waveEffectEvent touchend.waveEffectEvent").on("mouseup.waveEffectEvent touchend.waveEffectEvent", ele, function(e) {
      events = "mouseup";
      var self = $(this),
        wave = ".effect-wave";
      if (self.find(wave).hasClass("is-complete")) {
        $(wave)
          .stop()
          .animate({ opacity: "0" }, 200, function() {
            $(this).remove();
          });
      }
    });
    $document.off("click.waveEffectEvent focusin.waveEffectEvent").on("click.waveEffectEvent focusin.waveEffectEvent", function(e) {
      if ($(e.target).is(ele) == false && $(".effect-wave").length) {
        $(".effect-wave")
          .stop()
          .animate({ opacity: "0" }, 200, function() {
            $(this).remove();
          });
      }
    });
  },

  /* ukmodal */
  ukmodal: {
    $ukmodalArr: [],
    zIndexUnit: 1000,
    open: function(id, callback) {
      var self = this;
      var $ukmodalWrap = $("#" + id);
      var $focus = $ukmodalWrap.find(".ukmodal");
      $ukmodalWrap.data("opener", $activeFocus).addClass("is-active");
      $ukmodalWrap.one("transitionend", function() {
        if ($(this).hasClass("is-active")) {
          uk.update();
          $focus.attr("tabindex", "0").focus();
          if (callback) {
            typeof callback == "function" ? callback() : callback;
          }
          $("body").addClass("sclock");
        }
      });
      if ($ukmodalWrap.find(".dimmer").length) {
        uk.dimmer.open($ukmodalWrap.find(".dimmer"));
      }

      //접근성초점
      uk.setFocus.disable($ukmodalWrap.siblings(), "ukmodal");
      uk.setFocus.disable($ukmodalWrap.parents().siblings(), "ukmodal");
      uk.setFocus.enable($ukmodalWrap, "ukmodal");

      //다중팝업설정
      self.$ukmodalArr.push($ukmodalWrap);
      var zIndex = self.zIndexUnit + self.$ukmodalArr.length;
      $ukmodalWrap.css({ "z-index": zIndex });
      // $('body').addClass('sclock');
    },
    close: function(id, callback) {
      var self = this;
      var $ukmodalWrap = $("#" + id);
      var $focus = $ukmodalWrap.data("opener");
      var $activeukmodalWrap = null;
      $ukmodalWrap.removeClass("is-dimmer is-active").removeAttr("style");
      $ukmodalWrap.one("transitionend", function() {
        if (!$(this).hasClass("is-active")) {
          //닫힌팜업 비활성화
          uk.setFocus.disable($ukmodalWrap, "ukmodal");
          $focus.attr("tabindex", "0").focus();
          if (callback) {
            typeof callback == "function" ? callback() : callback;
          }
          $("body").removeClass("sclock");
        }
      });
      if ($ukmodalWrap.find(".dimmer").length) {
        uk.dimmer.close($ukmodalWrap.find(".dimmer"));
      }

      //다중팝업 설정
      self.$ukmodalArr.pop();
      $activeukmodalWrap = self.$ukmodalArr[self.$ukmodalArr.length - 1];

      //마지막 팝업이 기본팝업인 경우
      if (self.$ukmodalArr.length) {
        //접근성초점 - 마지막팝업 활성화
        uk.setFocus.enable($activeukmodalWrap, "ukmodal");
        if ($activeukmodalWrap.find(".dimmer").length) {
          uk.dimmer.open($activeukmodalWrap.find(".dimmer"));
        }
        $("body").addClass("sclocksub");
      } else {
        //접근성초점 - 팝업제외 활성화
        uk.setFocus.enable($ukmodalWrap.siblings(), "ukmodal");
        uk.setFocus.enable($ukmodalWrap.parents().siblings(), "ukmodal");
        $("body").removeClass("sclocksub");
      }
      // $('body').removeClass('sclock');
    },
  },
};

$(document).keydown(function(e){
	var code = e.keyCode || e.which;
	if (code == 27 || code == 32) {
		$('.dimmer').click().trigger('click');
	}
});

/* var pdScrollOption = function(scmode){ 
  return {
    mouseWheelPixels : 1000,
    theme:"light-2",
    setTop: scmode ? '0' : '-540px',
  }
}
if( $('.pcweb .pdimg .pdimglist figure').length > 5 ) {
  $('.pcweb .ukscroll').mCustomScrollbar( pdScrollOption(true) );
  $('.ukscroll').mCustomScrollbar('update');
} else {
  $('.ukscroll').mCustomScrollbar('disable');
} */
var depOpt = function(depmode){
  return {
    infinite: depmode ? true : false,
    // infinite: false,
    centerMode: depmode ? true : false,
    centerPadding: '0px',
    slidesToShow: 9,
    slidesToScroll: 1,
    variableWidth: false,
    focusOnSelect: true,
    arrows:  depmode ? true : false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          centerMode: false,
          slidesToShow: 6,
          slidesToScroll: 6,
          variableWidth: true,
        }
      },
      {
        breakpoint: 640,
        settings: {
          // infinite: false,
          centerMode: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          variableWidth: true,
        }
      }
    ]
  }
};

(function($) {
  /* $(window).on('load', function(e) {
    // $(".inner").mCustomScrollbar();
  }); */
  $(function() {
		// Menu active 
		var url_path = window.location.pathname, urlRegExp = new RegExp(url_path.replace(/\/$/, '') + "$");
		// var url = window.location.href; 
		// var para = document.location.href.split("?"); console.log(para);
		$('.gnb > li > a').each(function () {
			if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
				$(this).parent().addClass('active');
			}
			/* if(url == (this.href)) { 
				$(this).closest("li").addClass("active");
			} */
		});
		/* var pageName = location.pathname.split("/").find(function(element) {
			if (element.indexOf(".html") > 0) return element;
		});
		if (typeof pathName != 'undefined') {
			$(".gnb > li").removeClass("active");
			$("[href='"+pathName+"']").parent().addClass("active");
		} */

    ukResize();
    allMenuSet();
    skipTopClick();
    selectLabelFor();
    uk.init();
    $(".touchflow-x").touchFlow({
      axis: "x",
      snap: false,
      scrollbar: false,
      scrollbarAutoHide: false,
    });
    if (!$uKBody.hasClass("pcweb")) {
      $(".skip_toggle").on("click", function(i, e) {
        $(".quick_menu").toggleClass("toggle_btn");
        return false;
      });
    } else {
    }

    // Accdion
    $(".acc").each(function(i, e) {
      $(e).find(".acc_tit").on("click", function() {
				$(e).toggleClass("is-open");
			});
    });
		// FAQ
		$('.qnalist').each(function(i, e){
			var _que = $(e).find('.que');
			if ( $(e).attr('data-toggle') == 'toggle' ) {
				_que.click(toggleOpen);
			} else {
				_que.click(clickOpen);
			}
		})
    $('.tr').each(function(i, e){
      if( $(e).children().children('.filewrap').length >= 1 ){
        $(e).addClass('fileup');
      }
    })
  });
  $(window)
    .on("load resize", function(e) {
			bodyClass();
      ukResize();
      // $("[data-ukscroll]").mCustomScrollbar();
      /* $("[data-ukscroll]").mCustomScrollbar({
        scrollButtons:{
          enable:true
        }
      }); */
			var pdScrollOption = function(scmode){ 
				return {
					mouseWheelPixels : 1000,
					theme:"light-2",
					setTop: scmode ? '0' : '-540px',
				}
			}
      if( $('.pcweb .pdimg .pdimglist figure').length > 5 ) {
        $('.pcweb .ukscroll').mCustomScrollbar( pdScrollOption(true) );
        $('.ukscroll').mCustomScrollbar('update');
      } else {
        $('.ukscroll').mCustomScrollbar('disable');
      }
    })
    .trigger("load resize");

  $(window)
    .on("scroll", function(e) {
      parallax();
      rollScroll();
      scBtmAction();
    })
    .trigger("scroll");

  // Resize Option
  function ukResize() {
    var sSize = 1060;
    var $body = $("body");
    if ($(window).width() >= sSize) {
      $body.addClass("pcweb").removeClass("moweb");
      tabNavSet();
    } else {
      $body.removeClass("pcweb").addClass("moweb");
      $ukWrap.removeClass("roll");
      $ukHeaderWrap.removeClass("fixed");
      // $('.quick_menu').removeClass('toggle_btn');
      tabNavSet();
    }
    $body.hasClass("pcweb") ? $uKHtml.addClass("uk") : $uKHtml.removeClass("uk");
    // $(window).height() >= $('.ukmodal_wrap .ukmodal').outerHeight() ? $body.removeClass('sizecheck') : $body.addClass('sizecheck');
  }

  // All Menu Control
  function allMenuSet() {
    var $allMenuWrap = $("#allMenu");
    var $allBtnOpen = $(".ibtn_allmenu");
    var $allBtnClose = $allMenuWrap.find(".ibtn_close");
    var $bgMask = $(".bgmask");
    if ($allMenuWrap.length) {
      $allBtnOpen.on("click", function() {
        $uKBody.addClass("is-allmenu-opened");
      });
      $allBtnClose.on("click", function() {
        $uKBody.removeClass("is-allmenu-opened");
      });
      $bgMask.on("click", function() {
        $uKBody.removeClass("is-allmenu-opened");
      });
    }
  }

  function aJaxSet() {
    $(".tabmenu").click(function() {
      var activeTab = $(this).attr("data-tab");
      $.ajax({
        type: "GET",
        url: activeTab + ".html",
        dataType: "html",
        error: function() {
          alert("데이터를 불러오지 못했습니다.");
        },
        success: function(data) {
          $(".cardlist").html(data);
        },
      });
    });
    $(".default").click();
  }

  function touchTaNav() {
    var totalMenuWidth = 0;
    var menuSet = $(".tablist").find("li");
    menuSet.each(function() {
      totalMenuWidth = totalMenuWidth + $(this).width() + 4;
    });
    $(".tablist").css("width", totalMenuWidth);
    console.log(totalMenuWidth);
    /* li click 시 스와이프 효과 */
    $(".tablist").each(function(i, e) {
      $(e)
        .find("li")
        .on("click", function() {
          var idx = $(this).index();
          var ipos = $(this)
            .prev()
            .width();
          $(e)
            .find("li")
            .eq(idx)
            .addClass("active")
            .parent()
            .siblings()
            .removeClass("active");
          $(".touchflow-x")
            .data("touchFlow")
            .posX(-ipos);
          return false;
        });
      $(e)
        .find("li")
        .eq(1)
        .on("click", function() {
          $(".touchflow-x")
            .data("touchFlow")
            .posX("first");
        });
      $(e)
        .find("li")
        .eq(4)
        .on("click", function() {
          $(".touchflow-x")
            .data("touchFlow")
            .posX("last");
        });
    });
    $(".touchflow-x").touchFlow({
      axis: "x",
      snap: false,
      scrollbar: false,
      scrollbarAutoHide: false,
    });
  }

  function uktabNavCenter(target) {
    var tabNavList = $(".tabnav .tablist");
    var tabNavListItem = tabNavList.find(".item");
    var targetPos = target.position();
    var box = $(".tabnav");
    var boxHarf = box.width() / 2;
    var pos;
    var listWidth = 0;

    tabNavListItem.each(function() {
      listWidth += $(this).outerWidth();
    });

    var selectTargetPos = targetPos.left + target.outerWidth() / 2;
    if (selectTargetPos <= boxHarf) {
      // left
      pos = 0;
    } else if (listWidth - selectTargetPos <= boxHarf) {
      //right
      pos = listWidth - box.width();
    } else {
      pos = selectTargetPos - boxHarf;
    }
    setTimeout(function() {
      tabNavList.css({
        transform: "translate3d(" + pos * -1 + "px, 0, 0)",
        "transition-duration": "500ms",
      });
    }, 200);
  }

  function scrollAlign() {
    var scrollMenuOn = $(".tabnav .tablist li.active"),
      scroller = $(".tabnav .tablist");
    scroller.animate(
      {
        scrollLeft: scrollMenuOn.offset().left + scroller.scrollLeft() + scrollMenuOn.width() / 2 - scroller.width() / 2,
      },
      500
    );
  }

  function scBtmAction() {
    var scrolltop = $(document).scrollTop();
    var height = $(document).height();
    var height_win = $(window).height();
		// $(document).scrollTop($(document).height());
    //if (Math.round( $(window).scrollTop() ) == $(document).height() - $(window).height()) {
    if ( $(window).scrollTop() >= $(document).height() - $(window).height() - $(".footerwrap").height() )  $(".quick_menu").addClass("btm");
    else  $(".quick_menu").removeClass("btm");
  }

  // Background Parallax
  function parallax() {
    var scrolled = $(window).scrollTop();
    var _body = $("body");
    _body.hasClass("pcweb") ? _body.css("background-position-y", -(scrolled * 2) + "px") : _body.removeAttr("style");
  }

  // Header Fixed
  function rollScroll() {
    var scroll = getCurrentScroll();
    if (scroll >= ukRollHeader) {
      $ukWrap.addClass("roll");
      // $uKBody.css({
      // 	'background-position-y':'0px',
      // 	'background-attachment':'scroll'
      // });
    } else {
      $ukWrap.removeClass("roll");
      // parallax();
    }
  }

  // Heaaer Background Color
  function rollScrollColor() {
    var $window = $(window),
      $body = $("body"),
      $panel = $(".headerwrap");
    var scroll = $window.scrollTop() + $window.height() / 3;

    $panel.each(function() {
      var $this = $(this);
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
        $body.removeClass(function(index, css) {
          return (css.match(/(^|\s)color-\S+/g) || []).join(" ");
        });
        $body.addClass("color-" + $(this).data("color"));
      }
    });
  }

  // Offset Setting
  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  // Header Fixed Class
  function headerFixed() {
    if ($($ukCbodyIn).length > 0) {
      var cbodyInTop = $ukCbodyIn.offset().top;
      $(window).on("scroll", function() {
        var sSize = 1060;
        $(this).scrollTop() > cbodyInTop ? $ukHeaderWrap.addClass("fixed") : $ukHeaderWrap.removeClass("fixed");
        if ($(window).width() <= sSize) $ukHeaderWrap.removeClass("fixed");
      });
    }
  }

  // Quick Menu Click Animaition
  function skipTopClick() {
    $(document).on("click", ".skip_top", function(e) {
      e.stopImmediatePropagation();
      $("html, body").animate({ scrollTop: 0 }, "300");
      return false;
    });
		$(".skip_toggle").on("touchstart click", function(i, e) {
			$(".quick_menu").toggleClass("toggle_btn");
			return false;
		});
    // 상품 상세 미디어 상품
    $(document).on('click', ".medialink", function () {
      var position = $("#mediaSection").offset();
      $("html, body").stop().animate({scrollTop:position.top - 120},300);
      return false;
    });
    // 상품 상세 패키지 상품
    $(document).on('click', ".packgelink", function () {
      var position = $("#packgeSection").offset();
      $("html, body").stop().animate({scrollTop:position.top - 120},300);
      return false;
    });
  }

  // Tooltip
  $(".uktooltip_area").each(function() {
    var $this = $(this),
      ukBtnTooltip = $(".tooltipopen"),
      ukBtnTooltipClose = $(".ibtn_close");
    ukBtnTooltip.off().on("click", function(e) {
      e.stopPropagation();
      $(".uktooltip.active")
        .not(this)
        .each(function() {
          $(this).removeClass("active");
          $(this)
            .parent(".uktooltip_area")
            .removeClass("active");
        });
      $(this)
        .parent(".uktooltip_area")
        .addClass("active");
    });

    ukBtnTooltipClose.off().on("click", function(e) {
      e.stopPropagation();
      $(this)
        .parent()
        .parent()
        .parent(".uktooltip_area")
        .removeClass("active");
    });
  });

  // Select Style
  function selectLabelFor() {
    $("select").each(function() {
      var $this = $(this);
      $this
        .parent(".uk_select")
        .children("label")
        .attr("for", $this.attr("id"));

      $this.parent(".uk_select").addClass("arrow");
      $this.parent(".uk_select").append('<i class="arr" />');
      $this.on("click", function() {
        if (!$uKBody.hasClass("pcweb")) {
          $this
            .parent(".uk_select")
            .find("i")
            .removeClass("arr-t");
        } else {
          $this
            .parent(".uk_select")
            .find("i")
            .toggleClass("arr-t");
        }
      });
    });
  }

  // Scroll Left Event
  function sclAction() {
    var _scroll_active = $(".scroll_active");
    if (_scroll_active.is(":visible")) {
      _scroll_active.each(function(i, e) {
        var _active_link = $(e).find("li.active");
        var active_scl = _active_link.offset().left;
        $(e).animate({ scrollLeft: active_scl - 10 }, 10);
      });
    }
  }

  // Modal Dim Close Action
  $(document).on("mouseup", function(e) {
    var $ukSel = $(".uk_select");
    if ($ukSel.has(e.target).length === 0) {
      $ukSel.find("i").removeClass("arr-t");
    }
    $('.pdlist').find('li').removeClass('active');
    $('.pdimglist').find('figure').removeClass('active');
  });
	// console.log( $(document).scrollTop($(document).height()) )
})(jQuery);
// body
function bodyClass(){
	if($('.ukmain').find('.cntwrap').is('.p_bizintro')){
		$('body').addClass('bizintro');
	}
	if($('.ukmain').find('.cntwrap').is('.p_execution')){
		$('body').addClass('execution');
	}
}
// Accordian Toggle Open
function toggleOpen(){
	var _this = $(this);
	_this.parent().toggleClass('open');
}
function clickOpen(){
	var _this = $(this);
	_this.parent().addClass('open').siblings().removeClass('open');
}
// Tab Navigation Width Size
function tabNavSet() {
  var totalMenuWidth = 0;
  var menuSet = $(".tablist").find("li");
  menuSet.each(function() {
    totalMenuWidth = totalMenuWidth + $(this).width() + 4;
  });
  $(".tablist").css("width", totalMenuWidth);

  // tabNavFixed();
}
// Tab Fixed
function tabNavFixed() {
  var ukTabNav = $(".uk_tabnav");
  var tabNavOffset = ukTabNav.offset();
  var headerH = $(".header").outerHeight();
  $(window).on("scroll touchmove mousewheel", function() {
    if (!$uKBody.hasClass("pcweb")) {
      $(document).scrollTop() + headerH >= tabNavOffset.top ? ukTabNav.addClass("fixed") : ukTabNav.removeClass("fixed");
    } else {
      $(document).scrollTop() + headerH >= tabNavOffset.top ? ukTabNav.addClass("fixed") : ukTabNav.removeClass("fixed");
    }
  });
}

// Product Image Control
function pdImgList(){
  // Product Img
  $('.pdbody').each(function(i, e){
    var $pdNav = $('.pdsubnav').find('.pdnav');
    var $pdNavList = $pdNav.find('>a');
    var $pdNavListCurr = $pdNav.find('>a.active > span');
    var $pdList = $(e).find('.pdlist');
    var $pdImgList = $(e).find('.pdimglist');
    var $pdFigure = $pdImgList.find('figure');
    var $pdFigureBtn = $pdFigure.find('.btnview');
    var $pdBtnZoomIdx = $pdFigure.find('.ibtn_zoom');
    var $pdCaption = $pdFigure.find('figcaption');
    var _pdimgLen = $pdImgList.find('figure').length;
    $pdList.html('');
    $pdList.prepend('<p class="pdtitle"><span></span></p>');
    $pdList.append('<ul>');
    var $pdListTitle = $pdList.find('.pdtitle > span');
    var $pdListItem = $pdList.find('ul');
    $pdListTitle.text( $('.pdnav>a.active>span').text() );
    for( i=0; i<_pdimgLen; i++ ){
      var $pdCaptionIdx = $pdCaption.eq(i);
      var $pdCaptionText = $pdCaptionIdx.text();
      $pdListItem.append('<li><span>'+$pdCaptionText+'</span></li>');
      /* $pdListItem.find('li').eq(i).on('touchstart click', function(){
        var idx = $(this).index();
        var offset = $('.pdimglist').find('figure').eq(idx).offset();
        $(this).addClass('active').siblings().removeClass('active');
        $('.pdimglist').find('figure').eq(idx).addClass('active').siblings().removeClass('active');
      }) */
      $pdFigure.on('mouseover touchstart click', function(){
        var idx = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.pdlist').find('li').eq(idx).addClass('active').siblings().removeClass('active');
      })
      $pdImgList.on('mouseout', function(){
        $pdFigure.removeClass('active');
        $('.pdlist').find('li').removeClass('active');
      })
      /* $pdImgList.on('mouseout', function(){
        $(this).find('figure').removeClass('active');
        $('.pdlist').find('li').removeClass('active');
      }) */
    }
  })
}
// Product Slider Zoom Control
function pdSliderFunc(){ 
  const _body = $('body');
  const _img_wrap = $('.pdimglist');
  const _zoom_btn = _img_wrap.find('.ibtn_zoom');
  _zoom_btn.on('click', function(){
    const idx = $(this).parents('.grid-item').index();
    const img_length = _img_wrap.children().length;
    _body.addClass('sclock');
    // slide 생성
    _body.append(
      '<div class="img_zoom_wrap">' +
        '<div class="zoom_slide_wrap">' +
          '<div class="zoom_slide"></div>' +
          '<p class="zoom_paging"></p>' +
        '</div>' +
        '<button type="button" class="zoom_slide_close"><i>슬라이드 닫기</i></button>' +
      '</div>');
    const _img_zoom_wrap = $('.img_zoom_wrap');
    const _zoom_slide_close = $('.zoom_slide_close');
    const _zoom_slide = $('.zoom_slide');
    const _slide_paging = $('.zoom_paging');
    for( i=0; i<img_length; i++ ){
      let target = _img_wrap.children().eq(i).find('.img img');
      let captionTarget = _img_wrap.children().eq(i).find('figcaption');
      let img_src = target.attr('src');
      // let img_alt = target.attr('alt');
      let caption_text = captionTarget.text();
      _zoom_slide.append(
        '<figure class="grid-item">' +
          '<div class="img"><img src="'+img_src+'" alt="'+caption_text+'"></div>' +
          '<figcaption>'+caption_text+'</figcaption>' +
        '</figure>');
    }
    _zoom_slide.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      var idx = slick.currentSlide + 1;
      _slide_paging.html('<span class="number"><b class="current">' +idx+ '</b>'+ '<i class="total">' +slick.slideCount+ '</i></span>');
    });
    _zoom_slide.slick({
      initialSlide : idx,
    });
    _img_zoom_wrap.addClass('active');

    _zoom_slide_close.on('click', function(){
      _body.removeClass('sclock');
      _img_zoom_wrap.removeClass('active');
      setTimeout(function(){
        _img_zoom_wrap.remove();
      }, 200);
    });
    $(document).keydown(function(e){
			var code = e.keyCode || e.which;
      // if (code == 27 || code == 32) {
      if (code == 27) {
        _body.removeClass('sclock');
        _img_zoom_wrap.removeClass('active');
        setTimeout(function(){
          _img_zoom_wrap.remove();
        }, 200);
      }
			// if([32].indexOf(e.keyCode) > -1) {
			if (code ==32) {
				e.preventDefault();
			}
    });
    return false;
  });
}
// Product View Slider
function pdViewWideSet(){
  $('.wideslider').each(function(i, e){
    if($(e).find('.grid-item').length <= 1){
      $(e).find('.pdimglist').not('.slick-initialized').slick();
    } else {
      $(e).find('.pdimglist').filter('.slick-initialized').slick('unslick');
    }
    $(e).find('.slider_controls').children('.prev').on('click', function(){
      $(e).find('.pdimglist').slick('slickPrev');
    })
    $(e).find('.slider_controls').children('.next').on('click', function(){
      $(e).find('.pdimglist').slick('slickNext');
    })
  })
}
function pdViewMediaSet(){
  var _winSize = $(window).width();
  var _moSize = 1060;
  var _media = $('.media');
  var _mediaList = _media.find('.pdimglist');
  var _mediaItem = _mediaList.find('.grid-item');
  var _mediaControl = $('.media_control');
  /* _mediaList.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var total = $('.grid-item').length;
    var first = $('.slick-active:first > div:first').get(0);
    var last = $('.slick-active:last > div:last').get(0);
    if($(last).html() == '')
      last = $('.slick-active:last > div:not(:empty)').get(0);
      let start,end;
      $('.slick-slide > div').each(function(i,v){
        if(first === $(v).get(0)) {
          start = i+1;
        } 
        if(last === $(v).get(0)) {
          end = i+1;
        }
      });
    // $('.media_control .slider_counter').html(`Showing ${start} to ${end} of ${total} results`)
    var i = (currentSlide ? currentSlide : 0) + 1;
    var idx = slick.currentSlide + 1;
    // $('.media_control').find('.slider_counter > em').text( slick.slideCount );
  }); */
  var mediaOpt = function(mediaMode){
    return {
      /* infinite: true,
      centerMode: mediaMode ? true : false,
      centerPadding: '0px',
      slidesToShow: mediaMode ? 3 : 3,
      slidesToScroll: 1 */
      infinite: mediaMode ? true : false,
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 8,
      slidesToScroll: 2,
      variableWidth: true,
      focusOnSelect: false,
      arrows: false,
    }
  };
  _mediaControl.find('.ibtn_prev').on('click', function(){
    _mediaList.slick('slickPrev');
  })
  _mediaControl.find('.ibtn_next').on('click', function(){
    _mediaList.slick('slickNext');
  })
  if( _winSize <= _moSize ){
    _mediaList.filter('.slick-initialized').slick('unslick');
    _media.addClass('moset');
  } else {
    if(_mediaItem.length > 3){
      _mediaList.not('.slick-initialized').slick({
        infinite: true,
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        focusOnSelect: false,
        arrows: false,
      });
      _media.removeClass('mdlen');
    } else {
      _mediaList.filter('.slick-initialized').slick('unslick');
      _media.addClass('mdlen');
      // $('.mdlen').find('.media_control > .slider_counter > em').text( _mediaItem.find('img').length );
    }
    _media.removeClass('moset');
  }
}
function pdViewThumbSet(){
  var _winSize = $(window).width();
  var _moSize = 1060;
  var _packge = $('.packge');
  var _thumbWrap = $('.thumbwrap');
  _thumbWrap.each(function(i, e){
    var _thumbList = $(e).find('.thumblist');
    var _thumbItem = $(e).find('.figure');
    var thumbOpt = function(thumbMode){
      return {
        infinite: thumbMode ? true : false,
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
      }
    }

    $(e).find('.thumblist').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      var idx = slick.currentSlide + 1;
      // $(e).find('.total_text > em').text( slick.slideCount );
      $(e).find('.slider_counter .current').text( idx );
      $(e).find('.slider_counter .total').text( slick.slideCount );
    });
    $(e).find('.ibtn_prev').on('click', function(){
      _thumbList.slick('slickPrev');
    })
    $(e).find('.ibtn_next').on('click', function(){
      _thumbList.slick('slickNext');
    })
    if(_thumbItem.length <= 3){
      $(e).addClass('countset');
    } else {
      $(e).removeClass('countset');
    }
    if( _winSize <= _moSize ){
      _thumbList.filter('.slick-initialized').slick('unslick');
      _packge.addClass('moset').removeClass('pcset');
    } else {
      if(_thumbItem.length > 3){
        _thumbList.not('.slick-initialized').slick( thumbOpt(true) );
      } else {
        _thumbList.filter('.slick-initialized').slick('unslick');
        // $('.palen').find('.total_text > em').text( _thumbItem.find('img').length );
      }
      // _thumbList.not('.slick-initialized').slick( thumbOpt );
      _packge.addClass('pcset').removeClass('moset');
    }
  })
}