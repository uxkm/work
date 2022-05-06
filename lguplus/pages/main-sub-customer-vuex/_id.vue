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
                <div class="c-qna-question-title">{{ boardDetailInfo.enTitle }}</div>
                <div class="c-qna-question-info">
                  <a :href="boardDetailInfo.fileNm"
                    ><strong class="underline">{{ boardDetailInfo.fileNm }}</strong></a
                  >
                  <span class="info-group">
                    <span class="c-qna-inner-tit">작성일</span>
                    <span class="c-qna-inner-txt">{{ boardDetailInfo.writeDate }}</span>
                    <span class="c-qna-inner-tit">작성자</span>
                    <span class="c-qna-inner-txt c-qna-writer">{{ boardDetailInfo.custNm }}</span>
                  </span>
                </div>
                <div class="c-qna-question-content">
                  <div class="c-qna-question-content-inner">
                    {{ boardDetailInfo.enContent }}
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
                      <span class="c-qna-inner-txt">{{ boardDetailInfo.answerDate }}</span>
                      <span class="c-qna-inner-tit">작성자</span>
                      <span class="c-qna-inner-txt c-qna-writer">{{ boardDetailInfo.answerWriter }}</span>
                    </span>
                  </div>
                  <div class="c-qna-reply-content-inner">
                    {{ boardDetailInfo.answerContent }}
                  </div>
                </div>
              </div>
              <!-- //답변내용 -->
              <!-- 이전/다음글 -->
              <div class="c-qna-prevNext-wrap">
                <ul class="c-qna-prevNext-list">
                  <li v-if="!pre" class="c-qna-prev">
                    <span class="no-data"><span class="info-1">이전글</span><span class="info-2">이전 글이 없습니다.</span></span>
                    <span class="c-qna-inner-date"></span>
                  </li>
                  <li v-else class="c-qna-prev">
                    <a :href="$config.baseURL + noneIdUrl + '/' + `${pre.id}`" @click.prevent="contentCk(pre.id)"
                      ><span class="info-1">이전글</span><span class="info-2">{{ pre.enTitle }}</span></a
                    >
                    <span class="c-qna-inner-date">{{ pre.writeDate }}</span>
                  </li>

                  <li v-if="!next" class="c-qna-next">
                    <span class="no-data"><span class="info-1">다음글</span><span class="info-2">다음 글이 없습니다.</span></span>
                    <span class="c-qna-inner-date"></span>
                  </li>
                  <li v-else class="c-qna-next">
                    <a :href="$config.baseURL + noneIdUrl + '/' + `${next.id}`" @click.prevent="contentCk(next.id)"
                      ><span class="info-1">다음글</span><span class="info-2">{{ next.enTitle }}</span></a
                    >
                    <span class="c-qna-inner-date">{{ next.writeDate }}</span>
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
/**
 * 사용할 store 폴더 지정.
 */
import { createNamespacedHelpers } from 'vuex';
const pageStoreName = 'main-sub-customer-vuex';
const { mapState, mapActions } = createNamespacedHelpers(pageStoreName);

export default {
  name: 'MainSubCustomerIdVuex',
  layout: 'l-sub-main',
  async asyncData({ params, store }) {
    console.info('params');
    await store.dispatch(`${pageStoreName}/BOARD_DETAIL_ACTION`, params.id);

    return {
      id: params.id,
    };
  },

  data() {
    return {
      noneIdUrl: null,
    };
  },
  fetch() {},
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
  computed: {
    ...mapState(['boardDetailInfo', 'totCnt', 'pre', 'next']),
  },

  mounted() {
    const path = this.$route.path;
    this.noneIdUrl = path.substring(0, path.lastIndexOf('/'));
  },

  methods: {
    ...mapActions(['BOARD_DETAIL_ACTION']),
    contentCk(listDetail) {
      this.$router.push({ path: `/main-sub-customer-vuex/${listDetail}` });
    },
    goBoardList() {
      this.$router.push({ name: 'main-sub-customer-vuex' });
    },
  },
};
</script>

<style lang="scss"></style>
