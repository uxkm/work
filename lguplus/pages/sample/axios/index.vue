<template>
  <div>
    <h1>axios</h1>
    <div>
      <p>
        <NuxtLink to="/sample/axios/a">a</NuxtLink>
      </p>
      <p>
        <NuxtLink to="/sample/axios/b">b</NuxtLink>
      </p>
      <p>
        <NuxtLink to="/sample/axios/c">c</NuxtLink>
      </p>
    </div>

    <div class="c-btn-group">
      <button class="c-btn-ok" @click="postBoardContent">게시판 데이터 인서트</button>
    </div>
  </div>
</template>

<script>
import { GET_BOARD_LIST, GET_TOTAL_CNT, POST_BOARD_CONTENT, GET_BOARD_LIST_DETAIL } from '~/js/api/apiTest';

export default {
  name: 'Axios',
  layout: 'l-axios',
  //   middleware: ['seoInfo'],
  asyncData() {
    console.info('[asyncData]');
  },
  data() {
    return {
      boardData: [],
      start: 0,
      limit: 10,
      id: 1,
    };
  },
  computed: {},
  watch: {},
  async mounted() {
    const data = {
      start: this.start,
      limit: this.limit,
    };

    const boardTotalCnt = await GET_TOTAL_CNT(this); /* 게시판 토탈 카운트 -파라미터없음 */
    console.info('boardTotalCnt:', boardTotalCnt);
    const boardList = await GET_BOARD_LIST(this, data); /* 게시판 리스트 -파라미터 start: 0, limit: 10 */
    console.info('boardList:', boardList);
    const boardDetail = await GET_BOARD_LIST_DETAIL(this, this.id); /* 게시판 상세 -파라미터 id: 1 */
    console.info('boardDetail:', boardDetail);
  },
  beforeDestroy() {},
  methods: {
    async postBoardContent() {
      // const data = {
      //   custNm: this.custNm,
      //   email: this.email,
      //   custNumber: this.custNumber,
      //   enType: this.enType,
      //   enTitle: this.enTitle,
      //   enContent: this.enContent,
      //   fileNm: this.fileNm,
      //   processState: this.processState,
      //   writeDate: this.writeDate,
      //   division: this.division,
      // };

      const data = [
        {
          custNm: '홍길동',
          email: 'test@nvaer.com',
          custNumber: '010-1234-5678',
          enType: '요금조회 및 납부관리',
          enTitle: '요금관련 문의드립니다',
          enContent: '요금을 잘못냈어요 다시 돌려주세요',
          fileNm: 'test.png',
          processState: '처리완료',
          writeDate: '2021-03-11',
          division: 'MOBILE',

          answerContent: '안녕하세요 연락하지마세요',
          answerDate: '2021-03-13',
          answerWriter: '김현미',
        },
        {
          custNm: '강호동',
          email: 'test@nvaer.com',
          custNumber: '010-1234-5678',
          enType: 'AS문의',
          enTitle: 'AS문의드립니다',
          enContent: '금방고칠 수 있나요?',
          fileNm: 'test.png',
          processState: '처리중',
          writeDate: '2021-03-12',
          division: '인터넷',

          answerContent: '안녕하세요 끝났어요',
          answerDate: '2021-03-13',
          answerWriter: '김자옥',
        },
        {
          custNm: '이태식',
          email: 'test@nvaer.com',
          custNumber: '010-1234-5678',
          enType: '예약문의',
          enTitle: '예약하고 싶어요',
          enContent: '언제가능한가요?',
          fileNm: 'test.png',
          processState: '처리전',
          writeDate: '2021-03-13',
          division: 'MOBILE',

          answerContent: '안녕하세요 고객님 많이 기다리셨죠?',
          answerDate: '2021-03-13',
          answerWriter: '김미경',
        },
        {
          custNm: '허준',
          email: 'test@nvaer.com',
          custNumber: '010-1234-5678',
          enType: '기기변경',
          enTitle: '기기변경 문의드립니다',
          enContent: '싸게해주시나요? 할인 얼마까지 가능해요?',
          fileNm: 'test.png',
          processState: '처리중',
          writeDate: '2021-03-14',
          division: 'PC',

          answerContent: '안녕하세요 고객님 비용은 10만원입니다?',
          answerDate: '2021-03-13',
          answerWriter: '김수미',
        },
        {
          custNm: '이영화',
          email: 'test@nvaer.com',
          custNumber: '010-1234-5678',
          enType: '상담문의',
          enTitle: '개인상담요청합니다',
          enContent: '휴대폰이 너무 느려요',
          fileNm: 'test.png',
          processState: '처리완료',
          writeDate: '2021-03-15',
          division: 'MOBILE',

          answerContent: '안녕하세요 고객님 오늘 처리가능합니다?',
          answerDate: '2021-03-13',
          answerWriter: '김지숙',
        },
        {
          custNm: '유재석',
          email: 'test@nvaer.com',
          custNumber: '010-1234-5678',
          enType: '요금조회 및 납부관리',
          enTitle: '요금관련 문의드립니다',
          enContent: '싸게싸게갑시다',
          fileNm: 'test.png',
          processState: '처리전',
          writeDate: '2021-03-16',
          division: 'PC',

          answerContent: '안녕하세요 고객님 오늘 완료예정입니다',
          answerDate: '2021-03-13',
          answerWriter: '김자현',
        },
        {
          custNm: '김종국',
          email: 'test@nvaer.com',
          custNumber: '010-1234-5678',
          enType: '방문예약 문의',
          enTitle: '언제쯤 방문가능한가요?',
          enContent: '방문좀합시다!!',
          fileNm: 'test.png',
          processState: '처리중',
          writeDate: '2021-03-17',
          division: 'MOBILE',

          answerContent: '안녕하세요 고객님 오늘 완료입니다 감사합니다',
          answerDate: '2021-03-13',
          answerWriter: '김숙자',
        },
        {
          custNm: '김명철',
          email: 'test@nvaer.com',
          custNumber: '010-1234-5678',
          enType: 'CS문의',
          enTitle: 'CS문의드립니다',
          enContent: '너무 친절하네요',
          fileNm: 'test.png',
          processState: '처리완료',
          writeDate: '2021-03-18',
          division: '인터넷',

          answerContent: '처리완료 처리완료 처리완료 ',
          answerDate: '2021-03-13',
          answerWriter: '최숙자',
        },
        {
          custNm: '임동열',
          email: 'test@nvaer.com',
          custNumber: '010-1234-5678',
          enType: 'AS문의',
          enTitle: 'AS문의드려요',
          enContent: 'AS언제 가능해요?',
          fileNm: 'test.png',
          processState: '처리중',
          writeDate: '2021-03-19',
          division: 'MOBILE',

          answerContent: '고객님 많이기다리셨죠?',
          answerDate: '2021-03-13',
          answerWriter: '김미숙',
        },
        {
          custNm: '김명환',
          email: 'test@nvaer.com',
          custNumber: '010-1234-5678',
          enType: '요금조회 및 납부관리',
          enTitle: '요금관련 문의드립니다',
          enContent: '요금을 잘못냈어요 다시 돌려주세요',
          fileNm: 'test.png',
          processState: '처리전',
          writeDate: '2021-03-20',
          division: 'PC',

          answerContent: '처리완료입니다',
          answerDate: '2021-03-13',
          answerWriter: '김말숙',
        },
      ];

      const i = Math.floor(Math.random() * 10);
      console.info('rnadomNum:', i);

      const res = await POST_BOARD_CONTENT(this, data[i]);
      console.info('postRes:', res);
      // if (res) {
      //   alert('인서트 성공!');
      // } else {
      //   alert('인서트실패');
      // }
      // console.info('postRes:', res);
    },
  },
};
</script>

<style lang="scss" scoped></style>
