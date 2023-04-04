import styled from "styled-components";

export const StyledLabel = styled.label`
  padding: ${({ padding }) => padding || "0px"};
  margin: ${({ margin }) => margin || "0px"};
  font-size: 16px;
  line-height: 23px;
  color: ${({ theme }) => theme.colors.white};
`;
