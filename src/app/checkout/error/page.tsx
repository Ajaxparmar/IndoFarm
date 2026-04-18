"use client";

import React from 'react';
import * as motion from 'motion/react-client';
import { XCircle, ArrowLeft, AlertCircle } from 'lucide-react';
import NextLink from 'next/link';

export default function CheckoutError() {
  return (
    <div className="pt-32 pb-24 min-h-[80vh] flex flex-col items-center justify-center px-6 bg-brand-bg">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-24 h-24 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-8"
      >
        <AlertCircle size={48} />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center max-w-lg"
      >
        <h1 className="text-5xl serif italic mb-6">Transition Interrupted</h1>
        <p className="text-brand-muted mb-10 text-lg font-light leading-relaxed">
          We encountered a complication while processing your payment. No funds were taken, and your selections are still safe in your cart.
        </p>

        <div className="flex justify-center">
          <NextLink
            href="/cart"
            className="bg-brand-ink text-brand-bg px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-brand-accent transition-all flex items-center justify-center space-x-3"
          >
            <ArrowLeft size={16} />
            <span>Return to Cart</span>
          </NextLink>
        </div>
      </motion.div>
    </div>
  );
}
