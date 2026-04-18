"use client";

import * as motion from 'motion/react-client';
import { Package, ShoppingBag, Users, DollarSign, Plus, Edit2, Trash2, ArrowUpRight } from 'lucide-react';
import { PRODUCTS } from '@/src/constants';
import { formatCurrency } from '@/src/lib/utils';

export default function Admin() {
  const stats = [
    { label: 'Total Revenue', value: '$12,450', icon: DollarSign, color: 'text-green-600', bg: 'bg-green-100' },
    { label: 'Total Orders', value: '156', icon: ShoppingBag, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Active Users', value: '842', icon: Users, color: 'text-purple-600', bg: 'bg-purple-100' },
    { label: 'Products', value: PRODUCTS.length.toString(), icon: Package, color: 'text-brand-accent', bg: 'bg-brand-bg' },
  ];

  return (
    <div className="pt-20 pb-24 min-h-screen bg-brand-bg/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-6 md:space-y-0">
          <div>
            <h1 className="text-5xl font-medium serif mb-2">Admin Dashboard</h1>
            <p className="text-brand-muted text-sm font-medium uppercase tracking-[0.2em]">Manage your organic empire</p>
          </div>
          <button className="bg-brand-ink text-brand-bg px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center space-x-3 hover:bg-brand-accent transition-all shadow-xl cursor-pointer">
            <Plus size={18} />
            <span>Add New Product</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-brand-ink/5"
            >
              <div className={`${stat.bg} ${stat.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-6`}>
                <stat.icon size={24} />
              </div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-brand-muted mb-1">{stat.label}</p>
              <p className="text-3xl font-bold serif">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Product Table */}
        <div className="bg-white rounded-[3rem] shadow-xl border border-brand-ink/5 overflow-hidden">
          <div className="p-10 border-b border-brand-ink/5 flex justify-between items-center">
            <h3 className="text-2xl serif italic">Product Inventory</h3>
            <div className="text-[10px] uppercase font-bold tracking-widest text-brand-accent bg-brand-bg px-4 py-2 rounded-full">
              Showing {PRODUCTS.length} Items
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-brand-bg/30 text-[10px] uppercase font-bold tracking-widest text-brand-muted">
                  <th className="px-10 py-6">Product</th>
                  <th className="px-6 py-6">Category</th>
                  <th className="px-6 py-6">Price</th>
                  <th className="px-6 py-6">Stock</th>
                  <th className="px-6 py-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-ink/5">
                {PRODUCTS.map((product) => (
                  <tr key={product.id} className="hover:bg-brand-bg/10 transition-colors">
                    <td className="px-10 py-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl overflow-hidden bg-brand-bg/50">
                          <img src={product.image} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <span className="font-medium serif text-lg">{product.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-sm italic">{product.category.replace('-', ' ')}</td>
                    <td className="px-6 py-6 font-bold">{formatCurrency(product.price)}</td>
                    <td className="px-6 py-6">
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${product.stock > 10 ? 'bg-green-500' : 'bg-red-500'}`} />
                        <span className="text-sm font-medium">{product.stock} units</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-right">
                      <div className="flex items-center justify-end space-x-3">
                        <button className="p-2 text-brand-muted/20 hover:text-brand-accent transition-colors cursor-pointer"><Edit2 size={18} /></button>
                        <button className="p-2 text-brand-muted/20 hover:text-red-500 transition-colors cursor-pointer"><Trash2 size={18} /></button>
                        <button className="p-2 text-brand-muted/20 hover:text-brand-ink transition-colors cursor-pointer"><ArrowUpRight size={18} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
