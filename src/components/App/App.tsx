import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/pokemon" />} />
      <Route path="/pokemon" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/pokemon" />} />
    </Routes>
  );
};

export default App;
