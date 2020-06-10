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

        <script src="https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.15.0/firebase-auth.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.15.0/firebase-firestore.js"></script>
      </Head>
      <Component {...pageProps} />

      <GlobalStyle />
    </>
  );
}
