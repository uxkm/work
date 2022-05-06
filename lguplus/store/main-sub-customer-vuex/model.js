export const BOARD_LIST_INFO_MODEL = () => {
  return {
    totRow: 0,
    perPage: 5,
    limit: 5,
    list: null,
  };
};

export const BOARD_WRITE_INFO_MODEL = () => {
  return {
    veeMode: 'passive',
    formInfo: {
      name: null,
      email_0: null,
      email_1: null,
      email_2: {
        selected: '',
        selectInfo: [
          {
            id: 0,
            name: '직접입력',
            val: '',
          },
          {
            id: 1,
            name: 'naver.com',
            val: 'naver.com',
          },
          {
            id: 2,
            name: 'gmail.com',
            val: 'gmail.com',
          },
          {
            id: 3,
            name: 'nate.com',
            val: 'nate.com',
          },
          {
            id: 4,
            name: 'daum.net',
            val: 'daum.net',
          },
        ],
      },
      phone_0: {
        selected: '010',
        selectInfo: ['010', '011', '016', '017', '018', '019'],
      },
      phone_1: null,
      type: {
        selected: '',
        selectInfo: [
          {
            id: 0,
            name: 'AS문의',
            val: 'AS문의',
          },
          {
            id: 1,
            name: '요금제문의',
            val: '요금제문의',
          },
          {
            id: 2,
            name: '기타',
            val: '기타',
          },
        ],
      },
      title: null,
      content: null,
      file: null,
    },
  };
};
