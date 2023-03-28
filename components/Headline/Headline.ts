import styled from "styled-components";
import { HeadlineProps } from "./HeadlineProps";

// styled h tag
export const Headline = styled.h2<HeadlineProps>`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color:${(props) => props?.theme?.colors?.white || "#FFFFFF"}
  margin: ${(props) => props.margin || "0px"};
`;
