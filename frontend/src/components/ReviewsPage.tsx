
import React from 'react';
import { REVIEWS } from '../constants';

const ReviewsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-4">Avis Clients 2025</h1>
        <p className="text-xl text-gray-500">Agri-Direct CMR est fier de servir plus de 10,000 agriculteurs au Cameroun.</p>
        <div className="flex justify-center items-center gap-8 mt-12">
          <div className="text-center">
            <p className="text-4xl font-black text-green-700">4.8/5</p>
            <p className="text-xs font-black uppercase text-gray-400">Note Globale</p>
          </div>
          <div className="w-px h-12 bg-gray-200"></div>
          <div className="text-center">
            <p className="text-4xl font-black text-green-700">30</p>
            <p className="text-xs font-black uppercase text-gray-400">Avis Vérifiés ce mois</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {REVIEWS.map((rev) => (
          <div key={rev.id} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-700 flex flex-col justify-between hover:scale-[1.02] transition-all">
            <div>
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => <i key={i} className={`fas fa-star ${i < rev.rating ? '' : 'text-gray-200'}`}></i>)}
              </div>
              <p className="text-gray-700 italic leading-loose mb-8">"{rev.comment}"</p>
            </div>
            <div className="flex justify-between items-center border-t pt-6">
              <div>
                <p className="font-black text-sm uppercase text-gray-900">{rev.user}</p>
                <p className="text-[10px] font-bold text-green-700 uppercase">{rev.location}, CMR</p>
              </div>
              <span className="text-[10px] font-black text-gray-400">{rev.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
