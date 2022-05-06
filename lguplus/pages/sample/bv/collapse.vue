<template>
  <div style="padding-left: 100px">
    <h1>Collapse</h1>
    <div style="margin-top: 20px">
      <h2>accordion</h2>
      <!-- 아코디언 1 -->
      <div class="">
        <div>
          <button v-b-toggle.accordion-1 aria-controls="accordion-1">Accordion 1</button>
        </div>
        <b-collapse id="accordion-1" accordion="my-accordion" visible>
          <div>
            {{ AccordionInfo.text }}
          </div>
        </b-collapse>
      </div>
      <!-- // 아코디언 1 -->
      <!-- 아코디언 2 -->
      <div class="">
        <div>
          <button v-b-toggle.accordion-2 aria-controls="accordion-2">Accordion 2</button>
        </div>
        <b-collapse id="accordion-2" accordion="my-accordion">
          <div>
            {{ AccordionInfo.text }}
          </div>
        </b-collapse>
      </div>
      <!-- // 아코디언 2 -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      AccordionInfo: {
        text: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla`,
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
