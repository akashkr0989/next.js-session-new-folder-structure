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



// ----------------------------------------------------

// import { checkAuthentication } from '@/services/utility.service';
// import { usePathname, useRouter } from 'next/navigation';
// import { useEffect } from 'react';

// const AuthGuard: React.FC<any> = ({ children }) => {
//   const router = useRouter();
//   const pathname = usePathname()


//   // Check if user is authenticated
//   useEffect(() => {
//     console.log(router)
//     const isAuthenticated = checkAuthentication(); // Implement your authentication logic here
//     const currentRoute = pathname;

//     if (!isAuthenticated && currentRoute !== '/auth/login' && currentRoute !== '/auth/forgot-password') {
//       router.push('/auth/login'); // Redirect to login page if user is not authenticated and not already on the login page or forgot password page
//     }
//   }, [pathname]); // Adding router.pathname as a dependency to trigger redirection when the route changes

//   return <>{children}</>;
// };

// export default AuthGuard;