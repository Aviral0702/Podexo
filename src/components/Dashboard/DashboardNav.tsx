import React from "react";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import Image from "next/image";
import Logo from "./../../../public/Logo.png";
import Link from "next/link";
import Coin from "./../../../public/dollar.png";
import ProfileDropdown from "../common/ProfileDropdown";
function DashboardNav({
  user,
  userCoins,
}: {
  user?: CustomUser;
  userCoins?: CoinsType | null;
}) {
  return (
    <nav>
      <Link href="/">
        <div className="flex items-center space-x-2">
          <Image src={Logo} width={60} height={40} alt="lgo" />
          <h1 className="text-2xl ">Podexo</h1>
        </div>
      </Link>
      <div>
        <span>{userCoins?.coins ?? 0}</span>
        <Image src={Coin} alt="coin" width={30} height={30} />
      </div>
      <ProfileDropdown user={user} />

    </nav>
  );
}

export default DashboardNav;
