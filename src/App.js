import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import LegalPage from "./pages/LegalPage";
import ContestPage from "./pages/ContestPage";
import PrizePage from "./pages/PrizePage";
import MobileGame from "./pages/mobileGamePage";
import WinPage from "./pages/win";
import LosePage from "./pages/lose";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<LogIn />} />
        <Route path="/legal" element={<LegalPage />} />
        <Route path="/contest" element={<ContestPage />} />
        <Route path="/prize" element={<PrizePage />} />
        <Route path="/mobile-game" element={<MobileGame />} />
        <Route path="/win" element={<WinPage />} />
        <Route path="/lose" element={<LosePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
