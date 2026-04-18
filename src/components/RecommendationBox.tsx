import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Sparkles, X, ArrowRight } from 'lucide-react';
import { getRecommendations } from '@/src/services/geminiService';
import ProductCard from './ProductCard';

export default function RecommendationBox() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setLoading(true);
    const results = await getRecommendations(query);
    setRecommendations(results);
    setLoading(false);
    setIsOpen(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 mb-20">
      <div className="bg-white rounded-[2.5rem] shadow-2xl p-2 border border-brand-cream overflow-hidden">
        <form onSubmit={handleSearch} className="flex items-center">
          <div className="flex-1 flex items-center px-6">
            <Sparkles className="text-brand-gold mr-3 shrink-0" size={20} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What are you looking for today? (e.g. energy, focus, health...)"
              className="w-full py-6 focus:outline-none font-medium text-brand-ink placeholder:text-brand-ink/30"
            />
          </div>
          <button 
            type="submit"
            disabled={loading}
            className="bg-brand-ink text-white px-8 py-5 rounded-[2rem] font-bold flex items-center space-x-2 hover:bg-brand-olive transition-all disabled:opacity-50"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <Search size={18} />
                <span>Ask AI</span>
              </>
            )}
          </button>
        </form>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-8 bg-brand-cream/50 rounded-[3rem] p-10 relative border border-brand-gold/10"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-brand-ink/40 hover:text-brand-ink"
            >
              <X size={24} />
            </button>
            
            <div className="flex items-center space-x-3 mb-8">
              <Sparkles className="text-brand-gold" size={20} />
              <h3 className="serif text-2xl italic font-medium">Curated for you</h3>
            </div>

            {recommendations.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-8">
                {recommendations.map((rec) => (
                  <div key={rec.id} className="relative group">
                    <ProductCard product={rec} />
                    <div className="mt-4 p-4 bg-white/50 rounded-2xl border border-brand-gold/5">
                      <p className="text-xs text-brand-ink/60 italic font-light">
                        " {rec.recommendationReason} "
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-brand-ink/60 italic">No recommendations found. Try a different query!</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
