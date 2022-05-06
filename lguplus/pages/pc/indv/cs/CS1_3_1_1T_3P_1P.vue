<template>
  <div class="p-sub-CS1_3_1_1T">
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

              <div class="row c-table">
                <b-table-simple bordered class="c-table-row">
                  <caption>
                    선택한 가입정보 : 가입서비스, 현재 설치장소에 대한 표
                  </caption>
                  <colgroup>
                    <col style="width: 240px" />
                    <col style="width: 480px" />
                    <col style="width: 240px" />
                    <col style="width: auto" />
                  </colgroup>
                  <b-tbody>
                    <b-tr>
                      <b-th>가입서비스</b-th>
                      <b-td>모바일/인터넷/IPTV/인터넷전화/스마트홈</b-td>
                      <b-th>현재 설치장소</b-th>
                      <b-td>서울시 동작구 상도로 15길 *** ******(***)</b-td>
                    </b-tr>
                  </b-tbody>
                </b-table-simple>
              </div>
              <ul class="c-bullet-type-cirlce">
                <li>이사 등의 이유로 인터넷, IPTV등 서비스의 설치장소를 변경 신청 할 수 있습니다.</li>
              </ul>
            </div>

            <!-- //이하 컨텐츠 생략 -->
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

    <div>
      <!-- Popup-->
      <b-modal ref="my-modal" dialog-class="m-bv-modal c-layer-popup-800">
        <!-- 헤더 -->
        <template #modal-header="{ close }">
          <h1 class="h3">댁외 설치장소 변경 예약정보 확인</h1>
          <button class="c-btn-close" type="button" @click="close()">레이어 닫기</button>
        </template>
        <!-- // 헤더 -->
        <!-- 바디 -->
        <template #default="{}">
          <div class="c-body-content">
            <section class="c-section -ta-c">
              <p class="h4">예약 내용을 다시 한 번 확인하신 뒤 예약하기를 눌러주세요.</p>
            </section>

            <section class="c-section">
              <div class="row c-table">
                <b-table-simple bordered class="c-table-row">
                  <caption>
                    변경 신청 정보 : 변경 설치장소, 댁내 대기자 이름, 연락 가능한 전화번호, 요청사항, 설치 희망일자에 대한 표
                  </caption>
                  <colgroup>
                    <col style="width: 216px" />
                    <col style="width: auto" />
                  </colgroup>
                  <b-tbody>
                    <b-tr>
                      <b-th>변경 설치장소</b-th>
                      <b-td>서울시 중로구 광화문로 11</b-td>
                    </b-tr>
                    <b-tr>
                      <b-th>댁내 대기자 이름</b-th>
                      <b-td>전우치</b-td>
                    </b-tr>
                    <b-tr>
                      <b-th>연락 가능한 전화번호</b-th>
                      <b-td>010-0000-0000</b-td>
                    </b-tr>
                    <b-tr>
                      <b-th>요청사항</b-th>
                      <b-td>이사로 인터넷 설치 요청드립니다. 저장된 연락처로 통화가 어려울 경우 010-0000-0000 으로 연락 주시면 감사하겠습니다.</b-td>
                    </b-tr>
                    <b-tr>
                      <b-th>설치 희망일자</b-th>
                      <b-td>2021년 3월 3일 11:00</b-td>
                    </b-tr>
                  </b-tbody>
                </b-table-simple>
              </div>
            </section>

            <section class="c-section">
              <h2 class="h5">현재 설치장소</h2>
              <div class="row c-table">
                <b-table-simple bordered class="c-table-row">
                  <caption>
                    현재 설지장소 정보 : 고객명, 가입서비스, 현재 설치장소에 대한 표
                  </caption>
                  <colgroup>
                    <col style="width: 216px" />
                    <col style="width: auto" />
                  </colgroup>
                  <b-tbody>
                    <b-tr>
                      <b-th>고객명</b-th>
                      <b-td>전우치 님</b-td>
                    </b-tr>
                    <b-tr>
                      <b-th>가입서비스</b-th>
                      <b-td>U+인터넷 / U+TV / U+인터넷전화</b-td>
                    </b-tr>
                    <b-tr>
                      <b-th>현재 설치장소</b-th>
                      <b-td>서울시 마포구 월드컵로 416</b-td>
                    </b-tr>
                  </b-tbody>
                </b-table-simple>
              </div>
            </section>

            <section class="c-section">
              <h2 class="h5">서비스별 예상 설치비</h2>
              <div class="row c-table">
                <b-table-simple bordered>
                  <caption>
                    서비스별 예상 설치비 정보 : 구분, 가입서비스, 요금제, 설치비에 대한 표
                  </caption>
                  <colgroup>
                    <col style="width: auto" />
                    <col style="width: 26%" />
                    <col style="width: 26%" />
                    <col style="width: 26%" />
                  </colgroup>
                  <b-tbody>
                    <b-tr>
                      <b-th>구분</b-th>
                      <b-th>가입서비스</b-th>
                      <b-th>요금제</b-th>
                      <b-th>설치비</b-th>
                    </b-tr>
                    <b-tr>
                      <b-td rowspan="2">결합</b-td>
                      <b-td>인터넷</b-td>
                      <b-td>광랜_19FTTH</b-td>
                      <b-td>25,300원</b-td>
                    </b-tr>
                    <b-tr>
                      <b-td>TV</b-td>
                      <b-td>일반형</b-td>
                      <b-td>13,200 원</b-td>
                    </b-tr>
                  </b-tbody>
                  <b-tfoot>
                    <b-tr>
                      <b-td colspan="2">합계</b-td>
                      <b-td>-</b-td>
                      <b-td>38,500 원</b-td>
                    </b-tr>
                  </b-tfoot>
                </b-table-simple>
              </div>
            </section>

            <section class="c-section">
              <div class="c-notice-wrap">
                <dl class="c-noticebox-h2">
                  <dt class="h5">꼭 확인하세요.</dt>
                  <dd>
                    <ul class="c-bullet-type-circle grow-1">
                      <li>부가세 미포함금액</li>
                      <li>온라인 접수 후에 설치변경 일정 확정을 위해 고객센터 및 각 지역 서비스센터에서 전화를 하게되니 꼭 받아주시기 바랍니다.</li>
                      <li>설치 희망일은 확정 된 것이 아니며 각 지역 서비스센터와 통화 후에 최종 일정이 확정됩니다. <br />실제 부과되는 이전 설치비는 위의 내용과 다를 수 있습니다.</li>
                      <li>인터넷+TV+070번들 이용고객이 3년 이상 사용한 경우 인터넷 설치비가 면제되나, <br />1년 내 해지 시 반환금이 청구됩니다.</li>
                      <li>인터넷과 TV 동시 이전 시 설치비가 할인됩니다.</li>
                      <li>인터넷 HFC 요금제의 경우 업로드 속도가 다운로드 속도의 1/10로 제한됩니다. <br />(인터넷 요금제명이 ‘OOO_HFC 또는 주택’인 경우)</li>
                    </ul>
                  </dd>
                </dl>
              </div>
            </section>
          </div>
        </template>
        <!-- // 바디 -->
        <!-- 푸터 -->
        <template #modal-footer="{ ok, cancel }">
          <div class="c-btn-group">
            <button class="c-btn-cancel c-sm" @click="ok()">취소하기</button>
            <button class="c-btn-ok c-sm" @click="cancel()">확인하기</button>
          </div>
        </template>
        <!-- // 푸터 -->
      </b-modal>
      <!-- //Popup-->
    </div>
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
  mounted() {
    this.$refs['my-modal'].show();
  },
};
</script>

<style lang="scss"></style>
