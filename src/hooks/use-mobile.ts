'use client'

import { useEffect, useState } from 'react';

export const useMobile = () => {
  const isWindow = typeof window !== 'undefined'
  const [isMobile, setIsMobile] = useState(isWindow ? window.innerWidth <= 600 : false);
  const handleResize = () => {
    setIsMobile(window.innerWidth < 800);
  };

  useEffect(() => {
    if (isWindow) {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isWindow]);

  return isMobile;
};
