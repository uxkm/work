<template>
  <div>
    <div v-if="fruit === '사과'">사과</div>
    <div v-else-if="fruit === '배'">배</div>
    <div v-else>기타</div>

    <br />

    <div v-show="fruit === '사과'">사과</div>
    <div v-show="fruit === '배'">배</div>
  </div>
</template>

<script>
export default {
  data: () => ({
    fruit: '사과',
  }),
};
</script>

<style></style>
