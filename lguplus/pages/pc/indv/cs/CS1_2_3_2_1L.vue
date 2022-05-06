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
            <p class="h5">유플러스의 서비스가 친절했다면 칭찬해주세요. 여러분의 칭찬이 더 친절한 LG유플러스 고객 서비스를 만듭니다.</p>
            <p>
              여러분의 칭찬이 더 친절한 LG유플러스 고객 서비스를 만듭니다.<br />
              서비스에 대한 질문이나 건의사항은 <a href="#" class="underline">1:1 문의</a>하기로 해주세요.
            </p>
          </div>
        </div>
        <!-- //.sub-top -->
      </div>
      <!-- //.toparea-wrap -->
      <div class="middlearea-contents">
        <div class="middlearea">
          <!-- 등록 -->
          <div class="c-page-section">
            <div class="info-h-group">
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
                    칭찬힙니다 등록: 칭찬대상, 제목, 내용, 첨부파일, 이미지 입력에 대한 표
                  </caption>
                  <colgroup>
                    <col style="width: 200px" />
                    <col style="width: auto" />
                  </colgroup>
                  <b-tbody>
                    <b-tr>
                      <b-th>
                        <label class="c-label" for="cfrmSelect-1-4">
                          칭찬대상
                          <span class="is-need"><i class="is-blind">필수항목</i></span>
                        </label>
                      </b-th>
                      <b-td>
                        <div class="c-selform c-dropbox">
                          <select id="cfrmSelect-1-4" name="" class="c-select" title="문의 유형 선택">
                            <option value="" selected>선택하세요</option>
                            <option>고객센터 상담사</option>
                            <option>매장 상담사</option>
                            <option>판매사</option>
                            <option>네트워크</option>
                            <option>설치기사</option>
                            <option>A/S기사</option>
                            <option>기타</option>
                          </select>
                        </div>
                      </b-td>
                    </b-tr>
                    <b-tr>
                      <b-th>
                        <label class="c-label" for="cfrmInp-1-1">
                          제목
                          <span class="is-need"><i class="is-blind">필수항목</i></span>
                        </label>
                      </b-th>
                      <b-td>
                        <div class="c-inpform is-err">
                          <input id="cfrmInp-1-1" type="text" name="" placeholder="제목을 입력하세요" title="제목을 입력하세요" class="c-inp" aria-describedby="error-cfrmInp-1-1" />
                          <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                          <p id="error-cfrmInp-1-1" class="text-msg">제목은 필수 입력 항목입니다.</p>
                        </div>
                      </b-td>
                    </b-tr>
                    <b-tr>
                      <b-th>
                        <label class="c-label" for="cfrmText-2-1">
                          내용
                          <span class="is-need"><i class="is-blind">필수항목</i></span>
                        </label>
                      </b-th>
                      <b-td>
                        <div class="c-textareaform">
                          <textarea id="cfrmText-2-1" name="" class="c-textarea -h-350" placeholder="문의, 불만, 건의사항 등은 게시 할 수 없습니다. 양해 부탁드립니다." title="내용 입력"></textarea>
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
                        </div>
                        <ul class="c-bullet-type-cirlce">
                          <li>파일은 doc, xls, pptx 파일만 업로드 가능합니다</li>
                        </ul>
                        <div class="row c-table">
                          <b-table-simple>
                            <caption>
                              첨부한 파일에 파일명, 사이즈 정보에 대한 표
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
                    <b-tr>
                      <b-th>
                        <label class="c-label" for="cfrmInp-1-7"> 이미지 </label>
                      </b-th>
                      <b-td>
                        <div class="c-inpform-group column-file" tabindex="0">
                          <div class="inp-file-text"><span>파일선택</span></div>
                          <label class="c-label">
                            <input type="file" name="" placeholder="파일첨부" title="이미지 파일첨부" class="c-inp" />
                            <span role="button" class="c-btn-gray-round-1 c-file-find">찾아보기</span>
                          </label>
                        </div>
                        <ul class="c-bullet-type-cirlce">
                          <li>파일은 jpg, png 파일만 업로드 가능합니다.</li>
                        </ul>
                        <div class="row c-table">
                          <b-table-simple bordered>
                            <caption>
                              첨부한 파일에 파일명, 사이즈 정보에 대한 표
                            </caption>
                            <colgroup>
                              <col style="width: 98px" />
                              <col style="width: auto" />
                              <col style="width: 128px" />
                            </colgroup>
                            <b-thead>
                              <b-tr>
                                <b-th class="c-hcell-check">선택</b-th>
                                <b-th class="c-hcell-filename">파일명</b-th>
                                <b-th class="c-hcell-fileSize">사이즈</b-th>
                              </b-tr>
                            </b-thead>
                            <b-tbody>
                              <b-tr>
                                <b-td class="c-cell-check">
                                  <span class="c-checkbox">
                                    <input id="chkBox-1-1" type="checkbox" name="" />
                                    <label for="chkBox-1-1" class="text-chkbox">
                                      <i class="icon"></i>
                                      <b class="is-blind">파일네임1</b>
                                    </label>
                                  </span>
                                </b-td>
                                <b-td class="c-cell-filename">파일네임1</b-td>
                                <b-td class="c-cell-fileSize">14.02MB</b-td>
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
              <button class="c-btn-cancel">취소</button>
              <button class="c-btn-ok">등록</button>
            </div>
            <div class="c-notice-wrap">
              <dl class="c-noticebox-h2">
                <dt class="h5">꼭 확인하세요.</dt>
                <dd>
                  <ul class="c-bullet-type-circle grow-1">
                    <li>게시물은 관리자의 승인 후 게시됩니다. 관리자의 판단에 따라 삭제될 수 있습니다.</li>
                    <li>공휴일, 토요일, 일요일에는 게시 승인이 늦어질 수 있습니다.</li>
                    <li>게시물 추천은 로그인 후 가능합니다.</li>
                  </ul>
                </dd>
              </dl>
            </div>
          </div>
          <!-- //등록 -->
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
          <p class="h2">칭찬이 정상적으로 요청되었습니다.</p>
          <p>
            등록하신 칭찬내용은 관리자의 승인에 의해서 게시되며<br />관리자의 판단에 의해 임의 삭제 될 수 있습니다.<br />
            기타 궁금한 사항은 <a href="#" class="underline-m">자주하는 질문</a>이나 <a href="" class="underline-m">1:1 문의</a>를 통해 확인해주세요.
          </p>
        </div>
      </template>
      <template #modal-footer="{ cancel }">
        <div class="c-btn-group">
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
  mounted() {
    this.$refs['my-modal2'].show();
  },
};
</script>

<style lang="scss"></style>
