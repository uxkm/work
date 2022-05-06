<template>
  <div style="padding-left: 100px">
    <h1>Tabs</h1>
    <div style="margin-top: 20px">
      <h2>Basic</h2>
      <b-tabs content-class="" no-fade>
        <b-tab title="First" active><p>I'm the first tab</p></b-tab>
        <b-tab title="Second"><p>I'm the second tab</p></b-tab>
        <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
      </b-tabs>
    </div>
    <div style="margin-top: 20px">
      <h2>Vertical</h2>
      <b-tabs content-class="" no-fade vertical>
        <b-tab title="First" active><p>I'm the first tab</p></b-tab>
        <b-tab title="Second"><p>I'm the second tab</p></b-tab>
        <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
      </b-tabs>
    </div>
    <div style="margin-top: 20px">
      <h2>페이지 탭</h2>
      <p>선택 탭:</p>
      <b-tabs nav-wrapper-class="tab-list-area" nav-class="ul-tab-list">
        <b-tab v-for="tabItem in tabsInfo.tabs" :key="tabItem.id" :title="tabItem.name">
          <a v-for="(contentItem, contentItemIdx) in tabItem.content" :key="'A' + contentItemIdx" href="#" class="btn" style="margin-right: 10px">{{ contentItem.name }}</a>
        </b-tab>
        <template #tabs-end>
          <div class="nav-btn-area">
            <div class=""><button>prev</button></div>
            <div class=""><button>next</button></div>
          </div>
        </template>
      </b-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabsInfo: {
        tabs: [
          {
            id: 1,
            name: '가입/변경',
            isActive: true,
            content: [
              {
                name: '전체보기',
              },
              {
                name: '5G',
              },
              {
                name: '휴대폰',
              },
              {
                name: '인터넷',
              },
            ],
          },
          {
            id: 2,
            name: '요금/납부',
            isActive: false,
            content: [
              {
                name: '전체보기',
              },
              {
                name: '5G-2',
              },
              {
                name: '휴대폰-2',
              },
              {
                name: '인터넷-2',
              },
            ],
          },
          {
            id: 3,
            name: '요금제',
            isActive: false,
            content: [
              {
                name: '전체보기',
              },
              {
                name: '5G-3',
              },
              {
                name: '휴대폰-3',
              },
              {
                name: '인터넷-3',
              },
            ],
          },
          {
            id: 4,
            name: '부가서비스',
            isActive: false,
            content: [
              {
                name: '전체보기',
              },
              {
                name: '5G-4',
              },
              {
                name: '휴대폰-4',
              },
              {
                name: '인터넷-4',
              },
            ],
          },
        ],
        tabCounter: 0,
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
