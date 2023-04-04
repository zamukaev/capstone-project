import styled from "styled-components";
export const StyledSection = styled.section`
  display: grid;
  grid-template-rows: ${({ rows }) => rows || "1fr"};
  grid-template-columns: ${({ colums }) => colums || "1fr"};
  margin: ${(props) => props.margin || "0px"};
  background: ${(props) => props?.theme?.bg_colors?.secondary};
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.35);
  border-radius: 5px;
  padding: ${(props) => props.padding || "0px"};
  margin: ${(props) => props.margin || "0px"};
  gap: 15px;
`;
