<template>
  <aside class="uksnb">
    <ul>
      <li>
        <input id="founDation" type="checkbox" checked />
        <label for="founDation">Foundation</label>
        <Guide-snb-bs />
      </li>
      <li>
        <input id="comPonent" type="checkbox" />
        <label for="comPonent">Component</label>
        <Guide-snb-cp />
      </li>
      <li>
        <input id="tempLate" type="checkbox" />
        <label for="tempLate">Template</label>
        <Guide-snb-tp />
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'GuideSnb',
};
</script>
