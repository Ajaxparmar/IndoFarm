import { motion } from 'motion/react';
import { Leaf, Award, Users, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-medium serif mb-8">From Roots to <br /><span className="italic">Well-being</span></h1>
          <p className="text-brand-ink/60 text-lg font-light leading-relaxed">
            Indo-Farm started with a simple belief: Nature provides everything we need to thrive. We bridge the gap between ancient wisdom and modern wellness.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-24 items-center mb-32">
          <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1000" 
              alt="Our Farm" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl serif italic">The Indo-Farm Promise</h2>
            <div className="space-y-6">
              {[
                { icon: Leaf, title: "100% Organic Origins", desc: "Every nut and fruit is grown without synthetic pesticides, preserving the natural vitality of the earth." },
                { icon: Award, title: "Curated Excellence", desc: "Our lucky stones are hand-selected by experts for their purity, resonance, and aesthetic beauty." },
                { icon: Users, title: "Direct Farmer Relations", desc: "We eliminate middlemen to ensure fair wages for our farmers and better value for our customers." }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4 p-6 bg-white rounded-3xl shadow-sm">
                  <div className="w-12 h-12 bg-brand-cream rounded-2xl flex items-center justify-center text-brand-gold shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-brand-ink mb-1">{item.title}</h4>
                    <p className="text-brand-ink/60 text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
