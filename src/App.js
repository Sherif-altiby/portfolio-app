/* eslint-disable no-unused-vars */
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Globalcontext from "./components/context/Globalcontext";
import i18n from "./components/i18n";
import Home from "./pages/home/Home";
import { useEffect } from "react";

function App() {
  return (
    <Router>
      <Globalcontext>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio-app" element={<Home />} />

        </Routes>
      </Globalcontext>
    </Router>
  );
}

export default App;
