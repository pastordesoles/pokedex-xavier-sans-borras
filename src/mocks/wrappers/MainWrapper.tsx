import { BrowserRouter } from "react-router-dom";
import PokemonContextProvider from "../../stores/contexts/pokemonContext/PokemonContextProvider";

interface MainWrapperProps {
  children: JSX.Element | JSX.Element[];
}

const MainWrapper = ({ children }: MainWrapperProps): JSX.Element => {
  return (
    <PokemonContextProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </PokemonContextProvider>
  );
};

export default MainWrapper;
