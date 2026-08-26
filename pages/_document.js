import Document, { Html, Head, Main, NextScript } from "next/document";

class SiteDocument extends Document {
  render() {
    return (
      <Html lang="en" dir="ltr" className="has-hover no-js not-ready">
        <Head>
          <meta charSet="utf-8" />
        </Head>
        <body data-barba="wrapper">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default SiteDocument;

