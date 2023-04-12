import { useState } from "react";
import styled from "styled-components";
import { useSearchValue } from "../../zustand/store";

export const StyledInput = styled.input`
  align-self: center;
  height: 100%;
  flex: 0 1 25%;
  color: ${({ theme }) => theme?.colors?.white};
  background: ${({ theme }) => theme?.bg_colors?.primary};
  padding: 10px;
  outline: none;
`;
export const Search = () => {
  const { searchValue, setSearchValue } = useSearchValue((state) => state);
  console.log(searchValue);
  return (
    <StyledInput
      onChange={(event) => setSearchValue(event.target.value)}
      value={searchValue}
      placeholder="search..."
    />
  );
};
