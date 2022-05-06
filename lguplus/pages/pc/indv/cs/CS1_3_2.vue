<template>
  <div class="p-sub-CS1_3_2">
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
          <div class="c-page-section top-step-1">
            <div class="c-step-wrap c-sp-4n">
              <ol class="c-step-list-type-2">
                <li>
                  <p class="info-title h5"><span class="is-blind">1단계</span>진단하기</p>
                </li>
                <li>
                  <p class="info-title h5"><span class="is-blind">2단계</span>진단결과 확인하기</p>
                </li>
                <li>
                  <p class="info-title h5"><span class="is-blind">3단계</span>진단에 따른 리셋조치</p>
                </li>
                <li>
                  <p class="info-title h5"><span class="is-blind">4단계</span>고장 지속 시 A/S 신청</p>
                </li>
              </ol>
            </div>
          </div>
          <!-- 진단이력 -->
          <div class="c-page-section">
            <div class="c-inpfield c-dropbox inner-title">
              <h2 class="h3">진단이력</h2>
              <div class="c-selform dropbox-address">
                <select id="cfrmSelect-1-1" name="" class="c-select" title="5G요금제 선택">
                  <option value="" selected>인터넷/IPTV&nbsp;&nbsp;&nbsp;서울 용산구 한강대로 32 ***</option>
                </select>
              </div>
              <button class="c-btn-cancel c-smsm">검색</button>
            </div>
            <div class="row c-table">
              <b-table-simple>
                <caption>
                  진단이력: 번호, 진단일시, 진단대상, 결과 목록에 대한 표
                </caption>
                <colgroup>
                  <col style="width: 90px" />
                  <col style="width: 178px" />
                  <col style="width: auto" />
                  <col style="width: 224px" />
                </colgroup>
                <b-thead>
                  <b-tr>
                    <b-th class="c-hcell-digit">번호</b-th>
                    <b-th class="c-hcell-date">진단일시</b-th>
                    <b-th class="c-hcell-target">진단대상</b-th>
                    <b-th class="c-hcell-result">결과</b-th>
                  </b-tr>
                </b-thead>
                <b-tbody>
                  <b-tr>
                    <b-td class="c-cell-digit">1</b-td>
                    <b-td class="c-cell-date">2021.03.03 12:48</b-td>
                    <b-td class="c-cell-target">셋톱박스</b-td>
                    <b-td class="c-cell-result">진단완료</b-td>
                  </b-tr>
                  <b-tr>
                    <b-td class="c-cell-digit">2</b-td>
                    <b-td class="c-cell-date">2021.03.01 02:48</b-td>
                    <b-td class="c-cell-target">기가 wifi</b-td>
                    <b-td class="c-cell-result">진단완료</b-td>
                  </b-tr>
                  <b-tr>
                    <b-td class="c-cell-digit">3</b-td>
                    <b-td class="c-cell-date">2021.02.27 17:48</b-td>
                    <b-td class="c-cell-target">Gateway</b-td>
                    <b-td class="c-cell-result">진단완료</b-td>
                  </b-tr>
                </b-tbody>
              </b-table-simple>
              <!-- 페이지번호 -->
              <ul role="menubar" aria-disabled="false" aria-label="Pagination" class="pagination m-bv-pagination b-pagination justify-content-center" style="width: 100%">
                <li role="presentation" aria-hidden="true" class="page-item disabled">
                  <span role="menuitem" aria-label="처음 페이지로 이동" aria-disabled="true" class="page-link">처음 페이지로 이동</span>
                </li>
                <li role="presentation" aria-hidden="true" class="page-item disabled">
                  <span role="menuitem" aria-label="이전 페이지로 이동" aria-disabled="true" class="page-link">이전 페이지로 이동</span>
                </li>
                <!----><!---->
                <li role="presentation" class="page-item active">
                  <button role="menuitemradio" type="button" aria-label="현재 페이지 1" aria-checked="true" aria-posinset="1" aria-setsize="6" tabindex="0" class="page-link">1</button>
                </li>
                <li role="presentation" class="page-item">
                  <button role="menuitemradio" type="button" aria-label="현재 페이지 2" aria-checked="false" aria-posinset="2" aria-setsize="6" tabindex="-1" class="page-link">2</button>
                </li>
                <li role="presentation" class="page-item">
                  <button role="menuitemradio" type="button" aria-label="현재 페이지 3" aria-checked="false" aria-posinset="3" aria-setsize="6" tabindex="-1" class="page-link">3</button>
                </li>
                <li role="presentation" class="page-item bv-d-xs-down-none">
                  <button role="menuitemradio" type="button" aria-label="현재 페이지 4" aria-checked="false" aria-posinset="4" aria-setsize="6" tabindex="-1" class="page-link">4</button>
                </li>
                <li role="separator" class="page-item disabled bv-d-xs-down-none"><span class="page-link">…</span></li>
                <!---->
                <li role="presentation" class="page-item"><button role="menuitem" type="button" tabindex="-1" aria-label="다음 페이지로 이동" class="page-link">다음 페이지로 이동</button></li>
                <li role="presentation" class="page-item"><button role="menuitem" type="button" tabindex="-1" aria-label="마지막 페이지로 이동" class="page-link">마지막 페이지로 이동</button></li>
              </ul>
            </div>
            <div class="c-btn-group">
              <button class="c-btn-ok">진단하기</button>
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
          <!-- //진단이력 -->
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
