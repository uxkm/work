<template>
  <div>
    <h1>테이블</h1>
    <div>
      <h2>기본 테이블</h2>
      <div class="container">
        <div class="row c-table">
          <b-table-simple bordered class="c-table-row">
            <caption>
              표제목
            </caption>
            <colgroup>
              <col style="width: auto" />
              <col style="width: 300px" />
              <col style="width: 300px" />
              <col style="width: 300px" />
            </colgroup>
            <b-tbody>
              <b-tr>
                <b-th rowspan="2">타이틀1</b-th>
                <b-th>타이틀2</b-th>
                <b-td>내용1</b-td>
                <b-td>내용2</b-td>
              </b-tr>
              <b-tr>
                <b-th>타이틀3</b-th>
                <b-td>내용3</b-td>
                <b-td>내용4</b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
        </div>
        <div class="row c-table">
          <b-table-simple bordered class="c-table-row">
            <caption>
              표제목
            </caption>
            <colgroup>
              <col style="width: 150px" />
              <col style="width: auto" />
            </colgroup>
            <b-tbody>
              <b-tr>
                <b-th>
                  <label class="c-label" for="cfrmInp-2-2">
                    이름
                    <span class="is-need"><i class="is-blind">필수항목</i></span>
                  </label>
                </b-th>
                <b-td>
                  <div class="c-inpfield blind-label">
                    <div class="c-inpform">
                      <input id="cfrmInp-2-2" type="text" name="" placeholder="10자 이내 입력" title="이름을 입력해주세요." class="c-inp" />
                      <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                    </div>
                  </div>
                </b-td>
              </b-tr>
              <b-tr>
                <b-th>타이틀3</b-th>
                <b-td>내용3</b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
        </div>
        <div class="row c-table">
          <b-table-simple class="c-table-row c-all-white">
            <caption>
              표제목
            </caption>
            <colgroup>
              <col style="width: 150px" />
              <col style="width: auto" />
            </colgroup>
            <b-tbody>
              <b-tr>
                <b-th>
                  <label class="c-label" for="cfrmInp-2-2">
                    이름
                    <span class="is-need"><i class="is-blind">필수항목</i></span>
                  </label>
                </b-th>
                <b-td>
                  <div class="c-inpfield blind-label">
                    <div class="c-inpform">
                      <input id="cfrmInp-2-2" type="text" name="" placeholder="10자 이내 입력" title="이름을 입력해주세요." class="c-inp" />
                      <button class="c-btn-clear" title="입력한 문자 삭제"><span class="is-blind">삭제</span></button>
                    </div>
                  </div>
                </b-td>
              </b-tr>
              <b-tr>
                <b-th>타이틀3</b-th>
                <b-td>내용3</b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
        </div>
        <div class="row c-table">
          <table id="__BVID__11" role="table" aria-busy="false" aria-colcount="3" class="table b-table m-bv-table" data-v-6c5305af="">
            <!----><!---->
            <thead role="rowgroup" class="">
              <!---->
              <tr role="row" class="">
                <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="none" class="fields th c-hcell-digit">
                  <div>번호</div>
                  <span class="sr-only"> (Click to sort Ascending)</span>
                </th>
                <th role="columnheader" scope="col" tabindex="0" aria-colindex="2" aria-sort="none" class="c-hcell-subject">
                  <div>이름</div>
                  <span class="sr-only"> (Click to sort Ascending)</span>
                </th>
                <th role="columnheader" scope="col" tabindex="0" aria-colindex="3" aria-sort="none" class="c-hcell-date">
                  <div>작성일</div>
                  <span class="sr-only"> (Click to sort Ascending)</span>
                </th>
              </tr>
            </thead>
            <tbody role="rowgroup">
              <!---->
              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="fields td c-cell-number c-cell-digit">132</td>
                <td aria-colindex="2" role="cell" class="c-cell-subject">Dickerson</td>
                <td aria-colindex="3" role="cell" class="c-cell-number c-cell-date">2020.11.30</td>
              </tr>
              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="fields td c-cell-number c-cell-digit">132</td>
                <td aria-colindex="2" role="cell" class="c-cell-subject">Larsen</td>
                <td aria-colindex="3" role="cell" class="c-cell-number c-cell-date">2020.11.30</td>
              </tr>
              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="fields td c-cell-number c-cell-digit">132</td>
                <td aria-colindex="2" role="cell" class="c-cell-subject">Geneva</td>
                <td aria-colindex="3" role="cell" class="c-cell-number c-cell-date">2020.11.30</td>
              </tr>
              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="fields td c-cell-number c-cell-digit">132</td>
                <td aria-colindex="2" role="cell" class="c-cell-subject">Jami</td>
                <td aria-colindex="3" role="cell" class="c-cell-number c-cell-date">2020.11.30</td>
              </tr>
              <!----><!---->
            </tbody>
            <!---->
          </table>
        </div>
        <div class="row c-table">
          <b-table-simple bordered>
            <caption>
              표 제목
            </caption>
            <b-thead>
              <b-tr>
                <b-th rowspan="2">번호</b-th>
                <b-th colspan="3">Age</b-th>
              </b-tr>
              <b-tr>
                <b-th>Title01</b-th>
                <b-th>Title02</b-th>
                <b-th>Title03</b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr>
                <b-td>갑</b-td>
                <b-td>을</b-td>
                <b-td>병</b-td>
                <b-td>장</b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
        </div>
        <div class="row c-table">
          <table id="__BVID__53" role="table" aria-busy="false" aria-colcount="4" class="table b-table m-bv-table table-bordered">
            <!---->
            <colgroup>
              <col style="width: 20%" />
              <col style="width: 40%" />
              <col style="width: 20%" />
              <col style="width: auto" />
            </colgroup>
            <thead role="rowgroup" class="">
              <!---->
              <tr role="row" class="">
                <th role="columnheader" scope="col" aria-colindex="1" class="" rowspan="2"><div>Is1234 Active</div></th>
                <th role="columnheader" scope="col" aria-colindex="2" class="" colspan="3"><div>Age</div></th>
              </tr>
              <tr role="row" class="">
                <th role="columnheader" scope="col" aria-colindex="3" class=""><div>Test</div></th>
                <th role="columnheader" scope="col" aria-colindex="3" class=""><div>First Name</div></th>
                <th role="columnheader" scope="col" aria-colindex="4" class=""><div>Last Name</div></th>
              </tr>
            </thead>
            <tbody role="rowgroup">
              <!---->
              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="">true</td>
                <td aria-colindex="2" role="cell" class="">40</td>
                <td aria-colindex="3" role="cell" class="">Dickerson</td>
                <td aria-colindex="4" role="cell" class="">Macdonald</td>
              </tr>
              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="">false</td>
                <td aria-colindex="2" role="cell" class="">21</td>
                <td aria-colindex="3" role="cell" class="">Larsen</td>
                <td aria-colindex="4" role="cell" class="">Shaw</td>
              </tr>
              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="">false</td>
                <td aria-colindex="2" role="cell" class="">89</td>
                <td aria-colindex="3" role="cell" class="">Geneva</td>
                <td aria-colindex="4" role="cell" class="">Wilson</td>
              </tr>
              <tr role="row" class="">
                <td aria-colindex="1" role="cell" class="">true</td>
                <td aria-colindex="2" role="cell" class="">38</td>
                <td aria-colindex="3" role="cell" class="">Jami</td>
                <td aria-colindex="4" role="cell" class="">Carney</td>
              </tr>
              <!----><!---->
            </tbody>
            <!---->
          </table>
        </div>
      </div>
    </div>
    <div>
      <h2>헤더고정 테이블</h2>
      <div class="container">
        <div class="row c-table">
          <b-table class="m-bv-table" style="width: 100%" sticky-header :items="stickyHeaderTableInfo.items" :fields="stickyHeaderTableInfo.fields"></b-table>
        </div>
      </div>
    </div>
    <div>
      <h2>헤더고정 테이블 + filter + 페이징</h2>

      <div class="container">
        <div class="row c-table" style="margin-top: 20px">
          <b-form-input id="filter-input" v-model="stickyHeaderTableFilterInfo.filter" type="search" placeholder="필터"></b-form-input>
        </div>

        <div class="row c-table" style="margin-top: 20px">
          <b-table
            class="m-bv-table"
            :per-page="stickyHeaderTableFilterInfo.perPage"
            :current-page="stickyHeaderTableFilterInfo.currentPage"
            :filter="stickyHeaderTableFilterInfo.filter"
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
          <b-pagination
            v-model="stickyHeaderTableFilterInfo.currentPage"
            class="m-bv-pagination"
            :total-rows="stickyHeaderTableFilterInfo.totalRows"
            :per-page="stickyHeaderTableFilterInfo.perPage"
            style="width: 100%"
            first-text="처음 페이지로 이동"
            prev-text="이전 페이지로 이동"
            next-text="다음 페이지로 이동"
            last-text="마지막 페이지로 이동"
            label-first-page="처음 페이지로 이동"
            label-prev-page="이전 페이지로 이동"
            label-next-page="다음 페이지로 이동"
            label-last-page="마지막 페이지로 이동"
            label-page="현재 페이지"
            align="center"
          ></b-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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

<style lang="scss"></style>
