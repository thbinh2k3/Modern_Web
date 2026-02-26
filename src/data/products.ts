import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Architectural Wool Coat',
    price: 1240,
    category: 'Tailoring',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=800&auto=format&fit=crop',
    description: 'A masterpiece of minimalist design, this wool coat features clean lines and a structured silhouette.',
    details: ['100% Virgin Wool', 'Silk Lining', 'Hand-finished seams'],
    isFeatured: true
  },
  {
    id: '2',
    name: 'Silk Drape Blouse',
    price: 450,
    category: 'Street Essentials',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop',
    description: 'Elegant and fluid, this silk blouse drapes beautifully for a sophisticated day-to-night look.',
    details: ['100% Mulberry Silk', 'Mother of Pearl buttons', 'Relaxed fit'],
    isFeatured: true
  },
  {
    id: '3',
    name: 'Urban Tech Sneakers',
    price: 680,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop',
    description: 'High-performance materials meet high-fashion aesthetics in these versatile urban sneakers.',
    details: ['Technical mesh upper', 'Vibram sole', 'Reflective accents'],
    isFeatured: true
  },
  {
    id: '4',
    name: 'Obsidian Leather Trousers',
    price: 890,
    category: 'Tailoring',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop',
    description: 'Sleek and provocative, these leather trousers are tailored for a perfect fit.',
    details: ['Premium lambskin', 'Tapered leg', 'Concealed zip'],
    isFeatured: true
  },
  {
    id: '5',
    name: 'Cashmere Turtleneck',
    price: 520,
    category: 'Street Essentials',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop',
    description: 'The ultimate luxury essential, crafted from the finest Mongolian cashmere.',
    details: ['100% Cashmere', 'Ribbed cuffs', 'Slim fit']
  },
  {
    id: '6',
    name: 'Structured Tote Bag',
    price: 950,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop',
    description: 'A timeless accessory designed to carry your essentials with effortless grace.',
    details: ['Full-grain leather', 'Internal zip pocket', 'Gold-tone hardware']
  }
];
