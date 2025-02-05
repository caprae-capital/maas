import React from 'react';
import { Brain, AlertTriangle, Users, Target } from 'lucide-react';
import type { PersonalityTraits } from '@/types/personality';
import { workCultureOptions, dealBreakerOptions } from '@/types/personality';

interface PersonalitySettingsProps {
  traits: PersonalityTraits;
  onUpdate: (traits: PersonalityTraits) => void;
}

export function PersonalitySettings({ traits, onUpdate }: PersonalitySettingsProps) {
  const handleChange = (field: keyof PersonalityTraits, value: any) => {
    onUpdate({ ...traits, [field]: value });
  };

  return (
    <div className="space-y-6">
      {/* Risk and Innovation */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Risk Tolerance
          </label>
          <div className="space-y-2">
            <input
              type="range"
              min="1"
              max="10"
              value={traits.riskTolerance}
              onChange={(e) => handleChange('riskTolerance', parseInt(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400">
              <span>Conservative</span>
              <span>Balanced</span>
              <span>Aggressive</span>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Innovation Style
          </label>
          <select
            value={traits.innovationStyle}
            onChange={(e) => handleChange('innovationStyle', e.target.value)}
            className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5"
          >
            <option value="conservative">Conservative - Proven Methods</option>
            <option value="moderate">Moderate - Balanced Approach</option>
            <option value="disruptive">Disruptive - Industry Changing</option>
          </select>
        </div>
      </div>

      {/* Decision Making and Growth */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Decision Making Style
          </label>
          <select
            value={traits.decisionMaking}
            onChange={(e) => handleChange('decisionMaking', e.target.value)}
            className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5"
          >
            <option value="analytical">Analytical - Data Driven</option>
            <option value="intuitive">Intuitive - Experience Based</option>
            <option value="collaborative">Collaborative - Team Oriented</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Growth Strategy
          </label>
          <select
            value={traits.growthStrategy}
            onChange={(e) => handleChange('growthStrategy', e.target.value)}
            className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5"
          >
            <option value="organic">Organic Growth</option>
            <option value="acquisitive">Acquisition Focused</option>
            <option value="hybrid">Hybrid Approach</option>
          </select>
        </div>
      </div>

      {/* Management and Culture */}
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Management Style
        </label>
        <select
          value={traits.managementStyle}
          onChange={(e) => handleChange('managementStyle', e.target.value)}
          className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5"
        >
          <option value="hands-on">Hands-on Leadership</option>
          <option value="delegative">Delegative Management</option>
          <option value="strategic">Strategic Oversight</option>
        </select>
      </div>

      {/* Work Culture */}
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Preferred Work Culture
        </label>
        <div className="flex flex-wrap gap-2">
          {workCultureOptions.map((culture) => (
            <button
              key={culture}
              onClick={() => {
                const newCultures = traits.workCulture.includes(culture)
                  ? traits.workCulture.filter(c => c !== culture)
                  : [...traits.workCulture, culture];
                handleChange('workCulture', newCultures);
              }}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                traits.workCulture.includes(culture)
                  ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300'
                  : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
              }`}
            >
              {culture}
            </button>
          ))}
        </div>
      </div>

      {/* Deal Breakers */}
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Deal Breakers
        </label>
        <div className="flex flex-wrap gap-2">
          {dealBreakerOptions.map((dealBreaker) => (
            <button
              key={dealBreaker}
              onClick={() => {
                const newDealBreakers = traits.dealBreakers.includes(dealBreaker)
                  ? traits.dealBreakers.filter(d => d !== dealBreaker)
                  : [...traits.dealBreakers, dealBreaker];
                handleChange('dealBreakers', newDealBreakers);
              }}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                traits.dealBreakers.includes(dealBreaker)
                  ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                  : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
              }`}
            >
              {dealBreaker}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}