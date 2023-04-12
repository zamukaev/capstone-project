import { useSearchValue } from "../../zustand/store";
import { StyledInput } from "./Search.styled";
export const Search = () => {
  const { searchValue, setSearchValue } = useSearchValue((state) => state);

  return (
    <StyledInput
      onChange={(event) => setSearchValue(event.target.value)}
      value={searchValue}
      placeholder="search..."
    />
  );
};
