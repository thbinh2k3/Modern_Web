import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Checkout: React.FC = () => {
  const { totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isOrdered, setIsOrdered] = useState(false);

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 3000);
  };

  if (isOrdered) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <div className="size-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-4xl font-black mb-4">THANK YOU!</h2>
          <p className="text-gray-500 mb-2">Your order has been placed successfully.</p>
          <p className="text-gray-400 text-sm italic">Redirecting you to home...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="py-12 px-6 lg:px-20 max-w-360 mx-auto min-h-screen">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-8 font-bold text-sm"
      >
        <ArrowLeft size={16} />
        BACK TO BAG
      </button>

      <h1 className="text-5xl font-black tracking-tight mb-12">CHECKOUT</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Form */}
        <form onSubmit={handleOrder} className="space-y-8">
          <section>
            <h3 className="text-xl font-bold mb-6 uppercase tracking-wider">Shipping Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">First Name</label>
                <input required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none" type="text" />
              </div>
              <div className="col-span-1">
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Last Name</label>
                <input required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none" type="text" />
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Address</label>
                <input required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none" type="text" />
              </div>
              <div className="col-span-1">
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">City</label>
                <input required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none" type="text" />
              </div>
              <div className="col-span-1">
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Postal Code</label>
                <input required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none" type="text" />
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-6 uppercase tracking-wider">Payment</h3>
            <div className="p-6 border-2 border-blue-600 bg-blue-50 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="size-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                  <span className="font-bold text-blue-600 italic">VISA</span>
                </div>
                <div>
                  <p className="font-bold">Ending in 4242</p>
                  <p className="text-gray-500 text-sm">Expires 12/26</p>
                </div>
              </div>
              <CheckCircle2 className="text-blue-600" />
            </div>
          </section>

          <button 
            type="submit"
            className="w-full py-5 bg-black text-white font-bold rounded-xl hover:bg-blue-600 transition-all text-lg"
          >
            PLACE ORDER — ${totalPrice.toLocaleString()}
          </button>
        </form>

        {/* Order Summary Sticky */}
        <div className="hidden lg:block">
          <div className="bg-gray-50 rounded-2xl p-8 sticky top-32">
            <h2 className="text-2xl font-black mb-8">ORDER SUMMARY</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span>${totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Shipping</span>
                <span className="text-green-600 font-bold">FREE</span>
              </div>
              <div className="h-px bg-gray-200 my-4"></div>
              <div className="flex justify-between text-2xl font-bold">
                <span>Total</span>
                <span>${totalPrice.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
