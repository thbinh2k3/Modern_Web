import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Heart, ShoppingBag, ArrowLeft, Check } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <button onClick={() => navigate('/shop')} className="text-blue-600 font-bold">Back to Shop</button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="py-12 px-6 lg:px-20 max-w-360 mx-auto min-h-screen">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-8 font-bold text-sm"
      >
        <ArrowLeft size={16} />
        BACK
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Image Gallery */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="aspect-3/4 rounded-2xl overflow-hidden bg-gray-100"
        >
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </motion.div>

        {/* Info */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-2">{product.category}</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">{product.name}</h1>
          <p className="text-2xl font-medium text-gray-900 mb-8">${product.price.toLocaleString()}</p>
          
          <div className="h-px bg-gray-200 w-full mb-8"></div>

          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            {product.description}
          </p>

          {product.details && (
            <div className="mb-8">
              <h3 className="font-bold mb-4 uppercase tracking-wider text-sm">Details</h3>
              <ul className="space-y-2">
                {product.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-500">
                    <div className="size-1.5 bg-blue-600 rounded-full"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <button 
              onClick={handleAddToCart}
              className={`flex-1 py-5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                added ? 'bg-green-600 text-white' : 'bg-black text-white hover:bg-blue-600'
              }`}
            >
              {added ? <Check size={20} /> : <ShoppingBag size={20} />}
              {added ? 'ADDED TO BAG' : 'ADD TO BAG'}
            </button>
            <button className="px-6 py-5 border border-gray-200 rounded-xl hover:border-black transition-all">
              <Heart size={24} />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
