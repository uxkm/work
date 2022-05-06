export default function ({ $gtm, $config }) {
  const gtmId = $config.gtm.id;
  $gtm.init(gtmId);
}
