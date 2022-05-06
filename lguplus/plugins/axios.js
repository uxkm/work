export default function ({ $axios, redirect }) {
  $axios.onRequest((config) => {
    console.log('[AXIOS LOG]' + config.url);
  });

  /**
   * 공통 API 에러 처리
   */
  $axios.onError((error) => {
    console.log('[AXIOS onError]' + error.response.status);
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      redirect('/400');
    } else if (code === 401) {
      redirect('/401');
    } else if (code === 404) {
      redirect('/404');
    } else if (code === 500) {
      redirect('/500');
    } else {
      redirect(`/${error.response.status}`);
    }
  });
}
