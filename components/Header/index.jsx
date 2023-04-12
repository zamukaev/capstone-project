import {
  StyledHeader,
  StyledBurger,
  StyledBurgerLine,
  StyledBurgerLine2,
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
  };

  return (
    <StyledHeader>
      <StyledBurger onClick={openBurgerMenuHandler}>
        <StyledBurgerLine active={isActive && "active"}></StyledBurgerLine>
        <StyledBurgerLine2 active={isActive && "active"}></StyledBurgerLine2>
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
