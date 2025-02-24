import React from 'react';
import { DealDocuments } from '@/components/deals/DealDocuments';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function DocumentStore() {
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-slate-50 dark:bg-slate-900 min-h-screen">
      <div className="mb-8">
        <button
          onClick={() => navigate('/app/deals')}
          className="flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white mb-4"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Deal Room
        </button>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Document Store</h1>
      </div>

      <DealDocuments dealId="1" />
    </div>
  );
}