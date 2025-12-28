
import React, { useState, useEffect, useRef } from 'react';
import { PRODUCTS, REVIEWS } from '../constants';
import ProductCard from './ProductCard';
import { Product, CartItem } from '../types';

interface HomeProps {
  onViewProduct: (p: Product) => void;
  onAddToCart: (item: CartItem) => void;
  onSeeAllReviews: () => void;
  onCategoryClick: (cat: string) => void;
}

const AutoProductSlider: React.FC<{
  title: string;
  category: string;
  products: Product[];
  onViewProduct: (p: Product) => void;
  onAddToCart: (item: CartItem) => void;
  onViewAll: () => void;
}> = ({ title, products, onViewProduct, onAddToCart, onViewAll }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only auto-slide on desktop
    if (products.length <= 4 || isPaused || window.innerWidth < 768) return;
    const timer = setInterval(() => {
      setStartIndex(prev => (prev + 1) % (products.length - 3));
    }, 3000);
    return () => clearInterval(timer);
  }, [products.length, isPaused]);

  return (
    <section
      className="container mx-auto px-4 py-8 md:py-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex justify-between items-end border-b-2 md:border-b-4 border-green-700 pb-2 md:pb-4 mb-4 md:mb-8">
        <div>
          <h2 className="text-xl md:text-3xl font-black uppercase tracking-tighter text-gray-900">{title}</h2>
          <div className="h-0.5 md:h-1 w-12 md:w-20 bg-green-700 mt-1"></div>
        </div>
        <button
          onClick={onViewAll}
          className="group flex items-center gap-2 text-green-700 font-black text-[10px] md:text-xs uppercase hover:text-green-800 transition-colors"
        >
          Voir tout <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
        </button>
      </div>

      <div className="relative">
        {/* Mobile: Horizontal Scroll | Desktop: Animated Transform */}
        <div
          ref={sliderRef}
          className={`flex gap-4 md:gap-6 no-scrollbar ${window.innerWidth < 768
            ? 'overflow-x-auto snap-x snap-mandatory pb-4'
            : 'transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1)'
            }`}
          style={window.innerWidth >= 768 ? { transform: `translateX(-${startIndex * (100 / 4.2)}%)` } : {}}
        >
          {products.map(p => (
            <div
              key={p.id}
              className="min-w-[85%] md:min-w-[45%] lg:min-w-[23.5%] snap-center animate-fade-in-up"
            >
              <ProductCard
                product={p}
                onViewDetails={onViewProduct}
                onAddToCart={onAddToCart}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home: React.FC<HomeProps> = ({ onViewProduct, onAddToCart, onSeeAllReviews, onCategoryClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [reviewsPaused, setReviewsPaused] = useState(false);

  const SLIDER_IMAGES = [
    { url: 'https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?auto=format&fit=crop&q=80&w=1400', title: 'Campagne de Récolte 2025', sub: 'Le meilleur du terroir camerounais en un clic.' },
    { url: 'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&q=80&w=1400', title: 'Élevage & Nutrition', sub: 'Des solutions JFC robustes pour votre bétail.' },
    { url: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&q=80&w=1400', title: 'Irrigation Moderne', sub: 'Pompes Honda & systèmes Netafim haute performance.' },
  ];

  const PARTNERS = [
    {
      name: 'GIC SOH',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Logo_Cameroun.png', // Fallback to symbolic if direct URL fails
      color: 'bg-red-50',
      tag: 'Céréales'
    },
    {
      name: 'UNION PROD',
      logo: 'https://api.dicebear.com/7.x/initials/svg?seed=UP&backgroundColor=1d4ed8',
      color: 'bg-blue-50',
      tag: 'Coopérative'
    },
    {
      name: 'CAMAGRI',
      logo: 'https://api.dicebear.com/7.x/initials/svg?seed=CA&backgroundColor=15803d',
      color: 'bg-green-50',
      tag: 'Distribution'
    },
    {
      name: 'WEST FARMERS',
      logo: 'https://api.dicebear.com/7.x/initials/svg?seed=WF&backgroundColor=c2410c',
      color: 'bg-orange-50',
      tag: 'Culture'
    },
    {
      name: 'SAVANNA COOP',
      logo: 'https://api.dicebear.com/7.x/initials/svg?seed=SC&backgroundColor=92400e',
      color: 'bg-amber-50',
      tag: 'Nord'
    },
    {
      name: 'LITTORAL AGRI',
      logo: 'https://api.dicebear.com/7.x/initials/svg?seed=LA&backgroundColor=0369a1',
      color: 'bg-cyan-50',
      tag: 'Export'
    }
  ];

  // Auto Hero Slider - 5 seconds
  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide(prev => (prev + 1) % SLIDER_IMAGES.length), 5000);
    return () => clearInterval(timer);
  }, []);

  // Auto Review Slider - 3 seconds
  useEffect(() => {
    if (reviewsPaused) return;
    const timer = setInterval(() => {
      // For mobile (1 visible), cycle through all. For desktop (3 visible), cycle up to length-2.
      const maxIndex = window.innerWidth < 768 ? REVIEWS.length - 1 : REVIEWS.length - 3;
      setReviewIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [reviewsPaused]);

  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Merci pour votre avis ! Il sera publié après modération.");
    setShowReviewForm(false);
    setNewReview({ rating: 5, comment: '' });
  };

  return (
    <div className="space-y-4 pb-20 bg-gray-50/50">
      {/* ... Hero and Trust Badges ... */}
      {/* (Rest of the Hero and Trust Badges code remains unchanged) */}
      <div className="hidden">{/* Placeholder to match structure if needed */}</div>

      {/* Hero Section placeholder for context in replace */}
      <div className="relative h-[500px] lg:h-[700px] overflow-hidden bg-gray-900">
        {SLIDER_IMAGES.map((slide, idx) => (
          <div key={idx} className={`absolute inset-0 transition-all duration-1000 transform ${idx === currentSlide ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-110 z-0'}`}>
            <img src={slide.url} className="w-full h-full object-cover opacity-70" alt={slide.title} />
            <div className="absolute inset-0 flex flex-col justify-center container mx-auto px-6 lg:px-12 text-white">
              <span className="text-yellow-400 font-black tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs mb-3 md:mb-4 uppercase animate-pulse">Exclusivité Agri-Direct CMR</span>
              <h2 className="text-3xl md:text-5xl lg:text-8xl font-black uppercase mb-4 md:mb-6 leading-none tracking-tighter max-w-4xl drop-shadow-2xl">{slide.title}</h2>
              <p className="text-sm md:text-lg lg:text-2xl mb-6 md:mb-10 opacity-90 max-w-xl font-medium leading-relaxed">{slide.sub}</p>
              <button
                onClick={() => onCategoryClick('Offres Spéciales')}
                className="bg-green-700 text-white px-8 md:px-12 py-3 md:py-5 font-black uppercase text-[10px] md:text-xs tracking-[0.1em] md:tracking-[0.2em] hover:bg-white hover:text-green-700 transition-all w-fit shadow-2xl rounded-sm transform hover:scale-105 active:scale-95"
              >
                DÉCOUVRIR LES PROMOS
              </button>
            </div>
          </div>
        ))}
        {/* Progress Dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {SLIDER_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${i === currentSlide ? 'w-12 bg-green-500' : 'w-4 bg-white/30'}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <section className="container mx-auto px-4 -mt-10 relative z-30 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: 'fa-truck-fast', title: 'Livraison Rapide', sub: 'Partout au Cameroun' },
          { icon: 'fa-shield-halved', title: 'Paiement Sécurisé', sub: 'OM / MoMo / Cash' },
          { icon: 'fa-headset', title: 'Support Expert', sub: 'Conseils agronomiques' }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-6 p-8 bg-white shadow-2xl rounded-sm border-l-8 border-green-700 hover:bg-green-50 transition-colors group">
            <i className={`fas ${item.icon} text-4xl text-green-700 group-hover:scale-110 transition-transform`}></i>
            <div>
              <h3 className="font-black uppercase text-sm tracking-widest">{item.title}</h3>
              <p className="text-xs text-gray-500 font-bold">{item.sub}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Automatic Animated Product Sections */}
      <div className="space-y-4 py-8">
        <AutoProductSlider
          title="Protéines & Poissons Secs"
          category="Produits Halieutiques & Protéines"
          products={PRODUCTS.filter(p => p.category === 'Produits Halieutiques & Protéines')}
          onViewProduct={onViewProduct}
          onAddToCart={onAddToCart}
          onViewAll={() => onCategoryClick('Produits Halieutiques & Protéines')}
        />

        <AutoProductSlider
          title="Huiles & Beurre"
          category="Huiles & Matières Grasses"
          products={PRODUCTS.filter(p => p.category === 'Huiles & Matières Grasses')}
          onViewProduct={onViewProduct}
          onAddToCart={onAddToCart}
          onViewAll={() => onCategoryClick('Huiles & Matières Grasses')}
        />

        <AutoProductSlider
          title="Épices & Condiments"
          category="Épices & Condiments Traditionnels"
          products={PRODUCTS.filter(p => p.category === 'Épices & Condiments Traditionnels')}
          onViewProduct={onViewProduct}
          onAddToCart={onAddToCart}
          onViewAll={() => onCategoryClick('Épices & Condiments Traditionnels')}
        />

        <AutoProductSlider
          title="Produits de Base & Farines"
          category="Produits de Base & Accompagnements"
          products={PRODUCTS.filter(p => p.category === 'Produits de Base & Accompagnements')}
          onViewProduct={onViewProduct}
          onAddToCart={onAddToCart}
          onViewAll={() => onCategoryClick('Produits de Base & Accompagnements')}
        />
      </div>

      {/* Reviews Slider Section */}
      <section
        className="bg-green-950 py-16 md:py-24 text-white relative overflow-hidden"
        onMouseEnter={() => setReviewsPaused(true)}
        onMouseLeave={() => setReviewsPaused(false)}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-800/20 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-700/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 gap-6">
            <div>
              <span className="text-green-500 font-black tracking-widest text-[10px] md:text-xs uppercase mb-2 block">Témoignages</span>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase leading-none">Ils nous font confiance</h2>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <button
                onClick={() => setShowReviewForm(true)}
                className="flex-1 md:flex-none bg-green-700 text-white px-6 md:px-10 py-3 md:py-4 font-black uppercase text-[9px] md:text-[10px] tracking-widest hover:bg-green-600 transition-all rounded-sm shadow-xl"
              >
                Laisser un avis
              </button>
              <button onClick={onSeeAllReviews} className="flex-1 md:flex-none bg-white text-green-950 px-6 md:px-10 py-3 md:py-4 font-black uppercase text-[9px] md:text-[10px] tracking-widest hover:bg-green-500 hover:text-white transition-all rounded-sm shadow-xl">Voir tout</button>
            </div>
          </div>

          {showReviewForm && (
            <div className="mb-12 p-6 md:p-8 bg-white/10 backdrop-blur-md rounded-sm border border-white/20 animate-fade-in-up">
              <h3 className="font-black uppercase text-lg mb-6 tracking-tighter">Votre Avis Nous Intéresse</h3>
              <form onSubmit={handleReviewSubmit} className="space-y-4">
                <div className="flex gap-2 mb-4 text-yellow-400">
                  {[1, 2, 3, 4, 5].map(star => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewReview({ ...newReview, rating: star })}
                      className="text-2xl"
                    >
                      <i className={`${star <= newReview.rating ? 'fas' : 'far'} fa-star`}></i>
                    </button>
                  ))}
                </div>
                <textarea
                  required
                  placeholder="Partagez votre expérience avec nos produits..."
                  className="w-full bg-white/5 border border-white/10 p-4 rounded-sm text-white placeholder-white/30 focus:outline-none focus:border-green-500 min-h-[120px]"
                  value={newReview.comment}
                  onChange={e => setNewReview({ ...newReview, comment: e.target.value })}
                ></textarea>
                <div className="flex gap-4">
                  <button type="submit" className="bg-green-600 px-8 py-3 font-black uppercase text-[10px] tracking-widest rounded-sm hover:bg-green-500 transition-all">Envoyer</button>
                  <button type="button" onClick={() => setShowReviewForm(false)} className="text-white/50 font-black uppercase text-[10px] tracking-widest hover:text-white transition-colors">Annuler</button>
                </div>
              </form>
            </div>
          )}

          <div className="relative overflow-hidden px-2">
            <div
              className={`flex gap-4 md:gap-8 transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1) ${window.innerWidth < 768 ? 'no-scrollbar overflow-x-auto snap-x snap-mandatory pb-4' : ''}`}
              style={window.innerWidth >= 768 ? { transform: `translateX(-${reviewIndex * (100 / 3)}%)` } : {}}
            >
              {REVIEWS.map((rev) => (
                <div key={rev.id} className="min-w-[100%] md:min-w-[32%] snap-center bg-white/5 p-6 md:p-12 rounded-sm border border-white/10 flex flex-col justify-between hover:bg-white/10 transition-colors backdrop-blur-sm">
                  <div>
                    <i className="fas fa-quote-left text-2xl md:text-4xl text-green-500 mb-4 md:mb-6 opacity-40"></i>
                    <div className="flex text-yellow-400 mb-4 md:mb-6 gap-1">
                      {[...Array(5)].map((_, i) => <i key={i} className={`fas fa-star text-xs md:text-sm ${i < rev.rating ? '' : 'text-white/20'}`}></i>)}
                    </div>
                    <p className="text-gray-100 italic mb-6 md:mb-10 leading-relaxed text-base md:text-lg font-medium">"{rev.comment}"</p>
                  </div>
                  <div className="flex justify-between items-center border-t border-white/10 pt-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center font-black text-lg shadow-inner">{rev.user[0]}</div>
                      <div>
                        <p className="font-black text-sm uppercase tracking-wider">{rev.user}</p>
                        <p className="text-[10px] text-green-500 font-bold uppercase">{rev.location}, CMR</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-white/30">{rev.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section with Real-Style Logos */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.6em] mb-4">Nos Coopératives Partenaires au Cameroun</p>
          <h3 className="text-3xl font-black uppercase tracking-tighter">Un Réseau de Confiance</h3>
          <div className="w-16 h-1 bg-green-700 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {PARTNERS.map(partner => (
            <div key={partner.name} className="group relative flex flex-col items-center bg-white border border-gray-100 p-8 hover:border-green-700 transition-all duration-500 hover:shadow-2xl">
              <div className={`w-24 h-24 relative overflow-hidden flex items-center justify-center mb-6 rounded-lg ${partner.color} transition-colors group-hover:bg-white`}>
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-16 h-16 object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
              </div>
              <div className="text-center">
                <p className="text-xs font-black uppercase tracking-widest text-gray-900 mb-1">{partner.name}</p>
                <span className="text-[9px] font-bold text-green-700 uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">Partenaire {partner.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .cubic-bezier {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
};

export default Home;
