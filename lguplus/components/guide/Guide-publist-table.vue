<template>
  <section role="contentinfo" aria-label="파트1">
    <nav class="guide-publist-avg">
      <ul class="publist-avg">
        <li>{{ $store.state.pubguideStore.type1 }} 전체</li>
        <li>
          <span class="title">전체:</span>
          <span class="span-val total"
            >{{ totNum1 }} <span class="totNumDelEtc">({{ totNumDelEtc_1 }})</span></span
          >
          <span class="title">진행전:</span>
          <span class="span-val total">{{ beforeNum1 }}</span>
          <span class="title">진행중:</span>
          <span class="span-val total">{{ ingNum1 }}</span>
          <span class="title">검수중:</span>
          <span class="span-val total">{{ checkNum1 }}</span>
          <span class="title">검수완료:</span>
          <span class="span-val total">{{ endNum1 }}</span>
          <span class="title">REWORK:</span>
          <span class="span-val total except">{{ reworkNum1 }}</span>
          <span class="title">삭제됨:</span>
          <span class="span-val total">{{ delNum1 }}</span>
          <span class="title">기타:</span>
          <span class="span-val total">{{ etcNum1 }}</span>
        </li>
        <li>메뉴별통계</li>
        <li>
          <span class="title">전체:</span>
          <span class="span-val total"
            >{{ totNum2 }} <span class="totNumDelEtc">({{ totNumDelEtc_2 }})</span></span
          >
          <span class="title">진행전:</span>
          <span class="span-val total">{{ beforeNum2 }}</span>
          <span class="title">진행중:</span>
          <span class="span-val total">{{ ingNum2 }}</span>
          <span class="title">검수중:</span>
          <span class="span-val total">{{ checkNum2 }}</span>
          <span class="title">검수완료:</span>
          <span class="span-val total">{{ endNum2 }}</span>
          <span class="title">REWORK:</span>
          <span class="span-val total except">{{ reworkNum2 }}</span>
          <span class="title">삭제됨:</span>
          <span class="span-val total">{{ delNum2 }}</span>
          <span class="title">기타:</span>
          <span class="span-val total">{{ etcNum2 }}</span>
        </li>
      </ul>
      <span class="txt-guide">※ 전체: (진행전 + 진행중 + 검수중 + 검수완료 + REWORK) / (기타, 삭제 포함 수량)</span>
    </nav>
    <h1 class="h1">{{ title }}</h1>
    <!-- <p>Array: {{ dataTableChange }}</p> -->
    <div class="pub-list-keyword-wrap">
      <!-- v-model="sortDirection" -->
      <b-form-group label="Filter On" description="Leave all unchecked to filter on all data" label-cols-sm="3" label-align-sm="right" label-size="sm" class="mb-0" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group v-model="filterOn" :aria-describedby="ariaDescribedby" class="mt-1">
          <b-form-checkbox value="화면ID">화면ID</b-form-checkbox>
          <b-form-checkbox value="C1">C1</b-form-checkbox>
          <b-form-checkbox value="C2">C2</b-form-checkbox>
          <b-form-checkbox value="C3">C3</b-form-checkbox>
          <b-form-checkbox value="C4">C4</b-form-checkbox>
          <b-form-checkbox value="진행일">진행일</b-form-checkbox>
          <b-form-checkbox value="완료일">완료일</b-form-checkbox>
          <b-form-checkbox value="비고">비고</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
    </div>
    <div class="pub-list-sch-wrap">
      <b-form-group label="Filter" label-for="filter-input" label-cols-sm="3" label-align-sm="right" label-size="sm" class="mb-0">
        <b-input-group size="sm">
          <b-form-input id="filter-input" v-model="filter" type="search" placeholder="Type to Search"></b-form-input>

          <b-input-group-append>
            <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-form-group>
    </div>
    <div class="c-table">
      <!-- :tbody-tr-class="rowClass" -->
      <b-table
        :sort-by.sync="sortBy"
        sticky-header="600px"
        :items="dataTableChange"
        :fields="fields"
        fixed
        head-variant="light"
        :tbody-tr-class="rowClass"
        :filter="filter"
        :filter-included-fields="filterOn"
      >
        <template #table-colgroup>
          <col style="width: 70px" />
          <col style="width: 100px" />
          <col style="width: 100px" />
          <col style="width: 100px" />
          <col style="width: 100px" />
          <col style="width: 100px" />
          <col style="width: 100px" />
          <col style="width: 100px" />
          <col style="width: 130px" />
          <col style="width: 100px" />
          <col style="width: 100px" />
          <col style="width: 100px" />
          <col style="width: 100px" />
          <col style="width: 100px" />
          <col style="width: 100px" />
          <col style="width: 100px" />
        </template>
        <!-- <template #cell(NO)="data"> -->
        <template #cell(NO)="data">
          <!-- <a :href="`http://www.naver.com`" v-html="data.value">{{ data.value }}</a> -->
          {{ totalRows - data.index }}
        </template>
        <template #cell(PATH)="data">
          <!-- <span v-html="data.value"></span> -->
          <a :href="`${data.value}`" v-html="data.value" target="_blank">{{ data.value }}</a>
        </template>
        <template #cell(비고)="data"><div v-html="data.value"></div> </template>
      </b-table>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex';
import axios from 'axios';

export default {
  name: 'Setting',
  layout: 'pub-list',
  data() {
    return {
      viewPageUrl: null,
      totNum1: 0,
      totNumDelEtc_1: 0,
      beforeNum1: 0,
      ingNum1: 0,
      checkNum1: 0,
      endNum1: 0,
      reworkNum1: 0,
      delNum1: 0,
      etcNum1: 0,
      totNum2: 0,
      totNumDelEtc_2: 0,
      beforeNum2: 0,
      ingNum2: 0,
      checkNum2: 0,
      endNum2: 0,
      reworkNum2: 0,
      delNum2: 0,
      etcNum2: 0,
      title: '타이틀1',
      sortDesc: true,
      filter: null,
      sortBy: '화면ID',
      filterOn: [],
      totalRows: 1,
      fields: [
        { key: 'NO', tdClass: 'addClassTd1' },
        '화면ID',
        'C1',
        'C2',
        'C3',
        'C4',
        'C5',
        'C6',
        'C7',
        'PATH',
        '디자인전달',
        '진행일',
        { key: '완료일', tdClass: 'addClassTd2' },
        '퍼블리셔',
        '작업상태',
        '비고',
      ],
      items: [
        {
          NO: '',
          화면ID: 'A1234',
          C1: '카테고리1',
          C2: '카테고리2',
          C3: '카테고리3',
          C4: '카테고리4',
          C5: '카테고리5',
          C6: '카테고리6',
          C7: '카테고리7',
          PATH: '/main-sub-customer/CS1_2_2',
          디자인전달: '2021-03-20',
          진행일: '2021-03-22',
          완료일: '2021-03-26',
          퍼블리셔: '정인용',
          작업상태: '진행전', //진행전, 진행중, 검수중, 검수완료, REWORK, 삭제됨, 기타, 참고 (카운터에 제외)
          비고: '컨펌전',
        },
      ],
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.avgAccount1();
  },
  computed: {
    dataTableChange() {
      this.items = this.$store.state.pubguideStore.tableData;
      if (this.items) this.totalRows = this.items.length;
      if (this.$store.state.pubguideStore.pageTitle) this.title = this.$store.state.pubguideStore.pageTitle;
      return this.$store.state.pubguideStore.tableData;
    },
  },
  methods: {
    avgAccount1() {
      let me = this;
      me.totNum1 = 0;
      me.totNumDelEtc_1 = 0;
      me.beforeNum1 = 0;
      me.ingNum1 = 0;
      me.checkNum1 = 0;
      me.endNum1 = 0;
      me.reworkNum1 = 0;
      me.delNum1 = 0;
      me.etcNum1 = 0;
      let eachNumber = [];
      const arrPcIndvFiles = me.$store.state.pubguideStore.allFiles.arrPcIndvFile;
      const arrPcEnterpriseFiles = me.$store.state.pubguideStore.allFiles.arrPcEnterpriseFile;

      const arrMobileIndvFiles = me.$store.state.pubguideStore.allFiles.arrMobileIndvFile;
      const arrMobileEnterpriseFiles = me.$store.state.pubguideStore.allFiles.arrMobileEnterpriseFile;
      if (me.$store.state.pubguideStore.type1 == 'pc') {
        arrPcIndvFiles.forEach((obj, idx) => {
          eachNumber.push(obj.url);
        });
        arrPcEnterpriseFiles.forEach((obj, idx) => {
          eachNumber.push(obj.url);
        });
      } else {
        arrMobileIndvFiles.forEach((obj, idx) => {
          eachNumber.push(obj.url);
        });
        arrMobileEnterpriseFiles.forEach((obj, idx) => {
          eachNumber.push(obj.url);
        });
      }
      eachNumber.forEach(function (val, idx) {
        axios.get(val).then((Response) => {
          me.totNum1 += Response.data.length;
          me.totNumDelEtc_1 += Response.data.length;
          Response.data.forEach(function (obj, idx2) {
            if (obj['작업상태'] == '진행중') {
              me.ingNum1 += 1;
            } else if (obj['작업상태'] == '진행전') {
              me.beforeNum1 += 1;
            } else if (obj['작업상태'] == '작업중') {
              me.ingNum1 += 1;
            } else if (obj['작업상태'] == '진행중') {
              me.ingNum1 += 1;
            } else if (obj['작업상태'] == '검수중') {
              me.checkNum1 += 1;
            } else if (obj['작업상태'] == '검수완료') {
              me.endNum1 += 1;
            } else if (obj['작업상태'] == 'REWORK') {
              me.reworkNum1 += 1;
            } else if (obj['작업상태'] == '삭제됨') {
              me.delNum1 += 1;
              me.totNum1 -= 1;
            } else if (obj['작업상태'] == '기타') {
              me.etcNum1 += 1;
              me.totNum1 -= 1;
            } else if (obj['작업상태'] == '참고') {
              me.totNumDelEtc_1 -= 1;
              me.totNum1 -= 1;
            }
          });
        });
      });
    },
    avgAccount2(url) {
      try {
        let me = this;
        axios.get(url).then((Response) => {
          me.totNum2 = 0;
          me.totNumDelEtc_2 = 0;
          me.beforeNum2 = 0;
          me.ingNum2 = 0;
          me.checkNum2 = 0;
          me.endNum2 = 0;
          me.reworkNum2 = 0;
          me.delNum2 = 0;
          me.etcNum2 = 0;
          Response.data.forEach(function (obj, idx2) {
            me.totNum2 += 1;
            me.totNumDelEtc_2 += 1;
            if (obj['작업상태'] == '진행중') {
              me.ingNum2 += 1;
            } else if (obj['작업상태'] == '진행전') {
              me.beforeNum2 += 1;
            } else if (obj['작업상태'] == '작업중') {
              me.ingNum2 += 1;
            } else if (obj['작업상태'] == '진행중') {
              me.ingNum2 += 1;
            } else if (obj['작업상태'] == '검수중') {
              me.checkNum2 += 1;
            } else if (obj['작업상태'] == '검수완료') {
              me.endNum2 += 1;
            } else if (obj['작업상태'] == 'REWORK') {
              me.reworkNum2 += 1;
            } else if (obj['작업상태'] == '삭제됨') {
              me.delNum2 += 1;
              me.totNum2 -= 1;
            } else if (obj['작업상태'] == '기타') {
              me.etcNum2 += 1;
              me.totNum2 -= 1;
            } else if (obj['작업상태'] == '참고') {
              me.totNum2 -= 1;
              me.totNumDelEtc_2 -= 1;
            }
          });
        });
        const arrMobile = [];
        arrMobile.push('/guide-pub/data/mobile/indv/part1.json');
      } catch (e) {
        console.log(e.message);
      }
    },
    addClassTd1(item, tit, rowObj) {
      // console.log(a);
      // console.log(b);
      // console.log(c);
      // console.log('td');
    },
    addClassTd2(item, tit, rowObj) {
      //조건에 따라 클래스 결정
      // console.log(item, tit, rowObj['작업상태']);
      // console.log(new Date());
      let workStatus = rowObj['작업상태'];
      let today = new Date();
      today.setHours(0);
      today.setMinutes(0);
      today.setSeconds(0);
      today.setMilliseconds(0);
      let endDate = new Date(rowObj['완료일']);
      endDate.setHours(0);
      endDate.setMinutes(0);
      endDate.setSeconds(0);
      endDate.setMilliseconds(0);
      //console.log(endDate);
      let oneDay = 86400000;
      let gap = today.getTime() - endDate.getTime();
      console.log('today:', today);
      console.log('endDate:', endDate);
      console.log(gap);
      if ((gap <= -oneDay * 1 && gap >= -oneDay * 2 && workStatus == '진행전') || (gap >= -oneDay * 2 && gap <= 0 && workStatus == '진행중')) {
        //1일 남겨놨을 경우
        return 'caution-1';
      } else if ((gap >= 0 && workStatus == '진행전') || (gap >= 0 && workStatus == '진행중')) {
        return 'caution-2';
      }
    },
    rowClass(item, type) {
      //진행전, 진행중, 검수중, 검수완료, REWORK, 삭제됨, 기타
      if (item['작업상태'] == '진행전') {
        return 'process-0';
      } else if (item['작업상태'] == '진행중') {
        return 'process-1';
      } else if (item['작업상태'] == '검수중') {
        return 'process-2';
      } else if (item['작업상태'] == '검수완료') {
        return 'process-3';
      } else if (item['작업상태'] == 'REWORK') {
        return 'process-4';
      } else if (item['작업상태'] == '삭제됨') {
        return 'process-del';
      } else if (item['작업상태'] == '기타') {
        return 'process-etc';
      }
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
};
</script>

<style lang="scss" scoped></style>
