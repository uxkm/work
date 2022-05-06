<template>
  <section role="contentinfo" class="uksection" aria-label="Drop Down">
    <h1 class="h1">{{ title }}</h1>
    <p class="h4">Dropdown Field(기본) - <small>드롭 다운 박스는 복수의 옵션 중 한 가지만 선택 가능할 때 사용한다.</small></p>
    <br />
    <strong>[Default]</strong>
    <div class="c-inpfield c-dropbox">
      <label class="c-label" for="cfrmSelect-1-1">5G요금제</label>
      <div class="c-selform">
        <select id="cfrmSelect-1-1" name="" class="c-select" title="5G요금제 선택" aria-describedby="errorText-1-1">
          <option value="" selected>선택</option>
          <option>요금제1</option>
          <option>요금제2</option>
          <option>요금제3</option>
        </select>
        <p class="text-msg" id="errorText-1-1">오류문구 출력</p>
      </div>
    </div>
    <div class="c-selform c-dropbox">
      <select id="cfrmSelect-1-1" name="" class="c-select" title="5G요금제 선택" aria-describedby="errorText-1-2">
        <option value="" selected>선택</option>
        <option>요금제1</option>
        <option>요금제2</option>
        <option>요금제3</option>
      </select>
      <p class="text-msg" aria-describedby="errorText-1-2">오류문구 출력</p>
    </div>
    <br />
    <strong>[Disabled]</strong>
    <div class="c-inpfield c-dropbox">
      <label class="c-label" for="cfrmSelect-1-2">5G요금제</label>
      <div class="c-selform">
        <select id="cfrmSelect-1-2" name="" class="c-select" title="5G요금제 선택" disabled aria-describedby="errorText-1-3">
          <option value="" selected>선택</option>
          <option>요금제1</option>
          <option>요금제2</option>
          <option>요금제3</option>
        </select>
        <p class="text-msg" aria-describedby="errorText-1-3">오류문구 출력</p>
      </div>
    </div>
    <div class="code-editor">
      <textarea style="height: 460px">
================================================================================
Dropdown Field는 기본 select 시멘틱 마크업 구조로 작업
Font Color : #000000, #666666
Font Size : 16px
Font Align : Left
Font Family : Regular
Border Color : #BBBBBB
Border : 1px
================================================================================
<strong>[Default]</strong>
<div class="c-inpfield c-dropbox">
  <label class="c-label" for="cfrmSelect-1-1">5G요금제</label>
  <div class="c-selform">
    <select id="cfrmSelect-1-1" name="" class="c-select" title="5G요금제 선택">
      <option value="" selected>선택</option>
      <option>요금제1</option>
      <option>요금제2</option>
      <option>요금제3</option>
    </select>
  </div>
</div>
<br />
<strong>[Disabled]</strong>
<div class="c-inpfield c-dropbox">
  <label class="c-label" for="cfrmSelect-1-2">5G요금제</label>
  <div class="c-selform">
    <select id="cfrmSelect-1-2" name="" class="c-select" title="5G요금제 선택" disabled>
      <option value="" selected>선택</option>
      <option>요금제1</option>
      <option>요금제2</option>
      <option>요금제3</option>
    </select>
  </div>
</div>
      </textarea>
    </div>
    <strong>[input field + drop 혼합형]</strong>
    <div class="c-inpfield c-dropbox">
      <label class="c-label" for="cfrmSelect-2-1">휴대폰번호</label>
      <div class="c-selform">
        <select id="cfrmSelect-2-1" name="" class="c-select" title="통신사 선택" aria-describedby="errorText2-1">
          <option value="" selected>선택</option>
          <option>요금제1</option>
          <option>요금제2</option>
          <option>요금제3</option>
        </select>
        <p class="text-msg" id="errorText2-1">오류문구 출력</p>
      </div>
      <div class="c-inpform-group column-telnumber">
        <label for="cfrmSelect-2-2" class="is-blind">통신사 앞자리</label>
        <div class="c-selform">
          <select id="cfrmSelect-2-2" name="" class="c-select" title="통산사 앞자리 선택" aria-describedby="errorText2-2">
            <option value="" selected>010</option>
          </select>
          <p class="text-msg" id="errorText2-2">실패 메시지</p>
        </div>
        <!-- 성공 class : is-sus / 실패 class : is-err -->
        <div class="c-inpform is-clear">
          <span class="is-blind">휴대폰번호 번호</span>
          <input type="text" name="" placeholder="" title="연락처 나머지 8자리 입력" class="c-inp" aria-describedby="errorText2-3" />
          <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
          <button class="c-btn-gray-round-1 c-btn-cert">인증하기</button>
          <!-- <p class="text-msg">성공 메시지</p> -->
          <p class="text-msg" id="errorText2-3">실패 메시지</p>
        </div>
      </div>
    </div>
    <br />
  </section>
</template>

<script>
export default {
  name: 'Dropdown',
  layout: 'guide',
  data() {
    return {
      title: 'Dropdown System',
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
