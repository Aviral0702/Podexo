"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";

function initiatePayment(plan: string) {
  console.log("Buying plan", plan);
}

function Pricing({user}:{user?:CustomUser}) {
    const [loading, setLoading] = useState(false);
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center ">
          Simple, Transparent Pricing
        </h2>
        <p className="text-2xl text-indigo-500 font-bold text-center mb-12">
          1 coin = 1 ₹
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className={cn("shadow-lg", { "border-indigo-500": false })}>
            <CardHeader>
              <CardTitle>Starter</CardTitle>
              <p className="text-sm text-muted-foreground">
                Perfect for individuals.
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">100 Coins</p>
              <ul className="mt-4 space-y-2">
                <li>10 Podcast Summary</li>
                <li>Top Questions Highlight</li>
                <li>AI-Powered Insights</li>
              </ul>
              <Button
                className="mt-4 w-full"
                onClick={() => initiatePayment("Starter")}
                disabled={loading}
              >
                Buy Coins
              </Button>
            </CardContent>
          </Card>

          <Card className={cn("shadow-lg", { "border-indigo-500": true })}>
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <p className="text-sm text-muted-foreground">
                Best for professionals.
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">500 Coins</p>
              <ul className="mt-4 space-y-2">
                <li>51 Podcast Summaries</li>
                <li>Top Questions Highlight</li>
                <li>AI-Powered Insights</li>
                <li>Priority Support</li>
                <li>Get One Podcast Summary Free 🚀</li>
              </ul>
              <Button
                className="mt-4 w-full"
                onClick={() => initiatePayment("Pro")}
                disabled={loading}
              >
                Buy Coins
              </Button>
            </CardContent>
          </Card>

          <Card className={cn("shadow-lg", { "border-indigo-500": false })}>
            <CardHeader>
              <CardTitle>Pro Plus</CardTitle>
              <p className="text-sm text-muted-foreground">Ideal for teams.</p>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">1000 Coins</p>
              <ul className="mt-4 space-y-2">
                <li>102 Podcast Summaries</li>
                <li>Top Questions Highlight</li>
                <li>AI-Powered Insights</li>
                <li>Dedicated Support</li>
                <li>Get two Podcast Summary Free 🚀</li>
              </ul>
              <Button
                className="mt-4 w-full"
                onClick={() => initiatePayment("Pro Plus")}
                disabled={loading}
              >
                Buy Coins
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
