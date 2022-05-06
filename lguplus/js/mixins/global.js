export default {
  mounted() {
    const $el = $('html');
    const addClassList = [];
    if (this.$device.isAndroid) {
      addClassList.push('is-android');
    }
    if (this.$device.isDesktop) {
      addClassList.push('is-desktop');
    }
    if (this.$device.isDesktopOrTablet) {
      addClassList.push('is-desktopOrTablet');
    }
    if (this.$device.isIos) {
      addClassList.push('is-ios');
    }
    if (this.$device.isMacOS) {
      addClassList.push('is-macOS');
    }
    if (this.$device.isMobile) {
      addClassList.push('is-mobile');
    }
    if (this.$device.isMobileOrTablet) {
      addClassList.push('is-mobileOrTablet');
    }
    if (this.$device.isTablet) {
      addClassList.push('is-tablet');
    }
    if (this.$device.isWindows) {
      addClassList.push('is-windows');
    }

    const browserName = this.$ua.browser();
    addClassList.push(`is-browser-${browserName}`);

    const browserVersion = this.$ua.browserVersion();
    addClassList.push(`is-browserVersion-${browserVersion}`);

    const browserVendor = this.$ua.browserVendor();
    addClassList.push(`is-browserVendor-${browserVendor}`);

    console.info('[$ua]', this.$ua);

    $el.addClass(addClassList);
  },
};
