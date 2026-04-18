"use client";

import * as motion from 'motion/react-client';
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '@/src/context/CartContext';
import { formatCurrency } from '@/src/lib/utils';
import Link from 'next/link';

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, total } = useCart();

  if (cart.length === 0) {
    return (
      <div className="pt-20 pb-24 min-h-[70vh] flex flex-col items-center justify-center px-6">
        <div className="w-24 h-24 bg-brand-bg rounded-full flex items-center justify-center text-brand-ink/20 mb-8">
          <ShoppingBag size={48} />
        </div>
        <h1 className="text-4xl serif italic mb-4">Your cart is empty</h1>
        <p className="text-brand-muted mb-10 font-light">Explore our organic treasures and find something special.</p>
        <Link 
          href="/" 
          className="bg-brand-ink text-brand-bg px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-brand-accent transition-all cursor-pointer"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-medium serif italic mb-12">Your Cart</h1>
        
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Items List */}
          <div className="lg:col-span-2 space-y-8">
            {cart.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 p-6 bg-white rounded-[2.5rem] shadow-sm border border-brand-ink/5"
              >
                <div className="w-32 h-32 rounded-2xl overflow-hidden shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl serif font-medium mb-1">{item.name}</h3>
                  <p className="text-brand-muted text-xs uppercase tracking-widest font-bold mb-4">{item.category}</p>
                  <p className="text-lg font-bold serif text-brand-accent">{formatCurrency(item.price)}</p>
                </div>

                <div className="flex items-center space-x-4 bg-brand-bg/50 rounded-2xl px-4 py-2">
                  <button 
                    onClick={() => updateQuantity(item.id, -1)}
                    className="text-brand-muted/40 hover:text-brand-ink transition-colors cursor-pointer"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="font-bold text-sm min-w-[20px] text-center">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, 1)}
                    className="text-brand-muted/40 hover:text-brand-ink transition-colors cursor-pointer"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-brand-muted/20 hover:text-red-500 transition-colors p-2 cursor-pointer"
                >
                  <Trash2 size={20} />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-brand-ink/5 sticky top-32">
              <h3 className="text-2xl serif italic mb-8">Order Summary</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm text-brand-muted">
                  <span>Subtotal</span>
                  <span>{formatCurrency(total)}</span>
                </div>
                <div className="flex justify-between text-sm text-brand-muted">
                  <span>Shipping</span>
                  <span className="text-brand-accent font-semibold uppercase tracking-widest text-[10px]">Free</span>
                </div>
                <div className="pt-4 border-t border-brand-ink/10 flex justify-between items-center">
                  <span className="font-bold uppercase tracking-widest text-xs">Total</span>
                  <span className="text-3xl font-bold serif">{formatCurrency(total)}</span>
                </div>
              </div>

              <button className="w-full bg-brand-ink text-brand-bg py-5 rounded-[2rem] font-bold uppercase tracking-widest text-xs flex items-center justify-center space-x-3 hover:bg-brand-accent transition-all shadow-xl group cursor-pointer">
                <span>Proceed to Checkout</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="mt-6 text-[10px] text-center text-brand-muted/40 uppercase tracking-[0.2em] font-bold">
                Secure checkout powered by Stripe
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
