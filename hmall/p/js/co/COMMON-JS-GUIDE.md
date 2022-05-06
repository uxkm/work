# pc common.js 가이드 파일

## spec
 - es5
 - jquery

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
- [scrollmanager (pc)](#scrollManager)
- [sticky (pc)](#sticky)
- [topButtonTrigger (pc)](#topButtonTrigger)
- [categoryNavigation (pc)](#categoryNavigation)
- [layerPopTrigger (pc)](#layerPopTrigger)
- [simpleSlider (pc)](#simpleSlider)
- [toggler (pc)](#toggler)

#### scrollManager

1. 주요기능
    * scroll 이벤트 감지, scrollTop 위치 감지, scroll 크기 변화를 체크.
    * scroll을 hidden 시키거나 다시 보이게 하는 등의 상태 변경

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


#### sticky

1. 주요기능
    * 셀럭터의 position을 fixed 시키거나 다시 원상 복귀시킵니다.

2. 사용법
    * 역시 많은 페이지에서 사용할 것 같은 component의 경우 예시로 사용할 겸, common.js에 미리 .wing-banner 셀렉터로 생성해 두었습니다.
    * html tag에 wing-banner 클래스를 주기만 하면 sticky가 적용됩니다.
    * 옵션을 달리해야할 개체가 생기면 아래 예시를 보고 새로 생성하시면 됩니다.

```html
    <div class"test-code">
    </div>
    <script>
        //새 오브젝트 생성하기
        var $testSticky = $('.test-code').sticky({
            'top' : 10,
        })

        window.on('scroll', function(e){
            $testSticky.stick()
        }
    })
    </script>
```

3. option
    - **top** : `number` 셀렉터가 화면 최상단에서 top 값이 몇 px 떨어져있을때 fixed 될지 값을 정합니다.

4. method
    - **stick**
        * 현재 스크롤 위치를 파악해서 selector가 fixed될 것인지 말것인지 판단합니다.
        * 스크롤위 위치가 바뀌면 계속해서 실행해주어야 합니다.
    ```js
        window.on('scroll', function(e){
            $testSticky.stick()
        }
    ```

    
    - **initPosition**
        * selector가 fixed 될때 위치하게될 값을 재계산합니다.
        * 창 크기가 변했을 때에만 계산하면 됩니다.
    ```js
         window.on('resize', function(e){
            $testSticky.initPosition()
        }
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
    

#### categoryNavigation

1. 주요기능
    * 카테고리 메뉴 wrapper 를 지정합니다.
    * wrapper안에서 지정된 메뉴는 클릭시 **확장메뉴영역**을 toggle로 노출하고 **확장메뉴영역**은 마우스 오버시 2depth까지 노출합니다.

2. 사용법
    * **category-area** : 최상위 wrapper. 그외 class는 option 확인

```html
    <div class="category-area">
        <a href="javascript:;" class="btn-category">카테고리</a>
        <div class="category-menu-wrap">
            <div class="category-list">
                <ul>
                    <li><a href="javascript:;">패션의류/속옷</a></li>
                    <li><a href="javascript:;">잡화/제화</a></li>
                    <!-- ..... -->
                </ul>
            </div>

            <div class="category-list-contents">
                <!-- ..... -->
            </div>
            <div class="category-list-contents">
                <!-- ..... -->
            </div>
            <div class="category-list-contents">
                <!-- ..... -->
            </div>
        </div>
    </div>
```

3. option
    * **btn** : `string` 클릭시 오픈할 확장메뉴영역 (기본값 : .btn-category)
    * **mainList** : `string` 1depth ul의 셀렉터 (기본값 : .category-list)
    * **contents** : `string` 1depth li 오버시 열릴 컨텐츠의 셀렉터 (기본값 : .category-list-contents)




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
    - **ease** : `string` 버튼 클릭시 팝업 등장 모션. (기본값 : swing)
    - **speed** : `number` 버튼 클릭시 팝업 등장 속도. (기본값 : global)
    - **closer** : `string` 팝업내에 팝업을 닫게할 버튼 셀렉터. (기본값 : global)
    - **beforeOpen** : `function` 팝업창 open 전 callback. param : (event, targetName)
    - **beforeClose** : `function` 팝업창 open 후 callback. param : (event, targetName)
    - **closeOpen** : `function` 팝업창 close 전 callback. param : (event, targetName)
    - **closeClose** : `function` 팝업창 close 후 callback. param : (event, targetName)


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
    - **index** : `number` 처음 보여질 slide 인덱스. (기본값 : 0)
    - **items** : `string` slide될 개체 셀렉터. (기본값 : > div > ul > li)
    - **current** : `string` 현재 페이지를 표시할 엘리먼트의 셀렉터. (기본값 : .numbering .current)
    - **total** : `string` 총 페이지수를 표시할 엘리먼트의 셀렉터. (기본값 : .numbering .total)
    - **prev** : `string` 이전 slide 보기 버튼. (기본값 : .btn-prev)
    - **next** : `string` 이전 slide 보기 버튼. (기본값 : .btn-next)


#### toggler

1. 주요기능
    * 특정 이벤트를 반복시에 설정한 class값을 토글합니다.

2. 사용법
    * 특정 엘리먼트의 속성에 data-toggle-target을 입력하면 됩니다.

```js
    var $toggler = $('[data-toggle-target]').toggler({
        className : 'on',
        event : 'click'
    })
```

3. option
    - **className** : `string` toggle할 클래스의 이름
    - **event** : `string` toggle을 발동시킬 이벤트명

4. method
    - **autoClose**
        * 현재 띄워진 toggler의 모든 객체에 클래스를 삭제 (off시킨다)
