import Head from "next/head";
import { GlobalStyle } from "../styles/GlobalStyles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Jost&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}
