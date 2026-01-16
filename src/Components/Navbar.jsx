'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingBag, LogOut } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    document.cookie = 'auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    window.location.href = '/';
  };

  return (
    <div className="  bg-base-100 shadow-lg sticky top-0 z-50 border-b-2 border-primary/10">
      <nav className='navbar w-10/12 mx-auto'>
      <div className="flex-1">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2 "
        >
          <div className="w-14 h-14  rounded-lg flex items-center justify-center">
            <img src="/logo.png" alt=""/>
          </div>
          <span className="text-xl font-bold text-primary dark:text-gray-300">
            ShopHub
          </span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-2">
        <Link 
          href="/" 
          className="btn btn-ghost btn-sm hover:bg-primary/10 text-base"
        >
          Home
        </Link>
        <Link 
          href="/items" 
          className="btn btn-ghost btn-sm hover:bg-primary/10 text-base"
        >
          Shop
        </Link>

      <Link 
          href="/items" 
          className="btn btn-ghost btn-sm hover:bg-primary/10 text-base"
        >
          Add Item
        </Link>

        <Link 
          href="/about" 
          className="btn btn-ghost btn-sm hover:bg-primary/10 text-base"
        >
          About
        </Link>
        <Link 
          href="/contact" 
          className="btn btn-ghost btn-sm hover:bg-primary/10 text-base"
        >
          Contact
        </Link>

        <div className="divider divider-horizontal m-0"></div>

        {isLoggedIn ? (
          <div className="flex gap-2">
            <Link 
              href="/add-item" 
              className="btn btn-primary btn-sm text-white"
            >
              ➕ Add Item
            </Link>
            <button
              onClick={handleLogout}
              className="btn btn-error btn-sm text-white gap-1"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        ) : (
          <Link 
            href="/login" 
            className="btn btn-primary btn-sm text-white"
          >
            Sign Up
          </Link>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="btn btn-ghost btn-circle"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-base-100 border-t-2 border-primary/10 shadow-lg md:hidden">
          <div className="flex flex-col p-4 gap-2">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className="btn btn-ghost btn-block justify-start"
            >
              🏠 Home
            </Link>
            <Link 
              href="/items" 
              onClick={() => setIsOpen(false)}
              className="btn btn-ghost btn-block justify-start"
            >
              🛍️ Shop
            </Link>
            <Link 
              href="/about" 
              onClick={() => setIsOpen(false)}
              className="btn btn-ghost btn-block justify-start"
            >
              ℹ️ About
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="btn btn-ghost btn-block justify-start"
            >
              📧 Contact
            </Link>

            <div className="divider m-2"></div>

            {isLoggedIn ? (
              <>
                <Link 
                  href="/add-item" 
                  onClick={() => setIsOpen(false)}
                  className="btn btn-primary text-white btn-block justify-start"
                >
                  ➕ Add Item
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="btn btn-error text-white btn-block justify-start gap-2"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </>
            ) : (
              <Link 
                href="/login" 
                onClick={() => setIsOpen(false)}
                className="btn btn-primary text-white btn-block"
              >
                Sign Up
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
    </div>
  );
}