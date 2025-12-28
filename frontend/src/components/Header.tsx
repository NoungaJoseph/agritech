
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleSubItemClick = (e: React.MouseEvent, sub: string) => {
    e.stopPropagation();
    onSearch(sub);
    setActiveDropdown(null);
  };

  return (
    <header className="bg-white border-b sticky top-0 z-[70] transition-all duration-300">
      <div className="bg-green-800 text-white text-[11px] py-1.5 border-b font-bold tracking-wide">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-1.5"><i className="fas fa-truck"></i> Livraison Gratuite sur Douala & Yaoundé dès 100.000 FCFA</span>
            <span className="flex items-center gap-1.5 hover:text-green-300 cursor-pointer"><i className="fas fa-check-circle"></i> Support Expert 24/7</span>
          </div>
          <div className="flex gap-6 items-center">
            <div id="google_translate_element" className="flex items-center"></div>
            <span className="flex items-center gap-1.5"><i className="fas fa-phone-alt"></i> Commandez: <span className="text-yellow-400">+237 6XX XX XX XX</span></span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div onClick={onLogoClick} className="text-2xl lg:text-3xl font-black text-green-700 cursor-pointer flex items-center gap-2 shrink-0">
            <i className="fas fa-seedling text-3xl"></i>
            <span className="tracking-tighter uppercase leading-none flex flex-col">
              <span>AGRI-DIRECT</span>
              <span className="text-gray-900 text-[10px] tracking-[0.3em] font-bold">CAMEROON</span>
            </span>
          </div>

          <form onSubmit={handleSubmit} className="flex-1 w-full flex">
            <input
              type="text"
              placeholder="Cherchez des semences, engrais ou outils..."
              className="w-full border-2 border-green-700 rounded-l-md px-5 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-100"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-green-700 text-white px-8 py-2.5 rounded-r-md hover:bg-green-800 font-bold uppercase text-sm">RECHERCHER</button>
          </form>

          <div className="flex items-center gap-6">
            <div onClick={onAccountClick} className="flex flex-col items-center gap-1 cursor-pointer group hover:text-green-700 transition-colors">
              <i className="far fa-user text-xl"></i>
              <span className="text-[9px] font-black uppercase">Compte</span>
            </div>
            <div onClick={onCartClick} className="flex flex-col items-center gap-1 cursor-pointer group hover:text-green-700 transition-colors relative">
              <div className="relative">
                <i className="fas fa-shopping-basket text-xl"></i>
                <span className="absolute -top-1.5 -right-2 bg-green-700 text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-bold">{cartCount}</span>
              </div>
              <span className="text-[9px] font-black uppercase">Panier</span>
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
                className={`relative flex items-center px-4 cursor-pointer hover:bg-white hover:text-green-700 group ${cat === 'Offres Spéciales' ? 'text-red-600' : ''}`}
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
    </header>
  );
};

export default Header;
