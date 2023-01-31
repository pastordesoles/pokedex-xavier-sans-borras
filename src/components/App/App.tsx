import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/pokemon" element={<HomePage />} />
    </Routes>
  );
};

export default App;
