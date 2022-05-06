<template>
  <section role="contentinfo" class="uksection" aria-label="Flag">
    <h1 class="h1">{{ title }}</h1>
    <p class="h4">Flag - <small>타이틀 또는 이미지 위에 부가적인 설명을 위해 붙는 형태이다.</small></p>
    <br />
    <small class="c-flag">최신</small> <small class="c-flag c-flag-type-gray">추천</small>
    <hr />
    <strong>[적용 예시]</strong>
    <ul class="c-bullet-type-cirlce">
      <li>타이틀 또는 이미지 위에 부가적인 설명을 위해 붙는 형태이다. <small class="c-flag">최신</small> small요소 사용</li>
      <li>타이틀 또는 이미지 위에 부가적인 설명을 위해 붙는 형태이다. <small class="c-flag c-flag-type-gray">추천</small> small요소 사용</li>
    </ul>
    <br />
    <p>타이틀 또는 이미지 위에 부가적인 설명을 위해 붙는 형태이다. <small class="c-flag">최신</small> small요소 사용</p>
    <p>타이틀 또는 이미지 위에 부가적인 설명을 위해 붙는 형태이다. <small class="c-flag c-flag-type-gray">추천</small> small요소 사용</p>

    <br />
    <ul class="c-bullet-type-cirlce">
      <li>타이틀 또는 이미지 위에 부가적인 설명을 위해 붙는 형태이다. <span class="c-flag">최신</span> span요소 사용</li>
      <li>타이틀 또는 이미지 위에 부가적인 설명을 위해 붙는 형태이다. <span class="c-flag c-flag-type-gray">추천 span요소 사용</span></li>
    </ul>
    <br />
    <p>타이틀 또는 이미지 위에 부가적인 설명을 위해 붙는 형태이다. <span class="c-flag">추천</span> span요소 사용</p>
    <p>타이틀 또는 이미지 위에 부가적인 설명을 위해 붙는 형태이다. <span class="c-flag c-flag-type-gray">추천</span> span요소 사용</p>
    <div class="code-editor">
      <textarea style="height: 500px">
================================================================================
flag 사용은 <small> 요소에 class c-flag를 사용 
상황에 따라 다른 요소를 사용해도 무방하지만 class c-flag 사용함
default class : c-flag
gray color class : c-flag 에 c-flag-type-gray 추가 
================================================================================
<ul class="c-bullet-type-cirlce">
  <li>타이틀 또는 이미지 위에 부가적인 설명을 위해 붙는 형태이다. <small class="c-flag">최신</small> small요소 사용</li>
  <li>타이틀 또는 이미지 위에 부가적인 설명을 위해 붙는 형태이다. <small class="c-flag c-flag-type-gray">추천</small> small요소 사용</li>
</ul>
<br />
<p>타이틀 또는 이미지 위에 부가적인 설명을 위해 붙는 형태이다. <small class="c-flag">최신</small> small요소 사용</p>
<p>타이틀 또는 이미지 위에 부가적인 설명을 위해 붙는 형태이다. <small class="c-flag c-flag-type-gray">추천</small> small요소 사용</p>

<br />
<ul class="c-bullet-type-cirlce">
  <li>타이틀 또는 이미지 위에 부가적인 설명을 위해 붙는 형태이다. <span class="c-flag">최신</span> span요소 사용</li>
  <li>타이틀 또는 이미지 위에 부가적인 설명을 위해 붙는 형태이다. <span class="c-flag c-flag-type-gray">추천 span요소 사용</span></li>
</ul>
<br />
<p>타이틀 또는 이미지 위에 부가적인 설명을 위해 붙는 형태이다. <span class="c-flag">추천</span> span요소 사용</p>
<p>타이틀 또는 이미지 위에 부가적인 설명을 위해 붙는 형태이다. <span class="c-flag c-flag-type-gray">추천</span> span요소 사용</p>
      </textarea>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Flag',
  layout: 'guide',
  data() {
    return {
      title: 'Flag System',
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
