<!-- prettier-ignore-start -->

# Error Page 설정 방법
<br>

nuxt에서 잘못된 route로 이동시 발생하는 Error Page 기본적으로 제공 해주고 있습니다.
다만, nuxt에서 제공해주는 기본 Error Page가 아닌 
다른 Error Page를 보여주고 싶을 때는 따로 개발해줘야 합니다.

---

# error page 소스
<br>

`layouts` 디렉토리 하단에 `error.vue`라는 이름으로 파일을 생성합니다.
그리고 하단의 코드로 Error Page를 작성해주면 됩니다.
<div style="width: 500px">

```js
<template>
  <div>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>
```
</div>

<!-- prettier-ignore-end -->
