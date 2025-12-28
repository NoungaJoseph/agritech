
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import SidebarFilters from './components/SidebarFilters';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import ShoppingAssistant from './components/ShoppingAssistant';
import Account from './components/Account';
import Checkout from './components/Checkout';
import ReviewsPage from './components/ReviewsPage';
import Blog from './components/Blog';
import { PRODUCTS } from './constants';
import { Product, CartItem, FilterState, View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    brands: [],
    priceRange: [0, 1000000],
    sizes: [],
    colors: []
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchBrand = filters.brands.length === 0 || filters.brands.includes(p.brand);
      const matchCategory = !activeCategory || p.category === activeCategory;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchBrand && matchCategory && matchSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [filters, searchQuery, activeCategory, sortBy]);

  const handleAddToCart = (item: CartItem) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i);
      return [...prev, item];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => setCartItems(prev => prev.filter(i => i.id !== id));
  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(i => i.id === id ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i));
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setActiveCategory(null);
    setCurrentView('grid');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setSearchQuery('');
    setCurrentView('grid');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (view: View) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header 
        cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
        onLogoClick={() => navigateTo('home')}
        onSearch={handleSearch}
        onCategoryClick={handleCategoryClick}
        onAccountClick={() => navigateTo('account')}
      />

      <main className="flex-1">
        {currentView === 'home' && (
          <Home 
            onViewProduct={(p) => { setSelectedProduct(p); navigateTo('detail'); }} 
            onAddToCart={handleAddToCart} 
            onSeeAllReviews={() => navigateTo('reviews')} 
            onCategoryClick={handleCategoryClick}
          />
        )}
        {currentView === 'grid' && (
          <div className="container mx-auto px-4 py-8 animate-fade-in">
             <div className="flex flex-col lg:flex-row gap-8">
              <SidebarFilters filters={filters} onFilterChange={setFilters} />
              <div className="flex-1">
                <div className="mb-8 border-b pb-4 flex flex-col md:flex-row justify-between items-center gap-4">
                  <h2 className="text-2xl font-black uppercase tracking-tighter">
                    {activeCategory || (searchQuery ? `Résultats: "${searchQuery}"` : "Tout le Catalogue")}
                    <span className="text-sm font-normal text-gray-400 ml-3">({filteredProducts.length})</span>
                  </h2>
                  <select className="bg-white border rounded px-3 py-1.5 text-xs font-black uppercase" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="featured">Populaire</option>
                    <option value="price-low">Prix Bas</option>
                    <option value="price-high">Prix Haut</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map(p => (
                    <ProductCard key={p.id} product={p} onViewDetails={(p) => { setSelectedProduct(p); navigateTo('detail'); }} onAddToCart={handleAddToCart} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {currentView === 'detail' && selectedProduct && <div className="container mx-auto px-4 py-8"><ProductDetail product={selectedProduct} onAddToCart={handleAddToCart} onBack={() => navigateTo('grid')} /></div>}
        {currentView === 'account' && <Account />}
        {currentView === 'checkout' && <Checkout cartItems={cartItems} onComplete={() => navigateTo('home')} />}
        {currentView === 'reviews' && <ReviewsPage />}
        {currentView === 'blog' && <Blog />}
        {currentView === 'about' && <div className="p-20 text-center">Page À Propos en construction</div>}
        {currentView === 'contact' && <div className="p-20 text-center">Page Contact en construction</div>}
      </main>

      <Footer 
        onAboutClick={() => navigateTo('about')}
        onContactClick={() => navigateTo('contact')}
        onBlogClick={() => navigateTo('blog')}
      />
      
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
        onCheckout={() => { setIsCartOpen(false); navigateTo('checkout'); }}
      />
      <ShoppingAssistant />

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default App;
