$(function(){
    var detailMenu = $('.detail-body');
    var cateGroup = $('.categp');
    /* var popularList = $('.popular');
    var keywordTag = $('.keyword-tag'); */
    detailMenu.each(function (i, e) {
        var listMenu = $(e).find('.listmenu');
        var listBtn = listMenu.find('>a');
        var listBox = $(e).find('>.detailbox');
        listBtn.on('click focusin', function () {
            $(this).parent().addClass('active').siblings().removeClass('active');
            return false;
        });
    });
    // cateGroup.find('li').each(function(i, e){
    //     $(e).children().length > 1 ? $(e).addClass('arr') : $(e).addClass('narr');
    //     $(e).on('click',function(){
    //         if( $(e).is('.arr') ){
    //             var speed = 200;
    //             var open = 'selected';
    //             $(e).addClass(open);
    //             $(e).find('li').removeClass(open).find('.dep').slideUp(speed);
    //             $(e).siblings().removeClass(open).find('.dep').slideUp(speed).find('li').removeClass(open);
    //             return false;
    //         }
    //     });
    // });

    // 개발에서 활성화 처리하기 때문에 삭제
    /* popularList.find('li').each(function(i, e){
        $(e).on('click',function(){
            $(e).addClass('selected').siblings().removeClass('selected');
            return false;
        });
    });
    keywordTag.find('li').each(function(i, e){
        $(e).on('click',function(){
            $(e).addClass('selected').siblings().removeClass('selected');
            return false;
        });
    }); */
});