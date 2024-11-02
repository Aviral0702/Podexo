"use client";
import React from "react";
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";

interface props {
    children?: React.ReactNode;
}

export default function SessionProvider({children}:props){
    return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
}