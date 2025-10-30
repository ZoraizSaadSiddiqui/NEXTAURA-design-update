'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/siteConfig';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className='flex justify-center px-[24px] md:px-0'>

    <nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full h-[90px] z-50 transition-all duration-300 bg-red-600 px-20   ${
        scrolled ? 'bg-white/95 text-black backdrop-blur-md shadow-lg flex justify-center ' : '  bg-white/95 text-black backdrop-blur-md shadow-lg flex justify-center'
      }`}
    >
      <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8 justify-between items-center   flex w-full ">
            <Link href="/" className="flex items-center space-x-2 ">
            <img  className="h-[80px] w-[130px] " src={siteConfig.logo} alt='LOGO' />
   
            </Link>


            {/* nav-link-section-------------- */}
        <div className="flex justify-between items-center h-16  w-[60%]">
         
          <div
            className="bg-green-600"
          >
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:justify-around w-full">
            <div className="ml-10 flex items-baseline space-x-4 justify-around w-full  ">
              {navItems.map((item, index) => (
                <div
                  key={item.name}
                 
                >
                  <Link
                    href={item.href}
                    className={`px-5 py-4   rounded-md text-sm font-semibold transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 ${
                      scrolled 
                      ? 'text-black hover:bg-blue-50' 
                        : 'text-black hover:bg-blue-100 '
                      }`}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

         
          <div className="md:hidden">
            <button
            
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md  ${
                scrolled ? 'text-gray-700' : 'text-blue-600'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      
            {isOpen && (
          <div
          
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg"
          >
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item, index) => (
                <div
                  key={item.name}
                  
                >
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:bg-blue-50 font-semibold hover:text-blue-600 block px-3 py-3 rounded-md text-base  transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      
    </nav>
    </nav>
  );
};

export default Navbar;