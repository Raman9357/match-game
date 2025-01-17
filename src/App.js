import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import LegalPage from "./pages/LegalPage";
import ContestPage from "./pages/ContestPage";
import PrizePage from "./pages/PrizePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/legal" element={<LegalPage />} />
        <Route path="/contest" element={<ContestPage />} />
        <Route path="/prize" element={<PrizePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
