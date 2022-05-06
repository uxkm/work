<template>
  <div>
    <h1>vue2-datepicker</h1>
    <!-- 클라이언트에서만 실행되는 로직에는 <client-only> 태그 상요-->
    <client-only>
      <div class="m-vue2-datepicker">
        <Date-picker v-model="time1" value-type="format"></Date-picker>
        <Date-picker v-model="time2" type="datetime"></Date-picker>
        <Date-picker v-model="time3" range></Date-picker>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time1: null,
      time2: null,
      time3: null,
    };
  },
};
</script>

<style lang="scss" scoped></style>
