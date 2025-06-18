"use client";
import React from 'react';
import { useCart } from './CartContext';

export default function CartSidebar() {
  const { cart, isSidebarOpen, toggleCartSidebar, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-[100] transform transition-transform duration-300 ${
        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <button onClick={toggleCartSidebar} className="text-2xl font-bold">&times;</button>
      </div>
      <div className="p-6 flex-1 flex flex-col gap-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 180px)' }}>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex items-center gap-4 border-b pb-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-contain bg-gray-100 rounded" />
              <div className="flex-1">
                <div className="font-semibold text-sm">{item.name}</div>
                <div className="text-gray-600 text-xs">Qty: {item.quantity}</div>
                <div className="text-black font-bold">Rs. {(item.price * item.quantity).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</div>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:underline text-xs">Remove</button>
            </div>
          ))
        )}
      </div>
      <div className="px-6 py-4 border-t flex flex-col gap-3">
        <div className="flex justify-between font-bold text-lg">
          <span>Total:</span>
          <span>Rs. {total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
        </div>
        <button className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors" disabled={cart.length === 0}>
          Checkout
        </button>
      </div>
    </div>
  );
} 