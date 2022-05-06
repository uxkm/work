/* UIComponent start ********************************************************************/

/* UIComponent mobile start */

/* UIComponent mobile.slick start */
$.fn.useSlick = function(option){
    var _self = this;
    var $selector = $(this);

    /*
        slick 유형 7가지
    */
    var types = {
        centerauto : {
            dots: false,
            arrows: false,
            autoplay: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
        },
        noncount : {
            dots: false,
            arrows: false,
            autoplay: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
        },
        leftalign : {
            dots: false,
            arrows: false,
            autoplay: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: false,
            variableWidth: true,
        },
        countauto : {
            dots: false,
            arrows: false,
            autoplay: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
        },
        totalcurrent : {
            dots: false,
            arrows: false,
            autoplay: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
        },
        leftright : {
            dots: true,
            arrows: true,
            autoplay: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
        },
        dotpaging : {
            dots: true,
            arrows: false,
            autoplay: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
        },
        default : {
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
        }
    }
    
    var _default = {
        'type' : 'centerauto',
        'footer' : null,
        'useFooter' : true,
        'stopBtn' : '.btn-stop',
        'playBtn' : '.btn-play',
        'speed' : 300,
        'autoplaySpeed' : 5000,
        'onClickPause' : function(e, $stopBtn, $playBtn){
            $stopBtn.toggleClass('active')
            $playBtn.toggleClass('active')
        },
        'onClickPlay' : function(e, $stopBtn, $playBtn){
            $playBtn.toggleClass('active')
            $stopBtn.toggleClass('active')
        },
        //그밖에 slick 옵션 추가 가능
    }

    var _option = $.extend({}, _default, types[option ? option.type : 'default'], option)
    var $footerSelector = _option.footer ? $(_option.footer) : $selector.next()
    var $swiper = $selector.closest('.swiper-wrapper')
    var _slick;

    var initInSwipe = function(){
        /*
            1.swipe를 생성할 때 안에 loop 옵션이 켜져 있으면 첫번째, 마지막 슬라이드가 자동복제된다.
            2.복제된 슬라이드가 slick일 경우 event는 복제하지 못하는 경우 발생

            해결 (완벽하지 않음)
            1.swipe를 먼저 생성 후 slick을 생성한다.
            2.slick의 index가 변할때 마다 duplicate 된 slick 또한 index를 맞춰준다.
        */
        _slick.on('afterChange', function(e, slick, currentIndex){
            var $slicks = _slick.slick('getSlick')
            $slicks.slickGoTo(currentIndex)
            _slick.slick('slickPause')
            _slick.slick('slickPlay')
        })
    }

    var setNewOption = function(option){
        if(option){
            _option = $.extend(_option, option)
        }
    }

    var onHandlePause = function(){
        var $stopBtn = $selector.parent().find(_option.stopBtn);
        var $playBtn = $selector.parent().find(_option.playBtn);
        $stopBtn.on('click', function(e){
            console.log('stop')
            _slick.slick('slickPause')
            var onClickPause = _option['onClickPause']
            if(typeof onClickPause === 'function'){
                onClickPause(e, $stopBtn, $playBtn)
            }
        })
        $playBtn.on('click', function(e){
            console.log('play')
            _slick.slick('slickPlay')
            var onClickPlay = _option['onClickPlay']
            if(typeof onClickPlay === 'function'){
                onClickPlay(e, $stopBtn, $playBtn)
            }
        })
    }

    this.setSlick = function(){
        if( $selector.find(".slick-slide").length !== 1 ) {
            var addOnFunc = _self.slickAddOns[_option.type]
            if(_option.useFooter && typeof addOnFunc === 'function'){
                addOnFunc.bind(_self)($selector)
            }
            _slick = $selector.slick(_option); 
        }
    }

    this.slickAddOns = {
        centerauto : function($selector){
            var _self = this;
            $selector.on("init reInit",function(e,slick){
                try {
                    $footerSelector.find('strong').html(slick.$slides.length);
                } catch(m){
                    console.log(m);
                }
            });
        },
        countauto : function($selector){
            var _self = this;
            $selector.on("init reInit afterChange",function (event, slick, currentSlide, nextSlide){
                var i = (currentSlide ? currentSlide : 0) + 1;
                try {
                    $footerSelector.html('<em>' + i + '</em>' + '/' + '<strong>' + slick.$slides.length + '</strong>');
                } catch(m){
                    console.log(m);
                }
                
            });
        },
        totalcurrent : function($selector){
            var _self = this;
            $selector.on("init reInit afterChange",function (event, slick, currentSlide, nextSlide){
                var i = (currentSlide ? currentSlide : 0) + 1;
                try {
                    $footerSelector.html('<span>전체</span><em>' + i + '</em>' + '/' + '<strong>' + slick.$slides.length + '</strong>');
                } catch(m){
                    console.log(m);
                }
                
            });
        }
    }

    this.init = function(option){
        setNewOption(option)
        _self.setSlick()
        if($swiper.length){
            initInSwipe();
        }
        if(_option.autoplay){
            onHandlePause()
        }
    }

    this.init(_option)
    return _slick
}
/* UIComponent mobile.slick end */

/* UIComponent mobile - floatingmenu start */
$.fn.floatingmenu = function(option){
    var _self = this;
    var $selector = $(this);
    var _default = {
        'name' : 'floatingmenu',
        'upCallback' : function(){
            if(UI && typeof UI.timerAction !== 'undefined'){
                UI.timerAction.floatingGroup.resetTimeAction()
            }
        },
        'downCallback' : function($selector){
            console.log("downCallback ::: ", $selector)
        }
    }
    var _option = $.extend({}, _default, option)

    function init(){
    }

    this.up = function(){
        $selector.show();
        if( !$selector.hasClass("up") ){
            $selector.addClass("up");
            $selector.removeClass("down");
        }
        var upCallback = _option['upCallback']
        if(typeof upCallback === 'function'){
            upCallback($selector)
        }
    }

    this.down = function(){
        $selector.show();
        if( !$selector.hasClass("down") ){
            $selector.removeClass("up");
            $selector.addClass("down");
        }
        var downCallback = _option['downCallback']
        if(typeof downCallback === 'function'){
            downCallback($selector)
        }
    }

    init();
    return this
}
/* UIComponent mobile - floatingmenu end */

/* UIComponent mobile - timerAction start */
$.fn.timerAction = function(option){
    var _self = this;
    var $selector = $(this);
    var _default = {
        'name' : 'timer',
        'timer' : 5000,
        'speed' : 0,
        'actionType' : 'hide', //hide
    }
    var actionTypes = {
        'hide' : 'show',
        'fadeOut' : 'fadeIn',
    }
    var _option = $.extend({}, _default, option)
    var _timer = null;

    var init = function(){
        _self.resetTimeAction()
    }

    this.getActions = function(){
        return {
            timerAction : _option.actionType,
            deaction : actionTypes[timerAction],
        }
    }

    this.resetTimeAction = function(){
        var timerAction = _option.actionType;
        var deaction = actionTypes[timerAction]

        if(timerAction && deaction){
            if(_timer != null){
                if(typeof $selector[deaction] === 'function'){
                    $selector[deaction](_option.speed)
                }
                clearTimeout(_timer);
            }
            
            _timer = setTimeout(function(){
                if(typeof $selector[timerAction] === 'function'){
                    $selector[timerAction](_option.speed)
                }
            }, _option.timer);
        }
    }

    init()

    return this
}
/* UIComponent mobile - timerAction end */

/* UIComponent mobile - navTabBar start */
$.fn.navTabBar = function(option){
    var _self = this;
    var $selector = $(this)
    var _default = {
        'className' : 'fixed',
    }
    var _option = $.extend({}, _default, option)
    
    this.up = function(){
        if(!$selector.hasClass(_option.className)){
            $selector.addClass(_option.className);
        }
    }
    this.down = function(){
        $selector.removeClass(_option.className);
    }
    return this
}
/* UIComponent mobile - navTabBar end */

/* UIComponent mobile - navScroller start */
$.fn.navScroller = function(option){
    var _self = this;
    var _default = {
        'index' : 0,
        'activeClass' : 'current',
        'autoToCenter' : true,
        'scrollerClass' : 'nav-scroller',
        'list' : 'ul li',
        'root' : 'body',
        'width' : 0,
        'name' : '',
        'onClick' : function(e, index){
            if(typeof AppMain !== 'undefined' && AppMain.swiper){
                AppMain.swiper.slideTo(index+1);
            }
        }
    }
    var _option = $.extend({}, _default, option)
    var _winHarf = $(_option.root).width()/2;

    var $selector = $(this)
    var $scroller = $selector.find('.'+_option.scrollerClass);
    var $navList = $selector.find(_option.list);

    var _pos;
    var _wrapWidth = 0;
    // var _offset = $selector.offset() || {top:0, left:0}
    var _selectedIndex = _option.index

    var init = function(){
        if(!$navList.length) {
            console.log('navScroller. No exist element. "ul li"')
        }
        _self.resetWidth();
        onClickHandler();
        _self.select(_selectedIndex)
    }

    var onClickHandler = function(e){
        $selector.on('click', 'li > a', function(e){
            e.preventDefault()
            e.stopPropagation()
            var $li = $(e.target).closest('li');
            var index = $li.index()
            var onClickCallback = _option.onClick
            _self.select(index)

            if(typeof onClickCallback === 'function'){
                onClickCallback(e, index, $navList.length)
            }
        })
    }

    this.goCenter = function(){
        var $selected = $navList.eq(_selectedIndex)
        var _targetLeft = 0;
        var _selectedHalfWidth = $selected.outerWidth()/2

        for (var i=0; i < _selectedIndex; i++) {
            var $e = $navList.eq(i)
            var maginLeft = parseInt($e.css('margin-left').replace('px', ''))
            var maginRight = parseInt($e.css('margin-right').replace('px', ''))

            _targetLeft += ($navList.eq(i).outerWidth() + maginLeft + maginRight)
        }

        if((_targetLeft + _selectedHalfWidth) <= _winHarf) { // left
            _pos = 0;
        } else if ((_wrapWidth - _targetLeft - _selectedHalfWidth) <= _winHarf) { //right
            _pos = _wrapWidth-$('body').width();
        } else {
            _pos = _targetLeft - _winHarf + (_selectedHalfWidth);
        }
        setTimeout(function(){
            $scroller.animate({scrollLeft:_pos},300)
        }, 200);
    }

    this.resetWidth = function(){
        _wrapWidth = 0;
        $navList.each(function(i,e){
            var $navItem = $(e)
            var $navItemChild = $(e).find('> *')
            var $target = $navItem.outerWidth() < $navItemChild.outerWidth() ? $navItemChild : $navItem //li와 li의 자식중 넓이가 넓은 쪽으로 선택
            var maginLeft = parseInt($target.css('margin-left').replace('px', ''))
            var maginRight = parseInt($target.css('margin-right').replace('px', ''))
            _wrapWidth += (_option.width > 0 ? _option.width : ($target.outerWidth() + maginLeft + maginRight)) 
        })
        $selector.find('ul').css('width', _wrapWidth);
    }

    this.select = function(index){
        $navList.removeClass(_option.activeClass).eq(index).addClass(_option.activeClass)
        _selectedIndex = index
        _option.autoToCenter && _self.goCenter(_selectedIndex)
    }

    init()

    return this
}
/* UIComponent mobile - navScroller end */

/* UIComponent mobile - layerPopTrigger start */
$.fn.layerPopTrigger = function(option){
    var _default = {
        'ease' : 'swing',
        'speed' : 500,
        'closer' : '.lyclose',
        'beforeOpen' : function(){
            if(typeof UI !== 'undefined' && UI.windowScroll){
                console.log('disabled')
                UI.windowScroll.disable()
            }
        },
        'beforeClose' : function(){
            if(typeof UI !== 'undefined' && UI.windowScroll){
                console.log('enable')
                UI.windowScroll.enable()
            }
        },
        'afterOpen' : null,
        'afterClose' : null,
    }
    var _option = $.extend({}, _default, option)

    return this.each(function(i, e){
        var $selector = $(e).closest("[data-target]").length === 0 ? $(e).closest("[data-target]") : $(e);
        var target =  $selector.attr("data-target");
        var $target = $('.'+target).eq(0) //하나만 선택
        var $popWrap = $target.children('div')
        var $formElements = $target.find('[tabindex], a, input, button')
        var $closer = $target.find(_option.closer);

        var init = function(){
            if(!$selector.length){
                console.log('No element. "' + _option['selector'] + '"')
            } else {
                onOpenHandler()
                onKeyHandler()
                onCloseHandler()
            }
        }

        var onOpenHandler = function(){
            $selector.on('click', function(e){
                e.stopPropagation()

                var $el = $(this);
                if(target){
                    var beforeOpen = _option['beforeOpen'];
                    var afterOpen = _option['afterOpen'];
    
                    if(typeof beforeOpen === 'function'){
                        if(beforeOpen(e, target) === false){
                            //리턴값이 false면 실행하지 않음
                            return
                        }
                    }
    
                    $target
                        .fadeTo(_option['speed'], 1, _option['ease']);

                    $popWrap
                        .attr("tabindex", "0")
                        .focus()

                    if(typeof afterOpen === 'function'){
                        afterOpen(e, target)
                    }

                    var $focusTarget = $(e.target).closest('a, button, [tabindex]')
                    $closer.data('data-focus-target', $focusTarget[0])
                }
                return false;
            })
        }

        var onKeyHandler = function(e){
            $target.off('keydown').on('keydown', function(e){
                if(e.key === 'Tab'){
                    var firstForm = $popWrap[0]
                    var lastForm = $formElements[$formElements.length-1]
                    
                    if(e.shiftKey){//백탭
                        if(firstForm === e.target){
                            e.preventDefault()
                            lastForm.focus()
                        }
                    } else {//탭
                        if(lastForm === e.target){
                            e.preventDefault()
                            firstForm.focus()
                        }
                    }
    
                }
            })
        }

        var onCloseHandler = function(){
            $closer.off('click').on('click', function(e){
                e.stopPropagation()
                console.log('close popup : ', e)
                var beforeClose = _option['beforeClose'];
                var afterClose = _option['afterClose'];
                
                if(typeof beforeClose === 'function'){
                    if(beforeClose(e, target) === false){
                        //리턴값이 false면 실행하지 않음
                        return
                    }
                }
    
                $target
                    .fadeOut(200)
                    .find(".layer")
                    .removeAttr("tabindex");
    
                if(typeof afterClose === 'function'){
                    afterClose(e, target)
                }

                $closer.data().dataFocusTarget.focus()
                return false;
            }) 
        }
        init()
    })
}
/* UIComponent.mobile.layerPopTrigger end */

/* UIComponent common scrollManager start */
$.fn.scrollManager = function(option){
    var _self = this
    var $selector = $(this) 
    var _default = {
        name : undefined,
    }
    var _option = $.extend({}, _default, option)
    var _disabeld = false
    var name = _option['name'] ? '.'+_option['name'] : ''
    var customScroll = jQuery.Event('customScroll' + name);
    var customResize = jQuery.Event('customResize'+ name);
    var currentY = -1, moveY = -1, currentX = -1, moveX = -1, direction;
    var _timer = null

    this.enable = function(){
        _disabeld = false
        if($selector[0] === window){
            $('body').removeClass('hidden')
        } else {
            $selector.removeClass('hidden')
        }
        return $selector
    }

    this.disable = function(){
        _disabeld = true;
        if($selector[0] === window){
            $('body').addClass('hidden')
        } else {
            $selector.addClass('hidden')
        }
        return $selector
    }

    this.getDisabled = function(){
        return _disabeld
    }

    $selector.on('touchstart',function(e){
        if(_disabeld) {
            return
        }
        currentY=e.originalEvent.changedTouches[0].screenY;
        currentX=e.originalEvent.changedTouches[0].screenX;
    });

    $selector.on('mousewheel',function(e){
        if(!_disabeld) {
            customScroll.originalEvent = e.originalEvent
    
            if(e.originalEvent.deltaY < 10){
                customScroll.delta = 1;
                customScroll.direction = "up";
            } else {
                customScroll.delta = -1;
                customScroll.direction = "down";
            }
        }
    })

    $selector.on('touchmove',function(e){
        if(!_disabeld) {
            customScroll.originalEvent = e.originalEvent
            moveY=e.originalEvent.changedTouches[0].screenY;

            if(currentY === -1) currentY = moveY
    
            if(currentY > moveY && direction === 'vertical'){
                customScroll.delta = 1;
                customScroll.direction = "down";
            } else if(currentY < moveY && direction === 'vertical'){
                customScroll.delta = -1;
                customScroll.direction = "up";
            }
    
            if(!direction){
                moveX=e.originalEvent.changedTouches[0].screenX;
                if(currentX === -1) currentX = moveX
    
                const absX = Math.abs(Math.abs(currentX) - Math.abs(moveX))
                const absY = Math.abs(Math.abs(currentY) - Math.abs(moveY))
                
                if(absX > 0 || absY > 1){
                    direction = absX >= absY ? 'horizontal' : 'vertical'
                }
            }
            currentY = moveY;
        }
    });

    $selector.on('touchend',function(e){
        direction = undefined
    })

    $selector.on('scroll',function(e){
        //mousewheel에서는 정확한  scrollTop 수치가 나오지 않음
        //mousewheel에서는 방향만 얻어내고 scroll 이벤트에서 customScroll를 trigger
        if(!_disabeld) {
            customScroll.scrollTop = $selector.scrollTop()
            $(window).trigger(customScroll)
        }
    })

    $selector.on('resize',function(e){
        if(!_disabeld) {
            clearTimeout(_timer)
            _timer = setTimeout(function(){
                $(window).trigger(customResize)
            }, 200)
        }
    })

    return this

}
/* UIComponent common scrollManager end */

/* common UI - topButtonTrigger start */
$.fn.topButtonTrigger = function(option){
    var _self = this;
    var $selector = $(_self)
    var _default = {
        top : 40,
        speed : 500,
    }
    var _option = $.extend({}, _default, option)

    $selector.on('click', function(e){
        e.stopPropagation()
        _self.moveTop(_option['top'])
    })

    _self.moveTop = function(target){
        var top;
        if(typeof target === 'number'){
            top = target
        } else if(typeof target === 'string'){
            var $target = $(target);
            if($target.length){
                var rect = $target[0].getBoundingClientRect()
                top = rect.top
            }
        }
        console.log("_self.moveTop -> top", top)
        $('html,body').animate({ scrollTop: top}, _option['speed']);
    }

    return this
}
/* common UI - topButtonTrigger end */

/* UIComponent mobile - tabmenu start */
$.fn.tabmenu = function(option){
    var _default = {
        'index' : 0,
        'activeClass' : 'selected',
        'ready' : null,
        'before' : null,
        'after' : null,
    }
    var _option = $.extend({}, _default, option)
    var _scroll = _option['scroll'] || false;

    return this.each(function(i,e){
        var $selector = $(e);
        var $menu = $selector.find('> ul > li > a');
        var $contents = [];
        var _index = _option.index

        function init(){
            console.log("init -> init")
            setContents();
            delegateClick();
            setIndex(_index);
    
            if(_scroll){
                $selector.find('> ul').addClass("scroll");
            }
        };

        function getTotal(){
            return $selector.find('> ul > li > a').length //dynamic
        }
    
        function delegateClick(){
            $selector.off('click').on('click', '> ul > li > a', function(e){//dynamic
                e.stopPropagation();
                e.preventDefault();
                console.log("delegateClick -> e", e)
                onClickButtonHandler(e, this);
            })
        };

        function setContents(){
            var $childTab =  $selector.children('.tabcnt');
            var $siblings =  $selector.siblings('.tabcnt');

            if($childTab.length){
                $contents = $childTab
            } else {
                $contents = $siblings
            }
        };
    
        function view(index){
            $menu.closest('li')
                .removeClass(_option.activeClass)
                .attr('aria-selected' , false)
                .eq(index)
                .addClass(_option.activeClass)
                .attr('aria-selected' , true);

            $contents
                .removeClass(_option.activeClass)
                .attr('aria-selected' , false)
                .eq(index)
                .addClass(_option.activeClass)
                .attr('aria-selected' , true);
        };
    
        /* handler */
        function onClickButtonHandler(e,target){
            var $target = $(target).closest('li');
            var index = $target.index()
            var beforeCallback = _option['before']
            var afterCallback = _option['after']

            if(typeof beforeCallback === 'function'){
                if(beforeCallback(e, $target, _index) === false){
                    //before에서 false를 리턴하면 탭동작을 막는다
                    return
                }
            }
            setIndex(index);
            if(typeof afterCallback === 'function'){
                afterCallback(e, $target, _index)
            }
        }
    
        var setIndex = function(index){
            if(index > getTotal() - 1){
                return;
            }
            _index = index
            view(index);
        };
    
        init()
    })
}
/* UIComponent mobile - tabmenu end */

/* UIComponent common fontResizer start */
$.fn.fontResizer = function(option){
    var _self = this
    var _default = {
        name : undefined, //font-resize
        plus : '.btn-fontplus',
        minus : '.btn-fontminus',
        targets : ['pdname', 'pdprice'],
        step : 0,
        onSizeup : function(){
            if(typeof UI !== 'undefined' && UI.timerAction && UI.timerAction.floatingGroup){
                UI.timerAction.floatingGroup.resetTimeAction()
            }
        },
        onSizedown : function(){
            if(typeof UI !== 'undefined' && UI.timerAction && UI.timerAction.floatingGroup){
                UI.timerAction.floatingGroup.resetTimeAction()
            }
        },
    }
    var _option = $.extend({}, _default, option)
    var _totalSteps = [100, 125, 150] //percent
    var numReg = /(\-?[0-9]{0,}\.?[0-9]{0,})(.+)/
    var $targets = (function(targets){
        if(Array.isArray(targets)){
            return $(targets.map(function(cls){
                return '.'+ cls
            }).join(',')).find('*').addBack()
        } else if(typeof isArray === 'string'){
            return $('.'+targets)
        }
    })(_option.targets)

    return this.each(function(i, e){
        var $selector = $(e) 
        var $btnPlus = $selector.find(_option.plus)
        var $btnMinus = $selector.find(_option.minus)
        var _currentStep = _option.step;

        var init = function(){
            setFontSizeData()
            onClickHandler()
            setDisabled(_currentStep)
        }

        var setFontSizeData = function(){
            $targets.each(function(i,e){
                var computedStyle = getComputedStyle(e)
                var lineHeightInfos = computedStyle.lineHeight.match(numReg)
                var fontInfos = computedStyle.fontSize.match(numReg)
                
                $(e).data({
                    'line' : lineHeightInfos[1],
                    'lineUnit' : lineHeightInfos[2],
                    'size' : fontInfos[1],
                    'unit' : fontInfos[2],
                })
            })
        }
    
        var onClickHandler = function(){
            $btnPlus.off('click').on('click', function(e){
                if(_currentStep < _totalSteps.length-1){
                    var onSizeup = _option.onSizeup
                    _currentStep += 1
                    setSize(_currentStep)
                    setDisabled()
                    if(typeof onSizeup === 'function'){
                        onSizeup(e)
                    }
                }
            })
            $btnMinus.off('click').on('click', function(e){
                if(_currentStep > 0){
                    var onSizedown = _option.onSizedown
                    _currentStep -= 1
                    setSize(_currentStep)
                    setDisabled()
                    if(typeof onSizedown === 'function'){
                        onSizedown(e)
                    }
                }
            })
        }

        var setSize = function(index){
            $targets.each(function(i,e){  
                var data = $(e).data()  
                var line = data.line
                var lineUnit = data.lineUnit
                var size = data.size
                var unit = data.unit

                if(unit === 'px'){
                    var totalSize = size * _totalSteps[_currentStep] / 100;
                    e.style.fontSize = totalSize + unit
                }

                if(lineUnit === 'px'){
                    var totalSize = line * _totalSteps[_currentStep] / 100;
                    e.style.lineHeight = totalSize + lineUnit
                }
            })
        }

        var setDisabled = function(){
            $btnPlus.prop('disabled', false)
            $btnMinus.prop('disabled', false)
            if(_currentStep === 0){//0 1 2 - 3
                $btnMinus.prop('disabled', true)
            } else if(_currentStep === _totalSteps.length - 1){
                $btnPlus.prop('disabled', true)
            }
        }

        init()
    })
}
/* UIComponent common fontResizer end */

/* UIComponent common simpleAccordian start */
$.fn.simpleAccordian = function(option){
    var _default = {
        'itemSelector' : '.accitem',
        'type' : 'list',
        'trigger' : '.accordion-trigger',
        'selectedClass' : 'selected',
        'panel' : '.accordion-panel'
    }
    var _option = $.extend({}, _default, option)
    var $btns = $(this).find(_option.trigger)
    var types = {
        'list' : {//각각의 panel을 한번 더 감싼 div가 하나 더 있을 경우
            getAccordianItemsFromRoot : function($e){
                return $e.children(_option.itemSelector).children().not(_option.panel)
            },
            getCurrentPanelByClickedTarget : function($e){
                return $e.closest(_option.itemSelector)
            }
        },
        'plain' : {//trigger와 panel 들이 모두 같은 레벨에 있을때
            getAccordianItemsFromRoot : function($e){
                return $e.children().not(_option.panel)
            },
            getCurrentPanelByClickedTarget : function($e){
                return $e.parent().next(_option.panel)  
            }
        }
    }

    return this.each(function(i,e){
        var $selector = $(e)

        var init = function(){
            onClickHandler()
        }

        var onClickHandler = function(){
            var accordion = types[_option.type]

            if(accordion){
                accordion
                    .getAccordianItemsFromRoot($selector)
                    .on('click', _option.trigger, function(){
                        var $this = $(this)
                        var $item = accordion.getCurrentPanelByClickedTarget($this)
                        $btns.attr('aria-expanded', false)
                        
                        if($item.hasClass(_option.selectedClass)){
                            contract($item)
                        } else {
                            contract($item.siblings('.'+_option.selectedClass))
                            expend($item)
                            $this.attr('aria-expanded', true)
                        }
                    })
            }
        }

        var expend = function($item){
            $item.addClass(_option.selectedClass)
        }

        var contract = function($item){
            $item.removeClass(_option.selectedClass)
        }

        init()
    })
}
/* UIComponent common simpleAccordian end */

/* common UI - simpleSlider start*/
$.fn.simpleSlider = function(option){
    var _default = {
        'index' : 0,
        'items' : '> div > ul > li',
        'current' : '.numbering .current',
        'total' : '.numbering .total',
        'prev' : '.btn-prev',
        'next' : '.btn-next',
    }
    var _option = $.extend({}, _default, option)

    return this.each(function(i,e){
        var $selector = $(e);
        var $items = $selector.find(_option.items)
        var _length = $items.length
        var _index = _option.index || 0

        var init = function(){
            onClickHandler()
            showItemByIndex(_option.index)
            setPaging(_index)
        }

        var onClickHandler = function(){
            $selector.off('click').on('click', _option.prev, function(e){
                e.stopPropagation()
                var prevIndex = (_length+_index-1)%_length
                showItemByIndex(prevIndex)
            })
            $selector.off('click').on('click', _option.next, function(e){
                e.stopPropagation()
                var nextIndex = (_index+1)%_length
                showItemByIndex(nextIndex)
            })
        }

        var setPaging = function(index){
            $selector.find(_option.current).text(index+1)
            $selector.find(_option.total).text(_length)
        }
        
        var showItemByIndex  = function(index){
            _index = index
            $items.hide().eq(index).show()
            setPaging(index)
        }

        init()
    })    
}
/* common UI - simpleSlider end*/

/* common UI - simpleToast start*/
$.fn.simpleToast = function(option){
    var _self = this;
    var _default = {
        'text' : '텍스트를 입력하세요',
        'className' : 'common-toast-view',
        'type' : 'center',
        'time' :  2000,
    }
    var _option = $.extend({}, _default, option)
    var $selector = $(_self)
    var $toastWrap


    var init = function(){
        if(!$selector.find('.'+_option.className).length){
            $selector.append('<div class="'+_option.className+'"></div>')
        }
        $toastWrap = $selector.find('.'+_option.className).eq(0)
    }

    _self.createNewToast = function(text){
        var $text = $('<p class="toast-item"><span>'+text+'</span></p>')
        $toastWrap.append($text)

        $text.one('transitionend click', function(){
            $(this).remove()
        })

        setTimeout(function(){
            $text.css('opacity', 0)
        }, _option.time)

        // setTimeout(function(){
        //     $text.remove()
        // }, _option.time + 3000)
    }

    _self.removeAllToast = function(){
        $toastWrap.html('')
    }

    init()

    return _self
}
/* common UI - simpleToast end*/


/* UIComponent mobile end */

/* UIComponent end ********************************************************************/
window.addEventListener('message', function(e) {
    console.log('parent message');
    console.log(e.data); // { childData : 'test data' }
    console.log("e.origin : " + e.origin); //http://123.com(자식창 도메인)
  
});

//공통 구현부
var UI = UI || {}
$(function(){
    /* common iframe start */
    // 문서내에 iframe이 있을 경우 특수 처리.
    var $iframes = $('iframe')
    if($iframes.length){
        var addIframeFunc = function(iframe){
            var sub = iframe.contentDocument ? iframe.contentDocument : iframe.contentWindow.document
            $(sub.body).scrollManager({
                'name' : 'iframe'
            })
        }
        $iframes.each(function(i,e){
            e.addEventListener('load', function(){
                addIframeFunc(e)
                autoSetIframeHeight(e)
            })
        })

        $(window).on('customScroll.iframe', scrollAction)
    }
    /* common iframe end */

    /* mobile 공통 navScroller start */
    UI.navScroller = $('.navwrap').navScroller({
        'index' : 0,
        'autoToCenter' : true,
        'name' : 'global',
    })
    /* mobile 공통 navScroller end */

    /* 공통 scrollManager start */
    // UI.windowScroll = new UIComponent common scrollManager();
    // scrollManager : 스크롤을 
    UI.windowScroll = $(window).scrollManager({
        name : 'global'
    })
    $(window).on('customScroll.global', scrollAction)
    $(window).on('customResize.global', function(e){
        if($iframes.length){
            $iframes.each(function(i,e){
                autoSetIframeHeight(e)
            })
        }
    })
    /* //공통 scrollManager end */

    /* mobile 공통 floatingmenu start */
    UI.floatingMenu = $('.floating-menu').floatingmenu({
        timer : 5000,
    })
    /* //mobile 공통 floatingmenu end */

    /* mobile 공통 timerAction start */
    // timerAction : 일정기간이 지나면 특정 액션 실행.
    // resetTimeAction을 실행하면 시간을 리셋하고 반대되는 액션을 실행한다.
    UI.timerAction = {}
    UI.timerAction.floatingGroup = $('.floating-group, .btn.btn-topmove').timerAction({
        'action' : 'hide',
        'speed' :  200,
        'timer' : 5000
    })
    /* mobile 공통 timerAction start */


    /* 공통 topButtonTrigger 구현 start */
    UI.topButtonTrigger = $('.btn-topmove').topButtonTrigger({
        'top': 0,
        'speed' : 100
    })
    /* 공통 topButtonTrigger 구현 end */


    /* 공통 tabmenu 구현 start */
    UI.tabmenu = $('.tab').tabmenu()
    /* 공통 tabmenu 구현 end */
    

    /* mobile 공통 navTabBar start */
    UI.navTabBar = $('.nav-tabbar').navTabBar()
    UI.navTabBar.on('click', 'li a', function(e){
        var $a = $(e.target).closest('a');
        var $li = $a.closest('li')

        if($li.hasClass('menu-cate')){ //전체 카테고리 메뉴 열기
            $(".sidebar-area").addClass("active");
            UI.windowScroll.disable()
        }

        if($li.hasClass('menu-onair')){ //On Air 리스트 열고 닫기
            $a.toggleClass("close");
            var insertTxt = null;
            var closed = $a.hasClass("close");

            if(closed){
                insertTxt = "On Air 닫기";
                UI.windowScroll.disable()
            } else{
                insertTxt = "On Air";
                UI.windowScroll.enable()
            }
            $a.children("span").text(insertTxt);
            $a.next(".onairwrap").toggleClass("active");
        }
    })
    /* //mobile 공통 navTabBar end */

    /* mobile 공통 layerPopTrigger start */
    UI.layerPopTrigger = $('.lyopen').layerPopTrigger({
        'closer' : '.lyclose',
    })
    /* //mobile 공통 layerPopTrigger end */

    /* mobile 공통 fontResizer start */
    $('.font-resize').fontResizer({
        plus : '.btn-fontplus',
        minus : '.btn-fontminus',
    })
    /* //mobile 공통 fontResizer end */


    /* mobile 공통 simpleAccordian start */
    $('.accordion').simpleAccordian({
        'type' : 'plain'
    })
    $('.accstyle').simpleAccordian({
        'type' : 'list'
    })
    /* //mobile 공통 simpleAccordian end */

    /* mobile 공통 simpleAccordian start */
    UI.Toast = $('body').simpleToast()
    // UI.Toast.createNewToast('이렇게 띄웁니다.') //여러개 띄우기 가능

    /* mobile 공통 simpleAccordian start */

    /* 임시 처리 */
    $(".ukslideshow").on("touchstart mousedown", function(e){
        e.stopPropagation()
    })

    $(".sidebar-area .btn-close").click(function(){ //전체 카테고리 메뉴 닫기
        $(".sidebar-area").removeClass("active");
        UI.windowScroll.enable()
    });

    $(".popup-layerwrap .btn-close").click(function(){ //열려 있는 팝업 닫기 (버튼이나 링크 클릭시 닫힘)
        $(".popup-layerwrap").removeClass("active");
    });
    
    $(".btn-like").on("click",function(){ // 찜하기
        var insertTxt = null;
        $(this).toggleClass("active");
        if($(this).hasClass("active")){
            insertTxt = "찜하기 완료";
        }else{
            insertTxt = "찜하기";
        }
        $(this).children("span").text(insertTxt);
    });

    $(".btn-arrange").on("click",function(){ // 리스트 정렬
        if($(this).hasClass("col1")){
            $(this).parents(".arrange").addClass("arr2").removeClass("arr1");
            $(".itemlist .pdwrap").removeClass("pdgrid").addClass("pdlist");
            $(".product-list .pdwrap").removeClass("pdgrid").addClass("pdlist");
        }else if($(this).hasClass("col2")){
            $(this).parents(".arrange").addClass("arr1").removeClass("arr2");
            $(".itemlist .pdwrap").removeClass("pdlist").addClass("pdgrid");
            $(".product-list .pdwrap").removeClass("pdlist").addClass("pdgrid");
        }
    });

    $(".footer-company").on("click",function(){
        $(this).toggleClass("active");
        $(this).next(".footer-info").toggleClass("active");
    });

    $(".menu-recent").click(function(){ //최근 본 쇼핑 열기
        $(".recentwrap").addClass("active");
        UI.windowScroll.disable()
    });

    $(".recentwrap .btn-close").click(function(){ //최근 본 쇼핑 닫기
        $(".recentwrap").removeClass("active");
        UI.windowScroll.enable()
    });
    /* //임시 처리 */


    /* $('.touch-x').each(function(i, e){ 
        $(e).touchFlow({ 
            axis: "x", 
            snap: true, 
            scrollbar: false, 
            scrollbarAutoHide: true, 
        }); 
    }) 
    $('.touch-y').each(function(i, e){ 
        $(e).touchFlow({ 
            axis: "y", 
            snap: true, 
            scrollbar: false, 
            scrollbarAutoHide: true, 
        }); 
    })   */
    /*
    var ukScroll;
    $(window).scroll(function(event){
        ukScroll = true;
    });
    setInterval(function() {
        if (!ukScroll) {
            navBarFixed();
            ukScroll = false;
        }
    }, 150);
    */
//    uxTab();
   categroupTab();
//    uxtabGp();
//    accordionAction();
//    accstyleAction();
   keyboardAction();
});

/* Bottom Tab Bar Navigation 
function navBarFixed() { 
    var lastScrollTop = 0;
    var modeType;
    $(document).width() > $(document).height() ? modeType = "portrait" : modeType = "landscape";
    $(window).scroll(function(e){
        var scTop = $(this).scrollTop();
        var scMode = $(document).width() > $(document).height();
        scMode ? sModeType = "portrait" : sModeType = "landscape";
        if(sModeType!=modeType) { // Mode Check
            modeType = sModeType;
            return false;
        }
        if(scTop - lastScrollTop > 150) return false;
        scTop < lastScrollTop ? $('.nav-tabbar').addClass('fixed') : $('.nav-tabbar').removeClass('fixed');
        lastScrollTop = scTop;
    });
};
*/
/* tab */
function uxTab(){
    uxTab = $('.tab');
    uxTab.each(function(i, e){
        var uxTabMenu = $(e).find('.tabmenu > li');
        uxTabMenu.on('click focusin', function(){
            var idx = $(this).index();
            uxTabMenu.eq(idx).addClass('selected').siblings().removeClass('selected');
            uxTabMenu.eq(idx).children().attr('aria-selected','true').parent().siblings().children().attr('aria-selected','false');
            return false
        });
    });
}
/* Category tab */
function categroupTab(){
    cateGroup = $('.categroup');
    cateGroup.each(function(i, e){
        var cateMenu = $(e).find('ul > li');
        cateMenu.on('click focusin', function(){
            var idx = $(this).index();
            cateMenu.eq(idx).addClass('current').siblings().removeClass('current');
        });
    });
}
/* uxtabgroup */
function uxtabGp(){
    uxTabGroup = $('.uxtabgp');
    uxTabGroup.each(function(i, e){
        var uxTabMenu = $(e).find('.tabmenu > li');
        var uxtabCnt = $(e).find('> .tabcnt');
        uxTabMenu.on('click focusin', function(){
            var idx = $(this).index();
            uxTabMenu.eq(idx).addClass('selected').siblings().removeClass('selected');
            uxTabMenu.eq(idx).children().attr('aria-selected','true').parent().siblings().children().attr('aria-selected','false');
            uxtabCnt.eq(idx).addClass('selected').siblings().removeClass('selected');
            uxtabCnt.eq(idx).attr('aria-selected','true').siblings().attr('aria-selected','false');
            return false
        });
    });
}
/* Accordian Style Type */
function accordionAction(){
    $('.accordion').each(function (i, e) {
        var accordionTrigger = $(e).find('h3>.accordion-trigger');
        var accordionPanel = $(e).find('.accordion-panel');
        accordionTrigger.on('click touchstart', function () {
            $(this).parent().addClass('selected').siblings().removeClass('selected');
            $(this).attr('aria-expanded','true').parent().siblings().children().attr('aria-expanded','false');
            $(this).parent().next().addClass('selected').parent().siblings().removeClass('selected');
            return false;
        });
    });
}
/* Accordian Style Type1 */
function accstyleAction(){
    $('.accstyle').each(function (i, e) {
        var accItem = $(e).find('.accitem');
        var accTrigger = $(e).find('h3>.accordion-trigger');
        var accPanel = $(e).find('.accordion-panel');
        accTrigger.on('click touchstart', function () {
            $(this).parent().parent().addClass('selected').siblings().removeClass('selected');
            return false;
        });
    });
}
/* Portrait & Landscape Check */
function modeOrientation(){
    $(window).on("orientationchange", function(event){
        if(window.matchMedia("(orientation: portrait)").matches){
            // 세로 모드 (평소 사용하는 각도)
        }else if(window.matchMedia("(orientation: landscape)").matches){
            // 가로 모드 (동영상 볼때 사용하는 각도)
        }
    });
};
/* keyboard open/close */
function keyboardAction(){
    $(".btn-keyborad").each(function(i, e){
        var keyBoard = $(e);
        keyBoard.on("click", function(){
            $(".pckeyboard").toggle();
        })
    })
}

/* common util start */
var autoSetIframeHeight = function(iframe){
    var sub = iframe.contentDocument ? iframe.contentDocument : iframe.contentWindow.document
    iframe.style.height = sub.body.scrollHeight+'px'
}

var scrollAction = function(e){
    var $navScroller = UI.navScroller
    var scrollTop = e.scrollTop
    var direction = e.direction

    scrollTop > UI.navScroller.offset.top ? $navScroller.addClass("fixed") : $navScroller.removeClass("fixed");

    console.log("scrollManager direction ::: ", direction)
    console.log("scrollManager Top ::: ", scrollTop)

    //floating 메뉴와 하단네비게이션바 컨트롤 start
    if(direction === 'up'){
        UI.floatingMenu.up();
        UI.navTabBar.up();
    } else if(direction === 'down'){
        UI.floatingMenu.down();
        UI.navTabBar.down();
    }
    //floating 메뉴와 하단네비게이션바 컨트롤 end

    //scrollTop 높이에 따라 메뉴 class 변경 start
    if(scrollTop > 50){
        
    }
    if(scrollTop <= 0){

    }
}
/* common util end */