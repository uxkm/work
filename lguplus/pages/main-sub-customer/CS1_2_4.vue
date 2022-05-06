<template>
  <div class="p-sub-cs1-2-4">
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
            <h1 class="h1">설치가능 지역조회</h1>
            <p class="h5">인터넷, IPTV, 인터넷전화 등 유플러스만의 서비스를 이용할 수 있는 지역을 확인해보세요.</p>
          </div>
        </div>
      </div>
      <!-- //.toparea-wrap -->
      <div class="middlearea-contents">
        <div class="middlearea">
          <!-- 설치가능 지역조회 -->
          <div class="c-page-section">
            <div class="c-inpfield column-search search-type2">
              <p class="h3 text-center">검색</p>
              <label class="c-label is-blind" for="cfrmSearch-1-1">검색</label>
              <div class="c-inpform is-clear">
                <input id="cfrmSearch-1-1" type="text" name="" placeholder="세종5로 386" title="검색어를 입력해주세요." class="c-inp" />
                <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                <button class="c-ibtn-find"><span class="is-blind">검색</span></button>
              </div>
            </div>

            <!-- 개인_PC_고객지원_온라인문의_설치가능 지역조회_검색결과 class="is-show", 비노출 class="is-hide" -->
            <div class="data-result-section">
              <h2 class="h3">주소 입력하기</h2>
              <div class="row c-table">
                <b-table-simple sticky-header>
                  <caption>
                    구분, 주소, 작성일의 주소 입력 정보를 보여주고 선택하는 표
                  </caption>
                  <colgroup>
                    <col style="width: 100px" />
                    <col style="width: 110px" />
                    <col style="width: auto" />
                    <col style="width: 190px" />
                  </colgroup>
                  <b-thead>
                    <b-tr>
                      <b-th class="c-hcell-digit">선택</b-th>
                      <b-th class="c-hcell-type">구분</b-th>
                      <b-th class="c-hcell-subject">주소</b-th>
                      <b-th class="c-hcell-date">작성일</b-th>
                    </b-tr>
                  </b-thead>
                  <b-tbody>
                    <b-tr>
                      <b-td class="c-cell-digit">
                        <span class="c-radio">
                          <input id="radio-1-1" type="radio" name="rad" checked />
                          <label for="radio-1-1" class="text-radio">
                            <i class="icon"></i>
                            <b class="is-blind">주소 선택</b>
                          </label>
                        </span>
                      </b-td>
                      <b-td class="c-cell-type">건물</b-td>
                      <b-td class="c-cell-subject">서울시 강서구 화공동 12-100</b-td>
                      <b-td class="c-cell-date">2020.11.30</b-td>
                    </b-tr>
                    <b-tr>
                      <b-td class="c-cell-digit">
                        <span class="c-radio">
                          <input id="radio-1-2" type="radio" name="rad" />
                          <label for="radio-1-2" class="text-radio">
                            <i class="icon"></i>
                            <b class="is-blind">주소 선택</b>
                          </label>
                        </span>
                      </b-td>
                      <b-td class="c-cell-type">아파트</b-td>
                      <b-td class="c-cell-subject">서울시 강서구 화곡동 12-102 강서빌라</b-td>
                      <b-td class="c-cell-date">2020.11.30</b-td>
                    </b-tr>
                    <b-tr>
                      <b-td class="c-cell-digit">
                        <span class="c-radio">
                          <input id="radio-1-3" type="radio" name="rad" />
                          <label for="radio-1-3" class="text-radio">
                            <i class="icon"></i>
                            <b class="is-blind">주소 선택</b>
                          </label>
                        </span>
                      </b-td>
                      <b-td class="c-cell-type">아파트</b-td>
                      <b-td class="c-cell-subject">서울시 강서구 화곡동 12-102 12차주택광랜단지</b-td>
                      <b-td class="c-cell-date">2020.11.30</b-td>
                    </b-tr>
                    <b-tr>
                      <b-td class="c-cell-digit">
                        <span class="c-radio">
                          <input id="radio-1-4" type="radio" name="rad" />
                          <label for="radio-1-4" class="text-radio">
                            <i class="icon"></i>
                            <b class="is-blind">주소 선택</b>
                          </label>
                        </span>
                      </b-td>
                      <b-td class="c-cell-type">건물</b-td>
                      <b-td class="c-cell-subject">서울시 강서구 화공동 12-100</b-td>
                      <b-td class="c-cell-date">2020.11.30</b-td>
                    </b-tr>
                    <b-tr>
                      <b-td class="c-cell-digit">
                        <span class="c-radio">
                          <input id="radio-1-5" type="radio" name="rad" />
                          <label for="radio-1-5" class="text-radio">
                            <i class="icon"></i>
                            <b class="is-blind">주소 선택</b>
                          </label>
                        </span>
                      </b-td>
                      <b-td class="c-cell-type">아파트</b-td>
                      <b-td class="c-cell-subject">서울시 강서구 화곡동 12-102 강서빌라</b-td>
                      <b-td class="c-cell-date">2020.11.30</b-td>
                    </b-tr>
                    <b-tr>
                      <b-td class="c-cell-digit">
                        <span class="c-radio">
                          <input id="radio-1-6" type="radio" name="rad" />
                          <label for="radio-1-6" class="text-radio">
                            <i class="icon"></i>
                            <b class="is-blind">주소 선택</b>
                          </label>
                        </span>
                      </b-td>
                      <b-td class="c-cell-type">아파트</b-td>
                      <b-td class="c-cell-subject">서울시 강서구 화곡동 12-102 12차주택광랜단지</b-td>
                      <b-td class="c-cell-date">2020.11.30</b-td>
                    </b-tr>
                  </b-tbody>
                </b-table-simple>
              </div>
              <div class="bd-tb-wrap">
                <div class="row c-table">
                  <b-table-simple class="c-table-row c-all-white">
                    <caption>
                      기본주소, 상세주소를 보여주는 표
                    </caption>
                    <colgroup>
                      <col style="width: 200px" />
                      <col style="width: auto" />
                    </colgroup>
                    <b-tbody>
                      <b-tr>
                        <b-th>
                          <label class="c-label" for="cfrmInp-1-1">
                            기본주소
                            <span class="is-need"><i class="is-blind">필수항목</i></span>
                          </label>
                        </b-th>
                        <b-td>
                          <div class="c-inpform is-err">
                            <input id="cfrmInp-1-1" type="text" name="" value="서울시 강서구 화곡동 12-100" placeholder="기본주소 입력" title="기본주소를 입력해주세요" class="c-inp" />
                            <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                            <p class="text-msg">기본주소가 선택이 않되어 있습니다. 상단 리스트에서 주소를 선택해주세요.</p>
                          </div>
                        </b-td>
                      </b-tr>
                      <b-tr>
                        <b-th>
                          <label class="c-label" for="cfrmAddr-3-1">
                            상세주소
                            <span class="is-need"><i class="is-blind">필수항목</i></span>
                          </label>
                        </b-th>
                        <b-td>
                          <div class="c-inpform-group column-address-type2">
                            <div class="c-selform">
                              <span class="is-blind">건물명</span>
                              <select id="cfrmAddr-3-1" name="" class="c-select" title="건물명 직접 선택" readonly>
                                <option value="" selected>경암빌딩</option>
                              </select>
                              <!-- <p class="text-msg">건물명을 선택해주세요.</p> -->
                            </div>
                            <div class="c-inpform">
                              <label for="cfrmAddr-3-1-1" class="c-label is-blind">건물명 입력</label>
                              <input id="cfrmAddr-3-1-1" type="text" name="" placeholder="건물명 입력" title="건물명을 입력해주세요" class="c-inp" />
                              <!-- <p class="text-msg">건물명을 입력해주세요.</p> -->
                            </div>
                            <div class="c-inpform">
                              <label for="cfrmAddr-3-1-2" class="c-label c-abs-r">동</label>
                              <input id="cfrmAddr-3-1-2" type="text" name="" placeholder="입력" title="동을 입력해주세요" class="c-inp" />
                              <!-- <p class="text-msg">동을 입력해주세요.</p> -->
                            </div>
                            <div class="c-inpform">
                              <label for="cfrmAddr-3-1-3" class="c-label c-abs-r">층</label>
                              <input id="cfrmAddr-3-1-3" type="text" name="" placeholder="입력" title="층을 입력해주세요" class="c-inp" />
                              <!-- <p class="text-msg">층을 입력해주세요.</p> -->
                            </div>
                            <div class="c-inpform">
                              <label for="cfrmAddr-3-1-4" class="c-label c-abs-r">호</label>
                              <input id="cfrmAddr-3-1-4" type="text" name="" placeholder="입력" title="호를 입력해주세요" class="c-inp" />
                              <!-- <p class="text-msg">호를 입력해주세요.</p> -->
                            </div>
                          </div>
                        </b-td>
                      </b-tr>
                    </b-tbody>
                  </b-table-simple>
                </div>
              </div>
            </div>
            <!-- //개인_PC_고객지원_온라인문의_설치가능 지역조회_검색결과 -->

            <!-- 개인_PC_고객지원_온라인문의_설치가능 지역조회_결과없을 경우 보임 노출 class="is-show", 비노출 class="is-hide" -->
            <div class="c-caution-1-1 icon-nodata">
              <p class="h5">검색결과가 없습니다.</p>
              <p class="c-txt">아래 검색 유의사항을 확인해보세요.</p>
            </div>
            <!-- //개인_PC_고객지원_온라인문의_설치가능 지역조회_결과없을 경우 보임 -->

            <!-- 검색 유의사항 - 하단에 항상 노출 ㅡ 설치가능 지역조회_가능지역은 제외 -->
            <div class="c-notice-wrap">
              <dl class="c-noticebox-h3">
                <dt class="h5">검색 유의사항</dt>
                <dd>
                  <ul class="c-bullet-type-circle grow-1">
                    <li>정확하게 검색할 수 있도록 아래 양식에 맞게 주소를 입력하고 검색 버튼을 누르세요.</li>
                    <li>도로명 + 건물번호 (예, 테헤란로 501)</li>
                    <li>도로명 + 건물명 (예, 월드컵북로 유플러스)</li>
                    <li>지역명 (동/읍/면) + (산) 번지 (예, 남면 산 130)</li>
                    <li>지역명 (동/읍/면) + (산) 번지 (예, 남면 산 130)</li>
                    <li>지역명(동/읍/면)+건물명 또는 아파트명(예, 상암동 월드컵파크)</li>
                  </ul>
                </dd>
              </dl>
            </div>
            <!-- //검색 유의사항 -->

            <div class="c-btn-group">
              <button class="c-btn-ok">조회</button>
            </div>

            <!-- 개인_PC_고객지원_온라인문의_설치가능 지역조회_가능지역. 노출 class="is-show", 비노출 class="is-hide" -->
            <div class="installable-result-area">
              <div class="result-text">
                <p>
                  서울시 강서구 화곡동 12-101 강서빌라 101동 1층 102호에서는<br />
                  총 <em>5개</em>의 서비스를 이용하실 수 있습니다!
                </p>
                <ul class="result-noti">
                  <li><span>통신시설공사가 필요할 수 있습니다.</span></li>
                  <li><span>공사 진행 시 상황에 따라 서비스 개통이 늦어지거나 개통이 불가능할 수 있습니다.</span></li>
                </ul>
              </div>
              <div class="c-card-wrap">
                <ul class="c-card-list-icon c-sp-5n">
                  <li>
                    <a href="#" class="c-card-box">
                      <small class="c-flag">U<sup>+</sup>기가</small>
                      <p class="h5 info-title">스마트 기가안심 요금제</p>
                      <div class="info-body icon-giga-1">
                        <div class="c-btn-group">
                          <span class="c-btn-txt-detail-1">신청</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="c-card-box">
                      <small class="c-flag">U<sup>+</sup>기가</small>
                      <p class="h5 info-title">스마트 기가슬림안심 요금제</p>
                      <div class="info-body icon-giga-2">
                        <div class="c-btn-group">
                          <span class="c-btn-txt-detail-1">신청</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="c-card-box">
                      <small class="c-flag">인터넷</small>
                      <p class="h5 info-title">스마트 광랜안심 요금제</p>
                      <div class="info-body icon-giga-3">
                        <div class="c-btn-group">
                          <span class="c-btn-txt-detail-1">신청</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="c-card-box">
                      <small class="c-flag">IPTV</small>
                      <p class="h5 info-title">U<sup>+</sup>TV</p>
                      <div class="info-body icon-giga-4">
                        <div class="c-btn-group">
                          <span class="c-btn-txt-detail-1">신청</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="c-card-box">
                      <small class="c-flag">인터넷전화</small>
                      <p class="h5 info-title">홈보이</p>
                      <div class="info-body icon-giga-5">
                        <div class="c-btn-group">
                          <span class="c-btn-txt-detail-1">신청</span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="c-btn-group">
                <button class="c-btn-ok">다른 주소 조회</button>
              </div>
            </div>
            <!-- //.installable-result-area -->
            <!-- //개인_PC_고객지원_온라인문의_설치가능 지역조회_가능지역 -->
          </div>
          <!-- //.c-page-section -->
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
