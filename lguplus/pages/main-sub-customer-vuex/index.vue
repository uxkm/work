<template>
  <div class="p-main-sub-customer">
    <div class="submain-section">
      <div class="toparea-contents">
        <div class="toparea-contents-bg">
          <div class="sub-page-position-wrap">
            <div class="sub-page-position">
              <ul class="sub-position-list">
                <li><a href="#">개인</a></li>
                <li><a href="#">고객지원</a></li>
                <li><a href="#" class="arrow-expand">온라인문의</a></li>
                <li><a href="#" class="arrow-expand">1:1문의</a></li>
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
          <!-- 게시판 -->
          <Board-list ref="boardList" />
          <!-- // 게시판 -->

          <!-- 문의하기 -->
          <Board-write @boardWriteEvt="boardListReload" />
          <!-- //문의하기 -->
        </div>
      </div>
    </div>
    <!-- //.submain-section  -->
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import BoardList from '~/components/main-sub-customer-vuex/Board-list';
import BoardWrite from '~/components/main-sub-customer-vuex/Board-write';
// import * as API_TEST from '~/js/api/apiTest';

/**
 * 사용할 store 폴더 지정.
 */
const pageStoreName = 'main-sub-customer-vuex';
const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers(pageStoreName);

export default {
  name: 'MainSubCustomerVuex',
  components: {
    BoardList,
    BoardWrite,
  },
  mixins: [],
  layout: 'l-sub-main',
  middleware: [],
  /**
   * asyncData
   * { params, store, error, etc }
   */
  asyncData({ store }) {
    console.info('[page-asyncData]');
    store.dispatch(`${pageStoreName}/ASYNC_DATA_PAGE_INIT`);
  },
  data() {
    return {};
  },
  /**
   * fetch
   */
  fetch() {
    console.info('[page-fetch]');
    this.FETCH_PAGE_INIT();
  },
  computed: {
    ...mapState(['boardListInfo', 'boardWriteInfo']),
    ...mapGetters([]),
  },
  watch: {},
  // --------------------------------------------------------------[lifecycle]
  mounted() {
    console.info('[page-mounted]');
  },
  beforeDestroy() {
    console.info('[page-beforeDestroy]');
  },
  methods: {
    // --------------------------------------------------------------[init]
    mountedInit() {},
    // --------------------------------------------------------------[business]
    boardListReload() {
      console.info('[this.$refs.boardList]');
      this.$refs.boardList.reload();
    },
    // --------------------------------------------------------------[util]
    // --------------------------------------------------------------[event]
    ...mapMutations([]),
    ...mapActions(['FETCH_PAGE_INIT']),
  },
};
</script>

<style lang="scss" scoped></style>
