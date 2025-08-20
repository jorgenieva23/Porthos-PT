import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { QuoteOfDay } from "./pages/QuoteOfDay";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <div className="flex-1">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/qod" element={<QuoteOfDay />} />
      </Routes>
    </div>
  );
};
