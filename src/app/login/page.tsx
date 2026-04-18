"use client";

import * as motion from 'motion/react-client';
import { Mail, Lock, LogIn as LoginIcon, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="pt-20 pb-24 min-h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left Side - Visual */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden lg:block relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=1000" 
            alt="Nature" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-ink/40 backdrop-blur-[2px] flex items-center justify-center p-12">
            <div className="text-white text-center">
              <h2 className="text-5xl serif italic mb-6">Welcome Back</h2>
              <p className="text-white/80 font-light text-lg">Your organic well-being journey continues here. Sign in to track orders and manage your favorites.</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 sm:p-20 rounded-[4rem] shadow-2xl border border-brand-ink/5"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl serif italic mb-2 tracking-tight">Access Your Account</h1>
            <p className="text-brand-accent text-sm font-medium uppercase tracking-[0.2em]">Indo-Farm Inner Circle</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-brand-ink/40 ml-4">Email Address</label>
              <div className="relative">
                <input 
                  type="email" 
                  className="w-full bg-brand-bg/30 border border-brand-ink/10 pl-12 pr-6 py-5 rounded-3xl focus:outline-none focus:border-brand-accent transition-colors" 
                  placeholder="name@example.com" 
                />
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-ink/20" size={18} />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-brand-ink/40 ml-4">Password</label>
              <div className="relative">
                <input 
                  type="password" 
                  className="w-full bg-brand-bg/30 border border-brand-ink/10 pl-12 pr-6 py-5 rounded-3xl focus:outline-none focus:border-brand-accent transition-colors" 
                  placeholder="••••••••" 
                />
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-ink/20" size={18} />
              </div>
            </div>

            <div className="flex items-center justify-between px-2">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-brand-ink/10 text-brand-accent focus:ring-brand-accent" />
                <span className="text-xs text-brand-muted font-medium">Remember me</span>
              </label>
              <a href="#" className="text-xs text-brand-accent font-bold hover:underline">Forgot?</a>
            </div>

            <button className="w-full bg-brand-ink text-brand-bg py-5 rounded-3xl font-bold uppercase tracking-widest text-xs flex items-center justify-center space-x-3 hover:bg-brand-accent transition-all shadow-xl group cursor-pointer">
              <span>Sign In</span>
              <LoginIcon size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-brand-ink/5"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold">
                <span className="bg-white px-4 text-brand-muted/40">Or continue with</span>
              </div>
            </div>

            <button className="w-full bg-white border border-brand-ink/10 text-brand-ink py-5 rounded-3xl font-bold uppercase tracking-widest text-xs flex items-center justify-center space-x-3 hover:bg-brand-bg transition-all cursor-pointer">
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5 h-5" alt="Google" />
              <span>Google Login</span>
            </button>
          </form>

          <p className="text-center mt-10 text-sm text-brand-muted">
            Don't have an account? <Link href="/login" className="text-brand-accent font-bold hover:underline">Join Inner Circle</Link>
          </p>

          <div className="flex items-center justify-center space-x-2 mt-12 text-brand-muted/20">
            <ShieldCheck size={16} />
            <span className="text-[10px] uppercase font-bold tracking-widest leading-none">Secure SSL Encrypted</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
