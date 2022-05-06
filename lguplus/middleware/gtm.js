/**
 * GTM
 * { $axios, store, route }
 */
export default function (context) {
  // console.info('[middleware]');
  const pageInfo = {
    profile: {
      profileInfo: {
        user_cust_no: 'abcd123456efg',
        user_login_status: 'use',
        user_gender: 'M',
        user_age: '25',
        user_mobile_device_brand_model: '',
        user_prd_list: '',
        user_prd_plan_list: '',
      },
    },
    page: {
      pageDepthInfo: {
        page_depth_lv1: '개인',
      },
    },
  };
  context.$gtm.push(pageInfo);
}
