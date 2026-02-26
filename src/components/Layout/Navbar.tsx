import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Heart, User, Search, Infinity } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar: React.FC = () => {
  const { totalItems } = useCart();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-black/5 px-6 lg:px-20 py-4">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="size-8 bg-black flex items-center justify-center rounded-lg text-white">
              <Infinity size={20} />
            </div>
            <h2 className="text-xl font-black tracking-tighter uppercase">Modern Fashion</h2>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/shop" className="text-sm font-semibold hover:text-blue-600 transition-colors">New Arrivals</Link>
            <Link to="/shop" className="text-sm font-semibold hover:text-blue-600 transition-colors">Collections</Link>
            <Link to="/shop" className="text-sm font-semibold hover:text-blue-600 transition-colors">Men</Link>
            <Link to="/shop" className="text-sm font-semibold hover:text-blue-600 transition-colors">Women</Link>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-64 border border-transparent focus-within:border-blue-600/50 transition-all">
            <Search size={18} className="text-gray-400" />
            <input 
              className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-gray-400 ml-2" 
              placeholder="Search collections..." 
              type="text"
            />
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigate('/cart')}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute top-1 right-1 size-4 bg-blue-600 text-[10px] text-white flex items-center justify-center rounded-full font-bold">
                  {totalItems}
                </span>
              )}
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Heart size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <User size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
