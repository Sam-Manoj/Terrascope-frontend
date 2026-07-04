"use client";

import { usePathname } from 'next/navigation';
import PillNav from './PillNav';

export default function Navbar() {
  const pathname = usePathname();
  const embeddedLogo = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z'/%3E%3Cpath d='M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12'/%3E%3C/svg%3E";

  return (
    <PillNav
      logo={embeddedLogo}
      logoAlt="TerraScope Logo"
      items={[
        { label: 'Home', href: '/' },
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'About Base', href: '/about' }
      ]}
      activeHref={pathname} 
      
      baseColor="#b4f44b"           
      pillColor="#141414"           
      hoveredPillTextColor="#000"   
      pillTextColor="#f8fafc"       
      
      /* FIXED: Set to false to prevent GSAP flexbox rendering glitches */
      initialLoadAnimation={false} 
    />
  );
}