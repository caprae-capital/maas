import React, { useState } from 'react';
import { Users } from 'lucide-react';
import { DealCard } from './DealCard';
import { getDealStages } from '@/utils/dealStages';
import type { Deal } from '@/types/deal';

export function DealRoomContent() {
  const [acceptedBuyers, setAcceptedBuyers] = useState(() => {
    try {
      const savedBuyers = localStorage.getItem('acceptedBuyers');
      return savedBuyers ? JSON.parse(savedBuyers) : [];
    } catch (error) {
      console.error('Error loading accepted buyers:', error);
      return [];
    }
  });

  const handleRemoveDeal = (dealId: string) => {
    const newBuyers = acceptedBuyers.filter(buyer => buyer.id !== dealId);
    setAcceptedBuyers(newBuyers);
    localStorage.setItem('acceptedBuyers', JSON.stringify(newBuyers));
  };

  const deals = acceptedBuyers.map((buyer, index) => {
    const stages = getDealStages();
    const stageData = stages[index % stages.length];

    const defaultTeam = [
      {
        name: 'Deal Manager',
        role: 'Lead',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      {
        name: 'Deal Support',
        role: 'Analyst',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      }
    ];

    const team = buyer.keyPeople && buyer.keyPeople.length > 0
      ? buyer.keyPeople.slice(0, 2).map(person => ({
          name: person.name,
          role: person.role,
          avatar: person.image
        }))
      : defaultTeam;

    return {
      id: buyer.id,
      company: buyer.name,
      logo: buyer.companyImage,
      stage: stageData.stage,
      lastActivity: stageData.lastActivity,
      milestones: stageData.milestones,
      dueDate: new Date(Date.now() + (30 + index * 15) * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      dealSize: buyer.investmentRange,
      team,
      status: stageData.status
    };
  });

  return (
    <div className="p-8 bg-slate-50 dark:bg-slate-900">
      <div>
        <div className="flex items-center space-x-3 mb-6">
          <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Current Matched Buyers</h2>
        </div>
        
        {deals && deals.length > 0 ? (
          <div className="space-y-8">
            {deals.map((deal) => (
              <DealCard
                key={deal.id}
                deal={deal}
                onRemove={handleRemoveDeal}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
            <Users className="h-12 w-12 text-slate-400 dark:text-slate-500 mx-auto mb-4" />
            <p className="text-slate-600 dark:text-slate-400">
              No active deals yet. Accept matches to start the deal process.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}