// styles for Posts page
import styled from "styled-components";

export const StyledMain = styled.main`
  grid-area: main;
  display: grid;
  gap: 30px;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;
  padding: 0px 20px;
`;

export const StyledUl = styled.ul`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  gap: 15px;
`;

export const StyledListItem = styled.li`
  display: grid;
  grid-template-rows: ${(props) => props.rows || "auto auto 1fr"};
  grid-template-columns: 1fr;
  gap: 15px;
  padding: ${(props) => props.padding || "0px"};
  margin: ${(props) => props.margin || "0px"};
  background: ${(props) => props?.theme?.bg_colors?.secondary};
`;
