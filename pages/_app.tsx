import GlobalStyle from "../styles";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import { AppProps } from "next/app";
import { Theme } from "../theme/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
