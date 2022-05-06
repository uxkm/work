<template>
  <div class="p-sub-cs1-2-3">
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
            <h1 class="h1">칭찬합니다</h1>
            <p class="h5">친절한 직원을 칭찬해주세요!</p>
            <p>
              여러분의 칭찬이 더 친절한 LG유플러스 고객 서비스를 만듭니다.<br />
              서비스에 대한 질문이나 건의사항은 <a href="#" class="underline">1:1 문의</a>하기로 해주세요.
            </p>
          </div>
        </div>
        <!-- //.sub-top -->
      </div>
      <!-- //.toparea-wrap -->
      <div class="middlearea-contents -cont-mt-2">
        <div class="middlearea">
          <!-- 저장된 내위치 -->
          <div class="c-page-section">
            <div class="c-inpfield column-search search-type2 flex-end">
              <label class="c-label is-blind" for="cfrmSearch-1-4">검색</label>
              <div class="c-selform">
                <select id="cfrmSearch-1-4" name="" class="c-select" title="검색 조건 선택">
                  <option value="" selected>전체</option>
                </select>
              </div>
              <div class="c-inpform is-clear">
                <input type="text" name="" placeholder="검색어 입력하세요" title="검색어를 입력해주세요." class="c-inp" />
                <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                <button class="c-ibtn-find"><span class="is-blind">검색</span></button>
              </div>
            </div>
            <div class="row c-table">
              <b-table-simple>
                <caption>
                  칭찬합니다: 번호, 대상, 제목, 등록일, 작성자, 추천, 조회 목록에 대한 표
                </caption>
                <colgroup>
                  <col style="width: 90px" />
                  <col style="width: 178px" />
                  <col style="width: auto" />
                  <col style="width: 190px" />
                  <col style="width: 146px" />
                  <col style="width: 132px" />
                  <col style="width: 124px" />
                </colgroup>
                <b-thead>
                  <b-tr>
                    <b-th class="c-hcell-digit">번호</b-th>
                    <b-th class="c-hcell-target">대상</b-th>
                    <b-th class="c-hcell-subject">제목</b-th>
                    <b-th class="c-hcell-date">등록일</b-th>
                    <b-th class="c-hcell-writer">작성자</b-th>
                    <b-th class="c-hcell-like">추천</b-th>
                    <b-th class="c-hcell-view">조회</b-th>
                  </b-tr>
                </b-thead>
                <b-tbody>
                  <b-tr>
                    <b-td class="c-cell-digit">36244</b-td>
                    <b-td class="c-cell-target">고객센터 상담사</b-td>
                    <b-td class="c-cell-subject"><a href="#">지난달에 사용한 휴대폰 요금을 알고싶어요.</a></b-td>
                    <b-td class="c-cell-date">2020.11.30</b-td>
                    <b-td class="c-cell-writer">한*혜</b-td>
                    <b-td class="c-cell-like only-number">5</b-td>
                    <b-td class="c-cell-view only-number">22</b-td>
                  </b-tr>
                  <b-tr>
                    <b-td class="c-cell-digit">36244</b-td>
                    <b-td class="c-cell-target">고객센터 상담사</b-td>
                    <b-td class="c-cell-subject"><a href="#">지난달에 사용한 휴대폰 요금을 알고싶어요.</a></b-td>
                    <b-td class="c-cell-date">2020.11.30</b-td>
                    <b-td class="c-cell-writer">한*혜</b-td>
                    <b-td class="c-cell-like only-number">5</b-td>
                    <b-td class="c-cell-view only-number">22</b-td>
                  </b-tr>
                  <b-tr>
                    <b-td class="c-cell-digit">36244</b-td>
                    <b-td class="c-cell-target">고객센터 상담사</b-td>
                    <b-td class="c-cell-subject"><a href="#">지난달에 사용한 휴대폰 요금을 알고싶어요.</a></b-td>
                    <b-td class="c-cell-date">2020.11.30</b-td>
                    <b-td class="c-cell-writer">한*혜</b-td>
                    <b-td class="c-cell-like only-number">5</b-td>
                    <b-td class="c-cell-view only-number">22</b-td>
                  </b-tr>
                  <b-tr>
                    <b-td class="c-cell-digit">36244</b-td>
                    <b-td class="c-cell-target">고객센터 상담사</b-td>
                    <b-td class="c-cell-subject"><a href="#">지난달에 사용한 휴대폰 요금을 알고싶어요.</a></b-td>
                    <b-td class="c-cell-date">2020.11.30</b-td>
                    <b-td class="c-cell-writer">한*혜</b-td>
                    <b-td class="c-cell-like only-number">5</b-td>
                    <b-td class="c-cell-view only-number">22</b-td>
                  </b-tr>
                  <b-tr>
                    <b-td class="c-cell-digit">36244</b-td>
                    <b-td class="c-cell-target">고객센터 상담사</b-td>
                    <b-td class="c-cell-subject"><a href="#">지난달에 사용한 휴대폰 요금을 알고싶어요.</a></b-td>
                    <b-td class="c-cell-date">2020.11.30</b-td>
                    <b-td class="c-cell-writer">한*혜</b-td>
                    <b-td class="c-cell-like only-number">5</b-td>
                    <b-td class="c-cell-view only-number">22</b-td>
                  </b-tr>
                  <b-tr>
                    <b-td class="c-cell-digit">36244</b-td>
                    <b-td class="c-cell-target">고객센터 상담사</b-td>
                    <b-td class="c-cell-subject"><a href="#">지난달에 사용한 휴대폰 요금을 알고싶어요.</a></b-td>
                    <b-td class="c-cell-date">2020.11.30</b-td>
                    <b-td class="c-cell-writer">한*혜</b-td>
                    <b-td class="c-cell-like only-number">5</b-td>
                    <b-td class="c-cell-view only-number">22</b-td>
                  </b-tr>
                  <b-tr>
                    <b-td class="c-cell-digit">36244</b-td>
                    <b-td class="c-cell-target">고객센터 상담사</b-td>
                    <b-td class="c-cell-subject"><a href="#">지난달에 사용한 휴대폰 요금을 알고싶어요.</a></b-td>
                    <b-td class="c-cell-date">2020.11.30</b-td>
                    <b-td class="c-cell-writer">한*혜</b-td>
                    <b-td class="c-cell-like only-number">5</b-td>
                    <b-td class="c-cell-view only-number">22</b-td>
                  </b-tr>
                  <b-tr>
                    <b-td class="c-cell-digit">36244</b-td>
                    <b-td class="c-cell-target">고객센터 상담사</b-td>
                    <b-td class="c-cell-subject"><a href="#">지난달에 사용한 휴대폰 요금을 알고싶어요.</a></b-td>
                    <b-td class="c-cell-date">2020.11.30</b-td>
                    <b-td class="c-cell-writer">한*혜</b-td>
                    <b-td class="c-cell-like only-number">5</b-td>
                    <b-td class="c-cell-view only-number">22</b-td>
                  </b-tr>
                  <b-tr>
                    <b-td class="c-cell-digit">36244</b-td>
                    <b-td class="c-cell-target">고객센터 상담사</b-td>
                    <b-td class="c-cell-subject"><a href="#">지난달에 사용한 휴대폰 요금을 알고싶어요.</a></b-td>
                    <b-td class="c-cell-date">2020.11.30</b-td>
                    <b-td class="c-cell-writer">한*혜</b-td>
                    <b-td class="c-cell-like only-number">5</b-td>
                    <b-td class="c-cell-view only-number">22</b-td>
                  </b-tr>
                  <b-tr>
                    <b-td class="c-cell-digit">36244</b-td>
                    <b-td class="c-cell-target">고객센터 상담사</b-td>
                    <b-td class="c-cell-subject"><a href="#">지난달에 사용한 휴대폰 요금을 알고싶어요.</a></b-td>
                    <b-td class="c-cell-date">2020.11.30</b-td>
                    <b-td class="c-cell-writer">한*혜</b-td>
                    <b-td class="c-cell-like only-number">5</b-td>
                    <b-td class="c-cell-view only-number">22</b-td>
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
              <button class="c-btn-ok" @click="$refs['my-modal2'].show()">글쓰기</button>
            </div>
          </div>
          <!-- //저장된 내위치 -->
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
