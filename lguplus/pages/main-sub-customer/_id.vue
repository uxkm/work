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
        <!-- //.sub-top -->
      </div>
      <!-- //.toparea-wrap -->
      <div class="middlearea-contents">
        <div class="middlearea">
          <div class="c-page-section">
            <div class="c-qna-detail-wrap">
              <!-- 질문내용 -->
              <div class="c-qna-question-area">
                <div class="c-qna-question-title">{{ boardItem.enTitle }}</div>
                <div class="c-qna-question-info">
                  <a :href="boardItem.fileNm"
                    ><strong class="underline">{{ boardItem.fileNm }}</strong></a
                  >
                  <span class="info-group">
                    <span class="c-qna-inner-tit">작성일</span>
                    <span class="c-qna-inner-txt">{{ boardItem.writeDate }}</span>
                    <span class="c-qna-inner-tit">작성자</span>
                    <span class="c-qna-inner-txt c-qna-writer">{{ boardItem.custNm }}</span>
                  </span>
                </div>
                <div class="c-qna-question-content">
                  <div class="c-qna-question-content-inner">
                    {{ boardItem.enContent }}
                  </div>
                </div>
              </div>
              <!-- //질문내용 -->
              <!-- 답변내용 -->
              <div class="c-qna-reply-area">
                <div class="c-qna-reply-title">답변</div>
                <div class="c-qna-reply-content">
                  <div class="c-qna-question-info">
                    <span class="info-group">
                      <span class="c-qna-inner-tit">작성일</span>
                      <span class="c-qna-inner-txt">{{ boardItem.answerDate }}</span>
                      <span class="c-qna-inner-tit">작성자</span>
                      <span class="c-qna-inner-txt c-qna-writer">{{ boardItem.answerWriter }}</span>
                    </span>
                  </div>
                  <div class="c-qna-reply-content-inner">
                    {{ boardItem.answerContent }}
                  </div>
                </div>
              </div>
              <!-- //답변내용 -->
              <!-- 이전/다음글 -->
              <div class="c-qna-prevNext-wrap">
                <ul class="c-qna-prevNext-list">
                  <li v-if="!preId" class="c-qna-prev">
                    <span class="no-data"><span class="info-1">이전글</span><span class="info-2">이전 글이 없습니다.</span></span>
                    <span class="c-qna-inner-date"></span>
                  </li>
                  <li v-else class="c-qna-prev">
                    <a :href="$config.baseURL + noneIdUrl + '/' + `${preItem.id}`" @click.prevent="contentCk(preItem.id)"
                      ><span class="info-1">이전글</span><span class="info-2">{{ preItem.enTitle }}</span></a
                    >
                    <span class="c-qna-inner-date">{{ preItem.writeDate }}</span>
                  </li>

                  <li v-if="!nextId" class="c-qna-next">
                    <span class="no-data"><span class="info-1">다음글</span><span class="info-2">다음 글이 없습니다.</span></span>
                    <span class="c-qna-inner-date"></span>
                  </li>
                  <li v-else class="c-qna-next">
                    <a :href="$config.baseURL + noneIdUrl + '/' + `${nextItem.id}`" @click.prevent="contentCk(nextItem.id)"
                      ><span class="info-1">다음글</span><span class="info-2">{{ nextItem.enTitle }}</span></a
                    >
                    <span class="c-qna-inner-date">{{ nextItem.writeDate }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <!-- //이전/다음글 -->
            <div class="c-btn-group">
              <button class="c-btn-ok" @click="goBoardList">목록</button>
            </div>
          </div>
        </div>
        <!-- //.middlearea -->
      </div>
      <!-- //.middlearea-contents -->
    </div>
    <!-- //.submain-section  -->
  </div>
</template>

<script>
import { GET_BOARD_LIST_DETAIL, GET_TOTAL_CNT } from '~/js/api/apiTest.js';
export default {
  layout: 'l-sub-main',
  asyncData() {
    console.info('asyncData');
  },

  data() {
    return {
      boardItem: {},
      preItem: {},
      nextItem: {},
      preId: 0,
      nextId: 0,
      noneIdUrl: null,
      id: null,
    };
  },
  async fetch() {
    const params = this.$route.params;
    console.info('this.$route', this.$route);
    this.id = params.id;
    const path = this.$route.path;
    this.noneIdUrl = path.substring(0, path.lastIndexOf('/'));
    const resCnt = await GET_TOTAL_CNT(this);
    console.info('resCnt', resCnt);
    const currntId = Number(this.id);
    if (currntId === 1) {
      this.preId = null;
    } else {
      this.preId = currntId - 1;
    }

    if (currntId === resCnt.totalCnt) {
      this.nextId = null;
    } else {
      this.nextId = currntId + 1;
    }

    console.info('this.preId:', this.preId, 'this.nextId:', this.nextId);

    this.boardItem = await GET_BOARD_LIST_DETAIL(this, currntId);
    console.info('this.boardItem:', this.boardItem);

    if (this.preId) {
      this.preItem = await GET_BOARD_LIST_DETAIL(this, this.preId);
      console.info('this.preItem:', this.preItem);
    }

    if (this.nextId) {
      this.nextItem = await GET_BOARD_LIST_DETAIL(this, this.nextId);
      console.info('this.nextItem:', this.nextItem);
    }
  },
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: '/style/css/p-main-sub-customer.min.css',
        },
      ],
    };
  },

  mounted() {},

  methods: {
    contentCk(listDetail) {
      this.$router.push({ path: `/main-sub-customer/${listDetail}` });
    },
    goBoardList() {
      this.$router.push({ name: 'main-sub-customer' });
    },
  },
};
</script>

<style lang="scss"></style>
