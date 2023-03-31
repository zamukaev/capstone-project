import { StyledButton } from "./Button.styled";

export const Button = ({ href, ...otherProps }) => {
  return <StyledButton href={href && href} {...otherProps} />;
};
