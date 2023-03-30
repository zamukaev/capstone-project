import { StyledButton, StyledLink } from "./Button.styled";

export const Button = ({ href, ...otherProps }) => {
  return true ? (
    <StyledLink href={href} {...otherProps} />
  ) : (
    <StyledButton {...otherProps} />
  );
};
