import styled from "styled-components";
import Image from "next/image";
export const StyledImage = styled(Image)`
  width: 100%;
`;
export const StyledContent = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  gap: 15px;
  padding: ${(props) => props.padding || "0px"};
`;
