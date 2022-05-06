import { ARIA_BV_PAGINATION } from '../constants/aria';

/**
 * bootstrapVue 초기화 셋팅
 * 트리쉐이킹(tree shaking)을 고려하여 사용할 항목만 설정한다.
 */
export const bootstrapVueConfig = {
  icons: false,
  bootstrapCSS: false, // Or `css: false`
  bootstrapVueCSS: false, // Or `bvCSS: false`,
  // componentPlugins: ['CollapsePlugin', 'TablePlugin', 'CardPlugin', 'ButtonPlugin', 'BreadcrumbPlugin', 'PaginationPlugin', 'FormInputPlugin', 'TooltipPlugin', 'ModalPlugin'],
  // directivePlugins: ['VBTogglePlugin'],
  // components: ['BCollapse', 'BTable', 'BCard', 'BButton', 'BBreadcrumb', 'BPagination', 'BFormInput', 'BTooltip', 'VBModal'],
  // directives: ['VBToggle'],
  config: {
    BPagination: {
      labelFirstPage: ARIA_BV_PAGINATION.LABEL_FIRST_PAGE,
      labelPrevPage: ARIA_BV_PAGINATION.LABEL_PREV_PAGE,
      labelNextPage: ARIA_BV_PAGINATION.LABEL_NEXT_PAGE,
      labelLastPage: ARIA_BV_PAGINATION.LABEL_LAST_PAGE,
      labelPage: ARIA_BV_PAGINATION.LABEL_PAGE,
      ariaLabel: ARIA_BV_PAGINATION.ARIA_LABEL,
    },
    BModal: {
      centered: true,
      noFade: true,
      noCloseOnBackdrop: true,
    },
  },
};
