import styled, { css } from "styled-components";
import Link from "next/link";

export const StyledHeader = styled.header`
  display:flex;
  align-items: center;
  position:fixed;
  top:0px;
  left:0;
  width:100vw;
  height:40px;
  grid-area: head;
  margin-bottom:40px
  color: red;
  background:#0D0D0D;
  z-index:10;
 
`;
export const StyledBurger = styled.div`
  padding: 20px;
  position: relative;
  @media${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;
export const StyledSpan1 = styled.span`
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
export const StyledSpan2 = styled.span`
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
    flex: 0 1 25%;
    margin-left: 270px;
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
