<template>
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
          <b-tr v-for="listItem of boardInfo.list" :key="listItem.id">
            <b-td class="c-cell-digit">{{ listItem.id }}</b-td>
            <b-td class="c-cell-part">{{ listItem.division }}</b-td>
            <b-td class="c-cell-type">{{ listItem.enType }}</b-td>
            <b-td class="c-cell-subject">
              <a :href="$config.baseURL + $route.path + `/${listItem.id}`" @click.prevent="onItemClick(listItem.id)">{{ listItem.enContent }}</a></b-td
            >
            <b-td class="c-cell-progress">{{ listItem.processState }}</b-td>
            <b-td class="c-cell-date">{{ $moment(listItem.writeDate).format('YYYY.MM.DD') }}</b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>

      <b-pagination v-model="boardInfo.curPage" :total-rows="boardInfo.totRow" :per-page="boardInfo.perPage" align="center" class="m-bv-pagination" style="width: 100%" @page-click="onPageClick">
      </b-pagination>
    </div>
  </div>
</template>

<script>
import { ARIA_BV_PAGINATION } from '~/js/constants/aria';
import * as API_TEST from '~/js/api/apiTest';

export default {
  name: 'BoardList',
  components: {},
  mixins: [],
  props: ['testInfo'],
  data() {
    return {
      ARIA_BV_PAGINATION,
      boardInfo: {
        totRow: 0,
        curPage: 1,
        perPage: 5,
        start: 0,
        limit: 5,
        list: null,
      },
    };
  },
  async fetch() {
    console.info('[component-fetch]');
    const resCnt = await API_TEST.GET_TOTAL_CNT(this);
    const resBoardList = await API_TEST.GET_BOARD_LIST(this, {
      start: this.boardInfo.start,
      limit: this.boardInfo.limit,
    });
    // console.info(resCnt);
    // console.info(resBoardList);
    this.boardInfo.totRow = resCnt.totalCnt;
    this.boardInfo.list = resBoardList;
  },
  computed: {
    // ...mapState([]),
    // ...mapGetters([]),
  },
  watch: {},
  mounted() {
    console.info('[component-mounted]', this.testInfo);
  },
  beforeDestroy() {
    console.info('[beforeDestroy]');
  },
  methods: {
    // ...mapMutations([]),
    // ...mapActions([]),
    reload() {
      console.info('[reload]');
      this.$fetch();
    },

    onItemClick($id) {
      console.info('[onItemClick]', $id);
      this.$router.push({ name: 'main-sub-customer-id', params: { id: $id } });
    },
    onPageClick($bvEvent, $page) {
      console.info('[onPageClick]', $bvEvent, $page);
      this.boardInfo.start = $page - 1;
      this.$fetch();
    },
  },
};
</script>

<style lang="scss" scoped></style>
