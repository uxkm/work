//상품상세
$.fn.productSlick = function(option){
    var _self = this;
    var $selector = $(_self)
    var _default = {
        'speed' : 300,
        'autoplaySpeed' : 5000,
        'arrows' : false,
        'index' : 1,
        'paging' : true,
        'infinite' : true,
        'onSwipe' : function(e, slick){

        }
    }
    var _option = $.extend({}, _default, option)
    var $slide = null;
    var $paging = null;
    // var _index = _option.index || 0

    // $slides
    var init = function(){
        if($selector.length){
            $slide = $selector.slick(_option)
            $paging = $(_option.paging)
            onHandler()
            // setPagingHTML()
        }
    }

    var onHandler = function(){
        $slide.on('swipe', function(e,slick){
            var onSwipe = _option.onSwipe
            _index = slick.currentSlide + 1
            // setPagingHTML(_index)

            if(typeof onSwipe === 'function'){
                onSwipe(e,slick)
            }
        })
    }

    // var setPagingHTML = function(){
    //     var $items = $slide.slick('getSlick').$slides
    //     $paging.html('<span class="current">'+_index+'</span><span class="total">/ '+$items.length+'</span>')
    // }

    init()
    return $slide
}

//포토상세평
;(function(core, $, undefined){
    "use strict";
   
    var selector   = '[data-modules-cascadingGrid]',
        forEach = Array.prototype.forEach,
        win = $(window),
        name = 'detailViewerLayerPopTrigger',
        ui = core.ui,
        Widget = ui.Widget,
        Default = {
            items : '.item',
            dist : 'layer-section'
        },
        DetailViewerLayerPopTrigger = Widget.extend({
            name : name,
            init : function (element, config){
                var _ = this;
                var options = _.options = $.extend({}, Default, config);
                _.element = $(element);
                Widget.fn.init.call(_, element, options);
                _.btn = _.element.find('> ul > li > a');
                _.items = _.element.find(_.options.items);
                _.layer = $(_.createDom());
                if(!$('body').find('.product-review-detail').length){
                    $('body').append(_.layer);
                }
                _.reInit();
            },
            createDom : function(){
                var _ = this;
                var _layPopHTML = '';
                    _layPopHTML+='<div class="popup-layerwrap fulllayer product-review-detail" role="dialog" aria-label="상품평">' //2020-08-06 클래스 수정(addr-search를 fulllayer로 교체) - 조윤호
                    _layPopHTML+='    <div class="layer">'
                    _layPopHTML+='        <h2 class="large-title">포토 상품평</h2>'
                    _layPopHTML+='        <div class="layer-body">'
                    _layPopHTML+='            <div class="'+_.options.dist+' pdphotodetail" style="padding:20px;"> </div>'
                    _layPopHTML+='        </div>'
                    _layPopHTML+='        <button class="btn btn-close"><i class="icon"></i><span class="hiding">닫기</span></button>'
                    _layPopHTML+='    </div>'
                    _layPopHTML+='</div>';
                return _layPopHTML;
            },
            setDataLink : function(){
                var _ = this;
                _.btn = _.element.find('> ul > li > a');
                _.items = _.element.find(_.options.items);
                _.btn.attr('data-target', 'product-review-detail');
                _.btn.each(function(){
                    var $this = $(this);
                    
                    if (!$this.data('active')){
                        $this.layerPopTrigger({
                            'closer' : '.btn-close',
                            'beforeOpen' : function(e, dataTarget){
                                var $li = $this.closest('li')
                                var $copiedListHTML = _.getCopiedListHTML()
                                var $dist = $('.' + dataTarget).find('.'+_.options.dist)
                                $dist.html($copiedListHTML);
                                $copiedListHTML.slick({
                                    initialSlide : $li.index()
                                })
                                $copiedListHTML.find('.video-wrapper').attr('data-modules-video', '')

                                $dist.find(".thumbswrap").each(function(index, target){
                                    if ($(this).hasClass("active-slider")) return null;
                                    $(this).addClass("active-slider");

                                    var $thumb = $(this).find(".thumb").eq(0);
                                    $thumb.simpleSlider({
                                        'items': '> ul > li',
                                        'current': '+ .content + .thumbspager > .current',
                                        'total': '+ .content + .thumbspager > .total',
                                        'prev': '> .btn-wrap > .btn-prev',
                                        'next': '> .btn-wrap > .btn-next',
                                    });
                                });
                                
                                $('body').commonUi('initLibrary');
                            },
                            'beforeClose' : function(e, dataTarget){
                                var $dist = $('.' + dataTarget).find('.'+_.options.dist)
                                $dist.html('')
                            }
                        })
                    }
                })
            },
            getCopiedListHTML : function(){
                var _ = this;
                var $newItems = _.items.map(function(i,e){
                    var $contents = $(e).find('.thumbswrap').children().clone()
                    var li = document.createElement('li')
                    li.classList.add('slideitem')
                    li.classList.add('thumbswrap')
        
                    $contents.each(function(i,e){
                        li.appendChild(e)
                    })
        
                    return li
                })
                var $ul = $('<ul class="slidebanner"></ul>')
                $ul.html($newItems)
                return $ul
            },
            reInit : function(){
                var _ = this;
                _.setDataLink();
            }
        })
    ui.plugin(DetailViewerLayerPopTrigger);
})(window[LIB_NAME], jQuery);
$(function(){
    var productSlick = $('.details-wrap .slidebanner').productSlick();

    var $photoProduct = $('.pdphotolist').detailViewerLayerPopTrigger();
    var productMovieNameSpace = '.movie';
    // $('.details-wrap .slidebanner').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    //     if(currentSlide == nextSlide) return;
    //     if( nextSlide === 0){
    //         playerCtr(true);
    //         playBtn.hide();
    //     }else{
    //         playerCtr(false);
    //         playBtn.show();
    //     }
    // });
    // playBtn.on('click', function(){
    //     productSlick.slick('slickGoTo', 0)
    // })
    $(document).off(productMovieNameSpace).on('click'+productMovieNameSpace, '.call-movie', function(){
        var $this = $(this);
        var videoData = $this.data();
        var videoLayer = $(document).find('#prodetVod');
        var template = '<div class="video-wrapper _init" data-time="'+videoData.time+'" data-modules-video data-type="'+videoData.type+'" data-detailview="'+videoData.detailview+'" data-src="'+videoData.src+'">\
            <div class="_video-container">\
                <img src="'+videoData.thumbnail+'" alt="">\
            </div>\
        </div>\
        <div class="title-wrap">\
            <P>'+videoData.title+'</P>\
        </div>'
        videoLayer.find('.prodet-vod-box').append(template);
        videoLayer.find('[data-modules-video]').video({autoPlay:true});
        videoLayer.css('display', 'flex').height($(this).height()+50);
    })
    .on('click'+productMovieNameSpace, '.movie-close-btn', function(){
        var videoLayer = $(document).find('#prodetVod');
        videoLayer.find('.prodet-vod-box').html('')
        $('#prodetVod').css('display', 'none').removeAttr('style');
        $(window).trigger('scroll'+productMovieNameSpace)
        $(document.body).removeClass('ui-fixed-movie');

    })
    .on('click'+productMovieNameSpace, '#videoCtr', function(){
        var $this = $(this);
        var videoEl = $(document).find('#prodetVod [data-modules-video]');        
        if($this.hasClass('pause')){
            $this.removeClass('pause');
            videoEl.video('play')
        }else{
            $this.addClass('pause');
            videoEl.video('pause')
        }
        // videoEl.video('showPlayBtn');
    })
    .on('click', '#prodetVod ._pause', function(){
        $('#videoCtr').addClass('pause')
    })
    .on('click', '#prodetVod ._play', function(){
        $('#videoCtr').removeClass('pause')
    })
    


    function playerCtr(check){
        var target = $('#prdMainImgMovie');
        if(target.length == 0) return;
        var video = productSlick.find('[data-modules-video]');
        var playing = video.data('video')._videostatus ==="playing";
        var paused = video.data('video')._userControl;
        console.log(video.data('video')._videostatus);
        if(playing && !paused && !check ){
            video.video('pause');
        }else if(playing && !paused && check ){
            video.video('play');
        }
    }
    
    $(window).off(productMovieNameSpace).on('scroll'+productMovieNameSpace, function(e){
        var target = $('#prodetVod');
        var wrap = $('#prdMainImgMovie');
        var tab = $('#stickyTab'),
            video = target.find('[data-modules-video]');
        tab.data('sticky').options.pos = 110;
        if(video.length == 0) return;
        var pos = wrap.height() + wrap.offset().top,
            
            playing = video.data('video')._videostatus ==="playing",
            paused = video.data('video')._userControl;
            scTop = $(this).scrollTop();
            console.log(video.data('video')._pausedFlag);
        if(playing && !paused && (scTop > pos) ){
            $(document.body).addClass('ui-fixed-movie');
            video.video('showStatus')
            tab.data('sticky').options.pos = tab.data('sticky').placehiolder.offset().top -110;
        }else{
            $(document.body).removeClass('ui-fixed-movie')
            if(video.data('video')._pausedFlag){
                video.video('showPlayBtn')
            }else{
                video.video('hideStatus')
            }
            
            tab.data('sticky').options.pos = tab.data('sticky').placehiolder.offset().top -50;
        }
    })
})