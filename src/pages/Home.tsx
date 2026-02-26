import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { products } from '../data/products';
import ProductCard from '../components/UI/ProductCard';

const Home: React.FC = () => {
  const featuredProducts = products.filter(p => p.isFeatured);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <img
            alt="Hero"
            className="w-full h-full object-cover opacity-70 scale-105"
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-600/20 text-blue-400 text-xs font-bold uppercase tracking-widest border border-blue-600/30 backdrop-blur-sm"
          >
            Winter Collection 2024
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tighter mb-8 italic"
          >
            REDEFINE <br /> YOUR STYLE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl mx-auto font-light leading-relaxed"
          >
            Experience the pinnacle of high-end fashion with our latest seasonal collection designed for the modern individual.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/shop" className="px-10 py-5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center gap-2 shadow-xl shadow-blue-600/20">
              SHOP THE COLLECTION
              <ArrowRight size={20} />
            </Link>
            <button className="px-10 py-5 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/20">
              VIEW LOOKBOOK
            </button>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-6 lg:px-20 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h3 className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-2">Curated Selection</h3>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">FEATURED PRODUCTS</h2>
          </div>
          <Link to="/shop" className="group flex items-center gap-2 font-bold text-sm border-b-2 border-black pb-1 hover:border-blue-600 transition-colors">
            BROWSE ALL PRODUCTS
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Trending Categories */}
      <section className="bg-gray-950 py-24 px-6 lg:px-20 text-white">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-4xl font-black mb-16 tracking-tight">TRENDING CATEGORIES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'TAILORING', desc: 'Precision cut for the modern silhouette.', img: 'https://i.pinimg.com/1200x/36/27/02/362702755126d8eb457d747c0178f949.jpg' },
              { name: 'STREET ESSENTIALS', desc: 'Elevated basics for everyday wear.', img: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=800&auto=format&fit=crop' },
              { name: 'ACCESSORIES', desc: 'The finishing touch to your look.', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop' }
            ].map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative h-[600px] overflow-hidden rounded-xl cursor-pointer"
              >
                <img alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" src={cat.img} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10">
                  <h3 className="text-3xl font-black mb-2">{cat.name}</h3>
                  <p className="text-gray-300 mb-6">{cat.desc}</p>
                  <button className="size-12 bg-white text-black rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ArrowRight size={24} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Feed */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="px-6 lg:px-20 mb-12 flex items-center justify-between">
          <h2 className="text-3xl font-black tracking-tight flex items-center gap-4">
            <span className="text-blue-600">#</span>
            SOCIAL FEED
          </h2>
          <p className="text-gray-500 font-medium hidden md:block">Tag @modernfashion to be featured</p>
        </div>
        <div className="flex gap-4 px-6 overflow-x-auto no-scrollbar pb-8 snap-x">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="min-w-[300px] h-[400px] rounded-xl overflow-hidden snap-center flex-shrink-0 relative group">
              <img
                alt={`Social ${i}`}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
                src={`https://picsum.photos/seed/fashion${i}/600/800`}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Heart size={40} className="text-white fill-white" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
