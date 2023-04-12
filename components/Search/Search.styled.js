import styled from "styled-components";

export const StyledInput = styled.input`
  height: 100%;
  flex: 1 0 100%;
  color: ${({ theme }) => theme?.colors?.white};
  background: ${({ theme }) => theme?.bg_colors?.primary};
  padding: 10px;
  outline: none;
  margin-left: 30px;
  @media${({ theme }) => theme.tablet} {
    flex: 0 1 25%;
  } ;
`;
