<template>
  <div class="p-sub-CS1_3_2_2_3_2_1">
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
          <div class="c-caution-1-1 icon-success">
            <p class="h5">리셋을 정상적으로 진행했습니다.</p>
            <p class="c-txt">서비스를 정상적으로 이용 가능하지 확인해주세요.</p>
          </div>
          <div class="c-page-section">
            <h2 class="h3">진단대상</h2>
            <p class="h5 info-txt-1"><span>인터넷/IPTV</span><span>서울 용산구 한강대로 32 ***</span></p>
            <div class="row c-table">
              <b-table-simple>
                <caption>
                  진단대상: 진단대상, 상태, 사진 목록에 대한 표
                </caption>
                <colgroup>
                  <col style="width: 194px" />
                  <col style="width: 214px" />
                  <col style="width: auto" />
                </colgroup>
                <b-thead>
                  <b-tr>
                    <b-th class="c-hcell-target">진단대상</b-th>
                    <b-th class="c-hcell-status">상태</b-th>
                    <b-th class="c-hcell-photo">사진</b-th>
                  </b-tr>
                </b-thead>
                <b-tbody>
                  <b-tr>
                    <b-td class="c-cell-target">셋톱박스(1)</b-td>
                    <b-td class="c-cell-status">확인불가</b-td>
                    <b-td class="c-cell-photo"></b-td>
                  </b-tr>
                  <b-tr>
                    <b-td class="c-cell-target">셋톱박스(2)</b-td>
                    <b-td class="c-cell-status">확인불가</b-td>
                    <b-td class="c-cell-photo"></b-td>
                  </b-tr>
                  <b-tr>
                    <b-td class="c-cell-target">기가WIFI</b-td>
                    <b-td class="c-cell-status">확인불가</b-td>
                    <b-td class="c-cell-photo"></b-td>
                  </b-tr>
                  <b-tr>
                    <b-td class="c-cell-target">Gateway</b-td>
                    <b-td class="c-cell-status">확인불가</b-td>
                    <b-td class="c-cell-photo"></b-td>
                  </b-tr>
                </b-tbody>
              </b-table-simple>
              <ul class="c-bullet-type-circle">
                <li>네트워크 상태에 따라 대기 기간이 필요 할 수 있습니다.</li>
              </ul>
            </div>
            <div class="c-card-wrap">
              <ul class="c-card-list-thumnail c-sp-4n">
                <li>
                  <div class="c-card-box">
                    <p class="info-img">
                      <img :src="$config.asset.imgURL + '/images/sample/@temp.png'" alt="이미지 설명" />
                    </p>
                    <div class="info-body">
                      <p class="h3">Cable Modem span</p>
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
                      <p class="h3">
                        Gateway<span class="c-noti-badge-area"><span class="is-blind">보유갯수</span><span class="icon-circle-1">2</span></span>
                      </p>
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
                      <p class="h3">
                        기가 WiFI (ON)<span class="c-noti-badge-area"><span class="is-blind">보유갯수</span><span class="icon-circle-1">2</span></span>
                      </p>
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
              <button class="c-btn-cancel">진단이력 조회</button>
              <button class="c-btn-ok">1:1 문의하기</button>
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
