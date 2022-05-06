<template>
  <section role="contentinfo" class="uksection" aria-label="Toggle">
    <h1 class="h1">{{ title }}</h1>
    <p class="h4">Toggle(Switch) - <small>토글 버튼은 주로 켜기/끄기(선택/미선택) 용도로 사용하는 물리적 스위치 모습의 버튼이다.</small></p>
    <br />
    <div class="c-inpfield">
      <label class="c-switch">
        <input type="checkbox" />
        <i class="switch-handle"></i>
        <span class="text-switch">꺼짐(Default)</span>
      </label>
      <label class="c-switch">
        <input type="checkbox" checked />
        <i class="switch-handle"></i>
        <span class="text-switch">켜짐(Checked)</span>
      </label>
      <label class="c-switch">
        <input type="checkbox" disabled />
        <i class="switch-handle"></i>
        <span class="text-switch">비활성화(Disabled)</span>
      </label>
    </div>
    <div class="code-editor">
      <textarea style="height: 420px">
================================================================================
Toggle/Switch input type checkbox 을 활용
기본사이즈 w:30px/h:16px
================================================================================
<label class="c-switch">
  <input type="checkbox" />
  <i class="switch-handle"></i>
  <span class="text-switch">꺼짐(Default)</span>
</label>
<label class="c-switch">
  <input type="checkbox" checked />
  <i class="switch-handle"></i>
  <span class="text-switch">켜짐(Checked)</span>
</label>
<label class="c-switch">
  <input type="checkbox" disabled />
  <i class="switch-handle"></i>
  <span class="text-switch">비활성화(Disabled)</span>
</label>
      </textarea>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Toggle',
  layout: 'guide',
  data() {
    return {
      title: 'Toggle System',
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
