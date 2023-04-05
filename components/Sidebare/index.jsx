import Link from "next/link";
import styled from "styled-components";
import { StyledUl } from "../Posts/Posts.styled";
import { Button } from "../ui/Button";
import { StyledSection } from "../ui/Section/Section.styled";
import { StyledListItem } from "../Posts/Posts.styled";
import Image from "next/image";

export const StyledTop = styled.section`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: auto 1fr;
  height: 165px;
  margin: ${({ margin }) => margin};
  background: url("./images/bg.png") no-repeat;
  background-size: 100% 100px;
  border-bottom: 1px solid ${({ theme }) => theme.bg_colors.secondary};
`;
export const StyledTopContent = styled.div`
  align-self: end;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 5px;
`;
export const StyledInfos = styled.div`
  align-self: center;
  display: grid;
  grid-template-columns: 1fr;
  gap: 5px;
`;
export const StyledAvatar = styled(Image)`
  align-self: end;
`;
export const StyledSpan = styled.span`
  color: ${({ color, theme }) => color || theme.colors.white};
`;
export const StyledButtonsContainer = styled.section`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: auto 1fr;
  margin-top: 20px;
`;

export const Sidebare = () => {
  return (
    <StyledSection bg={({ theme }) => theme.bg_colors.primary} shadow="none">
      <StyledTop margin="0px 0px 25px 0px">
        <StyledTopContent>
          <Image src="/images/avatar.png" alt="avatar" width={95} height={95} />
          <StyledInfos>
            <StyledSpan>name</StyledSpan>
            <StyledSpan color={({ theme }) => theme.colors.light_white}>
              title
            </StyledSpan>
          </StyledInfos>
        </StyledTopContent>
      </StyledTop>

      <StyledUl margin="0px 0px 15px 0px" columns="100px">
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
      </StyledUl>
      <StyledButtonsContainer>
        <Button
          justifySelf="start"
          type="button"
          padding="7px 13px"
          radius="5px"
          bgcolor={({ theme }) => theme.bg_colors.btn_secondary_color}
          margin="0px 15px 0px 0px"
        >
          Auslogen
        </Button>
        <Button
          justifySelf="start"
          as={Link}
          href="/create-post"
          padding="7px 13px"
          radius="5px"
          bgcolor={({ theme }) => theme.bg_colors.btn_primary_color}
        >
          Beitrag beginnen
        </Button>
      </StyledButtonsContainer>
    </StyledSection>
  );
};
