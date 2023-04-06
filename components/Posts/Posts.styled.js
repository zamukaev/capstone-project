import styled from "styled-components";

export const StyledUl = styled.ul`
  display: grid;
  grid-template-rows: ${({ rows }) => rows || "1fr"};
  grid-template-columns: ${({ columns }) => columns || "1fr"};
  margin: ${(props) => props.margin || "0px"};
  padding: ${(props) => props.padding || "0px"};
  gap: 15px;
  @media${({ theme }) => theme.media?.tablet} {
    grid-template-columns: 1fr;
  }
  @media${({ theme }) => theme.media?.desktop} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const StyledListItem = styled.li`
  display: grid;
  grid-template-rows: ${({ rows }) => rows || " auto auto 1fr"};
  grid-template-columns: ${({ columns }) => columns || "1fr"};
  gap: ${({ gap }) => gap || "15px"};
  padding: ${(props) => props.padding || "0px"};
  margin: ${(props) => props.margin || "0px"};
  background: ${({ theme, bg }) => bg || theme?.bg_colors?.secondary};
  box-shadow: ${({ shadow }) => shadow || "0px 15px 25px rgba(0, 0, 0, 0.35)"};
  border-radius: ${({ radius }) => radius || "0px"};
  &:hover {
    color: ${({ hover }) => hover};
  }
`;
