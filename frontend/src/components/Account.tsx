
import React, { useState } from 'react';

const Account: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-4xl shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
        {/* Decorative Side */}
        <div className="md:w-1/2 bg-green-900 p-12 text-white flex flex-col justify-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-black uppercase mb-6 leading-tight">Bienvenue sur Agri-Direct CMR</h2>
            <p className="text-green-200 text-lg leading-loose mb-8">Rejoignez la plus grande communauté d'agriculteurs et de consommateurs connectés au Cameroun.</p>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-wider">
              <li className="flex items-center gap-3"><i className="fas fa-check-circle text-yellow-400"></i> Prix Grossistes</li>
              <li className="flex items-center gap-3"><i className="fas fa-check-circle text-yellow-400"></i> Historique de Commandes</li>
              <li className="flex items-center gap-3"><i className="fas fa-check-circle text-yellow-400"></i> Offres Exclusives</li>
            </ul>
          </div>
          <i className="fas fa-seedling absolute -bottom-10 -right-10 text-[200px] opacity-10 rotate-12"></i>
        </div>

        {/* Form Side */}
        <div className="md:w-1/2 p-12 flex flex-col justify-center bg-gray-50">
          <div className="mb-10 flex gap-8 border-b">
            <button 
              onClick={() => setIsLogin(true)}
              className={`pb-4 text-sm font-black uppercase tracking-widest transition-all ${isLogin ? 'text-green-700 border-b-4 border-green-700' : 'text-gray-400'}`}
            >
              Connexion
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={`pb-4 text-sm font-black uppercase tracking-widest transition-all ${!isLogin ? 'text-green-700 border-b-4 border-green-700' : 'text-gray-400'}`}
            >
              Créer un Compte
            </button>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Prénom" className="w-full p-4 border rounded focus:ring-2 focus:ring-green-700 outline-none text-sm" />
                <input type="text" placeholder="Nom" className="w-full p-4 border rounded focus:ring-2 focus:ring-green-700 outline-none text-sm" />
              </div>
            )}
            <input type="email" placeholder="Email" className="w-full p-4 border rounded focus:ring-2 focus:ring-green-700 outline-none text-sm" />
            {!isLogin && (
              <div className="flex gap-2">
                <span className="p-4 bg-gray-200 rounded text-sm font-bold">+237</span>
                <input type="tel" placeholder="Numéro de téléphone" className="flex-1 p-4 border rounded focus:ring-2 focus:ring-green-700 outline-none text-sm" />
              </div>
            )}
            <input type="password" placeholder="Mot de passe" className="w-full p-4 border rounded focus:ring-2 focus:ring-green-700 outline-none text-sm" />
            
            <button className="w-full bg-green-700 text-white py-4 rounded font-black uppercase tracking-widest hover:bg-green-800 transition-all shadow-lg">
              {isLogin ? 'SE CONNECTER' : 'S\'INSCRIRE'}
            </button>
            
            <div className="text-center">
              <a href="#" className="text-xs text-gray-400 hover:text-green-700 font-bold uppercase underline">Mot de passe oublié ?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
