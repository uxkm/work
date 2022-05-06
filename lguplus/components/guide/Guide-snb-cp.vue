<template>
  <ol class="list-number-type">
    <li>
      <Nuxt-link to="/guide/cp/button" exact> Button <small class="c-flag">S</small></Nuxt-link>
    </li>
    <li>
      <Nuxt-link to="/guide/cp/radio" exact> Radio <small class="c-flag">S</small></Nuxt-link>
    </li>
    <li>
      <Nuxt-link to="/guide/cp/checkbox" exact> Checkbox <small class="c-flag">S</small></Nuxt-link>
    </li>
    <li>
      <Nuxt-link to="/guide/cp/toggle" exact> Toggle <small class="c-flag">S</small></Nuxt-link>
    </li>
    <li>
      <Nuxt-link to="/guide/cp/input" exact> Input Field <small class="c-flag">S</small></Nuxt-link>
    </li>
    <li>
      <Nuxt-link to="/guide/cp/dropdown" exact> Dropdown Box <small class="c-flag">S</small></Nuxt-link>
    </li>
    <li>
      <Nuxt-link to="/guide/cp/indicator" exact> Indicator <small class="c-flag">S</small></Nuxt-link>
    </li>
    <li>
      <Nuxt-link to="/guide/cp/flag" exact> Flag <small class="c-flag">S</small></Nuxt-link>
    </li>
    <li>
      <Nuxt-link to="/guide/cp/tag" exact> Tag <small class="c-flag">S</small></Nuxt-link>
    </li>
    <li>
      <Nuxt-link to="/guide/cp/tab" exact> Tab <small class="c-flag">S</small></Nuxt-link>
    </li>
    <li>
      <Nuxt-link to="/guide/cp/accordion" exact> Accordion <small class="c-flag bv-flag">BV</small></Nuxt-link>
    </li>
    <li>
      <Nuxt-link to="/guide/cp/datepicker" exact> Date Picker <small class="c-flag vue-flag">V</small></Nuxt-link>
    </li>
    <li>
      <Nuxt-link to="/guide/cp/pagination" exact> Pagination <small class="c-flag bv-flag">BV</small></Nuxt-link>
    </li>
    <li>
      <Nuxt-link to="/guide/cp/table" exact> Table <small class="c-flag bv-flag">BV</small></Nuxt-link>
    </li>
    <li>
      <Nuxt-link to="/guide/cp/tooltip" exact> Tooltip <small class="c-flag">S</small><small class="c-flag bv-flag">BV</small></Nuxt-link>
    </li>
    <!-- 0319 Tooltip 하나로 통일
      <li class="null">
      <Nuxt-link to="/guide/cp/popover" exact> Popover <small class="c-flag">S</small><small class="c-flag bv-flag">BV</small> <small class="c-flag tbd-flag">TBD</small></Nuxt-link>
    </li>
    <li class="null">
      <Nuxt-link to="/guide/cp/toasts" exact> Toasts <small class="c-flag">S</small><small class="c-flag bv-flag">BV</small> <small class="c-flag tbd-flag">TBD</small></Nuxt-link>
    </li> 
    -->
    <li class="null">
      <Nuxt-link to="/guide/cp/range" exact> Range Slider <small class="c-flag vue-flag">V</small> <small class="c-flag tbd-flag">TBD</small></Nuxt-link>
    </li>
    <li class="null">
      <Nuxt-link to="/guide/cp/rating" exact> Rating <small class="c-flag tbd-flag">TBD</small></Nuxt-link>
    </li>
    <li class="null">
      <Nuxt-link to="/guide/cp/chart" exact> Chart <small class="c-flag tbd-flag">TBD</small></Nuxt-link>
    </li>
  </ol>
</template>

<script>
export default {
  name: 'GuideSnbCp',
};
</script>
