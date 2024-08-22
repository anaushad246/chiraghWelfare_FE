import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import logo1 from '/src/assets/logo1.jpg'; // Ensure this path is correct


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close the menu if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-gradient-to-r from-blue-500 to-teal-500 shadow-lg pb-4 ">
      <div className=" flex flex-row items-center justify-around lg:justify-evenly md:gap-0 p-2 h-fit fixed top-0 left-0 right-0 z-50 md:static 
       bg-gradient-to-r from-blue-500 to-teal-500 shadow-lg">
  {/* Logo */}
  <div className="flex flex-row items-center">
    <img
      src={logo1}
      alt="Chiragh Welfare Foundation"
      className="h-10 w-10 md:h-20 md:w-20 rounded-full border-4 border-white hover:opacity-80 transition duration-300"
    />
  </div>

  {/* Navigation Menu */}
  <nav
    // ref={menuRef}
    className={`${
      isOpen ? 'block' : 'hidden'
    } absolute top-16 lg:top-8  left-0 right-0 bg-gray-800 md:bg-inherit md:static  md:flex md:flex-row md:gap-2 p-4  md:p-2   md:mt-0 justify-center z-10`}
    aria-label="Main navigation menu"
  >
    <ul className="flex flex-col md:flex-row md:space-x-6 items-center justify-center  font-semibold">
      <li className="hover:text-gray-200  py-2 md:py-0  ">
        <Link to="/" className="text-white" onClick={closeMenu}>
          Home
        </Link>
      </li>
      <li className="hover:text-gray-200 py-2 md:py-0">
        <Link to="/getInvolved" className="text-white" onClick={closeMenu}>
          Get Involved
        </Link>
      </li>
      <li className="hover:text-gray-200 py-2 md:py-0">
        <Link to="/aboutUs" className="text-white" onClick={closeMenu}>
          About Us
        </Link>
      </li>
      <li className="hover:text-gray-200 py-2 md:py-0">
        <Link to="/gallery" className="text-white" onClick={closeMenu}>
          Gallery
        </Link>
      </li>
      <li className="hover:text-gray-200 py-2 md:py-0">
        <Link to="/contactUs" className="text-white" onClick={closeMenu}>
          Contact Us
        </Link>
      </li>
    </ul>
  </nav>

  {/* Mobile Menu Button */}
  <button
    className="md:hidden text-white focus:outline-none "
    onClick={toggleMenu}
    aria-label="Toggle navigation menu"
  >
    {/* <FontAwesomeIcon icon={faBars} className="text-2xl" /> */}
    {
      isOpen ? <FontAwesomeIcon icon={faXmark}  className='text-2xl'/> : <FontAwesomeIcon icon={faBars} className="text-2xl" />
    }
  </button>

  {/* Donate Button */}
  <button className=" md:hidden">
    <Link to="/donate" className="text-lg text-white bg-blue-600 hover:bg-blue-800 border-none p-2 py-1 rounded-lg">
      Donate
    </Link>
  </button>
</div>



      {/* Title Section */}
      <div className="mt-12  py-12 flex flex-row items-center justify-center">
      <div className="text-black px-4"><span className='ml-0 text-xl font-bold text-left'>Welcome to</span> 
        <h1 className="text-white text-lg md:text-3xl font-serif tracking-wide text-center  ">
          CHIRAGH WELFARE FOUNDATION (Regd.)
        </h1>
        <h2 className="text-sm md:text-base text-gray-200 font-urdu text-center">
          چراغ ویلفیر فاؤنڈیشن
        </h2>
        <p className="text-xs md:text-sm  font-semibold text-center p-1">
          Let’s Spread the Light
        </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
