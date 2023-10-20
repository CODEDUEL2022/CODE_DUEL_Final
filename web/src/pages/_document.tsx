import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ja">
      <Head />
      <body
        style={{
          margin: 0,
          padding: 0,
          color: '#fff',
          fontFamily: 'Gill Sans, sans-serif',
          textShadow: '0 0 5px #d3fffd',
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
