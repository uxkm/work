/**
 * IE Check
 */
export default function (context) {
  const checkBrowserName = 'Internet Explorer';
  const checkBrowserVersion = 11;
  const browserName = context.$ua.browser();
  const browserVersion = parseInt(context.$ua.browserVersion());

  console.info('[middleware > ieCheck > checkBrowserName:::checkBrowserVersion]', `${checkBrowserName}:::${checkBrowserVersion}`);
  console.info('[middleware > ieCheck > browserName:::browserVersion]', `${browserName}:::${browserVersion}`);

  if (browserVersion < checkBrowserVersion && checkBrowserName === browserName) {
    console.info('[ie 10 브라우저 이하 접근시 페이지 이동]');
    context.redirect('/ie.html');
  }
}
