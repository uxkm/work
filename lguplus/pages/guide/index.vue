<template>
  <section role="contentinfo" aria-label="프로젝트 환경">
    <h1 class="h1">{{ title }}</h1>
    <div class="uksection" aria-label="작업이력">
      <h2 class="h4">제•개정 이력</h2>
      <div class="ukdltbl">
        <p class="plist"><strong>Update</strong> : 2021-03-22 ~ 2021-03-26 웹 접근성 관련 화면낭독기 검수(센스리더) 후 수정 및 Component, Template 미작업 된 부분 작성 후 배포</p>
        <p class="plist"><strong>Update</strong> : 2021-03-15 ~ 2021-03-19 UI/UX Kit Template (Navigation, Tab, Card, Button, Icon, Search, Step, Map, Form(Input), Information)작성 후 배포</p>
        <p class="plist"><strong>Update</strong> : 2021-03-08 ~ 2021-03-12 UI/UX Guide정리 및 Componet(Tag,Flag,Tab,Accordion,Dropdown,Pagination,Icon) 작성 후 배포</p>
        <p class="plist"><strong>Update</strong> : 2021-02-22 ~ 2021-03-05 Bootstrap UI 방식으로 가이드 재 작성 후 1차 배포</p>
        <p class="plist"><strong>초안</strong> : 2021-02-15 ~ 2021-02-19 기본 형식의 가이드 작업</p>
      </div>
    </div>
    <div class="uksection" aria-label="프로젝트 환경">
      <h2 class="h4">프로젝트 환경</h2>
      <div class="uktable">
        <table>
          <colgroup>
            <col style="width: 150px" />
            <col style="width: auto" />
          </colgroup>
          <tbody>
            <tr>
              <th>문서 및 버전</th>
              <td class="text-left">HTML5, CSS3, SCSS, Bootstrap UI, Vue UI</td>
            </tr>
            <tr>
              <th>인코딩</th>
              <td class="text-left">UTF-8</td>
            </tr>
            <tr>
              <th>DTD 형식</th>
              <td class="text-left">HTML5</td>
            </tr>
            <tr>
              <th>웹 유형</th>
              <td class="text-left">PC Web, Mobile Web</td>
            </tr>
            <tr>
              <th>PC 웹 호환성</th>
              <td class="text-left">IE11+, Edge, Chrome, MacOS(Safari)</td>
            </tr>
            <tr>
              <th>Mobile 웹 호환성</th>
              <td class="text-left">안드로이드 5.x 이상, IOS 9.x 이상</td>
            </tr>
            <tr>
              <th>Andriod/iOS/PC</th>
              <td class="text-left">
                <p>Andriod 5.0이상(롤리팝) – 본고딕(Noto Sans)</p>
                <p>iOS 5.x 이하 – 애플 고딕</p>
                <p>iOS 6.x – 애플 산돌 고딕 네오(일반체와 볼드체)</p>
                <p>iOS 7.x 이상 – 애플 산돌 고딕 네오 (100 ~ 900)</p>
                <p>PC Web - 본고딕(Noto Sans CJK KR)</p>
              </td>
            </tr>
            <tr>
              <th>해상도</th>
              <td class="text-left">Mobile : 320 ~ 1024 / Tablet : 1024 ~ 1440 / Desktop : 1440 ~</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <hr />
    <dl class="dltype">
      <dt>
        <strong>PC - 웹 폰트 본고딕(NotoSansCJKkr)을 사용</strong>
      </dt>
      <dd>
        <p>
          웹폰트란?<br />
          웹이 발전함에 따라 사용자가 웹에서 정보를 얻는 과정의 경험(UX)을 개선하려는 노력이 행해지고 있다.<br />
          그런 노력 중 하나인 웹 폰트는 로컬의 폰트 설치 상황에 상관없이 웹에서 항상 원하는 타이포그래피를 사용할 수 있게 하는 기술이다.
        </p>
      </dd>
    </dl>
    <hr />
    <div class="uksection" aria-label="폴더/파일 구조">
      <h2 class="h4">폴더/파일 구조</h2>
      <div class="uktable vtop">
        <table>
          <colgroup>
            <col style="width: 60px" />
            <col style="width: 60px" />
            <col style="width: 50px" />
            <col style="width: 50px" />
            <col style="width: 80px" />
            <col style="width: 260px" />
            <col style="width: auto" />
          </colgroup>
          <thead>
            <tr>
              <th>구분</th>
              <th>기본상위</th>
              <th colspan="3">폴더</th>
              <th>파일명</th>
              <th>설명</th>
            </tr>
          </thead>
          <tbody>
            <!-- font -->
            <tr>
              <th>Font</th>
              <td rowspan="14">static</td>
              <td>fonts</td>
              <td></td>
              <td></td>
              <td class="text-left">
                <p>NotoSansKR-Regular.woff2 (167KB)</p>
                <p>NotoSansKR-Regular.woff (244KB)</p>
                <p>NotoSansCJKkr-Regular.ttf (18.402KB)</p>
                <p>NotoSansKR-Medium.woff2 (167KB)</p>
                <p>NotoSansKR-Medium.woff (244KB)</p>
                <p>NotoSansCJKkr-Medium.ttf (18.326KB)</p>
                <p>NotoSansKR-Bold.woff2 (167KB)</p>
                <p>NotoSansKR-Bold.woff (247KB)</p>
                <p>NotoSansCJKkr-Bold.ttf (18.247KB)</p>
              </td>
              <td class="text-left">
                <p>PC Web에서는 본고딕(NotoSansCJKkr)을 사용.</p>
                <p>기본 Regular(400)</p>
                <p>강조 Medium(500) - 디자인 구조에 따라 변경되어 사용</p>
                <p>중요/강조 Bold(700) - 디자인 구조에 따라 변경되어 사용</p>
                <p>The Web Open Font Format (WOFF 2.0)(IE11+, Edge, Chrome 36.0+, FireFox 39.0+, Opera 26.0+)</p>
                <p>The Web Open Font Format (WOFF)(IE9+, Edge, Chrome 5.0+, FireFox 3.6+, Opera11.1+)</p>
                <p>TrueType Fonts (TTF) (WOFF)(IE9+, Edge, Chrome 4.0+, FireFox 3.5+, Opera 10.0+)</p>
                <p>Regular,Bold - WOFF2,WOFF,TTF 폰트는 경량화 해서 파일 용량이 작지만,</p>
                <p>Medium 폰트는 경량화 하면 웹에서 제대로 렌더링이 안되는 문제가 발생하여 경량화 되지 않은 파일로 사용</p>
              </td>
            </tr>
            <!-- //font -->
            <!-- css -->
            <tr>
              <th rowspan="3">CSS</th>
              <td rowspan="10">style</td>
              <td rowspan="3">css</td>
              <td></td>
              <td class="text-left">font.min.css</td>
              <td class="text-left">SCSS에서 빌드되어 생성된 Font CSS 경로</td>
            </tr>
            <tr>
              <td></td>
              <td class="text-left">style.min.css</td>
              <td class="text-left">SCSS에서 빌드되어 생성된 Style CSS 경로</td>
            </tr>
            <tr>
              <td></td>
              <td class="text-left">bv.min.css</td>
              <td class="text-left">SCSS에서 빌드되어 생성된 Bootstrap UI CSS 경로</td>
            </tr>
            <!-- //css -->
            <!-- scss -->
            <tr>
              <th rowspan="7">SCSS</th>
              <td rowspan="7">scss</td>
              <td></td>
              <td class="text-left">
                <p>font</p>
                <p>bv</p>
                <p>style</p>
              </td>
              <td class="text-left">
                <p>UI에 사용된 웹폰트(NotoSansCJKkr) 호출</p>
                <p>Bootstrap UI에 사용된 scss 호출</p>
                <p>UI 작업 파일</p>
                <p>style에 호출되는 파일 유형은(Component, Module, State, Layout, Common) 와 같이 구분됨</p>
              </td>
            </tr>
            <tr>
              <td>base</td>
              <td class="text-left">
                <p>_bv-variables</p>
                <p>_variable</p>
                <p>_reset</p>
                <p>_common</p>
              </td>
              <td class="text-left">
                <p>Bootstrap UI 변수값을 모아둔 파일</p>
                <p>디자인 가이드에서 제공한 기본 변수값을 모아둔 파일</p>
                <p>UI 작업하기위한 초기 세팅 파일</p>
                <p>유틸리티, 공통 스타일을 모아둔 파일</p>
              </td>
            </tr>
            <tr>
              <td>component</td>
              <td class="text-left">
                <p>c-accordion</p>
                <p>c-btn</p>
                <p>c-checkbox</p>
                <p>c-datepicker</p>
                <p>c-dropbox</p>
                <p>c-flag</p>
                <p>c-indicator</p>
                <p>c-input</p>
                <p>c-popup</p>
                <p>c-radio</p>
                <p>c-slide</p>
                <p>c-tab</p>
                <p>c-table</p>
                <p>c-tag</p>
                <p>c-toggle</p>
                <p>c-map</p>
                <p>c-info</p>
                <p>c-tooltip</p>
              </td>
              <td class="text-left">
                <p>주로 자주하는 질문에 사용되는 UI로 질문/답변이 있는 구조</p>
                <p>버튼 UI</p>
                <p>Form요소의 다중선택 Checkbox UI</p>
                <p>달력 UI</p>
                <p>Form요소의 Selectbox UI</p>
                <p>타이틀 또는 이미지 위에 부가적인 설명을 위해 붙는 형태 UI</p>
                <p>현재 위치 정보를 나타내어 요소를 하나씩 보여주는 역할을 하는 UI</p>
                <p>Form요소의 입력할 수 있는 컨트롤러 UI</p>
                <p>사용자가 이용하는 서비스와 관련된 중요한 정보를 전체 화면으로 제공하는 형태 UI</p>
                <p>Form요소의 단일선택 Radio UI</p>
                <p>Visual 부분에서 여러정보를 슬라이드 형태로 보여주는 UI</p>
                <p>페이지 또는 영역 안에서 사용자가 원하는 콘텐츠를 탐색할 수 있도록 제공되는 UI</p>
                <p>한 페이지 내에서 리스트 세부 정보를 펼쳐 제공되는 표 UI</p>
                <p>자신의 콘텐츠 및 관심 분야와 관련된 콘텐츠를 쉽게 찾을 수 있도록 제공되는 UI</p>
                <p>주로 켜기/끄기(선택/미선택) 용도로 사용하는 물리적 스위치 모습의 버튼 UI</p>
                <p>맵 찾기에 사용되는 UI</p>
                <p>Contents내 해당 정보를 나타내는 UI</p>
                <p>Contents내 Tooltip/Toast/Popover 형식의 정보를 나타내는 UI</p>
              </td>
            </tr>
            <tr>
              <td>module</td>
              <td class="text-left">
                <p>m-bv-modal</p>
                <p>m-bv-pagination</p>
                <p>m-bv-table</p>
                <p>m-slick</p>
                <p>m-vue2-datepicker</p>
                <p>m-vue-slider-component</p>
              </td>
              <td class="text-left">
                <p>모듈화 되어 있는 Modal Popup UI</p>
                <p>모듈화 되어 있는 Pagination UI</p>
                <p>모듈화 되어 있는 Table UI</p>
                <p>모듈화 되어 있는 Slick Slider UI</p>
                <p>모듈화 되어 있는 Datepicker UI</p>
                <p>모듈화 되어 있는 Range Slider UI</p>
              </td>
            </tr>
            <tr>
              <td>state</td>
              <td class="text-left">
                <p>is-state</p>
              </td>
              <td class="text-left">
                <p>공통으로 사용되는 상태를 나타내는 class 정의</p>
              </td>
            </tr>
            <tr>
              <td>layout</td>
              <td class="text-left">
                <p>l-sub-main</p>
              </td>
              <td class="text-left">
                <p>서브페이지에 제공되는 기본 Layout UI</p>
              </td>
            </tr>
            <tr>
              <td>page</td>
              <td class="text-left">
                <p>p-main-sub-customer</p>
                <p>p-main-sub-my</p>
              </td>
              <td class="text-left">
                <p>고객지원 페이지 내에서 호출되는 Contents에 사용되는 파일</p>
                <p>마이페이지 페이지 내에서 호출되는 Contents에 사용되는 파일 - 페이지 내에서 호출</p>
              </td>
            </tr>
            <!-- //scss -->

            <!-- image -->
            <tr>
              <th rowspan="3">IMAGE</th>
              <td rowspan="3">images</td>
              <td colspan="2">icon</td>
              <td class="text-left"></td>
              <td class="text-left">
                <p>아이콘 유형을 모아두는 image 폴더</p>
              </td>
            </tr>
            <tr>
              <td colspan="2">common</td>
              <td class="text-left"></td>
              <td class="text-left">
                <p>공통으로 사용되는 image 폴더</p>
              </td>
            </tr>
            <tr>
              <td colspan="2">board</td>
              <td class="text-left"></td>
              <td class="text-left">
                <p>board내에서 사용되는 image 폴더</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <hr />
    <div class="uksection" aria-label="Page 구조">
      <h2 class="h4">Page 구조</h2>
      <p>vue/nuxt 구조에서 퍼블리싱에서 작업되는 부분은 다음과 같습니다.</p>
      <p>실제 작업되는 부분은 본문내용 부분인 pages 폴더안에서 이루어짐.</p>
      <dl class="uk-dl">
        <dt>components</dt>
        <dd>
          <p>components로 작성된 파일이 들어가지만, 현재 퍼블리싱 페이지에서는 UI/UX 가이드 외 작업된 부분은 없음. 주로 FO에서 사용.</p>
        </dd>
        <dt>layouts</dt>
        <dd>
          <p>기본 레이아웃 구조로 일반적인 header, container, footer형태의 기본구조를 갖고 있음.</p>
        </dd>
        <dt>pages</dt>
        <dd>
          <p>실제 본문내용 부분이 들어가는 페이지 생성.</p>
          <textarea style="height: 880px">
현재 프로젝트에서 사용하는 예시 - pages/main-sub-my/index.vue)
- 본문내용의 CSS는 각 페이지에서 호출하는 방식을 적용 
- 사이트의 페이지가 많이 있을것으로 예상하여 style에서 제외
&lt;template&gt;
  <div class="p-main-sub-my">
    <div class="submain-section">
      <div class="toparea-contents">
        <section class="sub-top">
          ........
        </section>
        <!-- //.sub-top -->
      </div>
      <!-- //.toparea-wrap -->
      <div class="middlearea-contents">
        <div class="middlearea">
          ........
        </div>
        <!-- //.middlearea -->
      </div>
      <!-- //.middlearea-contents -->
    </div>
    <!-- //.submain-section  -->
  </div>
&lt;/template&gt;

<script>
export default {
  layout: 'l-sub-main',
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: '/style/css/p-main-sub-my.min.css',
        },
      ],
    };
  },
};
</script>
          </textarea>
        </dd>
      </dl>
    </div>
    <hr />
    <div class="uksection" aria-label="코드규칙">
      <h2 class="h4">코드규칙 - <small class="c-flag">코드규칙은 사용되는 Tool내 확장프로그램에서 제어</small></h2>
      <div class="uktable vtop">
        <table>
          <colgroup>
            <col style="width: 200px" />
            <col style="width: auto" />
          </colgroup>
          <tbody>
            <tr>
              <th>사용 Tool</th>
              <td class="text-left">Visual Studio Code</td>
            </tr>
            <tr>
              <th>확장 프로그램(Extension)</th>
              <td class="text-left">
                <p>ESLint : 문법오류 Check</p>
                <p>Prettier - Code formatter : 코드정렬</p>
                <p>Live Sass Compiler : SCSS파일을 CSS로 자동 빌드</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <hr />
    <div class="uksection" aria-label="Class Name 규칙">
      <h2 class="h4">Class Name 규칙 - <small class="c-flag">SMACSS 방법론에 맞추어 진행</small></h2>
      <p>CSS 방법론에 따라 규칙 생성 하였으며, 대표적인 CSS 방법론은 다음과 같이 3가지 형식이 있습니다.</p>
      <p>CSS 방법론중에서 FO와 협의하여 SMACSS 방법론으로 page구성 및 css class name 구성을 기본으로 선택.</p>
      <p>실제 작업 방식은 OOCSS방식과 부분적으로 혼합하여 사용되고 있음. OOCSS에서 발생되는 단점요소는 SASS(SCSS)에서 보완하여 사용.</p>
      <br />
      <h3 class="h5">SMACSS(Scalable and Modular Architecture for CSS) - <small class="c-flag">현재 선택한 방법론(FO) - 대규모 프로젝트에 적합</small></h3>
      <p>SMACSS(Scalable and Modular Architecture CSS)는 5가지 간단한 카테고리를 따르는 스타일 가이드입니다.</p>
      <p>SMACSS는 설계 프로세스를 검토하고 이러한 견고한 프레임 워크를 유연한 사고 프로세스에 맞게 조정하는 방법이며, CSS를 사용할 때 사이트 개발에 대한 일관된 접근 방식을 문서화하려는 시도입니다.</p>
      <dl class="uk-dl">
        <dt>정의</dt>
        <dd>
          <p>CSS에 대한 확장형 모듈식 구조(by Jonathan Snook)</p>
          <p>CSS의 프레임워크가 아닌 하나의 스타일 가이드</p>
        </dd>
      </dl>
      <dl class="uk-dl">
        <dt>사용목적</dt>
        <dd>
          <p>Class명을 통한 예측</p>
          <p>재 사용</p>
          <p>확장 가능</p>
        </dd>
      </dl>
      <dl class="uk-dl">
        <dt>네이밍 규칙</dt>
        <dd>
          <p>SMACSS의 네이밍 규칙은 레이아웃의 경우 .l-* or .layout or #layout 이며, 모듈은 .module state는 .is-* or .s-* theme는 .theme or .theme-* 입니다.</p>
          <p>이름은 소문자 라틴 문자로 작성됩니다.</p>
          <p>레이아웃을 제외하고 id 선택자를 사용하지 않습니다.</p>
          <p>단어는 하이픈 (-) 으로 구분됩니다.</p>
          <pre><code>
/* Example Module */
.example {
  ...
}
 
/* Callout Module */
.callout {
  ...
}
 
/* Callout Module with State */
.callout.is-collapsed {
  ...
}
 
/* Form field module */
.field {
  ...
}
 
/* Inline layout  */
.l-inline {
  ...
}
</code></pre>
        </dd>
      </dl>
      <dl class="uk-dl">
        <dt>핵심 규칙 분류</dt>
        <dd>
          <strong>Base</strong>
          <p>기본값입니다. 여백, 여백, 테두리, 글꼴 및 기타 속성과 같으며, 이 값은 전체 웹 사이트와 모든 요소에 사용됩니다.</p>
          <p>Base에서는 어떤 클래스(class)나 ID 선택 자도 포함하지 않습니다. 또한, !important를 쓸 필요가 없습니다.</p>
          <p>기본 스타일(Reset, Default, Variables, Mixins)</p>
          <p>기본 스타일에는 !important 사용금지</p>
          <pre><code>
예시)
body,p,h1,h2,h3,h4,h5,h6,ul,ol,li,dl,dt,dd,table,th,td,form,fieldset,legend,input,
textarea,button,select{margin:0;padding:0}
body,input,textarea,select,button,table{font-size:14px;line-height:1.25}
body.s,.s input,.s textarea,.s select,.s button,.s table{font-family:helvetica}
body{position:relative;background-color:#fff;color:#000}
body.s{-ms-text-size-adjust:none;-webkit-text-size-adjust:none}
img,fieldset{border:0}
ul,ol{list-style:none}
table{border-collapse:collapse}
em,address{font-style:normal}
a{color:inherit;text-decoration:none}
</code></pre>
          <pre><code>
현재 적용된 예시 - _variable.scss)
// url
$base-url: '';
$css-url: $base-url + '/style/scss/style'; //Default SCSS 경로
$guide-url: $base-url + '/style/scss/guide'; //Guide SCSS 경로
$image-url: $base-url + '/images';
$image-co: $image-url + '/common'; //공통 이미지 경로
$image-icon: $image-url + '/icon'; //공통 아이콘 경로
$image-main: $image-url + '/main'; //메인에 사용되는 Contents 이미지 경로
$image-guide: $image-url + '/guide'; //Guide 이미지 경로
$image-board: $image-url + '/board'; //게사핀 이미지 경로

// color
$color-def: #e6007e !default;
$color-black: #000 !default;
$color-white: #fff !default;
$color-active: #051335 !default;
...... 이하 생략

=====================================================================================================

현재 적용된 예시 - _reset.scss)
html,
body {
  height: 100%;
}
body {
  overflow: auto;
  min-width: $mw-m;
  background-color: $color-white;
  font-size: $font-m;
  font-family: $font-family;
  line-height: 1.5;
  letter-spacing: -0.02em;
  word-break: keep-all;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
..... 이하 생략

=====================================================================================================

현재 적용된 예시 - _common.scss)
$color-fb: #fbfbfb;
.layout-auto {
  width: $w-m;
  margin: 0 auto;
}

//놈이: --h-100 ~ 600 : 50단위
@for $i from 0 through 10 {
  .-h-#{100 + $i*50} {
    height: 100 + $i * 50 + px !important;
  }
}
//상단margin: --mt-0 ~ 100 : 5단위
@for $i from 0 through 20 {
  .-mt-#{$i*5} {
    margin-top: $i * 5 + px !important;
  }
}
..... 이하 생략
</code></pre>
          <strong>Layout</strong>
          <p>페이지를 머리글, 바닥글, 기본 페이지 등과 같은 요소를 지칭합니다. 레이아웃은 하나 이상의 모듈을 함께 유지합니다. 종종 l-이나 layout-이라는 suffix를 이름에 붙입니다.</p>
          <p>레이아웃과 관련된 스타일 정의</p>
          <p>Class명에 suffix “l-”를 붙인다.</p>
          <pre><code>
예시)
#article {float: left;}
#sidebar {float: right;}

.l-flipped #article {float: right;}
.l-flipped #sidebar {float: left;}
</code></pre>
          <pre><code>
현재 적용된 예시 - _l-sub-main.scss)
// Nuxt 안의 콘텐츠 전체 레이아웃
.l-sub-main {
  background-color: $color-white;
}
// Header 전체 감싸는 부분
.header-layout-wrap {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  background-color: $color-white;
}
// Header 가운데 영역
.header-lgu {
  position: relative;
  @include marginAuto;
  height: $header-h;
  background: url($image-url + '/common/sample-img-header.jpg') no-repeat 50% 50%;
}

// 페이지 콘텐츠 감싸는 부분
.submain-section {
  padding-bottom: 200px;
}
..... 이하 생략
</code></pre>
          <strong>Module(Components)</strong>
          <p>모듈은 페이지의보다 개별적인 구성 요소입니다. (nav bar, 이미지 슬라이더, dialogs, widgets, tables, icons 등) 각 모듈은 독립형 구성 요소로 존재하도록 설계되어야합니다.</p>
          <p>모듈에서는 재사용을 위해 id 셀렉터와 element를 사용하지 않습니다.</p>
          <p>만약, element 셀렉터를 사용해야 한다면, .box > span 처럼 child 셀렉터를 사용합니다.</p>
          <p>모듈 관련 스타일</p>
          <p>스타일 재 사용을 위한 요소</p>
          <p>Block, Element, Module</p>
          <p>사용 예시) nav bar, 이미지 슬라이더, dialogs, widgets, tables, icons</p>
          <pre><code>
예시)
.folder > span {
  padding-left: 20px;
  background: url(icon.png);
}

.folder {
  ...
}
 
.folder .name {
  ...
}
 
.folder .date {
  ...
}
</code></pre>
          <pre><code>
현재 적용된 예시 - _input.scss)
Class명에 Components를 구분하는 suffix "c-"를 붙여서 사용
.c-inpfield {
  ...
  .c-label {
    ...
  }
}
</code></pre>
          <strong>State</strong>
          <p>State는 상태를 나타내는 스타일입니다.</p>
          <p>이는 특정 상태에있을 때 모듈 또는 레이아웃이 어떻게 표시되는지 설명하는 방법입니다.</p>
          <p>주로 Hidden, expend, active, hover 등의 상태에서 사용합니다.</p>
          <p>또한 이는, 자바스크립트 종속성을 나타내기도 합니다.</p>
          <p>클래스(class)에 suffix "is-" 또는 "s-" 를 붙여서 사용합니다.</p>
          <textarea>
예시)
<div class="btn_area">
  <a href="#" class="btn btn_good is-active">좋아요버튼</a>
  <a href="#" class="btn btn_bad">나빠요버튼</a>
</div>
          </textarea>
          <pre><code>
예시)
.is-active {
  ...
}

.is-collapsed {
  ...
} 

.btn {
  display: inline-block;
  background: #ddd;
  border-radius: 4px;
}
  
.btn.is-active {
  background: #43f837;
}
  
.btn.is-hidden {
  display: none;
}
</code></pre>
          <pre><code>
현재 적용된 예시 - _is-state.scss)
.is-blind {
  overflow: hidden;
  border: 0;
  position: absolute;
  width: 1px;
  height: 1px;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
}
</code></pre>
          <strong>Theme</strong>
          <p>테마는 사이트 전반적인 컬러감(느낌)(look and feel)을 담당합니다.</p>
          <p>테마를 고유 한 스타일 세트로 분리하며, 해당 스타일을 대체 테마로 쉽게 재정의 할 수 있습니다.</p>
          <p>또한, 테마는 기본 유형에 영향을 줄 수 있습니다.</p>
          <p>기본 링크 색상과 같은 기본 스타일을 무시할 수 있습니다.</p>
          <p>적용범위가 넓은 테마는 theme-* 를 suffix를 붙여 사용합니다.</p>
          <p>색상이나 이미지를 불변하는 스타일과 분리, 기존 스타일을 재 선언하여 사용할 수 있다.</p>
          <p>적용범위가 넓은 테마는 "theme-"를 suffix를 붙여 사용한다.</p>
          <pre><code>
예시)
/* in module-name.css */
.mod {
  border: 1px solid;
}

/* in theme.css */
.mod {
  border-color: blue;
}

=============================

현재 프로젝트에서는 사용 하지 않고, 기본 common에서 상황에 맞게 사용.
</code></pre>
        </dd>
      </dl>
      <dl class="uk-dl">
        <dt>SMACSS의유의사항</dt>
        <dd>
          <p>파생된 CSS 셀렉터 사용금지</p>
          <p>ID 셀렉터 사용금지</p>
          <p>!important 사용 금지</p>
          <p>Class 이름은 의미있게, 다른 개발자가 이해할 수 있도록 선언</p>
        </dd>
      </dl>
      <dl class="uk-dl">
        <dt>SMACSS 장점</dt>
        <dd>
          <strong>범주화를 통한 패턴화</strong>
          <p>5개의 범주화(Base, Layout, Module, State, Theme)를 통해 알아보기 쉽고 재사용 가능한 컴포넌트를 작성할 수 있습니다.</p>
          <strong>모듈 및 요소의 상태 확인</strong>
          <p>State 규칙을 통해 해당 요소의 상태까지 예측할 수 있으며, 이는 자바스크립트 훅을 추가하여 이벤트를 예측하기 쉽게할 수 있습니다.</p>
        </dd>
      </dl>
      <dl class="uk-dl">
        <dt>SMACSS 단점</dt>
        <dd>
          <strong>규칙에 대한 종속성</strong>
          <p>규칙으로 CSS 작성에 제한을 둘 수 있습니다.</p>
        </dd>
      </dl>
      <p>참조 URL : <a href="http://smacss.com/" target="_blank">smacss.com/</a></p>
      <br />
      <h3 class="h5">OOCSS(Object Oriented CSS)</h3>
      <dl class="uk-dl">
        <dt>정의</dt>
        <dd>
          <p>Object Oriented CSS의 약자</p>
          <p>Nicole Sullivan에 의해 개발된 프레임워크</p>
          <p>CSS를 모듈 방식으로 코딩하여 중복을 최소화하는 기법</p>
        </dd>
      </dl>
      <dl class="uk-dl">
        <dt>주요원리</dt>
        <dd>
          <p>구조와 외양을 분리. 외양(skin)으로 분리시켜, 결합시키면 다양한 결과물을 얻을 수 있음.</p>
          <pre><code>
예시)
.button {
  ...
}
.box {
  ...
}
.widget {
  ...
}
.skin {
  background: linear-gradient(#ccc, #222);
  box-shadow: rgba(0, 0, 0, .5) 2px 2px 5px;
}
</code></pre>
          <p>컨테이너와 컨텐츠를 분리하자</p>
          <pre><code>
예시)
.header-inside{
  position:relative;
  margin:0 auto;
  width:980px;
  height:260px;
  padding:20px;
  overflow:hidden;
}
</code></pre>
          <p>다른 영역에서도 사용가능하도록 .header-inside라는 속성으로 추출(분리)하면, 중복 코드를 사용하게 되는 경우가 적어진다.</p>
          <pre><code>
예시)
.globalwidth{
  position:relative;
  padding-left:20px;
  padding-right:20px;
  margin:0 auto;
  width:980px;
  overflow:hidden;
}
.header-inside{
  padding-top:20px;
  padding-bottom:20px;
  height:260px;
}
</code></pre>
          <textarea>
예시)
<div class="header-inside globalwidth"></div>
<div class="main globalwidth"></div>
<div class="footer-inside globalwidth"></div>
          </textarea>
        </dd>
      </dl>
      <dl class="uk-dl">
        <dt>클래스 이름 짓기</dt>
        <dd>
          <p>간결함: 되도록 짧게</p>
          <p>명료함: 스타일과 작동 방식이 고스란히 드러나게</p>
          <p>분명한 말뜻(Semantics): 어떻게 생겼는지가 아니라, 어떤 모듈인지</p>
          <p>포괄성: 대부분의 사이트에서도 적용되도록</p>
          <p>화면 중심성: 종이나 다른 매체가 아닌 모니터를 기준으로</p>
          <p>예시) - 중복되는 스타일이 많은 경우</p>
          <pre><code>
예시)
.twitterbtn {
  border:3px solid #000;
  padding:10px 20px;
  color:#fff;
  border-radius:10px;
  background:red;
}
.facebookbtn {
  border:3px solid #000;
  padding:10px 20px;
  color:#fff;
  border-radius:10px;
  background:gray;
}
</code></pre>
          <textarea>
예시)
<a href="#" class="twitterbtn">Twitter</div>
<a href="#" class="facebookbtn">Facebook</div>
          </textarea>
          <p>OOCSS를 적용예시</p>
          <pre><code>
.btnbase {
  border:3px solid #000;
  padding:10px 20px;
  color:#fff;
  border-radius:10px;
}
.twitter {
  background:red;
}
.facebook {
  background:gray;
}
</code></pre>
          <textarea>
예시)
<a href="#" class="btnbase twitter">Twitter</div>
<a href="#" class="btnbase facebook">Facebook</div>
          </textarea>
          <p>CSS코드는 간결해지지만, HTML 코드는 살짝 복잡해지는 경우 발생.</p>
        </dd>
      </dl>
      <dl class="uk-dl">
        <dt>OOCSS의 장점</dt>
        <dd>
          <p>코드의 재사용성</p>
          <p>코드 재사용으로 인한 스타일시트의 용량 축소</p>
          <p>스타일시트의 용량 축소로 인한 속도 향상</p>
        </dd>
        <dt>OOCSS의 단점</dt>
        <dd>
          <p>다중 클래스 사용으로 HTML가 복잡해짐</p>
          <p>non-semantic한 클래스 사용</p>
          <p>Sass와 함께 사용하게 되면 단점을 보완할 수 있음</p>
          <pre><code>
예시)
@mixin btnbase{
  border:3px solid #000;
  padding:10px 20px;
  color:#fff;
  border-radius:10px;
}
.twitterbtn {
  @include btnbase;
  background:red;
}
.facebookbtn {
  @include btnbase;
  background:gray;
}
</code></pre>
          <pre><code>
예시)
.btnbase{
  border:3px solid #000;
  padding:10px 20px;
  color:#fff;
  border-radius:10px;
}
.twitterbtn {
  @extend .btnbase;
  background:red;
}
.facebookbtn {
  @extend .btnbase;
  background:gray;
}
</code></pre>
          <textarea>
예시)
<a href="#" class="twitterbtn">Twitter</div>
<a href="#" class="facebookbtn">Facebook</div>
          </textarea>
          <p>참조 URL : <a href="http://takazudo.github.io/presentation-oocss-sass/#/" target="_blank">OOCSS-SASS 참조</a></p>
        </dd>
      </dl>
      <h3 class="h5">BEM(Block, Element, Module[Modifier])</h3>
      <dl class="uk-dl">
        <dt>정의</dt>
        <dd>
          <p>BEM은 Block Element Modifier의 약자이다</p>
          <p>OOP(Object Oriented Programming)와 유사하다</p>
          <p>ID는 사용할 수 없고, 오직 class명만 사용할 수 있다</p>
          <p>.header__navigation‐‐secondary과 같은 class를 사용한다</p>
          <p>BEM은 Block, Element, modifier로 조합되며, 각각의 의미는 아래와 같습니다.</p>
        </dd>
      </dl>
      <dl class="uk-dl">
        <dt>Block</dt>
        <dd>
          <p>Block은 재사용 할 수있는 기능적으로 독립적 인 페이지 구성 요소입니다.</p>
          <p>block은 문단 전체에 적용된 element 또는 element를 담고 있는 컨테이너를 말한다.</p>
          <p>ex) logo / login form / menu / search from / content / footer</p>
        </dd>
      </dl>
      <dl>
        <dt>Element</dt>
        <dd>
          <p>element는 block 안에서 특정 기능을 수행하는 컴포넌트이다. element는 상황에 따라 달라진다. 각 element는 두 개의 밑줄표시로 연결하여 block 다음에 작성한다.</p>
          <pre><code>
예시)
.header__logo { … }
.header__menu { … }
.header__search { … }
.header__login { … }
</code></pre>
          <p>block 이름이나 element 이름이 길 경우 – 하이픈으로 연결한다. (강제성은 없음, 프로젝트의 규칙을 적용하면 됨)</p>
          <pre><code>
예시)
.block-name__element-name
</code></pre>
        </dd>
      </dl>
      <dl class="uk-dl">
        <dt>Modifiers</dt>
        <dd>
          <p>Modifier은 block 또는 element의 속성이다</p>
          <p>이 속성은 block 또는 element의 외관이나 상태를 변화시킨다</p>
          <p>Class명은 "–"를 추가하여 modifier 추가</p>
          <pre><code>
예시)
.block‐‐modifier {…}
.block__element--modifier {…}
</code></pre>
          <p>탭 메뉴가 다른 영역에서 다른 스타일로 사용된다면, 메인 속성을 복사하여 추가 하거나,</p>
          <p>전 처리 장치인 sass의 @extend를 활용하여 속성을 상속 받을 수 있다</p>
          <pre><code>
예시)
.header__navigation {
      background: #008cba;
      padding: 1px 0;
      margin: 2px 0;
}
.header__navigation‐‐secondary {
      @extend .header__navigation;
      background: #dfe0e0;
 }
</code></pre>
          <p>단점으로 class명이 너무 길어지는 경우 발생.</p>
          <p>BEM의 class명은 구체적이고 명료하여 HTML안에서도 읽기 쉬워야 한다</p>
          <p>class명이 무엇을 나타내는지 분명하게 전달돼야 한다</p>
          <p>
            참조 URL :
            <a href="https://en.bem.info/" target="_blank">BEM INFO</a> /
            <a href="https://en.bem.info/methodology/filestructure/" target="_blank">BEM 방법에 따라 파일 작업을 위한 툴 Class명의 정의 말고도 BEM은 파일 분리 시스템을 정의 하고 있다.</a>
          </p>
        </dd>
      </dl>
      <dl class="uk-dl">
        <dt>네이밍 규칙</dt>
        <dd>
          <p>BEM의 네이밍 규칙은 .block-name__elem-name_mod-name_mod-val orblock-name__elem-name--mod-name--mod-val or ETC입니다.</p>
          <p>이름은 소문자 라틴 문자로 작성됩니다.</p>
          <p>단어는 하이픈 (-) 으로 구분됩니다.</p>
          <p>Block 이름은 Element와 Modifier의 네임 스페이스 를 정의합니다 .</p>
          <p>Element 이름은 Block 이름에서 밑줄 (__)로 구분됩니다.</p>
          <p>Modifier은 Block 또는 Element 이름과 밑줄 (_)로 구분됩니다.</p>
          <p>Modifier 값은 밑줄 (_)로 Modifier 이름과 구분됩니다.</p>
          <p>Boolean 수식 자의 경우, 값은 이름에 포함되지 않습니다.</p>
          <textarea style="height: 480px">
예시)
<header class="header">
  <img class="logo">
  <form class="search-form">
    <input class="search-form__input">
    <button class="search-form__btn">
    </button>
  </form>
  <ul class="lang-switcher">
    <li class="lang-switcher__item">
      <a class="lang-switcher__link" href="url">
        ko
      </a>
    </li>
    <li class="lang-switcher__item">
      <a class="lang-switcher__link" href="url">
        en
      </a>
    </li>
  </ul>
</header>
          </textarea>
        </dd>
      </dl>
      <dl class="uk-dl">
        <dt>BEM 장점</dt>
        <dd>
          재사용성과 직관적인 클레스(class)
          <p>BEM은 이해하기 쉽고, 직관적인 클레스 이름의 작명을 하기가 쉽습니다.</p>
          <p>또한, Block 기반의 스타일로 Block을 다른 곳에 재사용하기 쉽습니다.</p>
          <p>클레스(class) 중복 방지</p>
          <p>BEM은 Block 단위의 class name을 통해 CSS의 원치 않은 상속을 제한하며, 클레스 네임 중복을 방지합니다.</p>
        </dd>
        <dt>BEM 단점</dt>
        <dd>
          네이밍 명명법의 한계
          <p>
            BEM은 초기 Block의 네이밍은 간결하지만 안에 세부 요소로 들어갈수록 복잡한 명명법을 갖게 됩니다. 이는 HTML내 복잡한 클래스(class)를 갖게 되며, 익숙치 않을 경우 괴이한 모습으로 비춰질 수
            있습니다.
          </p>
        </dd>
      </dl>
      <br />
      <br />
      <p>
        이 밖에 Atomic CSS, SuitCSS, ITCSS 등 다양한 효율적인 CSS 작성을 위한 방법론들이 존재합니다. 이러한 CSS 방법론은 유지보수 용이하고 재사용을 위한 하나의 방법이자 제안일 뿐이며, 다양한 방법론을
        혼영할 수 있고 혹은 사용을 하지 않을수도 있습니다.<br />
        또한, 여기서 나오는 장점과 단점은 해당 방법론에 적용되는 사항이 아닌, 방법론 전체에 대한 장점이자 단점으로 작용할 수 있습니다.<br />
        현재 프로젝트를 진행하기 위한 방법론을 제시한 것 뿐입니다. 실제로는 작업하면서 협업을 통해 진행하는 방법이 최선입니다.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Setting',
  layout: 'guide',
  data() {
    return {
      title: '프로젝트 환경',
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>

<style lang="scss" scoped></style>
