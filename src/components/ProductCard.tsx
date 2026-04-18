import { motion } from 'motion/react';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Product } from '@/src/types';
import { formatCurrency } from '@/src/lib/utils';
import { useCart } from '@/src/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white p-4 flex flex-col gap-3 border border-transparent hover:border-brand-accent transition-all duration-300 rounded-lg shadow-sm"
    >
      {/* Image Wrapper */}
      <div className="h-[200px] bg-[#f0eee8] overflow-hidden relative rounded-md">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3">
          <span className="bg-brand-bg/80 backdrop-blur-sm text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded text-brand-muted">
            {product.category.replace('-', ' ')}
          </span>
        </div>

        {/* Favorite Icon */}
        <button className="absolute top-3 right-3 text-brand-muted hover:text-brand-accent transition-colors">
          <Heart size={16} />
        </button>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-sm font-semibold text-brand-ink truncate max-w-[140px]">
              {product.name}
            </h3>
            <div className="flex items-center space-x-1 mt-1">
              <div className="flex text-yellow-500 text-[10px]">
                <Star size={10} className="fill-current" />
                <Star size={10} className="fill-current" />
                <Star size={10} className="fill-current" />
                <Star size={10} className="fill-current" />
                <Star size={10} className="fill-current" />
              </div>
              <span className="text-[10px] text-brand-muted">({product.reviewsCount})</span>
            </div>
          </div>
          <span className="text-sm font-serif text-brand-accent font-medium">
            {formatCurrency(product.price)}
          </span>
        </div>

        <button 
          onClick={() => addToCart(product)}
          className="mt-3 w-full bg-brand-ink text-brand-bg py-2 rounded text-[11px] font-bold uppercase tracking-widest hover:bg-brand-accent transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}
