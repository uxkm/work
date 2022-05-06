/*
 * custom input
 * */
$(document).on("click", "[class*='custom-input']", function(e){
	if($(this).hasClass("disabled")) return;
	
	if(!$(this).hasClass("checked")){
		$(this).addClass("checked");
		$(this).children("input").prop({ checked : "checked" });
		
		// check all
		if($(this).hasClass("all")){
			var _inputID = $(this).children("input").attr("id").split("-all")[0];
			$("input[id^="+ _inputID +"]").closest("label:not('.all'):not('.checked')").trigger("click");
		}
		
	} else {
		$(this).removeClass("checked");
		$(this).children("input").prop({ checked : "" });
		
		// uncheck all
		if($(this).hasClass("all")){
			var _inputID = $(this).children("input").attr("id").split("-all")[0];
			$("input[id^="+ _inputID +"]").closest("label:not('.all')").trigger("click");
		}
	}
	
	e.preventDefault();
});

/*
 * loading image
 * */
function page_loading(){
	var _dimLoading = '';
	_dimLoading += "<img class='page-loading' src='"+ imageServer +"/hmall/co/loadingfull_h.gif' style='position:fixed; width:40px; top:50%; left:50%; margin-top:-20px; margin-left:20px; z-index:99999;'>";
	_dimLoading += "<div class='page-loading-dim' style='position:fixed; top:0; width:100%; height:100%; display:block;  background:#000; -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=40)\"; -moz-opacity: 0.4; -khtml-opacity: 0.4; opacity: 0.4; z-index:98888;'></div>";
	$("body").append(_dimLoading);
}

function remove_page_loading(){
	$(".page-loading").remove();
}

function remove_page_dim(){
	$(".page-loading-dim").remove();
}

/*
 * 1:1상담 첨부파일 크게보기
 * */
$(document).on("click", ".mypage_customer_request ._attachment > a", function(){
    var _idx = $(this).index();

    $("._enlarge-wrap > ._image-wrap ._slide").append($(this).parent().find("img").clone());

    $("._enlarge-wrap > ._image-wrap ._slide").spSlider({
        anispeed : 0,
        showcount : 1,
        arrow : true,
        arrowPosition : "after"
    });

    for(var i=0; i<_idx; i++){
        $("._enlarge-wrap ._image-wrap .slider-direction button.slider-next").trigger("click");
    }

    $("._enlarge-wrap").css({ visibility : "visible" });

    return false;
});

$(document).on("click", "._enlarge-wrap ._image-wrap ._slider-close", function(){
    $("._enlarge-wrap").removeAttr("style");
    $("._enlarge-wrap > ._image-wrap ._slide").spSlider("destroy").empty();

    return false;
});

$(function(){
	// 180205 - 컨텐츠 레이아웃 임의 변경 방지 - rlatkdals
	$("[contenteditable]").removeAttr("contenteditable");
});
