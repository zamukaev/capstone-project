import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const StyledImage = styled(Image)`
  width: 100%;
  border-radius: ${(props) => props.radios || "5px 5px 0px 0px"};
`;
export const StyledContent = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  gap: 15px;
  padding: ${(props) => props.padding || "0px"};
`;
export const StyledLink = styled(Link)`
  margin: ${(props) => props.margin || "0px"};
  &:visited {
    color: red;
  }
`;
