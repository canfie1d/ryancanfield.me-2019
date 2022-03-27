import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8"/>
        <meta name="msapplication-config" content="none"/>
        <meta name="description" content="This website serves as the portfolio of UI engineer, Ryan Canfield."/>
        <meta property="og:title" content="Ryan Canfield- Design &amp; Development"/>
        <meta property="og:site_name" content="ryancanfield.me"/>
        <meta property="og:url" content="http://ryancanfield.me"/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="This website serves as the portfolio of UI engineer, Ryan Canfield."/>
        <meta property="og:image" content="%PUBLIC_URL%/media/og-image.png"/>
        <meta name="theme-color" content="#2f3634"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;
