import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";

const ASSET_VERSION = "1782384571";
const ASSET_BASE = "";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Modern Business Center</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#070B20" />
        <meta name="description" content="Modern business center, flexible office spaces, and premium amenities." />
        <link rel="preconnect" href="https://storage.googleapis.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={`${ASSET_BASE}/assets/stylesheets/global.css?v=${ASSET_VERSION}`} />
        <link rel="stylesheet" href={`${ASSET_BASE}/assets/stylesheets/landing.css?v=${ASSET_VERSION}`} />
        <link rel="manifest" href={`${ASSET_BASE}/assets/manifest/manifest.webmanifest?v=${ASSET_VERSION}`} />
        <link rel="shortcut icon" href={`${ASSET_BASE}/favicon.ico?v=${ASSET_VERSION}`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${ASSET_BASE}/assets/manifest/favicon-32x32.png?v=${ASSET_VERSION}`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${ASSET_BASE}/assets/manifest/favicon-16x16.png?v=${ASSET_VERSION}`} />
        <link rel="apple-touch-icon" href={`${ASSET_BASE}/assets/manifest/apple-touch-icon.png?v=${ASSET_VERSION}`} />
        <link rel="mask-icon" href={`${ASSET_BASE}/assets/manifest/safari-pinned-tab.svg?v=${ASSET_VERSION}`} color="#ffffff" />
      </Head>

      <Script id="site-init" strategy="beforeInteractive">
        {`
          document.documentElement.classList.remove("no-js");
          document.documentElement.classList.add("js");
          if (navigator.platform.toUpperCase().indexOf("WIN") >= 0) {
            document.documentElement.classList.add("is-win");
          }
        `}
      </Script>
      <Script
        src={`${ASSET_BASE}/assets/javascripts/browser-message/browser-message.js?v=${ASSET_VERSION}`}
        strategy="afterInteractive"
      />
      <Script
        src={`${ASSET_BASE}/assets/javascripts/shared.js?v=${ASSET_VERSION}`}
        strategy="afterInteractive"
      />
      <Script
        id="site-locale"
        strategy="beforeInteractive"
      >
        {`var LOCALES = {
            'errors': {
                    'email': 'Please enter a valid email address',
                    'required': 'Required field',
                    'tel': 'Invalid phone number',
                    'minlength': 'Please enter at least {0} characters',

                    'generic': 'Connection error, please try again',
                    'genericCode': 'Error occurred, please try again',

                    // Passwords don't match
                    'equalTo': 'Passwords don\\'t match'
                }
                    };`}
      </Script>

      <Component {...pageProps} />

      <Script
        src={`${ASSET_BASE}/assets/javascripts/landing.js?v=${ASSET_VERSION}`}
        strategy="afterInteractive"
      />
          </>
  );
}


