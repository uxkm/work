<!-- prettier-ignore-start -->

# nuxt-logger 소개
<br>

nuxt에서 발생하는  이벤트나 특정 데이터를 기록 하기 위해서 사용하는 모듈입니다.
로깅 시 개발자 도구의 콘솔탭에 상태별로 로그를 남겨줄수 있습니다.

---

# logger 모듈 설치방법
<br>

`nuxt.config.js`파일에 하단 소스코드를 입력해줍니다.

<div style="width: 500px">

```js
{
  modules: [
   'nuxt-logger',
  ],
 
  logger: {
   // (optional) custom configuration
  }
}
```
</div>

---

## logger 옵션 설정
<br>

`nuxt.config.js`파일에 logger의 옵션을 정의할 수 있습니다.

<div style="width: 500px">

```js
logger: {
  isEnabled: true, // true or false, defaults to true
  logLevel: 'debug', // debug, info, warn or error, defaults to debug
}
```
</div>

---

# 사용 방법

<div style="width: 500px">

```js
export default {
   methods:{
     foo() {
        this.$log.debug('foo')
        this.$log.info({foo: 'bar'})
        this.$log.warn('warning!')
        this.$log.error('Error', 500)
     }
   }
}
```
</div>


<!-- prettier-ignore-end -->
