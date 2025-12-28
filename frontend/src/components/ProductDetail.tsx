
import React, { useState } from 'react';
import { Product, CartItem } from '../types';

interface ProductDetailProps {
  product: Product;
  onAddToCart: (item: CartItem) => void;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onAddToCart, onBack }) => {
  // Fix: Use optional chaining and fallbacks for optional sizes and colors arrays.
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '');
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product.image);

  // Create array of all images (main + gallery)
  const allImages = [product.image, ...(product.gallery || [])];

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      quantity,
      selectedSize,
      selectedColor
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-gray-500 hover:text-green-700 transition font-bold text-sm"
      >
        <i className="fas fa-arrow-left"></i> RETOUR AUX RÉSULTATS
      </button>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Gallery */}
        <div className="space-y-4">
          <div className="aspect-[4/5] rounded-lg overflow-hidden border">
            <img src={selectedImage} alt={product.name} className="w-full h-full object-cover" />
          </div>
          {/* Thumbnail Gallery */}
          {allImages.length > 1 && (
            <div className={`grid gap-2 ${allImages.length === 2 ? 'grid-cols-2' : allImages.length === 3 ? 'grid-cols-3' : 'grid-cols-4'}`}>
              {allImages.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className={`aspect-square border-2 rounded cursor-pointer transition-all hover:border-green-700 ${selectedImage === img ? 'border-green-700 ring-2 ring-green-200' : 'border-gray-200'}`}
                >
                  <img src={img} className="w-full h-full object-cover rounded" alt={`${product.name} ${i + 1}`} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="space-y-6">
          <div>
            <p className="text-green-700 font-bold uppercase tracking-widest text-xs mb-2">
              {product.brand} Collection
            </p>
            <h1 className="text-3xl font-bold text-gray-900 leading-tight">{product.name}</h1>
            <p className="text-sm text-gray-400 mt-2">SKU: {product.sku}</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <i key={i} className={`fas fa-star ${i < 4 ? 'text-yellow-400' : 'text-gray-200'}`}></i>
              ))}
            </div>
            <span className="text-sm text-gray-500 underline cursor-pointer">{product.reviewCount} Avis</span>
          </div>

          <div className="py-4 border-y">
            <div className="flex items-end gap-3">
              <span className="text-4xl font-black text-green-700">{product.price.toLocaleString()} <span className="text-base">FCFA</span></span>
              {product.originalPrice && (
                <span className="text-lg text-gray-300 line-through mb-1 font-bold">
                  {product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <p className="text-xs text-gray-400 mt-1 italic">*TVA incluse le cas échéant</p>
          </div>

          <div className="space-y-4">
            {/* Fix: Render size selection only if sizes exist. */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Choisir Poids / Format</label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[48px] h-10 border rounded flex items-center justify-center font-bold text-sm transition ${selectedSize === size
                        ? 'bg-green-700 text-white border-green-700'
                        : 'bg-white text-gray-700 hover:border-green-700'
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Fix: Render color selection only if colors exist. */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Choisir Variété</label>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 h-10 border rounded flex items-center justify-center font-bold text-sm transition ${selectedColor === color
                        ? 'bg-green-700 text-white border-green-700'
                        : 'bg-white text-gray-700 hover:border-green-700'
                        }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-4 pt-4">
              <div className="flex items-center border rounded h-12">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-4 py-2 hover:bg-gray-100 h-full"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  readOnly
                  className="w-12 text-center font-bold focus:outline-none"
                />
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="px-4 py-2 hover:bg-gray-100 h-full"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-green-700 text-white font-black uppercase text-xs tracking-widest rounded h-12 flex items-center justify-center gap-2 hover:bg-green-800 transition shadow-lg px-4"
              >
                <i className="fas fa-cart-plus"></i> AJOUTER AU PANIER
              </button>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-md border border-green-100">
            <p className="text-sm text-green-800 flex items-center gap-2">
              <i className="fas fa-truck"></i> <strong>LIVRAISON GRATUITE</strong> dès 100.000 FCFA
            </p>
          </div>

          <div className="prose prose-sm text-gray-600">
            <h4 className="font-bold text-gray-900 border-b pb-2">Description</h4>
            <p className="mt-4 leading-relaxed">{product.description}</p>
            <ul className="mt-4 space-y-1 list-disc pl-5">
              <li>Origine 100% Cameroun garantie</li>
              <li>Produits frais et séchés de qualité premium</li>
              <li>Séchage traditionnel respectant les saveurs</li>
              <li>Emballage hermétique pour une conservation longue durée</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
