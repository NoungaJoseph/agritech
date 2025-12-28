
import React from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
  onCheckout: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ 
  isOpen, 
  onClose, 
  items, 
  onRemove, 
  onUpdateQuantity,
  onCheckout
}) => {
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col transform transition-transform duration-300">
        <div className="p-4 border-b flex justify-between items-center bg-gray-50">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <i className="fas fa-shopping-basket text-green-700"></i> Votre Panier
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full"><i className="fas fa-times text-xl"></i></button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <i className="fas fa-shopping-cart text-5xl text-gray-200 mb-4"></i>
              <p className="text-gray-500">Votre panier est vide</p>
              <button onClick={onClose} className="mt-4 text-green-700 font-bold hover:underline">Continuer les Achats</button>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-4 p-3 border rounded-lg bg-white shadow-sm">
                <img src={item.image} alt={item.name} className="w-20 h-24 object-cover rounded" />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-sm leading-tight">{item.name}</h4>
                    <button onClick={() => onRemove(item.id)} className="text-gray-400 hover:text-red-600"><i className="fas fa-trash-alt"></i></button>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center border rounded">
                      <button onClick={() => onUpdateQuantity(item.id, -1)} className="px-2 py-1 hover:bg-gray-100" disabled={item.quantity <= 1}>-</button>
                      <span className="px-3 py-1 text-sm font-bold">{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.id, 1)} className="px-2 py-1 hover:bg-gray-100">+</button>
                    </div>
                    <span className="font-bold text-green-700">{item.price.toLocaleString()} FCFA</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 bg-gray-50 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">Total</span>
              <span className="text-xl font-bold">{subtotal.toLocaleString()} FCFA</span>
            </div>
            <button onClick={onCheckout} className="w-full bg-green-700 text-white py-4 rounded-md font-black uppercase tracking-widest hover:bg-green-800 transition shadow-lg">
              PASSER À LA CAISSE
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
