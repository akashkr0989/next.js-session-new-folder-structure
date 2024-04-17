"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Container, ThemeProvider } from "@mui/material";
import Head from "next/head";
import Header from "@/shared/components/header/page";
import theme from "@/styles/theme";
import AuthGuard from "@/guards/auth/page";


const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Next.js | Session",
  description: "Generated by create next app",
} as const;

export default function MyApp({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <Head>
          <title>{`${metadata.title}`}</title>
          <meta name="description" content={metadata.description || "N/A"} />
        </Head>
        <body>
        <Header />
        <Container maxWidth={false} style={{ padding: "3.5rem" }}>
          <AuthGuard>
          {children}
          </AuthGuard>
        </Container>
        </body>
      </ThemeProvider>
    </html>
  );
}
