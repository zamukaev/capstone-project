import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const StyledImage = styled(Image)`
  width: 100%;
  height: 150px;
  @media${({ theme }) => theme?.media?.tablet} {
    height: 250px;
  }
  @media${({ theme }) => theme?.media?.desktop} {
    height: 350px;
  }
  border-radius: ${({ radius }) => radius || "0px"};
`;

export const StyledContent = styled.div`
  position: relative;
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
