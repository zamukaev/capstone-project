import styled from "styled-components";
import { TiDeleteOutline } from "react-icons/ti";
export const StyledInput = styled.input`
  cursor: pointer;
  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme?.colors?.white};
  background: ${({ theme }) => theme?.bg_colors?.primary};
  padding: 10px;
  outline: none;
  margin-left: 30px;
  font-size: 16px;
`;
export const StyledSearchContainer = styled.section`
  position: relative;
`;
export const StyledIcon = styled(TiDeleteOutline)`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.light_white};
`;
