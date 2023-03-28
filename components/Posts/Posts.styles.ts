// styles for Posts page
import styled from "styled-components";
import Image from "next/image";
import { StyledSelectionProps } from "./PostsType";

export const StyledSection = styled.section<StyledSelectionProps>`
  margin: ${(props) => props.margin || "0px"};
  background: ${(props) => props?.theme?.bg_colors?.secondary};
`;
export const StyledImage = styled(Image)`
  width: 100%;
`;
export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 26px;
`;
