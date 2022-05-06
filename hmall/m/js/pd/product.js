$(document).ready(function(){
    
    // 앱에서 혜택받기 닫기 ( 우션 현 상태 유지 )
    $(".thumbsnoti .btn-close").click(function(){
        $(".thumbsnoti").remove();
    });

    $(".purchase-box .boxcontrol").find(".btn-close").click(function(){
        $("body").find(".purchase-box").removeClass("ui-active");
    });


});


