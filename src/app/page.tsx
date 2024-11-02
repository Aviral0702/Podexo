import React from "react";
import HeroSection from "@/components/landing/HeroSection";
import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import Pricing from "@/components/landing/Pricing";
function App() {
  return (
    <div className="flex flex-col">
      <Navbar/>
      <HeroSection />
      <Pricing/>
      <Footer />
    </div>
  );
}

export default App;
