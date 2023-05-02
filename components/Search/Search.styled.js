import styled from "styled-components";
import { TiDeleteOutline } from "react-icons/ti";
export const StyledInput = styled.input`
  cursor: pointer;
  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme?.colors?.white};
  background: ${({ theme, bg }) => bg || theme?.bg_colors?.primary};
  outline: none;
  font-size: 16px;
  padding:0px 5px;
`;
export const StyledSearchContainer = styled.section`
  position: relative;
`;
export const StyledIcon = styled(TiDeleteOutline)`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.light_white};
`;
