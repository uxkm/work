<template>
  <section role="contentinfo" class="uksection" aria-label="Tag">
    <h1 class="h1">{{ title }}</h1>
    <p class="h4">Tag - <small>태그는 자신의 콘텐츠 및 관심 분야와 관련된 콘텐츠를 쉽게 찾을 수 있도록 한다.</small></p>
    <br />
    <p class="h5">키워드 유형 - 1줄 예시 (가로 사이즈 418px 일 경우)</p>
    <br />
    <div class="c-tag-wrap w-size-418"><a href="#" class="c-tag">#아이폰12</a><a href="#" class="c-tag">#5G요금제</a><a href="#" class="c-tag">#이벤트</a></div>
    <br />
    <p class="h5">키워드 유형 - 2줄 예시 (가로 사이즈 418px 일 경우)</p>
    <br />
    <div class="c-tag-wrap w-size-418">
      <a href="#" class="c-tag">#아이폰12</a>
      <a href="#" class="c-tag">#5G요금제</a>
      <a href="#" class="c-tag">#이벤트</a>
      <a href="#" class="c-tag">#5GApp</a>
      <a href="#" class="c-tag">#혜택</a>
      <a href="#" class="c-tag">#최신모바일기기</a>
    </div>
    <br />
    <p class="h5">키워드 유형 - 추가하기 버튼 있을 시 (가로 사이즈 418px 일 경우)</p>
    <br />
    <div class="c-tag-wrap w-size-418">
      <a href="#" class="c-tag">#아이폰12</a>
      <a href="#" class="c-tag">#5G요금제</a>
      <a href="#" class="c-tag">#이벤트</a>
      <a href="#" class="c-tag">#5GApp</a>
      <a href="#" class="c-tag">#혜택</a>
      <a href="#" class="c-tag">#최신모바일기기</a>
      <button class="c-ibtn-add"><span class="is-blind">추가</span></button>
    </div>
    <hr />
    <strong>[적용 예시]</strong>
    <div class="code-editor">
      <textarea style="height: 350px">
================================================================================
tag 사용은 해당 요소에 class c-tag를 사용 
tag 요소를 감싸는 그룹핑 부분은 class c-tag-wrap을 사용
가로 사이즈는 Contents 디자인에 따라 변동 현재 기본은 w:418px 예시
================================================================================
<div class="c-tag-wrap w-size-418">
  <a href="#" class="c-tag">#아이폰12</a>
  <a href="#" class="c-tag">#5G요금제</a>
  <a href="#" class="c-tag">#이벤트</a>
  <a href="#" class="c-tag">#5GApp</a>
  <a href="#" class="c-tag">#혜택</a>
  <a href="#" class="c-tag">#최신모바일기기</a>
  <button class="c-ibtn-add"><span class="is-blind">추가</span></button>
</div>
      </textarea>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Tag',
  layout: 'guide',
  data() {
    return {
      title: 'Tag System',
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
