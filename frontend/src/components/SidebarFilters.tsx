
import React from 'react';
import { BRANDS, SIZES, COLORS } from '../constants';
import { FilterState } from '../types';

interface SidebarFiltersProps {
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  onClose?: () => void;
}

const SidebarFilters: React.FC<SidebarFiltersProps> = ({ filters, onFilterChange, onClose }) => {
  const toggleFilter = (type: keyof FilterState, value: string) => {
    const current = filters[type] as string[];
    const updated = current.includes(value)
      ? current.filter(item => item !== value)
      : [...current, value];
    onFilterChange({ ...filters, [type]: updated });
  };

  return (
    <div className="w-full lg:w-64 space-y-6">
      <div className="bg-white p-4 border rounded-md shadow-sm h-full overflow-y-auto lg:h-auto">
        <div className="flex justify-between items-center mb-6 lg:hidden border-b pb-4">
          <h3 className="font-black text-xl uppercase tracking-tighter text-green-700 font-sans">Filtres</h3>
          <button onClick={onClose} className="p-2 text-gray-500 hover:text-green-700 transition-colors">
            <i className="fas fa-times text-2xl"></i>
          </button>
        </div>

        <h3 className="font-bold text-lg mb-4 hidden lg:flex items-center gap-2 border-b-2 border-green-700 pb-2">
          <i className="fas fa-filter text-green-700"></i> Filtres
        </h3>

        {/* Brand Filter */}
        <div className="mb-6">
          <h4 className="font-bold text-sm text-gray-600 uppercase mb-3 border-b pb-1">Marque</h4>
          <div className="space-y-2">
            {BRANDS.map(brand => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.brands.includes(brand)}
                  onChange={() => toggleFilter('brands', brand)}
                  className="rounded text-green-600 focus:ring-green-500"
                />
                <span className="text-sm group-hover:text-green-700 transition">{brand}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Size Filter */}
        <div className="mb-6">
          <h4 className="font-bold text-sm text-gray-600 uppercase mb-3 border-b pb-1">Poids / Format</h4>
          <div className="grid grid-cols-3 gap-2">
            {SIZES.map(size => (
              <button
                key={size}
                onClick={() => toggleFilter('sizes', size)}
                className={`text-xs py-2 px-1 rounded border transition ${filters.sizes.includes(size)
                  ? 'bg-green-700 text-white border-green-700'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-green-700'
                  }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color Filter */}
        <div className="mb-6">
          <h4 className="font-bold text-sm text-gray-600 uppercase mb-3 border-b pb-1">Variété</h4>
          <div className="space-y-2">
            {COLORS.map(color => (
              <label key={color} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.colors.includes(color)}
                  onChange={() => toggleFilter('colors', color)}
                  className="rounded text-green-600 focus:ring-green-500"
                />
                <span className="text-sm group-hover:text-green-700 transition">{color}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Clear Button */}
        <button
          onClick={() => {
            onFilterChange({ brands: [], priceRange: [0, 1000000], sizes: [], colors: [] });
            onClose?.();
          }}
          className="w-full py-3 text-xs uppercase font-black text-green-700 hover:bg-green-50 border-2 border-green-700 rounded transition mt-4"
        >
          Effacer les filtres
        </button>
      </div>

      {/* Promotional Banner */}
      <div className="hidden lg:block bg-green-700 text-white p-6 rounded-md shadow-sm relative overflow-hidden group">
        <div className="relative z-10">
          <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2">Nouvelle Arrivée</p>
          <h4 className="text-xl font-bold mb-4">Poivre de Penja Authentique</h4>
          <button className="bg-white text-green-700 px-4 py-2 rounded font-bold text-sm hover:bg-gray-100 transition">
            Acheter maintenant
          </button>
        </div>
        <i className="fas fa-leaf absolute -right-4 -bottom-4 text-7xl opacity-10 group-hover:scale-110 transition duration-500"></i>
      </div>
    </div>
  );
};

export default SidebarFilters;
