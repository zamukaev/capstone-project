import styled from "styled-components";

export const Headline = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 21px;
  color: ${(props) => props.theme.colors?.white || "#FFFFFF"};
  margin: ${(props) => props.margin || "0px"};
`;
