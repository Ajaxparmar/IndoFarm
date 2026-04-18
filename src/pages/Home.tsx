import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight, Star, Leaf, Droplets, Sparkles, ChevronRight, Package } from 'lucide-react';
import ProductCard from '@/src/components/ProductCard';
import RecommendationBox from '@/src/components/RecommendationBox';
import { PRODUCTS } from '@/src/constants';

export default function Home() {
  return (
    <div className="pt-20 min-h-screen bg-brand-bg relative overflow-x-hidden">
      {/* Main Grid Layout from Design */}
      <main className="max-w-[1440px] mx-auto px-10 py-16 grid lg:grid-cols-[420px_1fr] gap-16 items-start">
        
        {/* Left Hero Area */}
        <section className="flex flex-col justify-center sticky top-36">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="serif italic text-brand-accent mb-3 text-lg">Autumn Collection 2024</div>
            <h1 className="text-6xl font-normal text-brand-ink leading-[1.1] mb-6 serif">
              Nature's Gold <br /> & Earth's Gems.
            </h1>
            <p className="text-[15px] leading-relaxed text-brand-muted mb-8 max-w-[320px]">
              Premium hand-picked dry fruits from the valley and ethically sourced lucky stones for mindful living.
            </p>
            
            <div className="flex gap-4">
              <button className="bg-brand-ink text-brand-bg px-7 py-3.5 rounded-sm text-[12px] font-bold uppercase tracking-[1px] hover:bg-brand-accent transition-all">
                Shop Collection
              </button>
              <button className="bg-transparent border border-brand-ink text-brand-ink px-7 py-3.5 rounded-sm text-[12px] font-bold uppercase tracking-[1px] hover:bg-brand-ink hover:text-brand-bg transition-all">
                Read Reviews
              </button>
            </div>

            {/* AI Callout in Hero */}
            <div className="mt-16 p-6 bg-white border border-brand-ink/5 rounded-xl shadow-sm">
              <div className="flex items-center space-x-2 mb-3 text-brand-accent">
                <Sparkles size={16} />
                <span className="text-[10px] uppercase font-bold tracking-widest">AI Concierge</span>
              </div>
              <p className="text-xs text-brand-muted italic mb-4">"I can find the perfect stone or fruit matching your energy today."</p>
              <button className="text-[10px] font-bold uppercase tracking-widest text-brand-ink flex items-center space-x-2 hover:text-brand-accent transition-colors">
                <span>Start Consultation</span>
                <ChevronRight size={12} />
              </button>
            </div>
          </motion.div>
        </section>

        {/* Right Content Area (Product Section) */}
        <section className="space-y-12">
          {/* AI Recommendation Box sits at top of grid or integrated */}
          <div className="bg-white p-2 rounded-2xl border border-brand-ink/5 shadow-sm">
            <RecommendationBox />
          </div>

          <div className="space-y-8">
            <div className="flex justify-between items-end border-b border-brand-ink/10 pb-3">
              <h2 className="text-2xl serif italic text-brand-ink">Recommended for you</h2>
              <button className="text-[11px] uppercase font-bold tracking-widest text-brand-muted hover:text-brand-accent transition-colors border-b border-transparent hover:border-brand-accent">
                View All
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {PRODUCTS.slice(0, 4).map((product) => (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>

          {/* Additional Grid Section */}
          <div className="space-y-8 pt-12">
            <div className="flex justify-between items-end border-b border-brand-ink/10 pb-3">
              <h2 className="text-2xl serif italic text-brand-ink">Specialty Harvests</h2>
              <button className="text-[11px] uppercase font-bold tracking-widest text-brand-muted hover:text-brand-accent transition-colors">
                Explore
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {PRODUCTS.slice(4, 6).map((product) => (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Floating Tracking Widget (Inspired by Design) */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-10 right-10 z-40"
      >
        <div className="bg-white p-6 w-[280px] shadow-2xl rounded-lg border border-brand-ink/5">
          <span className="text-[10px] uppercase font-bold text-brand-muted tracking-widest mb-2 block">Ongoing Order Status</span>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <div className="font-bold text-[13px] text-brand-ink">Order #IF-88293</div>
          </div>
          <div className="text-[11px] text-brand-muted mb-3 flex justify-between">
            <span>In Transit</span>
            <span className="font-semibold italic">Expected Thu</span>
          </div>
          <div className="h-1 bg-brand-bg rounded-full overflow-hidden">
            <div className="w-[70%] h-full bg-brand-ink" />
          </div>
        </div>
      </motion.div>

      {/* Features Bar - Refined for Artistic Flair */}
      <section className="bg-white py-12 border-t border-brand-ink/5">
        <div className="max-w-7xl mx-auto px-10 flex flex-wrap justify-between gap-8">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-brand-bg rounded-full flex items-center justify-center text-brand-ink">
              <Leaf size={18} />
            </div>
            <div>
              <p className="text-[11px] uppercase font-bold tracking-widest text-brand-ink">100% Organic</p>
              <p className="text-[10px] text-brand-muted lowercase italic">valley sourced</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-brand-bg rounded-full flex items-center justify-center text-brand-ink">
              <Sparkles size={18} />
            </div>
            <div>
              <p className="text-[11px] uppercase font-bold tracking-widest text-brand-ink">Rare Energy</p>
              <p className="text-[10px] text-brand-muted lowercase italic">ethically mined</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-brand-bg rounded-full flex items-center justify-center text-brand-ink">
              <Package size={18} />
            </div>
            <div>
              <p className="text-[11px] uppercase font-bold tracking-widest text-brand-ink">Eco Ships</p>
              <p className="text-[10px] text-brand-muted lowercase italic">fully sustainable</p>
            </div>
          </div>
        </div>
      </section>

      {/* Aesthetic Spacer/Background Element */}
      <div className="absolute top-[20%] right-0 w-[40%] h-[60%] bg-brand-accent/5 rounded-full blur-[120px] -z-10" />
    </div>
  );
}
