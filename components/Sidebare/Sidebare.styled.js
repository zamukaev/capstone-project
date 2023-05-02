import styled, { css } from "styled-components";
import Image from "next/image";
import Link from "next/link";
export const StyledSidebareContainer = styled.section`
  position:absolute;
  top:40px;
  left: 0;
  display: grid;
  grid-template-rows:${({ rows }) => rows || "auto auto 20px 1fr"};
  grid-template-columns: ${({ colums }) => colums || "1fr"};
  padding: 10px;
  grid-area: sidebare;
  width: 300px;
  height:100%;
  background: url("./images/bg.png") no-repeat;
  background-size: 100% 180px;
  background-color:${({ theme }) => theme.bg_colors.secondary};
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.35);
  border-radius: 5px;
  padding: ${(props) => props.padding || "0px"};
  margin: ${(props) => props.margin || "0px"};
  z-index:100;
  ${({ active }) => {
    return active
      ? css`
          opacity: 1;
          visibility: visible;
         
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
    position:sticky;
    width: 300px;
    max-height:500px;
    left: 0;
    top: 40px;
    opacity: 1;
    visibility: visible;
  }
`;

export const StyledTopContent = styled.div`
  margin-top:115px;
  display: grid;
  justify-items:center;
  grid-template-columns: 1fr;
  grid-template-rows:1fr 1fr;
  border-bottom:1px solid #1C1C1C;
  margin-bottom:10px;
`;
export const StyledInfos = styled.div`
  display: grid;
  justify-items:center;
  grid-template-columns: 1fr;
  grid-template-rows:auto auto 1fr;
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
  grid-template-columns: auto 1fr;
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
