<template>
  <section role="contentinfo" class="uksection uk_index" aria-label="Button type">
    <h1>{{ title }}</h1>
    <div class="c-btn-group">
      <button href="#" class="c-btn-cancel">취소</button>
      <button class="c-btn-ok">확인</button>
      <button class="c-btn-ok disabled">확인</button>
    </div>
    <div class="code-editor">
      <textarea style="height: 200px">
<div class="c-btn-group">
  <button href="#" class="c-btn-cancel">취소</button>
  <button class="c-btn-ok">확인</button>
  <button class="c-btn-ok disabled">확인</button>
</div>
      </textarea>
    </div>
    <div class="c-btn-group">
      <button class="c-btn-cancel c-sm">기획전보기</button>
      <button class="c-btn-outline c-sm">이벤트참여</button>
      <button class="c-btn-ok c-sm">구매하기</button>
    </div>
    <div class="code-editor">
      <textarea style="height: 200px">
<div class="c-btn-group">
  <button class="c-btn-cancel c-sm">기획전보기</button>
  <button class="c-btn-outline c-sm">이벤트참여</button>
  <button class="c-btn-ok c-sm">구매하기</button>
</div>
      </textarea>
    </div>
    <div class="c-btn-group">
      <button class="c-btn-cancel c-ssm">기획전보기</button>
      <button class="c-btn-outline c-ssm">이벤트참여</button>
      <button class="c-btn-ok c-ssm">구매하기</button>
    </div>
    <div class="code-editor">
      <textarea style="height: 200px">
<div class="c-btn-group">
  <button class="c-btn-cancel c-ssm">기획전보기</button>
  <button class="c-btn-outline c-ssm">이벤트참여</button>
  <button class="c-btn-ok c-ssm">구매하기</button>
</div>
      </textarea>
    </div>
    <div class="c-btn-group">
      <button class="c-btn-gray-round-1">버튼</button>
      <button class="c-btn-gray-round-1">버튼삭제</button>
      <button class="c-btn-gray-round-1 c-file-find">파일찾기</button>
      <button class="c-btn-gray-round-1 disabled">버튼삭제</button>
    </div>
    <div class="code-editor">
      <textarea style="height: 200px">
<div class="c-btn-group">
  <button class="c-btn-gray-round-1">버튼</button>
  <button class="c-btn-gray-round-1">버튼삭제</button>
  <button class="c-btn-gray-round-1 c-file-find">파일찾기</button>
  <button class="c-btn-gray-round-1 disabled">버튼삭제</button>
</div>
      </textarea>
    </div>
    <div class="c-btn-group">
      <a href="#" class="c-btn-txt-detail-1">자세히보기</a>
    </div>
    <div class="c-btn-group">
      <a href="#" class="c-btn-txt-more-1">더보기</a>
    </div>
    <div class="code-editor">
      <textarea style="height: 200px">
==========================자세히보기 버튼========================================================================
<div class="c-btn-group">
  <a href="#" class="c-btn-txt-detail-1">자세히보기</a>
</div>
============================더보기 버튼==========================================================================
<div class="c-btn-group">
  <a href="#" class="c-btn-txt-more-1">더보기</a>
</div>
      </textarea>
    </div>
    <p>
      기타 궁금한 사항은
      <a href="#"><strong class="underline">자주하는 질문</strong></a
      >이나 <a href="#"> <strong class="underline-bold">1:1 문의</strong></a
      >를 통해 확인해주세요.
    </p>
    <div class="code-editor">
      <textarea style="height: 200px">
<p>
  기타 궁금한 사항은
  <a href="#"><strong class="underline">자주하는 질문</strong></a>이나 
  <a href="#"> <strong class="underline-bold">1:1 문의</strong></a>를 통해 확인해주세요.
</p>
      </textarea>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ButtonType',
  layout: 'guide',
  data() {
    return {
      title: 'Button Type',
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
