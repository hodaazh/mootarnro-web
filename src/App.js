import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/home/Home";
import CardDetail from "./pages/cardDetail/CardDetail";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="card/:id" element={<CardDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
