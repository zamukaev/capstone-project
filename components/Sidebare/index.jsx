import Link from "next/link";
import styled from "styled-components";
import { StyledUl } from "../Posts/Posts.styled";
import { Button } from "../ui/Button";
import { StyledListItem } from "../Posts/Posts.styled";
import Image from "next/image";
export const StyledSidebareContainer = styled.section`
  height: 100vh;
  position: absolute;
  opacity: -500px;
  visibility: hidden;
  left: 0px;
  padding: 10px;
  grid-area: sidebare;
  width: ${({ width }) => width};
  display: grid;
  grid-template-rows: ${({ rows }) => rows || "1fr"};
  grid-template-columns: ${({ colums }) => colums || "1fr"};
  background: ${({ theme, bg }) => bg || theme?.bg_colors?.secondary};
  box-shadow: ${({ shadow }) => shadow || "0px 15px 25px rgba(0, 0, 0, 0.35)"};
  border-radius: 5px;
  padding: ${(props) => props.padding || "0px"};
  margin: ${(props) => props.margin || "0px"};
  gap: 15px;

  @media${({ theme }) => theme.media.tablet} {
    height: 100vh;
    opacity: 1;
    visibility: visible;
    left: 0;
  } ;
`;
export const StyledTop = styled.section`
  position: relative;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: auto 1fr;
  height: 165px;
  margin: ${({ margin }) => margin};
  background-size: 100% 100px;
  background: url("./images/bg.png") no-repeat;
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
  padding: 10px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: auto 1fr;
  margin-top: 20px;
`;

export const StyledSidebareUl = styled.ul`
  display: grid;
  grid-template-rows: ${({ rows }) => rows || "1fr"};
  grid-template-columns: ${({ columns }) => columns || "1fr"};
  margin: ${(props) => props.margin || "0px"};
  padding: ${(props) => props.padding || "0px"};
  gap: 15px;
`;

export const Sidebare = () => {
  return (
    <StyledSidebareContainer
      width="100%"
      bg={({ theme }) => theme.bg_colors.secondary}
      shadow="none"
      rows=" auto  auto  auto 1fr"
    >
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

      <StyledSidebareUl
        margin="0px 0px 15px 0px"
        padding="0px 10px 0px 10px"
        columns="100px"
      >
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
      <StyledButtonsContainer>
        <Button
          type="button"
          padding="7px 13px"
          radius="5px"
          bgcolor={({ theme }) => theme.bg_colors.btn_secondary_color}
          margin="0px 15px 0px 0px"
        >
          Auslogen
        </Button>
        <Button
          as={Link}
          href="/create-post"
          padding="7px 13px"
          radius="5px"
          bgcolor={({ theme }) => theme.bg_colors.btn_primary_color}
        >
          Beitrag beginnen
        </Button>
      </StyledButtonsContainer>
    </StyledSidebareContainer>
  );
};
