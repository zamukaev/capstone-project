import styled, { css } from "styled-components";
import Image from "next/image";

export const StyledFormSection = styled.section`
  max-width: ${({ width }) => width};
  position:${({ position }) => position || ""}
  display: grid;
  align-items: center;
  grid-template-rows: ${({ rows }) => rows || "auto 1fr"};
  grid-template-columns: ${({ columns }) => columns || "1fr"};
  background: ${({ theme }) => theme?.bg_colors?.primary};
  border-radius: 5px;
  padding: 25px;
  margin: ${(props) => props.margin || "0px"};
  gap: 15px;
  ${({ position }) => {
    return (
      position &&
      css`
        position: fixed;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        height: 100%;
        margin: 0px;
        display: grid;
        grid-template-rows: ${({ rows }) => rows || "1fr"};
        grid-template-columns: ${({ columns }) => columns || "1fr"};
       
      `
    );
  }}
`;
export const StyledImageContainer = styled.section`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr;
`;
export const StyledImage = styled(Image)`
  width: 100%;
  height: 150px;
  @media${({ theme }) => theme?.media?.tablet} {
    height: 250px;
  }
  margin-bottom: 10px;
`;
