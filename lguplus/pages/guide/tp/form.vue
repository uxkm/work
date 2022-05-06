<template>
  <section role="contentinfo" class="uksection uk_index" aria-label="Form">
    <h1>{{ title }}</h1>
    <!-- 고객정보 -->
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
              고객정보: 문의고객 이름, 이메일, 연락처, 문의유형, 답변 알림문자 수신, 장애현상, 설치 희망일자, 현지출국일, 상세주소, 문의제목, 문의내용, 첨부파일, 이미지 첨부 입력에 대한 표
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
                    <input id="cfrmInp-1-1" type="text" name="" placeholder="10자 이내 입력" title="이름을 입력해주세요." class="c-inp" aria-describedby="error-cfrmInp-1-1" />
                    <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                    <p id="error-cfrmInp-1-1" class="text-msg">올바른 이름이 아닙니다.</p>
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
                  <label class="c-label" for="cfrmSelect-1-4">
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
                  <div class="c-table-faq-list">
                    <p class="-txt-mid">추천 자주하는 질문</p>
                    <ul class="faq-list">
                      <li><a href="#">[일시정지] 사용하던 U+휴대폰(모바일)을 일시정지 하려고 합니다. 어떻게 해야 하나요?</a></li>
                      <li><a href="#">[해지] 휴대폰 해지 시 가입비를 돌려받을 수 있나요?</a></li>
                      <li><a href="#">[변경] 핸드폰을 분실했는데 일시정지를 어떻게 하나요?</a></li>
                    </ul>
                  </div>
                </b-td>
              </b-tr>
              <b-tr>
                <b-th>
                  <span class="c-span">답변 알림문자 수신</span>
                </b-th>
                <b-td>
                  <div class="c-btn-check-list d-table">
                    <div class="d-table-row">
                      <span class="d-table-td">
                        <span class="c-radio">
                          <input id="cfrmRadio-1-1" type="radio" name="cfrmRadio-1-1" title="답변 알림문자 수신" checked />
                          <label for="cfrmRadio-1-1" class="text-radio">
                            <i class="icon"></i>
                            <b>아니오</b>
                          </label>
                        </span>
                      </span>
                      <span class="d-table-td">
                        <span class="c-radio">
                          <input id="cfrmRadio-1-2" type="radio" name="cfrmRadio-1-1" title="답변 알림문자 수신" />
                          <label for="cfrmRadio-1-2" class="text-radio">
                            <i class="icon"></i>
                            <b>예</b>
                          </label>
                        </span>
                      </span>
                    </div>
                  </div>
                </b-td>
              </b-tr>
              <b-tr>
                <b-th>
                  <span class="c-span">장애현상</span>
                </b-th>
                <b-td>
                  <div class="c-btn-check-list d-table">
                    <div class="d-table-row">
                      <span class="d-table-td">
                        <span class="c-checkbox">
                          <input id="cfrmCheckbox-1-1" type="checkbox" name="cfrmCheckbox-1-1" title="장애현상" checked />
                          <label for="cfrmCheckbox-1-1" class="text-chkbox">
                            <i class="icon"></i>
                            <b>음성수신(현지→현지)</b>
                          </label>
                        </span>
                      </span>
                      <span class="d-table-td">
                        <span class="c-checkbox">
                          <input id="cfrmCheckbox-1-2" type="checkbox" name="cfrmCheckbox-1-2" title="장애현상" />
                          <label for="cfrmCheckbox-1-2" class="text-chkbox">
                            <i class="icon"></i>
                            <b>음성수신(한국→현지)</b>
                          </label>
                        </span>
                      </span>
                      <span class="d-table-td">
                        <span class="c-checkbox">
                          <input id="cfrmCheckbox-1-3" type="checkbox" name="cfrmCheckbox-1-3" title="장애현상" />
                          <label for="cfrmCheckbox-1-3" class="text-chkbox">
                            <i class="icon"></i>
                            <b>음성발신(현지→현지)</b>
                          </label>
                        </span>
                      </span>
                    </div>
                    <div class="d-table-row">
                      <span class="d-table-td">
                        <span class="c-checkbox">
                          <input id="cfrmCheckbox-1-4" type="checkbox" name="cfrmCheckbox-1-4" title="장애현상" checked />
                          <label for="cfrmCheckbox-1-4" class="text-chkbox">
                            <i class="icon"></i>
                            <b>SMS수신</b>
                          </label>
                        </span>
                      </span>
                      <span class="d-table-td">
                        <span class="c-checkbox">
                          <input id="cfrmCheckbox-1-5" type="checkbox" name="cfrmCheckbox-1-5" title="장애현상" />
                          <label for="cfrmCheckbox-1-5" class="text-chkbox">
                            <i class="icon"></i>
                            <b>기타 [직접입력]</b>
                          </label>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div class="c-textareaform">
                    <label for="cfrmText-1-1" class="is-blind">장애현상 문의내용</label>
                    <textarea id="cfrmText-1-1" name="" class="c-textarea -h-100" placeholder="문의내용 입력" title="장애현상 문의내용을 직접 입력해주세요"></textarea>
                  </div>
                  <ul class="c-bullet-type-circle">
                    <li>사용 불가한 항목 체크 (중복 체크 가능)</li>
                  </ul>
                </b-td>
              </b-tr>
              <b-tr>
                <b-th>
                  <label class="c-label" for="cfrmInp-1-5">
                    설치 희망일자
                    <span class="is-need"><i class="is-blind">필수항목</i></span>
                  </label>
                </b-th>
                <b-td>
                  <div class="m-vue2-datepicker column-date">
                    <Date-picker v-model="time1" value-type="format" placeholder="YYYY" class="c-inpform c-size-normal"></Date-picker>
                  </div>
                </b-td>
              </b-tr>
              <b-tr>
                <b-th>
                  <label class="c-label" for="cfrmInpDate-1-1"> 현지출국일 </label>
                </b-th>
                <b-td>
                  <div class="c-inpfield column-date">
                    <!-- <div class="c-inpform-group is-err"> -->
                    <div class="c-inpform-group">
                      <!-- <div class="c-inpform is-err"> -->
                      <div class="c-inpform">
                        <input type="text" id="cfrmInpDate-1-1" name="" placeholder="YYYY" title="출국예정 년도 네자 입력" class="c-inp" />
                        <span class="text-date">년</span>
                        <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                        <!-- <p class="text-msg">오류문구 출력</p> -->
                      </div>
                      <!-- <div class="c-inpform is-err"> -->
                      <div class="c-inpform">
                        <input type="text" name="" placeholder="MM" title="출국예정 월 두자 입력" class="c-inp" />
                        <span class="text-date">월</span>
                        <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                        <!-- <p class="text-msg">오류문구 출력</p> -->
                      </div>
                      <!-- <div class="c-inpform is-err"> -->
                      <div class="c-inpform">
                        <input type="text" name="" placeholder="DD" title="출국예정 일 두자 입력" class="c-inp" />
                        <span class="text-date">일</span>
                        <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                        <!-- <p class="text-msg">오류문구 출력</p> -->
                      </div>
                      <!-- <p class="text-msg">오류문구 출력</p> -->
                    </div>
                  </div>
                </b-td>
              </b-tr>
              <b-tr>
                <b-th>
                  <label class="c-label" for="cfrmInpAddr-1-1"> 상세주소 </label>
                </b-th>
                <b-td>
                  <div class="c-inpfield column-date">
                    <!-- <div class="c-inpform-group is-err"> -->
                    <div class="c-inpform-group">
                      <!-- <div class="c-inpform is-err"> -->
                      <div class="c-inpform">
                        <input type="text" id="cfrmInpAddr-1-1" name="" placeholder="입력하세요" title="동 입력" class="c-inp" />
                        <span class="text-date">동</span>
                        <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                        <!-- <p class="text-msg">오류문구 출력</p> -->
                      </div>
                      <!-- <div class="c-inpform is-err"> -->
                      <div class="c-inpform">
                        <input type="text" name="" placeholder="입력하세요" title="층 입력" class="c-inp" />
                        <span class="text-date">층</span>
                        <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                        <!-- <p class="text-msg">오류문구 출력</p> -->
                      </div>
                      <!-- <div class="c-inpform is-err"> -->
                      <div class="c-inpform">
                        <input type="text" name="" placeholder="입력하세요" title="호 입력" class="c-inp" />
                        <span class="text-date">호</span>
                        <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                        <!-- <p class="text-msg">오류문구 출력</p> -->
                      </div>
                      <!-- <p class="text-msg">오류문구 출력</p> -->
                    </div>
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
                  <label class="c-label" for="cfrmText-2-1">
                    문의 내용
                    <span class="is-need"><i class="is-blind">필수항목</i></span>
                  </label>
                </b-th>
                <b-td>
                  <div class="c-textareaform">
                    <textarea id="cfrmText-2-1" name="" class="c-textarea -h-350" placeholder="문의내용 입력" title="텍스트 입력"></textarea>
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
        <button class="c-btn-ok">문의하기</button>
      </div>
    </div>
    <div class="code-editor">
      <textarea style="height: 200px">
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
          고객정보: 문의고객 이름, 이메일, 연락처, 문의유형, 답변 알림문자 수신, 장애현상, 설치 희망일자, 현지출국일, 상세주소, 문의제목, 문의내용, 첨부파일, 이미지 첨부 입력에 대한 표
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
                <input id="cfrmInp-1-1" type="text" name="" placeholder="10자 이내 입력" title="이름을 입력해주세요." class="c-inp" aria-describedby="error-cfrmInp-1-1" />
                <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                <p id="error-cfrmInp-1-1" class="text-msg">올바른 이름이 아닙니다.</p>
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
              <label class="c-label" for="cfrmSelect-1-4">
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
              <div class="c-table-faq-list">
                <p class="-txt-mid">추천 자주하는 질문</p>
                <ul class="faq-list">
                  <li><a href="#">[일시정지] 사용하던 U+휴대폰(모바일)을 일시정지 하려고 합니다. 어떻게 해야 하나요?</a></li>
                  <li><a href="#">[해지] 휴대폰 해지 시 가입비를 돌려받을 수 있나요?</a></li>
                  <li><a href="#">[변경] 핸드폰을 분실했는데 일시정지를 어떻게 하나요?</a></li>
                </ul>
              </div>
            </b-td>
          </b-tr>
          <b-tr>
            <b-th>
              <span class="c-span">답변 알림문자 수신</span>
            </b-th>
            <b-td>
              <div class="c-btn-check-list d-table">
                <div class="d-table-row">
                  <span class="d-table-td">
                    <span class="c-radio">
                      <input id="cfrmRadio-1-1" type="radio" name="cfrmRadio-1-1" title="답변 알림문자 수신" checked />
                      <label for="cfrmRadio-1-1" class="text-radio">
                        <i class="icon"></i>
                        <b>아니오</b>
                      </label>
                    </span>
                  </span>
                  <span class="d-table-td">
                    <span class="c-radio">
                      <input id="cfrmRadio-1-2" type="radio" name="cfrmRadio-1-1" title="답변 알림문자 수신" />
                      <label for="cfrmRadio-1-2" class="text-radio">
                        <i class="icon"></i>
                        <b>예</b>
                      </label>
                    </span>
                  </span>
                </div>
              </div>
            </b-td>
          </b-tr>
          <b-tr>
            <b-th>
              <span class="c-span">장애현상</span>
            </b-th>
            <b-td>
              <div class="c-btn-check-list d-table">
                <div class="d-table-row">
                  <span class="d-table-td">
                    <span class="c-checkbox">
                      <input id="cfrmCheckbox-1-1" type="checkbox" name="cfrmCheckbox-1-1" title="장애현상" checked />
                      <label for="cfrmCheckbox-1-1" class="text-chkbox">
                        <i class="icon"></i>
                        <b>음성수신(현지→현지)</b>
                      </label>
                    </span>
                  </span>
                  <span class="d-table-td">
                    <span class="c-checkbox">
                      <input id="cfrmCheckbox-1-2" type="checkbox" name="cfrmCheckbox-1-2" title="장애현상" />
                      <label for="cfrmCheckbox-1-2" class="text-chkbox">
                        <i class="icon"></i>
                        <b>음성수신(한국→현지)</b>
                      </label>
                    </span>
                  </span>
                  <span class="d-table-td">
                    <span class="c-checkbox">
                      <input id="cfrmCheckbox-1-3" type="checkbox" name="cfrmCheckbox-1-3" title="장애현상" />
                      <label for="cfrmCheckbox-1-3" class="text-chkbox">
                        <i class="icon"></i>
                        <b>음성발신(현지→현지)</b>
                      </label>
                    </span>
                  </span>
                </div>
                <div class="d-table-row">
                  <span class="d-table-td">
                    <span class="c-checkbox">
                      <input id="cfrmCheckbox-1-4" type="checkbox" name="cfrmCheckbox-1-4" title="장애현상" checked />
                      <label for="cfrmCheckbox-1-4" class="text-chkbox">
                        <i class="icon"></i>
                        <b>SMS수신</b>
                      </label>
                    </span>
                  </span>
                  <span class="d-table-td">
                    <span class="c-checkbox">
                      <input id="cfrmCheckbox-1-5" type="checkbox" name="cfrmCheckbox-1-5" title="장애현상" />
                      <label for="cfrmCheckbox-1-5" class="text-chkbox">
                        <i class="icon"></i>
                        <b>기타 [직접입력]</b>
                      </label>
                    </span>
                  </span>
                </div>
              </div>
              <div class="c-textareaform">
                <label for="cfrmText-1-1" class="is-blind">장애현상 문의내용</label>
                &lt;textarea id="cfrmText-1-1" name="" class="c-textarea -h-100" placeholder="문의내용 입력" title="장애현상 문의내용을 직접 입력해주세요"&gt;&lt;/textarea&gt;
              </div>
              <ul class="c-bullet-type-circle">
                <li>사용 불가한 항목 체크 (중복 체크 가능)</li>
              </ul>
            </b-td>
          </b-tr>
          <b-tr>
            <b-th>
              <label class="c-label" for="cfrmInp-1-5">
                설치 희망일자
                <span class="is-need"><i class="is-blind">필수항목</i></span>
              </label>
            </b-th>
            <b-td>
              <div class="m-vue2-datepicker column-date">
                <Date-picker v-model="time1" value-type="format" placeholder="YYYY" class="c-inpform c-size-normal"></Date-picker>
              </div>
            </b-td>
          </b-tr>
          <b-tr>
            <b-th>
              <label class="c-label" for="cfrmInpDate-1-1"> 현지출국일 </label>
            </b-th>
            <b-td>
              <div class="c-inpfield column-date">
                <!-- <div class="c-inpform-group is-err"> -->
                <div class="c-inpform-group">
                  <!-- <div class="c-inpform is-err"> -->
                  <div class="c-inpform">
                    <input type="text" id="cfrmInpDate-1-1" name="" placeholder="YYYY" title="출국예정 년도 네자 입력" class="c-inp" />
                    <span class="text-date">년</span>
                    <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                    <!-- <p class="text-msg">오류문구 출력</p> -->
                  </div>
                  <!-- <div class="c-inpform is-err"> -->
                  <div class="c-inpform">
                    <input type="text" name="" placeholder="MM" title="출국예정 월 두자 입력" class="c-inp" />
                    <span class="text-date">월</span>
                    <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                    <!-- <p class="text-msg">오류문구 출력</p> -->
                  </div>
                  <!-- <div class="c-inpform is-err"> -->
                  <div class="c-inpform">
                    <input type="text" name="" placeholder="DD" title="출국예정 일 두자 입력" class="c-inp" />
                    <span class="text-date">일</span>
                    <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                    <!-- <p class="text-msg">오류문구 출력</p> -->
                  </div>
                  <!-- <p class="text-msg">오류문구 출력</p> -->
                </div>
              </div>
            </b-td>
          </b-tr>
          <b-tr>
            <b-th>
              <label class="c-label" for="cfrmInpAddr-1-1"> 상세주소 </label>
            </b-th>
            <b-td>
              <div class="c-inpfield column-date">
                <!-- <div class="c-inpform-group is-err"> -->
                <div class="c-inpform-group">
                  <!-- <div class="c-inpform is-err"> -->
                  <div class="c-inpform">
                    <input type="text" id="cfrmInpAddr-1-1" name="" placeholder="입력하세요" title="동 입력" class="c-inp" />
                    <span class="text-date">동</span>
                    <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                    <!-- <p class="text-msg">오류문구 출력</p> -->
                  </div>
                  <!-- <div class="c-inpform is-err"> -->
                  <div class="c-inpform">
                    <input type="text" name="" placeholder="입력하세요" title="층 입력" class="c-inp" />
                    <span class="text-date">층</span>
                    <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                    <!-- <p class="text-msg">오류문구 출력</p> -->
                  </div>
                  <!-- <div class="c-inpform is-err"> -->
                  <div class="c-inpform">
                    <input type="text" name="" placeholder="입력하세요" title="호 입력" class="c-inp" />
                    <span class="text-date">호</span>
                    <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                    <!-- <p class="text-msg">오류문구 출력</p> -->
                  </div>
                  <!-- <p class="text-msg">오류문구 출력</p> -->
                </div>
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
              <label class="c-label" for="cfrmText-2-1">
                문의 내용
                <span class="is-need"><i class="is-blind">필수항목</i></span>
              </label>
            </b-th>
            <b-td>
              <div class="c-textareaform">
                &lt;textarea id="cfrmText-2-1" name="" class="c-textarea -h-350" placeholder="문의내용 입력" title="텍스트 입력"&gt;&lt;/textarea&gt;
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
</div>
      </textarea>
    </div>
    <!-- //고객정보 -->
    <!-- 접수자정보 -->
    <div class="c-page-section">
      <div class="info-h-group">
        <h2 class="h3">접수자 정보</h2>
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
              접수자 정보: 접수자 정보 연락처, 주소, 상호명, 건물명 입력에 대한 표
            </caption>
            <colgroup>
              <col style="width: 200px" />
              <col style="width: auto" />
            </colgroup>
            <b-tbody>
              <b-tr>
                <b-th>
                  <label class="c-label" for="cfrmInp-2-1">
                    문의고객 연락처
                    <span class="is-need"><i class="is-blind">필수항목</i></span>
                  </label>
                </b-th>
                <b-td>
                  <div class="c-inpform-group column-telnumber">
                    <div class="c-selform">
                      <span class="is-blind">통신사 번호</span>
                      <select id="cfrmInp-2-1" name="" class="c-select" title="연락처 통신사 번호 선택">
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
                  <label class="c-label" for="cfrmInp-2-2">
                    주소
                    <span class="is-need"><i class="is-blind">필수항목</i></span>
                  </label>
                </b-th>
                <b-td>
                  <div class="c-inpform column-address">
                    <input id="cfrmInp-2-2" type="text" name="" title="주소를 입력해주세요." class="c-inp" />
                    <button class="c-btn-gray-round-1 btn-find-address">주소찾기</button>
                  </div>
                  <div class="c-inpform">
                    <input type="text" name="" title="상세 주소를 입력해주세요." class="c-inp" />
                    <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                  </div>
                </b-td>
              </b-tr>
              <b-tr>
                <b-th>
                  <label class="c-label" for="cfrmInp-2-3">
                    상호명
                    <span class="is-need"><i class="is-blind">필수항목</i></span>
                  </label>
                </b-th>
                <b-td>
                  <!-- <div class="c-inpform is-err"> -->
                  <div class="c-inpform">
                    <input id="cfrmInp-2-3" type="text" name="" title="상호명을 입력해주세요." class="c-inp" />
                    <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                    <!-- <p id="error-cfrmInp-1-1" class="text-msg">올바른 이름이 아닙니다.</p> -->
                  </div>
                </b-td>
              </b-tr>
              <b-tr>
                <b-th>
                  <label class="c-label" for="cfrmInp-2-4">
                    건물명
                    <span class="is-need"><i class="is-blind">필수항목</i></span>
                  </label>
                </b-th>
                <b-td>
                  <div class="c-inpform">
                    <input id="cfrmInp-2-4" type="text" name="" title="건물명을 입력해주세요." class="c-inp" />
                    <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                  </div>
                </b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
        </div>
      </div>
    </div>
    <div class="code-editor">
      <textarea style="height: 200px">
<div class="c-page-section">
  <div class="info-h-group">
    <h2 class="h3">접수자 정보</h2>
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
          접수자 정보: 접수자 정보 연락처, 주소, 상호명, 건물명 입력에 대한 표
        </caption>
        <colgroup>
          <col style="width: 200px" />
          <col style="width: auto" />
        </colgroup>
        <b-tbody>
          <b-tr>
            <b-th>
              <label class="c-label" for="cfrmInp-2-1">
                문의고객 연락처
                <span class="is-need"><i class="is-blind">필수항목</i></span>
              </label>
            </b-th>
            <b-td>
              <div class="c-inpform-group column-telnumber">
                <div class="c-selform">
                  <span class="is-blind">통신사 번호</span>
                  <select id="cfrmInp-2-1" name="" class="c-select" title="연락처 통신사 번호 선택">
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
              <label class="c-label" for="cfrmInp-2-2">
                주소
                <span class="is-need"><i class="is-blind">필수항목</i></span>
              </label>
            </b-th>
            <b-td>
              <div class="c-inpform column-address">
                <input id="cfrmInp-2-2" type="text" name="" title="주소를 입력해주세요." class="c-inp" />
                <button class="c-btn-gray-round-1 btn-find-address">주소찾기</button>
              </div>
              <div class="c-inpform">
                <input type="text" name="" title="상세 주소를 입력해주세요." class="c-inp" />
                <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
              </div>
            </b-td>
          </b-tr>
          <b-tr>
            <b-th>
              <label class="c-label" for="cfrmInp-2-3">
                상호명
                <span class="is-need"><i class="is-blind">필수항목</i></span>
              </label>
            </b-th>
            <b-td>
              <!-- <div class="c-inpform is-err"> -->
              <div class="c-inpform">
                <input id="cfrmInp-2-3" type="text" name="" title="상호명을 입력해주세요." class="c-inp" />
                <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                <!-- <p id="error-cfrmInp-1-1" class="text-msg">올바른 이름이 아닙니다.</p> -->
              </div>
            </b-td>
          </b-tr>
          <b-tr>
            <b-th>
              <label class="c-label" for="cfrmInp-2-4">
                건물명
                <span class="is-need"><i class="is-blind">필수항목</i></span>
              </label>
            </b-th>
            <b-td>
              <div class="c-inpform">
                <input id="cfrmInp-2-4" type="text" name="" title="건물명을 입력해주세요." class="c-inp" />
                <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
              </div>
            </b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
    </div>
  </div>
</div>
      </textarea>
    </div>
    <!-- //접수자정보 -->
    <!-- 고객정보 및 입력 -->
    <div class="c-page-section">
      <div class="info-h-group">
        <h2 class="h3">고객정보</h2>
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
              고객정보: 이름, 휴대폰번호, 모델명 정보에 대한 표
            </caption>
            <colgroup>
              <col style="width: 200px" />
              <col style="width: auto" />
            </colgroup>
            <b-tbody>
              <b-tr>
                <b-th>이름</b-th>
                <b-td>홍길동</b-td>
              </b-tr>
              <b-tr>
                <b-th>휴대폰번호</b-th>
                <b-td>010 - 1223 - 4567</b-td>
              </b-tr>
              <b-tr>
                <b-th>모델명</b-th>
                <b-td>A2145-77</b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
          <div class="line-split">
            <b-table-simple class="c-table-row c-all-white">
              <caption>
                고객정보: 이메일, 연락처, 문의유형 입력에 대한 표
              </caption>
              <colgroup>
                <col style="width: 200px" />
                <col style="width: auto" />
              </colgroup>
              <b-tbody>
                <b-tr>
                  <b-th>
                    <label class="c-label" for="cfrmInp-3-1">
                      이메일
                      <span class="is-need"><i class="is-blind">필수항목</i></span>
                    </label>
                  </b-th>
                  <b-td>
                    <div class="c-inpform-group column-email">
                      <div class="c-inpform">
                        <span class="is-blind">이메일 아이디</span>
                        <input id="cfrmInp-3-1" type="text" name="" placeholder="이메일 아이디" title="이메일 아이디 입력" class="c-inp" />
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
                    <label class="c-label" for="cfrmInp-3-2">
                      문의고객 연락처
                      <span class="is-need"><i class="is-blind">필수항목</i></span>
                    </label>
                  </b-th>
                  <b-td>
                    <div class="c-inpform-group column-telnumber">
                      <div class="c-selform">
                        <span class="is-blind">통신사 번호</span>
                        <select id="cfrmInp-3-2" name="" class="c-select" title="연락처 통신사 번호 선택">
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
                    <label class="c-label" for="cfrmSelect-1-4">
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
              </b-tbody>
            </b-table-simple>
          </div>
        </div>
      </div>
    </div>
    <div class="code-editor">
      <textarea style="height: 200px">
<div class="c-page-section">
  <div class="info-h-group">
    <h2 class="h3">고객정보</h2>
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
          고객정보: 이름, 휴대폰번호, 모델명 정보에 대한 표
        </caption>
        <colgroup>
          <col style="width: 200px" />
          <col style="width: auto" />
        </colgroup>
        <b-tbody>
          <b-tr>
            <b-th>이름</b-th>
            <b-td>홍길동</b-td>
          </b-tr>
          <b-tr>
            <b-th>휴대폰번호</b-th>
            <b-td>010 - 1223 - 4567</b-td>
          </b-tr>
          <b-tr>
            <b-th>모델명</b-th>
            <b-td>A2145-77</b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
      <div class="line-split">
        <b-table-simple class="c-table-row c-all-white">
          <caption>
            고객정보: 이메일, 연락처, 문의유형 입력에 대한 표
          </caption>
          <colgroup>
            <col style="width: 200px" />
            <col style="width: auto" />
          </colgroup>
          <b-tbody>
            <b-tr>
              <b-th>
                <label class="c-label" for="cfrmInp-3-1">
                  이메일
                  <span class="is-need"><i class="is-blind">필수항목</i></span>
                </label>
              </b-th>
              <b-td>
                <div class="c-inpform-group column-email">
                  <div class="c-inpform">
                    <span class="is-blind">이메일 아이디</span>
                    <input id="cfrmInp-3-1" type="text" name="" placeholder="이메일 아이디" title="이메일 아이디 입력" class="c-inp" />
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
                <label class="c-label" for="cfrmInp-3-2">
                  문의고객 연락처
                  <span class="is-need"><i class="is-blind">필수항목</i></span>
                </label>
              </b-th>
              <b-td>
                <div class="c-inpform-group column-telnumber">
                  <div class="c-selform">
                    <span class="is-blind">통신사 번호</span>
                    <select id="cfrmInp-3-2" name="" class="c-select" title="연락처 통신사 번호 선택">
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
                <label class="c-label" for="cfrmSelect-1-4">
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
          </b-tbody>
        </b-table-simple>
      </div>
    </div>
  </div>
</div>
      </textarea>
    </div>
    <!-- //고객정보 및 입력 -->
    <!-- 설치변경 신청 내역 데이터 -->
    <div class="c-page-section">
      <div class="info-h-group">
        <h2 class="h3">설치변경 신청 내역</h2>
      </div>
      <div class="bd-tb-wrap">
        <div class="row c-table">
          <b-table-simple class="c-table-row c-all-white">
            <caption>
              설치변경 신청 내역: 제품, 증상, 변경 설치 장소, 댁내 대기자 이름, 연락 가능한 전화번호, 요청사항, 설치 희망일자 정보에 대한 표
            </caption>
            <colgroup>
              <col style="width: 200px" />
              <col style="width: auto" />
            </colgroup>
            <b-tbody>
              <b-tr>
                <b-th>제품</b-th>
                <b-td>와이파이 기본_광랜안심_주택FTH</b-td>
              </b-tr>
              <b-tr>
                <b-th>증상</b-th>
                <b-td>인터넷속도느림</b-td>
              </b-tr>
              <b-tr>
                <b-th>변경 설치 장소</b-th>
                <b-td>서울 강남구 논현로 **** ******</b-td>
              </b-tr>
              <b-tr>
                <b-th>댁내 대기자 이름</b-th>
                <b-td>기세겸</b-td>
              </b-tr>
              <b-tr>
                <b-th>연락 가능한 전화번호</b-th>
                <b-td>010 - 1234 - 4567</b-td>
              </b-tr>
              <b-tr>
                <b-th>요청사항</b-th>
                <b-td>인터넷 속도가 느려져서 변경 신청합니다.</b-td>
              </b-tr>
              <b-tr>
                <b-th>설치 희망일자</b-th>
                <b-td>2020.05.01<span class="-ml-10">09:00</span></b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
        </div>
      </div>
    </div>
    <div class="code-editor">
      <textarea style="height: 200px">
<div class="c-page-section">
  <div class="info-h-group">
    <h2 class="h3">설치변경 신청 내역</h2>
  </div>
  <div class="bd-tb-wrap">
    <div class="row c-table">
      <b-table-simple class="c-table-row c-all-white">
        <caption>
          설치변경 신청 내역: 제품, 증상, 변경 설치 장소, 댁내 대기자 이름, 연락 가능한 전화번호, 요청사항, 설치 희망일자 정보에 대한 표
        </caption>
        <colgroup>
          <col style="width: 200px" />
          <col style="width: auto" />
        </colgroup>
        <b-tbody>
          <b-tr>
            <b-th>제품</b-th>
            <b-td>와이파이 기본_광랜안심_주택FTH</b-td>
          </b-tr>
          <b-tr>
            <b-th>증상</b-th>
            <b-td>인터넷속도느림</b-td>
          </b-tr>
          <b-tr>
            <b-th>변경 설치 장소</b-th>
            <b-td>서울 강남구 논현로 **** ******</b-td>
          </b-tr>
          <b-tr>
            <b-th>댁내 대기자 이름</b-th>
            <b-td>기세겸</b-td>
          </b-tr>
          <b-tr>
            <b-th>연락 가능한 전화번호</b-th>
            <b-td>010 - 1234 - 4567</b-td>
          </b-tr>
          <b-tr>
            <b-th>요청사항</b-th>
            <b-td>인터넷 속도가 느려져서 변경 신청합니다.</b-td>
          </b-tr>
          <b-tr>
            <b-th>설치 희망일자</b-th>
            <b-td>2020.05.01<span class="-ml-10">09:00</span></b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
    </div>
  </div>
</div>        
      </textarea>
    </div>
    <!-- //설치변경 신청 내역 데이터 -->
  </section>
</template>

<script>
export default {
  name: 'FormType',
  layout: 'guide',
  data() {
    return {
      title: 'Form Type',
      time1: null,
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>

<style lang="scss" scoped></style>
