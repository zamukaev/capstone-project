import styled from "styled-components";

export const StyledInput = styled.input`
  cursor: pointer;
  height: 100%;
  color: ${({ theme }) => theme?.colors?.white};
  background: ${({ theme }) => theme?.bg_colors?.primary};
  padding: 10px;
  outline: none;
  margin-left: 30px;
`;
