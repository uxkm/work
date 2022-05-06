ㅇ# mobile common.js 가이드 파일

## spec
 - es5
 - jquery
 - slick.js (https://kenwheeler.github.io/slick/)
 - swiper.js (https://swiperjs.com/api/)

## outline
 - **H몰 공통 UI 스크립트 구현**
 - pc 버전과 mobile 버전 분리 구현
 - webpack을 사용하지 않는 모듈화, 컴포넌트화
 - 모든 모듈, 컴포넌트는 jquery plugin 타입으로 코딩

## components
    * 모든 컴포넌트 공통사항
        - jquery object를 변수로 지정하면 생성된 jquery object의 메서드를 사용 가능
        - common.js 에 UI = {} 안에 미리 생성된 변수가 있으므로 중복 선언하지 않았는지 꼭 확인 필요
        - 그 외에 새로운 컴포넌트 생성할 시에는 반드시 $(function(){}) 안에 코딩하여, 이전 모든 컴포넌트 로드 후 사용 요망 

### 목차
- [useSlick (mobile)](#useSlick)
- [floatingmenu (mobile)](#floatingmenu)
- [timerAction (mobile)](#timerAction)
- [navScroller (mobile)](#navScroller)
- [layerPopTrigger (mobile)](#layerPopTrigger)
- [scrollManager (mobile)](#scrollManager)
- [topButtonTrigger (mobile)](#topButtonTrigger)
- [tabmenu (mobile)](#tabmenu)
- [fontResizer (mobile)](#fontResizer)
- [simpleAccordian (mobile)](#simpleAccordian)
- [simpleSlider (mobile)](#simpleSlider)
- [simpleToast (mobile)](#simpleToast)

#### useSlick

1. 주요기능
    * H몰 내에서 slick을 사용하는 타입별로 구분해둔 plugin

2. 사용법
    * 7가지 type을 추가 정의하고 옵션으로 제공하며 그외 slick과 동일한 옵션, method, event를 제공합니다.
    
```js
    //common.js
    var $testSlickInstance = $('[data-id=slickEvent]').useSlick({
        'type': 'countauto',
        'footer':'[data-id=slickEventFooter]',
        'stopBtn' : '.btn-stop',
        'playBtn' : '.btn-play',
        'variableWidth': false,
        'onClickPause' : function(e, $stopBtn, $playBtn){
            $stopBtn.toggleClass('active')
            $playBtn.toggleClass('active')
        },
        'onClickPlay' : function(e, $stopBtn, $playBtn){
            $playBtn.toggleClass('active')
            $stopBtn.toggleClass('active')
        },
    });
```

3. option
    - **name** : `string` custom event의 네임스페이스를 지정합니다. (기본값 : global)
    - **type** : `string` 'centerauto','noncount','leftalign','countauto','totalcurrent','leftright','dotpaging', 'default' 등의 타입 제공 (기본값 : default)
    - **footer** : `string` slick html내에 페이징 처리 등 하단 정보를 보여줄 tag의 셀렉터
    - **useFooter** : `boolean` Boolean. footer를 사용할 것인지 여부. type에 따라서 이 값을 지정하지 않아도 자동으로 true로 적용되는 경우가 존재.
    - **stopBtn** : `string` Pause 버튼의 셀렉터
    - **playBtn** : `string` Play 버튼의 셀렉터
    - **speed** : `number` slide의 이동 속도
    - **autoplaySpeed** : `number` 오토플레이가 적용될때 대기 시간
    - **onClickPause** : `function` Pause될때 실행할 callback
    - **onClickPlay** : `function` play될때 실행할 callback


4. method
    - **setSlick**
        * 최소 생성된 slick 대신 새로운 slick 객체를 생성합니다.
        
    ```js
        $testSlickInstance.setSlick()
    ```
    
    - **slickAddOns**
        * 디자인상 필요한 요소의 html을 강제추가
    ```js
        $('button').on('click', function(){
            windowScroll.enable()
        })
    ```


#### floatingmenu

1. 주요기능
    * 모바일 페이지에서 항상 떠다니는 메뉴 component.

2. 사용법
    * 적용을 원하는 tag에 floating-menu 클래스를 추가하거나, 아래 예시를 따라 새로 생성.

```html
    <div class="test-floating-code">
        <div class="floating-group">
        </div>
    </div>
    <script>
        //새 오브젝트 생성하기
        var $floatingmenu = $('.test-floating-code').floatingmenu({
            'top' : 10,
        })

        $('button').on('click', function(e){
            if(window().scrollTop() > 100){
                $floatingmenu.up() //조건에 따라 상단으로 이동
            } else {
                $floatingmenu.down() //조건에 따라 하단으로 이동
            }
        })
    </script>
```

3. option
    - **upCallback** : `function` 상단으로 이동한 후에 실행되는 callback 지정
    - **downCallback** : `function` 하단으로 이동한 후에 실행되는 callback 지정

4. method
    - **up**
        * up 클래스를 부여하여 상단으로 이동시킵니다.

    ```js
        $floatingmenu.up()
    ```

    
    - **down**
        * down 클래스를 부여하여 하단으로 이동시킵니다.

    ```js
        $floatingmenu.down()
    ```


#### timerAction

1. 주요기능
    * 타이머를 부여하고 시간이 지나면, hide나 fadeOut등 jquery 액션을 취합니다.
    * mothod를 통해 시간을 reset하거나 지정한 액션의 반대되는 액션을 취합니다.

2. 사용법
    * common.js에 미리 생성해두었기 때문에 .floating-group나 .btn.btn-topmove를 주면 발동.
시
```html
    <div class"test-timer-hide">hide 테스트 코드</div>
    <div class"test-timer-fade-out">fadeOut 테스트 코드</div>

    <script>
        var $testTimerHideAction = $('.test-timer-hide').timerAction({
            'action' : 'hide',
            'speed' :  200,
            'timer' : 5000
        })//5초후에 200ms의 속도로 hide됩니다.

        var $testTimerFadeOutAction =$('.test-timer-fade-out').timerAction({
            'action' : 'fadeOut',
            'speed' :  400,
            'timer' : 3000
        })//3초후에 400ms의 속도로 fadeOut됩니다.
    })
    </script>
```

3. option
    - **timer** : `number` 액션을 실행할 대기 시간 (기본값 5초)
    - **speed** : `number` 액션을 실행하는 속도 (기본값 0초)
    - **actionType** : `string` 실행할 액션의 타입 (기본값 hide)


4. method
    - **getActions**
        * 현재 지정한 액션의 종류와 reset을 실행할 경우 실행할 반대액션을 리턴합니다.

    ```js
        $testTimerHideAction.getActions() // {timerAction:'hide', reaction:'show'}
    ```
    
    - **resetTimeAction**
        * 타이머의 시간을 다시 reset하고 deaction을 실행합니다

    ```js
        $testTimerHideAction.resetTimeAction()
    ```




#### navScroller

1. 주요기능
    * 모바일 페이지에서 좌우로 나열되는 컨텐츠의 스크롤 넓이를 조절해주고 스크롤을 조작합니다.

2. 사용법
    * .navwrap 클래스를 주고 html구조를 > div.nav-scroller > ul > li 순으로 만듭니다.

```html
    <div class="thumb-img">
        <div class="nav-scroller">
            <ul>
                <!-- 선택 시 on 클래스 추가 -->
                <li class="on"><a href="javascript:;">test1</a></li>
                <li><a href="javascript:;">test2</a></li>
            </ul>
        </div>
    </div>
    <script>
        var $testCode = $('.testCode').navScroller({
            'index' : 0,
            'autoToCenter' : true,
            'name' : 'thumb',
            'activeClass' : 'on',
            'onClick' : function(e, index, length){
                $bigSlick.slick('slickGoTo', index)
            }
        })
    </script>
```

3. option
    - **index** : `number` navScroller list의 item 중 초기에 active상태로 둘 아이템의 index number (기본값 : 0) 
    - **activeClass** : `string` active 상태일때 class명을 지정합니다. (기본값 : current)
    - **autoToCenter** : `boolean` list의 item을 클릭했을시 스크롤이 자동으로 중앙으로 이동 여부 (기본값 : true)
    - **scrollerClass** : `string` 최상단(wrapper)의 바로 하단 div, 스크롤 영역의 클래스명을 지정 (기본값 : scrollerClass)
    - **list** : `string` 리스트의 셀렉터를 지정. (기본값 : ul li)
    - **root** : `string` 넓이를 계산할때 최상위 개체를 지정. (기본값 : body)
    - **width** : `number` item 하나당 넓이값. 0으로 지정하면 자동계산 (기본값 : 0)
    - **name** : `string` jquery이벤트의 네임스페이스를 지정. (기본값 : '') 
    - **onClick** : `function` item list안에 a태그 클릭시 실행되는 이벤트. (param: event, index, items.length)

4. method
    - **goCenter**
        * active된 item이 화면 정중앙에 오도록 스크롤됩니다.

    ```js
        $testCode.goCenter()
    ```

    
    - **resetWidth**
        * 아이템 넓이를 재조정합니다.

    ```js
        $testCode.resetWidth()
    ```

    - **select**
        * 선택한 아이템을 active 시킵니다. (arguments. index:number)

    ```js
        $testCode.select(2)
    ```

#### layerPopTrigger

1. 주요기능
    * html 개체에 클릭하면 layer popup을 띄우는 기능을 부여합니다.

2. 사용법
    * 역시 기본적으로 common.js에 전역으로 선언을 해두었기 때문에 그에 맞춰서 세가지 작업을 해주시면 동작합니다.
        1. layer popup을 여는 버튼으로 지정하고 싶은 tag에 lyopen 클래스주기
        2. tag에 data-target속성으로 layer popup의 클래스명 적기
        3. layer popup안에 close 버튼으로 지정하고 싶은 tag에 lyclose 클래스 주기
    * 새로 생성할 경우에는 하단 방법을 따르면 됩니다.

```html
    <button class="opener" data-lpopup="test-popup">오픈버튼</button>

    <div class="layer-popup test-popup" style="display:none;">
        <div class="popup-footer">
            <!-- 내용 -->
        </div>
        <button class="closer"><span>팝업 닫기</span></button>
    </div>

    <script>
        var layerPopTrigger = $('.opener').layerPopTrigger({
            'closer' : '.closer',
        })
    </script>
```

3. option
    - **ease** : 버튼 클릭시 팝업 등장 모션. (기본값 : swing)
    - **speed** : 버튼 클릭시 팝업 등장 속도. (기본값 : global)
    - **closer** : 팝업내에 팝업을 닫게할 버튼 셀렉터. (기본값 : global)
    - **beforeOpen** : 팝업창 open 전 callback 함수. param : (event, targetName)
    - **beforeClose** : 팝업창 open 후 callback 함수. param : (event, targetName)
    - **closeOpen** : 팝업창 close 전 callback 함수. param : (event, targetName)
    - **closeClose** : 팝업창 close 후 callback 함수. param : (event, targetName)



#### scrollManager

1. 주요기능
    * scroll 이벤트 감지, scrollTop 위치 감지, scroll 크기 변화를 체크.
    * scroll을 hidden 시키거나 다시 보이게 하는 등의 상태 변경
    * pc버전과의 차이점은 **터치스크롤**에도 적용됩니다.

2. 사용법
    * scroll 이벤트 감지, scroll 위치 감지 등등의 기능은 대부분 최상위 객체인 window 에서만 사용하므로 common.js에서 전역에 미리 선언해둔 UI.windowScroll 만 파악해도 무방합니다.
    * 필요에 따라 $(셀렉터).scrollManager()로 생성하면 됩니다.

```js
    //common.js
    UI.windowScroll = $(window).scrollManager({
        name : 'global'
    })
    
    //사용하려는 컨텍스트 내에서
    $(셀렉터).on('customScroll.global customResize.global', function(e){
        if(e.type === 'customScroll'){
            //window를 스크롤할때 처리할 모든 이벤트를 몰아넣기
        } else {
            //window를 리사이징할때 처리할 모든 이벤트를 몰아넣기
        }
    })

    //새로 scroll 관리가 필요한 객체가 생겼을 경우
    var $newScrollManager = $(셀렉터).scrollManager({
        name : '이름'
    })

    $newScrollManager.on('customScroll.이름 customResize.이름', function(e){
        if(e.type === 'customScroll'){
            //셀렉터를 스크롤할때 처리할 모든 이벤트를 몰아넣기
        } else {
            //셀렉터를 리사이징할때 처리할 모든 이벤트를 몰아넣기
        }
    })
```

3. option
    - **name** : `string` custom event의 네임스페이스를 지정합니다. (기본값 : global)

4. method
    - **disable**
        * selector의 스크롤바를 hidden하고 cumstom event 발생을 막습니다.
        * 모달팝업을 띄울때 주로 사용합니다.
    ```js
        $('button').on('click', function(){
            windowScroll.disable()
        })
    ```
    
    - **enable**
        * selector의 스크롤바를 다시 display하고 cumstom event 를 다시 연결시킵니다.
    ```js
        $('button').on('click', function(){
            windowScroll.enable()
        })
    ```




#### topButtonTrigger

1. 주요기능
    * 셀렉터를 top 버튼으로 지정합니다.

2. 사용법
    * common.js에 미리 .btn-top a 셀렉터로 생성해 두었습니다.
    * jquery.topButtonTrigger 를 사용해 새 오브젝트를 생성하면됩니다.

```html
    <a href="javascript:;" class"test-code">테스트코드</a>

    <script>
        var $testCode = $('.test-code').topButtonTrigger({
            top : 40,
            speed : 500
        })
    })
    </script>
```

3. option
    - **top** : `string` 셀럭터
    

#### tabmenu

1. 주요기능
    * 셀렉터를 top 버튼으로 지정합니다.

2. 사용법
    * 마크업은 .tab > ul > li 순으로 작성하면 탭이 적용됩니다.
    * .tab과 형제노드로 section.tabcnt를 배치하면 탭 클릭시, 클릭한 순서에 맞는 sction.tabcnt가 active됩니다.

```html

    <div class="tab tab-default">
        <ul class="tabmenu" role="tablist">
            <li class="selected" role="presentation"><a href="#" role="tab" aria-selected="true"><span>텝메뉴1</span></a></li>
            <li role="presentation"><a href="#" role="tab" aria-selected="false"><span>텝메뉴2</span></a></li>
            <li role="presentation"><a href="#" role="tab" aria-selected="false"><span>텝메뉴3</span></a></li>
        </ul>
    </div>
    <section class="tabcnt selected" role="tabpanel" aria-label="상세설명">
        탭내용 1
    </section>
    <section class="tabcnt selected" role="tabpanel" aria-label="상세설명">
        탭내용 2
    </section>
    <section class="tabcnt selected" role="tabpanel" aria-label="상세설명">
        탭내용 3
    </section>

    <script>
        var $testCode = $('.test-code').tabmenu({
            'index' : 0,
        })
    })
    </script>
```

3. option
    - **index** : `number` active된 index 탭 지정.
    - **activeClass** : `string` active 되었을때 추가되는 클래스의 이름
    - **ready** : `function` tab이 init를 끝냈을때 실행하는 callback.
    - **before** : `function` tab item을 클릭시 active item이 바뀌기 전 callback (param-> event, $jqueryObject, index)
    - **after** : `function` tab item을 클릭시 active item이 바뀐 후 callback (param-> event, $jqueryObject, index)




#### fontResizer

1. 주요기능
    * 특정 wrapper에 폰트사이즈를 조절할 수 있는 기능을 부여합니다.

2. 사용법
    * wrapper에 font-resize 클래스를 주고 하위 버튼에 .btn-fontplus, .btn-fontminus 의 클래스를 주면 각각 폰트를 키우는 버튼과 줄이는 버튼이 됩니다.

```js
    var $fontResizer = $('.font-resize').fontResizer({
        plus : '.btn-fontplus',
        minus : '.btn-fontminus',
    })
```

3. option
    - **name** : `string` jquery event 네임스페이스 (기본값 : undefined)
    - **plus** : `string`  폰트사이즈를 키우는 버튼 셀렉터 (기본값 : .btn-fontplus')
    - **minus** : `string` 폰트사이즈를 줄이는 버튼 셀렉터 (기본값 : .btn-fontminus)
    - **targets** : `array<string>` 폰트사이즈가 조절 되야할 대상의 클래스들을 정의. 해당 클래스의 하위 엘리먼트도 모두 사이즈가 조절됩니다. (기본값 : ['pdname', 'pdprice'])
    - **step** : `number` 현재 폰트사이즈의 %를 [100, 125, 150]으로 고정시켜두었는데 이때 초기사이즈의 index를 지정 (기본값 : 0)
    - **onSizeup** : `function` 폰트사이즈가 커질 때 실행될 callback
    - **onSizedown** : `function` 폰트사이즈가 작아질 때 실행될 callback


#### simpleAccordian

1. 주요기능
    * 특정 list에 아코디언 기능을 부여합니다.

2. 사용법
    * 최상위 wrapper 엘리먼트에 마크업에 따라 accordion 또는 accstyle 클래스를 줍니다. (하단 type 옵션과 연관이 있음 참조)

```html
    <!-- accordion 아코디언 내용을 accitem로 한번 감싸지 않고 주욱 펼쳐둔 형태  -->
    <div class="accordion">
        <h3><button class="accordion-trigger" aria-expanded="true">아코디언1</button></h3>
        <div class="accordion-panel">아코디언 추가내용</div>

        <h3><button class="accordion-trigger" aria-expanded="true">아코디언1</button></h3>
        <div class="accordion-panel">아코디언 추가내용</div>

        <h3><button class="accordion-trigger" aria-expanded="true">아코디언1</button></h3>
        <div class="accordion-panel">아코디언 추가내용</div>
     </div>

    <!-- accstyle은 아코디언 내용을 accitem로 한번 감싼 형태  -->
    <div class="accstyle">
        <div class="accitem">
            <h3><button class="accordion-trigger" aria-expanded="true">아코디언1</button></h3>
            <div class="accordion-panel">아코디언 추가내용</div>
        </div>
        <div class="accitem">
            <h3><button class="accordion-trigger" aria-expanded="true">아코디언1</button></h3>
            <div class="accordion-panel">아코디언 추가내용</div>
        </div>
        <div class="accitem">
            <h3><button class="accordion-trigger" aria-expanded="true">아코디언1</button></h3>
            <div class="accordion-panel">아코디언 추가내용</div>
        </div>
        ....
     </div>       

    <script>
        $('.accordion').simpleAccordian({
            'type' : 'plain'
        })
        $('.accstyle').simpleAccordian({
            'type' : 'list'
        })
    </script>
```

3. option
    - **itemSelector** : `string` type을 'list'로 선택시 wrapper의 바로 하위자식의 셀렉터 (기본값 .accitem)
    - **type** : `string` 'plain', 'list' 값 두가지 형태중 하나를 선택 (기본값 : list)
    - **trigger** : `string` 아코디언을 펼치고 접는 버튼의 클래스명 (기본값 : .accordion-trigger)
    - **selectedClass** : `string` 선택된 아코디언 item의 클래스명 (기본값 : selected)
    - **panel** : `string` 아코디언 선택시 펼쳐지는 panel의 클래스명 (기본값 : .accordion-panel)

#### simpleSlider

1. 주요기능
    * 애니메이션이나 부가기능 없이 이미지를 순차적으로 보여주고 페이징 처리만 되어있는  slider

2. 사용법
    * 최상위 wrapper에 extend-category 클래스를 부여합니다.
    * wrapper의 하위는 > div > ul > li 순으로 마크업 합니다.
    * 혹은 아래를 참고하여 새로 slider를 생성합니다.

```js
    //common.js
    var $testSlider = $('.test-code').simpleSlider({
        'items' : '> div > ul > li',
        'current' : '.numbering .current',
        'total' : '.numbering .total',
    })
```

3. option
    - **index** : 처음 보여질 slide 인덱스. (기본값 : 0)
    - **items** : slide될 개체 셀렉터. (기본값 : > div > ul > li)
    - **current** : 현재 페이지를 표시할 엘리먼트의 셀렉터. (기본값 : .numbering .current)
    - **total** : 총 페이지수를 표시할 엘리먼트의 셀렉터. (기본값 : .numbering .total)
    - **prev** : 이전 slide 보기 버튼. (기본값 : .btn-prev)
    - **next** : 이전 slide 보기 버튼. (기본값 : .btn-next)



3. option
    - **top** : `string` 셀럭터
    

#### simpleToast

1. 주요기능
    * toast를 띄웁니다.

2. 사용법
    * common.js에 생성한 UI.Toast를 활용합니다.

```js
    UI.Toast = $('body').simpleToast()
    UI.Toast.createNewToast('메시지')
```

3. option
    - **text** : `string` 띄울 메시지명.
    - **className** : `string` toast의 클래스명. (기본값 : common-toast-view)
    - **type** : `string` toast를 띄울 위치. (기본값 : center)
    - **time** : `number` toast가 지속되는 시간. (기본값 : 2000)

4. method
    - **createNewToast**
        * 새로운 toast 띄웁니다.
    ```js
        UI.Toast.createNewToast('메시지')
    ```

     - **removeAllToast**
        * 현재 띄워진 toast를 모두 지웁니다.
    ```js
        UI.Toast.removeAllToast()
    ```