<template>
  <div class="p-bv">
    <h1>BootstrapVue</h1>
    <div>
      <p>
        <NuxtLink to="/sample/bv/typography">typography</NuxtLink>
      </p>
      <p>
        <NuxtLink to="/sample/bv/modal">modal</NuxtLink>
      </p>
      <p>
        <NuxtLink to="/sample/bv/table">table</NuxtLink>
      </p>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  layout($ctx) {
    console.info('[layout > $ctx.$device)]', $ctx.$device);
    console.info('[layout > $ctx.$ua)]', $ctx.$ua.deviceType());
    return '';
  },
  middleware: ['gtm'],
};
</script>

<style lang="scss" scoped></style>
