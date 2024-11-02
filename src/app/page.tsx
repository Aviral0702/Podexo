import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ig from "./../../public/Logo.png";
import HeroSection from "@/components/landing/HeroSection";
import Footer from "@/components/landing/Footer";
function App() {
  return (
    <>
      <div>I am app</div>
      <Button>Click Me</Button>
      <Image src={ig} alt="logo" width={100} height={100} />
      <HeroSection />
      <Footer />
    </>
  );
}

export default App;
