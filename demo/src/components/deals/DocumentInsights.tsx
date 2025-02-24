import React from 'react';
import { Brain, Star } from 'lucide-react';

interface DocumentInsightsProps {
  insights: string[];
  qualityScore: number;
}

export function DocumentInsights({ insights, qualityScore }: DocumentInsightsProps) {
  return (
    <div className="mt-4 bg-indigo-50/50 dark:bg-indigo-900/20 rounded-lg p-4">
      <div className="flex items-center space-x-2 mb-3">
        <Brain className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
        <h4 className="font-medium text-indigo-900 dark:text-indigo-300">AI Insights</h4>
        <div className="ml-auto flex items-center space-x-1">
          <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
          <span className="text-sm font-medium text-amber-600 dark:text-amber-400">
            {qualityScore}/10
          </span>
        </div>
      </div>
      <ul className="space-y-2">
        {insights.map((insight, index) => (
          <li
            key={index}
            className="flex items-start space-x-2 text-sm text-indigo-700 dark:text-indigo-300"
          >
            <span className="font-medium text-indigo-500 dark:text-indigo-400 mt-0.5">•</span>
            <span>{insight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}