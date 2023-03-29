import styled from "styled-components";

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.colors?.light_white};
`;
