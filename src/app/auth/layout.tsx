"use client";
import AuthGuard from "@/guards/auth/page";
import { AppProps } from "next/app";

interface AuthLayoutProps extends AppProps {
  children: React.ReactNode; // Children to be passed as components
}

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AuthGuard>{children}</AuthGuard>
    </>
  );
}
