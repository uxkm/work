<template>
  <div class="p-sub-CS1_3_1_1T_2_1">
    <div class="submain-section">
      <div class="toparea-contents">
        <div class="toparea-contents-bg">
          <div class="sub-page-position-wrap">
            <div class="sub-page-position">
              <ul class="sub-position-list">
                <li><a href="#">개인</a></li>
                <li><a href="#">고객지원</a></li>
                <li>
                  <a href="#" class="arrow-expand">온라인문의</a>
                  <ul class="position-depth-2">
                    <li><a href="">온라인서브메뉴1</a></li>
                    <li><a href="">온라인서브메뉴2</a></li>
                    <li><a href="">온라인서브메뉴3</a></li>
                    <li><a href="">온라인서브메뉴4</a></li>
                    <li><a href="">온라인서브메뉴5</a></li>
                    <li><a href="">온라인서브메뉴6</a></li>
                    <li><a href="">온라인서브메뉴7</a></li>
                    <li><a href="">온라인서브메뉴8</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#" class="arrow-expand">설치가능 지역조회</a>
                  <ul class="position-depth-2 is-hide">
                    <li><a href="#">가까운 매장 찾아보기</a></li>
                    <li><a href="#">자주하는 질문</a></li>
                    <li><a href="#">1:1 문의</a></li>
                    <li><a href="#">칭찬합니다</a></li>
                    <li><a href="#">이용자 피해 예방 가이드</a></li>
                    <li><a href="#">통화품질 개선요청</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div class="sub-top">
            <div class="sub-top-box">
              <h1 class="h1">설치신청 변경</h1>
              <div class="brief-info-type-1">
                <p class="brief-info-item">
                  <strong class="item-title">가입정보</strong>
                  <span class="item-info">결합</span>
                  <span class="item-info">500-45-**-69**</span>
                  <span class="item-info">가족무한사랑 (유무선)</span>
                </p>
              </div>
              <button class="c-btn-outline c-sm">가입 서비스 더보기</button>
            </div>
          </div>
        </div>
      </div>
      <!-- //.toparea-wrap -->
      <div class="middlearea-contents -cont-mt-0">
        <div class="middlearea">
          <!-- 탭 메뉴 영역 -->
          <div class="c-tabmenu-wrap">
            <div class="c-tabmenu-tab c-tab-default">
              <ul>
                <li class="is-active">
                  <a href="#">댁외 설치장소 변경 신청 <span class="is-blind">선택됨</span></a>
                </li>
                <li>
                  <a href="#">댁내 설치장소 변경 신청</a>
                </li>
                <li>
                  <a href="#">신청내역 조회 및 변경</a>
                </li>
              </ul>
            </div>
          </div>
          <!-- //탭 메뉴 영역 -->

          <!-- 탭 컨텐츠 영역 -->
          <div class="c-tabcontent-box">
            <div class="c-page-section">
              <h2 class="is-blind">댁외 설치장소 변경 신청</h2>

              <h3 class="h3">설치변경 신청 완료</h3>

              <div class="c-caution-1-1 icon-success">
                <p class="h5">설치장소 변경 신청이 접수되었습니다 .</p>
                <p class="c-txt">
                  저장된 내 위치가 없습니다.<br />
                  주소(위치)를 조회한 뒤 저장하세요
                </p>
              </div>
              <div class="c-btn-group">
                <button class="c-btn-ok">신청내역 확인</button>
              </div>
            </div>
          </div>

          <div class="c-tabcontent-box is-hide">
            <div class="c-page-section">
              <h2 class="is-blind">댁내 설치장소 변경 신청</h2>
              해당페이지탭내용참조-2
            </div>
          </div>
          <div class="c-tabcontent-box is-hide">
            <div class="c-page-section">
              <h2 class="is-blind">신청내역 조회 및 변경</h2>
              해당페이지탭내용참조-3
            </div>
          </div>
          <!-- //탭 컨텐츠 영역 -->
        </div>
        <!-- //.middlearea -->
      </div>
      <!-- //.middlearea-contents -->
    </div>
    <!-- //.submain-section  -->
  </div>
</template>

<script>
export default {
  layout: 'l-sub-main',
  data() {
    return {};
  },
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: '/style/css/p-main-sub-customer.min.css',
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
