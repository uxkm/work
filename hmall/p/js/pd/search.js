$(function(){
    
});
// 차종으로 검색
function tireResultClose(){
    var tireResult = $('.tire-result');
    tireResult.removeClass('active');
    $('#findCarBtn').focus();
}
// 사이즈 확인법 레이어
function sizeChekOpen(){
    var sizeChekLayer = $('.size-check-layer');
    sizeChekLayer.addClass('active').attr('tabindex','0').focus(sizeChekLayer);
}
function sizeChekClose(){
    var sizeChekLayer = $('.size-check-layer');
    var sizeChekOpenLayer = $('#sizeCheck');
    sizeChekLayer.removeClass('active').focus(sizeChekOpenLayer).removeAttr('tabindex');
}