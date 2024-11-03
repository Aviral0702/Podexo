import React from "react";
import HeroSection from "@/components/landing/HeroSection";
import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import Pricing from "@/components/landing/Pricing";
import { authOptions, CustomSession } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
async function App() {
  //to get session
  const session: CustomSession | null = await getServerSession(authOptions);

  return (
    <div className="flex flex-col">
      <Navbar user={session?.user}/>
      <HeroSection />
      <Pricing user={session?.user}/>
      <Footer />
    </div>
  );
}

export default App;
