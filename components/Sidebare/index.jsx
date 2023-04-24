import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import { Button } from "../ui/Button";
import { StyledListItem } from "../Posts/Posts.styled";
import {
  StyledSidebareContainer,
  StyledTop,
  StyledTopContent,
  StyledInfos,
  StyledSpan,
  StyledSidebareUl,
  StyledButtonsContainer,
  ListItem,
  StyledLink,
} from "./Sidebare.styled";

import { useAuthorizationMe, useBurgerMenuStore } from "../../zustand/store";

import { useRouter } from "next/router";

export const Sidebare = () => {
  const router = useRouter();
  const { isAuthorized, setIsAuthorized } = useAuthorizationMe(
    (state) => state
  );
  const { isActive, setIsActive } = useBurgerMenuStore((state) => state);
  const [windowWidth, setWindowWidth] = useState(() => {
    if (typeof window !== "undefined") {
      return [window.innerWidth, window.innerHeight];
    }
  });

  const handleLogout = () => {
    localStorage.setItem("token", "");
    windowWidth && windowWidth[0] < 694 && setIsActive();
    setIsAuthorized(false);
    if (router.pathname === "/create-post") {
      router.push("/");
    }
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <StyledSidebareContainer active={isActive && "active"}>
      <StyledTop margin="0px 0px 25px 0px">
        <StyledTopContent>
          <Image src="/images/avatar.png" alt="avatar" width={95} height={95} />
          <StyledInfos>
            <StyledSpan>name</StyledSpan>
            <StyledSpan clr={({ theme }) => theme.colors.light_white}>
              title
            </StyledSpan>
          </StyledInfos>
        </StyledTopContent>
      </StyledTop>

      <StyledSidebareUl
        margin="0px 0px 15px 0px"
        padding="0px 10px 0px 10px"
        columns="100px"
      >
        <ListItem onClick={setIsActive}>
          <StyledLink href="/">Home</StyledLink>
        </ListItem>
        <StyledListItem
          shadow="none"
          bg="none"
          gap="2px"
          hover={({ theme }) => theme.colors.light_white}
        >
          Über mich
        </StyledListItem>
        <StyledListItem
          shadow="none"
          bg="none"
          gap="2px"
          hover={({ theme }) => theme.colors.light_white}
        >
          Meine Projekte
        </StyledListItem>
        <StyledListItem
          shadow="none"
          bg="none"
          gap="2px"
          hover={({ theme }) => theme.colors.light_white}
        >
          Einstellungen
        </StyledListItem>
      </StyledSidebareUl>
      <StyledButtonsContainer padding="15px">
        {isAuthorized ? (
          <Button
            onClick={handleLogout}
            type="button"
            padding="10px 13px"
            radius="5px"
            bgcolor={({ theme }) => theme.bg_colors.btn_secondary_color}
            margin="0px 15px 0px 0px"
          >
            Abmelden
          </Button>
        ) : (
          <Button
            onClick={windowWidth && windowWidth[0] < 694 && setIsActive}
            padding="10px 13px"
            radius="5px"
            bgcolor="#498C0E"
            margin="0px 15px 0px 0px"
            as={Link}
            href="/login"
          >
            Anmelden
          </Button>
        )}
        <Button
          as={Link}
          onClick={windowWidth && windowWidth[0] < 694 && setIsActive}
          href="/create-post"
          padding="10px 13px"
          radius="5px"
          bgcolor={({ theme }) => theme.bg_colors.btn_primary_color}
        >
          Beitrag beginnen
        </Button>
      </StyledButtonsContainer>
    </StyledSidebareContainer>
  );
};
