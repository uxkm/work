<template>
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
    <!-- vee 유효성 체크 -->
    <ValidationObserver ref="observer" @submit.prevent="onSubmit()" tag="form" enctype="multipart/form-data">
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
                  <ValidationProvider name="이름" v-slot="{ errors, classes }" rules="required|max:10" :mode="veeMode" slim>
                    <div class="c-inpform" :class="classes">
                      <input id="cfrmInp-1-1" v-model="formInfo.name" placeholder="10자 이내 입력" title="이름을 입력해주세요." class="c-inp" />
                      <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                      <p class="text-msg">{{ errors[0] }}</p>
                    </div>
                  </ValidationProvider>
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
                    <ValidationProvider name="이메일 아이디" v-slot="{ errors, classes }" rules="required" :mode="veeMode" slim>
                      <div class="c-inpform" :class="classes">
                        <span class="is-blind">이메일 아이디</span>
                        <input id="cfrmInp-1-2" v-model="formInfo.email_0" type="text" placeholder="이메일 아이디" title="이메일 아이디 입력" class="c-inp" />
                        <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                        <p class="text-msg">{{ errors[0] }}</p>
                      </div>
                    </ValidationProvider>

                    <div class="text-dot">@</div>

                    <ValidationProvider name="이메일 주소" v-slot="{ errors, classes }" rules="required" :mode="veeMode" slim>
                      <div class="c-inpform" :class="classes">
                        <span class="is-blind">이메일 주소</span>
                        <input v-model="formInfo.email_1" type="text" placeholder="이메일 주소" title="이메일 주소 입력" class="c-inp" @input="onEmailInputChange($event)" />
                        <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                        <p class="text-msg">{{ errors[0] }}</p>
                      </div>
                    </ValidationProvider>

                    <div class="c-selform">
                      <span class="is-blind">이메일 주소 선택</span>
                      <select v-model="formInfo.email_2.selected" class="c-select" title="이메일 주소 직접 선택" @change="onEmailSelectedChange($event)">
                        <!-- <option value="" selected>직접입력</option> -->
                        <option v-for="emSelItem in formInfo.email_2.selectInfo" :key="emSelItem.id" :value="emSelItem.val">{{ emSelItem.name }}</option>
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
                      <select id="cfrmInp-1-3" v-model="formInfo.phone_0.selected" class="c-select" title="연락처 통신사 번호 선택">
                        <option v-for="(phSelItem, phSelItemIdx) in formInfo.phone_0.selectInfo" :key="phSelItemIdx" :value="phSelItem">{{ phSelItem }}</option>
                        <!-- <option value="011">011</option>
                                  <option value="016">016</option>
                                  <option value="017">017</option>
                                  <option value="018">018</option>
                                  <option value="019">019</option> -->
                      </select>
                    </div>
                    <ValidationProvider name="전화번호" v-slot="{ errors, classes }" :rules="{ required: 'required', regex: /([0-9]{3,4})-?([0-9]{4})$/ }" :mode="veeMode" slim>
                      <div class="c-inpform" :class="classes">
                        <span class="is-blind">연락처 번호</span>
                        <input v-model="formInfo.phone_1" type="text" name="" placeholder="" title="연락처 나머지 8자리 입력" class="c-inp" />
                        <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                        <p class="text-msg">{{ errors[0] }}</p>
                      </div>
                    </ValidationProvider>
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
                  <ValidationProvider name="문의유형" v-slot="{ errors, classes }" rules="required" :mode="veeMode" slim>
                    <div class="c-selform c-dropbox" :class="classes">
                      <select id="cfrmSelect-1-4" v-model="formInfo.type.selected" class="c-select" title="문의 유형 선택">
                        <option value="" selected>선택</option>
                        <option v-for="typeItem in formInfo.type.selectInfo" :key="typeItem.id" :value="typeItem.val">{{ typeItem.name }}</option>
                      </select>
                      <p class="text-msg">{{ errors[0] }}</p>
                    </div>
                  </ValidationProvider>
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
                  <ValidationProvider name="제목" v-slot="{ errors, classes }" rules="required" :mode="veeMode" slim>
                    <div class="c-inpform" :class="classes">
                      <input id="cfrmInp-1-5" v-model="formInfo.title" type="text" placeholder="제목 입력" title="문의 제목을 입력해주세요." class="c-inp" />
                      <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                      <p class="text-msg">{{ errors[0] }}</p>
                    </div>
                  </ValidationProvider>
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
                  <ValidationProvider name="내용" v-slot="{ errors, classes }" rules="required" :mode="veeMode" slim>
                    <div class="c-textareaform" :class="classes">
                      <textarea id="cfrmText-1-1" v-model="formInfo.content" name="" class="c-textarea -h-350" placeholder="문의내용 입력" title="텍스트 입력"></textarea>
                      <p class="text-msg">{{ errors[0] }}</p>
                    </div>
                  </ValidationProvider>
                </b-td>
              </b-tr>
              <b-tr>
                <b-th>
                  <label class="c-label" for="cfrmInp-1-7"> 첨부파일 </label>
                </b-th>
                <b-td>
                  <ValidationProvider ref="provider" v-slot="{ errors, classes }" :mode="veeMode" rules="ext:xlsx,xls" slim>
                    <div class="c-inpform-group column-file" tabindex="0" :class="classes">
                      <div class="inp-file-text"><span>파일선택</span></div>
                      <label class="c-label">
                        <input type="file" placeholder="파일첨부" title="파일첨부" class="c-inp" @change="handleFileChange" multiple />
                        <span role="button" class="c-btn-gray-round-1 c-file-find">찾아보기</span>
                      </label>

                      <!-- <div class="c-btngroup">
                        <button class="c-btn-gray-round-1 c-btn-add">파일추가</button>
                        <button class="c-btn-gray-round-1 c-btn-del">파일삭제</button>
                      </div> -->
                      <p class="text-msg">{{ errors[0] }}</p>
                    </div>
                  </ValidationProvider>
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
                        <!-- <b-tr>
                                    <b-td class="c-cell-filename">첨부된 파일 샘플.xls</b-td>
                                    <b-td class="c-cell-size"> 14.02MB </b-td>
                                    <b-td class="c-cell-fileDel">
                                      <button class="c-btn-gray-round-1">파일삭제</button>
                                    </b-td>
                                  </b-tr> -->
                        <b-tr v-for="fileItem in formInfo.file" :key="fileItem.name">
                          <b-td class="c-cell-filename">{{ fileItem.name }}</b-td>
                          <b-td class="c-cell-size">{{ fileItem.size | bytes }}</b-td>
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
        <!-- <button class="c-btn-ok" @click="$refs['my-modal2'].show()">문의하기</button> -->
        <button type="submit" class="c-btn-ok">문의하기</button>
      </div>
    </ValidationObserver>
    <!-- // vee 유효성 체크 -->
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
      <template #modal-footer="">
        <div class="c-btn-group">
          <!-- <button class="c-btn-cancel c-sm" @click="cancel()">취소하기</button> -->
          <button class="c-btn-ok c-sm" @click="onModalOkClick">확인하기</button>
        </div>
      </template>
    </b-modal>
    <!-- //경고창 -->
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import * as API_TEST from '~/js/api/apiTest';
// import { createNamespacedHelpers } from 'vuex';
// const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('sampleStore');
export default {
  name: 'BoardWrite',
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      totCnt: null,
      veeMode: 'passive',
      formInfo: {
        name: null,
        email_0: null,
        email_1: null,
        email_2: {
          selected: '',
          selectInfo: [
            {
              id: 0,
              name: '직접입력',
              val: '',
            },
            {
              id: 1,
              name: 'naver.com',
              val: 'naver.com',
            },
            {
              id: 2,
              name: 'gmail.com',
              val: 'gmail.com',
            },
            {
              id: 3,
              name: 'nate.com',
              val: 'nate.com',
            },
            {
              id: 4,
              name: 'daum.net',
              val: 'daum.net',
            },
          ],
        },
        phone_0: {
          selected: '010',
          selectInfo: ['010', '011', '016', '017', '018', '019'],
        },
        phone_1: null,
        type: {
          selected: '',
          selectInfo: [
            {
              id: 0,
              name: 'AS문의',
              val: 'AS문의',
            },
            {
              id: 1,
              name: '요금제문의',
              val: '요금제문의',
            },
            {
              id: 2,
              name: '기타',
              val: '기타',
            },
          ],
        },
        title: null,
        content: null,
        file: null,
      },
    };
  },
  async fetch() {
    console.info('[component-fetch]');
    const res = await API_TEST.GET_TOTAL_CNT(this);
    this.totCnt = res.totalCnt;
  },
  computed: {
    // ...mapState([]),
    // ...mapGetters([]),
  },
  watch: {},
  mounted() {
    console.info('[component-mounted]');
  },
  beforeDestroy() {
    console.info('[beforeDestroy]');
  },
  methods: {
    // ...mapMutations([]),
    // ...mapActions([]),
    // --------------------------------------------------------------[init]
    dataInit() {
      this.veeMode = 'passive';
      this.formInfo = {
        name: null,
        email_0: null,
        email_1: null,
        email_2: {
          selected: '',
          selectInfo: [
            {
              id: 0,
              name: '직접입력',
              val: '',
            },
            {
              id: 1,
              name: 'naver.com',
              val: 'naver.com',
            },
            {
              id: 2,
              name: 'gmail.com',
              val: 'gmail.com',
            },
            {
              id: 3,
              name: 'nate.com',
              val: 'nate.com',
            },
            {
              id: 4,
              name: 'daum.net',
              val: 'daum.net',
            },
          ],
        },
        phone_0: {
          selected: '010',
          selectInfo: ['010', '011', '016', '017', '018', '019'],
        },
        phone_1: null,
        type: {
          selected: '',
          selectInfo: [
            {
              id: 0,
              name: 'AS문의',
              val: 'AS문의',
            },
            {
              id: 1,
              name: '요금제문의',
              val: '요금제문의',
            },
            {
              id: 2,
              name: '기타',
              val: '기타',
            },
          ],
        },
        title: null,
        content: null,
        file: null,
      };
    },
    // --------------------------------------------------------------[business]
    handleFileChange({ target: { files } }) {
      console.info('[handleFileChange]', files);
      const promiseInfo = [];

      _.forEach(files, (fileItem) => {
        console.info('[fileItem]', fileItem);
        const promiseItem = this.$refs.provider.validate(fileItem);
        console.info('[promiseItem]', promiseItem);
        promiseInfo.push(promiseItem);
      });

      Promise.all(promiseInfo).then((values) => {
        console.info('[Promise.all]', values);
        const validInfo = _.map(values, (o) => {
          return o.valid;
        });
        console.info('validInfo', validInfo);
        console.info('every', _.every(validInfo));
        const isValid = _.every(validInfo);
        if (isValid) {
          this.formInfo.file = files;
          console.info('files', files);
        }
      });

      // console.info('[validInfo]', validInfo);
      // const { valid } = await this.$refs.provider.validate(files[0]);
      // console.info('aaattt12121');

      // if (validInfo) {
      //   // TODO: Upload the file
      //   console.log('Uploaded the file...');
      // }
    },
    // --------------------------------------------------------------[util]
    /**
     * 에러 포커스
     */
    errorFocus() {
      $(this.$refs.observer.$el).find('.is-invalid').eq(0).find('input, select, textarea').focus();
    },
    // --------------------------------------------------------------[event]

    onEmailInputChange(e) {
      this.formInfo.email_2.selected = '';
    },
    onEmailSelectedChange(e) {
      console.log(e.target.value);
      this.formInfo.email_1 = e.target.value;
    },
    async onSubmit() {
      const isValid = await this.$refs.observer.validate();
      console.info('[onSubmit > isValid]', isValid);

      if (!isValid) {
        this.veeMode = 'aggressive';
        this.errorFocus();
      } else {
        const dataObj = {
          custNm: this.formInfo.name,
          email: `${this.formInfo.email_0}@${this.formInfo.email_1}`,
          custNumber: `${this.formInfo.phone_0.selected}${this.formInfo.phone_1}`,
          enType: this.formInfo.type.selected,
          enTitle: this.formInfo.title,
          enContent: this.formInfo.content,
          fileNm: 'test.png',
          processState: '처리전',
          writeDate: '2021-03-20',
          division: 'PC',

          answerContent: '처리완료입니다',
          answerDate: this.$moment().format('YYYY-MM-DD'),
          answerWriter: '김말숙',
        };
        console.info('[dataObj]', dataObj);

        await API_TEST.POST_BOARD_CONTENT(this, dataObj);
        await API_TEST.POST_TOTAL_CNT(this, ++this.totCnt);

        this.dataInit();
        this.$refs.observer.reset(); // 유효성 상태 재설정
        this.$refs['my-modal2'].show();
      }
      // sending to API...

      // reset the values ...
      // this.first = '';
      // this.second = '';

      // You should call it on the next frame
      // requestAnimationFrame(() => {
      //   this.$refs.observer.reset();
      // });
    },
    onModalOkClick() {
      this.$refs['my-modal2'].hide();
      this.$emit('boardWriteEvt');
    },
  },
};
</script>

<style lang="scss" scoped></style>
