
import React, { useState } from 'react';
import { Product, CartItem } from '../types';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onAddToCart: (item: CartItem) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails, onAddToCart }) => {
  const [qty, setQty] = useState(1);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart({
      ...product,
      quantity: qty
    });
  };

  const adjustQty = (e: React.MouseEvent, delta: number) => {
    e.stopPropagation();
    setQty(prev => Math.max(1, prev + delta));
  };

  return (
    <div
      className="bg-white border border-gray-100 rounded-sm overflow-hidden group hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col cursor-pointer relative h-[520px]"
      onClick={() => onViewDetails(product)}
    >
      {!product.inStock && (
        <div className="absolute inset-0 z-20 bg-white/60 backdrop-blur-[1px] pointer-events-none flex items-center justify-center">
          <span className="bg-gray-900 text-white text-[10px] font-black px-4 py-2 uppercase tracking-widest shadow-2xl rotate-[-10deg] border-2 border-white">EN RUPTURE DE STOCK</span>
        </div>
      )}

      {product.originalPrice && (
        <div className="absolute top-4 left-4 z-10 bg-red-600 text-white text-[10px] font-black px-3 py-1 uppercase tracking-tighter shadow-xl">
          OFFRE SPÉCIALE
        </div>
      )}

      <div className="relative h-64 overflow-hidden bg-white p-6">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out ${!product.inStock ? 'opacity-40 grayscale' : ''}`}
        />
        <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/5 transition-colors duration-500"></div>
      </div>

      <div className="p-6 flex flex-col flex-1 bg-white border-t border-gray-50">
        <div className="mb-2">
          <p className="text-[10px] font-black text-green-700 uppercase tracking-widest mb-1">{product.brand}</p>
          <h3 className="font-bold text-[15px] group-hover:text-green-700 transition-colors line-clamp-2 leading-snug">
            {product.name}
          </h3>
        </div>

        <div className="mt-auto space-y-4">
          <div className="flex flex-col">
            {product.isStartingPrice && <span className="text-[9px] text-gray-400 uppercase font-black tracking-tight mb-0.5">À partir de:</span>}
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-gray-900 tracking-tighter">{product.price.toLocaleString()} <span className="text-xs font-bold text-gray-500 ml-0.5">FCFA</span></span>
              {product.originalPrice && (
                <span className="text-sm text-gray-300 line-through font-bold">{product.originalPrice.toLocaleString()}</span>
              )}
            </div>
          </div>

          {!product.inStock ? (
            <button className="w-full bg-gray-50 text-gray-400 py-4 rounded-sm text-[11px] font-black uppercase tracking-[0.1em] border border-gray-100">
              Produit non disponible
            </button>
          ) : product.isStartingPrice ? (
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={(e) => { e.stopPropagation(); onViewDetails(product); }}
                className="bg-green-700 text-white py-4 rounded-sm text-[10px] font-black uppercase tracking-widest hover:bg-green-800 transition-all shadow-lg"
              >
                Choisir Options
              </button>
              <button className="border-2 border-gray-200 text-gray-400 py-4 rounded-sm text-[10px] font-black uppercase tracking-widest hover:border-green-700 hover:text-green-700 transition-all">
                Détails
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between border-2 border-gray-100 rounded-sm overflow-hidden h-12 bg-white group-hover:border-green-100">
                <button
                  onClick={(e) => adjustQty(e, -1)}
                  className="w-12 h-full flex items-center justify-center hover:bg-gray-50 transition-colors font-black text-lg border-r border-gray-100"
                >
                  -
                </button>
                <span className="text-sm font-black w-12 text-center text-gray-900">{qty}</span>
                <button
                  onClick={(e) => adjustQty(e, 1)}
                  className="w-12 h-full flex items-center justify-center hover:bg-gray-50 transition-colors font-black text-lg border-l border-gray-100"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleQuickAdd}
                className="w-full bg-green-700 text-white py-4 rounded-sm text-[11px] font-black uppercase tracking-[0.15em] hover:bg-green-800 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2 group/btn"
              >
                <i className="fas fa-cart-plus group-hover/btn:translate-x-1 transition-transform"></i> Ajouter au panier
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
