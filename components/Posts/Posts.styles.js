// styles for Posts page
import styled from "styled-components";

export const StyledSection = styled.section`
  margin: ${(props) => props.margin || "0px"};
  background: ${(props) => props?.theme?.bg_colors?.secondary};
`;
export const StyledUl = styled.ul`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  gap: 15px;
`;

export const StyledListItem = styled.li`
  display: grid;
  grid-template-rows: auto auto 1fr;
  grid-template-columns: 1fr;
  gap: 15px;
  padding: ${(props) => props.padding || "0px"};
  margin: ${(props) => props.margin || "0px"};
`;
