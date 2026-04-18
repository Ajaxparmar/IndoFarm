"use client";

import React, { useState, useEffect } from 'react';
import { ShoppingCart, User, Heart, Search, Menu, X, Package } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as motion from 'motion/react-client';
import { AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { useCart } from '@/src/context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Dry Fruits', path: '/category/dry-fruits' },
    { title: 'Lucky Stones', path: '/category/lucky-stones' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 items-center flex px-10 border-b border-brand-ink/10",
      isScrolled ? "bg-brand-bg/95 backdrop-blur-md shadow-sm" : "bg-brand-bg"
    )}>
      <div className="w-full flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-brand-ink serif">
          Indo-Farm
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={cn(
                "text-[13px] font-medium transition-colors hover:text-brand-accent uppercase tracking-[1px]",
                pathname === link.path ? "text-brand-accent" : "text-brand-ink"
              )}
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <Link href="/cart" className="relative flex items-center space-x-2 bg-brand-ink text-brand-bg px-3 py-1 rounded-full text-[11px] font-medium transition-transform hover:scale-105">
            <ShoppingCart size={14} />
            <span>Cart ({itemCount})</span>
          </Link>
          
          <Link href="/login" className="text-brand-ink hover:text-brand-accent transition-colors">
            <User size={18} />
          </Link>
          
          <button 
            className="md:hidden text-brand-ink cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white mt-4 rounded-2xl overflow-hidden shadow-lg absolute top-20 left-10 right-10"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-brand-ink hover:text-brand-gold transition-colors serif"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
