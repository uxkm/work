/* eslint-disable */
import axios from 'axios';
let arrPcIndvFile = [];
let arrPcEnterpriseFile = [];
let arrMobileIndvFile = [];
let arrMobileEnterpriseFile = [];
//PC개인
arrPcIndvFile.push({ catName: '고객지원', url: '/guide-pub/data/pc/indv/part1.json' });
arrPcIndvFile.push({ catName: '상품서비스', url: '/guide-pub/data/pc/indv/part2.json' });
//PC기업
arrPcEnterpriseFile.push({ catName: '피기타이틀1', url: '/guide-pub/data/pc/enterprise/part1.json' });

//PC개인
arrMobileIndvFile.push({ catName: '모개타이틀1', url: '/guide-pub/data/mobile/indv/part1.json' });
//PC기업
arrMobileEnterpriseFile.push({ catName: '모기타이틀1', url: '/guide-pub/data/mobile/enterprise/part1.json' });

export const state = () => ({
  allFiles: {
    arrPcIndvFile: arrPcIndvFile,
    arrPcEnterpriseFile: arrPcEnterpriseFile,
    arrMobileIndvFile: arrMobileIndvFile,
    arrMobileEnterpriseFile: arrMobileEnterpriseFile,
  },
  pageTitle: null,
  type1: 'pc',
  type2: 'indv',
  pagePath: null,
  tableData: null,
  tableObject: null,
  pageUrl: null,
  avg: {
    pc: {
      total: 0,
      ing: 0,
      check: 0,
      rework: 0,
      del: 0,
      etc: 0,
    },
    mobile: {
      total: 0,
      ing: 0,
      check: 0,
      rework: 0,
      del: 0,
      etc: 0,
    },
  },
});
export const mutations = {
  changeType1(state, device1) {
    state.type1 = device1;
  },
  guideInit(state, tableObj) {
    // console.log(tableObj);
  },
  changeTitle(state, obj) {
    state.pageTitle = obj.newTitle;
    state.pageUrl = obj.url;
  },
  guideNavChange(state, myData) {
    state.tableData = myData;
  },
};
export const actions = {
  initPubList({ commit, state }, myobj) {
    axios
      .get(myobj.url)
      .then((Response) => {
        commit('guideNavChange', Response.data);
        if (myobj.me) myobj.me.items = Response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
