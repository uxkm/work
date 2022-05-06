<template>
  <div class="p-sub-CS1_3_2_2_3_1">
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
                  <a href="#" class="arrow-expand">1:1문의</a>
                  <ul class="position-depth-2 is-show">
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
            <h1 class="h1">진단결과</h1>
          </div>
        </div>
        <!-- //.sub-top -->
      </div>
      <!-- //.toparea-wrap -->
      <div class="middlearea-contents">
        <div class="middlearea">
          <!-- 섹션영역 -->
          <div class="c-page-section">
            <div class="c-card-wrap">
              <ul class="c-card-list-button c-sp-3n">
                <li>
                  <div class="c-card-box">
                    <p class="h3 info-title">휴대폰인증</p>
                    <div class="info-body">
                      <p class="info-txt">본인 명의의 휴대폰으로<br />인증할 수 있습니다.</p>
                      <button class="c-btn-outline c-sm">인증하기</button>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="c-card-box">
                    <p class="h3 info-title">간편 인증</p>
                    <div class="info-body">
                      <p class="info-txt">
                        PASS앱으로 지문, 비밀번호 등을<br />
                        이용하여 인증할 수 있습니다.
                      </p>
                      <ul class="c-bullet-type-circle">
                        <li>U+모바일 고객만 이용 가능</li>
                      </ul>
                      <button class="c-btn-outline c-sm">인증하기</button>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="c-card-box">
                    <p class="h3 info-title">범용 공동인증서 인증</p>
                    <div class="info-body">
                      <p class="info-txt">
                        본인 명의의 범용 공동<br />
                        인증서로 인증할 수 있습니다.
                      </p>
                      <p class="info-txt"><a href="#" class="c-btn-txt-detail-1">공동인증 오류 해결방법 </a></p>
                      <button class="c-btn-outline c-sm">인증하기</button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="c-notice-wrap">
              <dl class="c-noticebox-h2">
                <dt class="h5">꼭 확인하세요.</dt>
                <dd>
                  <ul class="c-bullet-type-circle grow-1">
                    <li>PASS인증을 이용하면 지문, 홍채, 얼굴인식 또는 비밀번호 입력만으로 간편하게 본인 여부를 확인할 수 있습니다.</li>
                    <li>앱스토어 또는 구글 플레이스토어에서 PASS앱을 설치해야 이용할 수 있습니다.</li>
                    <li>PASS인증은 LG유플러스에서 제공하는 무료 서비스입니다. 단, 요금제에 따라 데이터 이용료가 발생할 수 있습니다.</li>
                    <li>PASS앱을 설치 후 본인인증 방법으로 사용할 지문, 홍채, 얼굴인식 또는 비밀번호를 등록해야 합니다.</li>
                    <li>본인인증이 필요한 홈페이지 또는 앱에서 PASS인증을 선택하면 PASS앱이 자동으로 실행됩니다.</li>
                    <li>PASS앱은 안드로이드4.4 이상, 애플 ios 9.0 이상 버전에서, 지문인식의 경우 안드로이드 5.5 이상, 애플 ios 9.0 이상 버전에서 이용 가능합니다.</li>
                    <li>PASS앱의 알림을 ‘켜짐‘ 상태로 설정해야 인증번호 수신 시 알림을 받을 수 있습니다.</li>
                  </ul>
                </dd>
              </dl>
            </div>
          </div>
          <!-- //섹션영역 -->
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
