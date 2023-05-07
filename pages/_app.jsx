import { useEffect } from "react";
import Head from "next/head";

import { Sidebare } from "../components/Sidebare";
import { Header } from "../components/Header";
import { useAuthorizationMe, useBurgerMenuStore } from "../zustand/store";
import { authApi } from "../axios/api";
import { Theme } from "../theme/theme";

import styled, { ThemeProvider, css } from "styled-components";

import GlobalStyle from "../styles";
import { useRouter } from "next/router";

const StyledWrapper = styled.section`
  max-width:1200px;
  margin:0px auto;
  position: relative;
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.white};
  display: grid;
  grid-template-areas:
    "head head"
    "main main"
    "footer footer";
  grid-template-rows: 40px 1fr 40px;
  grid-template-columns: 1fr;
   gap:20px;
  @media${({ theme }) => theme.media.tablet} {
    grid-template-areas:
      "head head"
      "sidebare main"
      "footer footer";
    grid-template-columns: 300px 1fr;
    grid-template-rows: 40px 1fr 40px;
    gap:20px;
  }
`;

const StyledMain = styled.main`
margin:0px 10px;
  ${({ active }) => {
    return active
      ? css`
          display: none;
        `
      : css`
          grid-area: main;
          display: grid;
          gap: 30px;
          grid-template-rows: ${({ rows }) => rows};
          grid-template-columns: ${({ columns }) => columns};
        `;
  }};
`;

export default function App({ Component, pageProps }) {
  const isActive = useBurgerMenuStore((state) => state.isActive);
  const { isAuthorized, setIsAuthorized, setUser } = useAuthorizationMe(
    (state) => state
  );
  const router = useRouter();
  useEffect(() => {
    authMe();
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isActive, isAuthorized]);

  const authMe = async () => {
    try {
      const { data } = await authApi.authMe();
      setIsAuthorized(true);
      setUser(data);
    } catch (error) {
      router.push("/login");
      setIsAuthorized(false);
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
        <StyledMain rows="auto 1fr 1fr" columns="1fr">
          <Component {...pageProps} />
        </StyledMain>
      </StyledWrapper>
    </ThemeProvider>
  );
}
