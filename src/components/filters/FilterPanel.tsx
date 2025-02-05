import React, { useState } from 'react';
import { Filter as FilterIcon, ChevronDown, X } from 'lucide-react';

interface FilterState {
  investmentMin: string;
  investmentMax: string;
  industry: string;
  location: string;
  type: string;
  dealStructure: string;
}

interface FilterPanelProps {
  onFilterChange: (filters: FilterState) => void;
}

const industries = [
  'Technology',
  'Healthcare',
  'Logistics',
  'Financial Services',
  'Retail',
  'Education',
  'AgTech',
  'Property'
];

const types = [
  'SaaS Company',
  'Healthcare Software',
  'Supply Chain',
  'Fintech',
  'Retail Software',
  'EdTech',
  'Cybersecurity',
  'E-commerce'
];

const dealStructures = [
  'Full Acquisition',
  'Majority Stake',
  'Strategic Partnership',
  'Strategic Investment'
];

const locations = [
  'Singapore',
  'Hong Kong',
  'Tokyo'
];

export function FilterPanel({ onFilterChange }: FilterPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    investmentMin: '',
    investmentMax: '',
    industry: '',
    location: '',
    type: '',
    dealStructure: ''
  });

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const resetFilters = {
      investmentMin: '',
      investmentMax: '',
      industry: '',
      location: '',
      type: '',
      dealStructure: ''
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== '');

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
          hasActiveFilters
            ? 'bg-blue-50 text-blue-600 hover:bg-blue-100'
            : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
        }`}
      >
        <FilterIcon className="h-5 w-5" />
        <span>Filter</span>
        {hasActiveFilters && (
          <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-0.5 rounded-full">
            {Object.values(filters).filter(v => v !== '').length}
          </span>
        )}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-[400px] bg-white rounded-xl shadow-lg border border-slate-200 p-6 z-10">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-slate-900">Filters</h3>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-slate-600 hover:text-slate-900 flex items-center"
              >
                <X className="h-4 w-4 mr-1" />
                Clear all
              </button>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Investment Range
              </label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  placeholder="Min ($M)"
                  value={filters.investmentMin}
                  onChange={(e) => handleFilterChange('investmentMin', e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="number"
                  placeholder="Max ($M)"
                  value={filters.investmentMax}
                  onChange={(e) => handleFilterChange('investmentMax', e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Industry
              </label>
              <select
                value={filters.industry}
                onChange={(e) => handleFilterChange('industry', e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Industries</option>
                {industries.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Company Type
              </label>
              <select
                value={filters.type}
                onChange={(e) => handleFilterChange('type', e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Types</option>
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Deal Structure
              </label>
              <select
                value={filters.dealStructure}
                onChange={(e) => handleFilterChange('dealStructure', e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Structures</option>
                {dealStructures.map((structure) => (
                  <option key={structure} value={structure}>
                    {structure}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Location
              </label>
              <select
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Locations</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}