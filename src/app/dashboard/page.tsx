import React from "react";
import DashboardNav from "@/components/Dashboard/DashboardNav";
import { authOptions, CustomSession } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export default async function dashboard() {
  const session: CustomSession | null = await getServerSession(authOptions);
  return (
    <div>
      <DashboardNav user={session?.user} userCoins={null} />
    </div>
  );
}
