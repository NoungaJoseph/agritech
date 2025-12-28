
import React, { useState } from 'react';
import { CartItem } from '../types';

interface CheckoutProps {
  cartItems: CartItem[];
  onComplete: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ cartItems, onComplete }) => {
  const [step, setStep] = useState(1);
  const total = cartItems.reduce((acc, i) => acc + (i.price * i.quantity), 0);

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Main Checkout Flow */}
        <div className="flex-1 space-y-8">
          {/* Progress Bar */}
          <div className="flex justify-between items-center mb-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 z-0"></div>
            {[1, 2, 3].map(s => (
              <div key={s} className={`w-10 h-10 rounded-full flex items-center justify-center z-10 font-black text-sm transition-all ${step >= s ? 'bg-green-700 text-white' : 'bg-white border-2 border-gray-200 text-gray-400'}`}>
                {s}
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 animate-fade-in">
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-black uppercase tracking-tighter">Informations de Contact</h3>
                <div className="grid grid-cols-2 gap-4">
                  <input placeholder="Prénom" className="p-4 border rounded focus:ring-2 focus:ring-green-700 outline-none w-full" />
                  <input placeholder="Nom" className="p-4 border rounded focus:ring-2 focus:ring-green-700 outline-none w-full" />
                </div>
                <input placeholder="Email" className="p-4 border rounded focus:ring-2 focus:ring-green-700 outline-none w-full" />
                <input placeholder="Adresse (Quartier/Rue)" className="p-4 border rounded focus:ring-2 focus:ring-green-700 outline-none w-full" />
                <button onClick={() => setStep(2)} className="w-full bg-green-700 text-white py-4 font-black uppercase tracking-widest rounded hover:bg-green-800 transition-all">Suivant : Livraison</button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-black uppercase tracking-tighter">Méthode de Livraison</h3>
                <div className="space-y-4">
                  {[
                    { id: 'dla', title: 'Livraison Douala Express', time: '24h', price: 2000 },
                    { id: 'yde', title: 'Livraison Yaoundé Rapide', time: '48h', price: 3000 },
                    { id: 'other', title: 'Reste du Cameroun (Agences)', time: '3-5 jours', price: 5000 }
                  ].map(method => (
                    <label key={method.id} className="flex items-center justify-between p-6 border-2 rounded-xl cursor-pointer hover:border-green-700 transition-all has-[:checked]:bg-green-50 has-[:checked]:border-green-700">
                      <div className="flex items-center gap-4">
                        <input type="radio" name="shipping" className="w-5 h-5 accent-green-700" defaultChecked={method.id === 'dla'} />
                        <div>
                          <p className="font-black text-sm uppercase">{method.title}</p>
                          <p className="text-xs text-gray-500">{method.time}</p>
                        </div>
                      </div>
                      <span className="font-black text-green-700">{method.price.toLocaleString()} FCFA</span>
                    </label>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button onClick={() => setStep(1)} className="flex-1 border-2 border-gray-200 text-gray-500 py-4 font-black uppercase tracking-widest rounded">Retour</button>
                  <button onClick={() => setStep(3)} className="flex-2 bg-green-700 text-white py-4 font-black uppercase tracking-widest rounded hover:bg-green-800 px-12 transition-all">Suivant : Paiement</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-black uppercase tracking-tighter">Paiement Sécurisé</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { id: 'mtn', title: 'MTN Mobile Money', color: 'bg-yellow-400', icon: 'fa-mobile' },
                    { id: 'orange', title: 'Orange Money', color: 'bg-orange-500', icon: 'fa-mobile' },
                    { id: 'visa', title: 'Visa / Mastercard', color: 'bg-blue-600', icon: 'fa-credit-card' },
                    { id: 'cash', title: 'Cash à la Livraison', color: 'bg-green-600', icon: 'fa-money-bill' }
                  ].map(pay => (
                    <label key={pay.id} className="flex flex-col items-center justify-center p-8 border-2 rounded-xl cursor-pointer hover:border-green-700 transition-all has-[:checked]:border-green-700 has-[:checked]:ring-2 has-[:checked]:ring-green-100">
                      <input type="radio" name="payment" className="hidden" defaultChecked={pay.id === 'mtn'} />
                      <div className={`w-12 h-12 ${pay.color} text-white rounded-full flex items-center justify-center mb-4 text-xl shadow-lg`}>
                        <i className={`fas ${pay.icon}`}></i>
                      </div>
                      <span className="font-black text-[10px] uppercase tracking-widest">{pay.title}</span>
                    </label>
                  ))}
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center space-y-4">
                  <p className="text-xs text-gray-500 font-bold uppercase">Entrez votre numéro pour le paiement</p>
                  <input placeholder="6XX XX XX XX" className="text-center text-2xl font-black tracking-widest p-4 border-2 border-green-700 rounded w-full outline-none focus:bg-white transition-all" />
                </div>
                <button onClick={onComplete} className="w-full bg-green-700 text-white py-5 font-black uppercase tracking-[0.2em] rounded-xl hover:bg-green-800 shadow-2xl transition-all">CONFIRMER LA COMMANDE</button>
              </div>
            )}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-[380px]">
          <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-2xl sticky top-32">
            <h4 className="text-xl font-black uppercase mb-8 border-b border-white/10 pb-4">Résumé de la Commande</h4>
            <div className="space-y-4 mb-8 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between items-center text-sm">
                  <span className="opacity-70">{item.quantity}x {item.name}</span>
                  <span className="font-bold">{(item.price * item.quantity).toLocaleString()} FCFA</span>
                </div>
              ))}
            </div>
            <div className="space-y-4 border-t border-white/10 pt-6">
              <div className="flex justify-between text-sm opacity-70">
                <span>Sous-total</span>
                <span>{total.toLocaleString()} FCFA</span>
              </div>
              <div className="flex justify-between text-sm opacity-70">
                <span>Livraison</span>
                <span>Calculé à l'étape 2</span>
              </div>
              <div className="flex justify-between text-2xl font-black pt-4 border-t border-white/10 text-green-400">
                <span>TOTAL</span>
                <span>{total.toLocaleString()} FCFA</span>
              </div>
            </div>
            <p className="text-[10px] uppercase font-bold text-gray-500 mt-8 text-center tracking-widest">Transaction 100% Sécurisée</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
