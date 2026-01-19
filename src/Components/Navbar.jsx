'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingBag, LogOut } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check for auth cookie
    const checkAuth = () => {
      const authCookie = document.cookie.split('; ').find(row => row.startsWith('auth='));
      if (authCookie && authCookie.split('=')[1] === 'true') {
        setIsLoggedIn(true);
      }
    };
    checkAuth();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    document.cookie = 'auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    window.location.href = '/';
  };

  return (
    <div className="bg-base-100/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-white/10">
      <nav className='navbar w-11/12 max-w-7xl mx-auto px-0'>
        <div className="flex-1">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-primary/50 shadow-lg group-hover:scale-105 transition-transform">
              <ShoppingBag size={20} />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ShopHub
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-1 items-center">
          <Link
            href="/"
            className="btn btn-ghost btn-sm text-base-content hover:bg-white/5"
          >
            Home
          </Link>
          <Link
            href="/items"
            className="btn btn-ghost btn-sm text-base-content hover:bg-white/5"
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="btn btn-ghost btn-sm text-base-content hover:bg-white/5"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="btn btn-ghost btn-sm text-base-content hover:bg-white/5"
          >
            Contact
          </Link>

          <div className="h-6 w-px bg-white/10 mx-2"></div>

          {isLoggedIn ? (
            <div className="flex gap-2 items-center">
              <Link
                href="/add-item"
                className="btn btn-primary btn-sm text-white shadow-lg shadow-primary/30"
              >
                ➕ Add Item
              </Link>
              <button
                onClick={handleLogout}
                className="btn btn-ghost btn-sm text-error hover:bg-error/10 gap-1"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="btn btn-primary btn-sm text-white shadow-lg shadow-primary/30"
            >
              Login
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
          <div className="absolute top-full left-0 right-0 bg-base-100 border-t border-white/10 shadow-xl md:hidden p-4 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-2">
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

              <div className="divider my-2"></div>

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
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}