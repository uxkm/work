/***********************************
 * common.js
***********************************/
// MOBILE / APP CHECK
var mobile=!1,mobileKeyWords="iPhone;iPad;Android;Mobile;Tablet;Touch;iPod;BlackBerry;Windows CE;Windows Phone;Symbian;webOS;Opera Mini;Opera Mobi;POLARIS;IEMobile;nokia;LG;lgtelecom;MOT;SAMSUNG;Samsung;SonyEricsson".split(";"),word;for(word in mobileKeyWords)if(null!=navigator.userAgent.match(mobileKeyWords[word])){mobile=!0;break}var conn_app=!1;-1<navigator.userAgent.indexOf("HmallApp")&&(conn_app=!0);

// EVENT 공통
var touch_event = 'click', s_touch_event = 'click';
if(mobile == true) {
	touch_event = 'touchend', s_touch_event = 'touchstart';
}


/***********************************
 * mobileUtil.js
***********************************/
/**
 * null check
 * @param value
 * @returns {Boolean}
 */
function isEmpty(value) { 
    return (value == null || value == undefined || value == "");
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

/***********************************
 * pd.js
***********************************/
$(window).on("load",function(){ // 소스 수정 : $(window).load(function(){
    // 옵션선택 탭
    var option_h = $('.option_sel').height(), option_h2 = option_h - 24;
    
    $('.option_sel .list1.back9').addClass('null');
    $('.option_sel').css({height: option_h, bottom : -option_h2, visibility : 'visible', display : 'none', transition : '-webkit-transform 0ms'}).delay(500).show();

    if($('#opt_direct').length > 0) {
        $('.option_sel').css({visibility : 'hidden'});
    }

    if($('.option_sel').length > 0) {
        $('.option_sel').css({transition : '-webkit-transform 300ms', zIndex : 9000});

        $(document).on(s_touch_event, function(event) {
            option_h = $('.option_sel').height(), option_h2 = option_h - 24;
            var target = event.target, sel_button = $('.sel_button');

            if(target == sel_button[0] && sel_button.hasClass('on') != true) {
                $('.list1.option_select.easySelect .optbox_list').css({top:0, left:0});
                $('.option_sel .button1 button, .list1.option_select select, .list1.option_select input').prop({'disabled' : true});
                sel_button.addClass('on');
                $('.option_sel').css({transform : 'translateY(-' + option_h2 + 'px)'});
                $('html, body').scrollTop($(window).scrollTop() + 1);
                setTimeout(function() {
                    $('.option_sel .button1 button, .list1.option_select select, .list1.option_select input').prop({'disabled' : false});
                }, 500);
                //ios 신규앱일경우 홈버튼 비활성화
                if(appYn == 'Y'){
                    if(appOpsyNm == 'ios'){
                        if(appType == '2016'){
                            window.location="jscall:homebtn:hide";
                        }
                    }
                }
            } else if(target == sel_button[0] && sel_button.hasClass('on') == true) {
                $('.list1.option_select.easySelect .optbox_list').css({top:0, left:0});
                $('.sel_button.on').removeClass('on');
                $('.option_sel').css({transform : 'translateY(0)'});

                if($('#opt_direct').length > 0) {
                    $('.option_sel').stop().animate({opacity : 0}, 300, function() {
                        $(this).css({visibility : 'hidden', opacity : ''});
                    });
                }

                //ios 신규앱일경우 홈버튼 활성화
                if(appYn == 'Y'){
                    if(appOpsyNm == 'ios'){
                        if(appType == '2016'){
                            window.location="jscall:homebtn:show";
                        }
                    }
                }
            }
        });
    }
});