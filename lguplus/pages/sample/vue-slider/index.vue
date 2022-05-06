<template>
  <div style="margin-left: 100px">
    <h1>vue-slider-componet</h1>
    <div style="width: 500px">
      <h2>Single</h2>
      <div class="m-slider-component">
        <vue-slider v-model="sliderSingleInfo.val" />
      </div>
    </div>
    <div style="width: 500px">
      <h2>Multiple</h2>
      <div class="m-slider-component">
        <vue-slider v-model="sliderMultipleInfo.val" />
      </div>
    </div>
    <div style="width: 500px">
      <h2>Desabled</h2>
      <div class="m-slider-component">
        <vue-slider v-model="sliderDisabledInfo.value1" :disabled="true"></vue-slider>
        <vue-slider v-model="sliderDisabledInfo.value2" :dot-options="sliderDisabledInfo.dotOptions" :order="false"></vue-slider>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliderSingleInfo: {
        val: 1,
      },
      sliderMultipleInfo: {
        val: [0, 100],
      },
      sliderDisabledInfo: {
        value1: 0,
        value2: [0, 50],
        dotOptions: [
          {
            disabled: false,
          },
          {
            disabled: true,
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
