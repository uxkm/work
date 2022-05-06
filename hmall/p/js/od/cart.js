$(function(){
    $(".cart-info > .major-headings").on("click",function(){
        $(this).toggleClass("selected");
    });
    $(".soldout-item > a").on("click",function(){
        $(this).parent().toggleClass("selected");
        $(this).parent().next().toggleClass("selected");
    });
    // $(".soldout-item > a").on("click",function(){
    //     $(this).parent().toggleClass("selected");
    //     $(this).parent().next().toggleClass("selected");
    //     $(this).parent().next().toggleClass("selected");
    //     $(this).parent().next().toggleClass("selected");
    // });
    $(".toast .btn-close").on("click",function(){
        $(this).parent().hide();
    });
    $(".pdlist-wrap").each(function(i, e){
        var pdItem = $(e);
        var pdFuncBtn = pdItem.find(".pdfunc > .btn-prop");
        var pdPropChange = pdItem.find(".prop-change");
        pdFuncBtn.on("click", function(){
            $(this).toggleClass("selected");
            pdPropChange.toggleClass("selected");
        })
    });
	$('.util-option.sticky').sticky({
		"padding": -100,
		"breakPoint" : ".cfoot"
	});
})
