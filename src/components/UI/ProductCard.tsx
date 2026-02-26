import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gray-100 mb-4 transition-transform duration-500 group-hover:scale-[1.02]">
        <Link to={`/product/${product.id}`}>
          <img 
            alt={product.name} 
            className="w-full h-full object-cover" 
            src={product.image} 
          />
        </Link>
        <button 
          onClick={() => addToCart(product)}
          className="absolute bottom-4 left-4 right-4 translate-y-12 group-hover:translate-y-0 bg-white/90 backdrop-blur-md text-black py-3 rounded-lg font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          QUICK ADD
        </button>
        <button className="absolute top-4 right-4 p-2 bg-white/50 backdrop-blur-sm rounded-full text-black hover:bg-blue-600 hover:text-white transition-colors">
          <Heart size={18} />
        </button>
      </div>
      <Link to={`/product/${product.id}`}>
        <h4 className="font-bold text-lg group-hover:text-blue-600 transition-colors">{product.name}</h4>
      </Link>
      <p className="text-gray-500 font-medium">${product.price.toLocaleString()}</p>
    </motion.div>
  );
};

export default ProductCard;
