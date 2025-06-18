"use client";
import { useCart } from './CartContext';

interface AddToCartButtonProps {
  id: number;
  name: string;
  image: string;
  price: number;
  className?: string;
}

export default function AddToCartButton({ id, name, image, price, className }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  return (
    <button
      className={className || "bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors mb-4"}
      onClick={() => addToCart({ id, name, image, price })}
      aria-label={`Add ${name} to cart`}
    >
      Add to Cart
    </button>
  );
} 