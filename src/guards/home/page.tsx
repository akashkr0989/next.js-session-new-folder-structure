"use client";
import { checkAuthentication } from '@/services/utility.service';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const HomeGuard: React.FC<any> = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true); // State to track loading state

  // show loader
  // useEffect(() => {
  //   const isAuthenticated = checkAuthentication();

  //   setTimeout(() => {
  //     setLoading(false); 

  //     if (!isAuthenticated) {
  //       router.push('auth/login');
  //     }
  //   }, 1000); 
  // }, []);

  // if (loading) {
  //   return <CircularProgress />;
  // }

  // without loader
    useEffect(() => {
    const isAuthenticated = checkAuthentication();
    if (!isAuthenticated) {
      router.push('auth/login'); // Redirect to login page if user is not authenticated
    }
  }, []);

  return <>{children}</>;
};

export default HomeGuard;





















// import { checkAuthentication } from '@/services/utility.service';
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';

// const HomeGuard: React.FC<any> = ({ children }) => {
//   const router = useRouter();

//   // Check if user is authenticated
//   useEffect(() => {
//     const isAuthenticated = checkAuthentication();
//     if (!isAuthenticated) {
//       router.push('auth/login'); // Redirect to login page if user is not authenticated
//     }
//   }, []);

//   return <>{children}</>;
// };

// export default HomeGuard;
