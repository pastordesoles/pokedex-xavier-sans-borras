import { Navigate, Route, Routes } from "react-router-dom";
import Details from "../../pages/Details/Details";
import FavouritesPage from "../../pages/FavouritesPage/FavouritesPage";
import HomePage from "../../pages/HomePage/HomePage";
import Header from "../Header/Header";

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/pokemon" />} />
        <Route path="/pokemon" element={<HomePage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="*" element={<Navigate to="/pokemon" />} />
        <Route path="/pokemon/:pokemonName" element={<Details />} />
      </Routes>
    </>
  );
};

export default App;
