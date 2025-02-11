'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-white shadow-md'>
      <div className='container mx-auto flex justify-between items-center py-4 px-4 lg:px-0'>
        {/* Logo or Brand name */}
        <div className='text-xl font-bold'>
          <Link href="/">Brand</Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className='lg:hidden'>
          <button onClick={toggleMenu}>
            {isOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </div>

        {/* Links for larger screens */}
        <div className='hidden lg:flex justify-center gap-10 text-blackish font-medium'>
          <Link className='navbar_link relative hover:text-yellow-600' href="/">Home</Link>
          <Link className='navbar_link relative hover:text-yellow-600' href="/collection">Shopping</Link>
          <Link className='navbar_link relative hover:text-yellow-600' href="/about">About-us</Link>
          <Link className='navbar_link relative hover:text-yellow-600' href="/contact">Contact-us</Link>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <div className='lg:hidden bg-white py-4 shadow-md'>
          <div className='flex flex-col gap-4 text-center text-blackish font-medium'>
            <Link className='hover:text-yellow-600' href="/">Home</Link>
            <Link className='hover:text-yellow-600' href="/collection">Shopping</Link>
            <Link className='hover:text-yellow-600' href="/about">About-us</Link>
            <Link className='hover:text-yellow-600' href="/contact">Contact-us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
