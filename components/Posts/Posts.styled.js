import styled from "styled-components";

export const StyledSection = styled.section`
  margin: ${(props) => props.margin || "0px"};
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
  padding: ${(props) => props.padding || "15px"};
  margin: ${(props) => props.margin || "0px"};
  background: ${(props) => props?.theme?.bg_colors?.secondary};
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.35);
  border-radius: 5px;
`;
