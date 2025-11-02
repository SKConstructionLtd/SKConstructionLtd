'use client';

import { useEffect, useRef } from 'react';

export default function GalleryAnimations({ children }: { children: React.ReactNode }) {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.style.opacity = '0';
      headerRef.current.style.transform = 'translateY(50px)';
      
      setTimeout(() => {
        if (headerRef.current) {
          headerRef.current.style.transition = 'all 1s ease-out';
          headerRef.current.style.opacity = '1';
          headerRef.current.style.transform = 'translateY(0)';
        }
      }, 100);
    }
  }, []);

  return <div ref={headerRef}>{children}</div>;
}