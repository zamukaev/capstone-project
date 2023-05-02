import styled, { css } from "styled-components";
import Link from "next/link";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0px;
  left: 0;
  width: 100vw;
  height: 40px;
  grid-area: head;
  background-color:${({ theme }) => theme.bg_colors.secondary};
  z-index: 10;
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.35);
  
`;
export const StyledContainer = styled.section`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: auto 1fr;
  max-width:1200px;
  margin:0px auto;
  height:100%;
  @media${({ theme }) => theme.media.tablet} {
    grid-template-columns:1fr auto 1fr;
  } ;
`
export const StyledBurger = styled.div`
  cursor: pointer;
  padding: 20px 40px 20px 15px;
  position: relative;
  @media${({ theme }) => theme.media.tablet} {
    display: none;
  } ;
`;
export const StyledBurgerLine = styled.span`
  ${({ active }) => {
    return active
      ? css`
          &::before {
            content: "";
            position: absolute;
            top: 15px;
            left: 20px;
            height: 2px;
            width: 32px;
            background: ${({ theme }) => theme.colors.white};
            transition: all 0.5s ease-out;
            transform: rotate(45deg);
          }
          &::after {
            content: "";
            position: absolute;
            top: 15px;
            left: 20px;
            height: 2px;
            width: 32px;
            background: ${({ theme }) => theme.colors.white};
            transition: all 0.5s ease-out;
            transform: rotate(-45deg);
          }
        `
      : css`
          &::before {
            content: "";
            position: absolute;
            top: 10px;
            left: 20px;
            height: 2px;
            width: 32px;
            background: ${({ theme }) => theme.colors.white};
            transition: all 0.5s ease-out;
          }
          &::after {
            content: "";
            position: absolute;
            top: 18px;
            left: 20px;
            height: 2px;
            width: 32px;
            transition: all 0.5s ease-out;
            background: ${({ theme }) => theme.colors.white};
          }
        `;
  }}
`;
export const StyledBurgerLine2 = styled.span`
  ${({ active }) => {
    return active
      ? css`
          &::before {
            content: "";
            position: absolute;
            top: 30px;
            left: 20px;
            height: 2px;
            width: 32px;
            transition: all 0.5s ease-out;
            background: ${({ theme }) => theme.colors.white};
          }
        `
      : css`
          &::before {
            content: "";
            position: absolute;
            top: 26px;
            left: 20px;
            height: 2px;
            width: 32px;
            transition: all 0.5s ease-out;
            background: ${({ theme }) => theme.colors.white};
          }
        `;
  }}
`;

export const StyledNav = styled.nav`
  display: none;
  @media${({ theme }) => theme.media.tablet} {
    align-self: center;
    display: block;
  }
`;

export const StyledMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 24px;
`;
export const StyledMenuItem = styled.li`
  cursor: pointer;
`;
export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  &:hover {
    color: ${({ theme }) => theme.colors.light_white};
  }
`;
