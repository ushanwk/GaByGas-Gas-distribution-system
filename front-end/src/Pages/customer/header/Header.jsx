<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import { useState, useEffect } from 'react';
>>>>>>> fa041b8e3583ddd46a48ab31916e58685a064646
import barLogo from '../../../assets/logo/bar-logo.png';
import proImg from '../../../assets/pages/customer-page/profile.png'

function Header() {
  const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-lg'
            : 'bg-transparent border-b border-white/30'
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
  
          <img
            src={barLogo}
            alt="Logo"
            className={`transition-all duration-300 ${
              scrolled ? 'w-56' : 'w-64'
            }`}
          />
  
        <img
          src={proImg} // Path to your additional image
          alt="User Icon"
          className="w-[50px] h-[50px] rounded-full cursor-pointer" // Example styling
        />
        </div>
      </header>
    );
}

export default Header