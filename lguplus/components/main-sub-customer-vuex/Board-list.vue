<template>
  <div class="c-page-section">
    <h2 class="h3">저장된 내 위치</h2>
    <div v-if="$fetchState.pending" class="is-loading">로딩중...</div>
    <div v-else class="row c-table">
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
          <b-tr v-for="listItem of boardListInfo.list" :key="listItem.id">
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

      <b-pagination
        v-model="curPage"
        :total-rows="boardListInfo.totRow"
        :per-page="boardListInfo.perPage"
        align="center"
        class="m-bv-pagination"
        style="width: 100%"
        :label-first-page="ARIA_BV_PAGINATION.LABEL_FIRST_PAGE"
        :label-prev-page="ARIA_BV_PAGINATION.LABEL_PREV_PAGE"
        :label-next-page="ARIA_BV_PAGINATION.LABEL_NEXT_PAGE"
        :label-last-page="ARIA_BV_PAGINATION.LABEL_LAST_PAGE"
        :label-page="ARIA_BV_PAGINATION.LABEL_PAGE"
        :aria-label="ARIA_BV_PAGINATION.ARIA_LABEL"
        @page-click="onPageClick"
      >
      </b-pagination>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

// import Vue2Filters from 'vue2-filters';
import { ARIA_BV_PAGINATION } from '~/js/constants/aria';

/**
 * 사용할 store 폴더 지정.
 */
const pageStoreName = 'main-sub-customer-vuex';
const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers(pageStoreName);

export default {
  name: 'BoardListVuex',
  components: {},
  mixins: [],
  props: [],
  data() {
    return {
      ARIA_BV_PAGINATION,
      curPage: 1,
    };
  },
  async fetch() {
    console.info('[fetch]');
    const start = 0;
    const limit = this.boardListInfo.limit;
    await this.BOARD_LIST_ACTION({ start, limit });
  },
  computed: {
    ...mapState(['boardListInfo']),
    ...mapGetters([]),
  },
  watch: {},
  mounted() {
    console.info('[mounted]');
  },
  beforeDestroy() {
    console.info('[beforeDestroy]');
  },
  methods: {
    ...mapMutations([]),
    ...mapActions(['BOARD_LIST_ACTION']),
    // --------------------------------------------------------------[init]
    mountedInit() {},
    reload() {
      console.info('[reload]');
      this.$fetch();
    },
    // --------------------------------------------------------------[business]
    // --------------------------------------------------------------[util]
    // --------------------------------------------------------------[event]
    onItemClick($id) {
      console.info('[onItemClick]', $id);
      this.$router.push({ name: 'main-sub-customer-vuex-id', params: { id: $id } });
    },
    async onPageClick($bvEvent, $page) {
      console.info('[onPageClick]', $bvEvent, $page);
      const start = $page - 1;
      const limit = this.boardListInfo.limit;
      await this.BOARD_LIST_ACTION({ start, limit });
    },
  },
};
</script>

<style lang="scss" scoped></style>
