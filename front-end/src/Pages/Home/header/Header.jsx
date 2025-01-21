<<<<<<< HEAD
import { useState, useEffect } from 'react';
=======
import  { useState, useEffect } from 'react';
>>>>>>> 1ffe993 (Added  login component)
import barLogo from '../../../assets/logo/bar-logo.png';


const Header = () => {
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

        <button className="bg-[#FFBF00] px-8 py-2 rounded-md hover:bg-yellow-400 transition-colors">
          Join Now
        </button>
      </div>
    </header>
  );
};

export default Header;
