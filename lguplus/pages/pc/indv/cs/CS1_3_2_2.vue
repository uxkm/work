<template>
  <div class="p-sub-CS1_3_2_2">
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
            <h1 class="h1">홈 상품 간편 진단</h1>
            <p class="h5">홈 상품 간편 진단 이란?</p>
            <p>
              인터넷, IPTV, 인터넷 전화의 서비스 상태를 진단하고 이상이 있을 시 리셋할 수 있는 서비스 입니다. <br />
              리셋 이후에도 문제가 지속될 경우 AS 신청해주세요.
            </p>
          </div>
        </div>
        <!-- //.sub-top -->
      </div>
      <!-- //.toparea-wrap -->
      <div class="middlearea-contents">
        <div class="middlearea">
          <!-- 섹션영역 -->
          <div class="c-page-section">
            <h2 class="h3">진단대상 선택</h2>
            <div class="row c-table">
              <b-table-simple>
                <caption>
                  진단대상 선택: 가입서비스 설치주소 선택에 대한 표
                </caption>
                <colgroup>
                  <col style="width: 136px" />
                  <col style="width: 194px" />
                  <col style="width: auto" />
                </colgroup>
                <b-thead>
                  <b-tr>
                    <b-th class="c-hcell-digit">선택</b-th>
                    <b-th class="c-hcell-target">가입서비스</b-th>
                    <b-th class="c-hcell-subject">설치주소</b-th>
                  </b-tr>
                </b-thead>
                <b-tbody>
                  <b-tr>
                    <b-td class="c-cell-digit">
                      <span class="c-radio">
                        <input id="radio-1-1" type="radio" name="radio-1" checked />
                        <label for="radio-1-1" class="text-radio">
                          <i class="icon"></i>
                          <b class="is-blind">인터넷/IPTV 서울 용산구 한강대로 32 ***</b>
                        </label>
                      </span>
                    </b-td>
                    <b-td class="c-cell-target">인터넷/IPTV</b-td>
                    <b-td class="c-cell-subject">서울 용산구 한강대로 32 ***</b-td>
                  </b-tr>
                  <b-tr>
                    <b-td class="c-cell-digit">
                      <span class="c-radio">
                        <input id="radio-1-2" type="radio" name="radio-1" />
                        <label for="radio-1-2" class="text-radio">
                          <i class="icon"></i>
                          <b class="is-blind">기가 wifi 경기 분당구 불정로 90 ****</b>
                        </label>
                      </span>
                    </b-td>
                    <b-td class="c-cell-target">기가 wifi</b-td>
                    <b-td class="c-cell-subject">경기 분당구 불정로 90 ****</b-td>
                  </b-tr>
                  <b-tr>
                    <b-td class="c-cell-digit">
                      <span class="c-radio">
                        <input id="radio-1-3" type="radio" name="radio-1" />
                        <label for="radio-1-3" class="text-radio">
                          <i class="icon"></i>
                          <b class="is-blind">Gateway 서울 용산구 한강대로 32 ***</b>
                        </label>
                      </span>
                    </b-td>
                    <b-td class="c-cell-target">Gateway</b-td>
                    <b-td class="c-cell-subject">서울 중구 퇴계로 24**-**</b-td>
                  </b-tr>
                </b-tbody>
              </b-table-simple>
            </div>
            <div class="c-card-wrap">
              <ul class="c-card-list-thumnail c-sp-4n">
                <li>
                  <div class="c-card-box">
                    <p class="info-img">
                      <img :src="$config.asset.imgURL + '/images/sample/@temp.png'" alt="이미지 설명" />
                    </p>
                    <div class="info-body">
                      <p class="h3">Cable Modem</p>
                      <p>외부 신호를 받아 댁내에 설치되는 단말</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="c-card-box">
                    <p class="info-img">
                      <img :src="$config.asset.imgURL + '/images/sample/@temp.png'" alt="이미지 설명" />
                    </p>
                    <div class="info-body">
                      <p class="h3">Gateway</p>
                      <p>댁내에 AP, STB를 확장하기 위한 중간계위 단말</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="c-card-box">
                    <p class="info-img">
                      <img :src="$config.asset.imgURL + '/images/sample/@temp.png'" alt="이미지 설명" />
                    </p>
                    <div class="info-body">
                      <p class="h3">기가 WiFI (ON)</p>
                      <p>PC와 STB를 연결하는 Wifi</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="c-card-box">
                    <p class="info-img">
                      <img :src="$config.asset.imgURL + '/images/sample/@temp.png'" alt="이미지 설명" />
                    </p>
                    <div class="info-body">
                      <p class="h3">셋탑박스 (ON</p>
                      <p>TV와 연결되어있는 셋탑박스</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="c-btn-group">
              <button class="c-btn-cancel">취소하기</button>
              <button class="c-btn-ok">시작하기</button>
            </div>
            <div class="c-notice-wrap">
              <dl class="c-noticebox-h2">
                <dt class="h5">꼭 확인하세요.</dt>
                <dd>
                  <ul class="c-bullet-type-circle grow-1">
                    <li>기기전원을 모두 켜주세요.</li>
                    <li>인터넷과 연결된 PC 또는 테블릿에서 작업 중인 파일이 있다면 반드시 저장 후 진단을 시작하세요.</li>
                    <li>진단할 기기의 종류, 개수, 상태에 따라 소요시간이 달라집니다.</li>
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
