'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-slate-900">
              Flowdash
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#"
                className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </a>
              <a
                href="#pricing"
                className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Pricing
              </a>
              <a
                href="#blog"
                className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Blog
              </a>
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <a
                href="#"
                className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Sign in
              </a>
              <a
                href="#"
                className="bg-accent-gradient text-white px-4 py-2 rounded-card text-sm font-medium hover:shadow-lg transition-all duration-200"
              >
                Sign up
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500"
              aria-expanded="false"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-slate-100">
                <a
                  href="#"
                  className="text-slate-600 hover:text-slate-900 block px-3 py-2 text-base font-medium"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-slate-600 hover:text-slate-900 block px-3 py-2 text-base font-medium"
                >
                  About
                </a>
                <a
                  href="#pricing"
                  className="text-slate-600 hover:text-slate-900 block px-3 py-2 text-base font-medium"
                >
                  Pricing
                </a>
                <a
                  href="#blog"
                  className="text-slate-600 hover:text-slate-900 block px-3 py-2 text-base font-medium"
                >
                  Blog
                </a>
                <div className="pt-4 pb-3 border-t border-slate-200">
                  <a
                    href="#"
                    className="text-slate-600 hover:text-slate-900 block px-3 py-2 text-base font-medium"
                  >
                    Sign in
                  </a>
                  <a
                    href="#"
                    className="bg-accent-gradient text-white block px-3 py-2 rounded-card text-base font-medium mt-2"
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
