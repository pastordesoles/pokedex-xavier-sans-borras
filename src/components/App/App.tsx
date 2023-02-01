import { Navigate, Route, Routes } from "react-router-dom";
import Details from "../../pages/Details/Details";
import HomePage from "../../pages/HomePage/HomePage";

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/pokemon" />} />
      <Route path="/pokemon" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/pokemon" />} />
      <Route path="/pokemon/:pokemonName" element={<Details />} />
    </Routes>
  );
};

export default App;
