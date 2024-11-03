"use client";
import React ,{Suspense, useState} from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import UserAvatar from "./UserAvatar";
import { useRouter } from "next/navigation";
import LogoutModal from "@/app/auth/LogoutModal";
function ProfileDropdown({ user }: { user: CustomUser | null }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <>
        {open ?? (
            <Suspense fallback={<div>Loading...</div>}>
                <LogoutModal/>
            </Suspense>
        )}
      <DropdownMenu>
        <DropdownMenuTrigger>
          <UserAvatar image={user?.image ?? ""} name={user?.name!} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => router.push("/transactions")}>
            Transactions
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/coins-spend")}>
            Coins Spend
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default ProfileDropdown;
