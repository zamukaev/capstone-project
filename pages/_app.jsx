import GlobalStyle from "../styles";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import { Theme } from "../theme/theme";
import styled from "styled-components";

const StyledWrapper = styled.section`
  max-width: 1200px;
  margin: 0px auto;
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.white};
  display: grid;
  grid-template-areas:
    "head head"
    "main main"
    "footer footer";
  grid-template-rows: 50px 1fr 50px;
  grid-template-columns: 1fr 1fr;
`;

const StyledMain = styled.main`
  grid-area: main;
  display: grid;
  gap: 30px;
  grid-template-rows: auto auto 1fr;
  grid-template-columns: 1fr;
  padding: 0px 20px;
`;

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <StyledWrapper>
        <StyledMain>
          <>Heder</>
          <Component {...pageProps} />
        </StyledMain>
      </StyledWrapper>
    </ThemeProvider>
  );
}
