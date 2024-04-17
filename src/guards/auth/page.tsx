"use client"

import { checkAuthentication } from '@/services/utility.service';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const AuthGuard: React.FC<any> = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true); // State to track loading state

  // useEffect(() => {
  //   const isAuthenticated = checkAuthentication();

  //   setTimeout(() => {
  //     setLoading(false); // Stop showing loader

  //     if (isAuthenticated) {
  //       router.push('/home'); 
  //     }
  //   }, 1000);
  // }, []);

  // if (loading) {
  //   return <CircularProgress />;
  // }


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















// import { checkAuthentication } from '@/services/utility.service';
// import { useRouter } from 'next/navigation';
// // AuthGuard.tsx
// import { useEffect } from 'react';

// const AuthGuard: React.FC<any> = ({ children }) => {
//   const router = useRouter();

//   // Check if user is authenticated
//   useEffect(() => {
//     const isAuthenticated = checkAuthentication(); // Implement your authentication logic here
//     if (isAuthenticated) {
//       router.push('/home'); // Redirect to home page if user is authenticated
//     }
//   }, []);

//   return <>{children}</>;
// };

// export default AuthGuard;