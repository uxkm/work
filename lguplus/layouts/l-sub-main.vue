<template>
  <div class="l-sub-main">
    <!-- Accessibility Skip Navigation -->
    <div class="skip-nav">
      <a href="#cSection">본문 내용으로 건너뛰기</a>
    </div>
    <!-- Header Area -->
    <div class="header-layout-wrap">
      <header class="header-lgu">
        <p class="is-blind">상단 정보영역</p>
        <h1 class="header-log"><a href="#">LG U+</a></h1>
        <ul class="header-utillmenu">
          <li><a href="#" class="cat-indi is-active" title="선택됨">개인</a></li>
          <li><a href="#" class="cat-com">기업</a></li>
        </ul>
        <nav class="header-gnb-wrap">
          <ul class="header-gnb-list">
            <li class="m1"><a href="#" class="is-active">모바일 기기</a></li>
            <li class="m2"><a href="#">모바일 요금제</a></li>
            <li class="m3"><a href="#">인터넷/IPTV</a></li>
            <li class="m4"><a href="#">이벤트/혜택</a></li>
            <li class="m5"><a href="#">고객지원</a></li>
          </ul>
        </nav>
        <ul class="header-menu-list-1">
          <li><a href="#" class="icon-search-1">U+Shop검색</a></li>
          <li><a href="#" class="icon-save-1">내보관함</a></li>
          <li><a href="#" class="icon-myInfo-1 arrow-expand">내정보</a></li>
        </ul>
      </header>
    </div>
    <!-- //Header Area -->

    <!-- page tabindex="0"-->
    <div id="cSection">
      <Nuxt />
    </div>
    <!-- // end page -->

    <!-- Footer Wrap -->
    <div class="footer-layout-wrap">
      <!-- Footer Area -->
      <footer class="footer-lgu">
        <p class="is-blind">하단 정보영역</p>
        <div class="footer-left-side">
          <div class="footer-bottom-menuu">
            <ul class="footer-bottom-menuu-list">
              <li><a href="#">이용약관</a></li>
              <li><a href="#">개인정보처리방침</a></li>
              <li><a href="#">미환급금조회</a></li>
              <li><a href="#">장애현황</a></li>
              <li><a href="#">U+ 알뜰폰 파트너스 홈페이지</a></li>
              <li><a href="#">Global Store</a></li>
            </ul>
          </div>
          <div class="footer-address">
            ㈜엘지유플러스 서울특별시 용산구 한강대로 32 대표이사 하현회 사업자등록번호 220-81-39938 통신판매신고 제 2015-서울용산-00481호 사업자정보확인<br />
            고객센터 기업/소상공인 1544-0001(유료) U+Shopbiz 1800-8000(유료) 휴대폰 114(무료), 1544-0010(유료)
          </div>
          <div class="footer-copyright">Copyright ⓒ LG Uplus Corp. All Rights Reserved.</div>
          <div class="footer-symbol">
            <ul>
              <li>
                <a href="#"><img src="/images/common/footer-mark-auth-wa.png" alt="웹접근성 인증마크" /></a>
              </li>
              <li>
                <a href="#"><img src="/images/common/footer-mark-auth-sinmungo.png" alt="정도경영 사이버신문고" /></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-right-side">
          <div class="footer-ralation-site">
            <b-dropdown id="dropdown-dropup" dropup text="바로가기" variant="primary" class="m-0 c-select-link c-arrow-down">
              <b-dropdown-item href="#" target="_balnk">사이트명1</b-dropdown-item>
              <b-dropdown-item href="#" target="_balnk">사이트명2</b-dropdown-item>
              <b-dropdown-item href="#" target="_balnk">사이트명3</b-dropdown-item>
              <b-dropdown-item href="#" target="_balnk">사이트명4</b-dropdown-item>
              <b-dropdown-item href="#" target="_balnk">사이트명5</b-dropdown-item>
              <b-dropdown-item href="#" target="_balnk">사이트명6</b-dropdown-item>
              <b-dropdown-item href="#" target="_balnk">사이트명7</b-dropdown-item>
              <b-dropdown-item href="#" target="_balnk">사이트명8</b-dropdown-item>
              <b-dropdown-item href="#" target="_balnk">사이트명9</b-dropdown-item>
              <b-dropdown-item href="#" target="_balnk">사이트명10</b-dropdown-item>
            </b-dropdown>
          </div>
          <div class="footer-sns">
            <ul class="footer-sns-list">
              <li><a href="#" trarget="_blank" class="sns-facebook">페이스북</a></li>
              <li><a href="#" trarget="_blank" class="sns-youtube">유투브</a></li>
              <li><a href="#" trarget="_blank" class="sns-twitter">트위터</a></li>
              <li><a href="#" trarget="_blank" class="sns-lgblog">공식 블로그</a></li>
              <li><a href="#" trarget="_blank" class="sns-insta">인스타그램</a></li>
              <li><a href="#" trarget="_blank" class="sns-kakao">카카오스토리</a></li>
              <li><a href="#" trarget="_blank" class="sns-naverblog">네이버 블로그</a></li>
            </ul>
          </div>
        </div>
      </footer>
      <!-- //Footer Area -->
    </div>
    <!-- //Footer Wrap -->
  </div>
</template>

<script>
import Vue2Filters from 'vue2-filters';

export default {
  name: 'LayoutSubMain',
  mixins: [Vue2Filters.mixin],
  middleware: [],
  data() {
    return {};
  },
  fetch() {
    console.info('[layout-fetch]');
  },
  mounted() {
    console.info('[layout > mounted]');
  },
  methods: {
    onLayoutEvt() {
      console.info('layout-$emit');
    },
  },
};
</script>

<style lang="scss" scoped></style>
