
import React from 'react';

interface FooterProps {
  onAboutClick?: () => void;
  onContactClick?: () => void;
  onBlogClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAboutClick, onContactClick, onBlogClick }) => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Service Client</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={onContactClick} className="hover:text-green-500 transition text-left">Contactez-nous</button></li>
              <li><a href="#" className="hover:text-green-500 transition">Livraison au Cameroun</a></li>
              <li><a href="#" className="hover:text-green-500 transition">Retours & Remboursements</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">L'Entreprise</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={onAboutClick} className="hover:text-green-500 transition text-left">À propos d'Agri-Direct CMR</button></li>
              <li><button onClick={onBlogClick} className="hover:text-green-500 transition text-left">Notre Blog Agricole</button></li>
              <li><a href="#" className="hover:text-green-500 transition">Devenir Partenaire</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Contact Douala</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <i className="fas fa-map-marker-alt text-green-500 mt-1"></i>
                <span>Akwa, Blvd de la Liberté,<br />Douala, CMR</span>
              </li>
              <li className="flex gap-3">
                <i className="fas fa-phone text-green-500 mt-1"></i>
                <span>+237 6XX XX XX XX</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Paiement Mobile</h4>
            <p className="text-sm mb-4">Payez en toute sécurité avec vos opérateurs locaux.</p>
            <div className="flex gap-4">
               <div className="bg-white p-2 rounded shadow-sm flex items-center justify-center w-12 h-12 grayscale hover:grayscale-0 transition-all cursor-pointer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Orange-logo.svg" alt="Orange" className="w-8" />
               </div>
               <div className="bg-yellow-400 p-2 rounded shadow-sm flex items-center justify-center w-12 h-12 grayscale hover:grayscale-0 transition-all cursor-pointer">
                  <span className="font-black text-xs text-black">MTN</span>
               </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2025 Agri-Direct Cameroon. Tous droits réservés.</p>
          <div className="flex gap-4 opacity-50">
            <i className="fab fa-facebook text-xl hover:text-white transition cursor-pointer"></i>
            <i className="fab fa-whatsapp text-xl hover:text-white transition cursor-pointer"></i>
            <i className="fab fa-instagram text-xl hover:text-white transition cursor-pointer"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
