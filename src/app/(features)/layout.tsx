"use client";
import HomeGuard from "@/guards/home/page";
import Header from "@/shared/components/header/page";
import { AppProps } from "next/app";

interface AuthLayoutProps extends AppProps {
  children: React.ReactNode; // Children to be passed as components
}

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HomeGuard>
        {children}
      </HomeGuard>
    </>
  );
}
