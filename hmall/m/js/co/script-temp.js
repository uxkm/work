/* userAgent.js */
!function(e){"use strict";var o=e.userAgent=function(e){function o(e){var o={},i=/(dolfin)[ \/]([\w.]+)/.exec(e)||/(chrome)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(e)||/(webkit)(?:.*version)?[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(e)||["","unknown"];return"webkit"===i[1]?i=/(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(e)||/(android)[ \/]([\w._\-]+);/.exec(e)||[i[0],"safari",i[2]]:"mozilla"===i[1]?i[1]=/trident/.test(e)?"msie":"firefox":/polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(e)&&(i[1]="polaris"),o[i[1]]=!0,o.name=i[1],o.version=n(i[2]),o}function n(e){var o={},n=e?e.split(/\.|-|_/):["0","0","0"];return o.info=n.join("."),o.major=n[0]||"0",o.minor=n[1]||"0",o.patch=n[2]||"0",o}function i(e){return t(e)?"pc":r(e)?"tablet":a(e)?"mobile":""}function t(e){return e.match(/linux|windows (nt|98)|macintosh/)&&!e.match(/android|mobile|polaris|lgtelecom|uzard|natebrowser|ktf;|skt;/)?!0:!1}function r(e){return e.match(/ipad/)||e.match(/android/)&&!e.match(/mobi|mini|fennec/)?!0:!1}function a(e){return e.match(/ip(hone|od)|android.+mobile|windows (ce|phone)|blackberry|bb10|symbian|webos|firefox.+fennec|opera m(ob|in)i|polaris|iemobile|lgtelecom|nokia|sonyericsson|dolfin|uzard|natebrowser|ktf;|skt;/)?!0:!1}function s(e){var o={},i=/(iphone|ipad|ipod)[\S\s]*os ([\w._\-]+) like/.exec(e)||/(android)[ \/]([\w._\-]+);/.exec(e)||(/android/.test(e)?["","android","0.0.0"]:!1)||(/polaris|natebrowser|([010|011|016|017|018|019]{3}\d{3,4}\d{4}$)/.test(e)?["","polaris","0.0.0"]:!1)||/(windows)(?: nt | phone(?: os){0,1} | )([\w._\-]+)/.exec(e)||(/(windows)/.test(e)?["","windows","0.0.0"]:!1)||/(mac) os x ([\w._\-]+)/.exec(e)||(/(linux)/.test(e)?["","linux","0.0.0"]:!1)||(/webos/.test(e)?["","webos","0.0.0"]:!1)||/(bada)[ \/]([\w._\-]+)/.exec(e)||(/bada/.test(e)?["","bada","0.0.0"]:!1)||(/(rim|blackberry|bb10)/.test(e)?["","blackberry","0.0.0"]:!1)||["","unknown","0.0.0"];return"iphone"===i[1]||"ipad"===i[1]||"ipod"===i[1]?i[1]="ios":"windows"===i[1]&&"98"===i[2]&&(i[2]="0.98.0"),o[i[1]]=!0,o.name=i[1],o.version=n(i[2]),o}function w(e){var o={},i=/(crios)[ \/]([\w.]+)/.exec(e)||/(daumapps)[ \/]([\w.]+)/.exec(e)||["",""];return i[1]?(o.isApp=!0,o.name=i[1],o.version=n(i[2])):o.isApp=!1,o}return e=(e||window.navigator.userAgent).toString().toLowerCase(),{ua:e,browser:o(e),platform:i(e),os:s(e),app:w(e)}};"object"==typeof window&&window.navigator.userAgent&&(window.ua_result=o(window.navigator.userAgent)||null)}(function(){return"object"==typeof exports?(exports.daumtools=exports,exports.util=exports,exports):"object"==typeof window?(window.daumtools="undefined"==typeof window.daumtools?{}:window.daumtools,window.util="undefined"==typeof window.util?window.daumtools:window.util,window.daumtools):void 0}());

/* UIComponent.mobile.swiper start */
var mainSwiper = function(_opt){
    var _selector = '.swiper-container'
    var _default = {
        initialSlide : 0, //Index number of initial slide.
        direction: "horizontal", //Could be 'horizontal' or 'vertical'
        autoHeight: true,
        loop: true,
        touchAngle: 30, //Allowable angle in degrees to trigger touch move
        threshold: 20, //Threshold value in px. If "touch distance" will be lower than this value then swiper will not move
        a11y: true, //Accessibility,
        touchMoveStopPropagation: true, //If enabled, then propagation of "touchmove" will be stopped
    }
    var swiperWeb
    
    console.log("mainSwiper -> Swiper", Swiper)
    if(typeof Swiper === 'function'){
        swiperWeb = new Swiper(_selector, $.extend(_default, _opt));
    }
    return swiperWeb
}
/* UIComponent.mobile.swiper end */

var userAgent = function(){
    var os = "os_" + ua_result.os.name;
    var platform = ua_result.platform;
    var browser = ua_result.browser.name;
    var version = "ver_" + ua_result.browser.version.major;
    var ua = os + " " + platform + " " + browser + " " + version;
    $("body").addClass(ua);
}

var AppMain = {}
$(function(){

    AppMain.slicks = {
        centerauto : $('[data-id=slick01]').useSlick({
                        'type': 'centerauto',
                    }),
        noncount : $('[data-id=slick02]').useSlick({
                        'type': 'noncount'
                    }),
        leftalign : $('[data-id=slick03]').useSlick({
                        'type': 'leftalign'
                    }),
        countauto : $('[data-id=slick04]').useSlick({
                        'type': 'countauto'
                    }),
        totalcurrent : $('[data-id=slick05]').useSlick({
                        'type': 'totalcurrent'
                    }),
        leftright : $('[data-id=slick06]').useSlick({
                        'type': 'leftright'
                    }),
        dotpaging : $('[data-id=slick07]').useSlick({
                        'type': 'dotpaging'
                    }),
    }

    /* tabmenu */
    AppMain.tabmenu = $(".tabgroup[data-id=tabgroup1]").tabmenu({
        'name': 'tabmenu01',
        'scroll': false, // 좌우 스크롤 여부
        'index':0, // 시작시 view index
        'ready' : function(info){
            console.log("ready : ", info)
        },
        'before' : function(e, $e, index){
            console.log("before", e, $e, index);
        },
        'after' : function(e, $e, index){
            console.log("after", e, $e, index);
        }
    });

    /* mobile swiper에 공통 navScroller select액션 추가 start */
    AppMain.swiper = new mainSwiper()
    AppMain.swiper.on('slideChangeTransitionEnd', function (e) {
        if(typeof UI !== 'undefined' && UI.navScroller){
            var realIndex = AppMain.swiper.realIndex;
            UI.navScroller.select(realIndex)
        }
    });
   
    /* //mobile swiper에 공통 navScroller select액션 추가 end */


    //navScroller와 layerPopTrigger를 이용한 이미지 상세보기구현
    var $bigSlick;
    var $current = $('.img-slide-area .pagination .current')
    var $total = $('.img-slide-area .pagination .total')

    var $thumb = $('.thumb-img').navScroller({
        'index' : 0,
        'autoToCenter' : true,
        'name' : 'thumb',
        'activeClass' : 'on',
        'onClick' : function(e, index, length){
            $bigSlick.slick('slickGoTo', index)
        }
    })

    var $imgToast = $('.top-img-area').simpleToast({
        'time' : 2000, //2초뒤 천천히 사라짐
    })

    var $imageViewer = $('.lyopen').layerPopTrigger({
        'afterOpen' : function(e, targetPop){
            var index = $(e.target).closest('li').index()
            console.log("index", index)
            if(!$bigSlick){//최초 한번만 slick 로드.
                $bigSlick = $('.big-img-slider').slick({
                    'autoplay' : false,
                    'initialSlide' : index
                })
                $bigSlick.on('beforeChange', function(e, slick, slideIndex, nextSlideIndex){
                    $current.text(nextSlideIndex+1)
                    $total.text(slick.$slides.length)
                    $thumb.select(nextSlideIndex)
                })

                var slickObj = $bigSlick.slick('getSlick')
                $current.text(slickObj.currentSlide+1)
                $total.text(slickObj.$slides.length)
                $thumb.select(slickObj.currentSlide)
            } else {
                $bigSlick.slick('slickGoTo', index, true)
                $thumb.select(index)
            }
            $imgToast.createNewToast('이미지를 확대해서 볼수 있습니다')
        },
        'afterClose' : function(){
            $imgToast.removeAllToast()
        }
    })



    userAgent()
});
