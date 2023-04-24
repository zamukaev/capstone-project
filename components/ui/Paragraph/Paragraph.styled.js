import styled from "styled-components";

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: ${({ size }) => size || "14px"};
  line-height: 21px;
  color: ${({ theme, color }) => color || theme.colors?.light_white};
  margin: ${({ margin }) => margin};
`;
