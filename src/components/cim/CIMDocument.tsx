import React from 'react';
import { Download } from 'lucide-react';
import { CIMCoverPage } from './sections/CIMCoverPage';
import { CIMExecutiveSummary } from './sections/CIMExecutiveSummary';
import { CIMMarketOpportunity } from './sections/CIMMarketOpportunity';
import { CIMFinancialPerformance } from './sections/CIMFinancialPerformance';
import { CIMStrategicGrowth } from './sections/CIMStrategicGrowth';
import { CIMOperationalExcellence } from './sections/CIMOperationalExcellence';

interface CIMDocumentProps {
  onDownload: () => void;
}

export function CIMDocument({ onDownload }: CIMDocumentProps) {
  return (
    <div className="space-y-8">
      <button
        onClick={onDownload}
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 flex items-center mx-auto"
      >
        <Download className="h-5 w-5 mr-2" />
        Download CIM
      </button>

      <div className="bg-white rounded-lg border border-slate-200 shadow-lg max-w-5xl mx-auto">
        <CIMCoverPage />

        <div className="p-12 space-y-12">
          <CIMExecutiveSummary />
          <CIMMarketOpportunity />
          <CIMFinancialPerformance />
          <CIMStrategicGrowth />
          <CIMOperationalExcellence />
        </div>

        <div className="bg-slate-50 p-8 rounded-b-lg border-t border-slate-200">
          <p className="text-sm text-slate-500 text-center">
            Confidential Information Memorandum • TechCraft Solutions • {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}