<template>
  <div class="p-sub-CS1_3_1">
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
            <h1 class="h1">설치신청 변경</h1>
          </div>
        </div>
      </div>
      <!-- //.toparea-wrap -->
      <div class="middlearea-contents">
        <div class="middlearea">
          <div class="c-page-section">
            <!-- 설치장소 변경 신청이 가능한 가입서비스 호출 -->
            <h2 class="h3">가입정보</h2>
            <div class="c-card-wrap">
              <ul class="c-card-list-buttonIcon c-sp-1n">
                <li>
                  <a href="#" class="c-card-box">
                    <div class="left-side">
                      <p class="h5 icon-join-info-type1">결합서비스</p>
                    </div>
                    <div class="right-side">
                      <ul class="contents-box">
                        <li>
                          <span class="info-title-1">가입서비스명</span><span class="info-txt-1">모바일 / 인터넷 / IPTV / 인터넷전화 / 스마트홈</span>
                          <span class="info-title-2">가입일</span>
                          <span class="info-txt-2">2019.07.13</span>
                        </li>
                        <li><span class="info-title-1">설치장소</span><span class="info-txt-1">서울시 동작구 상도로 15길 *** ******(***) </span></li>
                        <li><span class="info-title-1">결합 할인 상품</span><span class="info-txt-1">가족무한사랑 (유무선)</span></li>
                      </ul>
                      <span class="c-btn-txt-detail-1">자세히보기</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="c-card-box">
                    <div class="left-side">
                      <p class="h5 icon-join-info-type2">스마트홈</p>
                    </div>
                    <div class="right-side">
                      <ul class="contents-box">
                        <li><span class="info-title-1">이용중인 요금제</span><span class="info-txt-1">내맘대로 패키지</span></li>
                        <li><span class="info-title-1">설치장소</span><span class="info-txt-1">경기 양주시 고암길 </span></li>
                        <li><span class="info-title-1">가입일</span><span class="info-txt-1">2019.07.13</span></li>
                      </ul>
                      <span class="c-btn-txt-detail-1">자세히보기</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="c-card-box">
                    <div class="left-side">
                      <p class="h5 icon-join-info-type3">기타</p>
                    </div>
                    <div class="right-side">
                      <ul class="contents-box">
                        <li><span class="info-title-1">이용중인 요금제</span><span class="info-txt-1">내맘대로 패키지</span></li>
                        <li><span class="info-title-1">설치장소</span><span class="info-txt-1">경기 양주시 고암길 </span></li>
                        <li><span class="info-title-1">가입일</span><span class="info-txt-1">2019.07.13</span></li>
                      </ul>
                      <span class="c-btn-txt-detail-1">자세히보기</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <!-- //설치장소 변경 신청이 가능한 가입서비스 호출 -->

            <!-- 설치장소 변경 신청 가입정보가 없는 경우 -->
            <div class="c-caution-1-1 icon-nodata">
              <p class="c-txt">가입하신 서비스에 설치장소를 변경할 수 있는 서비스가 없습니다.</p>
            </div>
            <div class="c-btn-group">
              <button class="c-btn-ok">메인페이지로 이동하기</button>
            </div>
            <!-- //설치장소 변경 신청 가입정보가 없는 경우 -->
          </div>
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
