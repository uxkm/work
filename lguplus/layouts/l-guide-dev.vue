<template>
  <div v-if="isLoad" class="l-guide-dev">
    <div class="header-area">
      <div class="logo"><img src="/guide-dev/img/img_logo.png" alt="" /></div>
      <h1 class="h1-title">FO 개발 가이드 문서</h1>
    </div>
    <div class="body-area">
      <div class="body-wrap">
        <div class="lnb-area">
          <div class="input-area">
            <input v-model="searchText" class="form-control input-search" placeholder="목차 검색" />
          </div>

          <div class="tree-area">
            <div class="m-vue-treejs-guide-dev" style="">
              <v-jstree v-if="isJstree" ref="tree" :data="treeInfo" :allow-transition="false" :collapse="false" @item-click="itemClick"></v-jstree>
            </div>
          </div>
        </div>

        <div ref="pageAraa" class="page-area" style="overflow: auto">
          <Nuxt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TreeNodeUtils from 'tree-node-utils';
const treeNodeUtils = new TreeNodeUtils({
  childrenField: 'children',
  keyField: 'text',
});

export default {
  data() {
    return {
      searchText: '',
      isLoad: false,
      isJstree: false,
      dataInfo: [
        {
          text: '1. UI 개발 환경 구축',
          opened: true,
          children: [
            {
              text: '1-1. VsCode',
              cat: 'ui',
              md: '1-1',
              opened: false,
            },
            {
              text: '1-2. 단축키',
              cat: 'ui',
              md: '1-2',
              opened: false,
            },
          ],
        },
        {
          text: '2. Vue.js(vue@2.6.12)',
          opened: true,
          children: [
            {
              text: '2-1. Vue 소개',
              cat: 'vue',
              md: '2-1',
              opened: false,
            },
            {
              text: '2-2. 템플릿 문법',
              cat: 'vue',
              md: '2-2',
              opened: false,
            },
            {
              text: '2-3. 조건문',
              cat: 'vue',
              md: '2-3',
              opened: false,
            },
            {
              text: '2-4. 반복문',
              cat: 'vue',
              md: '2-4',
              opened: false,
            },
            {
              text: '2-5. Vue-Router 소개',
              cat: 'vue',
              md: '2-5',
            },
            // {
            //   text: '2-6. Vue-Router 사용법',
            //   cat: 'vue',
            //   md: '2-6',
            // },
            // {
            //   text: '2-7. 동적 라우트 매칭',
            //   cat: 'vue',
            //   md: '2-7',
            // },
            {
              text: '2-6. Vuex 소개',
              cat: 'vue',
              md: '2-8',
            },
            {
              text: '2-7. Vuex 구성 및 기능',
              cat: 'vue',
              md: '2-14',
            },
            // {
            //   text: '2-7. 상태(state)',
            //   cat: 'vue',
            //   md: '2-9',
            // },
            // {
            //   text: '2-8. Getter',
            //   cat: 'vue',
            //   md: '2-10',
            // },
            // {
            //   text: '2-9. 변이(Mutations)',
            //   cat: 'vue',
            //   md: '2-11',
            // },
            // {
            //   text: '2-10. 액션(Action)',
            //   cat: 'vue',
            //   md: '2-12',
            // },
            // {
            //   text: '2-11. 모듈(Modules)',
            //   cat: 'vue',
            //   md: '2-13',
            // },
          ],
        },
        {
          text: '3. Nuxt.js(nuxt@2.15.1)',
          opened: true,
          children: [
            {
              text: '3-1. NUXT란?',
              cat: 'nuxt',
              md: '3-1',
            },
            {
              text: '3-2. 디렉토리 구조',
              cat: 'nuxt',
              md: '3-2-1',
              children: [],
            },
            {
              text: '3-3. 폴더 및 페이지 생성',
              cat: 'nuxt',
              md: '3-3',
              children: [],
            },
            {
              text: '3-4. 페이지 이동 및 예제',
              cat: 'nuxt',
              md: '3-4',
              children: [],
            },
            {
              text: '3-5. 페이지 속성',
              cat: 'nuxt',
              md: '3-5',
              children: [],
            },
          ],
        },
        {
          text: '4. FO 개발 가이드',
          opened: true,
          children: [
            {
              text: '4-1. 필수 모듈',
              cat: 'fo',
              md: '4-1',
              // md: 'md-1',
            },
            {
              text: '4-2. 필수 라이브러리',
              cat: 'fo',
              md: '4-2',
            },
            {
              text: '4-3. nuxt 스타일(style) 구조',
              cat: 'fo',
              md: '4-3',
            },
            {
              text: '4-4. nuxt 페이지 생성 및 라우팅',
              cat: 'fo',
              md: '4-10-1',
            },
            {
              text: '4-5. nuxt componet 생성 및 사용',
              cat: 'fo',
              md: '4-10-2',
            },
            {
              text: '4-6. 자식 컴포넌트에게 데이터 연동',
              cat: 'fo',
              md: '4-10-3',
            },
            {
              text: '4-7. Toggle',
              cat: 'fo',
              md: '4-11',
            },
            {
              text: '4-8. Collapse',
              cat: 'fo',
              md: '4-12',
            },
          ],
        },
        {
          text: '5. 샘플 페이지',
          opened: true,
          children: [
            {
              text: '5-1 컴포넌트 구조',
              cat: 'sample-page',
              md: 'sp-1',
            },
            {
              text: '5-2 컴포넌트간 데이터 연동1',
              cat: 'sample-page',
              md: 'sp-2',
            },
            {
              text: '5-2 컴포넌트간 데이터 연동2',
              cat: 'sample-page',
              md: 'sp-2-1',
            },
            {
              text: 'Vee-validate v3 사용법1',
              cat: 'sample-page',
              md: 'sp-vee-1',
            },
            {
              text: 'Vee-validate v3 사용법2',
              cat: 'sample-page',
              md: 'sp-vee-2',
            },
            // {
            //   text: '5-1 [vuex] 1:1 문의 상세',
            //   cat: 'sample-page',
            //   md: 'sp-4',
            // },
          ],
        },
        {
          text: '6. 기타',
          opened: true,
          children: [
            {
              text: '6-1 Lodash',
              cat: 'etc',
              md: 'etc-1',
            },
            {
              text: '6-2 Moment.js',
              cat: 'etc',
              md: 'etc-2',
            },
            {
              text: '6-3 Vue.js devtools 사용법',
              cat: 'etc',
              md: 'etc-3',
            },
            {
              text: '6-4 Nuxt-logger 사용법',
              cat: 'etc',
              md: 'etc-4',
            },
            {
              text: '6-4 Error Page 설정',
              cat: 'etc',
              md: 'etc-5',
            },

            // {
            //   text: '표준 오류처리',
            //   md: 'md-1',
            // },
            // {
            //   text: '디버깅',
            //   md: 'md-1',
            // },
            // {
            //   text: '참고사항',
            //   md: 'md-1',
            // },
          ],
        },
      ],
      treeInfo: [],
      urlValue: null,
    };
  },

  computed: {},

  watch: {
    searchText(val) {
      console.info('[searchText]', val);
      this.isJstree = false;
      const tempData = _.cloneDeep(this.dataInfo);
      this.treeInfo = this.getfilterTreeData(tempData, 'text', val);

      setTimeout(() => {
        this.isJstree = true;
      });
    },
    $route() {
      this.$refs.pageAraa.scrollTop = 0;
      // console.log('[watch > $route]', this.$refs.pageAraa.scrollTop);
    },
  },

  mounted() {
    console.info('[mounted]');
    $('body').css({ overflow: 'hidden' });
    this.treeInfo = _.cloneDeep(this.dataInfo);

    this.isLoad = true;
    this.isJstree = true;

    // F5키 이벤트 제어
    // document.onkeyup = this.testRefreshEvent(this);
  },

  methods: {
    getfilterTreeData($data, $keyName, $searchTxt) {
      return treeNodeUtils.filterNodes($data, (o) => {
        const keyName = _.lowerCase(o[$keyName]);
        const searchText = _.lowerCase($searchTxt);
        return _.includes(keyName, searchText);
      });
    },
    itemClick(node, item, e) {
      console.log(item);
      if (item.md !== undefined) {
        this.$router.push({ name: 'guide-dev-category-id', params: { category: item.cat, id: item.md } });
      } else if (item.opened === true) {
        item.opened = false;
      } else {
        item.opened = true;
      }

      // if (item.md !== undefined) {
      //   this.urlValue = item.md;
      //   this.$router.push({ name: 'guide-dev-markdown-id', params: { id: item.md } });
    },
    // testRefreshEvent(param) {
    //   window.addEventListener('keydown', (e) => {
    //     if (e.keyCode === 116) {
    //       if (this.urlValue !== undefined && this.urlValue !== null) {
    //         if (this.urlValue.indexOf('/') > 0) {
    //           e.cancelBubble = true;
    //           e.returnValue = false;
    //           console.log(this.urlValue);
    //           // this.$nuxt.$router.push({ name: 'guide-dev-markdown-id', params: { id: this.urlValue } });
    //         }
    //       }
    //     }
    //   });
    // },
  },
};
</script>

<style lang="scss">
.l-guide-dev {
  // position: relative;
  width: 100%;
  min-height: 100%;
  height: auto;

  .header-area {
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 1000;
    width: 100%;
    height: 80px;
    background-color: #fff;
    .logo {
      float: left;
      margin: 0px 20px 0px 30px;
    }
    .h1-title {
      float: left;
      margin: 9px 10px 10px 10px;
    }
  }
  .body-area {
    position: absolute;
    width: 100%;
    margin-top: 80px;
    min-height: calc(100% - 80px);
    height: auto;
    .body-wrap {
      position: absolute;
      min-height: 100%;
      height: auto;
      width: 100%;
    }
    .lnb-area {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 395px;
      // width: fit-content;
      min-height: 100%;
      height: 100%;
      background-color: #2d353c;
      // padding: 30px 20px 10px 20px;

      .input-area {
        width: 100%;
        height: 80px;
        padding: 30px 20px 10px 20px;
      }

      .tree-area {
        width: 100%;
        height: calc(100% - 80px);
        overflow: hidden;
        overflow-y: scroll;
        padding: 0px 20px 10px 20px;
      }

      li {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 18px;
        a {
          color: #abaeb1;
        }
      }
      .input-search {
        border: 1px solid #1a1f24;
        background-color: #40505d;
      }

      .m-vue-treejs-guide-dev {
        .tree-anchor {
          color: #abaeb1;
        }
        .tree-default .tree-context,
        .tree-default .tree-hovered {
          background: #414d57;
        }
        .tree-default .tree-selected {
          background: #242b30;
          color: #00acac;
        }
      }
    }
    .page-area {
      position: absolute;
      top: 0px;
      right: 0px;
      // width: calc(100% - 330px);
      width: calc(100% - 395px);
      min-height: 100%;
      height: 100%;
      overflow: auto;
      overflow-y: auto;
      background-color: #dee2e6;
      padding: 40px 50px 30px 50px;
    }
  }
}
.p-markdown {
  a {
    color: #0366d6;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  strong {
    font-weight: inherit;
    font-weight: bolder;
  }

  ol ol,
  ul ol {
    list-style-type: lower-roman;
  }

  ol ol ol,
  ol ul ol,
  ul ol ol,
  ul ul ol {
    list-style-type: lower-alpha;
  }

  ul,
  ol {
    padding-left: 40px;
  }

  li {
    list-style: circle;
    word-wrap: break-all;
  }

  ol > li {
    list-style-type: decimal;
  }

  li > p {
    margin-top: 16px;
  }

  li + li {
    margin-top: 0.25em;
  }

  dl {
    padding: 0;
  }

  dl dt {
    padding: 0;
    margin-top: 16px;
    font-size: 1em;
    font-style: italic;
    font-weight: 600;
  }

  dl dd {
    padding: 0 16px;
    margin-bottom: 16px;
  }

  em {
    font-style: italic;
  }

  blockquote {
    padding: 0 1em;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
  }

  blockquote > :first-child {
    margin-top: 0;
  }

  blockquote > :last-child {
    margin-bottom: 0;
  }

  pre {
    border-radius: 8px;
    margin: 20px;
    padding: 20px;
  }

  strong {
    color: #5f4ec4;
  }

  h2 {
    color: #404040;
  }

  h3,
  h4,
  h5,
  h6 {
    color: #505050;
  }

  hr {
    margin: 24px 0px 24px 0px;
  }

  .grid-area {
    .row > .col {
      border: 1px solid rgba(#8682bc, 0.37);
      background-color: rgba(#cac9d6, 1);
      padding: 10px 10px 10px 10px;
    }

    .row.is-header > .col {
      background-color: rgba(#a39fce, 1);
      color: #544f8a;
      font-weight: 700;
    }
  }

  img.img-thumbnail {
    border: 1px solid #9caab9;
    padding: 10px;
    -webkit-box-shadow: 7px 7px 5px 0px rgba(38, 43, 46, 0.21);
    -moz-box-shadow: 7px 7px 5px 0px rgba(38, 43, 46, 0.21);
    box-shadow: 7px 7px 5px 0px rgba(38, 43, 46, 0.21);

    &.is-pd-5 {
      padding: 5px;
    }
    &.is-pd-10 {
      padding: 10px;
    }
    &.is-pd-15 {
      padding: 15px;
    }
    &.is-pd-20 {
      padding: 20px;
    }
  }
}
</style>
