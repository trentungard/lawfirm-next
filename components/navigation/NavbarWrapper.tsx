'use client';
import { PropsWithChildren, useEffect, useState } from "react"

export const NavbarWrapper: React.FC<PropsWithChildren> = ({children}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
      
  return (
    <div className={`fixed top-0 h-20 w-full ${ isScrolled ? 'bg-black' : 'bg-transparent'} border-b-2 z-10`}>
      {children}
    </div>
  )
};