import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { BuyerCard } from '@/components/buyers/BuyerCard';
import { FilterPanel } from '@/components/filters/FilterPanel';
import { Notification } from '@/components/ui/Notification';
import { buyersData } from '@/data/buyers';
import type { Buyer } from '@/types/buyer';

// Keep track of accepted buyers in localStorage
const getAcceptedBuyers = (): Buyer[] => {
  const saved = localStorage.getItem('acceptedBuyers');
  return saved ? JSON.parse(saved) : [];
};

export function MatchesContent() {
  const [buyers, setBuyers] = useState(buyersData);
  const [searchTerm, setSearchTerm] = useState('');
  const [notification, setNotification] = useState<string | null>(null);
  const [acceptedBuyers, setAcceptedBuyers] = useState<Buyer[]>(getAcceptedBuyers);

  const handleAccept = (buyer: Buyer) => {
    const newAcceptedBuyers = [...acceptedBuyers, buyer];
    setAcceptedBuyers(newAcceptedBuyers);
    localStorage.setItem('acceptedBuyers', JSON.stringify(newAcceptedBuyers));
    setBuyers(prev => prev.filter(b => b.id !== buyer.id));
    setNotification(`${buyer.name} has been added to your Deal Room`);
  };

  const handleDecline = (buyer: Buyer) => {
    setBuyers(prev => prev.filter(b => b.id !== buyer.id));
  };

  const handleFilterChange = (filters: any) => {
    let filtered = buyersData.filter(buyer => 
      !acceptedBuyers.some(accepted => accepted.id === buyer.id)
    );

    if (filters.industry) {
      filtered = filtered.filter(buyer => buyer.industry === filters.industry);
    }

    if (filters.type) {
      filtered = filtered.filter(buyer => buyer.type === filters.type);
    }

    if (filters.location) {
      filtered = filtered.filter(buyer => buyer.location === filters.location);
    }

    if (filters.dealStructure) {
      filtered = filtered.filter(buyer => 
        buyer.preferredDealStructure.includes(filters.dealStructure)
      );
    }

    if (filters.investmentMin) {
      filtered = filtered.filter(buyer => {
        const min = parseFloat(buyer.investmentRange.split('-')[0].replace(/[^0-9.]/g, ''));
        return min >= parseFloat(filters.investmentMin);
      });
    }

    if (filters.investmentMax) {
      filtered = filtered.filter(buyer => {
        const max = parseFloat(buyer.investmentRange.split('-')[1].replace(/[^0-9.]/g, ''));
        return max <= parseFloat(filters.investmentMax);
      });
    }

    if (searchTerm) {
      filtered = filtered.filter(buyer =>
        buyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        buyer.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
        buyer.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setBuyers(filtered);
  };

  useEffect(() => {
    handleFilterChange({});
  }, [searchTerm, acceptedBuyers]);

  return (
    <div className="p-8 bg-slate-50 dark:bg-slate-900">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Matches</h1>
        <div className="flex space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search matches..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white pl-10 pr-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none w-64"
            />
          </div>
          <FilterPanel onFilterChange={handleFilterChange} />
        </div>
      </div>

      <div className="space-y-4">
        {buyers.length > 0 ? (
          buyers.map((buyer) => (
            <BuyerCard
              key={buyer.id}
              buyer={buyer}
              onAccept={handleAccept}
              onDecline={handleDecline}
            />
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-400">No matches found with the current filters.</p>
          </div>
        )}
      </div>

      {notification && (
        <Notification 
          message={notification} 
          onClose={() => setNotification(null)} 
        />
      )}
    </div>
  );
}