import {
  StyledHeader,
  StyledBurger,
  StyledSpan1,
  StyledSpan2,
  StyledNav,
  StyledMenu,
  StyledMenuItem,
  StyledLink,
} from "./Header.styled";
import { useBurgerMenuStore } from "../../zustand/store";
import { Search } from "../Search";

export const Header = () => {
  const { isActive, setIsActive } = useBurgerMenuStore((state) => state);

  const openBurgerMenuHandler = () => {
    setIsActive();
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <StyledHeader>
      <StyledBurger onClick={openBurgerMenuHandler}>
        <StyledSpan1 active={isActive && "active"}></StyledSpan1>
        <StyledSpan2 active={isActive && "active"}></StyledSpan2>
      </StyledBurger>
      <StyledNav>
        <StyledMenu>
          <StyledMenuItem>
            <StyledLink href="/">Home</StyledLink>
          </StyledMenuItem>
          <StyledMenuItem>Über mich</StyledMenuItem>
          <StyledMenuItem>Meine Projekte</StyledMenuItem>
          <StyledMenuItem>Einstellungen</StyledMenuItem>
        </StyledMenu>
      </StyledNav>
      <Search />
    </StyledHeader>
  );
};
