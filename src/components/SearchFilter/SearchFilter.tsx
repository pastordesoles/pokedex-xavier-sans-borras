import { useCallback } from "react";
import useApi from "../../hooks/useApi";
import SearchFilterStyled from "./SearchFilterStyled";

const SearchFilter = (): JSX.Element => {
  const { loadPokemonDetail } = useApi();

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
  const debouncePost = useCallback(debounce(loadPokemonDetail, 1000), [
    loadPokemonDetail,
  ]);

  return (
    <>
      <SearchFilterStyled className="group">
        <input
          placeholder="Search"
          type="search"
          className="input"
          onChange={(e) => {
            debouncePost(e.target.value);
          }}
        />
      </SearchFilterStyled>
    </>
  );
};

export default SearchFilter;
