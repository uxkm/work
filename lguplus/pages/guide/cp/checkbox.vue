<template>
  <section role="contentinfo" class="uksection" aria-label="Checkbox">
    <h1 class="h1">{{ title }}</h1>
    <p class="h4">Checkbox - <small>선택 옵션 중 복수의 옵션을 선택하는 경우 사용한다.</small></p>
    <br />
    <div class="code-editor">
      <textarea style="height: 300px">
접근성 관련 변경 이력(21.03.22) <i class="icon"></i> 요소 추가
변경 전 : 
<label class="c-checkbox">
  <input type="checkbox" name="" />
  <span class="text-chkbox">Default</span>
</label>

변경 후 : 
<label class="c-checkbox">
  <input type="checkbox" name="" />
  <i class="icon"></i>  =======> 텍스트 요소 text-chkbox 부분이 숨겨져 있는 상태가 되었을 때 focus관련 처리하기 위한 i요소 추가
  <span class="text-chkbox">Default</span>
</label>

접근성 관련 변경 이력(21.03.24) 암묵적인 방법에서 명시적인 방법으로 변경 - 센스리더에서 읽어들이는 부분이 input요소와 텍스트를 따로 읽어들이는 현상때문에 변경
변경 전 : 
<label class="c-checkbox">
  <input type="checkbox" name="" />
  <i class="icon"></i>
  <span class="text-chkbox">Default</span>
</label>

변경 후 : 명시적인 방법으로 변경 됨으로 input id와 .text-chkbox의 for 속성을 매칭 시킴.
<span class="c-checkbox">
  <input id="chkBox-1-1-1" type="checkbox" name="" />
  <label for="chkBox-1-1-1" class="text-chkbox">
    <i class="icon"></i>
    <b>Default</b>
  </label>
</span>

화면낭독기(센스리더 기준) 음성 출력 예시)
default : 해제 '텍스트 내용' 체크상자 
Checked : 선택 '텍스트 내용' 체크상자
Disabled : 해제 사용불가 '텍스트 내용' 체크상자
      </textarea>
    </div>
    <br />
    <div class="c-inpfield">
      <span class="c-checkbox">
        <input id="chkBox-1-1-1" type="checkbox" name="" />
        <label for="chkBox-1-1-1" class="text-chkbox">
          <i class="icon"></i>
          <b>Default</b>
        </label>
      </span>
      <span class="c-checkbox">
        <input id="chkBox-1-1-2" type="checkbox" name="" checked />
        <label for="chkBox-1-1-2" class="text-chkbox">
          <i class="icon"></i>
          <b>Checked</b>
        </label>
      </span>
      <span class="c-checkbox">
        <input id="chkBox-1-1-3" type="checkbox" name="" disabled />
        <label for="chkBox-1-1-3" class="text-chkbox">
          <i class="icon"></i>
          <b>Disabled</b>
        </label>
      </span>
    </div>
    <br />
    <p>UI상에 텍스트부분이 숨겨진 경우 추가</p>
    <br />
    <div class="c-inpfield">
      <span class="c-checkbox">
        <input id="chkBox-1-2-1" type="checkbox" name="" />
        <label for="chkBox-1-2-1" class="text-chkbox">
          <i class="icon"></i>
          <b class="is-blind">Default</b>
        </label>
      </span>
      <span class="c-checkbox">
        <input id="chkBox-1-2-2" type="checkbox" name="" checked />
        <label for="chkBox-1-2-2" class="text-chkbox">
          <i class="icon"></i>
          <b class="is-blind">Checked</b>
        </label>
      </span>
      <span class="c-checkbox">
        <input id="chkBox-1-2-3" type="checkbox" name="" disabled />
        <label for="chkBox-1-2-3" class="text-chkbox">
          <i class="icon"></i>
          <b class="is-blind">Disabled</b>
        </label>
      </span>
    </div>
    <div class="code-editor">
      <textarea style="height: 360px">
================================================================================
Checkbox input type checkbox 을 활용
기본사이즈 w:22px/h:22px
================================================================================
<span class="c-checkbox">
  <input id="chkBox-1-1-1" type="checkbox" name="" />
  <label for="chkBox-1-1-1" class="text-chkbox">
    <i class="icon"></i>
    <b>Default</b>
  </label>
</span>
<span class="c-checkbox">
  <input id="chkBox-1-1-2" type="checkbox" name="" checked />
  <label for="chkBox-1-1-2" class="text-chkbox">
    <i class="icon"></i>
    <b>Checked</b>
  </label>
</span>
<span class="c-checkbox">
  <input id="chkBox-1-1-3" type="checkbox" name="" disabled />
  <label for="chkBox-1-1-3" class="text-chkbox">
    <i class="icon"></i>
    <b>Disabled</b>
  </label>
</span>

UI상에 텍스트부분이 숨겨진 경우 추가
<span class="c-checkbox">
  <input id="chkBox-1-2-1" type="checkbox" name="" />
  <label for="chkBox-1-2-1" class="text-chkbox">
    <i class="icon"></i>
    <b class="is-blind">Default</b>
  </label>
</span>
<span class="c-checkbox">
  <input id="chkBox-1-2-2" type="checkbox" name="" checked />
  <label for="chkBox-1-2-2" class="text-chkbox">
    <i class="icon"></i>
    <b class="is-blind">Checked</b>
  </label>
</span>
<span class="c-checkbox">
  <input id="chkBox-1-2-3" type="checkbox" name="" disabled />
  <label for="chkBox-1-2-3" class="text-chkbox">
    <i class="icon"></i>
    <b class="is-blind">Disabled</b>
  </label>
</span>
      </textarea>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Checkbox',
  layout: 'guide',
  data() {
    return {
      title: 'Checkbox System',
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
