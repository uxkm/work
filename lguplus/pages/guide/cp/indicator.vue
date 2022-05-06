<template>
  <section role="contentinfo" class="uksection" aria-label="Indicator">
    <h1 class="h1">{{ title }}</h1>
    <p class="h4">Indicator - <small>인디케이터는 현재 위치 정보를 나타내어 요소를 하나씩 보여주는 역할을 한다.</small></p>
    <div class="code-editor">
      <textarea style="height: 400px">
접근성 관련 수정 이력(21.03.22) - slick-active 부분에 title속성 추가 후 '현재 활성화 페이지' 문구 추가
변경 전 : 
<ul class="slick-dots">
  <li class="slick-active"><button>1</button></li>
  <li><button>2</button></li>
  <li><button>3</button></li>
  <li><button>4</button></li>
  <li><button>5</button></li>
  <li><button>6</button></li>
</ul>
변경 후 : 
<ul class="slick-dots">
  <li class="slick-active" title="현재 활성화 페이지"><button>1</button></li>
  <li><button>2</button></li>
  <li><button>3</button></li>
  <li><button>4</button></li>
  <li><button>5</button></li>
  <li><button>6</button></li>
</ul>
      </textarea>
    </div>
    <ul class="c-bullet-type-cirlce">
      <li>slick slide 사용시 또는 다른 곳에서 사용시 전체 감싸는 부모 요소에 class c-indicator 추가</li>
      <li>c-indicator 안의 slick indicator 영역을 초기화</li>
    </ul>
    <br />
    <p class="h5">Indicator - Black 타입(Slick Slide 구조)</p>
    <br />
    <div class="c-indicator c-indecator-wrap line-black">
      <div class="m-slick">
        <ul class="slick-dots">
          <li class="slick-active" title="현재 활성화 페이지"><button>1</button></li>
          <li><button>2</button></li>
          <li><button>3</button></li>
          <li><button>4</button></li>
          <li><button>5</button></li>
          <li><button>6</button></li>
        </ul>
      </div>
    </div>
    <br />
    <p class="h5">Indicator - White 타입(Slick Slide 구조)</p>
    <br />
    <div class="c-indicator c-indecator-wrap line-white">
      <div class="m-slick">
        <ul class="slick-dots">
          <li class="slick-active" title="현재 활성화 페이지"><button>1</button></li>
          <li><button>2</button></li>
          <li><button>3</button></li>
          <li><button>4</button></li>
          <li><button>5</button></li>
          <li><button>6</button></li>
        </ul>
      </div>
    </div>
    <div class="code-editor">
      <textarea style="height: 400px">
================================================================================
Indicator 부분은 Slick Slide에서 주로 사용되며 현재 위치 정보를 보여주는 부분이라서
기본 가이드는 Slick Slide에서 제공되 마크업 구조로 작업되었음.
전체 감싸는 영역에 class c-indicator를 추가 함으로서 기존 slick lib를 초기화 시켜줌
현재 기본적인 부분만 제어 되었으며, 상세 UI는 Page별 UI 맞추어서 제작해야 함.
================================================================================
<div class="c-indicator c-indecator-wrap line-black">
  <div class="m-slick">
    <ul class="slick-dots">
      <li class="slick-active" title="현재 활성화 페이지"><button>1</button></li>
      <li><button>2</button></li>
      <li><button>3</button></li>
      <li><button>4</button></li>
      <li><button>5</button></li>
      <li><button>6</button></li>
    </ul>
  </div>
</div>
      </textarea>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Indicator',
  layout: 'guide',
  data() {
    return {
      title: 'Indicator System',
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
