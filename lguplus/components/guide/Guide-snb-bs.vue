<template>
  <ol class="list-number-type">
    <li>
      <Nuxt-link to="/guide/bs/color" exact> Color System (공통) </Nuxt-link>
    </li>
    <li>
      <Nuxt-link to="/guide/bs/font" exact> Font System </Nuxt-link>
    </li>
    <li>
      <Nuxt-link to="/guide/bs/layout" exact> Layout </Nuxt-link>
    </li>
    <!-- WSG V0.4 기준으로 메뉴 제외 210311 -->
    <!-- <li class="null">
      <Nuxt-link to="/guide/bs/spacing" exact> Spacing <small class="c-flag ing-flag">TBD</small></Nuxt-link>
    </li> -->
    <li>
      <Nuxt-link to="/guide/bs/icon" exact> Icon Style <small class="c-flag tbd-flag">TBD</small></Nuxt-link>
    </li>
    <!-- <li class="null">
      <Nuxt-link to="/guide/bs/image" exact> Image Style <small class="c-flag tbd-flag">TBD</small></Nuxt-link>
    </li> -->
  </ol>
</template>

<script>
export default {
  name: 'GuideSnbBs',
};
</script>
