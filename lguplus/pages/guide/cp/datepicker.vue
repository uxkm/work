<template>
  <section role="contentinfo" class="uksection" aria-label="Datepicker">
    <h1 class="h1">{{ title }}</h1>
    <p class="h4">Input Field(날짜형식 + Vue2 Datepicker 혼합)</p>
    <p>
      접근성 관련 Vue Datepicker 사용시 마크업 구조가 label이 제외 되어 있음.<br />
      input class mx-input 을 감싸고 있는 div class mx-input-wrapper 안에 input과 형제요소로 label요소가 삽입되고,<br />
      input 요소 ID와 매칭이 되도록 개선 필요.
    </p>
    <br />
    <strong>[접근성 구조 적용예시]</strong>
    <div class="c-inpfield column-date">
      <label class="c-label" for="cfrmDatePicker-1-1">
        출국예정일
        <span class="is-need"><i class="is-blind">필수항목</i></span>
      </label>
      <div class="c-inpform-group">
        <div class="c-inpform">
          <span class="is-blind">출국예정 년도</span>
          <input id="cfrmDatePicker-1-1" type="text" name="" placeholder="YYYY" title="출국예정 년도 네자 입력" class="c-inp" />
          <span class="text-date">년</span>
          <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
        </div>
        <div class="c-inpform">
          <span class="is-blind">출국예정 월</span>
          <input type="text" name="" placeholder="MM" title="출국예정 월 두자 입력" class="c-inp" />
          <span class="text-date">월</span>
          <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
        </div>
        <div class="c-inpform">
          <span class="is-blind">출국예정 일</span>
          <input type="text" name="" placeholder="DD" title="출국예정 일 두자 입력" class="c-inp" />
          <span class="text-date">일</span>
          <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
        </div>
      </div>
    </div>
    <br />
    <strong>[개선필요 DatePicker 적용예시]</strong>
    <client-only>
      <div class="m-vue2-datepicker c-inpfield column-date">
        <Date-picker v-model="time1" value-type="format" placeholder="YYYY" class="c-inpform"></Date-picker>
        <Date-picker v-model="time2" type="datetime" placeholder="YYYY" class="c-inpform"></Date-picker>
        <Date-picker v-model="time3" range class="c-inpform"></Date-picker>
      </div>
    </client-only>
    <div class="code-editor">
      <textarea style="height: 1026px">
        
================================================================================
vue에 적용된 마크업 구조
<div class="m-vue2-datepicker c-inpfield column-date">
  <Date-picker v-model="time1" value-type="format" placeholder="YYYY" class="c-inpform"></Date-picker>
  <Date-picker v-model="time2" type="datetime" class="c-inpform"></Date-picker>
  <Date-picker v-model="time3" range class="c-inpform"></Date-picker>
</div>
================================================================================
접근성 관련 개선 필요 부분 - 크롬 요소검사로 보이는 마크업 구조
<div class="m-vue2-datepicker c-inpfield column-date">
  <div class="c-inpform mx-datepicker">
    <div class="mx-input-wrapper">
      <input name="date" type="text" autocomplete="off" placeholder="YYYY" class="mx-input">
      <i class="mx-icon-calendar"></i>
    </div>
  </div>
</div>


==== 변경되어야 하는 부분(기존 Vue 구조) =====
(접근성 구조에 맞추어서 변경되어야 하는 Vue 구조) 예시1
div class='mx-input-wrapper'  >>> label class='mx-input-wrapper' 로 변경 후 input title 제공 / <span class="in-blind">날짜 입력</span> 삽입 후 숨김처리
<div class="m-vue2-datepicker c-inpfield column-date">
  <div class="c-inpform mx-datepicker">
    <label class="mx-input-wrapper">
      <span class="in-blind">날짜 입력</span>
      <input name="date" type="text" autocomplete="off" placeholder="YYYY" class="mx-input">
      <i class="mx-icon-calendar"></i>
    </label>
  </div>
</div>

==== 변경되어야 하는 부분(기존 Vue 구조) =====
(접근성 구조에 맞추어서 변경되어야 하는 Vue 구조) 예시2
<label for="id1" class="in-blind">날짜 입력</label> 제공 후 input id값과 매칭 input title 제공

<div class="m-vue2-datepicker c-inpfield column-date">
  <div class="c-inpform mx-datepicker">
    <div class="mx-input-wrapper">
      <label for="id1" class="in-blind">날짜 입력</label>
      <input id="id1" name="date" type="text" autocomplete="off" placeholder="YYYY" class="mx-input">
      <i class="mx-icon-calendar"></i>
    </div>
  </div>
</div>
================================================================================
      </textarea>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Datepicker',
  layout: 'guide',
  data() {
    return {
      title: 'Datepicker System',
      time1: null,
      time2: null,
      time3: null,
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
