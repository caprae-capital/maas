import React from 'react';

interface CIMProgressProps {
  selectedCount: number;
  totalCount: number;
}

export function CIMProgress({ selectedCount, totalCount }: CIMProgressProps) {
  const progress = Math.round((selectedCount / (totalCount * 0.5)) * 100);

  return (
    <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-200">
      <div className="flex items-center space-x-2">
        <div className="w-32 h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-sm text-slate-600">{progress}%</span>
      </div>
      <div className="h-4 w-px bg-slate-200" />
      <div className="text-sm text-slate-600">
        {selectedCount} insights selected
      </div>
    </div>
  );
}