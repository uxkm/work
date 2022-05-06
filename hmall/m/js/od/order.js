/* common function - 추후 common.js과 통합 필요 */
function bodyScrollLock(){
    $("body").css({"overflow": "hidden"}).addClass("locked");
}
function bodyScrollUnlock(){
    if($("body").hasClass("locked")){
        $("body").css({"overflow": "auto"}).removeClass("locked");
    }
}

function showDim(){
    var _dimTop = $("#content").hasClass("is-web") ? $("header").height() : 0;
    var _wHeight = $("#content").hasClass("is-web") ? $(window).height()-$("header").height() : $(window).height();
    // $(".layer-dim").css({"top": _dimTop, "height": _wHeight}).show();
    $(".layer-dim").show();
}
function hideDim(){
    $(".layer-dim").hide();
}

// 글자수 제한 input 최대값 지정
function setMaxInputCnt(){
    $(".input-cnt-wrap").each(function(){
        var _maxcnt = $(this).data("maxcnt");
        $(this).find(".input-cnt .total-cnt").text(_maxcnt);
    });
}

// 로딩표시
// loadingHtml 부여 시 로딩이미지 하단에 문구 표시(html)
function showLoading(loadingHtml){
    var _scrollTop = $(window).scrollTop();
    var _wHeight = $("#content").hasClass("is-web") ? $(window).height()-$("header").height() : $(window).height();

    $(".loading-layer").css("top", _scrollTop);
    $(".loading-layer .loading-content").css("top", _wHeight/2);
    if(loadingHtml !== "undefined") $(".loading-layer .loading-content .loading-txt").append(loadingHtml);

    bodyScrollLock();
    $(".loading-layer").show();
}
function hideLoading(){
    $(".loading-layer .loading-content .loading-txt").empty();
    $(".loading-layer").hide();
    bodyScrollUnlock();
}
/* // common function - 추후 common.js과 통합 필요 */

var popStack = 0;

$(function(){
    $(window).on('load', function(){
        setMaxInputCnt();
    });

    $(document).on('click', ".btn-lpopup", function(){
        var _popupName = $(this).data("lpopup");
        if(popupNameValidCheck(_popupName)) openLayerPopup(_popupName);
    });

    $(document).on('click', ".btn-slpopup", function(){
        var _popupName = $(this).data("sub-lpopup");
        if(popupNameValidCheck(_popupName)) openSubLayerPopup(_popupName, $(this));
    });

    $(document).on('click', ".layer-popup .btn-cancel", function(){
        //중첩 팝업인 경우 해당 버튼에 _back 클래스 부여하여 팝업 종료 방지
        if(!$(this).hasClass("_back")) closeLayerPopup($(this));
    });

    // 팝업 우상단 닫기 버튼
    $(document).on('click', ".layer-popup .btn-popup-close", function(){
        backStateLayerPopup();
        // $(".sub-popup").removeClass("dimpop");
    });

    // multi shipping chkbox event
    $(document).on('change', ".addr-area .multi-shipping-check", function(){
        if($(this).is(":checked")){
            $(this).parents(".addr-area").find(".addr-detail-area, .input-shipping-info").removeClass("_active");
            $(this).parents(".addr-area").find(".btn-multi-shipping").addClass("_active");
        }
        else{
            $(this).parents(".addr-area").find(".addr-detail-area, .input-shipping-info").addClass("_active");
            $(this).parents(".addr-area").find(".btn-multi-shipping").removeClass("_active");
        }
    });

    //drop down 가능한 섹선 event
    $(document).on('click', ".btn-section-dropdown", function(){
        if($(this).parent().hasClass("_active"))$(this).parent().removeClass("_active");
        else $(this).parent().addClass("_active");
    });

    // 결제수단 버튼 event
    $(document).on('click', ".payment-wrap a", function(){
        $(this).siblings('a').removeClass("on");
        $(this).addClass("on");
    });
    /* var PAYMENT = $(".popup-payment-select");
    PAYMENT.each(function(i, e){
        var paymentLink = $(e).find('.payment-wrap a');
        var paymentCase = $(e).find('.payment-option-area > .case');
        paymentLink.on('click focusin', function(){
            var idx = $(this).index();
            paymentLink.eq(idx).addClass('on').siblings().removeClass('on');
            paymentCase.eq(idx).addClass('on').siblings().removeClass('on');
            return false;
        });
    }); */

    var TAPGROUP = $(".tapgroup");
    TAPGROUP.each(function(i, e){
        var tapMenu = $(e).find('> .tap > li');
        var tapCnt = $(e).find('> .tapcnt');
        tapMenu.on('click focusin', function(){
            var idx = $(this).index();
            tapMenu.eq(idx).addClass('on').siblings().removeClass('on');
            tapMenu.eq(idx).find('>a').attr('aria-selected','true').parent().siblings().find('>a').attr('aria-selected','false');
            tapCnt.eq(idx).addClass('on').siblings().removeClass('on');
            tapCnt.eq(idx).attr('aria-selected','true').siblings().attr('aria-selected','false');
            return false;
        });
    });

    // 배송주소 입력 탭 event
    $(document).on('click', ".layer-popup.order .popup-shipping-addr ul.tab a", function(e){
        e.preventDefault();
        $(this).parents("ul").children("li").removeClass("on");
        $(this).parent("li").addClass("on");
        $(this).parents(".popup-content").children().not("ul.tab").hide();
        if($(this).hasClass("btn-addr-list")){
            $(this).parents(".popup-content").find(".addr-list-area").show();
            $(this).parents(".popup-shipping-addr").find(".btn-confirm").text("선택완료");
        }
        else if($(this).hasClass("btn-add-addr")){
            $(this).parents(".popup-content").find(".input-shipping-info").show();
            $(this).parents(".popup-shipping-addr").find(".btn-confirm").text("저장");
        }
    });


    //배송타입 radio check event
    $(document).on('change', ".popup-shipping-type-select._active input[name='shipping-type-select']", function(){
        var _typeClass = $(this).parents("li").attr("class").toString().replace("shipping-type","").trim();
        var $btnElem = $(document).find(".popup-shipping-type-select .popup-footer .btn-confirm");
        $btnElem.removeClass("_next");
        
        //별도 input 팝업 있는 배송타입만 _next 클래스 부여
        if($(document).find(".layer-popup .popup-input-shipping-info .input-shipping-info").hasClass(_typeClass)){
            $btnElem.addClass("_next");
        }
        // $("input:radio[name='shipping-type-select']:radio[id='shipping-type6']:checked") ? $btnElem.addClass("_nexttab") : $btnElem.removeClass("_nexttab");
    });

    //배송타입 다음버튼 event
    $(document).on('click', ".popup-shipping-type-select._active .btn-confirm._next", function(){
        var _typeClass = $(".popup-shipping-type-select input[type=radio]:checked").parents("li").attr("class").toString().replace("shipping-type","").trim();
        $(this).parents(".popup-shipping-type-select").removeClass("_active");
        $(".popup-input-shipping-info .input-shipping-info."+_typeClass).addClass("_active");
        $(".popup-input-shipping-info").addClass("_active");
        $(".layer-popup").scrollTop(0);
        addPopupStack();
        $(".mapfind-footer").removeClass("expand");
        $(".findlist").scrollTop(0);
    });
    // 안심택배함 주소 click 단계없이 호출
    $(document).on('click', ".btn-lpopup-safedelivery", function(){
        safeDelivery();
        addPopupStack();
        bodyScrollLock();
    });
    // 편의점픽업 주소 click 단계없이 호출
    $(document).on('click', ".btn-lpopup-storepickup", function(){
        storePickup();
        addPopupStack();
        bodyScrollLock();
    });
    // 새벽배송 주소 click 단계없이 호출
    $(document).on('click', ".btn-lpopup-early", function(){
        earlyMorningDelivery();
        addPopupStack();
        bodyScrollLock();
    });
    // 프리미엄 배송 주소 click 단계없이 호출
    $(document).on('click', ".btn-lpopup-premium", function(){
        premiumShipping();
        addPopupStack();
        bodyScrollLock();
    });

    //배송타입 이전버튼 event
    $(document).on('click', ".popup-input-shipping-info._active .btn-cancel._back", function(){
        closeLayerPopup();
        $(".mapfind-footer").removeClass("expand");
        $(".findlist").scrollTop(0);
    });


    //여러곳으로 배송 주소입력 event
    $(document).on('click', ".popup-multi-shipping .btn-input-multi-addr", function(){
        $(this).parents(".popup-multi-shipping").removeClass("_active");
        $(this).parents(".popup-multi-shipping").siblings(".popup-shipping-addr").addClass("_active");
        $(".layer-popup").scrollTop(0);
        addPopupStack();
    });

    //특화배송 주소영역 지도 버튼 event
    $(document).on('click', ".shipping-search-list .btn-map-detail", function(){
        // var $mapElem = $(this).parent(".wrap-btn").siblings(".map-area");
        if($(this).hasClass("on")) {
            $(this).removeClass("on");
            // $mapElem.removeClass("on");
        }
        else{
            $(this).addClass("on");
            // $mapElem.addClass("on");
        }
    });

    // 기타포인트 체크박스 event
    $(document).on('click', ".chk-etc-point", function(){
        if($(this).prop('checked') && $(this).data("etc-point") != 'undefined'){
            // openSubLayerPopup($(this).data('etc-point').toString());
            return false;
        }
    });
    // 기타포인트 조회 호출 event
    $(document).on('click', ".btn-etc-point", function(){
        var _pointType = $(this).siblings(".chk-etc-point").data("etc-point");
        if(typeof(_pointType) != 'undefined'){
            openSubLayerPopup(_pointType);
        }
    });

    // 기타포인트 개인정보제공 동의영역 folding
    $(document).on('click', ".popup-etc-point .btn-areement", function(){
        var _agreementElem = $(this).siblings(".agreement-text");
        if(_agreementElem.hasClass("on")) _agreementElem.removeClass("on");
        else _agreementElem.addClass("on");
    });

    // 상품권 이용안내 checkbox event
    $(document).on('click',".point-area .chk-voucher", function(){
        if($(this).is(":checked")) {
            openSubLayerPopup("popup-voucher-guide");
        }
    });

    //confirm 스타일 팝업종료 이벤트
    $(document).on('click',".layer-popup .confirm-close", function(){
        backStateLayerPopup();
    });

    // 배송메모 사용자입력 선택 event
    $(document).on('change', ".select-shipping-memo", function(){
        if($(this).children(":selected").hasClass("memo-custom")) $(this).siblings(".shipping-memo").addClass("_active");
        else $(this).siblings(".shipping-memo").removeClass("_active");
    });

    // 현금영수증 발행 체크박스
    $(document).on('change', ".receipt-checkbox", function(){
        if($(this).is(":checked")) $(this).parents(".receipt-header").siblings(".receipt-content").addClass("_active");
        else $(this).parents(".receipt-header").siblings(".receipt-content").removeClass("_active");
    });

    // 현금영수증 발행 유형
    $(document).on('change', ".receipt-type-select input[type='radio']", function(){
        $(this).parents(".receipt-type-select").siblings(".row-wrap").removeClass("_active");
        if($(this).hasClass("receipt-type-1")) $(this).parents(".receipt-type-select").siblings(".individual-area").addClass("_active");
        else if($(this).hasClass("receipt-type-2")) $(this).parents(".receipt-type-select").siblings(".corporation-area").addClass("_active");
    });

    // 현금영수증 개인 증빙 유형
    $(document).on('change', ".evidence-type-select", function(){
        $(this).parents(".row-title").siblings(".row-value").removeClass("_active");
        if($(this).children(":selected").attr('class') == "phone-number") $(this).parents(".row-title").siblings(".type-phone-number").addClass("_active");
        else $(this).parents(".row-title").siblings(".type-card-number").addClass("_active");
    });

    // layer popup input scroll 값 보정
    $(document).on('click',".layer-popup.order._active .popup-content input[type='text'], .layer-popup.order._active .popup-content input[type='number']", function(){
        if($(".layer-popup._active").length>1){
            $(".sub-popup._active").scrollTop($(this).position().top-10);
        }
        else {
            $(".layer-popup.order._active").scrollTop($(this).position().top-10);
        }
    });

    // 말풍선 타입 sub-area 닫기버튼 event
    $(document).on('click', ".sub-area.type-bubble .btn-close", function(){
        $(this).parent(".sub-area.type-bubble").hide();
    });

    // 쇼핑라이브 배너 닫기버튼 event
    $(document).on('click', ".live-banner-area .btn-banner-close", function(){
        $(this).parents(".live-banner-area").hide();
    });

    $(".mapfind").each(function(i, e){
        $(e).find(".mapfind-footer .btn-toggle").on('click', function(){
            $(e).find(".mapfind-footer").toggleClass("expand");
        })
    });

    // 디바이스 기기 검색 영역에 포커스 일 때 리스트 대응
    $(".device .mapfind-head .inputbox input").on("focusin", function(){
        $(".mapfind-footer").addClass("expand");
    }).on("focusout", function(){
        $(".mapfind-footer").removeClass("expand");
    })
    // 맵영역 높이 값 제어
    mapHeight();
});

// popup 노출 스택 추가
function addPopupStack(){
    popStack++;
    $(".layer-popup.order").find("._active:not([data-popup-stack])").attr("data-popup-stack",popStack);
}

// 레이어팝업 name data 유효성 체크
function popupNameValidCheck(popupName){
    return ($(document).find(".layer-popup ." + popupName).length > 0);
}

// 레이어 팝업 호출 공통 function
// .layer-popup 아래에 popup 생성 후, 해당 클래스명을 호출할 element에 data-lpopup 으로 부여
function openLayerPopup(_popupName){
    history.pushState(null, '', location.href);
    var _hHeight = $("#content").hasClass("is-web") ? $("header").height() : 0;
    bodyScrollLock();
    $(".layer-popup").not(".sub-popup").css("padding-bottom", _hHeight).addClass("_active").scrollTop(0);
    $(".layer-popup ."+_popupName).addClass("_active");
    addPopupStack();
}

// 서브레이어 팝업 호출 공통 function
// .sub-popup 아래에 popup 생성 후, 해당 클래스명을 호출할 element에 data-sub-lpopup 으로 부여
// 분기 팝업인 경우 lpopup-active-class에 active 부여할 클래스 부여
function openSubLayerPopup(_popupName, $popupCallElem){
    history.pushState(null, '', location.href);
    var _hHeight = $("#content").hasClass("is-web") ? $("header").height() : 0;
    bodyScrollLock();
    $(".sub-popup").css("padding-top", _hHeight).addClass("_active");
    $(".sub-popup ." + _popupName).addClass("_active");
    if(typeof($popupCallElem) != 'undefined'){
        if($popupCallElem.data("lpopup-active-class")) $(".layer-popup.sub-popup ." + _popupName + " ." + $popupCallElem.data("lpopup-active-class")).addClass("_active");
        if($("[data-popup-stack=" + popStack + "]").parents(".layer-popup").hasClass("sub-popup")) $("[data-popup-stack=" + popStack + "]").removeClass("_active");
    }

    // dimmed popup
    /* if ($(".sub-popup ." + _popupName).hasClass("dimpop")) {
        if($(".sub-popup .dimpop").hasClass("_active")){
            $(".sub-popup").addClass("dimpop");
        }
        showDim();
        var _wHeight = $(window).height() - _hHeight;
        var _pHeight = $(".sub-popup ." + _popupName).height();
        // $(".sub-popup ." + _popupName).css({"top": (_wHeight / 2) - (_pHeight / 2)});
    } */
    if ($(".sub-popup ." + _popupName).hasClass("dimpop")) {
        showDim();
        var _wHeight = $(window).height() - _hHeight;
        var _pHeight = $(".sub-popup ." + _popupName).height();
        $(".sub-popup ." + _popupName).css({"top": (_wHeight / 2) - (_pHeight / 2)});
    }
    addPopupStack();
}

// 팝업 뒤로가기 공통
function backStateLayerPopup(){

    //popup stack이 있는 경우에만 동작
    if(popStack > 0){
        // dimmed popup인 경우 dim 우선 제거
        if($("[data-popup-stack=" + popStack + "]").hasClass("dimpop")) hideDim();

        //여러곳으로 배송 step 분기
        if($("[data-popup-stack=" + popStack + "]").not(".step1").is(".popup-multi-shipping, .popup-multi-gift-shipping")){
            // add. 0904 - 반반배송 구분 클래스 제거 추가
            var _currStep = parseInt($("[data-popup-stack=" + popStack + "]").attr("class").replace("popup-multi-shipping","").replace("popup-multi-gift-shipping","").replace("_active","").replace("step","").replace("halfDlv","").replace("halfDlv_confirm","").trim());
            backMultiShippingPopup(_currStep);
        }
        else{
            if(popStack == 1){
                if(typeof halfDlv !== 'undefined' && halfDlv && !$(".popup-multi-shipping.halfDlv").is(".halfDlv_confirm")){    // add. 0904 - 상품상세 > 반반배송 바로 진입 시 최초 backState 이벤트는 뒤로가기 & 최종 confirm 클래스 없을때
                    history.back(-1);
                } else {    // old. 기존 팝업레이어 닫기 실행
                    closeLayerPopup();
                }
            }
            else{
                if($("[data-popup-stack=" + popStack + "]").parents(".sub-popup").length >= 1 && $("[data-popup-stack=" + (popStack-1) + "]").parents(".layer-popup:not(.sub-popup)").length >= 1 ) $(document).find(".sub-popup").removeClass("_active");
                $("[data-popup-stack=" + (popStack--) + "]").removeClass("_active").removeAttr("data-popup-stack");
                $("[data-popup-stack=" + popStack + "]").addClass("_active");
            }
        }
    }
}

// 팝업 닫기 공통
function closeLayerPopup(){
    //선물하기 영역 분기처리
    // if($(document).find(".input-shipping-info._active").hasClass("type9")){
    //     backStateLayerPopup();
    // }
    // else{
    $(document).find(".layer-popup, .layer-popup *").removeClass("_active").removeAttr("data-popup-stack");
    bodyScrollUnlock();
    popStack = 0;
    // }
    $(".layer-popup.order").removeClass("mapscroll");
}

// 여러곳으로 배송 step back
function backMultiShippingPopup(_currStep){
    if($(".layer-popup._active ._active").hasClass("popup-multi-shipping")) var _multiShippingType = "popup-multi-shipping";
    else var _multiShippingType = "popup-multi-gift-shipping";

    if((_currStep-1) > 0){
        if(!$("." + _multiShippingType + " .btn-confirm").hasClass("_next")) $("." + _multiShippingType + " .popup-footer > .btn-confirm").addClass("_next");
        $("." + _multiShippingType).removeClass("step"+_currStep).addClass("step"+(_currStep-1));
        if((_currStep-1) === 1){
            $("." + _multiShippingType + " .popup-footer button").removeClass("_back");
        }
    }
}

// 여러곳으로 배송 final step confirm close event
function closeMultiShippingPopup(){
    if($(".layer-popup._active ._active").hasClass("popup-multi-shipping")) var _multiShippingType = "popup-multi-shipping";
    else var _multiShippingType = "popup-multi-gift-shipping";

    if($("." + _multiShippingType).hasClass("_active") && ($("." + _multiShippingType).hasClass("step3") || $("." + _multiShippingType + ".halfDlv").hasClass("step2")) ){  // add. 0904 - 반반배송 닫힘 조건 추가 (.halfDlv.step2)
        // add. 0904 - 최종 confirm 시, 반반배송 history.back(-1) 되지 않도록 구분 클래스 추가
        if(typeof halfDlv !== 'undefined' && halfDlv) $("." + _multiShippingType + ".halfDlv").addClass("halfDlv_confirm");

        $(".layer-popup").removeClass("_active");
        $("." + _multiShippingType).removeClass("_active step2 step3").addClass("step1").removeAttr("data-popup-stack");    // add. 0904 - 반반배송 닫힘 조건 추가 (step2)
        $("." + _multiShippingType + " .btn-confirm").addClass("_next");
        bodyScrollUnlock();
        popStack = 0;
    }
}

// 특화배송 주소찾기 type 제거
function removeShippingTypeState(){
    $(".popup-search-shipping").removeClass("type-safe-shipping type-subway type-cvs");
}

function tapGp(){
    var TAPGROUP = $(".tapgroup");
    TAPGROUP.each(function(i, e){
        var tapMenu = $(e).find('> .tap > li');
        var tapCnt = $(e).find('> .tapcnt');
        tapMenu.on('click focusin', function(){
            var idx = $(this).index();
            tapMenu.eq(idx).addClass('on').siblings().removeClass('on');
            tapMenu.eq(idx).find('>a').attr('aria-selected','true').parent().siblings().find('>a').attr('aria-selected','false');
            tapCnt.eq(idx).addClass('on').siblings().removeClass('on');
            tapCnt.eq(idx).attr('aria-selected','true').siblings().attr('aria-selected','false');
            return false;
        });
    });
}

// 안심택배함 단계없이 보여주기
function safeDelivery(){
    $(".popup-shipping-type-select").removeClass("_active");
    $(".layer-popup.order").addClass("_active");
    $(".layer-popup.sub-popup").removeClass("_active");
    $(".popup-input-shipping-info").addClass("_active");
    $(".popup-input-shipping-info .input-shipping-info.type3").addClass("_active");
    $(".layer-popup").scrollTop(0);
}
// 편의점픽업 단계없이 보여주기
function storePickup(){
    $(".popup-shipping-type-select").removeClass("_active");
    $(".layer-popup.order").addClass("_active");
    $(".layer-popup.sub-popup").removeClass("_active");
    $(".popup-input-shipping-info").addClass("_active");
    $(".popup-input-shipping-info .input-shipping-info.type5").addClass("_active");
    $(".layer-popup").scrollTop(0);
}
// 새벽배송 수정 탭 단계없이 보여주기
function earlyMorningDelivery(){
    $(".popup-shipping-type-select").removeClass("_active");
    $(".layer-popup.order").addClass("_active");
    $(".layer-popup.sub-popup").removeClass("_active");
    $(".popup-input-shipping-info").addClass("_active");
    $(".popup-input-shipping-info .input-shipping-info.type6").addClass("_active");
    $(".layer-popup").scrollTop(0);
}
// 프리미엄배송 수정 탭 단계없이 보여주기
function premiumShipping(){
    $(".popup-shipping-type-select").removeClass("_active");
    $(".layer-popup.order").addClass("_active");
    $(".layer-popup.sub-popup").removeClass("_active");
    $(".popup-input-shipping-info").addClass("_active");
    $(".popup-input-shipping-info .input-shipping-info.type7").addClass("_active");
    $(".layer-popup").scrollTop(0);
}
// 맵 영역 높이값 제어
function mapHeight(){
    var mapH = $(window).height() - 49;
    var mapAppH = $(window).height();
    var mapHead = 174;
    var mapBody = mapH - mapHead;
    var mapAppBody = mapAppH - mapHead;
    $(".mapfind-body").css({
        "height":mapBody + "px",
        "min-height":mapBody + "px"
    });
    $(".app .mapfind-body").css({
        "height":mapAppBody + "px",
        "min-height":mapAppBody + "px"
    });
    $(".popup-shipping-type-select .btn-confirm").on("click", function(){
        $(".layer-popup.order").addClass("mapscroll");
    });
    $(".mapfind .btn-popup-close").on("click", function(){
        $(".layer-popup.order").removeClass("mapscroll");
    });
}
$(window).on('resize', function(e){
    e.preventDefault();
    mapHeight();
})