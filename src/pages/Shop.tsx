import React, { useState } from 'react';
import { motion } from 'motion/react';
import { products } from '../data/products';
import ProductCard from '../components/UI/ProductCard';
import { Category } from '../types';

const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const categories: (Category | 'All')[] = ['All', 'Tailoring', 'Street Essentials', 'Accessories', 'New Arrivals'];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="py-12 px-6 lg:px-20 max-w-[1440px] mx-auto min-h-screen">
      <div className="mb-12">
        <h1 className="text-5xl font-black tracking-tight mb-8">COLLECTIONS</h1>
        
        <div className="flex flex-wrap gap-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${
                activeCategory === cat 
                  ? 'bg-black text-white border-black' 
                  : 'bg-white text-gray-500 border-gray-200 hover:border-black hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-24">
          <p className="text-gray-500 text-lg italic">No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Shop;
