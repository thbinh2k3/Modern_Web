import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6">
        <div className="size-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag size={40} className="text-gray-400" />
        </div>
        <h2 className="text-3xl font-black mb-4">YOUR BAG IS EMPTY</h2>
        <p className="text-gray-500 mb-8 max-w-xs text-center">Looks like you haven't added anything to your bag yet.</p>
        <Link to="/shop" className="px-10 py-4 bg-black text-white font-bold rounded-xl hover:bg-blue-600 transition-all">
          START SHOPPING
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 px-6 lg:px-20 max-w-[1440px] mx-auto min-h-screen">
      <h1 className="text-5xl font-black tracking-tight mb-12">SHOPPING BAG</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Items */}
        <div className="lg:col-span-2 space-y-8">
          <AnimatePresence>
            {cart.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex gap-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm"
              >
                <div className="size-32 sm:size-40 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>

                <div className="flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-xl">{item.name}</h3>
                      <p className="text-gray-500 text-sm">{item.category}</p>
                    </div>
                    <p className="font-bold text-lg">${(item.price * item.quantity).toLocaleString()}</p>
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-gray-100 transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-4 font-bold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-100 transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-600 transition-colors p-2"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-2xl p-8 sticky top-32">
            <h2 className="text-2xl font-black mb-8">SUMMARY</h2>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span>${totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Shipping</span>
                <span>Calculated at next step</span>
              </div>
              <div className="h-px bg-gray-200 my-4"></div>
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>${totalPrice.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={() => navigate('/checkout')}
              className="w-full py-5 bg-black text-white font-bold rounded-xl hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
            >
              CHECKOUT
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
