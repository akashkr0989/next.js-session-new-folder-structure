"use client";
import { checkAuthentication } from '@/services/utility.service';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const HomeGuard: React.FC<any> = ({ children }) => {
  const router = useRouter();

  // Check if user is authenticated
  useEffect(() => {
    const isAuthenticated = checkAuthentication();
    if (!isAuthenticated) {
      router.push('auth/login'); // Redirect to login page if user is not authenticated
    }
  }, []);

  return <>{children}</>;
};

export default HomeGuard;
