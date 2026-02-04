import "./App.css";
import LayoutPage from "./layout/LayoutPage";
import LoginPage from "./page/auth/LoginPage";
import RegisterPage from "./page/auth/RegisterPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
      </Route>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/register" element={<RegisterPage/>}></Route>
    </Routes>
  );
}

export default App;
