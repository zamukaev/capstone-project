import { useEffect } from "react";
import Head from "next/head";

import { Sidebare } from "../components/Sidebare";
import { Header } from "../components/Header";
import { useAuthMe, useBurgerMenuStore } from "../zustand/store";
import { authApi } from "../axios/api";
import { Theme } from "../theme/theme";

import styled, { ThemeProvider, css } from "styled-components";

import GlobalStyle from "../styles";

const StyledWrapper = styled.section`
  position: relative;
  margin: 0px auto;
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.white};
  display: grid;
  grid-template-areas:
    "head head"
    "main main"
    "footer footer";
  grid-template-rows: 50px 1fr 50px;
  grid-template-columns: 1fr;
  @media${({ theme }) => theme.media.tablet} {
    grid-template-areas:
      "sidebare head"
      "sidebare main"
      "sidebare footer";
    grid-template-columns: 250px 1fr;
    grid-template-rows: 40px 1fr 40px;
  }
`;

const StyledMain = styled.main`
  ${({ active }) => {
    return active
      ? css`
          display: none;
        `
      : css`
          grid-area: main;
          display: grid;
          gap: 30px;
          grid-template-rows: auto 1fr 1fr;
          grid-template-columns: 1fr;
          padding: 0px 20px;
          margin-top: 20px;
        `;
  }};
`;

export default function App({ Component, pageProps }) {
  const isActive = useBurgerMenuStore((state) => state.isActive);
  const { isAuth, setIsAuth, setUser } = useAuthMe((state) => state);

  useEffect(() => {
    authMe();
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isActive, isAuth]);

  const authMe = async () => {
    try {
      const { data } = await authApi.authMe();
      setIsAuth(true);
      setUser(data);
      console.log(data);
    } catch (error) {
      setIsAuth(false);
      console.log("error", error);
    }
  };

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <StyledWrapper>
        <Header />
        <Sidebare />
        <StyledMain>
          <Component {...pageProps} />
        </StyledMain>
      </StyledWrapper>
    </ThemeProvider>
  );
}
