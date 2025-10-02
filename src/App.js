import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { RoomsSection } from "./components/RoomsSection";
import { AmenitiesSection } from "./components/AmenitiesSection";
import { LocationSection } from "./components/LocationSection";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags - These would typically be handled by React Helmet or similar */}
      <Header />

      <main>
        <HeroSection />
        <RoomsSection />
        <AmenitiesSection />
        <LocationSection />
      </main>

      <Footer />
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
