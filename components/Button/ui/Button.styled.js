import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  justify-self: ${(props) => props.start || "start"};
  text-aling: center;
  font-size: ${(props) => props.size || "12px"};
  line-height: 14px;
  background: ${(props) => props.theme.bg_colors.btn_primary_color};
  padding: ${(props) => props.padding || "0px"};
  margin: ${(props) => props.margin || "0px"};
  box-shadow: 0px 7px 17px -10px rgba(32, 84, 219, 0.35);
  border-radius: ${(props) => props.radius || "0px"};
  color: ${(props) => props.theme.colors.white};
`;

export const StyledLink = styled(StyledButton)`
  cursor: pointer;
`;
