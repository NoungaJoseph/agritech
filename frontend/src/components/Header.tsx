
import React, { useState } from 'react';
import { NAV_CATEGORIES, MEGA_MENU_DATA } from '../constants';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onLogoClick: () => void;
  onSearch: (query: string) => void;
  onCategoryClick: (category: string) => void;
  onAccountClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick, onLogoClick, onSearch, onCategoryClick, onAccountClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
    setIsMobileMenuOpen(false);
  };

  const handleSubItemClick = (e: React.MouseEvent, sub: string) => {
    e.stopPropagation();
    onSearch(sub);
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b sticky top-0 z-[70] transition-all duration-300">
      <div className="bg-green-800 text-white text-[11px] py-1.5 border-b font-bold tracking-wide hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-1.5"><i className="fas fa-truck"></i> Livraison Gratuite sur Douala & Yaoundé dès 100.000 FCFA</span>
            <span className="flex items-center gap-1.5 hover:text-green-300 cursor-pointer"><i className="fas fa-check-circle"></i> Support Expert 24/7</span>
          </div>
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-1.5"><i className="fas fa-phone-alt"></i> Commandez: <span className="text-yellow-400">+237 654 228 898</span></span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-row items-center justify-between gap-6">
          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-green-700 text-2xl p-2"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div onClick={onLogoClick} className="text-xl lg:text-3xl font-black text-green-700 cursor-pointer flex items-center gap-2 shrink-0">
            <i className="fas fa-seedling text-2xl md:text-3xl"></i>
            <span className="tracking-tighter uppercase leading-none flex flex-col">
              <span className="text-lg md:text-2xl">AGRI-DIRECT</span>
              <span className="text-gray-900 text-[8px] md:text-[10px] tracking-[0.3em] font-bold">CAMEROON</span>
            </span>
          </div>

          <form onSubmit={handleSubmit} className="hidden md:flex flex-1 w-full max-w-2xl">
            <input
              type="text"
              placeholder="Cherchez du poisson, des huiles ou des épices..."
              className="w-full border-2 border-green-700 rounded-l-md px-5 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-100"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-green-700 text-white px-8 py-2.5 rounded-r-md hover:bg-green-800 font-bold uppercase text-sm whitespace-nowrap">RECHERCHER</button>
          </form>

          <div className="flex items-center gap-4 md:gap-6">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden flex flex-col items-center gap-1 text-gray-500"
            >
              <i className="fas fa-search text-xl"></i>
            </button>
            <div onClick={onAccountClick} className="flex flex-col items-center gap-1 cursor-pointer group hover:text-green-700 transition-colors">
              <i className="far fa-user text-xl"></i>
              <span className="text-[9px] font-black uppercase hidden md:block">Compte</span>
            </div>
            <div onClick={onCartClick} className="flex flex-col items-center gap-1 cursor-pointer group hover:text-green-700 transition-colors relative">
              <div className="relative">
                <i className="fas fa-shopping-basket text-xl"></i>
                <span className="absolute -top-1.5 -right-2 bg-green-700 text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-bold">{cartCount}</span>
              </div>
              <span className="text-[9px] font-black uppercase hidden md:block">Panier</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-gray-100/80 backdrop-blur-sm border-t border-b hidden md:block relative">
        <div className="container mx-auto px-4">
          <ul className="flex justify-between items-stretch h-14 text-[11px] lg:text-[12px] font-black text-gray-800 uppercase">
            {NAV_CATEGORIES.map(cat => (
              <li
                key={cat}
                onMouseEnter={() => setActiveDropdown(cat)}
                onMouseLeave={() => setActiveDropdown(null)}
                className={`relative flex items-center px-4 cursor-pointer hover:bg-white hover:text-green-700 group`}
              >
                <span onClick={() => onCategoryClick(cat)}>{cat}</span>
                <i className={`fas fa-chevron-down ml-2 text-[7px] transition-transform ${activeDropdown === cat ? 'rotate-180' : ''}`}></i>
                {activeDropdown === cat && (
                  <div className="absolute top-full left-0 min-w-[320px] bg-white shadow-2xl border-t-4 border-green-700 p-8 z-[80] animate-slide-up">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                      {MEGA_MENU_DATA[cat]?.map(sub => (
                        <div key={sub} onClick={(e) => handleSubItemClick(e, sub)} className="text-gray-600 hover:text-green-700 py-1.5 text-[11px] font-bold flex items-center gap-2 group/item">
                          <i className="fas fa-caret-right text-gray-300 group-hover/item:text-green-700"></i> {sub}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-green-700 transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="absolute top-0 left-0 w-[85%] h-full bg-white shadow-2xl animate-slide-right flex flex-col">
            <div className="p-6 border-b flex justify-between items-center bg-green-800 text-white">
              <div className="font-black text-xl flex items-center gap-2">
                <i className="fas fa-seedling"></i> AGRI-DIRECT
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fas fa-times text-2xl"></i>
              </button>
            </div>

            <div className="p-6">
              <form onSubmit={handleSubmit} className="flex mb-8">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="w-full border-2 border-green-700 rounded-l-md px-4 py-2 text-sm focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="bg-green-700 text-white px-4 py-2 rounded-r-md"><i className="fas fa-search"></i></button>
              </form>

              <div className="space-y-1">
                <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Catégories</h3>
                {NAV_CATEGORIES.map(cat => (
                  <div key={cat} className="border-b last:border-0">
                    <div
                      className="py-4 flex justify-between items-center font-black text-xs uppercase"
                      onClick={() => {
                        if (activeDropdown === cat) setActiveDropdown(null);
                        else setActiveDropdown(cat);
                      }}
                    >
                      <span onClick={(e) => { e.stopPropagation(); onCategoryClick(cat); setIsMobileMenuOpen(false); }}>{cat}</span>
                      <i className={`fas fa-plus text-[10px] transition-transform ${activeDropdown === cat ? 'rotate-45' : ''}`}></i>
                    </div>
                    {activeDropdown === cat && (
                      <div className="pb-4 pl-4 grid grid-cols-1 gap-2 animate-fade-in">
                        {MEGA_MENU_DATA[cat]?.map(sub => (
                          <div
                            key={sub}
                            onClick={(e) => handleSubItemClick(e as any, sub)}
                            className="text-[11px] font-bold text-gray-500 py-1"
                          >
                            {sub}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto p-6 bg-gray-50 border-t space-y-4">
              <div className="flex items-center gap-3 text-xs font-bold text-gray-600">
                <i className="fas fa-phone-alt text-green-700"></i> +237 654 228 898
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-gray-600">
                <i className="fas fa-envelope text-green-700"></i> ballahlindamaiyeh@gmail.com
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideRight { from { transform: translateX(-100%); } to { transform: translateX(0); } }
        .animate-slide-right { animation: slideRight 0.3s ease-out forwards; }
      `}</style>
    </header>
  );
};

export default Header;
