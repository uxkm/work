<template>
  <div class="p-sub-cs1-2-9">
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
                <div class="c-qna-question-title">사용중인 결합서비스가 얼마나 할인되는건지 알고 싶어요.</div>
                <div class="c-qna-question-info">
                  <a href="#"><strong class="underline">결합서비스.png</strong></a>
                  <span class="info-group">
                    <span class="c-qna-inner-tit">작성일</span>
                    <span class="c-qna-inner-txt">2020.11.20 15:31:47</span>
                    <span class="c-qna-inner-tit">작성자</span>
                    <span class="c-qna-inner-txt c-qna-writer">홍길동</span>
                  </span>
                </div>
                <div class="c-qna-question-content">
                  <div class="c-qna-question-content-inner">
                    안녕하세요.<br /><br />
                    제가 현재 결합서비스를 사용중인데 독립상품을 사용하는 것보다 얼마나 더 할인되고 있는지 궁금해서 문의 남깁니다. <br />
                    확인 부탁 드릴께요~ <br /><br />
                    감사합니다.
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
                      <span class="c-qna-inner-txt">2020.11.20 15:31:47</span>
                      <span class="c-qna-inner-tit">작성자</span>
                      <span class="c-qna-inner-txt c-qna-writer">홍길동</span>
                    </span>
                  </div>
                  <div class="c-qna-reply-content-inner">
                    안녕하세요 홍길동 고객님~<br /><br />

                    고객센터 상담사 고길동입니다.<br />
                    먼저 저희 LG유플러스 상품을 이용해 주셔서 감사의 말씀 드립니다~<br /><br />

                    문의주신 내용은 독립상품 대비 결합상품이 얼마나 할인되는지 알고싶으시다는 것이었는데요.<br />
                    현재 고객님이 사용중이신 결합상품은 신혼플러스 상품으로 각각의 독립된 상품대비 130,650원 할인되는 상품입니다!<br /><br />

                    앞으로도 저희 LG유플러스 상품 꾸준히 이용 부탁드리며 행복한 하루 되시길 바라겠습니다.
                  </div>
                </div>
              </div>
              <!-- //답변내용 -->
              <!-- 이전/다음글 -->
              <div class="c-qna-prevNext-wrap">
                <ul class="c-qna-prevNext-list">
                  <li class="c-qna-prev">
                    <span class="no-data"><span class="info-1">이전글</span><span class="info-2">이전 글이 없습니다.</span></span>
                    <span class="c-qna-inner-date">2020.11.11</span>
                  </li>
                  <li class="c-qna-next">
                    <a href="#"><span class="info-1">다음글</span><span class="info-2">이전 글이 없습니다.</span></a>
                    <span class="c-qna-inner-date">2020.11.11</span>
                  </li>
                </ul>
              </div>
            </div>
            <!-- //이전/다음글 -->
            <div class="c-btn-group">
              <button class="c-btn-ok">목록</button>
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
export default {
  layout: 'l-sub-main',
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
};
</script>

<style lang="scss"></style>
