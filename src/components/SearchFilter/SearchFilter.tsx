import { useCallback } from "react";
import useApi from "../../hooks/useApi";
import SearchFilterStyled from "./SearchFilterStyled";

const SearchFilter = (): JSX.Element => {
  const { loadAllPokemon } = useApi();

  const debounce = <T extends any[]>(
    callbackFunction: (...args: T) => void,
    delay: number
  ) => {
    let timerId: ReturnType<typeof setTimeout>;
    return (...args: T) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => callbackFunction(...args), delay);
    };
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncePokemon = useCallback(debounce(loadAllPokemon, 1000), [
    loadAllPokemon,
  ]);

  return (
    <>
      <SearchFilterStyled className="group">
        <input
          placeholder="Search"
          type="search"
          className="input"
          onChange={(e) => {
            debouncePokemon(e.target.value);
          }}
        />
      </SearchFilterStyled>
    </>
  );
};

export default SearchFilter;
