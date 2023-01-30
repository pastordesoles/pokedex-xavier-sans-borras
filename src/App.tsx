import React from "react";
import { useEffect } from "react";
import useApi from "./hooks/useApi";

const App = (): JSX.Element => {
  const { loadAllPokemon } = useApi();
  useEffect(() => {
    (async () => {
      loadAllPokemon();
    })();
  }, [loadAllPokemon]);
  return <h1>In progress</h1>;
};

export default App;
