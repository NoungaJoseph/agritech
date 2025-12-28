
import React, { useState } from 'react';
import { geminiService } from '../services/geminiService';
import { PRODUCTS } from '../constants';

const ShoppingAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResponse(null);
    const advice = await geminiService.getShoppingAdvice(query, PRODUCTS);
    setResponse(advice);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-2xl border w-80 overflow-hidden flex flex-col">
          <div className="bg-green-700 text-white p-4 flex justify-between items-center">
            <h4 className="font-bold flex items-center gap-2">
              <i className="fas fa-robot"></i> AgriDirect Assistant
            </h4>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-75">
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <div className="p-4 h-64 overflow-y-auto bg-gray-50 flex flex-col gap-4">
            <p className="text-xs text-gray-600 bg-white p-3 rounded shadow-sm">
              Hello! I'm your AI assistant. Ask me anything about our boilersuits, sizing, or which brand fits your needs best!
            </p>
            
            {loading && (
              <div className="flex justify-center py-4">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-700"></div>
              </div>
            )}

            {response && (
              <div className="text-xs text-white bg-green-600 p-3 rounded shadow-sm animate-fade-in">
                {response}
              </div>
            )}
          </div>

          <div className="p-4 border-t bg-white flex gap-2">
            <input
              type="text"
              placeholder="Ask a question..."
              className="flex-1 text-sm border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-700"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAsk()}
            />
            <button
              onClick={handleAsk}
              disabled={loading}
              className="bg-green-700 text-white w-10 h-10 rounded flex items-center justify-center hover:bg-green-800 disabled:opacity-50"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-700 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
        >
          <i className="fas fa-robot text-2xl"></i>
        </button>
      )}
    </div>
  );
};

export default ShoppingAssistant;
