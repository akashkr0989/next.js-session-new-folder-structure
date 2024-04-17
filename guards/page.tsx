"use client"
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const router = useRouter();
  const [isToken, setTokenStatus] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setTokenStatus(true);
      router.replace("/home");
    } else {
      router.replace("/auth/login");
    }
  }, [router]);

  // if (!isToken) {
  //   return <div>Loading...</div>;
  // }

  return <>{children}</>;
};

export default AuthGuard;
