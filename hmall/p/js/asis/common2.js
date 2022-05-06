document.domain = "hmall.com";
var locationHref = document.location.href;
var imageServer = "http://image.hmall.com";
var serverHost = (location.href.indexOf("final") > 0 || location.href.indexOf("stg") > 0 || location.href.indexOf("dev") > 0) ? "http://" + location.host : "http://www.hmall.com";
var serverHostForSSL = (location.href.indexOf("final") > 0 || location.href.indexOf("stg") > 0 || location.href.indexOf("dev") > 0) ? "https://" + location.host : "https://www.hmall.com";
var switch_serverHost;

if (locationHref.indexOf("https") > -1) {
    switch_serverHost = serverHostForSSL;
    imageServer = "https://image.hmall.com";
} else if (locationHref.indexOf("http") > -1) {
    switch_serverHost = serverHost;
    imageServer = "http://image.hmall.com";
}

var console = window.console || {log:function(){}};

//스마트폰에서 다음과 같은 파라미터로 넘어오면 m.hmall.com으로 안보낸다.
var smartSitename = location.href;
var smartDir ="";
if(smartSitename.indexOf("?") >= 0){
    var cut_param =  smartSitename.split("?");
    if(cut_param[1].indexOf("dir") >= 0 || cut_param[0].indexOf("dpc") >=0){	// 20150630 - 수정 (요청-rladltn)
        //if(cut_param[1].indexOf("dir") >= 0){
        smartDir="no";
    }
}

//이메일 수신거부 거절시페이지에서 접근시 m.hmall.com으로 안보낸다.
if(smartSitename.indexOf("emailRfs") >=0 || smartSitename.indexOf("simpEmailRfsC") >=0 ){
    smartDir="no";
}

// 모바일 체크시  - EHReferCode + EHTcCode 20110527
if(smartSitename.indexOf("pcViewYn=Y") < 0 && $.cookie("pcViewYn") !="Y"){
    var mobileKeyWords = new Array('iPhone', 'iPod', 'iPad', 'BlackBerry', 'Windows Phone', 'Android', 'Mobi', 'Mobile', 'SymbOS', 'SymbianOS', 'Mini', 'Bada', 'webOS');
    if(document.domain.indexOf("kbpointreemall") <= 0 && document.domain.indexOf("trendh") < 0 && smartDir !="no"){
        for (var word in mobileKeyWords){
            if (navigator.userAgent.match(mobileKeyWords[word]) != null){
                //location.href = "http://m.hmall.com/p/index.do";
                location.href = "http://www.hmall.com/p/shNetworkShop.do?NetworkShop=smart";
                break;
            }
        }
    }
}

// IE version chk
function getInternetExplorerVersion() {
    var rv = -1;
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }

    if ( rv >= 7 ) {
        var trident = navigator.userAgent.match(/Trident\/(\d)/i);
        if(trident != null){
            var trident_ver = trident[0];
            if ( trident_ver == 4 ) {
                return 8
            }
            else if ( trident_ver == 5 ) {
                return 9
            }
            else if ( trident_ver == 6 ) {
                return 10;
            }
            else {
                return rv;
            }
        } else{
            return 7;
        }
    }
    return rv;
}

// gnb - Category
function setup_gnbCategory(){
    var xdr, switch_htmlName;
    if (locationHref.indexOf("https") > -1) {
        switch_htmlName = "mainSectCtgrSsl";
    } else if (locationHref.indexOf("http") > -1) {
        switch_htmlName = "mainSectCtgr";
    }

    if (document.location.hostname.indexOf("www") == -1 && navigator.userAgent.indexOf("MSIE") != -1 && getInternetExplorerVersion() < 10 ) {
        xdr = new XDomainRequest();
        if(xdr){
            xdr.onload  = function(){
                $("#gnb").html(xdr.responseText);
                main_gnb();
            }
            xdr.onerror = function(){}
            xdr.open("get", ""+ switch_serverHost + "/gen/html/"+ switch_htmlName +".html");
            xdr.send();
        }
    } else {
        $("#gnb").load(""+ switch_serverHost + "/gen/html/"+ switch_htmlName +".html", function(responseTxt,statusTxt,xhr){
            if(statusTxt=="success") main_gnb();
        });
    }
}

jQuery(function($){
	
	//브라우져 이동 횟수
	var pageMoveCnt = $.cookie("pageMoveCnt");
	if(pageMoveCnt != null){
		pageMoveCnt = parseInt(pageMoveCnt) + 1;
	}else{
		pageMoveCnt = 1;
	}
	
	var todayDate = new Date();
    todayDate = new Date( todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate(), 23, 59, 59 );
	document.cookie = "pageMoveCnt=" + escape( pageMoveCnt ) + "; path=/; domain=.hmall.com; expires=" + todayDate + ";"

    // new_main_data4.js - 플로팅 배너
    try {
        if(FloatingJson.length > 0 && location.href.indexOf("Home.html") > 0){
            $.each(FloatingJson, function(i, arr){
                var crmCd = FloatingJson[0].crmCd;
                var dispTrtyNmCd = FloatingJson[0].dispTrtyNmCd;
                var dispImflNm = FloatingJson[0].dispImflNm;
                var dispNm = FloatingJson[0].dispNm;
                var dispUrl = FloatingJson[0].dispUrl;
                if(window.location.href.indexOf("Home.html") >= 0){
                    dispUrl = (dispUrl.indexOf("?") > -1) ? dispUrl +'&MainpageGroup=FloatingBanner&GroupbannerName='+ crmCd : dispUrl +'?MainpageGroup=FloatingBanner&GroupbannerName='+ crmCd;
                }

                if($.cookie(crmCd) != "checked"){
                    var excep_rgx = new RegExp('(/Home.html)','g');
                    var excep_Filter = excep_rgx.test(locationHref);
                    if ( excep_Filter ){
                        var floatBn_html = '';
                        var cont_top = Math.floor((($(window).height() - 163) / 1.5) + $(window).scrollTop());
                        var cont_left = Math.floor((($(window).width() - 163) / 1.2) + $(window).scrollLeft());
                        /*
                        anmt = function(){
                            $("div.floatingBn").animate({ top : cont_top }, 600).animate({ top : cont_top + 10 }, 700, function(){ anmt() });
                        }
                        */
                        bn_close = function(){
                            $.cookie(crmCd, "checked" , {expires : 1, path : "/"});
                            $(".floatingBn").remove();
                        }

                        floatBn_html += '<div class="floatingBn" style="position:absolute; top:'+ cont_top +'px; left:'+ cont_left +'px; z-index:10005;" data-original="position:absolute; top:'+ Math.floor(($(window).height() - 163) / 1.5) +'px; left:'+ cont_left +'px; z-index:10005;">';
                        floatBn_html += '<a href="javascript:bn_close();" style="position:absolute; top:25px; right:24px"><img src="' + imageServer + '/hmall/co/floating_close.png" alt="닫기" /></a>';
                        floatBn_html += '<a href="'+ dispUrl +'" class="gp_className" ga-category="메인 홈" ga-action="플로팅배너" ga-label="' + dispNm + '"><img src="'+ imageServer + dispImflNm +'" alt="" /></a>';
                        floatBn_html += '</div>';

                        $('body').append(floatBn_html);
                        /*
                        anmt();

                        $("div.floatingBn").on("mouseenter", function(){
                            $("div.floatingBn").stop().stop();
                        }).on("mouseleave", function(){
                            anmt();
                        });
                        */
                        /*
                                                $(window).resize(function(){
                                                    var cont_top = (($(window).height() - 163) / 1.5) + $(window).scrollTop();
                                                    var cont_left = (($(window).width() - 163) / 1.2) + $(window).scrollLeft();
                                                    $('div.floatingBn').css({ top : cont_top, left : cont_left });
                                                });
                                                */
                    }
                }
            });
        }
    } catch (e) {}

    /**
     * 숫자만 입력가능
     */
    $("input.onlyNumberInput").keydown(function(event) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ( $.inArray(event.keyCode,[46,8,9,27,13,190]) !== -1 ||
            // Allow: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) ||
            // Allow: home, end, left, right
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        else {
            // Ensure that it is a number and stop the keypress
            if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                event.preventDefault();
            }
        }
    });

    /**
     * 로그인 회원ID 포커스
     */
    var logCob_rgx = new RegExp('(/p/cob/)','g');
    var logCob_Filter = logCob_rgx.test(locationHref);
    var inputVal = null;


    /**
     * 회원가입 - STEP3 정보입력, 마이페이지 - 회원정보
     */
    var cua_rgx = new RegExp('(/p/cua/)|(/p/mpd/)','g');
    var cua_Filter = cua_rgx.test(locationHref);
    if ( cua_Filter ){
        var emailSelect = $('#emailSelect'),
            job = $('#jop'),
            allChkBox = $('#allChk'),
            marriageChk = $('#weddingChk input[type="radio"]'),
            allChk = $('#agreeAllChk');

        // 이메일 입력방식
        emailSelect.bind('change', function(){
            var $this = $(this);
            var value = $this.val();
            var target = $this.prev('input[type="text"]')
            if (value != 'none') {
                target.hide();
            }else{
                target.show().focus();
            };
        });

        // 직업선택
        job.bind('change', function(){
            var $this = $(this);
            var value = $this.val();
            var target = $('#jobInfo');
            if (value != 'none') {
                target.show();
            }else{
                target.hide()
            };
        }).filter(':first').change();

        // 카테고리 체크
        allChkBox.bind('click', function(){
            var $this = $(this);
            var checked = $this.attr('checked');
            var target= $('.detail li input[type="checkbox"]');
            if (checked) {
                target.attr('checked', 'checked')
            }else{
                target.removeAttr('checked')
            };
        });

        // 결혼여부
        marriageChk.bind('click', function(){
            var $this = $(this);
            var target = $('#anniversary');
            var sel = $this.next('label').text();
            if ( sel == '기혼' ) {
                target.show();
            }else{
                target.hide();
            }
        });
    }

    /**
     * 상품 정렬 갯수 [ OO개씩 형식 ] - 기획전 형식[searchSpexSectItem.do] 예외
     **/
    var searchSpexSectItem_rgx = new RegExp('(/p/dpa/searchSpexSectItem.do)','g');
    var searchSpexSectItem_Filter = searchSpexSectItem_rgx.test(locationHref);
    if ( !searchSpexSectItem_Filter ){
        var select_root = $('div.cate_selec');
        var select_value = $('.myValue');
        var select_a = $('div.cate_selec>ul>li>a');
        var select_input = $('div.cate_selec>ul>li>input[type=radio]');
        var select_label = $('div.cate_selec>ul>li>label');

        // Radio Default Value
        $('div.myValue').each(function(){
            var default_value = $(this).next('.iList').find('input[checked]').next('label').text();
            $(this).append(default_value);
        });

        select_value.bind('focusin',function(){$(this).addClass('outLine');});
        select_value.bind('focusout',function(){$(this).removeClass('outLine');});
        select_input.bind('focusin',function(){$(this).parents('div.cate_selec').children('div.myValue').addClass('outLine');});
        select_input.bind('focusout',function(){$(this).parents('div.cate_selec').children('div.myValue').removeClass('outLine');});

        function i_hover(){
            $(this).parents('ul:first').children('li').removeClass('hover');
            $(this).parents('li:first').toggleClass('hover');
        }

        function hide_option(){
            var t = $(this);
            setTimeout(function(){
                t.parents('div.cate_selec:first').removeClass('open');
            }, 1);
        }

        function set_label(){
            var v = $(this).next('label').text();
            $(this).parents('ul:first').prev('.myValue').text('').append(v);
            $(this).parents('ul:first').prev('.myValue').addClass('selected');
        }

        function set_anchor(){
            var v = $(this).text();
            $(this).parents('ul:first').prev('.myValue').text('').append(v);
            $(this).parents('ul:first').prev('.myValue').addClass('selected');
        }

        $('*:not("div.cate_selec a")').focus(function(){
            $('.aList').parent('.cate_selec').removeClass('open');
        });

        select_value.bind('click',function(){
            $(this).parents('div.cate_selec:first').toggleClass('open');
        });

        select_root.removeClass('open');
        select_root.mouseleave(function(){$(this).removeClass('open');});
        select_a.click(set_anchor).click(hide_option).focus(i_hover).hover(i_hover);
        select_input.change(set_label).focus(set_label);
        select_label.hover(i_hover).click(hide_option);
    }

    /**
     * 공통 윈도우 팝업 & 레이어 팝업
     **/
    var popup = $('a.popupOpen, #footer_map area.popupOpen');
    var screenWidth = $(window).width();
    var screenHeight = $(window).height();
    //popup.bind('click', function(){
    $(document).on("click", "a.popupOpen, #footer_map area.popupOpen", function(){
        var $this = $(this),
            link = $this.attr('href'),
            name= $this.attr('name'),
            width = null,
            height = null,
            scroll = 'no';
        switch (name){
            // 주소 검색 1단계
            case 'address':
                width = 573;
                height = 670;
                break;
            // 아이디 중복인
            case 'idCheck':
                width = 390;
                height = 230;
                break;
            // 새 도로명 주소
            case 'newAddress':
                width = 488;
                height = 610;
                break;
            // 구 주소(지번)
            case 'oldAddress':
                width = 488;
                height = 471;
                break;

            //440x258 사이즈창
            case 'pop440x228':
                width = 440;
                height = 228;
                scroll = 'yes';
                break;

            // 580*630 우편번호.솔루션 연동
            case 'solutionAaddress':
                width = 580;
                height = 630;
                scroll = 'yes';
                break;

            //496x550 사이즈창
            case 'pop496x550':
                width = 532;
                height = 520;
                scroll = 'yes';
                break;

            //pop667x550
            case 'pop667x550':
                width = 683;
                height = 522;
                scroll = 'yes';
                break;
            //pop667x550
            case 'pop700x491':
                width = 700;
                height = 491;
                scroll = 'no';
                break;

            //pop800x550
            case 'pop800x550':
                width = 815;
                height = 825;
                scroll = 'yes';
                break;

            //pop800x400
            case 'pop800x400':
                width = 836;
                height = 350;
                scroll = 'yes';
                break;

            //loginPopup
            case 'loginPopup':
                width = 420;
                height = 550;
                scroll = 'yes';
                break;

            //csFindPopup
            case 'soFindPopup':
                width = 520;
                height = 270;
                scroll = 'no';
                break;

            //pop820x685
            case 'pop820x685':
                width = 836;
                height = 685;
                scroll = 'yes';
                break;

            //고객평가단 . 오류등록 . 상품 조회 팝업
            case 'openItem':
                width = 740;
                height = 630;
                scroll = 'yes';
                break;
            // 고객평가단 . 방송모니터핑 . 방송프로그램 조회
            case 'openBrodFind':
                width = 542;
                height = 435;
                scroll = 'yes';
                break;

            //감포인트 안내팝업
            case 'pop817x671':
                width = 817;
                height = 671;
                scroll = 'yes';
                break;

            //감포인트 안내팝업
            case 'hCodiPop':
                width = 900;
                height = 671;
                scroll = 'yes';
                break;

            //패밀리존 등급 그림으로 보기 팝업
            case 'familyGradePop':
                width = 800;
                height = 590;
                scroll = 'yes';
                break;

            //패밀리존 쇼핑등급 승급방법확인팝업
            case 'familyNextGradePop':
                width = 520;
                height = 580;
                scroll = 'yes';
                break;

            //생방송 크게 보기
            case 'mediaViewPop':
                width = 637;
                height = 576;
                scroll = 'no';
                break;

            //채널평가단 TV 디지털/아날로그 조회
            case 'evgrTvGb':
                width = 440;
                height = 295;
                scroll = 'no';
                break;

            //채널평가단 TV 디지털/아날로그 조회
            case 'tour_news':
                width = 650;
                height = 556;
                scroll = 'no';
                break;

            //회원 탈퇴 팝업
            case 'leaveMemberPopup':
                width = 693;
                height = 395;
                scroll = 'no';
                break;

            //상품평등록 제한 팝업
            case 'itemEvalRegLimtPup':
                width = 693;
                height = 365;
                scroll = 'no';
                break;

            //상품QNA등록 팝업
            case 'itemQNARegPup':
                width = 800;
                height = 576;
                scroll = 'no';
                break;


            // 고객평가단 MD Search
            case 'csegMdSearch':
                width = 405;
                height = 405;
                scroll = 'no';
                break;

            // H코디하기 플래쉬 팝업
            case 'hcodi':
                width = 900;
                height = 590;
                scroll = 'no';
                break;

            //간단문의 #0900

            case 'simple0900':
                width=550;
                height=570;
                scroll='no';
                break;

            // 풋더 사업자등록번호 팝업
            case 'busi_license':
                width = 720;
                height = 523;
                scroll = 'no';
                break;


            // 방송알리미 팝업
            case 'brodAlrim':
                width = 795;
                height = 660;
                scroll = 'no';
                break;

            // 재입고 알리미 팝업
            case 'rishpAlrim':
                width = 550;
                height = 530;
                scroll = 'no';
                break;

            // 카탈로그 팝업
            case 'ctlgAlrim':
                width = 460;
                height = 400;
                scroll = 'no';
                break;

            // 상품비교하기 팝업(수정시 Common.js에 있는 오픈팝업 함수도 같이 수정할것)
            case 'comparePup':
                width = 980;
                height = 700;
                scroll = 'yes';
                break;

            //고객만족도 평가 팝업(수정시 Common.js에 있는 오픈팝업 함수도 같이 수정할것)
            case 'custStsfEvalPup':
                width = 820;
                height = 535;
                scroll = 'no';
                break;

            // 회원 정보 비밀번호 변경 팝업
            case 'changePwdPup':
                width = 402;
                height = 350;
                scroll = 'no';
                break;

            // 해외배솧주소록 목록
            case 'fogiaddr':
                width = 820;
                height = 505;
                scroll = 'no';
                break;

            // 생방송 경품당첨자 목록
            case 'prmoWinr':
                width = 613;
                height = 628;
                scroll = 'no';
                break;

            // 쇼핑가이드
            case 'shopGuide':
                width = 990;
                height = 700;
                scroll = 'no';
                break;

            // 아이디찾기
            case 'findId':
                width = 835;
                height = 770;
                scroll = 'no';
                break;

            //1:1상담 아이디/비밀번호 문의
            case 'cnslCustPop':
                width = 800;
                height = 853;
                scroll = 'yes';
                break;

            // 해외배송비 결제
            case 'frgnDlvcPup':
                width = 800;
                height = 475;
                scroll = 'yes';
                break;

            //배송주소록
            case 'dstnAdr':
                width = 838;
                height = 440;
                scroll = 'yes';
                break;

            //사은품프로모션
            case 'giftPrmo':
                width = 820;
                height = 550;
                scroll = 'yes';
                break;

            //pop651x590
            case 'pop651x590':
                width = 651;
                height = 590;
                scroll = 'yes';
                break;

            //cvstAddress11
            case 'cvstAddress11':
                width = 1024;
                height = 640;
                scroll = 'yes';
                break;

            // 감 포인트안내 팝업
            case 'gampopup':
                width = 820;
                height = 413;
                scroll = 'no';
                break;

            // 상품상세 사이즈정보 팝업 사이즈totoary
            case 'pop550x700':
                width = 550;
                height = 700;
                scroll = 'yes';
                break;

            default:
                break;
        }
        openPopup(link, name, width, height, scroll, screenWidth, screenHeight);
        return false;
    });

    // 레이어팝업(모달팝업) 컨트롤
    var layerPopLink = $('.layerPopLink'),
        layerPopClose = $('.layerPopClose'),			//레이어팝업 닫기 버튼
        modalLayerPopup = $('.modalLayerPopup'),		//모달 레이어 팝업
        targetLayerPopup = $('.targetLayerPopup'),		//상대값 레이어 팝업
        targetLayerPopup2 = $('.targetLayerPopup2'),		//상대값 레이어 팝업2
        targetLayerCenter = $('.targetLayerCenter'),		//레이어팝업 중앙정렬
        modalWidth = 100,
        modalHeight = 0,	//body의 총 높이값
        winX = null,
        winY = null;
    targetLayerCenter.click(function(e){
        e.preventDefault();
        var posX = e.pageX,
            posY = e.pageY;
        var target = $(this.hash);
        target.css({'left':'50%', 'top':posY+10, 'margin-left':-target.width()/2})
        target.show();
    })

    layerPopLink.on('click', function(){
        $(this.hash).show();
        return false;
    });

    layerPopClose.on('click', function(){
        $(this).parent('div').hide();
        return false;
    });

    // 중앙 정렬 레이어 팝업
    modalLayerPopup.bind('click', function(){
        winX = $(document).width();
        winY = $(window).height();
        var $this = $(this),
            target = $(this.hash),
            scrollTop = $(window).scrollTop(),					//현재 스크롤 위치
            x = (winX - target.outerWidth() ) / 2 ,				//레이어팝업 left 값
            y = scrollTop + ((winY - target.outerHeight())/2),	//레이어팝업 top 값
            popupClose = $this.parents('div.popup'),
            modalHeight =$('body').prop("scrollHeight");

        // 레이어팝업 위치 셋팅
        target.css({"top":y+"px","left":x+"px"});
        // ie6인경우 모달 BG 생성 하고 아이프레임 bg 호출
        if (popupClose.attr('style')) {
            if (popupClose.attr('style').indexOf('block')) {
                popupClose.hide();
            };
        };
        if ($.browser.version == 6.0) {
            ie6layerBg(x, y, target);
        }else{
            // 모달 BG 생성
            if ($('.modal').length == 0) {
                $('body').append('<div class="modal">');
                $('.modal').css({"cursor":"move","position":"absolute","z-index":"10000","opacity":"0","background":"#000","top":0,"left":0,"width":modalWidth+"%","height":modalHeight+"px"});
                $('.modal').animate({"opacity":"0.8"}, 300,"easeInExpo")
            };
        }
        // 스크롤바 제거
        target.show();

        return false;
    });

    // 상대위치 레이어 팝업
    targetLayerPopup.bind('click', function(){
        var $this = $(this),
            target = $(this.hash),
            margin = 1,														// 여백
            positionY = $this.offset().top + $this.outerHeight() + margin,	// 레이어팝업 top 값
            positionX = $this.offset().left + $this.outerWidth() + margin;	// 레이어팝업 left 값
        target.css({"top":positionY+"px","left":positionX+"px"});
        // ie6인경우 아이프레임 bg 호출
        if ($.browser.version == 6.0) {
            ie6layerBg(positionX, positionY, target);
        };
        // 레이어팝업 View
        target.show();
        return false;
    });

    // 상대위치 레이어 팝업2(상품 미리보기 레이어)
    targetLayerPopup2.live('click', function(){
        var $this = $(this),
            target = $(this.hash),
            margin = 1,
            positionY = $this.offset().top + $this.outerHeight() + margin,
            positionX = $this.offset().left + $this.outerWidth() + margin;
        target.css({"top":(positionY-150)+"px","left":200}),
            modalHeight =$(document).height();
        // ie6인경우 아이프레임 bg 호출
        if ($.browser.version == 6.0) {
            ie6layerBg(positionX, positionY, target);
        }else{
            // 모달 BG 생성
            if ($(".modal").length == 0) {
                $("body").append("<div class='modal'>");
                $(".modal").css({ "cursor" : "move", "position" : "absolute", "z-index" : "10000", "opacity" : "0", "background" : "#000", "top" : "0", "left" : "0", "width" : modalWidth+"%", "height" : (modalHeight + 110)+"px" });
                $(".modal").animate({ "opacity" : "0.8" }, 300, "easeInExpo");
            }
        }

        // 레이어팝업 View
        target.show();
        return false;
    });

    // 모달 레이어 팝업 호출 형태 추가 - rlatkdals
    $(document).on("click", ".dimLayerPopup", function(e){
        var $target = $(this.hash), positionY, positionX;
        $target.css({ position : "absolute", zIndex : 99999999 });
        positionY = $(window).scrollTop() + (($(window).height() - $target.outerHeight()) / 2), positionX = ($(document).width() - $target.outerWidth()) / 2;
        $target.css({ top : positionY, left : positionX });

        if ($(".modal").length == 0) {
            $("html, body").css({ overflow : "hidden" });
            $("body").append("<div class='modal'></div>");
            $(".modal").css({ position : "absolute", zIndex : 10000, opacity : 0, background : "#000", top : 0, left : 0, width : $(window).width(), height : $(document).height() }).animate({ opacity : 0.8 }, 150, "easeInExpo");
        }
        $target.css({ display : "block" });

        $target.find(".dimLayerPopup-close").on("click", function(e){
            $("html, body").removeAttr("style");
            $target.css({ display : "none" });
            $(".modal").remove();
            e.preventDefault();
        });

        e.preventDefault();
    });

    /**
     * footer - Family Site
     **/
    var $family_site = $('#familySite');
    var $select_layer = $('#select_layer');

    $family_site.bind('mouseover', function(){
        $select_layer.show();
    })
    $family_site.bind('mouseleave', function(){
        $select_layer.hide();
    });

    /* default.js - 20140609 */
    // ui-datepicker-div z-index
    if ($('#ui-datepicker-div').length != 0) $('#ui-datepicker-div').css('z-index',2);

    // 레이어팝업 닫기
    $(".optionClose").bind("click", function(e){
        e.preventDefault();
        $(this).parent().hide();
    })

    $('.delivPayClose a').bind('click', function(e){
        e.preventDefault();
        window.close();
    })

    // 텝 0226 김길채추가
    if ($('.tabNav, .tabNav2').find('a').length != 0) {
        // 텝 스크립트 기능 구분 [ #페이지 이동시 스크립트 동작 And 일반 페이지 링크시 스크립트 비동작 ]
        var tabNav = $('.tabNav, .tabNav2').find('a').attr('href').charAt(0) == '#' ? $('.tabNav, .tabNav2').find('a') : null ;		//텝 네비게이션
        if (tabNav) {
            var oldDeps = null;
            // 텝 클릭 이벤트
            tabNav.bind('click', function(){
                var $this = $(this);
                // 활성화된 텝이 있는경우
                if (oldDeps != null) {
                    oldDeps.removeClass('on');
                    $(oldDeps.attr('href')).hide();
                };
                // 클릭된 텝 / 텝 컨텐츠 활성화
                $this.addClass('on');
                $($this.attr('href')).show();
                oldDeps = $this;
                // 링크 기능 비활성화
                return false;
                // 첫번째 텝 활성화
            }).filter(':eq(0)').click();
        }else{
            $('.tabCont > div').css({"display":"block"})
        };
    };

    var toolTip = $('.tooltipNav'),				//튤팁 네비게이션
        toolTip_ex = $('.tooltipNav_ex'),		//튤팁 네비게이션
        dateTooltip = $('.tooltipWrap img'),	//캘린더 이미지
        datepicker = $('#ui-datepicker-div');	//캘린더
    // 튤닙 네비게이션 마우스 오버시 하위 요소중 tooltip을 찾아 보여주
    toolTip.bind('mouseenter', function(){
        $(this).find('.tooltip').show();
    });
    toolTip_ex.bind('mouseenter', function(){
        $(this).next('.tooltip').show();
    });
    // 튤팁 hide
    toolTip.bind('mouseleave', function(){
        $(this).find('.tooltip').hide();
    });
    toolTip_ex.bind('mouseleave', function(){
        $(this).next('.tooltip').hide();
    });
    // 캘린더 이미지 클릭시 튤팁 hide
    dateTooltip.click(function(){
        $(this).next('.tooltip').hide();
    });
    // 캘린더 요소 스타일 지정  [ 클릭 이벤트 처리를 위해 인라인 스타일 지정 ]
    if (datepicker.length != 0) {
        datepicker.css({"display":"none"});
    };
    // 캘린더 이미지 마우스 호버
    dateTooltip.hover(function(){
            if (datepicker.length != 0 && datepicker.attr('style').indexOf('block') == -1) {
                $(this).next('.tooltip').show();
            };
        },
        function(){
            if (datepicker.length != 0 && datepicker.attr('style').indexOf('block') == -1) {
                $(this).next('.tooltip').hide();
            };
        });

    // 20140307 - new Tooltip log.
    if($(".call_tooltipL").length != 0){
        var $tooltipID;
        $(".call_tooltipL").on("mouseenter", function(){
            $tooltipID = $("#tooltip_" + $(this).attr("name"));
            $tooltipID.siblings(".tooltip").css({ display : "none" });
            $tooltipID.fadeIn("fast");
        }).parent().mouseleave(function(){
            $tooltipID.css({ display : "none" });
        });
    }

    // 매장 소분류 리스트
    if ($('#sCont').length != 0) {
        var sCont = $('#sCont');
        sCont.find('span.pBtn').bind('click', function(){

            var $this = $(this),											//클릭된 요소
                toggleTarget  = $this.parent().parent().find('dd:first'), 				//타겟
                minHeight = 24,												//기본 높이
                maxHeight = toggleTarget.children('ul').outerHeight(),		//펼쳤을때의 높이
                img = $this.children('img'),								//뷰 이미지 [ 이미지가 없을경우 null 값 적용 ]
                toggleBack = true;											//접기 기능 여부 [접기기능 없을시 false]

            if ($this.parents('dl').index() ==2) {
                minHeight = 24
            }else{
                minHeight = 72
            };

            // 토글 실행 공통 함수 호출
            toggle( toggleTarget, minHeight, maxHeight, img, toggleBack );	// 토글 실행 함수 호출
        })
    };

    // 재고수량
    $('.status.white2_1').click(function(e){
        e.preventDefault();
        $('#stock_cnt').show();
    })

    $('.acc_con').hide();
    $('.adult_acc_tab li a').bind('mouseenter', function(){
        var $target = $(this.hash);
        $('.acc_con').hide();
        $target.show();
    }).filter(':first').mouseenter();

    // Caps Lock 알림 튤팁
    var pw_input = $("input[type='password']"),
        pw_input_width = pw_input.outerWidth();
    $('.tooltip_caps').css({'width':pw_input_width-2});

    // 정형화 이벤트 카드사 Q&A
    var txt_hide = $('.ev_qna_toggle dd');
    $('.ev_qna_toggle dt').bind('click', function(e){
        e.preventDefault();
        txt_hide.hide();
        $(this).next().show();
    });

    /**
     * 검색박스 포커스시 광고 키워드 삭제 [ 최초 1회 광고 키워드 제거 ]
     */
    var flag_KeywordfirstClick = false;
    var noDelKeyword_rgx = new RegExp('(/p/pde/)','g');
    var noDelKeyword_Filter = noDelKeyword_rgx.test(locationHref);
    //if ( !noDelKeyword_Filter ){	// del.180206
    if(location.href.indexOf("www.") > -1 || location.href.indexOf("stg.") > -1){
        $(document).on("focusin", "input[class=keyword], input[class=search-box]", function(){
            if(flag_KeywordfirstClick == false) $(this).attr('value','');
            flag_KeywordfirstClick = true;
            if($(".pop-keyword-list").length > 0 && $("input[class=keyword], input[class=search-box]").val() == ""){
                $(".search_layer1").css({ display : "none" });
                $(".pop-keyword-list").css({ display : "block" });	// 인기/최근 검색어 레이어 노출
                searchKeywordIndex();	// 170922 - 인기검색어 스타일 글머리 아이콘 - rlatkdals
            }
        });
    }
    //}

    // 포커스 아웃 시 검색결과 안내 레이어 숨김
    $(document).on("focusout", "input[class=keyword], input[class=search-box]", function(){
        if ($(this).val() && ($(".search_layer1").css("display") == "block")) {
            $(".search_layer1").css({ display : "none" });
        }
    });

    /**
     * Accordion Toggle [ 쇼핑가이드 HTML, 마이페이지 LNB ]
     **/
    var accordionToggle_rgx = new RegExp('(/html/shop/)|(/p/ccd/)|(/p/mpa/)|(/p/mpb/)|(/p/mpc/)|(/p/mpd/)|(/p/mpe/)|(/p/mpf/)','g');
    var accordionToggle_Filter = accordionToggle_rgx.test(locationHref);
    if ( accordionToggle_Filter ){
        var accordionMenu = $('.accordionMenu'),
            selector = accordionMenu.find('> li > a'),
            showSpeed = 300,
            hideSpeed = 300;

        // 검색후 on클래스가 있는요소 활성화[페이지 네비게이션]
        selector.each(function(){
            if ($(this).hasClass('on') && $(this).next('ul').length != 0 ){
                $(this).next('ul').show();
                oldselector = $(this);
            };
        });

        selector.bind('click', function(){
            var $this = $(this),
                // 네비게이션 하위메뉴
                deps2 = $this.next('ul'),
                // 네비게이션 링크값
                link = $this.attr('href');
            // on 클래스가 있는경우 리턴
            if ($this.hasClass('on')) return false;
            if ( deps2.length === 0 ) location.href=link
            if (deps2.hasClass('active')) {
                deps2.slideUp(hideSpeed);
                deps2.removeClass('active')
                return false;
            }
            deps2.slideDown(showSpeed)
            deps2.addClass('active');

            return false;
        });
    }

    /**
     * Q&A Toggle [ 상품상세 - 상품 Q&A ]
     **/
    var qaToggle_rgx = new RegExp('(/p/pda/itemPtc.do)','g');
    var qaToggle_Filter = qaToggle_rgx.test(locationHref);
    if ( qaToggle_Filter ){
        $('#tblFAQ td.a div.divA, #tblFAQ td.a div.divQ').hide(); // 수정 :  150820
        $(document).on('click', '#tblFAQ tr.ihdye', function(e){
            e.preventDefault();
            if($(this).hasClass('sc')){//비밀글
                if($(this).find('td.q > a').length > 0){
                    //오픈된 제목 클릭시 다시 close하기 위해 추가
                    if($(this).next('tr').find("div.divQ:not(:visible)").length > 0){
                        $(this).children('td.q').addClass('on');
                        $(this).children().css('border-bottom','0');

                        var nextTR_divA = $(this).next('tr').find('.divA');
                        var nextTR_divQ = $(this).next('tr').find('.divQ');
                        nextTR_divA.show().css({"border-bottom":"1px solid #d5d5d5"});
                        nextTR_divQ.show();
                    }
                    else{
                        $(this).children().css({"border-bottom":"1px solid #d5d5d5"});
                        $(this).children('td.q').removeClass('on');
                        var nextTR_divA = $(this).next('tr').find('.divA');
                        var nextTR_divQ = $(this).next('tr').find('.divQ');
                        nextTR_divA.hide();
                        nextTR_divQ.hide();
                    }
                }
            }else{
                //오픈된 제목 클릭시 다시 close하기 위해 추가
                if($(this).next('tr').find("div.divQ:not(:visible)").length > 0){
                    $(this).children('td.q').addClass('on');
                    $(this).children().css('border-bottom','0');

                    var nextTR_divA = $(this).next('tr').find('.divA');
                    var nextTR_divQ = $(this).next('tr').find('.divQ');
                    nextTR_divA.show().css({"border-bottom":"1px solid #d5d5d5"});
                    nextTR_divQ.show();
                }else{
                    $(this).children().css({"border-bottom":"1px solid #d5d5d5"});
                    $(this).children('td.q').removeClass('on');
                    var nextTR_divA = $(this).next('tr').find('.divA');
                    var nextTR_divQ = $(this).next('tr').find('.divQ');
                    nextTR_divA.hide();
                    nextTR_divQ.hide();
                }
            }
        })

    }

    /**
     * 주문서 작성 - 여러 곳으로 배송 (직접입력, 엑셀파일 업로드)
     **/
    var odaShip_rgx = new RegExp('(/p/oda/)','g');
    var odaShip_Filter = odaShip_rgx.test(locationHref);
    if ( odaShip_Filter ){
        var outerHeight = $('.heightFix').outerHeight(),
            outerHeightCont = $('.heightFix'),
            innerHeight = $('.heightFix > table').outerHeight(),
            controlBtn = $('#openCont1');
        controlBtn.bind('click', function(){
            var table = $('.heightFix > table');
            if (outerHeight < innerHeight ) {
                var height = $('.heightFix > table').outerHeight();
                outerHeightCont.animate({"height":height+"px","max-height":height+"px"}, 500, 'easeOutBack', function(){});
            };
            return false;
        });
    }

    $('.pwbg').focus(function(){
        $(this).css('background-position','10000px 10000px');
    }).blur(function() {
        if($(this).val().length == 0) {
            $(this).css('background-position','15px 7px');
        }
    });

    //faq anwser tr 보임
    $('.faqTable table tbody tr.anstr').show();

    $('.corporate_pwd').focus(function(){
        $(this).css('background-position','10000px 10000px');
    }).blur(function() {
        if($(this).val().length == 0) {
            $(this).css('background-position','15px 4px');
        }
    });

    var listDelete = $('.listDelete'),
        productListChk = $('.allChk')

    listDelete.bind('click', function(){
        $(this).parents('tr').remove();
        return false;
    });

    productListChk.live('click', function(){
        var checked = $(this).attr('checked');
        var pdtChk = $(this).parents('table.basketLsit, .sympathy2 table, .sympathy3, .addrContaTable, .recentListWrap, .pop_adr_list, .contents, .layer_content').find('input.pdtChk')
        if (checked) {
            pdtChk.attr('checked', 'checked')
        }else{
            pdtChk.removeAttr('checked')
        };
    });

    var $priceDLx216 = $('.previewCont .priceDL');
    $('#preview_mode1').click(function(){
        $(this).addClass('on');
        $(this).next().removeClass('on');
        $('.previewCont').removeClass('mode200');
        $('.mainProductWrap > img').each(function(){
            var swapImg = $(this).attr('src').replace('200x200','480x480');
            $(this).attr('src',swapImg);
        })
        $priceDLx216.removeClass('priceDLx216');
    })
    $('#preview_mode2').click(function(){
        $(this).addClass('on');
        $(this).prev().removeClass('on');
        $('.previewCont').addClass('mode200');
        $('.mainProductWrap > img').each(function(){
            var swapImg = $(this).attr('src').replace('480x480','200x200');
            $(this).attr('src',swapImg);
        })
        //winResize();
        $priceDLx216.addClass('priceDLx216');
    })

    $('.bigGalleryUL li div.cover').bind('click',function(){
        $(this).parent().siblings().removeClass('on');
        $(this).parent().addClass('on');
        previewMainPic_idx = $(this).parent().attr('id').substr(4);
        $('[id^=placeHolder_]').hide();
        $('#placeHolder_'+previewMainPic_idx).show();
    })
    $('.smallGalleryUL li div.cover').bind('click',function(){
        $(this).parent().siblings().removeClass('on');
        $(this).parent().addClass('on');
        var s_img = $(this).prev('a').find('img').attr('src');
        if ($('.previewCont.mode200').length != 0) {
            var b_img = s_img.replace('60x60','200x200');
            $(this).parent().parent().parent().parent().prev().prev().find('.mainProductWrap img').attr('src',b_img);
        } else {
            var b_img = s_img.replace('60x60','480x480');
            $(this).parent().parent().parent().parent().prev().prev().find('.mainProductWrap img').attr('src',b_img);
        }
    });

    var trigger = $('.cultureCarouselUL li a');
    var menuLength = $('.listToggle > ul:not(".spcList") > li').length;
    var menuHeight = $('.listToggle > ul > li').outerHeight();
    var toggleHeight = '';
    var maxViewMenu = 10;
    var totalMax = 20;
    var target = '';
    var menuArr = [];

    //검색 - 결과 내 재검색 스크롤따라 움직이는 배너(선택조건)
    if ($('#search_rangeBox').length != 0) {
        var $search_rangeBoxScrolling = $('.rangeBox'),
            $footer_top =$('#footer'),
            $re_search = $('.re_search');
        var posTop = parseInt($search_rangeBoxScrolling.offset().top);
        $(window).scroll(function() {
            sideBarFixed();
        });
    }

    if (menuLength > totalMax) {
        $('.listToggle').each(function(n){
            var $this = $(this);
            var len = $this.find(' > ul:not(".spcList") > li').length;
            menuArr[n] = len;
        });

        if ( menuArr[0] > maxViewMenu && menuArr[1] > maxViewMenu ) {
            toggleHeight = (menuHeight*maxViewMenu)
            target = $('.listToggle')
        }else{
            if (menuArr[0] > menuArr[1]) {
                toggleHeight = (totalMax - menuArr[1]) * menuHeight;
                target = $('.listToggle').eq(0)
            }else{
                toggleHeight = (totalMax - menuArr[0]) * menuHeight;
                target = $('.listToggle').eq(1)
            };
        };
        $('.detailViewBtn').bind('click', function(){
            var $this = $(this),											//클릭된 요소
                toggleTarget  = target, 									//타겟
                minHeight = toggleHeight,												//기본 높이
                maxHeight = toggleTarget.children('ul').outerHeight(),		//펼쳤을때의 높이
                img = $this.children('img'),								//뷰 이미지 [ 이미지가 없을경우 null 값 적용 ]
                toggleBack = true;											//접기 기능 여부 [접기기능 없을시 false]
            // 토글 실행 공통 함수 호출
            toggle( toggleTarget, minHeight, maxHeight, img, toggleBack, true);	// 토글 실행 함수 호출
            sideBarFixed()
        });
        posTop = parseInt($search_rangeBoxScrolling.offset().top);
    }

    function sideBarFixed(){
        if(setHeight == 0) setHeight = 1;	// 제휴사 배너가 없을 경우 무조건 값은 1

        var footer_top = parseInt($footer_top.offset().top);
        var curr_position = (setHeight > 0)? setHeight + $(document).scrollTop() : 0;
        var d_height = $(document).height();
        var w_height = $(window).height();
        var bottom = $('#footer').offset().top;
        if (!$search_rangeBoxScrolling.attr('style')) {
            posTop = parseInt($search_rangeBoxScrolling.offset().top);
        };

        if ((curr_position + 10) > posTop) {
            var gapTop = curr_position - posTop;
            $re_search.removeClass('hidden');
            $search_rangeBoxScrolling.attr('style','position:fixed;top:'+(setHeight+30)+'px;width:168px;');
        } else {
            $re_search.addClass('hidden');
            $search_rangeBoxScrolling.removeAttr('style');
        }
        if (($search_rangeBoxScrolling.outerHeight() ) > ( w_height - $footer_top.outerHeight()) ) {
            if ((curr_position+w_height) > bottom  ){ //스크롤 끝, 바닥, 맨 아래
                var bottomFixed = ( (curr_position+w_height) - bottom ) + 50 - setHeight;
                $search_rangeBoxScrolling.attr('style','position:fixed;bottom:'+bottomFixed+'px;width:168px;');
            };
        };
    };
    if ($('.payment_info_wrap').length != 0){
        resizngPaymentArea();
        $(window).resize(function(){
            resizngPaymentArea();
        });
    };

    //진행중인 이벤트 체험후기리스트
    var free_post_tblUL = $('.free_post_tblUL'),
        free_post_tbl_a = free_post_tblUL.find('span.left a');

    free_post_tblUL.find('.ev_free_detail').parent('li').hide();
    free_post_tbl_a.bind('click', function(e){
        e.preventDefault();
        if (!$(this).is('.on')) {
            $(this).addClass('on');
            free_post_tblUL.find('.ev_free_detail').parent('li').hide();
            $(this).parent().parent().next('li').show();
            $(this).parent().parent().siblings().find('span.left a').removeClass('on');
        } else {
            $(this).parent().parent().next('li').hide();
        };
    });

    //본인인증탭 - 20140310 - 김상민 - 다국어 회원가입유형 관련으로 수정
    $('.tabNav > li > a').bind('click', function(){
        var $tabIndex = $(this).parent().index();
        $(this).parent().addClass('on').siblings().removeClass('on');
        $('.tabCont > div').hide();
        $('#tabCont' + ($tabIndex+1)).show();
    })

    //lnb   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    if ($('.layerViewMenu', '#content').length != 0) {
        var layerMenu = $('.layerViewMenu'),
            sideCont = $('.sideCont'),
            allBrand = $('.allBrandViewBox > h3 > a'),
            btnX = $('.closeLayerBtn'),
            menu_trigger = $('.layerViewMenu > ul >li > a'), // 방송상품hot click 스마트카메라, 컴팩트하이엔드, 미러리스, 데세랄카메라.......얘네
            submenu = $('.sideMenu ul .deps2'),
            prev = null,
            plusNum = 0;

        if ($('ul.banner_con2').length != 0) {
            lnbBannerSetting();
        };
        submenu.filter(":last").css({"border-right":"0 none"})
        menu_trigger.bind('mouseenter focus', function () {


            // 2Depth 이하 서브레이어 노출 기준 정의
            var	thisPosition = layerMenu.offset().top - setHeight,	// lnb 위치
                thisHeight = layerMenu.outerHeight(),	// lnb 전체 높이
                defaultTop = 30;

            var $this = $(this),
                target = $this.next('.deps2Wrap'),		//2 뎁스메뉴들
                elemPosition = $this.offset().top,		//메뉴 Top 위치
                position = thisHeight - (elemPosition - thisPosition),
                top = null,
                deps_length = $this.next('.deps2Wrap').children('.deps2').size(),
                scrollTop = (setHeight > $(window).scrollTop()) ? setHeight - $(window).scrollTop() : $(window).scrollTop(),
                windowHheight = $(window).outerHeight(),
                cutHeight = 0;
            target.width(deps_length * 170);

            var targetHeight = target.outerHeight();
            if (prev != null) {
                hideLayer();
                target.removeAttr('style');
            };

            if ( (scrollTop + windowHheight) > (thisPosition+thisHeight) ) {
                if ( (thisPosition+thisHeight) - scrollTop <  targetHeight) {
                    plusNum = (scrollTop + 31);
                }else{
                    plusNum = (scrollTop + windowHheight) - (thisPosition+thisHeight);
                };
            }else{
                plusNum = 0;
            };

            if (target.length != 0){ //여기
                if ($this.parents('.noSposition').length != 0) {
                    //elemPosition : 2depth 가 시작하는 위치
                    //scrollTop :
                    if (elemPosition - scrollTop < 60) {
                        top = elemPosition -scrollTop - 30;
                    }else if ( (elemPosition + targetHeight) - scrollTop > windowHheight) {
                        top = (elemPosition + targetHeight) - scrollTop - windowHheight + plusNum -setHeight;
                    }
                    else{
                        if ( (thisPosition+thisHeight) < (elemPosition + targetHeight - defaultTop - setHeight) ) {
                            //3depth 가 20개 이상
                            plusNum = (targetHeight - position) - 30 - setHeight + 4;
                        }else{
                            //3depth 가 20개 이하
                            plusNum = 0;
                            if(target.find(".deps2").find("li").length < 2) plusNum = targetHeight - 50;
                        }
                        top = defaultTop + plusNum - 4 ;
                    };
                    target.css({"top":-top+"px","width":(deps_length * 169)+"px"})
                };

                $this.addClass('on');
                target.show();
                if (target.length != 0 && target.offset().top < scrollTop) {
                    target.css({"position":"fixed","left":"50%","top":(defaultTop + setHeight)+"px","margin-left":"-327px","width":(deps_length * 170)+"px"})
                }
                if (target.offset().top < sideCont.offset().top) {
                    target.css({"position":"fixed","left":"50%","top":sideCont.offset().top+"px","margin-left":"-327px","width":(deps_length * 170)+"px"});
                }
            }else{
                hideLayer();
            };
            prev = $this;
        });

        submenu.bind('mouseenter mouseleave', function(){
            $(this).prev('a').addClass('off');
        });

        $('.sideMenu > ul > li').bind('mouseleave', function(){
            $(this).children('a').removeClass('on');
            $(this).children('a').removeClass('off');
        });

        layerMenu.bind('mouseleave', function(){
            if(prev != null) hideLayer();
        });

        function hideLayer(){
            if (prev != null) {
                prev.removeClass('on');
                prev.siblings('.deps2Wrap').hide();
                prev.siblings('.deps2Wrap').removeAttr('style');
            };
        };

        allBrand.bind('click', function (event) {
            var $this = $(this);
            $this.parent('h3').next('div.allBrandView').toggle();
            $this.addClass('on');
            if ($this.parent().next().css('display') == 'none'){
                $this.removeClass('on');
            }
            return false;
        });

        btnX.bind('click', function(){
            $(this).parent('div').hide();
            allBrand.removeClass('on')
            return false;
        });
    }

    if ($(".imgLiquidFill").length != 0) {
        $(window).bind('load', function(){
            $(".imgLiquidFill").imgLiquid({fill:true, fadeInTime:50});
        });
    };
    if ($('input.from').length != 0) {
        $( ".from" ).datepicker({
            showOn: "button",
            buttonImage: default_image_url + "hmall/co/ico_cal.gif",
            buttonText : '시작날짜',
            buttonImageOnly: true,
            defaultDate: "+1w",
            changeYear: true,
            changeMonth: true,
            numberOfMonths: 1,
            dateFormat: "yymmdd",
            showButtonPanel: true,
            closeText: "닫기",
            monthNamesShort: setMonth(),
            monthNames: setMonth(),
            dayNamesMin: setDayName(),
            onClose: function( selectedDate ) {
                $( ".to" ).datepicker( "option", "minDate", selectedDate );
            }
        });
        $( ".to" ).datepicker({
            showOn: "button",
            buttonImage: default_image_url + "hmall/co/ico_cal.gif",
            buttonText : '종료날짜',
            buttonImageOnly: true,
            defaultDate: "+1w",
            changeMonth: true,
            changeYear: true,
            numberOfMonths: 1,
            dateFormat: "yymmdd",
            showButtonPanel: true,
            closeText: "닫기",
            monthNamesShort: setMonth(),
            monthNames: setMonth(),
            dayNamesMin: setDayName(),
            onClose: function( selectedDate ) {
                $( ".from" ).datepicker( "option", "maxDate", selectedDate );
            }
        });
    };
    if ($('input.datePicker').length != 0) {
        $( ".datePicker" ).datepicker({
            showOn: "button",
            buttonImage: default_image_url + "hmall/co/ico_cal.gif",
            buttonText : '날짜선택',
            buttonImageOnly: true,
            defaultDate: "",
            changeMonth: true,
            changeYear: true,
            numberOfMonths: 1,
            dateFormat: "yymmdd",
            showButtonPanel: true,
            closeText: "",
            monthNamesShort: setMonth(),
            monthNames: setMonth(),
            dayNamesMin: setDayName()
        });
    };
    if ($('#viewDatePicker').length != 0) {
        $( "#viewDatePicker" ).datepicker({
            buttonImage: default_image_url + "hmall/co/ico_cal.gif",
            buttonText : '날짜선택',
            buttonImageOnly: true,
            defaultDate: "",
            changeMonth: true,
            changeYear: true,
            numberOfMonths: 1,
            dateFormat: "yymmdd",
            showButtonPanel: true,
            closeText: "",
            monthNamesShort: setMonth(),
            monthNames: setMonth(),
            dayNamesMin: setDayName()
        });
    };

    // type2 Hot Item
    if ($('.hm1023').length != 0) {
        imgBit.pazing.init( {
            pageSize: 1,
            listArray: jQuery( '.type2_hot_item ul' ).toArray(),
            ltbtnSelector: '.type2_hot_item .controls a.lt',
            gtbtnSelector: '.type2_hot_item .controls a.gt',
            upName: '_on'
        });
    }

    //아뒤, 비번찾기 탭
    if($('.memberIdSearch').length != 0){
        $('.memberIdSearch').navContent({
            contWrap 		: $('.memberIdSearch')
            ,	nav 			: $('.search_info_pop > li')
            ,	activeClass 	: 'on'
            ,	contents 			: $('div.search_infos')
            ,	contLength 	: $('div.search_infos').length
            ,	eventType 		: 'click'
            ,	autoRolling		: false
        });
    }

    //스페셜특가
    if($('.tour_tabULWrap').length != 0){
        $('.tour_tabULWrap').navContent({
            contWrap 		: $('.tour_tabULWrap')
            ,	nav 			: $('#tour_tabUL > li')
            ,	activeClass 	: 'on'
            ,	contents 			: $('ul.tour_specialUL')
            ,	contLength 	: $('ul.tour_specialUL').length
            ,	eventType 		: 'click'
            ,	autoRolling		: false
        });
    }

    // Media Main  [ BEST EVENT ]
    if($('.tv_bestEvent').length != 0){
        $('.tv_bestEvent').navContent({
            contWrap 		: $('.tv_bestEvent')
            ,	contType 		: 'slide'
            ,	nav 			: $('.tv_bestEventUL > li')
            ,	activeClass 	: 'on'
            ,	contents 			: $('.img_bestEvent > a')
            ,	contLength 	: $('.tv_bestEventUL > li').length
            ,	eventType 		: 'mouseenter'
            ,	autoSpeed 		: 2000
            ,	easing 			: 'swing'
            ,	autoRolling		: true
        });
    }

    // Media Main  [ category ]
    if($('.tv_consultTabWrap').length != 0){
        $('.tv_consultTabWrap').navContent({
            contWrap 		: $('.tv_consult')
            ,	contType 		: 'slide'
            ,	nav 			: $('.tv_consultTab > li')
            ,	activeClass 	: 'on'
            ,	contents 			: $('.tv_consultContWrap')
            ,	contLength 	: $('.tv_consultTab > li').length
            ,	eventType 		: 'mouseenter'
            ,	autoSpeed 		: 2000
            ,	easing 			: 'swing'
            ,	autoRolling		: true
        });
    }

    // Event Main  [ culture event ]
    if($('.cultureEventCont').length != 0){
        $('.cultureEventCont').navContent({
            contWrap 		: $('.tv_consult')
            ,	contType 		: 'slide'
            ,	nav 			: $('.cultureCarouselUL > li')
            ,	activeClass 	: 'on'
            ,	contents 			: $('.cultureEventCont > div')
            ,	contLength 	: $('.cultureEventCont > div').length
            ,	eventType 		: 'mouseenter'
            ,	autoRolling		: false
        });
    }

    // Event Main  [ visual ]
    if($('.bigEventWrap').length != 0){
        $('.bigEventWrap').navContent({
            contWrap 		: $('.bigEventWrap')
            ,	contType 		: 'slide'

            ,	nav 			: $('.bigCarouselUL > li')
            ,	activeClass 	: 'on'
            ,	contents 			: $('.bigEventUL > li')
            ,	contLength 	: $('.bigEventUL > li').length
            ,	eventType 		: 'mouseenter'
            ,	autoSpeed 		: 2000
            ,	easing 			: 'swing'
            ,	autoRolling		: true
        });
    }

    // tour Main  [ visual ]    [ 롤링 적용 여부 확인 ]
    if($('.tour_carousel').length != 0){
        $('.tour_carousel').navContent({
            contWrap 		: $('.tour_carousel')
            ,	contType 		: 'slide'
            ,	nav 			: $('.tour_carouselUL > li')
            ,	activeClass 	: 'on'
            ,	contents 			: $('.tour_visualUL > li')
            ,	contLength 	: $('.tour_visualUL > li').length
            ,	eventType 		: 'mouseenter'	// 20131204 - eventType click -> mouseenter - K_Sangmin
            ,	autoSpeed 		: 2000
            ,	autoRolling		: true
        });
    }

    /* rolling1.js - 20140609 */
    //rolling1 (인기브랜드)
    if ($('.hot_item').length != 0) {
        $('[id^=brand_]').not('#brand_1').hide();

        var botton_up = $('#controlUp');
        var botton_down = $('#controlDown');
        var botton_stop = $('#controlStop');

        botton_up.bind('click',function(e){
            e.preventDefault();
            if(event_botton_click == 0){
                event_stop();
                event_botton_click = 1;
                var move_obj = $(".eventUL");
                var move_obj_height = (move_obj.find(">li").height() * -1);

                move_obj.find(">li").eq(0).clone().appendTo(move_obj);
                move_obj.animate(
                    {top: move_obj_height}
                    ,event_botton_speed
                    ,function(){

                        move_obj.find(">li").eq(0).remove();
                        move_obj.css("top","0");

                        event_botton_click = 0;

                        if(event_botton_auto == "Y"){
                            event_play();
                        }
                    }
                );
            }
        })

        botton_down.bind('click',function(e){
            e.preventDefault();
            if(event_botton_click == 0){
                event_stop();
                event_botton_click = 1;
                var move_obj = $(".eventUL");
                var move_obj_height = (move_obj.find(">li").height() * -1);

                move_obj.find(">li:last").clone().prependTo(move_obj);
                move_obj.css("top",move_obj_height+"px");

                move_obj.animate(
                    {top: 0}
                    ,event_botton_speed
                    ,function(){

                        move_obj.find(">li:last").remove();

                        event_botton_click = 0;

                        if(event_botton_auto == "Y"){
                            event_play();
                        }
                    }
                );
            }
        })
    }

    //rolling5 (최근본상품)    [               삭제 예정                ]
    if ($('.sl_last').length != 0) {
        var botton_up5 = $('#control_L');
        var botton_down5 = $('#control_R');
        var botton_stop = $('#controlStop');

        botton_up5.bind('click',function(){
            if(event_botton_click == 0){
                event_stop();
                event_botton_click = 1;
                var move_obj = $(".view_thumWrap .view_thum, .view_thumWrap_768 .view_thum");
                var move_obj_width = (move_obj.find(">li").width() * -1);

                move_obj.find(">li").eq(0).clone().appendTo(move_obj);
                move_obj.animate(
                    {left: move_obj_width}
                    ,event_botton_speed
                    ,function(){

                        move_obj.find(">li").eq(0).remove();
                        move_obj.css("left","0");

                        event_botton_click = 0;

                        if(event_botton_auto == "Y"){
                            event_play();
                        }
                    }
                );
            }
            return false;
        })

        botton_down5.bind('click',function(){
            if(event_botton_click == 0){
                event_stop();
                event_botton_click = 1;
                var move_obj = $(".view_thumWrap .view_thum, .view_thumWrap_768 .view_thum");
                var move_obj_width = (move_obj.find(">li").width() * -1);

                move_obj.find(">li:last").clone().prependTo(move_obj);
                move_obj.css("left",move_obj_width+"px");

                move_obj.animate(
                    {left: 0}
                    ,event_botton_speed
                    ,function(){

                        move_obj.find(">li:last").remove();

                        event_botton_click = 0;

                        if(event_botton_auto == "Y"){
                            event_play();
                        }
                    }
                );
            }
            return false;
        })
    }

    if ($('.hmall_news').length != 0){
        event_play7();
        $('.hmall_news').hover(function(){
            event_stop();
        },function(){
            event_up7();
        })

        var open_H = ($('.news_content p').outerHeight() + 10) * $('.news_content p').size();
        var $news_content_arrow = $('.news_content_arrow');
        var close_H = $('.news_content').height();
        $('.newsContentWrap').hover(function(){
            var $this = $(this).children('.news_content');
            $news_content_arrow.addClass('open');
            $this.height(open_H);
            $('.news_content').addClass('open');
        },function(){
            var $this = $(this).children('.news_content');
            $news_content_arrow.removeClass('open');
            $this.height(close_H);
            $('.news_content').removeClass('open');
        })
    }

    //rolling8 상품상세 클라우드    [  상품 크게보기 레이어 팝업 ]
    if ($('.productGalleryUL').length != 0) {
        var slideBox = $('.productGalleryUL')
        var botton_prev8 = $('.productGallery > #btn_prev1');
        var botton_next8 = $('.productGallery > #btn_next1');
        var botton_stop = $('#controlStop');
        var sumList = $('.productGalleryUL>li');
        var li_width = $('.productGalleryUL li').outerWidth() + 2;
        var max = $('.productGalleryUL li').size();
        var galleryBigImg = $('.cloudzoom');
        var cnt = 7;
        var count = 0;

        if($('.productGallery li').size() >= cnt) {
            botton_prev8.show();
            botton_next8.show().addClass('on')
        }
        slideBox.css({width:(li_width * max) +"px",position:'absolute'})
        sumList.filter(':first').addClass('active');
        $('.productGalleryUL').width();


        sumList.bind('mouseenter', function(){
            var num = $(this).index()
            activeThumbnail(num);
        });
        botton_prev8.bind('click',function(e){
            if (!$(this).hasClass('on')) return false;
            e.preventDefault();
            rollingProduct(count-1)
        })

        botton_next8.bind('click',function(e){
            if (!$(this).hasClass('on')) return false;
            e.preventDefault();
            rollingProduct(count+1)
        })

        function rollingProduct(n){
            var index = n;
            var current = sumList.filter(':eq('+index+')').find('>a')
            var ul_len = parseInt(index / cnt);
            if (index > cnt-1) {
                slideBox.css({"left":-(li_width * (cnt*ul_len))+"px"});
            }else{
                slideBox.css({left:0});
            }
            checkArrow(index)
            sumList.removeClass('active');
            current.addClass('active');
            current.mouseover();
            count = index;
        };

        function activeThumbnail(num){
            sumList.removeClass('active');
            sumList.filter(':eq('+num+')').addClass('active');
            count = num
            checkArrow(count)
        };

        function checkArrow(index){
            if (index <= 0) {
                botton_prev8.removeClass('on')
            }else if (max-1 <= index) {
                botton_next8.removeClass('on')
            }else{
                botton_prev8.addClass('on')
                botton_next8.addClass('on')
            }
        }
    }

    //rolling9 ()
    var botton_prev9 = $('.dangolPrevS');
    var botton_next9 = $('.dangolNextS');
    var botton_stop = $('#controlStop');

    botton_prev9.bind('click',function(){
        if(event_botton_click == 0){
            event_stop();
            event_botton_click = 1;
            var move_obj = $(".storeListWrap .navTlt ul");
            var move_obj_width = (move_obj.find(">li").width() * -1);

            move_obj.find(">li").eq(0).clone(true).appendTo(move_obj);
            move_obj.animate(
                {left: move_obj_width}
                ,event_botton_speed
                ,function(){

                    move_obj.find(">li").eq(0).detach();
                    move_obj.css("left","0");

                    event_botton_click = 0;

                    if(event_botton_auto == "Y"){
                        event_play();
                    }
                }
            );
        }
        return false;
    })

    botton_next9.bind('click',function(){
        if(event_botton_click == 0){
            event_stop();
            event_botton_click = 1;
            var move_obj = $(".storeListWrap .navTlt ul");
            var move_obj_width = (move_obj.find(">li").width() * -1);

            move_obj.find(">li:last").clone(true).prependTo(move_obj);
            move_obj.css("left",move_obj_width+"px");

            move_obj.animate(
                {left: 0}
                ,event_botton_speed
                ,function(){

                    move_obj.find(">li:last").detach()

                    event_botton_click = 0;

                    if(event_botton_auto == "Y"){
                        event_play();
                    }
                }
            );
        }
        return false;
    })
    /*
     * del. 171213 - rlatkdals
        var left = $('.hcodiViewBtnPrev');
        var right = $('.hcodiViewBtnNext');
        var elem = $('.hcodirolling');
        var list = $('.hcodirolling').find('>li');
        var width = 728;
        var count = 0;

        elem.css({"width":(width * list.length) +"px"});
        btnSet(count);

        left.bind('click', function(){
            if	(count == 0){
                left.addClass("disable");
            } else {
                count--;
                left.removeClass("disable");
            }
            btnSet(count);
            elem.css({"left":-(width*count)+"px"});
            return false;
        });

        right.bind('click', function(){
            if	( count ==  list.length -1 ){
                right.addClass("disable");
            } else {
                right.removeClass("disable");
                count++;
            }
            btnSet(count);
            elem.css({"left":-(width*count)+"px"});
            return false;
        });

        function btnSet(index){
            if	( index == 0 ){
                left.addClass("disable");
            }else{
                left.removeClass("disable");
            }

            if	( index == list.length -1 ){
                right.addClass("disable");
            }else{
                right.removeClass("disable");
            }

        }

        hcodiRolling.rolling = function(){
            btnSet(count);
            elem.css({"left":-(width*count)+"px"});
        };

        hcodiRolling.setCount = function(int){
            count = int;
        };

        hcodiRolling.getCount = function(){
            return count;
        };
    */
    var move_obj = $("#rollingType1, #rollingType2, #rollingType3");
    var list = $('#rollingType1, #rollingType2, #rollingType3').find('>li');
    var move_obj_width = list.size()*200;
    move_obj.width(move_obj_width);

    $('.rollingType1Wrap #rollingType1 > li:nth-child(4n-3)').css({'margin-left':'0'});
    $('.rollingType1Wrap #rollingType1 > li:nth-child(1)').css({'margin-left':'-1px'});
    $('.rollingType1Wrap #rollingType2 > li:nth-child(4n-3)').css({'margin-left':'0'});
    $('.rollingType1Wrap #rollingType2 > li:nth-child(1)').css({'margin-left':'-1px'});
    $('.rollingType1Wrap #rollingType3 > li:nth-child(5n-4)').css({'margin-left':'0'});
    $('.rollingType1Wrap #rollingType3 > li:nth-child(1)').css({'margin-left':'-1px'});

    if($('.ty01_right').length != 0){
        $('.ty01_right').imageSlider({
            sliderWrap 		: $('.ty01_right')
            ,	slideBox 		: $('#rollingType4')
            ,	slides 			: $('#rollingType4').find(' >li')
            ,	slideLength 	: $('#rollingType4').find(' >li').length
            ,	slideWidth	 	: $('#rollingType4').find(' >li').outerWidth()
            ,	btnPrev 		: $('#rollingType1_prev4')
            ,	btnNext 		: $('#rollingType1_next4')
            ,	direction 		: 'horizontal'
            ,	speed 			: 0
            ,	autoSpeed 		: 2000
            ,	easing 			: ''
            ,	autoRolling		: true
        });
    }

    if($('.ty02_right').length != 0){
        $('.ty02_right').imageSlider({
            sliderWrap 		: $('.ty02_right')
            ,	slideBox 		: $('.type2_hot_item > div')
            ,	slides 			: $('.type2_hot_item > div').find(' >ul')
            ,	slideLength 	: $('.type2_hot_item > div').find(' >ul').length
            ,	slideWidth	 	: $('.type2_hot_item > div').find(' >ul').outerHeight()
            ,	btnPrev 		: $('.controls a.lt')
            ,	btnNext 		: $('.controls a.gt')
            ,	direction 		: 'vertical'
            ,	speed 			: 0
            ,	autoSpeed 		: 2000
            ,	easing 			: ''
            ,	autoRolling		: true
        });
    }

    if ($('.hot_item').length != 0 || $('.type2_hot_item').length != 0) {
        var hotSit = $('.controls > a');
        if (hotSit.css('visibility') == 'hidden') {
            hotSit.css('visibility', 'visible');
        };
    };

    //썸네일
    if($('ul.bestProd_thum_ul').length != 0) {
        $('ul.bestProd_thum_ul').each(function(){
            var $slideBox = $(this);
            var $btn_prev = $(this).parent().parent().find('a#btn_prev');
            var $btn_next = $(this).parent().parent().find('a#btn_next');
            var $btn_arrow = $(this).parent().parent().find('a.btn_arrow');
            var $sumList = $(this).children('li');
            var $li_width = $sumList.outerWidth() + 7;
            var max = $sumList.size();
            var cnt = 6;
            var count = 0;

            if(max >= cnt) {
                $btn_prev.show();
                $btn_next.show().addClass('on');
            }

            $slideBox.css({width:($li_width * max) +"px",position:'absolute'})
            $sumList.filter(':first').addClass('active');
            $(this).width();

            $sumList.bind('mouseenter', function(){
                var num = $(this).index();
                $sumList.removeClass('active');
                $sumList.filter(':eq('+num+')').addClass('active');
                count = num;
                checkArrow(count);
            });

            $btn_arrow.bind('click',function(e){
                if (!$(this).hasClass('on')) return false;
                e.preventDefault();
                if ($(this).attr('id') == 'btn_prev') rollingProduct(count-1);
                else rollingProduct(count+1);

            })

            function rollingProduct(n){
                var index = n; //넘어가서 보여질 사진 번호 (1~
                var current = $sumList.filter(':eq('+index+')').find('>a')
                if (index > cnt-1) $slideBox.css({"left":-($li_width * cnt)+"px"});
                else $slideBox.css({left:0});

                checkArrow(index);
                $sumList.removeClass('active');
                current.addClass('active');
                current.mouseover();
                count = index;
            };

            function checkArrow(index){
                if (index <= 0) {
                    $btn_prev.removeClass('on')
                }else if (max-1 <= index) {
                    $btn_next.removeClass('on')
                }else{
                    $btn_prev.addClass('on')
                    $btn_next.addClass('on')
                }
            }

            $sumList.find('a').mouseenter(function(){
                var imgIndex  = $(this).attr('index');
                var imgLink_s = $(this).find('img').eq(0).attr("src");
                var imgLink_m = $(this).find('img').eq(1).attr("src");
                $('#bestProd_placeHolder'+imgIndex).attr('src',imgLink_m);
            })
        });
    }

    /* section_store.js - 20140609 */
    // 가격 범위 ui 슬라이드
    if ($( "#slider-range" ).length != 0) {
        var minSellPrc = 0;
        var maxSellPrc = 100000;

        var itemMinSellPrc = $("#rangeVal_L").val() * 1;
        var itemMaxSellPrc = $("#rangeVal_R").val() * 1;

        $( "#slider-range" ).slider({
            range: true,
            min: 0, //최소값
            max: maxSellPrc, //최대값
            values: [ minSellPrc, itemMaxSellPrc ], //변경된 최소값, 변경된 최대값
            slide: function( event, ui ) {
                $("#rangeVal_L").val(ui.values[ 0 ]);
                $("#rangeVal_R").val(ui.values[ 1 ]);
            }
        });
    };

    // 0806_상품비교 도움말 튤팁수정(1225)
    $('.meas_helptip').hover(
        function() {
            $(this).next().show().addClass('tooltip_meas');
        },
        function(){
            $(this).next().hide().removeClass('tooltip_meas');
        });

    // 1112_상품비교 상품확인 후 환불 도움말 튤팁(1225)
    $('.meas_refund').hover(
        function() {
            $(this).parent().find('.tooltip_meas_rech1').show();
        },
        function(){
            $(this).parent().find('.tooltip_meas_rech1').hide();
        });

    // 1112_반품 · 교환배송비 도움말 튤팁(1225)
    $('.meas_charge').hover(
        function() {
            $(this).parent().find('.tooltip_meas_rech2').show();
        },
        function(){
            $(this).parent().find('.tooltip_meas_rech2').hide();
        });

    // 상품 비교하기
    if ($('[id^=detailViewjUL]').length != 0) {
        var obj = $('[id^=detailViewjUL]');
        obj.find('li a').bind('mouseover',function(){
            var index = $(this).parent().parent().attr('id');
            index = index.substr(13);
            compareGallery(index);
        })
    }

    // 스페셜 샾 서브페이지 배너 높이값 체크
    var specialSubBan = $('.specialMainCont .banner_con2'),
        hRentalSubLnb = specialSubBan.prev().height();

    specialSubBan.css('margin-top', hRentalSubLnb);

    // 스페셜샵 lnb
    var h_rentalHeight = $('.h_rental').outerHeight(); //메뉴 높이
    $('.h_rental_all').next().addClass('mt0');
    $('.h_rental_Menu .depth1').bind('mouseenter', function(){
        $('.deps2Wrap').hide();
        $(this).next().show();
        $('.h_rental_Menu .depth1').removeClass('on');
        $(this).addClass('on');
        var $height = $(this).parent().height();
        $(this).next().css('margin-top', -$height);

        var deps2Height = $(this).next().outerHeight(); //2depth 높이
        // 2depth높이가 메뉴 높이 보다 길 경우 상단에 붙어서 나옴.
        if(h_rentalHeight < deps2Height) $(this).next().css({'margin-top':-($height-16), 'top':'0'});
    });

    $('.h_rental_Menu .depth1').bind('mouseleave', function(){
        $(this).next().hide().removeClass('on');
    });

    $('.deps2Wrap').bind('mouseenter', function(){
        $(this).show().prev().addClass('on');
    }).bind('mouseleave', function(){
        $(this).hide().prev().removeClass('on');
    });

    // 3Depth 매장用
    // 3Depth 상품평 우수 상품 WorstCase
    if ($('.worst_hit_wrap').length != 0) {
        if ($('.worst_hit_wrap').find('.worst_hit_R').attr('class') == null) {
            $('.worst_hit_L > ul').addClass('solo');
        }
    }

    if ($('.worst_prod_wrap').length != 0) {
        $('.worst_prod').hide();
        $('.worst_prod').eq(0).show();
        $('.worst_tab li a').bind('click focusIn', function(e){
            e.preventDefault();
            var $target = $(this.hash);
            $('.worst_prod').hide();
            $target.show();
            $('.worst_tab li a').addClass('off');
            $(this).removeClass('off').addClass('on');
        });
        $('.worst_tab li a').eq(0).click();
    }

    // 상품평 우수상품
    $('.worst_best_etc .listBoxs .pdtImg2').hover(
        function(){
            $(this).children('.worst_hit_gray').show();
        },
        function(){
            $(this).children('.worst_hit_gray').hide();
        });

    // 많이 조회된 상품
    $('.worst_hit_R .listBoxs .pdtImg2').hover(
        function(){
            $(this).children('.worst_hit_gray').show();
        },
        function(){
            $(this).children('.worst_hit_gray').hide();
        });

    // 여행매장用
    // 국내/시즌 추천베스트
    $('[id^=tour_recommUL_]').not('#tour_recommUL_1').hide();
    $('#tour_recomm li a').bind('click', function(e){
        e.preventDefault();
        $('.productList').hide();
        $(this.hash).show();
        $(this).parent().addClass('on').siblings().removeClass('on');
    });

    // 빠른검색 탭
    var tour_search_kind = $('.tour_search_kind li a'),
        tourTab = $('#tourTab li input[type=radio]'),
        tourTab_1 = tourTab.eq(0),
        tourTab_2 = tourTab.eq(1),
        hotelTab = $("#iframe_hotel"),
        checked = $('input[checked]');

    tour_search_kind.bind('click', function(e){
        e.preventDefault();
        $(this).addClass('on').parent().siblings().children('a').removeClass('on');
        $('.tour_radioUL').hide();

        // 해시값이 0보다 클 경우 해당 해시ID 레이어 호출
        if($(this.hash).length > 0) $(this.hash).show();

        // 클릭 탭별 아이프레임 호출	[여행 & 호텔]
        if ($(this).hasClass('tour')){
            tourTab_1.click();
        } else {
            $('.tour_iframeWrap1 iframe').hide()
            hotelTab.show();
        }
    })

    tourTab_1.click(function(){
        if (checked) {
            $('.tour_iframeWrap1 iframe').hide()
            $('#iframe_tour_1').show();
        }
    })
    tourTab_2.click(function(){
        if (checked) {
            $('.tour_iframeWrap1 iframe').hide()
            $('#iframe_tour_2').show();
        }
    });
});

;(function($){
    $.fn.navContent = function(slide){
        var nTimerID = null;
        var animate = true;
        var options = $.extend({
            contWrap 		: $('.tv_bestEvent')
            ,	contType 		: 'slide'
            ,	nav 			: $('.tv_bestEventUL > li')
            ,	contents 		: $('.img_bestEvent > a')
            ,	activeClassNav 	: 'on'
            ,	activeClassCont : null
            ,	contLength 		: null
            ,	eventType 		: 'mouseenter'
            ,	autoSpeed 		: 2000
            ,	easing 			: 'swing'
            ,	autoRolling		: false
            ,	defaultIndex	: 0
            ,	navFixed		: false

        },slide||{});
        options.current = options.defaultIndex;
        // setting
        options.contents.hide().filter(':eq('+options.defaultIndex+')').show()
        options.nav.filter(':eq('+options.defaultIndex+')').addClass(options.activeClassNav)

        if (options.contLength == 1) {
            if ( options.contType =='slide' ) {
                options.nav.hide();
            }
            return false;
        };

        if (options.autoRolling) {
            options.contWrap.hover(function(){
                    clearInterval(nTimerID);
                    nTimerID = null;
                },
                function(){
                    nTimerID = setInterval(function(){
                        animateSlider( (options.current+1) % options.contLength);
                    }, options.autoSpeed)
                })
        };

        if (options.autoRolling) {
            nTimerID = setInterval(function(){
                animateSlider( (options.current+1) % options.contLength);
            }, options.autoSpeed)
        };

        options.nav.bind(options.eventType, function(e){
            var index = $(this).index();
            clearInterval(nTimerID);
            nTimerID = null;
            if (index == options.current) return false;
            animateSlider( index % options.contLength);
            e.preventDefault();
        });
        if (options.navFixed) {
            options.contWrap.bind('mouseleave', function(){
                options.contents.hide().filter(':eq('+options.defaultIndex+')').show()
                options.nav.removeClass(options.activeClassNav).filter(':eq('+options.defaultIndex+')').addClass(options.activeClassNav)
                options.current = options.defaultIndex;
            })
        };
        var animateSlider = function(index){
            options.nav.eq(index).addClass(options.activeClass);
            options.nav.eq(options.current).removeClass(options.activeClass);
            if (options.activeClassCont != null) {
                options.contents.eq(index).addClass(options.activeClassCont);
                options.contents.eq(options.current).removeClass(options.activeClassCont);
            }else{
                options.contents.eq(index).show();
                options.contents.eq(options.current).hide();
            };
            options.current = index;
        };
    };

    $.fn.imageSlider = function(slide){
        var nTimerID = null;
        var animate = true;
        var options = $.extend({
            sliderWrap 		: $('.slideWrap')	// 전체 슬라이드 박스
            ,	slideBox 		: null	// 슬라이드 요소들을 감싸는 박스
            ,	slides 			: null	// 슬라이딩 될 요소들
            ,	slideLength 	: null	// 전체 슬라이드 수
            ,	slideWidth	 	: null	// 슬라이드 너비 , 높이
            ,	btnPrev 		: null	// 이전버튼
            ,	btnNext 		: null	// 다음버튼
            ,	direction 		: null	// 슬라이드 방항 [ horizontal, vartical ]
            ,	speed 			: 300	// 슬라이드 스피드
            ,	autoSpeed 		: 2000	// 자동 롤링 스피드
            ,	easing 			: 'swing'	// 슬라이딩 애니메이션 타입
            ,	dir 			: 'left'	// css 속성 [ 가로방향 : left, 세로방향 : top ]
            ,	autoRolling		: false	// 자동 롤링 여부 [Boolean]
            ,	arrowDisabled	: false	//  이전 다음버튼 비활성화 여부 [ 비활성화될 클래스명 ]
        },slide||{});
        // setting
        options.current = 0;
        if (options.slideLength <= 1) {
            options.btnPrev.css({"visibility":"hidden"});
            options.btnNext.css({"visibility":"hidden"});
        };
        if (options.direction === 'horizontal') {
            options.slideBox.css({"position":"relative"});
            options.slides.css({"position":"absolute","top":"0","left":options.slideWidth+"px"}).filter(":first").css({"left":0})
            options.dir = 'left';
        }else if (options.direction === 'vertical') {
            options.slideBox.css({"position":"relative"});
            options.slides.css({"position":"absolute","top":options.slideWidth+"px","left":0}).filter(":first").css({"top":0})
            options.dir = 'top';
        };
        if (options.arrowDisabled) {
            options.btnPrev.addClass(options.arrowDisabled)
        };
        if (options.autoRolling) {
            options.sliderWrap.hover(function(){
                    clearInterval(nTimerID);
                    nTimerID = null;
                },
                function(){
                    nTimerID = setInterval(function(){
                        options.btnNext.click();
                    }, 2000)
                })
        };
        options.btnPrev.bind('click', function(){
            if ($(this).hasClass(options.arrowDisabled)) return false;
            animateSlider((options.slideLength+options.current-1) % options.slideLength, 'prev');
            return false;
        });
        options.btnNext.bind('click', function(){
            if ($(this).hasClass(options.arrowDisabled)) return false;
            animateSlider( (options.current+1) % options.slideLength, 'next');
            return false;
        })
        if (options.autoRolling) {
            nTimerID = setInterval(function(){
                options.btnNext.click();
            }, options.autoSpeed)
        };

        var animateSlider = 	function(index, dur){
            if (!animate) return false;
            animate = false;
            var newIndex = index,
                dur	= dur
            oldIndex = options.current,
                propSet = {},
                propStyle = {},
                prevSetting = {},
                nextSetting = {};
            prevSetting[options.dir] = -options.slideWidth+"px";
            nextSetting[options.dir] = options.slideWidth+"px";
            if ( dur === 'next' ) {
                propSet[options.dir] = -options.slideWidth+"px";
                propStyle[options.dir] = 0
            }else{
                options.slides.eq(newIndex).css(prevSetting)
                propSet[options.dir] = options.slideWidth+"px";
                propStyle[options.dir] = 0;
            };

            options.slides.eq(oldIndex).stop().animate(propSet, options.speed, options.easing,  function(){
                $(this).css(nextSetting);
                animate = true;
            })
            options.slides.eq(newIndex).stop().animate(propStyle, options.speed, options.easing);
            if (options.arrowDisabled) {
                checkArrow(index);
            };
            options.current = index;
        };
        var checkArrow = function(n){
            var first = 0,
                last  = options.slides.filter(':last').index();

            if (n === first || n === last) {
                if (n === first) options.btnPrev.addClass(options.arrowDisabled);
                if (n === last) options.btnNext.addClass(options.arrowDisabled);
            }else{
                options.btnPrev.removeClass(options.arrowDisabled);
                options.btnNext.removeClass(options.arrowDisabled);
            };
        }
    };
}) (jQuery);

/** 20140609  -  재분류 대상 str **/
// STEP1 장바구니 (사용가능 쿠폰 받기), STEP2 주문서 작성, 미리계산하기
var old_couponUse = null;
$(document).on("click", ".couponUse", function(){
    $(this).each(function(index){
        $(this).attr("name", index);
    });

    var target = $(this).next("div");
    if (old_couponUse != null){
        if (old_couponUse.attr("name") != $(this).attr("name")){
            hideListLayer(old_couponUse)
        }
    }

    if(!target.attr("name")) showListLayer($(this));
    else hideListLayer($(this));

    old_couponUse = $(this);
    $(".basketLsit td.coupon > div").addClass("prEven");
    $(this).parent().parent().removeClass("prEven").addClass("PrOdd");
});

$(document).on("click", ".smallLayerClose > a", function(){
    var close = $(this).parents(".smallLayer").prev(".couponUse");
    hideListLayer(close);
    return false;
});

$(document).on("click", ".cuponlistBox", function(){
    $(".cuponlistBox").css({"position":"static"});
    $(this).css({"position":"relative"});
});

$(document).on("click", ".btn_bsk_close", function(e){
    e.preventDefault();
    $(this).parent().parent().hide().attr("name", "");
    var close2 = $(this).parent().parent().prev();
    hideListLayer(close2);
});

/******************************************************************************************
 * anyLayerPopup - 클릭 액션 레이어 팝업 [툴팁 이용가능]
 ******************************************************************************************
 * <a href="#mobileBuy" class="anyLayerPop anyLP_T anyLP_W415s">...</a>
 * href="#id" - 타겟이 될 ID명
 * class="......" - 호출에 필요한 기본 구성, 스타일에 필요한 클래스 추가시 기본 정의된 클래스 뒤로 추가한다.

 * anyLayerPop : 레이어 팝업 액션 구분값
 * anyLP_위치 : 레이어 팝업 위치 구분값
	 * anyLP_T : 이미지 위
	 * anyLP_B : 이미지 아래
	 * anyLP_L : 이미지 왼쪽
	 * anyLP_R : 이미지 오른쪽
	 * anyLP_M : 화면중앙
 * anyLP_W숫자 : 레이어 팝업 가로 길이
*******************************************************************************************/
var anyLP_flag=false, $this_anyLP_Click, anyLP_posType, anyLP_Width, targetLayerID, anyLP_childImg, anyLP_scrollTop, anyLP_posX, anyLP_posY, anyLP_noHide = "n", pTarget = 0, pTargetObj = null;
function anyLayerPop($this){
	anyLP_flag = true;	// 리사이즈 에러 방지 플래그 값
	anyLP_posType = $this.attr("class").split(" ")[1];	// 레이어 팝업 위치 추출
	anyLP_Width = $this.attr("class").split(" ")[2].split("anyLP_W")[1];	// 레이어 팝업 가로 길이 추출
	anyLP_childImg = $this.children(), anyLP_scrollTop = $(window).scrollTop();

	// 마우스엔터 이벤트시 레이어 자동숨김 선택 유/무 처리 - 20140902
	if($this.attr("class").split(" ")[3] ==  "anyLP_noHide") anyLP_noHide = "y";
	else anyLP_noHide = "n";

	if(anyLP_posType == "anyLP_T" || anyLP_posType == "anyLP_B"){	// 클릭한 이미지 위 또는 아래

		if($this.closest(".left_group").length > 0){
			pTarget = ($("#layer_popup #layer1").offset().left+$("#layer_popup #layer1").width());
			pTargetObj = $("#layer_popup .left_group");
		} else if($(".product_renew").length > 0) {
            pTarget = ($(".product_renew").offset().left+$(".product_renew").width());
            pTargetObj = $(".product_renew");
        }

		if(($("#easySelectItem").css("display") == undefined || $("#easySelectItem").css("display") == "none") && (pTarget < (anyLP_childImg.offset().left + (parseInt(anyLP_Width)+34)))){
			anyLP_posX = anyLP_childImg.position().left - ((anyLP_childImg.offset().left + (parseInt(anyLP_Width)+34)) - pTarget);
		} else if(($("#easySelectItem").css("display") == "block" && $("#easySelectItem").hasClass("easySelectPos_vertical")) && (($(".product_renew").offset().left+$(".product_renew").width()) + $("#easySelectItem").outerWidth() + 5) < (anyLP_childImg.offset().left + (parseInt(anyLP_Width)+34))){	// 일반상세 간편선택
			anyLP_posX = (anyLP_childImg.offset().left - anyLP_childImg.offset().left - 4);
		} else if(($("#easySelectItem").css("display") == "block" && $("#easySelectItem").hasClass("easySelectPos_horizontal")) && ($("#easySelectItem").offset().left+$("#easySelectItem").width()) < (anyLP_childImg.offset().left + (parseInt(anyLP_Width)+34))){	// 일반상세 간편선택
			anyLP_posX = (anyLP_childImg.offset().left - anyLP_childImg.offset().left - 4);
		} else {
			anyLP_posX = anyLP_childImg.position().left;
		}
		anyLP_posX = anyLP_childImg.position().left - 300;

		if(anyLP_posType == "anyLP_T") anyLP_posY = anyLP_childImg.position().top - targetLayerID.outerHeight() - 1;
		else if(anyLP_posType == "anyLP_B"){
			anyLP_posY = ((anyLP_childImg.position().top + targetLayerID.outerHeight()) > $(document).height()) ? anyLP_childImg.position().top - targetLayerID.outerHeight() - 1 : anyLP_childImg.position().top + anyLP_childImg.outerHeight() + 1;
		}
	} else if(anyLP_posType == "anyLP_L" || anyLP_posType == "anyLP_R"){	// 클릭한 이미지 왼쪽 또는 오른쪽
		if(anyLP_posType == "anyLP_L") anyLP_posX = anyLP_childImg.position().left - anyLP_Width;
		else if(anyLP_posType == "anyLP_R") anyLP_posX = anyLP_childImg.position().left + anyLP_childImg.outerWidth() + 1;

		anyLP_posY = (anyLP_childImg.position().top+anyLP_childImg.outerHeight()) - targetLayerID.outerHeight() + 1;
	} else if(anyLP_posType == "anyLP_M"){	// 화면 중앙
		anyLP_posX = ($(document).width() - anyLP_Width)/2,
		anyLP_posY = anyLP_scrollTop + (($(window).height() - targetLayerID.outerHeight())/2);

		// Modal
		$("body").append("<div class='modal'></div>");
		$(".modal").css({"cursor" : "move", "position" : "absolute", "z-index" : "10000", "opacity" : "0", "background" : "#000", "top" : "0", "left" : "0", "width" : $(document).width(), "height" : $(document).height()});
		$(".modal").animate({"opacity" : "0.5"}, 300, "easeInExpo")
	}

	// 레이어 위치
    var re_pTargetObj = (pTargetObj != null) ? "." + pTargetObj.attr("class") + " #" + targetLayerID.attr("id") : "#" + targetLayerID.attr("id");
	$(re_pTargetObj).css({display : "block", top : anyLP_posY + "px", left : (anyLP_posX + 10) + "px", padding : 10 });

	// 미리보기
	if($this.closest("#layer_popup #layer1").length > 0 && ($("#layer_popup #layer1").offset().left+$("#layer_popup #layer1").width() < (targetLayerID.offset().left+targetLayerID.outerWidth()))){
		var overflow_anyLP_posX = (targetLayerID.offset().left+targetLayerID.outerWidth()) - ($("#layer_popup #layer1").offset().left+$("#layer_popup #layer1").width());
		targetLayerID.css({left : (anyLP_posX-overflow_anyLP_posX-22) + "px"});
	}
	return false;
}

$(document).on("click mouseenter", ".anyLayerPopC, .anyLayerPopE", function(e){
	// 클릭한 요소를 저장 및 해시 값을 가져온다. (href=#xxx)
	if(($(this).hasClass("anyLayerPopC") == true) && (e.type == "click")){
		$this_anyLP_Click = $(this);
		targetLayerID = $(this.hash);
		anyLayerPop($this_anyLP_Click);
	} else if(($(this).hasClass("anyLayerPopE") == true) && (e.type == "mouseenter")){
		$this_anyLP_Click = $(this);
		targetLayerID = $(this.hash);
		anyLayerPop($this_anyLP_Click);
	}
	return false;
});

// 마우스엔터 이벤트 후 해당 툴팁 레이어 거쳐 숨김처리
$(document).on("mouseleave", ".anyLayerPopE", function(){

    var re_pTargetObj = (pTargetObj != null) ? "." + pTargetObj.attr("class") + " #" + targetLayerID.attr("id") : "#" + targetLayerID.attr("id");

	// 마우스엔터 이벤트시 레이어 자동숨김 선택 유/무 처리 - 20140902
	if(anyLP_noHide == "n"){
		$(re_pTargetObj).css({display : "none"});
	} else if(anyLP_noHide == "y"){
		targetLayerID.on("mouseleave", function(){
			$(re_pTargetObj).css({display : "none"});
		});
	}
});

// anyLayerPopup 위치 재정의
$(window).resize(function(){
	if($(".anyLayerPopC, .anyLayerPopE").length > 0 && anyLP_flag == true && targetLayerID.css("display") == "block"){
		anyLayerPop($this_anyLP_Click);
	}
});
/** 20140609  -  재분류 대상 end **/

// 공통팝업 실행
function openPopup(link, name, width, height, scroll, screenWidth, screenHeight) {
    var left = (screenWidth - width) / 2,
        top = (screenHeight - height) / 2;

    var win = window.open(link, name, "width="+width+", height="+height+", left="+left+", top="+top+" toolbar=no, location=no, status=no, menubar=no, scrollbars="+scroll+", directories=no, resizable=no");
    win.focus();
    // Mute: 팝업창 감시를 위해 추가
    return win;
};

var tempStr = "";   //글자 byte 체크시 쓰이는 전역변수
/**
 * null check
 * @param value
 * @returns {Boolean}
 */
function isEmpty(value) {
    return (value == null || value == undefined || value == "");
}

/**
 * 로그인 팝업 열기
 * @param redirectUrl 로그인 성공 후 이동할 URL
 */
function openLoginPopup(redirectUrl) {
    var link = serverHost + "/p/cob/loginPup.do";
    if (!isEmpty(redirectUrl)) {
        link += "?redirectUrl=" + encodeURIComponent(redirectUrl);
    }
    openPopup(link, "loginPup", 425, 500, "no", $(window).width(), $(window).height());
}

/**
 * 비회원 구매용 로그인 팝업
 */
function openLoginNonMemberPopup() {
    var link = "/p/cob/orderLoginPup.do?redirectUrl=buyDirect";
    openPopup(link, "loginPup", 425, 570, "yes", $(window).width(), $(window).height());
}

function openAdultLoginPopup(redirectUrl) {
    var link = "/p/cob/loginPup.do";
    if (!isEmpty(redirectUrl)) {
        link += "?redirectUrl=" + encodeURIComponent(redirectUrl) + "&adultCheckYn=Y";
    } else {
        link += "?adultCheckYn=Y"
    }
    openPopup(link, "loginPup", 425, 500, "no", $(window).width(), $(window).height());
}

function openAdultLoginPopupGA(redirectUrl, slitmNm, slitmCd, tabNm) {
    var link = "/p/cob/loginPup.do";
    if (!isEmpty(redirectUrl)) {
        link += "?redirectUrl=" + encodeURIComponent(redirectUrl) + "&adultCheckYn=Y";
    } else {
        link += "?adultCheckYn=Y"
    }
    sendSlitmClickGo(slitmNm, slitmCd, tabNm,redirectUrl)
    openPopup(link, "loginPup", 425, 500, "no", $(window).width(), $(window).height());
}

/**
 * 자동키워드검색 구매용 로그인 팝업
 */
function autoSearchOpenLoginNonMemberPopup() {
    var link = "/p/cob/orderLoginPup.do?redirectUrl=noReload";
    openPopup(link, "loginPup", 425, 580, "no", $(window).width(), $(window).height());
}

/**
 * 비밀번호 변경 켐페인 팝업 열기
 */
function openPwdChangePup() {
    var link = "/p/cob/pwdChangePup.do";
    openPopup(link, "pwdChangePup", 650, 485, "no", $(window).width(), $(window).height());
}

/**
 * 우편번호 팝업 열기
 */
function openPostPopup(gubun) {
    //window.open("/p/coa/chocPostType.do","", "width=495, height=290");
    openPopup("/p/coa/chocPostType.do?gubun="+gubun, 'address', "495", "290", null, $(window).width(), $(window).height());
}

/**
 * 마이페이지의 상품평 팝업
 * Ajax를 사용하기때문에 공통 팝업을 사용하지 않는다.
 */
function openItemEvalPopup(slitmCd, uitmCd, ordNo){
    var param = "slitmCd=" + slitmCd + "&uitmCd=" + uitmCd + "&ordNo=" + ordNo;
    openPopup("/p/pdc/selectItemEvalPup.do?"+ param, "itemEval", 730, 600, "yes");
}

/**
 * 상품상세의 고객만족도 팝업
 * Ajax를 사용하기때문에 공통 팝업을 사용하지 않는다.

 */
function openCustStsfEvalPup(slitmCd){
    openPopup("/p/pdc/selectCustStsfEvalPup.do?slitmCd=" + slitmCd, "custStsfEval", 820, 487, "yes");
}

/**
 * 상품상세의 상품QNA 팝업
 * Ajax를 사용하기때문에 공통 팝업을 사용하지 않는다.
 */
function openItemQNAPopup(slitmCd) {
    openPopup("/p/pdd/selectItemQNAQstnPup.do?slitmCd=" + slitmCd, "itemQna", 800, 728, "yes");
}

/**
 * 새주소 ( 도로명 )  찾기 팝업
 */
function newAddressPopup() {
    openPopup(serverHost+"/p/coa/qtyRdnmAdrPost.do", 'newAddress', "578", "540", null, $(window).width(), $(window).height());
}

/**
 * 기존 주소 ( 지번명)  찾기 팝업
 */
function oldAddressPopup() {
    openPopup(serverHost+"/p/coa/qtyJibunAdrPost.do", 'oldAddress', "488", "490", null, $(window).width(), $(window).height());
}

/**
 * 페이스북
 * @param title
 * @param image
 * @param shareUrl
 */
function shareFacebook(title, image, shareUrl) {
    if(isEmpty(shareUrl)) {
        shareUrl = location.href;
    }
    var url = "http://www.facebook.com/sharer.php?s=100&p[url]=" + shareUrl + "&p[images][0]=" + image + "&p[title]=" + title;
    url = url.split("#").join("%23");
    url = encodeURI(url);
    window.open(url);

    return false;
}

/**
 * 트위터
 * @param title
 * @param shareUrl
 * @returns {Boolean}
 */
function shareTwitter(title, shareUrl) {
    if(isEmpty(shareUrl)) {
        location.href.search(new RegExp('slitmCd=([^&]+)','g'));
        shareUrl = "http://hmall.kr/?i"+RegExp.$1;
    }
    var url = "http://twitter.com/share?text=";
    var result = window.open(url + encodeURIComponent(title) + " " + encodeURIComponent(shareUrl) , 'twitter', 'width=466, height=356');
    if (result) {
        result.focus();
    }

    return false;
}

/**
 * 미투데이
 * @param title
 * @param tag
 * @param postUrl
 * @returns {Boolean}
 */
function postMe2day(title, tag, postUrl) {
    if(isEmpty(postUrl)) {
        postUrl = location.href;
    }

    if(isEmpty(tag)) {
        tag = "";
    }

    var url = "http://me2day.net/posts/new?new_post[body]=" + encodeURIComponent(title) + " " + encodeURIComponent('"') + encodeURIComponent(postUrl) + encodeURIComponent('"') + "&new_post[tags]=" + encodeURIComponent(tag);
    window.open(url);
    return false;
}

/**
 * 싸이월드
 * @param title
 * @param image
 * @param price
 * @param postUrl
 * @returns {Boolean}
 */
function postCyworld(title, image, price, postUrl) {
    if(isEmpty(postUrl)) {
        postUrl = location.href;
    }

    var url = "http://csp.cyworld.com/bi/bi_recommend_pop.php?url=" + encodeURIComponent(postUrl) + "&title_nobase64=" + encodeURIComponent(title) +"&summary_nobase64=" + encodeURIComponent(title) +"&thumbnail="+ encodeURIComponent(image)+"&writer="+ encodeURIComponent('현대Hmall')+"&div_code=shop&tag4="+price;
    var result = window.open(url, 'nate', 'width=400,height=364,scrollbars=no,resizable=no');
    if (result) {
        result.focus();
    }

    return false;
}

/**
 * Input will add commas to numbers.
 * @type void
 * @param nNumber   Input value
 * @param nDetail   Decimal places.(rounding)
 * @return          Number contained a comma.
 */
function gfn_appendComma(nNumber,nDetail) {
    if (nNumber == null)    return "";
    if (nDetail == null)    nDetail = 0;

    nNumber             = parseFloat(nNumber);
    nNumber             = Math.round(nNumber, nDetail);

    var strNumber       = new String(nNumber);
    var arrNumber       = strNumber.split(".");
    var strFormatNum    = "";
    var j = 0;

    for (var i = arrNumber[0].length - 1; i >= 0; i--) {
        if (i != strNumber.length && j == 3) {
            strFormatNum = arrNumber[0].charAt(i) + "," + strFormatNum;
            j = 0;
        } else {
            strFormatNum = arrNumber[0].charAt(i) + strFormatNum;
        }
        j++;
    }

    if (arrNumber.length > 1)   strFormatNum = strFormatNum + "." + arrNumber[1];

    return strFormatNum;
}

function removeComma(val) {
    return val.replace(/,/g, '');
}


// textarea id, 제한 글자 수, 입력 결과 메세지 저장 ID
function limitCharacters(textid, limit, limitid) {
    // 잆력 값 저장
    var text = $('#'+textid).val();
    // 입력값 길이 저장
    var textlength = text.length;
    if(textlength > limit) {
        alert('최대 '+limit+'자까지 입력가능합니다.');
        //$('#' + limitid).html('글내용을 '+limit+ '자 이상 쓸수 없습니다!');
        // 제한 글자 길이만큼 값 재 저장
        $('#'+textid).val(text.substr(0,limit));
        return false;
    } else {
        //$('#' + limitid).html('쓸수 있는 글자가 '+ (limit - textlength) + ' 자 남았습니다.');
        return true;
    }

    /* 하단을 , jsp상에서 코딩해서 사용하면 됨.
     *
     * // 공통 글자수 제한 체크
		$(function(){
			$('#prop1Cntn').keydown(function(){
    			limitCharacters('prop1Cntn', 10, 'charlimitid');
			})
		});

     */
}

//add comma
function Comma(Num) {
    Num += '';
    Num = Num.replace(',', ''); Num = Num.replace(',', ''); Num = Num.replace(',', '');
    Num = Num.replace(',', ''); Num = Num.replace(',', ''); Num = Num.replace(',', '');
    x = Num.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1))
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    return x1 + x2;
}

/**
 * 로그인 체크
 */
function isLogin() {
    var result = 'false';

    $.ajax({
        type: "get"
        ,url: "/p/cob/isLogin.do"
        ,dataType: "json"
        ,async: false
        ,success : function(data) {
            if (data.isLogin) {
                result = 'true';
            } else {
                result = 'false';
            }
        }
        ,error: function(data) {
        }
    });

    return result;
}

/**
 * 휴대폰 본인인증 팝업
 * @param formName
 */
function certByMobile(formName) {
    $("form[name='" + formName + "']").submit(function() {
        window.open("", "DRMOKWindow", "width=425, height=550, resizable=0, scrollbars=yes, status=0, titlebar=0, toolbar=0, left=435, top=250");
        $(this).attr("target", "DRMOKWindow");
    }).trigger("submit");
}

/**
 * 휴대폰 본인인증(SCI) 팝업
 * @param formName
 */
function certByMobile2(formName){
    $("form[name='" + formName + "']").submit(function() {
        window.open('', 'popupHPCF', 'width=420,height=600,top=100,left=150,fullscreen=no,menubar=no,status=no,toolbar=no,titlebar=yes,location=no,scrollbar=no');
        $(this).attr("target", "popupHPCF");
    }).trigger("submit");
}

/**
 * 공인인증서 팝업
 */
function certByPub(formName) {
    $("form[name='" + formName + "']").submit(function() {
        window.open('', 'DRMOKWindow', 'width=420, height=576, resizable=0, scrollbars=no, status=0, titlebar=0, toolbar=0, left=435, top=250' );
        $(this).attr("target", "DRMOKWindow");
    }).trigger("submit");
}

/**
 * 아이핀 인증 팝업
 */
function certByIpin(formName, ipinCompany) {
    $("form[name='" + formName + "']").submit(function() {
        if (ipinCompany == "sci") {
            window.open('', 'ipinWindow', 'width=450, height=500, resizable=0, scrollbars=no, status=0, titlebar=0, toolbar=0, left=300, top=200' );
        } else {
            window.open('', 'ipinWindow', 'width=450,height=550,top=100,left=100,fullscreen=no,menubar=no,status=no,toolbar=no,titlebar=yes,location=no,scrollbar=no');
        }
        $(this).attr("target", "ipinWindow");
    }).trigger("submit");
}

/**
 * hmall gnb reload (login 관련 부분만)
 */
function loadHmallGnb() {
    $.ajax({
        type: "post"
        ,url: "/p/coa/loadHmallGnb.do?"+Math.random()
        ,dataType: "html"
        ,cache: false	
        ,async: false
        ,success : function(data) {
            $("body", window.opener.document).append("<div id='hiddenGnb' style='display:none;'></div>");
            $("body #hiddenGnb", window.opener.document).html(data);
            $("#header:eq(0)", window.opener.document).find(".person_area").empty();
            $("#header:eq(0)", window.opener.document).find(".person_area").append($("#hiddenGnb", window.opener.document).find(".person_area").html());
            $("#hiddenGnb", window.opener.document).remove();
        }
        ,error: function(data) {
        }
    });
}

/**
 * 입력창 Byte 체크 최대 까지만 입력가능하게.
 * @param inputObjId
 * @param limitByte
 * @returns {Boolean}
 */
function limitBytes(inputObjId, limitByte){

    /**
     * $(function(){
            $('#atclCntn').keyup(function(){
                limitBytes('atclCntn', 1000);
            })
        });
     */

    var input = $("#" + inputObjId).val();

    var iByteLength = 0;
    for (var i = 0; i < input.length; i++) {
        var sChar = escape(input.charAt(i));
        if (sChar.length == 1 ) {
            iByteLength ++;
        } else if (sChar.indexOf("%u") != -1) {
            iByteLength += 2;
        } else if (sChar.indexOf("%") != -1) {
            iByteLength += sChar.length/3;
        }
    }

    if(iByteLength > limitByte){
        alert('최대 '+limitByte+'Byte 까지 입력가능합니다.');
        $("#" + inputObjId).val(tempStr);
        return false;
    }
    tempStr = $("#" + inputObjId).val();
}

/**
 * 이메일 형식 유효성 검사
 * @param email
 * @returns {Boolean} 유효한 이메일 형식이면 true, 유효하지 않으면 false
 */
function validateEmail(email) {
    var pattern = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

    if(!pattern.test(email)){
        return false;
    }

    return true;
}

/**
 * 입력값에 숫자만 허용하는 경우
 * @param value
 * @returns {Boolean} 숫자이외 값이 있으면 false, 숫자만 있으면 true
 */
function onlyNum(value) {
    var pattern = /\D/g;

    if (pattern.test(value)) {
        return false;
    }

    return true;
}

/**
 * 전화번호 유효성 검사1
 * @param num1 필수
 * @param num2 필수
 * @param num3 필수
 * @param num4 선택
 * @returns {Boolean} 유효하면 true, 유효하지 않으면 false
 */
function validatePhoneNum(num1, num2, num3, num4) {
    if (isEmpty(num4)) {
        if (onlyNum(num1) && onlyNum(num2) && onlyNum(num3)) {
            return true;
        } else {
            return false;
        }
    } else {
        if (onlyNum(num1) && onlyNum(num2) && onlyNum(num3) && onlyNum(num4)) {
            return true;
        } else {
            return false;
        }
    }
}

/**
 * 전화번호 유효성 검사2
 * @param num 123-1234-1234-1234 형식일 것
 * @returns {Boolean} 유효하면 true, 유효하지 않으면 false
 */
/*function validatePhoneNumber(num) {
    var result = false;

    var numArray = num.split("-");
    if (numArray.length == 3) {
        result = validatePhoneNum(numArray[0], numArray[1], numArray[2])
    } else if (numArray.length == 4) {
        result = validatePhoneNum(numArray[0], numArray[1], numArray[2], numArray[3])
    } else {
        result = false;
    }

    return result;
}*/

/**
 * 휴대폰 유효성 검사
 * @param no1 필수
 * @param no2 필수
 * @param no3 필수
 * @returns {int} 유효하면 1, no1이 유효하지 않으면 1, no2이 유효하지 않으면 2, no3이 유효하지 않으면 3
 */
function validateHpNo(no1, no2, no3) {
    var pattern1 = /^[\d]{3,4}$/;
    var pattern2 = /^[\d]{3,4}$/;
    var pattern3 = /^[\d]{4}$/;
    if ( !pattern1.test(no1) ) {
        return 1;
    }
    if ( !pattern2.test(no2) ) {
        return 2;
    }
    if ( !pattern3.test(no3) ) {
        return 3;
    }
    return 0;
}

/**
 * 사업자번호 체크
 *
 * @param  str
 * @return boolean
 */
function isRgno(str) {
    var sum = 0;
    var getlist =new Array(10);
    var chkvalue =new Array("1","3","7","1","3","7","1","3","5");

    for(var i=0; i<10; i++) {
        getlist[i] = str.substring(i, i+1);
    }
    for(var i=0; i<9; i++) {
        sum += getlist[i]*chkvalue[i];
    }
    sum = sum + parseInt((getlist[8]*5)/10);
    sidliy = sum % 10;
    sidchk = 0;
    if (sidliy != 0) {
        sidchk = 10 - sidliy;
    } else {
        sidchk = 0;
    }
    if (sidchk != getlist[9]) {
        return false;
    }

    return true;
}

/** 
 * 찜하기 레이어 팝업(하나일 때) : 상품목록 
 * totoary 상품리스트에서 찜 할때에 이미지를 변경하기 위해서 추가
 *
 * @param  slitmCdUitmCd
 * @param  sectId
 * @param  e
 */
function zzimItem(slitmCdUitmCd, sectId, e, obj){
	
	
	if(window.location.href.indexOf("http://") >= 0)
	{
		//호출한다 
		  $.ajax({
		        url: "/p/mpc/tvMainSelectTotalSltdItem.do"
		        , dataType: "json"
		        , success: function(data) {
		            if(data != null && data.resultMsg == "DELETE"){
		                // 일시중단 상품이 있는 경우
		                if(confirm("찜은 최대 200개까지 가능합니다. 찜리스트에서 오래된 상품 및 중단된 상품 삭제후 다시 이용해주세요.")){
		                	location.href = "/p/mpc/sltdItemList.do";
		                }
		            }
		            else{
		            	 zzimExclItemTrgtChk(slitmCdUitmCd, sectId, e, obj); // totoary 상품리스트에서 찜 할때에 이미지를 변경하기 위해서 추가
		                return;
		            }
		        }
		        , error: function(xhr, status, error) {
	              console.log("json error");
		            return;
		        }
		    });
		  
	    try {
	        _trk_flashEnvView('_TRK_PI=LYRWISH');
	    } catch(e) {}	
	}
	else	
	{
		//호출한다 
		  $.ajax({
		        url: "/p/mpc/selectTotalSltdItem.do"
		        , dataType: "json"
		        , success: function(data) {
		            if(data != null && data.resultMsg == "DELETE"){
		                // 일시중단 상품이 있는 경우
		                if(confirm("찜은 최대 200개까지 가능합니다. 찜리스트에서 오래된 상품 및 중단된 상품 삭제후 다시 이용해주세요.")){
		                	location.href = "/p/mpc/sltdItemList.do";
		                }
		            }
		            else{
		            	 zzimExclItemTrgtChk(slitmCdUitmCd, sectId, e, obj); // totoary 상품리스트에서 찜 할때에 이미지를 변경하기 위해서 추가
		                return;
		            }
		        }
		        , error: function(xhr, status, error) {
	              console.log("json error");
		            return;
		        }
		    });
		  
	    try {
	        _trk_flashEnvView('_TRK_PI=LYRWISH');
	    } catch(e) {}
	}
    
}

/**
 * 찜하기 레이어 팝업(두 개 이상) : 상품목록
 *
 * @param  slitmCdUitmCds
 * @param  sectId
 * @param  e
 */
function zzimArray(slitmCdUitmCds, sectId, e){
    if(slitmCdUitmCds == null || slitmCdUitmCds == ''){
        alert("상품을 선택해 주세요.");
        return;
    }

    var chkedSlitmCdUitmCds = '';
    for(var i=0; i<slitmCdUitmCds.length;i++){
        chkedSlitmCdUitmCds += "|";
        chkedSlitmCdUitmCds += slitmCdUitmCds[i];
    }
    chkedSlitmCdUitmCds = chkedSlitmCdUitmCds.substring(1);
    zzimExclItemTrgtChk(chkedSlitmCdUitmCds, sectId, e);
}

/**
 * 찜하기 레이어 팝업(하나일 때) : 상품상세
 *
 * @param  slitmCdUitmCd
 * @param  sectId
 * @param  e
 */
function zzimItemDetail(slitmCdUitmCd, sectId, e){
    sltdItemFormItemDetail(slitmCdUitmCd, sectId, e);
}

/**
 * 찜하기 레이어 팝업 열기(상품목록)
 *
 * @param  chkedSlitmCdUitmCds
 * @param  sectId
 * @param  e
 */
var sectItemZzimObj = ""; // totoary 상품리스트에서 찜 할때에 이미지를 변경하기 위해서 추가
function sltdItemForm(chkedSlitmCdUitmCds, sectId, e, obj){
    if ( e.preventDefault ) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }

    if(isLogin() == 'false'){
        openLoginPopup(locationHref);return false;
    }else {
        // totoary 상품리스트에서 찜 할때에 이미지를 변경하기 위해서 추가
        if(!isEmpty(obj)) {
            sectItemZzimObj = obj;
        }
        $('#jjim_codi').children().remove();

        var modalWidth = 100,
            modalHeight = 0,	//body의 총 높이값
            winX = null,
            winY = null;

        winX = $(document).width();
        winY = $(window).height();
        var $this = $(e),
            target = $("#jjim_codi"),
            scrollTop = $(window).scrollTop(),					//현재 스크롤 위치
            x = (winX - target.outerWidth() ) / 2 ,				//레이어팝업 left 값
            y = scrollTop + ((winY - 187)/2),	//레이어팝업 top 값
            popupClose = $this.parents('div.popup'),
            modalHeight =$('body').prop("scrollHeight");

        // 레이어팝업 위치 셋팅
        target.css({"top":y+"px","left":x+"px"});
        // ie6인경우 모달 BG 생성 하고 아이프레임 bg 호출
        if (popupClose.attr('style')) {
            if (popupClose.attr('style').indexOf('block')) {
                popupClose.hide();
            };
        };
        if ($.browser.version == 6.0) {
            ie6layerBg(x, y, target);
        }else{
            // 모달 BG 생성
            if ($('.modal').length == 0) {
                $('body').append('<div class="modal">');
                $('.modal').css({"cursor":"move","position":"absolute","z-index":"10000","opacity":"0","background":"#000","top":0,"left":0,"width":modalWidth+"%","height":modalHeight+"px"});
                $('.modal').animate({"opacity":"0.8"}, 300,"easeInExpo")
            };
        }

        var params = "chkedSlitmCdUitmCds=" + chkedSlitmCdUitmCds + "&sectId=" + sectId;
        $.ajax({ url: "/p/mpc/editSltdItemLayerPup.do", data:params, type:"post", success: function(data){
                $('#jjim_codi').html(data);
                target.show();
            }, dataType: "html"});
    }
}

/**
 * 찜하기 상품 등록(상품목록)
 *
 * @param  obj
 * @param  chkedSlitmCdUitmCds
 * @param  sectId
 * @param  e
 */
function sltdItemDone(obj, chkedSlitmCdUitmCds, sectId, e){

    try {
        _trk_flashEnvView('_TRK_PI=FLDRWISH');
    } catch(e) {}


    if ( e.preventDefault ) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }

    if(isLogin() == 'false'){
        openLoginPopup(locationHref);return false;
    }else {
        var sltdFldeSeq = $(obj).parent().children("select[name='sltdFldeSeq']").val();
        var params = "chkedSlitmCdUitmCds=" + chkedSlitmCdUitmCds + "&sectId=" + sectId + "&sltdFldeSeq=" + sltdFldeSeq;
        $.ajax({ url: "/p/mpc/insertSltdItemLayerPup.do", data:params, type:"post", success: function(data){
                $('#jjim_codi').children().remove();
                $('#jjim_codi').html(data);
                $('#jjim_codi').show();
                try {
                    _trk_clickTrace("EVT", "상품리스트_찜하기");
                } catch (e) {}
                //SKYSCRAPPER에 변경된 찜한상품 수를 넣는다
                //$("#div4").find("strong").html($.cookie("GGimCnt"));
                // totoary 상품리스트에서 찜 할때에 이미지를 변경하기 위해서 추가
                if(!isEmpty(sectItemZzimObj)) {
                	if($(sectItemZzimObj).hasClass('gdealItem')){
	        			$(sectItemZzimObj).children('i').addClass('on');
	        		
	        		}else{                			
	        			$(sectItemZzimObj).html('<img src="' + imageServer + '/hmall/co/pl17_icon_wanted_sel.png"/><span>찜</span>');	
	        		}                                                                                        
                }                                            
        }, dataType: "html"});
    }
}

/**
 * 찜하기 레이어 팝업 닫기(상품목록)
 *
 * @param  obj
 * @param  e
 */
function sltdItemClose(obj, e){
    if ( e.preventDefault ) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
    $("#jjim_codi").hide();

    //상품상세 레이어 팝업에서 부른 경우 모달 미삭제 처리
    var pd_zoom_disp = $("#pd_zoom").css("display");
    if((typeof pd_zoom_disp === 'undefined') == true  || pd_zoom_disp == 'none'){
        // 모달 bg가 있는 경우 모달 BG 태그 삭제
        if ($('.modal').length != 0) {
            $('.modal').remove();
            $('html').removeAttr('style');
            // 아이프레임 BG가 있는경우 삭제
        }else if($('.ie6Layer').length != 0){
            $('.ie6Layer').remove();
            $('html').removeAttr('style');
        }
    }
}

/**
 * 찜하기 레이어 팝업 열기(상품상세)
 *
 * @param  chkedSlitmCdUitmCds
 * @param  sectId
 * @param  e
 */
function sltdItemFormItemDetail(chkedSlitmCdUitmCds, sectId, e){
    if ( e.preventDefault ) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }

    if(isLogin() == 'false'){
        openLoginPopup(locationHref);return false;
    }else {
        var params = "chkedSlitmCdUitmCds=" + chkedSlitmCdUitmCds + "&sectId=" + sectId;
        $.ajax({ url: "/p/mpc/editSltdItemLayerPup.do", data:params, type:"post",  success: function(data){
                $('#jjim_codi').html(data);
                var posX = e.pageX,
                    posY = e.pageY;

                var offset = $(".btnWrapA").offset();
                posX = offset.left;
                posY = offset.top;

                $('#jjim_codi').show().css({'left':posX+185,'top':posY+45});
//			$('#jjim_codi').show().css({'left':posX-150,'top':posY+10});
            }, dataType: "html"});
    }
}

/**
 * 찜하기 상품 등록(상품상세)
 *
 * @param  obj
 * @param  chkedSlitmCdUitmCds
 * @param  sectId
 * @param  e
 */
function sltdItemDoneItemDetail(obj, chkedSlitmCdUitmCds, sectId, e){
    if ( e.preventDefault ) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
    var sltdFldeSeq = $(obj).parent().children("select[name='sltdFldeSeq']").val();
    var params = "chkedSlitmCdUitmCds=" + chkedSlitmCdUitmCds + "&sectId=" + sectId + "&sltdFldeSeq=" + sltdFldeSeq;
    $.ajax({ url: "/p/mpc/insertSltdItemLayerPup.do", data:params, type:"post", success: function(data){
            var posX = e.pageX,
                posY = e.pageY;
            $('#jjim_codi').children().remove();
            $('#jjim_codi').html(data);
            $('#jjim_codi').show().css({'left':posX-250,'top':posY-100});
        }, dataType: "html"});
}

/**
 * 찜하기 레이어 팝업 닫기(상품상세)
 *
 * @param  obj
 * @param  e
 */
function sltdItemCloseItemDetail(obj, e){
    if ( e.preventDefault ) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
    $("#jjim_codi").hide();
}


/**
 * 미리보기 열기
 *
 * @param  slitmCd
 * @param  sectId
 * @param  obj
 *
 * 2014. 10 : ajax -> iframe 교체
 */
function itemPreview(slitmCd, sectId, obj){
    $("#previewifm_div").remove();

    var $this = $(obj), previewifm_Div = "";

    var scrollTop = $(window).scrollTop(),	//현재 스크롤 위치
        x = ($(document).width() - 1178) / 2,	//레이어팝업 left 값
        y = scrollTop + (($(window).height() - 690)/2)	//레이어팝업 top 값

    // 레이어팝업 위치 셋팅
    previewifm_Div += '<div id="previewifm_div" style="position:absolute; top:'+ y +'px; left:'+ x +'px">';
    previewifm_Div += '<iframe id="previewifm_ifm" title="상품 미리보기용 레이어 프레임" src="/p/dpa/itemPreviewLayerPup.do?slitmCd='+ slitmCd +'&sectId='+ sectId+'" frameborder="0" width="1024" height="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>';
    previewifm_Div += '</div>';
    $("body").append(previewifm_Div);

    // 로딩체크
    var dup_loading_flag = false;
    ifm_loading_timer = setInterval(function () {
        if($("#previewifm_div").outerHeight() == 0){
            if(dup_loading_flag == false){
                showLoadingBar((x + $("#previewifm_div").width()/2)+"px", (y + 300)+"px");
            }
            dup_loading_flag = true;
        } else {
            clearInterval(ifm_loading_timer);
            hideLoadingBar();
        }
    }, 100);

    try {
        _trk_flashEnvView('_TRK_PI=LYRPRVW');
    } catch(e) {}

    try {
        // totoary 검색결과에서 바로주문 버튼 클릭시에 대한 조건 추가
        if($(obj).hasClass("pl_item_tv_buynow")) {
            _trk_clickTrace("EVT", "검색결과_TV방송예정상품_바로주문btn");
        } else {
            _trk_clickTrace("EVT", "상품리스트_미리보기");
        }
    } catch (e) {}
}

function newWindow(link, obj){
    try {
        _trk_flashEnvView('_TRK_PI=LYRNWN');
    } catch(e) {}

    try {
        _trk_clickTrace("EVT", "상품리스트_새창");
    } catch (e) {}
    window.open(link, '_blank');
}

/**
 * 미리보기 닫기
 *
 * @param  e
 */
function itemPreviewClose(e){
    if ( e.preventDefault ) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }

    playerStop();
    if ($(".modal", parent.document).length != 0) {
        $("html, body", parent.document).removeAttr('style');
        $(".modal", parent.document).remove();
        $("#previewifm_div", parent.document).hide();

        // remove() 사용시 미디어플레이어 늦게 사라지는 현상으로 타이머 remove() 적용
        setTimeout(function(){
            $("#previewifm_div", parent.document).remove();
        }, 100);
    } else if($(".ie6Layer", parent.document).length != 0) {
        $("html, body", parent.document).removeAttr('style');
        $(".ie6Layer", parent.document).remove();
        $("#previewifm_div", parent.document).hide();

        // remove() 사용시 미디어플레이어 늦게 사라지는 현상으로 타이머 remove() 적용
        setTimeout(function(){
            $("#previewifm_div", parent.document).remove();
        }, 100);
    }
}

/**
 * 즐겨찾기 자동설치
 */
function autoBookMark(){
    var url="http://www.hmall.com";
    var title="현대Hmall";

    if (document.all)
        window.external.AddFavorite(url,title)
}

/**
 * 즐겨찾기 SMS 발송
 */
function openSmsPup(prmoNo){
    if(isLogin() == 'true'){
        openPopup("/CS/eva/evntTmpl15SmsSendPup.do?prmoNo=" + prmoNo, 'smsSendPup', "430", "430", null, $(window).width(), $(window).height());
    }else{
        doEvntLogin();
    }
}

/**
 * 상품상세 화면이동
 */
function itemDetailView(sectId, slitmCd, adltItemYn, tmplDispTrtyCd, reNewItemListYn)
{
    if(adltItemYn == 'Y' && isLogin() == 'false'){
        openLoginPopup();return false;
    }else {
        // 20150612 - param 위치 변경 (sectId <-> slitmCd)
        var param = "?slitmCd="+slitmCd+"&sectId="+sectId;

        if(tmplDispTrtyCd != null && tmplDispTrtyCd != ''){
            param += "&2depthGroup=" + tmplDispTrtyCd;
        }
        try {
            // totoary 태깅 추가 요청으로 조건 처리
            if(reNewItemListYn == "Y") {
                _trk_clickTrace("EVT", "매장(4depth)_상품리스트_상품상세");
            } else {
                _trk_clickTrace("EVT", "상품리스트_새창");
            }
        } catch (e) {}

        document.location.href = "/p/pda/itemPtc.do" + param;
    }

}
/**
 * 상품상세 화면이동
 */
function itemDetailViewGA(sectId, slitmCd, adltItemYn, tmplDispTrtyCd, reNewItemListYn, slitmNm, tabNm)
{
    if(adltItemYn == 'Y' && isLogin() == 'false'){
        openLoginPopup();return false;
    }else {
        // 20150612 - param 위치 변경 (sectId <-> slitmCd)
        var param = "?slitmCd="+slitmCd+"&sectId="+sectId;

        if(tmplDispTrtyCd != null && tmplDispTrtyCd != ''){
            param += "&2depthGroup=" + tmplDispTrtyCd;
        }
        try {
            // totoary 태깅 추가 요청으로 조건 처리
            if(reNewItemListYn == "Y") {
                _trk_clickTrace("EVT", "매장(4depth)_상품리스트_상품상세");
            } else {
                _trk_clickTrace("EVT", "상품리스트_새창");
            }
        } catch (e) {}
        // ga태깅
        sendSlitmClick(slitmNm,slitmCd, tabNm);
        document.location.href = "/p/pda/itemPtc.do" + param;
    }

}
/**
 * 상품상세 화면이동(비즈스프링)
 */
function itemDetailView2(sectId, slitmCd, adltItemYn, tmplDispTrtyCd, reNewItemListYn, tagging)
{
    if(adltItemYn == 'Y' && isLogin() == 'false'){
        openLoginPopup();return false;
    }else {
        // 20150612 - param 위치 변경 (sectId <-> slitmCd)
        var param = "?slitmCd="+slitmCd+"&sectId="+sectId+tagging;

        if(tmplDispTrtyCd != null && tmplDispTrtyCd != ''){
            param += "&2depthGroup=" + tmplDispTrtyCd;
        }
        try {
            // totoary 태깅 추가 요청으로 조건 처리
            if(reNewItemListYn == "Y") {
                _trk_clickTrace("EVT", "매장(4depth)_상품리스트_상품상세");
            } else {
                _trk_clickTrace("EVT", "상품리스트_새창");
            }
        } catch (e) {}
        document.location.href = "/p/pda/itemPtc.do" + param;
    }

}
/**
 * 상품상세 화면이동(비즈스프링, ga)
 */
function itemDetailView2GA(sectId, slitmCd, adltItemYn, tmplDispTrtyCd, reNewItemListYn, tagging,  slitmNm, tabNm)
{
    if(adltItemYn == 'Y' && isLogin() == 'false'){
        openLoginPopup();return false;
    }else {
        // 20150612 - param 위치 변경 (sectId <-> slitmCd)
        var param = "?slitmCd="+slitmCd+"&sectId="+sectId+tagging;

        if(tmplDispTrtyCd != null && tmplDispTrtyCd != ''){
            param += "&2depthGroup=" + tmplDispTrtyCd;
        }
        try {
            // totoary 태깅 추가 요청으로 조건 처리
            if(reNewItemListYn == "Y") {
                _trk_clickTrace("EVT", "매장(4depth)_상품리스트_상품상세");
            } else {
                _trk_clickTrace("EVT", "상품리스트_새창");
            }
        } catch (e) {}
        sendSlitmClick(slitmNm,slitmCd, tabNm);
        document.location.href = "/p/pda/itemPtc.do" + param;
    }

}
/**
 * 상품상세(기획전) 화면이동
 */
function itemSpexView(sectId, slitmCd, adltItemYn, tmplDispTrtyCd, prmoNo)
{
    if(adltItemYn == 'Y' && isLogin() == 'false'){
        openLoginPopup();return false;
    }else {
        // 20150612 - param 위치 변경 (sectId <-> slitmCd)
        var param = "";
        if( prmoNo != null && prmoNo != "") {
            param = "?slitmCd="+slitmCd+"&sectId="+sectId+"&prmoNo="+prmoNo;
        }else{
            param = "?slitmCd="+slitmCd+"&sectId="+sectId;
        }

        if(tmplDispTrtyCd != null && tmplDispTrtyCd != ''){
            param += "&2depthGroup=" + tmplDispTrtyCd;
        }
        try {
            _trk_clickTrace("EVT", "상품리스트_새창");
        } catch (e) {}

        document.location.href = "/p/pda/itemPtc.do" + param;
    }

}

/**
 * 상품상세(상품평) 화면이동
 */
function itemEvaView(sectId, slitmCd, adltItemYn, tmplDispTrtyCd)
{
    if(adltItemYn == 'Y' && isLogin() == 'false'){
        openLoginPopup();return false;
    }else {
        var param = "?sectId="+sectId+"&slitmCd="+slitmCd;
        if(tmplDispTrtyCd != null && tmplDispTrtyCd != ''){
            param += "&2depthGroup=" + tmplDispTrtyCd;
        }
        document.location.href = "/p/pda/itemPtc.do" + param + "#detail_cont_3";
    }

}
/**
 * 상품상세(상품Q&A) 화면이동
 */
function itemQNAView(sectId, slitmCd, adltItemYn, tmplDispTrtyCd)
{
    if(adltItemYn == 'Y' && isLogin() == 'false'){
        openLoginPopup();return false;
    }else {
        var param = "?sectId="+sectId+"&slitmCd="+slitmCd;
        if(tmplDispTrtyCd != null && tmplDispTrtyCd != ''){
            param += "&2depthGroup=" + tmplDispTrtyCd;
        }
        document.location.href = "/p/pda/itemPtc.do" + param + "#detail_cont_4";
    }
}

/**
 * 기획전매장 화면이동
 */
function spexSectView(sectId)
{
    // totoary 상품리스트 태깅 추가
    try {
        _trk_clickTrace('EVT',"검색결과_기획전_배너");
    } catch (e) {}
    document.location.href = "/p/dpa/searchSpexSectItem.do?sectId="+sectId;
}
/**
 * 매장 화면이동
 */
function sectView(sectId, connUrlGbcd, connUrl)
{
    /** 2013.10.27 삭제
     if (connUrlGbcd == "01" && !isEmpty(connUrl)) {
		sectViewOpenPop(sectId);
		return false;
	}*/
    document.location.href = "/p/dpa/searchSectItem.do?sectId="+sectId;
}
/**
 * 미리보기 화면이동
 */
function sectPreview(sectId)
{
    document.location.href = "/p/dpa/multiCreateSectHtml.do?sectId="+sectId;
}
/**
 * 통합검색 화면이동
 */
function searchByTerm(lCat, lmCat, brndCdNm, brndImgNm, deptOption)
{
    var param = "";
    if (lmCat != null && lmCat != "") {
        param += "lCat="+encodeURIComponent(lmCat)+"&";
    }
    if (brndCdNm != null && brndCdNm != "") {
        /*param += "makecoInfo="+escape(brndCdNm);*/
        var brndCdNm_encode = encodeURIComponent(brndCdNm.replace("@", "'"));
        var brndCd= brndCdNm_encode.substring(0, brndCdNm_encode.indexOf("%20"));
        var searchTerm= brndCdNm_encode.substring(brndCdNm_encode.indexOf("%20")+3);
        param += "makecoInfo="+brndCdNm_encode+"&";
        param += "brndCd="+brndCd+"&";
        param += "searchTerm="+searchTerm+"&";
    }
    if (brndImgNm != null && brndImgNm != "") {
        param += "brndImgNm="+encodeURIComponent(brndImgNm)+"&";
    }
//	if (deptOption != null && deptOption != "") {
//		for (var i = 0; i < deptOption.length; i++) {
//			param += "deptGubun="+deptOption.charAt(i)+"&";
//		}
//	}
    document.location.href = "/p/pde/search.do?type=1&"+param;
}

/**
 * 포커스 조정
 * @param obj
 */
function focusObj(obj) {
    obj.focus();
    $("body, html").animate({scrollTop : obj.offset().top - 30}, 1);
}

/**
 * 주문상세 팝업 조회
 * @param ordNo
 */
function openOrderDetailPopup(ordNo) {
    var link = "/p/mpa/selectOrdPTCPup.do?ordNo=" + ordNo;
    openPopup(link, "", 836, 1000, "yes", $(window).width(), $(window).height());
}

/**
 * 로딩바 노출
 * @param posX '#px'
 * @param posY '#px'
 */
function showLoadingBar(posX, posY) {
    $("body").append("<div id=\"loadingBar\" style=\"position:absolute; z-index:999999; display:none\"><img src=\"" +  imageServer + "/hmall/co/hmall_loader.gif\" alt=\"loadingBar\"/></div>");
    $("#loadingBar").css({"left" : posX, "top": posY});
    $("#loadingBar").fadeIn("fast");
}

/**
 * 로딩바 감추기
 */
function hideLoadingBar() {
    $("#loadingBar").hide("fast");
    $("#loadingBar").remove();
}

/**
 * 블럭 로딩바 노출
 */
function showBlockLoadingBar() {
    $("body").append("<div id=\"loadingBar\" style=\"position:absolute; z-index:999999;\" display:none\"><img src=\"" +  imageServer + "/hmall/co/hmall_loader.gif\" alt=\"loadingBar\"/></div>");
    var left = ( $(window).scrollLeft() + ($(window).width() - $("#loadingBar").width()) / 2 );
    var top = ( $(window).scrollTop() + ($(window).height() - $("#loadingBar").height()) / 2 );
    $("#loadingBar").css({"left" : left, "top": top});

    modalHeight =$('body').prop("scrollHeight"),
        modalWidth = 100;

    if ($('.modal').length == 0) {
        $('body').append('<div class="modal">');
        $('.modal').css(
            {
                "position":"absolute",
                "z-index":"10000",
                "background":"#000",
                "top":0,
                "left":0,
                "opacity":0.5,
                "width":modalWidth+"%",
                "height":modalHeight+"px"}
        );
    };
    // 스크롤바 제거
    $('html').css({"overflow":"hidden"});
    $("#loadingBar").show();
}

/**
 * 블럭 로딩바 감추기
 */
function hideBlockLoadingBar() {
    $("#loadingBar").hide("fast");
    $("#loadingBar").remove();
    $('.modal').hide("fast");
    $('.modal').remove();
    $('html').removeAttr('style');
}


function playerStop() {
    try{
        document.WMPlayer.Stop();
        if (navigator.appName == "Netscape") {
            document.WMPlayer.SetCurrentPosition(0);
        } else {
            document.WMPlayer.CurrentPosition = 0;
        }
    }catch(e){}
}

/**
 * GNB 검색창의 자동완성키워드 상품Paing
 */
function autoItemSearchPaing(url){

    //2017.12 김이수 비즈스프링 태그 추가
    try {
        _trk_clickTrace('EVT','검색창레이어_바로검색결과');
    } catch (e) {}

    url = url.replace("('", "").replace("')", "");

    var searchTerm = $("div.searchResult_R span.search_word2 span.search_word").html();
    showLoadingBar("1000px", "300px");

    $.ajax({
        url: url
        , type: "post"
        , data: {searchTerm : searchTerm}
        , dataType: "html"
        , success: function(data) {
            $("div.searchResult_R").html("");
            $("div.searchResult_R").html(data);

            hideLoadingBar();
        }
        , error: function(data) {
            hideLoadingBar();
        }
    });
    return false;
}

/**
 * 단골매장등록
 * @param sectId
 */
function addWishShop(sectId) {
    if(isLogin() == 'false'){
        // 로그인창 이동
        openLoginPopup("/p/dpa/addWishShop.do?sectId="+sectId);
    } else {
        var params = "sectId="+sectId;
        $.ajax({
            type: "get"
            ,url: "/p/dpa/addWishShop.do"
            ,data: params
            ,async: false
            ,success : function(data) {

                if(data.successFlag == 'dup') {
                    alert('이미 등록된 매장입니다.');
                }
                if(data.successFlag == '1') {
                    alert('단골매장으로 등록되었습니다.');
                }
            }
            ,error: function(data) {
            }
        });
    }
}


function getByteLength(input) {
    var iByteLength = 0;
    for (var i = 0; i < input.length; i++) {
        var sChar = escape(input.charAt(i));
        if (sChar.length == 1 ) {
            iByteLength ++;
        } else if (sChar.indexOf("%u") != -1) {
            iByteLength += 2;
        } else if (sChar.indexOf("%") != -1) {
            iByteLength += sChar.length/3;
        }
    }
    return iByteLength;
}

/**
 * 재입고 알림 등록 팝업
 * @param slitmCd
 * @param uitmCd
 */
function addItemRishpAlrimCommonPopup(slitmCd, uitmCd) {
    if(isLogin() == 'false'){
        openLoginPopup();return false;
    } else {
        var link = "/p/mpc/itemRishpAlrimPup.do?slitmCd=" + slitmCd + "&uitmCd=" + uitmCd;
        openPopup(link, "", 550, 530, "no", $(window).width(), $(window).height());
    }
}

/**
 * 방송 알림 등록 팝업(상품명)
 * @param slitmNm
 */
function addBitemAlrimCommonPopup(slitmNm) {
    if(isLogin() == 'false'){
        openLoginPopup();return false;
    } else {
        var link = "/p/bma/editBitmAlrimNewPup.do?slitmNm=" + encodeURIComponent(slitmNm);
        openPopup(link, "", 795, 660, "no", $(window).width(), $(window).height());
    }
}

/**
 * 방송 알림 등록 팝업(상품명). 모바일 리뉴얼 프로젝트
 * @param slitmNm
 */
function addBitemAlrimCommonPopupNew(slitmNm , slitmCd ,bsitmCd) {
    if(isLogin() == 'false'){
        openLoginPopup('/p/bmc/brodPordPbdv.do?type=03&MainpageGroup=TopTvLiveSchedule&_IC_=TopTvLiveSchedule');return false;
    } else {
        var link = "/p/bma/editBitmAlrimNewPup.do?slitmNm=" + encodeURIComponent(slitmNm) + "&slitmCd="+slitmCd + "&bsitmCd="+bsitmCd;
        openPopup(link, "", 795, 755, "no", $(window).width(), $(window).height());
    }
}

/**
 * 매장팝업호출
 */
function sectViewOpenPop(sectId) {
    var link = "/p/dpa/searchSectItem.do?sectId="+sectId;
    document.location.href = link;
    document.location.target = "_blank";
}


/**
 * 카탈로그 우편 등록 팝업
 */
function ctlgPostReqPopup() {
    if(isLogin() == 'false'){
        openLoginPopup("clickCatalogue");return false;
    } else {
        var link = "/p/dpf/ctlgPostReqPup.do";
        openPopup(link, "", 460, 400, "no", $(window).width(), $(window).height());
    }
}

/**
 * img tag onerror image 처리
 */
function noImage(obj, source) {
    var img = new Image();

    img.onerror = function() {
        callbackNoImage(obj, source, false);
    };

    img.onload = function() {
        callbackNoImage(obj, source, true);
    };

    img.src = source;
}

function callbackNoImage(obj, source, b) {
    if (b) {
        obj.src = source;
    }
}

function getItemImgSrc(slitmCd, sFName) {
    var itemImgSrc  = "";
    try {
        var host        = getPropertie("item_image_server_host");
        var directory   = getPropertie("item_image_server_directory");
        itemImgSrc      += "//";
        itemImgSrc      += host;

        itemImgSrc      += directory;
        itemImgSrc      += "/";
        itemImgSrc      += slitmCd.substring(7,8);
        itemImgSrc      += "/";
        itemImgSrc      += slitmCd.substring(6,7);
        itemImgSrc      += "/";
        itemImgSrc      += slitmCd.substring(4,6);
        itemImgSrc      += "/";
        itemImgSrc      += slitmCd.substring(2,4);
        itemImgSrc      += "/";
        itemImgSrc      += sFName;
    } catch (err) {
        //alert(err.description);
        itemImgSrc = "";
    }
    return itemImgSrc;
}
function getImgSrc(img) {
    if ( document.location.protocol == 'http:' ) {
        return 'http://'+getPropertie("image_server_host")+img;
    }
    else if ( document.location.protocol == 'https:' ) {
        return 'https://'+getPropertie("image_server_host_for_ssl")+img;
    }
    else {
        return '//'+getPropertie("image_server_host")+img;
    }

}


// 이벤트 당첨 안내 팝업
function openWinPtupPop(prmoNo){

    var url = "/CS/eva/evntWinPtupPop.do?prmoNo=" + prmoNo;
    window.open(url, 'evntWinPtupPop', 'width=660,height=700,scrollbars=yes,resizable=no');
}


/*
 * 일반매장 쿠폰 다운로드
 * 20140714 evnt.js 에서 이동
 */
function evntSectCopnDownload(prmoNo){
    if(isLogin() == 'true'){
        $.ajax({
            type: "post"
            ,url: "/CS/eva/evntSectCopnDownLoad.do"
            ,dataType: "json"
            ,data:{prmoNo:prmoNo}
            ,async: false
            ,success : function(data) {
                if(data.save){
                    var c = confirm("쿠폰이 발행되었습니다. 구매 매장으로 이동 하시겠습니까?");
                    if(c == 1){
                        window.location.href = data.targetUrl;
                    }
                }else{
                    var c = confirm(data.errorMsg+" 구매 매장으로 이동 하시겠습니까?");
                    if(c == 1){
                        window.location.href = data.targetUrl;
                    }
                }
            }
            ,error : function(request,status,error){
                if(confirm('이벤트 응모시 오류가 발생했습니다.\n이벤트페이지로 이동하시겠습니까?')){
                    window.location.href="/CS/eva/evntDivideView.do?prmoNo=" + prmoNo;
                }
            }
        });

        return false;
    }else{
        openLoginPopup();
        return false;
    }
}

/*
설명  : 폼 입력값을 정규식패턴을 이용해서 체크함 (2014-11-28)
사용법 : frmchk_char(문자열, 조건)
결과값 : true/false
조건  : 영문, 숫자, 한글, 특수문자 사용가능
*/
function frmchk_char(str) {
    var objPattern;

    if(str == "" || str == "undefined" || str == null){
        return false;
    }

    str = str.replace(/(\s*)/g,""); //공백제거
    str = str.replace(/\r\n/g,"");  //개행제거
    objPattern = /^[가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9a-zA-Z0-9~!@\#$%<>^&*?|{}:;,.\()\-=+_\'\[\]\\\/\"\`]+$/;


    return objPattern.test(str);
}

/**
 * 국가별 zipcode 체크
 * 2014-12-01 rmffhqjf tkehddlf
 * @param cnryCd
 * @param zipcode
 */
function zipCodeValidation(cnryCd, zipcode){
    var val = zipcode;
    if(cnryCd == "AU" || cnryCd == "AT" || cnryCd == "BE" || cnryCd == "DK" || cnryCd == "LU" || cnryCd == "NL" || cnryCd == "NO"
        || cnryCd == "PH" || cnryCd == "PT" || cnryCd == "ZA" || cnryCd == "CH"){
        if(/^\d{4}$/.test(val))
            return true;
        else
            return false;

    }
    else if(cnryCd == "FI" || cnryCd == "FR" || cnryCd == "DE" || cnryCd == "GR" || cnryCd == "ID" || cnryCd == "IT" || cnryCd == "MY"
        || cnryCd == "MX" || cnryCd == "PR" || cnryCd == "ES" || cnryCd == "SE" || cnryCd == "TH" || cnryCd == "TR" || cnryCd == "US"){
        if(/^\d{5}$/.test(val))
            return true;
        else
            return false;

    }
    else if(cnryCd == "CN" || cnryCd == "IN" || cnryCd == "RU" || cnryCd == "KR" || cnryCd == "SG"){
        if(/^\d{6}$/.test(val))
            return true;
        else
            return false;

    }else if(cnryCd == "JP"){
        if(/^\d{7}$/.test(val))
            return true;
        else
            return false;

    }else if(cnryCd == "BR"){
        if(/^\d{8}$/.test(val))
            return true;
        else
            return false;

    }else if(cnryCd == "CA"){
        if(/^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1}\d{1}[A-Z]{1}\d{1}$/.test(val))
            return true;
        else
            return false;

    }else if(cnryCd == "GB"){
        if(/^[A-Z]{1,2}[0-9R][0-9A-Z]?[0-9][ABD-HJLNP-UW-Z]{2}$/.test(val))
            return true;
        else
            return false;

    }
}


/**
 * 국가별 zipcode 체크
 * 2014-12-01 rmffhqjf tkehddlf
 * @param cnryCd
 * @param zipcode
 * @param frgnDlvcoCd
 */
function zipCodeValidation2(cnryCd, zipcode, frgnDlvcoCd){


    if( frgnDlvcoCd == "87"
        && cnryCd != "TW"
        && cnryCd != "VN"
        && cnryCd != "HK"
        && cnryCd != "KH"
        && cnryCd != "CL"
        && cnryCd != "HR"
        && cnryCd != "IE"
        && cnryCd != "KZ"
        && cnryCd != "KW"
        && cnryCd != "MN"
        && cnryCd != "NZ"
        && cnryCd != "SA"
        && cnryCd != "SK"
        && cnryCd != "TR"
        && cnryCd != "AE"
        && cnryCd != "UZ"
        && cnryCd != "VE"
        && cnryCd != "MO"){
        var isPass = false;

        if(!isEmpty(frgnDlvcoCd)
            && !isEmpty(cnryCd)
            && !isEmpty(zipcode)) {

            $.ajax({
                type: "post"
                , url: "/p/cof/validateShipping.do"
                , dataType: "json"
                , async:false
                , data : {frgnDlvcoCd : frgnDlvcoCd, frgnDstnPostNo : zipcode, cnryCd : cnryCd}
                , success : function(data) {
                    if(isEmpty(data.resultMsg)) {
                        alert("System error.");
                    } else if(data.resultMsg == "OK"){
                        isPass = true;
                    }else{
                        //isPass = confirm("해외배송지 우편번호가 잘못되었습니다. 그래도 주문 하시겠습니까?");
                        isPass = false;
                    }
                }
                , error: function(data) {
                    //alert(data);
                    alert("오류가 발생하였습니다. 다시시도해주세요.");
                }
            });
        }
    }else{
        isPass = true;
    }
    return isPass;
}

/* 20150309 - 상품 이미지 롤오버 시 미리보기, 찜, 비교하기 오버레이어 - 민수영 */
$(document).on("mouseenter", ".pdtImg2, .bestProd",function(e){

    // 상위 태그가 A 태그일 경우 중복 클릭 방지
    if($(this).parent().prop("tagName") == "A"){
        $(this).parent().attr({ "data-onclick" : $(this).parent().attr("onclick") }).removeAttr("onclick");
        e.preventDefault();
    }

    // 일시중단상품일 경우, 오버레이어 미노출
    var itemSellGbcd = $(this).parent().find("input[name='itemSellGbcd']").val();
    if(itemSellGbcd == '11'){
        return;
    }
    
	// 성인상품 인경우 미리보기 미노출
	var adltItemYn = $(this).parent().find("input[name='adltItemYn']").val();
	

    var sCd = $(this).attr("data").split(":"), overlayerName, inlineStyle_48 = "", inlineStyle_44 = "", btn_pd_over_1 = "btn_pd_over_1", btn_pd_over_2 = "btn_pd_over_2", btn_pd_over_3 = "btn_pd_over_3";

    // 상품 이미지 가로 사이즈별 overlayer 클래스 변경
    ($(this).find("img").width() <= 140) ? overlayerName = "overlayer2" : overlayerName = "overlayer3";

    // 상품 이미지 가로 사이즈 140이하일 경우
    if(overlayerName == "overlayer2"){
        inlineStyle_48 = "width: 48px !important";
        inlineStyle_44 = "width: 44px !important";

        btn_pd_over_1 = "btn_pd_over_wide_1";
        btn_pd_over_2 = "btn_pd_over_wide_2";
        btn_pd_over_3 = "btn_pd_over_wide_3";
    }

    var objHtml = '';
    objHtml += '<div class="'+ overlayerName +'">';
    objHtml += '<ul class="'+ overlayerName +'UL">';
    if(adltItemYn !='Y'){
    objHtml += '<li><a href="javascript://" onclick="itemPreview(\''+ sCd[0] +'\', \''+ sCd[1] +'\', this);" class="targetLayerPopup2"><img src="' + imageServer + '/hmall/co/'+ btn_pd_over_1 +'.png" alt="미리보기" style="'+ inlineStyle_48 +'" /></a></li>';
    }
    objHtml += '<li><a href="javascript://" onclick="zzimItem(\''+ sCd[0] +'\',\''+ sCd[1] +'\', event);"><img src="' + imageServer + '/hmall/co/'+ btn_pd_over_2 +'.png" alt="찜" style="'+ inlineStyle_44 +'" /></a></li>';
    objHtml += '<li><a href="javascript://" onclick="newWindow(\'' + '/p/pda/itemPtc.do?slitmCd='+ sCd[0] +'&overL=nw'+'\', this);"><img src="' + imageServer + '/hmall/co/'+ btn_pd_over_3 +'.png" alt="새창열기" style="'+ inlineStyle_48 +'" /></a></li>';	// 20150615 - 비교하기 -> 새창변경
    objHtml += '</ul>';
    objHtml += '</div>';

    $(this).append(objHtml);
}).on("mouseleave", ".pdtImg2, .bestProd",function(){
    // 상위 태그가 A 태그일 경우 중복 클릭 방지
    if($(this).parent().prop("tagName") == "A"){
        $(this).parent().attr({ "onclick" : $(this).parent().attr("data-onclick") }).removeAttr("data-onclick");
    }

    $(".overlayer2, .overlayer3").remove();
});

//20150520 - 상품비교하기(매장/검색/찜/최근본상품) - 김상민
$(document).on("click", ".listBoxs > span.chk", function(){
    // 선택 항목이 4개이상일 경우 리턴
    var cnt = 0;
    $('[id^=slitmCd], [name^=slitmCd], [class^=pdtChk]').each(function(){
        if(this.checked) cnt += 1;
    });

    // 이미 표시중인 비교버튼 제거
    if($(".listBoxs").find(".compareBtn_div").length > 0) $(".listBoxs").find(".compareBtn_div").remove();

    // 선택된 상품에 비교하기 버튼 추가/제거
    var compare = '';
    compare += '<div class="compareBtn_div" style="position:absolute; top:'+ ($(this).position().top-1) +'px; left:27px; z-index:1000">';

    // 비교하기 함수 호출 예외처리
    compare += '<a href="#" class="status white2_3"';
    if(location.href.indexOf("/p/pde/") > 0 || location.href.indexOf("/p/mpc/sltdItemList.do") > 0){	// 검색결과 & 찜 화면일 경우 호출 함수 변경
        compare += ' onclick="compareItems()';
    } else {
        compare += ' onclick="compareItms(event)';
    }
    compare += '; return false;"><span>비교</span></a>';

    compare += '<a href="#"><img src="' + imageServer + '/hmall/co/btn_close_x8.gif" alt="" class="ml1" /></a>';
    compare += '</div>';
    $(this).after(compare);

    // 선택 항목이 모두 해제될 경우 비교버튼 미노출
    if(cnt == 0) $(".listBoxs").find(".compareBtn_div").remove();

    // 비교버튼 레이어 닫기 및 제거
    $(this).parent().find(".compareBtn_div").find("a:eq(1)").click(function(){
        $(this).parent().remove();
        return false;
    });
});

// 20150821 - 상품평 
$(document).on("click", "table.assessment > tbody > tr", function(){
    if(!$(this).hasClass("detailTR")){
        if($(this).next().css("display") == "table-row" || $(this).next().css("display") == "block") $(this).next().hide();
        else $(this).next().show();
    }
});

// 레이블 입력창 포커스시 텍스트 숨김/해제
function labelFocus(_this){
    var $label = $(_this);
    var _input = "#"+$(_this).siblings("input[id="+ $label.attr("for") +"]").attr("id");

    $label.css({ visibility : "hidden" });
    $(document).on("blur", _input, function(){
        if($(_input).val() == "") $label.css({ visibility : "visible" });
    });
}

// 160823 - 웹로그 추적용
function itemDetailViewCate(sectId, slitmCd, adltItemYn, tmplDispTrtyCd, cateText, depth){
    if(adltItemYn == 'Y' && isLogin() == 'false'){
        openLoginPopup();return false;
    } else {
        var param = "?slitmCd="+slitmCd+"&sectId="+sectId;

        if(tmplDispTrtyCd != null && tmplDispTrtyCd != ''){
            if (depth != null && depth != '' && depth == '3' ) {
                param += "&3depthGroup=" + tmplDispTrtyCd;
            } else {
                param += "&2depthGroup=" + tmplDispTrtyCd;
            }
        }

        if(cateText != null && cateText != ''){
            param += "&cateText=" + cateText;
        }

        document.location.href = "/p/pda/itemPtc.do" + param;
    }
}

// 161006 - 상품상세(상품평) 화면이동 - KJY
function itemEvaViewCate(sectId, slitmCd, adltItemYn, tmplDispTrtyCd, cateText){
    if(adltItemYn == 'Y' && isLogin() == 'false'){
        openLoginPopup();
        return false;
    } else {
        var param = "?sectId="+sectId+"&slitmCd="+slitmCd;
        if(tmplDispTrtyCd != null && tmplDispTrtyCd != ''){
            param += "&2depthGroup=" + tmplDispTrtyCd;
        }

        if(cateText != null && cateText != '') {
            param += "#" + cateText;
        }

        document.location.href = "/p/pda/itemPtc.do" + param;
    }
}

// 170412 - 검색영역 이외 클릭시 검색창(인기, 최근, 바로검색) 숨김 - rlatkdals
$(document).on("click", function(e){
    if($(e.target).parents(".header-service-area").length == 0 && ($(".pop-keyword-list").css("display") == "block" || $(".search_layer2").css("display") == "block")){
        $(".pop-keyword-list, .search_layer2").css({ display : "none" });
    }
});

//----------- 17 renewal wingbanner function

//set wingbanner resize offset
$(window).on('resize', function(){
    if($(document).find(".wingbanner")[0]){
        setWingbannerSideOffset();
    }
});

$(window).on('scroll', function(){
    if($(document).find(".wingbanner")[0]){
        var currentScrollTop = $(document).scrollTop();
        var topOffset;
        try{
            topOffset = $('.content-quicklink-wrap').offset().top;
        } catch(e){}

        if(window.location.href.indexOf("Home.html") > 0 || window.location.href.indexOf("CO-MAIN-R1.html") > 0){
            var gltPositionY = $('.main-content:eq(1)').offset().top;
            var ssPositionY = $('.main-content:eq(0)').offset().top;
            var qwPositionY = topOffset;

            if(currentScrollTop > gltPositionY) $('.wingbanner.banner-left').addClass("fixed");
            else $('.wingbanner.banner-left').removeClass("fixed");

            if (currentScrollTop > ssPositionY) {
                $('.wingbanner.banner-right').css("top", gltPositionY+35);
                $('.wingbanner.banner-right').addClass("pos2nd");
                if($('.wingbanner.banner-right').children().hasClass("visit-indicator") == false){
                    $('.wingbanner.banner-right').prepend($('.header-quicklink-area .visit-indicator').clone());
                }

                // add.180528 - 플로팅배너 위치 조정 - rlatkdals
                $(".floatingBn, .top-down-floating").css({ top : gltPositionY + $('.wingbanner.banner-right').outerHeight() + 51, left : $('.main-content:eq(0)').offset().left + $('.main-content:eq(0)').width() + 23 });
            }
            else {
                $('.wingbanner.banner-right').css("top", topOffset+54);
                $('.wingbanner.banner-right').removeClass("pos2nd");
                $('.wingbanner.banner-right .visit-indicator').remove();


                // add.180528 - 플로팅배너 위치 조정 - rlatkdals
                $(".floatingBn, .top-down-floating").removeAttr("style").attr("style", $(".floatingBn, .top-down-floating").attr("data-original"));
            }

            if(currentScrollTop > gltPositionY) $('.wingbanner.banner-right, .floatingBn, .top-down-floating').addClass("fixed");
            else $('.wingbanner.banner-right, .floatingBn, .top-down-floating').removeClass("fixed");
        }
        else {
            if(currentScrollTop > topOffset+6){
                if($('.wingbanner.banner-right').children().hasClass("visit-indicator") == false){
                    $('.wingbanner.banner-right').prepend($('.header-quicklink-area .visit-indicator').clone());
                }
                $('.wingbanner.banner-left, .wingbanner.banner-right').addClass("fixed");
            }
            else{
                $('.wingbanner.banner-right .visit-indicator').remove();
                $('.wingbanner.banner-left, .wingbanner.banner-right').removeClass("fixed");
            }
        }
    }
});

function initWingbannerOffset(){
    var topOffset = $('.content-quicklink-wrap').offset().top+54;
    $('.wingbanner.banner-right, .wingbanner.banner-left').css("top", topOffset);

    if(window.location.href.indexOf("Home.html") > 0 || window.location.href.indexOf("CO-MAIN-R1.html") > 0){
        var leftTopOffset = $('.main-content:eq(1)').offset().top+35;
        $('.wingbanner.banner-left').css("top", leftTopOffset);
    }

    setWingbannerSideOffset();
    $('.wingbanner').css("visibility", "visible");
}

function setWingbannerSideOffset(){
    var mainConOffsetL = $('.content-quicklink-wrap').offset().left;
    $('.wingbanner.banner-left').css("left", mainConOffsetL-168);
    $('.wingbanner.banner-right').css("left", mainConOffsetL+1121);

    // 181121 - 구화면 윙배너 위치 위한 부모 포지션 초기화 - rlatkdals
    if($("#container > #content > .body").length > 0 && $(".wingbanner.banner-left").length > 0) $("#container, #content").css({ position : "static" });
}

function initWingbannerSlider(){
    $(".wingbanner > ul").each(function(idx){
        var _childLength = $(this).children().length;

        // 첫번째 항목 표시 및 1개 이상의 경우 페이징 처리
        if(_childLength >= 1){
            $(this).children().first().addClass("on");

            if(_childLength > 1){
                var _navHtml = "<div class='slider-direction'>" +
                    "<div class='slider-prev'>&lt;</div>" +
                    "<div class='slider-pager'><span class='current-page'>1</span>/<span class='total-page'>-</span></div>" +
                    "<div class='slider-next'>&gt;</div>" +
                    "</div>";

                // AdBanner, CardPromotion, Recentview : slider-pager
                $(this).after(_navHtml);

                // AdBanner, CardPromotion, Recentview : slider-pager totalSize
                $(this).closest("ul").next(".slider-direction").find(".total-page").text(_childLength);
            }

        } else {
            if($(this).attr("id") == "recentView") $(this).append("<li class='on no-contents'>최근 본 상품이 없습니다</li>");
        }
    });
}

function ajaxCallback(){

    var rep_switch_serverHost;
    if(location.href.indexOf("tour") > 0){
        rep_switch_serverHost = "http://www.hmall.com";
    } else {
        rep_switch_serverHost = switch_serverHost;
    }

    var _categoryUrl = rep_switch_serverHost + "/gen/html/sectCtgr.html";

    if(location.href.indexOf("Home.html") > 0){
        setCategory(_categoryUrl);
        setQuicklink(PCmainTABJson);
        setWingbanner();
    } else {
        $(window).on("load", function(){
            setCategory(_categoryUrl);
            setQuicklink(PCmainTABJson);
            setWingbanner();
        });
    }

}

//----------- //17 renewal wingbanner function

//gnb - Category
function setup_gnbCategoryNew(){
    var xdr, switch_htmlName;
    if (locationHref.indexOf("https") > -1) {
        switch_htmlName = "sectCtgrSsl";
    } else if (locationHref.indexOf("http") > -1) {
        switch_htmlName = "sectCtgr";
    }

    if (document.location.hostname.indexOf("www") == -1 && navigator.userAgent.indexOf("MSIE") != -1 && getInternetExplorerVersion() < 10 ) {
        xdr = new XDomainRequest();
        if(xdr){
            xdr.onload  = function(){
                $("#gnb").html(xdr.responseText);
                main_gnb();
            }
            xdr.onerror = function(){}
            xdr.open("get", ""+ switch_serverHost + "/gen/html/"+ switch_htmlName +".html");
            xdr.send();
        }
    } else {
        $("#gnb").load(""+ switch_serverHost + "/gen/html/"+ switch_htmlName +".html", function(responseTxt,statusTxt,xhr){
            if(statusTxt=="success") main_gnb();
        });
    }
}

//상단고정바 클릭시 비즈스프링 분기
function clickDetailCont(param){
    if(param == "baseInfo"){
        //BIZSPRING
        try {
            _trk_clickTrace('EVT','상품상세_상단고정바_기본정보');
        } catch (e) {}
    }else if(param == "itemDesc"){
        //BIZSPRING
        try {
            _trk_clickTrace('EVT','상품상세_상단고정바_상세설명');
        } catch (e) {}
    }else if(param == "eval"){
        //BIZSPRING
        try {
            _trk_clickTrace('EVT','상품상세_상단고정바_상품평');
        } catch (e) {}
    }else if(param == "qna"){
        //BIZSPRING
        try {
            _trk_clickTrace('EVT','상품상세_상단고정바_상품Q&A');
        } catch (e) {}
    }else if(param == "custSatisFaction"){
        //BIZSPRING
        try {
            _trk_clickTrace('EVT','상품상세_상단고정바_고객만족도');
        } catch (e) {}
    }else if(param == "dlvExchRtp"){
        //BIZSPRING
        try {
            _trk_clickTrace('EVT','상품상세_상단고정바_배송/교환/반품');
        } catch (e) {}
    }
}

/* 180308 - 주소검색 리뉴얼 - sb */
$(document).on('click', ".addr-search .custom-placeholder", function(){
    $(this).hide();
    $(this).parents(".placeholder-wrap").find("input").focus();
});

$(document).on('focus', ".addr-search .placeholder-wrap > input", function(){
    $(this).parents(".placeholder-wrap").find(".custom-placeholder").hide();
    if($(this).parents().hasClass("search-input-wrap")){
        $(".addr-search .search-input-wrap").addClass("active");
    }
});

$(document).on('focusout', ".addr-search .placeholder-wrap > input", function(){
    if($(this).val() == "") {
        $(this).parents(".placeholder-wrap").find(".custom-placeholder").show();
        if($(this).parents().hasClass(".search-input-wrap")){
            $(".addr-search .search-input-wrap").removeClass("active");
        }
    }
});

$(document).on('keyup', ".addr-search .search-input", function(){
    if($(".addr-search .search-input").val() != "") $(".addr-search .remove-btn").show();
    else $(".addr-search .remove-btn").hide();
});

$(document).on('click', ".addr-search .remove-btn", function(){
    $(".addr-search .search-input").val("");
    $(".addr-search .remove-btn").hide();
    $(".addr-search .search-input").focus();
});

$(document).on('click', ".addr-search .addr-selector", function(){
    if($(this).hasClass("active")){
        $(".addr-selector").removeClass("active");
        $(".addr-selector-list").hide();
        $(this).removeClass("active");
        $(this).siblings(".addr-selector-list").hide();
    }
    else{
        $(".addr-selector").removeClass("active");
        $(".addr-selector-list").hide();
        $(this).addClass("active");
        $(this).siblings(".addr-selector-list").show();
    }
});

$(document).on('click', ".addr-search .addr-selector-list > li > a", function(){
    $(this).parents(".selector-wrap").find(".addr-selector").text($(this).text()).removeClass("active");
    $(this).parents(".addr-selector-list").hide();
});

$(document).on('click', ".addr-submit-btn", function(){
    if($(".addr-detail-input").val() == ""){
        $(".input-error-noti").show();
        $(".addr-detail-input").focus();
    }
});

/* // 180308 - 주소검색 리뉴얼 - sb */

/* 180502 - 고정 홍보띠 - dlsvy */
$(window).on('load resize', function(){
	if ($('.fixed-ad-belt').length > 0){
		$('.fixed-ad-belt').css({ left: ($(window).width() - 1081) / 2 });
		$('.fixed-ad-belt').css({ visibility: 'visible' });
	}
	if ($('.fixed-ad-img').length > 0){
		$('.fixed-ad-img').css({ left: $(window).width() / 2 - 541 - 168 });
		$('.fixed-ad-img').css({ visibility: 'visible' });
	}
});

function rollTxt(){		
	var ad_txtwidth = $('.fixed-ad-content ._rolltxt').width();
	var ad_wrapwidth = $('.fixed-ad-content').width();
	var ad_dur = ad_txtwidth * 15;
	
	$('.fixed-ad-content ._rolltxt').animate({
		marginLeft: - (ad_txtwidth + ad_wrapwidth)
	}, ad_dur, 'linear', function(){
		$('.fixed-ad-content ._rolltxt').css({
			marginLeft: ad_wrapwidth
		});
		rollTxt();
	});
};

//팝업관리.
function fnPupDispWindow(pupDispGbcd){
	//page이동 5회 미만 팝업 숨김
	//2019.05.20 김동민 3회 미만으로 수정
    if($.cookie("pageMoveCnt") < 3 || $.cookie("pageMoveCnt") == null){
    	$(".fixed-ad-img").css({
            display: "none"
        });
        $(".fixed-ad-belt").css({
            display: "none"
        });
    }else{
    	if(pupDispGbcd != ""){
    		$.ajax({
                 type: "get"
                 ,url: "/p/coa/selectPupWindow.do"
                 ,dataType: "html"
                 ,data: {pupDispGbcd:pupDispGbcd}
                 ,async: false
                 ,success : function(data) {
                	 if(data != null){
                		 $("#pupDispWindow").html(data);
                	 }
                 }
                 ,error: function(data) {
                 }
             }); 
    	}
    	            	
    }
}

/* 180618 - 특화배송 - sb */
/* 배송방법 라디오버튼 */
$(document).on('change', "input[name='deliveryType3']", function(){
    var _selectedType = $("input[name='deliveryType3']:checked").attr('id');
    var deliveryType = "";
    if(_selectedType == "dType1"){
        $(".delivery-type").removeAttr("disabled");
        $(".delivery-type").removeClass("disabled");
        $(".special-delivery-type").attr("disabled", "disabled");
        $(".special-delivery-type").addClass("disabled");
        deliveryType = $(".delivery-type").val();    //20180801특화배송 조유진
        $(".delivery-type").each(function(){
            $(this).val(deliveryType).trigger('change');
        });
        $(".special-delivery-guide-btn").hide();
        if(deliveryType != "3"){
        	$(".gl_order.hidden").hide();
        	$("#multiChk").show();
        }else{
        	$("#multiChk").hide();
        }

    }
    else{
        $(".delivery-type").attr("disabled", "disabled");
        $(".delivery-type").addClass("disabled");
        $(".special-delivery-type").removeAttr("disabled");
        $(".special-delivery-type").removeClass("disabled");
        deliveryType = $(".special-delivery-type").val();
        $(".special-delivery-type").each(function(){
            $(this).val(deliveryType).trigger('change');
        });
        $(".special-delivery-guide-btn").show();
        $(".gl_order.hidden").hide();
        $("#multiChk").hide();
    }
});
/* 특화배송 셀렉트박스 */
$(document).on('change', ".deliveryType .special-delivery-type", function(){
    var _selectedType = $(".deliveryType .special-delivery-type option:selected").attr('class');
    var _selectedTypeName = $(".deliveryType .special-delivery-type option:selected").text();
    $(".special-delivery-guide-btn").show();
    $(".special-delivery-guide-btn > span").text(_selectedTypeName + " 이용안내");
    $("#specialDeliveryPopup > .layer_con").removeClass("on");
    $("#specialDeliveryPopup > ." + _selectedType).addClass("on");
});

/* 180716 - tv 편성표 카테고리 헤더 고정 - sb */

var stickyHeaders = (function() {

    var $window = $(window), $stickies;

    var load = function(stickies) {

        if (typeof stickies === "object" && stickies instanceof jQuery && stickies.length > 0) {

            $stickies = stickies.each(function() {

                var $thisSticky = $(this).wrap('<div class="followWrap" />');

                $thisSticky
                    .data('originalPosition', $thisSticky.offset().top)
                    .data('originalHeight', $thisSticky.outerHeight())
                    .parent()
                    .height($thisSticky.outerHeight());
            });

            $window.off("scroll.stickies").on("scroll.stickies", function() {
                _whenScrolling();
            });
        }
    };

    var _whenScrolling = function() {

        $stickies.each(function(i) {

            var $thisSticky = $(this), $stickyPosition = $thisSticky.data('originalPosition');

            if ($stickyPosition <= $window.scrollTop()+135) {

                var $nextSticky = $stickies.eq(i + 1),
                    $nextStickyPosition = $nextSticky.data('originalPosition') - $thisSticky.data('originalHeight');

                $thisSticky.addClass("fixed");

                if ($nextSticky.length > 0 && $thisSticky.offset().top >= $nextStickyPosition+51) $thisSticky.removeClass("fixed");

            }
            else $thisSticky.removeClass("fixed");
        });
    };

    return {
        load: load
    };
})();

$(function() {
    stickyHeaders.load($(".followMeBar, .followMeBarEtc"));

    // add.0529 youtube 생성
    createYoutube();
});

function createYoutube(){
    if($("div[data-youtube]").length > 0){
        $("div[data-youtube]").each(function(){
            var $iframe = $("<iframe />");
            $iframe.attr({ src : location.protocol + "//" + location.host + "/html/evnt/youtubePlayer.html?id=" + $(this).attr("data-youtube"), allowfullscreen : true, frameborder : 0, scrolling : "no" });
            $iframe.css({ width : "100%", height : "100%" });

            $(this).html($iframe);
        });
    }
}

function zzimExclItemTrgtChk(slitmCdUitmCd, sectId, e, obj){

    $.ajax({
        url: "/p/mpc/exclItemTrgtChk.do?chkedSlitmCdUitmCds="+ slitmCdUitmCd
        , type: "get"
        , dataType: "json"
        , success: function(data) {
            if(!isEmpty(data.errorMessages)) {

                alert(data.errorMessages);
            }else{
                sltdItemForm(slitmCdUitmCd, sectId, e, obj);
            }
        }, error: function() {
            console.log("zzim 특정대상 상품 정보 체크 error");
        }
    });

}

/* 180810 - 난수쿠폰 대문자 - dlsvy  */
$(document).on('keyup', '.random-coupon #first-copNum, .random-coupon #last-copNum', function(e) {
	var position, texto, code;
	
	texto=this.value;
	code=e.keyCode;   
	position=texto.slice(0, this.selectionStart).length;
	
	if((code>=65 && code <=90 )|| code ==192 ){
		this.value=texto.toUpperCase();
		this.setSelectionRange(position,position);
	}    
});

/* 181012 - 하나머니 개인정보 수집/이용동의 추가 - sb */
$(document).on('click', "#hanamoneyPopup .agreement-area .agreement-open-btn", function(){
    if($(this).hasClass('on')){
        $(this).removeClass("on");
        $("#hanamoneyPopup .agreement-area .agreement-text").hide();
    }
    else {
        $(this).addClass("on");
        $("#hanamoneyPopup .agreement-area .agreement-text").show();
    }
});

/* 181115 - 비회원 구매 SMS 인증 수정 - sb */
$(document).on('keyup', ".auth-area.type-phone input", function(e){
    var regex = /[^0-9]/;
    if(regex.test($(this).val())){
        alert("숫자만 입력해 주세요");
        $(this).val("");
    }
});

/* placeholder 부분은 주소검색 부분과 동일, 추후 통합 요 */
$(document).on('click', ".nonmember-auth > .auth-btn", function(){
    var authType = $(this).attr('class').replace("auth-btn","").trim();
    $(this).hide();
    $(".nonmember-auth .auth-area." + authType).show();
});
$(document).on('click', ".custom-placeholder", function(){
    $(this).hide();
    $(this).parents(".placeholder-wrap").find("input").focus();
});

$(document).on('focus', ".placeholder-wrap > input", function(){
    $(this).parents(".placeholder-wrap").find(".custom-placeholder").hide();
});

$(document).on('focusout', ".placeholder-wrap > input", function(){
    if($(this).val() == "") {
        $(this).parents(".placeholder-wrap").find(".custom-placeholder").show();
    }
});

//20181207 - Goodbye IE8 - dlsvy
$(document).on('ready', ie8Check);

function ie8Check(){
	if($.browser.msie && $.browser.version.split('.')[0] <= 8){
		$('.header-wrap').prepend('<div style="width:100%; background:#ddd; display:block;"><p style="position:relative; width:1081px; margin:0 auto; padding:20px 0; font-size:14px; color:#000; line-height:20px;"><strong style="font-size:18px; margin-bottom:10px; display:block;">고객님의 인터넷 브라우저를 업데이트해 주세요.</strong>현대Hmall은 크롬 또는 인터넷 익스플로러 9 이상의 브라우저에서 쾌적하게 사용하실 수 있습니다.<br>지원하지 않는 브라우저 또는 호환성보기 모드를 사용하실 경우 정상적인 이용이 어려우실 수 있습니다.<br>업데이트 후에도 이 메시지가 보일 경우, <strong>도구-호환성보기 설정에서 *.hmall.com을 제거해 주세요.</strong><a href="http://windows.microsoft.com/ko-kr/internet-explorer/download-ie" style="font-size:16px; background:#fff; color:#000; font-weight:bold; display:inline-block; padding:10px; white-space:nowrap; position:absolute; top:15px; right:0; width:190px; text-align:center;" target="_blank"><img src="http://image.hmall.com/hmimg/ie_icon.png" style="height: 25px; vertical-align: middle; margin-right: 8px;">익스플로러 업데이트</a><a href="https://www.google.com/chrome/browser/desktop/index.html" style="font-size:16px; background:#fff; color:#000; font-weight:bold; display:inline-block; padding:10px; white-space:nowrap; position:absolute; bottom:15px; right:0; width:190px; text-align:center;" target="_blank"><img src="http://image.hmall.com/hmimg/chrome_icon.png" style="height: 25px; vertical-align: middle; margin-right: 8px;">크롬 설치하기</a></p></div>');
	}
}

/* 190103 - 유입 팝업 수정 - sb */
var ReferCode = ($.cookie("EHReferCode"))? ( $.cookie("EHReferCode") ) : false;
$(document).on('click', ".refer-popup .close-btn", function(){
    if($(this).hasClass("oneday") && ReferCode){
        var _d = new Date();

        $.cookie("referPopupClose-"+ReferCode, "Y", {path: '/', domain: "hmall.com", expires: new Date(_d.getFullYear().toString(), _d.getMonth().toString(), _d.getDate().toString(), "23","59","59")});
    }
    $(".refer-popup-dimm").remove();
    $(this).parents(".refer-popup").hide();
});

/* 새벽배송 안내팝업 변경 - 주소 드롭다운 - sb */
$(document).on('click', ".special-delivery-guide.delivery-type-dawn .addr-selector", function(){
    if($(this).hasClass("active")){
        $(".addr-selector").removeClass("active");
        $(".addr-selector-list").hide();
        $(this).removeClass("active");
        $(this).siblings(".addr-selector-list").hide();
    }
    else{
        $(".addr-selector").removeClass("active");
        $(".addr-selector-list").hide();
        $(this).addClass("active");
        $(this).siblings(".addr-selector-list").show();
    }
});

/* 지역별 추가 배송비 */
$(document).on('mouseenter mouseleave', '.adddel_cancel i', hoverAdddel1);
function hoverAdddel1(e){
    if (e.type == 'mouseenter'){
        $(this).siblings('.adddel_cancel_message').css('display', 'block');
    } else{
        $(this).siblings('.adddel_cancel_message').css('display', 'none');
    }
}

$(document).on('mouseenter mouseleave', '.adddel_order', hoverAdddel2);
function hoverAdddel2(e){
    if (e.type == 'mouseenter'){
        $(this).parent().parent().parent().find('.adddel_order_message').css('display', 'block');
    } else{
        $(this).parent().parent().parent().find('.adddel_order_message').css('display', 'none');
    }
}

$(document).on('mouseenter mouseleave', '.adddel_basket', hoverAdddel);
function hoverAdddel(e){
    if (e.type == 'mouseenter'){
        $(this).find('.adddel_message').css('display', 'block');
    } else{
        $(this).find('.adddel_message').css('display', 'none');
    }
}

/**
 * @name customtoggle
 * @selector [data-modules-customtoggle]'
 */
;(function(core, $, undefined){
    "use strict";
   
    var selector   = '[data-modules-customtoggle]',
        name = 'customtoggle',
        ui = core.ui,
        Widget = ui.Widget,
        Default = {
            activeClass : "ui-active",
            grouping : null,
            parent : null,
            openText:'더보기',
            closeText:'닫기',
            textCtr : "[data-text]",
            closeBtn : "[data-close-btn]"
        },
        Customtoggle = Widget.extend({
            name : name,
            init: function (element, config){
                var _ = this;
                var options = _.options = $.extend({}, Default, config);
                Widget.fn.init.call(_, element, options);
                _.transitioning = null;
                _.element = $(element);
                _.text = _.element.find(_.options.textCtr);
                _.$parent = (_.options.parent) ? _.element.closest(_.options.parent) : _.element;
                _._bindEvent();
            },
            _bindEvent : function(){
                var _ = this;
                _.element.on('click'+core.prefix+'.'+name+'.data-api', $.proxy(_._handler, this));
                _.$parent.on('click'+core.prefix+'.'+name+'.data-api', _.options.closeBtn, $.proxy(_.toggle, this));
            },
            _handler : function(e){
                e.preventDefault()
                var _ = this;
                _.toggle();
            },
            show : function () {
                var _ = this,
                    scTop = $(window).scrollTop();
                if(_.options.grouping !== null){
                    $(_.options.grouping).find('.'+_.options.activeClass +' '+selector).trigger('click')
                }
                _.$parent.addClass(_.options.activeClass);
                $(window).scrollTop(scTop);
                if(_.text.length){
                    _.text.text(_.options.closeText)
                }
                core.ui.modulesRefresh(_.$parent);
            },
            hide : function () {
                var _ = this,
                scTop = $(window).scrollTop();
                _.$parent.removeClass(_.options.activeClass);
                $(window).scrollTop(scTop);
                if(_.text.length){
                    _.text.text(_.options.openText)
                }
            },            
            toggle : function (e) {
                var _ = this;
                _[_.$parent.hasClass(_.options.activeClass) ? 'hide' : 'show']();
                _.element.trigger(e = $.Event('toggle.'+name, { relatedTarget: this }))
            }
        })
    ui.plugin(Customtoggle);

    // function clickHandler(e){
    //     var $this = $(this);

    //     if(!$this.data(name)){
    //         $(selector).each(function(){
    //             var $this = $(this);
    //             if(!$this.data(name)){
    //                 $this[name]();
    //             }
    //         })
    //     }
    //     $this[name]().show();
    //     return false;
    // }
    // $(document)
    //     .on('click'+core.prefix+'.'+name+'.data-api', selector, clickHandler)
})(window[LIB_NAME], jQuery);