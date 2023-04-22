import { useSearchValue } from "../../zustand/store";
import {
  StyledIcon,
  StyledInput,
  StyledSearchContainer,
} from "./Search.styled";

export const Search = () => {
  const { searchValue, setSearchValue } = useSearchValue((state) => state);

  return (
    <StyledSearchContainer>
      <StyledInput
        radius="0px"
        onChange={(event) => setSearchValue(event.target.value)}
        value={searchValue}
        placeholder="Search..."
      />
      {searchValue && <StyledIcon onClick={() => setSearchValue("")} />}
    </StyledSearchContainer>
  );
};
