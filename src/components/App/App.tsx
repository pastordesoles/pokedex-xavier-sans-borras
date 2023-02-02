import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import Loader from "../Loader/Loader";

const Details = lazy(() => import("../../pages/Details/Details"));

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/pokemon" />} />
      <Route path="/pokemon" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/pokemon" />} />
      <Route
        path="/pokemon/:pokemonName"
        element={
          <Suspense fallback={<Loader />}>
            <Details />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default App;
