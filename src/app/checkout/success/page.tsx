"use client";

import React, { useEffect } from 'react';
import * as motion from 'motion/react-client';
import { CheckCircle, ArrowRight, ShoppingBag } from 'lucide-react';
import Link from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import NextLink from 'next/link';
import { Suspense } from 'react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');

  return (
    <div className="pt-32 pb-24 min-h-[80vh] flex flex-col items-center justify-center px-6 bg-brand-bg">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8"
      >
        <CheckCircle size={48} />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center max-w-lg"
      >
        <h1 className="text-5xl serif italic mb-6">Gratitude Received</h1>
        <p className="text-brand-muted mb-10 text-lg font-light leading-relaxed">
          Your organic harvest is being prepared. Your order <span className="font-bold text-brand-ink">#{orderId || '...'}</span> is now confirmed and will be shipped soon.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <NextLink
            href="/"
            className="bg-brand-ink text-brand-bg px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-brand-accent transition-all flex items-center justify-center space-x-3"
          >
            <ShoppingBag size={16} />
            <span>Return to Shop</span>
          </NextLink>
          <NextLink
            href="/admin"
            className="bg-white border border-brand-ink/10 text-brand-ink px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-brand-bg transition-all flex items-center justify-center space-x-3"
          >
            <span>Track Order</span>
            <ArrowRight size={16} />
          </NextLink>
        </div>
      </motion.div>
    </div>
  );
}

export default function CheckoutSuccess() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessContent />
      {/* Aesthetic Leaves Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-[0.03]">
        <img src="https://images.unsplash.com/photo-1542362567-b044cd057ca1?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" />
      </div>
    </Suspense>
  );
}
