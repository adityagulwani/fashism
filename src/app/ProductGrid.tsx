import React from 'react';
import Link from 'next/link';
import { useCart } from './CartContext';

const products = [
  {
    id: 1,
    name: 'MUSIC PLAYBOI CARTI TSHIRT',
    image: '/products/music-playboi-carti.jpg', // Replace with your image paths
    price: 999,
    originalPrice: 3199,
    discount: 69,
    description: 'A bold streetwear tee inspired by Playboi Carti. 100% cotton, oversized fit.'
  },
  {
    id: 2,
    name: 'VORNOX RED BOXY VEST',
    image: '/products/vornox-red-boxy.jpg',
    price: 999,
    originalPrice: 2199,
    discount: 55,
    description: 'Boxy red vest with grunge graphics. Soft, breathable fabric.'
  },
  {
    id: 3,
    name: 'TATVA UNISEX BLACK OVERSIZED TSHIRT',
    image: '/products/tatva-unisex-black.jpg',
    price: 1299,
    originalPrice: 2199,
    discount: 41,
    description: 'Unisex oversized tee with Tatva print. Premium quality.'
  },
  {
    id: 4,
    name: 'FEAR NAVY BLUE BOXY OVERSIZED TSHIRT',
    image: '/products/fear-navy-blue.jpg',
    price: 1299,
    originalPrice: 3199,
    discount: 59,
    description: 'Navy blue oversized tee with bold FEAR RAGE print.'
  },
];

export function getProductById(id: number) {
  return products.find((p) => p.id === id);
}

export default function ProductGrid() {
  const { addToCart } = useCart();
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
              {/* Product Image (clickable) */}
              <Link href={`/product/${product.id}`} className="w-full">
                <div className="w-full aspect-[1/1] flex items-center justify-center bg-[#e0e0e0] rounded-md overflow-hidden cursor-pointer">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                    style={{ maxHeight: 320 }}
                  />
                </div>
              </Link>
              {/* Add to Cart Button */}
              <button
                className="absolute bottom-32 right-8 bg-white border border-black rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold shadow hover:bg-black hover:text-white transition-colors"
                onClick={() => addToCart({ id: product.id, name: product.name, image: product.image, price: product.price })}
                aria-label={`Add ${product.name} to cart`}
              >
                +
              </button>
              {/* Product Info */}
              <div className="mt-8 text-center">
                <Link href={`/product/${product.id}`} className="block">
                  <h3 className="font-semibold text-base tracking-widest mb-2 hover:underline" style={{ letterSpacing: '0.08em' }}>{product.name}</h3>
                </Link>
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