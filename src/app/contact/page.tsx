"use client";

import * as motion from 'motion/react-client';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-brand-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Get in Touch</span>
            <h1 className="text-5xl md:text-7xl font-medium serif mb-8 italic">We'd love to hear <br /> from you</h1>
            <p className="text-brand-muted text-lg font-light leading-relaxed mb-12 max-w-md">
              Whether you have a question about our dry fruits, stones, or just want to say hi, our team is here for you.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-accent shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-brand-ink/40">Call Us</p>
                  <p className="serif text-xl">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-accent shadow-sm">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-brand-ink/40">Email Us</p>
                  <p className="serif text-xl">hello@indo-farm.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-accent shadow-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-brand-ink/40">Visit Us</p>
                  <p className="serif text-xl">123 Organic Lane, Green Valley</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-12 rounded-[3rem] shadow-xl border border-brand-ink/5"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-brand-ink/40 ml-4">Full Name</label>
                  <input type="text" className="w-full bg-brand-bg/30 border border-brand-ink/10 px-6 py-4 rounded-2xl focus:outline-none focus:border-brand-accent transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-brand-ink/40 ml-4">Email Address</label>
                  <input type="email" className="w-full bg-brand-bg/30 border border-brand-ink/10 px-6 py-4 rounded-2xl focus:outline-none focus:border-brand-accent transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-brand-ink/40 ml-4">Subject</label>
                <input type="text" className="w-full bg-brand-bg/30 border border-brand-ink/10 px-6 py-4 rounded-2xl focus:outline-none focus:border-brand-accent transition-colors" placeholder="How can we help?" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-brand-ink/40 ml-4">Message</label>
                <textarea rows={4} className="w-full bg-brand-bg/30 border border-brand-ink/10 px-6 py-4 rounded-2xl focus:outline-none focus:border-brand-accent transition-colors resize-none" placeholder="Your message here..." />
              </div>
              <button className="w-full bg-brand-ink text-brand-bg py-4 rounded-2xl font-bold uppercase tracking-widest text-sm flex items-center justify-center space-x-3 hover:bg-brand-accent transition-all group cursor-pointer">
                <span>Send Message</span>
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
