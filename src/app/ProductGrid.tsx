import React from 'react';

const products = [
  {
    id: 1,
    name: 'MUSIC PLAYBOI CARTI TSHIRT',
    image: '/products/music-playboi-carti.jpg', // Replace with your image paths
    price: 999,
    originalPrice: 3199,
    discount: 69,
  },
  {
    id: 2,
    name: 'VORNOX RED BOXY VEST',
    image: '/products/vornox-red-boxy.jpg',
    price: 999,
    originalPrice: 2199,
    discount: 55,
  },
  {
    id: 3,
    name: 'TATVA UNISEX BLACK OVERSIZED TSHIRT',
    image: '/products/tatva-unisex-black.jpg',
    price: 1299,
    originalPrice: 2199,
    discount: 41,
  },
  {
    id: 4,
    name: 'FEAR NAVY BLUE BOXY OVERSIZED TSHIRT',
    image: '/products/fear-navy-blue.jpg',
    price: 1299,
    originalPrice: 3199,
    discount: 59,
  },
];

export default function ProductGrid() {
  return (
    <section className="w-full min-h-[60vh] bg-[#c4c4c4] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center relative group">
              {/* Discount Badge */}
              <span className="absolute left-0 top-0 m-4 px-3 py-1 bg-black text-white text-xs font-bold tracking-widest z-10">
                SAVE {product.discount}%
              </span>
              {/* Product Image */}
              <div className="w-full aspect-[1/1] flex items-center justify-center bg-[#e0e0e0] rounded-md overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                  style={{ maxHeight: 320 }}
                />
              </div>
              {/* Add to Cart Button */}
              <button className="absolute bottom-32 right-8 bg-white border border-black rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold shadow hover:bg-black hover:text-white transition-colors">
                +
              </button>
              {/* Product Info */}
              <div className="mt-8 text-center">
                <h3 className="font-semibold text-base tracking-widest mb-2" style={{ letterSpacing: '0.08em' }}>{product.name}</h3>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-lg font-bold">RS. {product.price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                  <span className="text-gray-500 line-through text-base">RS. {product.originalPrice.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 