import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import React from "react";
import Image from "next/image";
import Logo from "./../../../public/Logo.png";
import { Button } from "../ui/button";
import Link from "next/link";
import LoginModal from "@/app/auth/LoginModal";
function Navbar({ user }: { user?: CustomUser }) {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center p-6">
        <div className="flex items-center space-x-2">
          <Image src={Logo} alt="logo" width={70} height={30} />
          <h1 className="text-2xl">Podexo</h1>
        </div>
        <div className="space-x-4">
          <Button variant="ghost">Pricing</Button>
          {user ? (
            <Link href="/dashboard">
              <Button>Dashboard</Button>
            </Link>
          ) : (
            <LoginModal />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
