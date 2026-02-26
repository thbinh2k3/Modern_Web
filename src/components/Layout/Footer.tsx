import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Share2, Instagram, Infinity } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-24 pb-12 px-6 lg:px-20 border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="size-8 bg-black flex items-center justify-center rounded-lg text-white font-bold">MF</div>
              <h2 className="text-xl font-black tracking-tighter uppercase">Modern Fashion</h2>
            </div>
            <p className="text-gray-500 mb-8 leading-relaxed max-w-xs">
              Redefining high-end fashion with a commitment to quality, sustainability, and timeless modern aesthetics.
            </p>
            <div className="flex gap-4">
              <a className="size-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all" href="#">
                <Globe size={18} />
              </a>
              <a className="size-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all" href="#">
                <Share2 size={18} />
              </a>
              <a className="size-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all" href="#">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-gray-900">Shop</h4>
            <ul className="space-y-4">
              <li><Link className="text-gray-500 hover:text-blue-600 transition-colors" to="/shop">Men's Collection</Link></li>
              <li><Link className="text-gray-500 hover:text-blue-600 transition-colors" to="/shop">Women's Collection</Link></li>
              <li><Link className="text-gray-500 hover:text-blue-600 transition-colors" to="/shop">Accessories</Link></li>
              <li><Link className="text-gray-500 hover:text-blue-600 transition-colors" to="/shop">New Arrivals</Link></li>
              <li><Link className="text-gray-500 hover:text-blue-600 transition-colors" to="/shop">Gift Cards</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-gray-900">Company</h4>
            <ul className="space-y-4">
              <li><a className="text-gray-500 hover:text-blue-600 transition-colors" href="#">About Us</a></li>
              <li><a className="text-gray-500 hover:text-blue-600 transition-colors" href="#">Sustainability</a></li>
              <li><a className="text-gray-500 hover:text-blue-600 transition-colors" href="#">Store Locator</a></li>
              <li><a className="text-gray-500 hover:text-blue-600 transition-colors" href="#">Careers</a></li>
              <li><a className="text-gray-500 hover:text-blue-600 transition-colors" href="#">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-gray-900">Newsletter</h4>
            <p className="text-gray-500 mb-6">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none" 
                placeholder="Enter your email" 
                type="email"
              />
              <button className="w-full bg-black text-white font-bold py-3 rounded-xl hover:bg-blue-600 transition-all">SUBSCRIBE</button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© 2024 MODERN FASHION STORE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a className="hover:text-blue-600 transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-blue-600 transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-blue-600 transition-colors" href="#">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
