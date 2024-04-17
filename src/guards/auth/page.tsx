"use client"

import { checkAuthentication } from '@/services/utility.service';
import { useRouter } from 'next/navigation';
// AuthGuard.tsx
import { useEffect } from 'react';

const AuthGuard: React.FC<any> = ({ children }) => {
  const router = useRouter();

  // Check if user is authenticated
  useEffect(() => {
    const isAuthenticated = checkAuthentication(); // Implement your authentication logic here
    if (isAuthenticated) {
      router.push('/home'); // Redirect to home page if user is authenticated
    }
  }, []);

  return <>{children}</>;
};

export default AuthGuard;














// import { useRouter } from "next/navigation";
// import React, { ReactNode, useEffect, useState } from "react";

// interface AuthGuardProps {
//   children: ReactNode;
// }

// const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
//   const router = useRouter();
//   const [isToken, setTokenStatus] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       setTokenStatus(true);
//       router.replace("/home");
//     } else {
//       router.replace("/auth/login");
//     }
//   }, [router]);

//   // if (!isToken) {
//   //   return <div>Loading...</div>;
//   // }

//   return <>{children}</>;
// };

// export default AuthGuard;
