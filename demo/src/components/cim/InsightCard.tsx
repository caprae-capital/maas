import React from 'react';
import { Lightbulb, CheckCircle } from 'lucide-react';
import { CIMInsight } from './types';

interface InsightCardProps {
  insight: CIMInsight;
  isSelected: boolean;
  onToggle: (id: string) => void;
}

export function InsightCard({ insight, isSelected, onToggle }: InsightCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'market': return 'from-blue-500 to-blue-600';
      case 'financial': return 'from-emerald-500 to-emerald-600';
      case 'strategic': return 'from-purple-500 to-purple-600';
      case 'operational': return 'from-orange-500 to-orange-600';
      default: return 'from-slate-500 to-slate-600';
    }
  };

  const getCategoryBg = (category: string) => {
    switch (category) {
      case 'market': return 'bg-blue-50 text-blue-600';
      case 'financial': return 'bg-emerald-50 text-emerald-600';
      case 'strategic': return 'bg-purple-50 text-purple-600';
      case 'operational': return 'bg-orange-50 text-orange-600';
      default: return 'bg-slate-50 text-slate-600';
    }
  };

  return (
    <button
      onClick={() => onToggle(insight.id)}
      className={`group relative p-4 rounded-xl border transition-all duration-300 text-left w-full ${
        isSelected
          ? 'border-blue-200 bg-blue-50/50'
          : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50'
      }`}
    >
      <div className="flex items-start space-x-4">
        <div className={`relative p-2 rounded-lg bg-gradient-to-br ${getCategoryColor(insight.category)} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <Lightbulb className="h-5 w-5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className={`font-medium transition-colors ${
            isSelected ? 'text-slate-900' : 'text-slate-700'
          }`}>
            {insight.content}
          </p>
          <div className="flex items-center mt-2 space-x-2">
            <span className={`px-2 py-1 text-xs rounded-full ${getCategoryBg(insight.category)} capitalize`}>
              {insight.category}
            </span>
            {isSelected && (
              <span className="text-xs text-blue-600">Selected</span>
            )}
          </div>
        </div>
        <div className={`flex items-center justify-center w-5 h-5 rounded-full transition-all duration-300 ${
          isSelected
            ? 'bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/20'
            : 'border-2 border-slate-300'
        }`}>
          {isSelected && (
            <CheckCircle className="h-5 w-5 text-white" />
          )}
        </div>
      </div>
    </button>
  );
}