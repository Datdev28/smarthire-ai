import "./App.css";
import LayoutPage from "./layout/LayoutPage";
import LoginPage from "./page/auth/LoginPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
