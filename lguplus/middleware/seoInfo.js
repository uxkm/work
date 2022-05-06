/**
 * SEO 정보 가져오기
 * { $axios, store, route }
 */
export default async function (context) {
  // console.info('[middleware > seoInfo > context]', context.route);
  // const payload = await $axios.$get('https://api.nuxtjs.dev/posts');
  try {
    const response = await context.$axios.$get('/todos');
    console.log(response);
  } catch (error) {
    const code = parseInt(error.response && error.response.status);
    if (code === 404) {
      context.redirect('/404');
    }
  }

  // console.info('[middleware > seoInfo > payload]', payload);
  // store.commit('SEO_INFO_MUTATION', payload);

  // If the user is not authenticated
  // if (!store.state.authenticated) {
  //   return redirect('/login')
  // }
}
