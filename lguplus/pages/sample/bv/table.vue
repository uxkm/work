<template>
  <div>
    <h1>테이블</h1>
    <div>
      <h2>기본 테이블</h2>
      <div class="container">
        <div class="row">
          <b-table class="m-bv-table" bordered :items="baseTableInfo.items" :fields="baseTableInfo.fields"></b-table>
        </div>
      </div>
    </div>
    <div>
      <h2>헤더고정 테이블</h2>
      <div class="container">
        <div class="row">
          <b-table class="m-bv-table" style="width: 100%" sticky-header bordered :items="stickyHeaderTableInfo.items" :fields="stickyHeaderTableInfo.fields"></b-table>
        </div>
      </div>
    </div>
    <div>
      <h2>헤더고정 테이블 + filter + 페이징</h2>

      <div class="container">
        <div class="row" style="margin-top: 20px">
          <b-form-input id="filter-input" v-model="stickyHeaderTableFilterInfo.filter" type="search" placeholder="필터"></b-form-input>
        </div>

        <div class="row" style="margin-top: 20px">
          <b-table
            class="m-bv-table"
            :per-page="stickyHeaderTableFilterInfo.perPage"
            :current-page="stickyHeaderTableFilterInfo.currentPage"
            :filter="stickyHeaderTableFilterInfo.filter"
            bordered
            :items="stickyHeaderTableFilterInfo.items"
            :fields="stickyHeaderTableFilterInfo.fields"
            @filtered="onFiltered"
          >
            <template #table-colgroup>
              <col :style="{ width: '20%' }" />
              <col :style="{ width: '40%' }" />
              <col :style="{ width: '20%' }" />
            </template>
          </b-table>
        </div>
        <div class="row">
          <b-pagination
            v-model="stickyHeaderTableFilterInfo.currentPage"
            first-number
            last-number
            :total-rows="stickyHeaderTableFilterInfo.totalRows"
            :per-page="stickyHeaderTableFilterInfo.perPage"
            style="width: 100%"
            class="m-bv-pagination"
            align="center"
          ></b-pagination>
        </div>
      </div>
    </div>

    <div>
      <div class="row">
        <b-pagination v-model="paginationInfo.currentPage" :total-rows="paginationInfo.rows" align="center" class="m-bv-pagination" style="width: 100%"></b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paginationInfo: {
        rows: 100,
        currentPage: 3,
      },
      baseTableInfo: {
        fields: [
          { key: 'last_name', label: '성', sortable: true, class: 'fields', tdClass: 'td', thClass: 'th' },
          { key: 'first_name', label: '이름', sortable: true, class: '' },
          { key: 'age', label: '나이', sortable: true, class: '' },
        ],
        items: [
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' },
        ],
      },
      stickyHeaderTableInfo: {
        fields: [
          { key: 'last_name', label: '성', sortable: true, class: 'fields', tdClass: 'td', thClass: 'th' },
          { key: 'first_name', label: '이름', sortable: true, class: '' },
          { key: 'age', label: '나이', sortable: true, class: '' },
        ],
        items: [
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' },
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' },
        ],
      },
      stickyHeaderTableFilterInfo: {
        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        filter: null,
        fields: [
          { key: 'last_name', label: '성', sortable: true, class: 'fields', tdClass: 'td', thClass: 'th' },
          { key: 'first_name', label: '이름', sortable: true, class: '' },
          { key: 'age', label: '나이', sortable: true, class: '' },
        ],
        items: [
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' },
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' },
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' },
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' },
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' },
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' },
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' },
        ],
      },
    };
  },
  mounted() {
    console.info('[테이블]');
    this.stickyHeaderTableFilterInfo.totalRows = this.stickyHeaderTableFilterInfo.items.length;
  },
  methods: {
    details(item) {
      alert(JSON.stringify(item));
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.stickyHeaderTableFilterInfo.totalRows = filteredItems.length;
      this.stickyHeaderTableFilterInfo.currentPage = 1;
    },
  },
};
</script>

<style lang="scss" scoped></style>
