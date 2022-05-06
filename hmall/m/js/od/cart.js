$(function(){
    $(".cart-info > .major-headings").on("click",function(){
        $(this).toggleClass("selected");
    });
    $(".soldout-item > a").on("click",function(){
        $(this).parent().toggleClass("selected");
        $(this).parent().next().toggleClass("selected");
    });
    $(".toast .btn-close").on("click",function(){
        $(this).parent().hide();
    });
    $(".pditem").each(function(i, e){
        var pdItem = $(e);
        var pdFuncBtn = pdItem.find(".pdfunc > .btn-prop");
        var pdPropChange = pdItem.find(".prop-change");
        pdFuncBtn.on("click", function(){
            $(this).toggleClass("selected");
            pdPropChange.toggleClass("selected");
        })
    })
    $(".util-option .btn-total").on("click",function(){
        $(this).toggleClass("selected");
        $(".util-option .result").toggleClass("selected");
        $(".floating-menu .floating-group, .floating-menu .btn-topmove").toggleClass("cart-top");
        $(".floating-menu.down .floating-group, .floating-menu.down .btn-topmove").toggleClass("cart-down");
        $(".floating-menu.up .floating-group, .floating-menu.up .btn-topmove").toggleClass("cart-up");
    });
})
