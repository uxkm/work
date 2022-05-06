<template>
  <div class="p-sub-cs1-2-2">
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
            <h1 class="h1">1:1 문의</h1>
          </div>
        </div>
        <div class="sub-top-guide layout-auto">
          <ul class="c-bullet-type-cirlce">
            <li>평일 상담업무 시간 종료 이후 (오후 6시 ~ 다음 날 오전 9시)와 토·일요일 및 공휴일에 접수된 문의사항은 다음 영업일 오전 9시 이후부터 먼저 접수된 문의사항 순으로 답변해 드립니다.</li>
            <li>문의하신 내용은 고객센터 앱을 통해서도 확인할 수 있습니다.</li>
            <li>문의내용에 대한 답변은 문의를 접수할 때 입력한 이메일 계정으로 확인 또는 아래 문의내역을 통해 확인할 수 있습니다.</li>
          </ul>
        </div>
        <!-- //.sub-top -->
      </div>
      <!-- //.toparea-wrap -->
      <div class="middlearea-contents">
        <div class="middlearea">
          <!-- 저장된 내위치 -->
          <div class="c-page-section">
            <h2 class="h3">저장된 내 위치</h2>
            <div class="row c-table">
              <b-table-simple>
                <caption>
                  저장된 내 위치: 구분, 유형, 내용, 진행사항에 대한 표
                </caption>
                <colgroup>
                  <col style="width: 90px" />
                  <col style="width: 112px" />
                  <col style="width: 216px" />
                  <col style="width: auto" />
                  <col style="width: 120px" />
                  <col style="width: 166px" />
                </colgroup>
                <b-thead>
                  <b-tr>
                    <b-th class="c-hcell-digit">번호</b-th>
                    <b-th class="c-hcell-part">구분</b-th>
                    <b-th class="c-hcell-type">유형</b-th>
                    <b-th class="c-hcell-subject">내용</b-th>
                    <b-th class="c-hcell-progress">진행사항</b-th>
                    <b-th class="c-hcell-date">작성일</b-th>
                  </b-tr>
                </b-thead>
                <b-tbody>
                  <b-tr>
                    <b-td class="c-cell-digit">132</b-td>
                    <b-td class="c-cell-part">모바일</b-td>
                    <b-td class="c-cell-type">요금조회 및 납부관리</b-td>
                    <b-td class="c-cell-subject"><a href="#">지난달에 사용한 휴대폰 요금을 알고싶어요.</a></b-td>
                    <b-td class="c-cell-progress">처리중</b-td>
                    <b-td class="c-cell-date">2020.11.30</b-td>
                  </b-tr>
                  <b-tr>
                    <b-td class="c-cell-digit">131</b-td>
                    <b-td class="c-cell-part">결합서비스</b-td>
                    <b-td class="c-cell-type">한방에yo</b-td>
                    <b-td class="c-cell-subject"><a href="#">사용중인 결합서비스가 얼마나 할인되는건지 알고 싶어요.</a></b-td>
                    <b-td class="c-cell-progress">처리완료</b-td>
                    <b-td class="c-cell-date">2020.11.20</b-td>
                  </b-tr>
                  <b-tr>
                    <b-td class="c-cell-digit">130</b-td>
                    <b-td class="c-cell-part">모바일</b-td>
                    <b-td class="c-cell-type">요금조회 및 납부관리</b-td>
                    <b-td class="c-cell-subject"><a href="#">지난달에 사용한 휴대폰 요금을 알고싶어요.</a></b-td>
                    <b-td class="c-cell-progress">처리완료</b-td>
                    <b-td class="c-cell-date">2020.11.11</b-td>
                  </b-tr>
                  <b-tr>
                    <b-td class="c-cell-digit">129</b-td>
                    <b-td class="c-cell-part">결합서비스</b-td>
                    <b-td class="c-cell-type">한방에yo</b-td>
                    <b-td class="c-cell-subject"><a href="#">사용중인 결합서비스가 얼마나 할인되는건지 알고 싶어요.</a></b-td>
                    <b-td class="c-cell-progress">처리완료</b-td>
                    <b-td class="c-cell-date">2020.11.01</b-td>
                  </b-tr>
                  <b-tr>
                    <b-td class="c-cell-digit">128</b-td>
                    <b-td class="c-cell-part">IOT서비스</b-td>
                    <b-td class="c-cell-type">IOT 장애 점검</b-td>
                    <b-td class="c-cell-subject"><a href="#">리모콘이 작동을 안해요</a></b-td>
                    <b-td class="c-cell-progress">처리완료</b-td>
                    <b-td class="c-cell-date">2020.09.22</b-td>
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
          </div>
          <!-- //저장된 내위치 -->
          <!-- 문의하기 -->
          <div class="c-page-section">
            <div class="info-h-group">
              <h2 class="h3">문의하기</h2>
              <p class="info-is-need-wrap">
                <span class="info-is-need-txt">
                  <span class="is-need"><i class="is-blind">필수항목</i></span>
                  필수 입력 항목입니다.
                </span>
              </p>
            </div>
            <div class="bd-tb-wrap">
              <div class="row c-table">
                <b-table-simple class="c-table-row c-all-white">
                  <caption>
                    문의하기: 문의고객 이름, 이메일, 연락처, 문의유형, 문의제목, 문의내용, 첨부파일에 대한 표
                  </caption>
                  <colgroup>
                    <col style="width: 200px" />
                    <col style="width: auto" />
                  </colgroup>
                  <b-tbody>
                    <b-tr>
                      <b-th>
                        <label class="c-label" for="cfrmInp-1-1">
                          문의고객 이름
                          <span class="is-need"><i class="is-blind">필수항목</i></span>
                        </label>
                      </b-th>
                      <b-td>
                        <div class="c-inpform is-err">
                          <input id="cfrmInp-1-1" type="text" name="" placeholder="10자 이내 입력" title="이름을 입력해주세요." class="c-inp" />
                          <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                          <p class="text-msg">사용 가능한 ID 입니다.</p>
                        </div>
                      </b-td>
                    </b-tr>
                    <b-tr>
                      <b-th>
                        <label class="c-label" for="cfrmInp-1-2">
                          문의고객 이메일
                          <span class="is-need"><i class="is-blind">필수항목</i></span>
                        </label>
                      </b-th>
                      <b-td>
                        <div class="c-inpform-group column-email">
                          <div class="c-inpform">
                            <span class="is-blind">이메일 아이디</span>
                            <input id="cfrmInp-1-2" type="text" name="" placeholder="이메일 아이디" title="이메일 아이디 입력" class="c-inp" />
                            <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                          </div>
                          <div class="text-dot">@</div>
                          <div class="c-inpform">
                            <span class="is-blind">이메일 주소</span>
                            <input type="text" name="" placeholder="이메일 주소" title="이메일 주소 입력" class="c-inp" />
                            <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                          </div>
                          <div class="c-selform">
                            <span class="is-blind">이메일 주소 선택</span>
                            <select name="" class="c-select" title="이메일 주소 직접 선택">
                              <option value="" selected>직접입력</option>
                              <option>naver.com</option>
                            </select>
                          </div>
                        </div>
                      </b-td>
                    </b-tr>
                    <b-tr>
                      <b-th>
                        <label class="c-label" for="cfrmInp-1-3">
                          문의고객 연락처
                          <span class="is-need"><i class="is-blind">필수항목</i></span>
                        </label>
                      </b-th>
                      <b-td>
                        <div class="c-inpform-group column-telnumber">
                          <div class="c-selform">
                            <span class="is-blind">통신사 번호</span>
                            <select id="cfrmInp-1-3" name="" class="c-select" title="연락처 통신사 번호 선택">
                              <option value="" selected>010</option>
                              <option>070</option>
                            </select>
                          </div>
                          <div class="c-inpform">
                            <span class="is-blind">연락처 번호</span>
                            <input type="text" name="" placeholder="" title="연락처 나머지 8자리 입력" class="c-inp" />
                            <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                          </div>
                        </div>
                      </b-td>
                    </b-tr>
                    <b-tr>
                      <b-th>
                        <label class="c-label" for="cfrmInp-1-4">
                          문의 유형
                          <span class="is-need"><i class="is-blind">필수항목</i></span>
                        </label>
                      </b-th>
                      <b-td>
                        <div class="c-selform c-dropbox">
                          <select id="cfrmSelect-1-4" name="" class="c-select" title="문의 유형 선택">
                            <option value="" selected>선택</option>
                            <option>문의유형1</option>
                            <option>문의유형2</option>
                            <option>문의유형3</option>
                          </select>
                        </div>
                      </b-td>
                    </b-tr>
                    <b-tr>
                      <b-th>
                        <label class="c-label" for="cfrmInp-1-5">
                          문의 제목
                          <span class="is-need"><i class="is-blind">필수항목</i></span>
                        </label>
                      </b-th>
                      <b-td>
                        <div class="c-inpform">
                          <input id="cfrmInp-1-5" type="text" name="" placeholder="제목 입력" title="문의 제목을 입력해주세요." class="c-inp" />
                          <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                        </div>
                      </b-td>
                    </b-tr>
                    <b-tr>
                      <b-th>
                        <label class="c-label" for="cfrmText-1-1">
                          문의 내용
                          <span class="is-need"><i class="is-blind">필수항목</i></span>
                        </label>
                      </b-th>
                      <b-td>
                        <div class="c-textareaform">
                          <textarea id="cfrmText-1-1" name="" class="c-textarea -h-350" placeholder="문의내용 입력" title="텍스트 입력"></textarea>
                        </div>
                      </b-td>
                    </b-tr>
                    <b-tr>
                      <b-th>
                        <label class="c-label" for="cfrmInp-1-7"> 첨부파일 </label>
                      </b-th>
                      <b-td>
                        <div class="c-inpform-group column-file" tabindex="0">
                          <div class="inp-file-text"><span>파일선택</span></div>
                          <label class="c-label">
                            <input type="file" name="" placeholder="파일첨부" title="파일첨부" class="c-inp" />
                            <span role="button" class="c-btn-gray-round-1 c-file-find">찾아보기</span>
                          </label>
                          <div class="c-btngroup">
                            <button class="c-btn-gray-round-1 c-btn-add">파일추가</button>
                            <button class="c-btn-gray-round-1 c-btn-del">파일삭제</button>
                          </div>
                        </div>
                        <ul class="c-bullet-type-cirlce">
                          <li>파일은 xls 파일만 업로드 가능합니다.</li>
                          <li>파일 용량은 7메가까지, 개수는 5개까지 첨부 가능</li>
                        </ul>
                        <div class="row c-table">
                          <b-table-simple>
                            <caption>
                              첨부한 파일에 파일명, 사이즈에 대한 표
                            </caption>
                            <colgroup>
                              <col style="width: 507px" />
                              <col style="width: 142px" />
                              <col style="width: auto" />
                            </colgroup>
                            <b-thead>
                              <b-tr>
                                <b-th class="c-hcell-filename">파일명</b-th>
                                <b-th class="c-hcell-size">사이즈</b-th>
                                <b-th class="c-hcell-fileDel"><span class="is-blind">파일삭제</span></b-th>
                              </b-tr>
                            </b-thead>
                            <b-tbody>
                              <b-tr>
                                <b-td class="c-cell-filename">첨부된 파일 샘플.xls</b-td>
                                <b-td class="c-cell-size"> 14.02MB </b-td>
                                <b-td class="c-cell-fileDel">
                                  <button class="c-btn-gray-round-1">파일삭제</button>
                                </b-td>
                              </b-tr>
                            </b-tbody>
                          </b-table-simple>
                        </div>
                      </b-td>
                    </b-tr>
                  </b-tbody>
                </b-table-simple>
              </div>
            </div>
            <div class="c-btn-group">
              <button class="c-btn-ok" @click="$refs['my-modal2'].show()">문의하기</button>
            </div>
          </div>
          <!-- //문의하기 -->
        </div>
        <!-- //.middlearea -->
      </div>
      <!-- //.middlearea-contents -->
    </div>
    <!-- //.submain-section  -->
    <!-- 경고창 -->
    <b-modal ref="my-modal2" dialog-class="m-bv-modal c-layer-alert">
      <template #modal-header="{ close }">
        <h1 class="h3">안내</h1>
        <button class="c-btn-close" type="button" @click="close()">닫기</button>
      </template>
      <template #default="{}">
        <div class="c-body-content">
          <p class="h2">고객님의 1:1 문의 접수가 완료되었습니다.</p>
          <p>
            기타 궁금한 사항은 <a href="#" class="underline-m">자주하는 질문</a>이나 <a href="#" class="underline-m">1:1 문의</a>를 통해 확인해주세요. <br />
            조회, 변경, 일시정지, 부가서비스 등록 및 해지 등 실시간 업무처리가 필요하신 경우에는 <a href="#" class="underline-m">마이페이지</a>를 이용해주세요.
          </p>
        </div>
      </template>
      <template #modal-footer="{ ok, cancel }">
        <div class="c-btn-group">
          <button class="c-btn-cancel c-sm" @click="ok()">취소하기</button>
          <button class="c-btn-ok c-sm" @click="cancel()">확인하기</button>
        </div>
      </template>
    </b-modal>
    <!-- //경고창 -->
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
