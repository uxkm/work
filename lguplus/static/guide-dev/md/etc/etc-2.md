<!-- prettier-ignore-start -->

# Moment.js란 무엇인가요?

<br>

<div class="container-fluid mt-4">
  <div class="row">
    <div class="col text-left">
        <img src="/guide-dev/img/vue/moment.js.png" class="img-thumbnail is-pd-10" style="width: 100%;max-width:700px;" />
    </div>
  </div>
</div>

<br><br>

## Moment.js

프로그래밍 작업을위해 날짜와 시간을 계산하는 라이브러리입니다.

---

### Format Dates

<div style="width: 700px">

```js
this.$moment().format('MMMM Do YYYY, h:mm:ss a'); // March 23rd 2021, 5:00:52 pm
this.$moment().format('dddd');                    // Tuesday
this.$moment().format("MMM Do YY");               // Mar 23rd 21
this.$moment().format('YYYY [escaped] YYYY');     // 2021 escaped 2021
this.$moment().format();                          // 2021-03-23T17:01:30+09:00                     
```

</div>

---

### Relative Time

<div style="width: 700px">

```js
this.$moment("20111031", "YYYYMMDD").fromNow(); // 9 years ago
this.$moment("20120620", "YYYYMMDD").fromNow(); // 9 years ago
this.$moment().startOf('day').fromNow();        // 17 hours ago
this.$moment().endOf('day').fromNow();          // in 7 hours
this.$moment().startOf('hour').fromNow();       // 3 minutes ago
```

</div>

---

### Calendar Time

<div style="width: 700px">

```js
this.$moment().subtract(10, 'days').calendar(); // 03/13/2021
this.$moment().subtract(6, 'days').calendar();  // Last Wednesday at 5:03 PM
this.$moment().subtract(3, 'days').calendar();  // Last Saturday at 5:03 PM
this.$moment().subtract(1, 'days').calendar();  // Yesterday at 5:03 PM
this.$moment().calendar();                      // Today at 5:03 PM
this.$moment().add(1, 'days').calendar();       // Tomorrow at 5:03 PM
this.$moment().add(3, 'days').calendar();       // Friday at 5:03 PM
this.$moment().add(10, 'days').calendar();      // 04/02/2021
```

</div>

---
## Moment.js 영역별 사용법

### template 

<div class="container-fluid mt-4">
  <div class="row">
    <div class="col text-left">
        <img src="/guide-dev/img/nuxt/template.png" class="img-thumbnail is-pd-10" style="width: 100%;max-width:700px;" />
    </div>
  </div>
</div>

<br>

### asyncData 

<div class="container-fluid mt-4">
  <div class="row">
    <div class="col text-left">
        <img src="/guide-dev/img/nuxt/async.png" class="img-thumbnail is-pd-10" style="width: 100%;max-width:700px;" />
    </div>
  </div>
</div>

<br>

### fetch or others

<div class="container-fluid mt-4">
  <div class="row">
    <div class="col text-left">
        <img src="/guide-dev/img/nuxt/fetch.png" class="img-thumbnail is-pd-10" style="width: 100%;max-width:700px;" />
    </div>
  </div>
</div>





<!-- prettier-ignore-end -->
