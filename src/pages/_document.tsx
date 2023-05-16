import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta charSet='utf-8' />
        <link rel='icon' href='%PUBLIC_URL%/favicon.ico' />
        <link rel='apple-touch-icon' href='%PUBLIC_URL%/apple-touch-icon.png' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta
          name='description'
          content='Sygma is secure, cost-effective, and easy for developers looking for multi-chain infrastructure.'
        />
        <link rel='apple-touch-icon' href='%PUBLIC_URL%/icon.png' />
        <link rel='manifest' href='%PUBLIC_URL%/manifest.json' />
        <script
          defer
          data-domain='buildwithsygma.com'
          src='https://plausible.io/js/script.outbound-links.js'></script>
        <title>
          Sygma - The interoperability layer for cross-chain applications.
        </title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
