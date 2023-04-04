import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  justify-self: ${({ justifySelf }) => justifySelf || "center"};
  align-self: ${({ self }) => self || ""};
  text-aling: center;
  font-size: ${({ size }) => size || "12px"};
  line-height: 14px;
  background: ${({ theme }) => theme?.bg_colors?.btn_primary_color};
  padding: ${({ padding }) => padding || "0px"};
  margin: ${({ margin }) => margin || "0px"};
  box-shadow: 0px 7px 17px -10px rgba(32, 84, 219, 0.35);
  border-radius: ${({ radius }) => radius || "0px"};
  color: ${({ theme }) => theme?.colors?.white};
`;
