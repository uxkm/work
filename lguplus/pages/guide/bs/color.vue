<template>
  <section role="contentinfo" class="uksection" aria-label="Color">
    <h1 class="h1">{{ title }}</h1>
    <div class="uktblbox">
      <dl>
        <dt>
          01. Primary Color
          <span>Primary Color는 LG유플러스의 포인트 컬러로 강조되는 <br />콘텐츠를 표현하기 위한 색상</span>
        </dt>
        <dd>
          <div class="clbox">
            <div class="cl-item">
              <div class="bgbox bg-def cl-white">UPLUS Magenta</div>
              <p class="cltext">#E6007E<br />중요한 element</p>
            </div>
          </div>
          <div class="code-editor cl-codbox">
            <textarea>
<!-- Primary Color : #e6007e -->
<!-- Font Color class name cl-def -->
<p class="cl-def">Default Font Color</p>

<!-- BG Color class name bg-def -->
<p class="bg-def">Default BG Color</p>

<!-- 변수 Color 사용 시 해당 Color부분에 사용 -->
$color-def
            </textarea>
          </div>
        </dd>
      </dl>
      <dl>
        <dt>
          02. Secondary Color
          <span>다양한 컴포넌트와 그래픽 활용을 위한 색상</span>
        </dt>
        <dd>
          <div class="clbox">
            <div class="cl-item">
              <div class="bgbox bg-black cl-white"></div>
              <p class="cltext">#000000 <br />기본 레이아웃</p>
            </div>
            <div class="cl-item">
              <div class="bgbox bg-white cl-white"></div>
              <p class="cltext">#FFFFFF <br />기본 레이아웃</p>
            </div>
            <div class="cl-item">
              <div class="bgbox bg-active cl-white"></div>
              <p class="cltext">#051335 <br />기본 레이아웃</p>
            </div>
          </div>
          <div class="code-editor cl-codbox">
            <textarea>
<!-- Secondary Color : #000, #fff, #051335 -->
<!-- Font Color class name cl-def, cl-white, cl-active -->
<p class="cl-black">기본 레이아웃 Font Color #000</p>
<p class="cl-white">기본 레이아웃 Font Color #fff</p>
<p class="cl-active">기본 레이아웃 Font Color #051335</p>

<!-- BG Color class name bg-black, bg-white, bg-active -->
<p class="bg-black">기본 레이아웃 BG Color #000</p>
<p class="bg-white">기본 레이아웃 BG Color #fff</p>
<p class="bg-active">기본 레이아웃 BG Color #051335</p>

<!-- 변수 Color 사용 시 해당 Color부분에 사용 -->
$color-def, $color-white, $color-active
            </textarea>
          </div>
        </dd>
      </dl>
      <dl>
        <dt>
          03. Basic Color
          <span
            >베이직 색상은 모바일의 기본 요소인 텍스트, 라인, 배경 등에
            <br />
            사용되는 색상으로 우측에 제시된 색상 코드 값을 사용한다.
          </span>
        </dt>
        <dd>
          <div class="clbox">
            <div class="cl-item">
              <div class="bgbox bg-err cl-white"></div>
              <p class="cltext">#E34140 <br />부정, 오류</p>
            </div>
            <div class="cl-item">
              <div class="bgbox bg-suc cl-white"></div>
              <!-- <p class="cltext">#0066CC <br />긍정, 성공</p> -->
              <!-- [(210311) - WSG v0.4 긍정 color 수정되어 변경] -->
              <p class="cltext">#00AA2F <br />긍정, 성공</p>
            </div>
          </div>
          <div class="clbox">
            <div class="cl-item">
              <div class="bgbox bg-gray1 cl-white"></div>
              <p class="cltext">#666666 <br />텍스트, 라인, 배경</p>
            </div>
            <div class="cl-item">
              <div class="bgbox bg-gray2 color-3"></div>
              <p class="cltext">#AAAAAA <br />텍스트, 라인, 배경</p>
            </div>
            <div class="cl-item">
              <div class="bgbox bg-gray3 color-3"></div>
              <p class="cltext">#BBBBBB <br />텍스트, 라인, 배경</p>
            </div>
          </div>
          <div class="clbox">
            <div class="cl-item">
              <div class="bgbox bg-gray4 color-3"></div>
              <p class="cltext">#DDDDDD <br />텍스트, 라인, 배경</p>
            </div>
            <div class="cl-item">
              <div class="bgbox bg-gray5 color-3"></div>
              <p class="cltext">#EEEEEE <br />텍스트, 라인, 배경</p>
            </div>
            <div class="cl-item">
              <div class="bgbox bg-gray6 color-3"></div>
              <p class="cltext">#F3F3F3 <br />텍스트, 라인, 배경</p>
            </div>
          </div>
          <div class="clbox">
            <div class="cl-item">
              <div class="bgbox bg-gray7 color-3"></div>
              <p class="cltext">#F5F5F5 <br />텍스트, 라인, 배경</p>
            </div>
            <div class="cl-item">
              <div class="bgbox bg-gray8 color-3"></div>
              <p class="cltext">#F8F8F8 <br />텍스트, 라인, 배경</p>
            </div>
            <div class="cl-item">
              <div class="bgbox bg-gray9 color-3"></div>
              <p class="cltext">#FAFAFA <br />텍스트, 라인, 배경</p>
            </div>
          </div>
          <div class="code-editor cl-codbox">
            <textarea style="height: 1174px">
<!-- 
  Basic Color
  #e34140, #06c,
  #666, #aaa, #bbb, #ddd, #eee, #f3f3f3,
  #f5f5f5, #f8f8f8, #f9f9f9 
-->
<!-- Font Color class name cl-err, cl-suc -->
<p class="cl-err">부정, 오류 Font Color #e34140</p>
<p class="cl-suc">긍정, 성공 Font Color #06c</p>

<p class="cl-gray1">텍스트, 라인, 배경 Font Color #666</p>
<p class="cl-gray2">텍스트, 라인, 배경 Font Color #aaa</p>
<p class="cl-gray3">텍스트, 라인, 배경 Font Color #bbb</p>
<p class="cl-gray4">텍스트, 라인, 배경 Font Color #ddd</p>
<p class="cl-gray5">텍스트, 라인, 배경 Font Color #eee</p>

<p class="cl-gray6">배경 Font Color #f3f3f3</p>
<p class="cl-gray7">배경 Font Color #f5f5f5</p>
<p class="cl-gray8">배경 Font Color #f8f8f8</p>

<!-- BG Color class name cl-err, cl-suc -->
<p class="bg-err">부정, 오류 BG Color #000</p>
<p class="bg-suc">긍정, 성공 BG Color #06c</p>

<p class="bg-gray1">텍스트, 라인, 배경 BG Color #666</p>
<p class="bg-gray2">텍스트, 라인, 배경 BG Color #aaa</p>
<p class="bg-gray3">텍스트, 라인, 배경 BG Color #bbb</p>
<p class="bg-gray4">텍스트, 라인, 배경 BG Color #ddd</p>
<p class="bg-gray5">텍스트, 라인, 배경 BG Color #eee</p>

<p class="bg-gray6">배경 BG Color #f3f3f3</p>
<p class="bg-gray7">배경 BG Color #f5f5f5</p>
<p class="bg-gray8">배경 BG Color #f8f8f8</p>

<!-- 변수 Color 사용 시 해당 Color부분에 사용 -->
부정, 오류 - $color-err
긍정, 성공 - $color-suc
Gray1 - $color-6
Gray2 - $color-a
Gray3 - $color-b
Gray4 - $color-d
Gray5 - $color-e
Gray6 - $color-f3
Gray7 - $color-f5
Gray8 - $color-f8
Gray9 - $color-fa
            </textarea>
          </div>
        </dd>
      </dl>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Color',
  layout: 'guide',
  data() {
    return {
      title: 'Color System',
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
