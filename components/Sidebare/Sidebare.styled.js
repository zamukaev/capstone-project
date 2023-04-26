import styled, { css } from "styled-components";
import Image from "next/image";
import Link from "next/link";
export const StyledSidebareContainer = styled.section`
  height: 100%;
  position: fixed;
  top: 40px;
  left: 0;
  padding: 10px;
  grid-area: sidebare;
  width: 260px;
  display: grid;
  grid-template-rows: auto auto auto 1fr;
  grid-template-columns: ${({ colums }) => colums || "1fr"};
  background: ${({ theme }) => theme?.bg_colors?.secondary};
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.35);
  border-radius: 5px;
  padding: ${(props) => props.padding || "0px"};
  margin: ${(props) => props.margin || "0px"};
  gap: 15px;
  z-index: 12;

  ${({ active }) => {
    return active
      ? css`
          opacity: 1;
          visibility: visible;
          left: 0;
          transition: all 0.5s ease-out;
          overflow: hidden;
        `
      : css`
          opacity: 0;
          visibility: hidden;
          left: -500px;
          transition: all 0.5s ease-out;
        `;
  }};

  @media${({ theme }) => theme.media.tablet} {
    width: 260px;
    left: 0;
    top: 0;
    height: 100%;
    opacity: 1;
    visibility: visible;
  }
`;
export const StyledTop = styled.section`
  position: relative;
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
  color: ${({ clr, theme }) => clr || theme.colors.white};
`;
export const StyledButtonsContainer = styled.section`
  padding: ${({ padding }) => padding};
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr auto;
  margin: ${({ margin }) => margin || "0px"};
`;

export const StyledSidebareUl = styled.ul`
  display: grid;
  grid-template-rows: ${({ rows }) => rows || "1fr"};
  grid-template-columns: ${({ columns }) => columns || "1fr"};
  margin: ${(props) => props.margin || "0px"};
  padding: ${(props) => props.padding || "0px"};
  gap: 15px;
  @media${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;
export const ListItem = styled.li`
  gap: ${({ gap }) => gap || "30px"};
  padding: ${(props) => props.padding || "0px"};
  margin: ${(props) => props.margin || "0px"};
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  &:hover {
    color: ${({ theme }) => theme.colors.light_white};
  }
`;
