<template>
  <section role="contentinfo" class="uksection" aria-label="Icon">
    <h1 class="h1">{{ title }}</h1>
    <p class="h4">Icon - <small>아이콘은 각종 정보를 쉽게 전달하고 이해시킬 수 있도록 간단 명료하게 디자인한다.</small></p>
    <p>icon 경로 : /static/images/icon/[filename]</p>
    <p>Markup에서 사용되는 경로 예시 : &lt;img :src="$config.asset.imgURL + '/images/icon/ico-arrow-bottom-type1.svg'" alt="" /&gt;</p>
    <p>SCSS에서 사용되는 icon 경로 예시 : background-image: url($image-icon + '[filename]')</p>
    <br />
    <p class="h5">[시스템 타입 - (공통적으로 사용하는 기본 기능/정보를 나타낼 때 쓰인다.)]</p>
    <p class="cl-def">WSG 업데이트 후 아이콘 유형은 계속 업데이트 예정</p>
    <br />
    <div class="icon-ststem-wrap">
      <div class="icon-system-type1">휴대폰 구매하기</div>
      <div class="icon-system-type2">모바일 요금제</div>
      <div class="icon-system-type3">인터넷/IPTV</div>
      <div class="icon-system-type4">이벤트</div>
      <div class="icon-system-type5">내 가입정보</div>
      <div class="icon-system-type6">요금조회</div>
      <div class="icon-system-type7">매장 찾기</div>
      <div class="icon-system-type8">자주하는 질문</div>
    </div>
    <div class="code-editor">
      <textarea style="height: 350px">
================================================================================
시스템 타입 - 공통적으로 사용하는 기본 기능/정보를 나타낼 때 사용.
사용되는 요소에 class="icon-system-type1" 부여하여 사용. 사용되는 요소는 유동적
링크가 사용되는 부분은 <a href="#" class="icon-system-type1">휴대폰 구매하기</a>
================================================================================
<div class="icon-system-type1">휴대폰 구매하기</div>
<div class="icon-system-type2">모바일 요금제</div>
<div class="icon-system-type3">인터넷/IPTV</div>
<div class="icon-system-type4">이벤트</div>
<div class="icon-system-type5">내 가입정보</div>
<div class="icon-system-type6">요금조회</div>
<div class="icon-system-type7">매장 찾기</div>
<div class="icon-system-type8">자주하는 질문</div>
      </textarea>
    </div>
    <br />
    <p class="h5">[현재 사용되는 icon 유형]</p>
    <div class="container">
      <ul class="row row-cols-6">
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-arrow-bottom-type1.svg'" alt="" /><span>ico-arrow-bottom-type1.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-arrow-bottom-type1-dis.svg'" alt="" /><span>ico-arrow-bottom-type1-dis.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-arrow-left-type1.svg'" alt="" /><span>ico-arrow-left-type1.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-arrow-left-type1-dis.svg'" alt="" /><span>ico-arrow-left-type1-dis.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-arrow-right-type1.svg'" alt="" /><span>ico-arrow-right-type1.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-arrow-right-type1-dis.svg'" alt="" /><span>ico-arrow-right-type1-dis.svg</span></li>
      </ul>
      <ul class="row row-cols-4">
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-caution-1-1.svg'" alt="" /><span>ico-caution-1-1.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-check-circle.svg'" alt="" /><span>ico-check-circle.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-gps.svg'" alt="" /><span>ico-gps.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-gps-sm.svg'" alt="" /><span>ico-gps-sm.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-datepicker-header-arrow-right.svg'" alt="" /><span>ico-datepicker-header-arrow-right.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-close-x.svg'" alt="" /><span>ico-close-x.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-close-x-gray.svg'" alt="" /><span>ico-close-x-gray.svg</span></li>
      </ul>
      <ul class="row row-cols-5">
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-caution-sm-magenta.svg'" alt="" /><span>ico-caution-sm-magenta.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-checkbox.svg'" alt="" /><span>ico-checkbox.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-checkbox-check.svg'" alt="" /><span>ico-checkbox-check.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-checkbox-dis.svg'" alt="" /><span>ico-checkbox-dis.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-clearable.svg'" alt="" /><span>ico-clearable.svg</span></li>
      </ul>
      <ul class="row row-cols-4">
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-find-black.svg'" alt="" /><span>ico-find-black.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/icon-search-1.svg'" alt="" /><span>icon-search-1.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/icon-save-1.svg'" alt="" /><span>icon-save-1.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/Ico-inp-datepiker.svg'" alt="" /><span>Ico-inp-datepiker.svg</span></li>
      </ul>
      <ul class="row row-cols-4">
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-need.png'" alt="" /><span>ico-need.png</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/icon-myInfo-1.svg'" alt="" /><span>icon-myInfo-1.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-print-sm.svg'" alt="" /><span>ico-print-sm.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-zoom-sm.svg'" alt="" /><span>ico-zoom-sm.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-navgation-sm.svg'" alt="" /><span>ico-navgation-sm.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-target.svg'" alt="" /><span>ico-target.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-time-circle-gray.svg'" alt="" /><span>ico-time-circle-gray.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-time-circle-magenta.svg'" alt="" /><span>ico-time-circle-magenta.svg</span></li>
      </ul>
      <ul class="row row-cols-4">
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-system-type1.svg'" alt="" /><span>ico-system-type1.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-system-type2.svg'" alt="" /><span>ico-system-type2.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-system-type3.svg'" alt="" /><span>ico-system-type3.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-system-type4.svg'" alt="" /><span>ico-system-type4.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-system-type5.svg'" alt="" /><span>ico-system-type5.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-system-type6.svg'" alt="" /><span>ico-system-type6.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-system-type7.svg'" alt="" /><span>ico-system-type7.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-system-type8.svg'" alt="" /><span>ico-system-type8.svg</span></li>
      </ul>
      <ul class="row row-cols-6">
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-iptv.svg'" alt="" /><span>ico-iptv.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-card-filp-black.svg'" alt="" /><span>ico-card-filp-black.svg</span></li>
      </ul>
      <ul class="row row-cols-6">
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-line-type1.svg'" alt="" /><span>ico-line-type1.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-line-type2.svg'" alt="" /><span>ico-line-type2.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-line-type3.svg'" alt="" /><span>ico-line-type3.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-line-type4.svg'" alt="" /><span>ico-line-type4.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-line-type5.svg'" alt="" /><span>ico-line-type5.svg</span></li>
      </ul>
      <ul class="row row-cols-6">
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-line-type1-on.svg'" alt="" /><span>ico-line-type1-on.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-line-type2-on.svg'" alt="" /><span>ico-line-type2-on.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-line-type3-on.svg'" alt="" /><span>ico-line-type3-on.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-line-type4-on.svg'" alt="" /><span>ico-line-type4-on.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-line-type5-on.svg'" alt="" /><span>ico-line-type5-on.svg</span></li>
      </ul>
      <ul class="row row-cols-6">
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-basic-rule-type1.svg'" alt="" /><span>ico-basic-rule-type1.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-basic-rule-type2.svg'" alt="" /><span>ico-basic-rule-type2.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-basic-rule-type3.svg'" alt="" /><span>ico-basic-rule-type3.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-basic-rule-type4.svg'" alt="" /><span>ico-basic-rule-type4.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-basic-rule-type5.svg'" alt="" /><span>ico-basic-rule-type5.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-basic-rule-type6.svg'" alt="" /><span>ico-basic-rule-type6.svg</span></li>
      </ul>
      <ul class="row row-cols-6">
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-person-darkgray-r.svg'" alt="" /><span>ico-person-darkgray-r.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-step-check.svg'" alt="" /><span>ico-step-check.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-noti-line-black.svg'" alt="" /><span>ico-noti-line-black.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-noti-pill-black.svg'" alt="" /><span>ico-noti-pill-black.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-noti-line-gray-sm.svg'" alt="" /><span>ico-noti-line-gray-sm.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-noti-pill-black-sm.svg'" alt="" /><span>ico-noti-pill-black-sm.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-heart-off.svg'" alt="" /><span>ico-heart-off.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-heart-on.svg'" alt="" /><span>ico-heart-on.svg</span></li>
      </ul>
      <ul class="row row-cols-5">
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-polygon.svg'" alt="" /><span>ico-polygon.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-polygon-top-white.svg'" alt="" /><span>ico-polygon-top-white.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-polygon-black.svg'" alt="" /><span>ico-polygon-black.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-ars.svg'" alt="" /><span>ico-ars.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-contact.svg'" alt="" /><span>ico-contact.svg</span></li>
      </ul>
      <ul class="row row-cols-5">
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-giga-type1.svg'" alt="" /><span>ico-giga-type1.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-giga-type2.svg'" alt="" /><span>ico-giga-type2.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-giga-type3.svg'" alt="" /><span>ico-giga-type3.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-giga-type4.svg'" alt="" /><span>ico-giga-type4.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-giga-type5.svg'" alt="" /><span>ico-giga-type5.svg</span></li>
      </ul>
      <ul class="row row-cols-5">
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-join-info-type1.svg'" alt="" /><span>ico-join-info-type1.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-join-info-type2.svg'" alt="" /><span>ico-join-info-type2.svg</span></li>
        <li><img :src="$config.asset.imgURL + '/images/icon/ico-join-info-type3.svg'" alt="" /><span>ico-join-info-type3.svg</span></li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Icon',
  layout: 'guide',
  data() {
    return {
      title: 'Icon System',
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  .row {
    justify-content: center;
    margin-top: 15px;
    li {
      display: block;
      min-height: 100px;
      text-align: center;
      img {
        width: auto;
      }
      span {
        display: block;
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
