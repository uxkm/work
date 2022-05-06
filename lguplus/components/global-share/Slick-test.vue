<template>
  <div>
    <div class="m-slick" style="width: 500px; padding: 100px 50px; background-color: skyblue">
      <div ref="tgSlick">
        <div><img src="https://homepages.cae.wisc.edu/~ece533/images/boat.png" alt="" /></div>
        <div><img src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" alt="" /></div>
        <div><img src="https://homepages.cae.wisc.edu/~ece533/images/baboon.png" alt="" /></div>
        <div><img src="https://homepages.cae.wisc.edu/~ece533/images/girl.png" alt="" /></div>
        <div><img src="https://homepages.cae.wisc.edu/~ece533/images/fruits.png" alt="" /></div>
        <div><img src="https://homepages.cae.wisc.edu/~ece533/images/arctichare.png" alt="" /></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slickIns: null,
    };
  },

  mounted() {
    console.info('[mounted > slick-carousel]');
    $(this.$refs.tgSlick).on('init', function (event, slick) {
      console.log('slick-carousel initialized > slick', slick);
    });

    this.slickIns = $(this.$refs.tgSlick).slick({
      prevArrow: "<button type='button' class='slick-prev'>이전</button>",
      nextArrow: "<button type='button' class='slick-next'>다음</button>",
      dotsClass: 'slick-dots',
      dots: true,
    });
  },

  beforeDestroy() {
    console.info('[beforeDestroy > slick-carousel]');
    this.slickIns.slick('unslick');
    console.info('[beforeDestroy > slick-carousel > unslick]', this.slickIns);
  },
};
</script>

<style lang="scss" scoped></style>
