import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, DollarSign, Target, Briefcase, Globe, Users } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

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

const businessModels = [
  'B2B SaaS',
  'Enterprise Solutions',
  'API Services',
  'B2B2C',
  'Direct to Consumer',
  'Platform',
  'Hardware + Software',
  'Marketplace'
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

export default function BuyerQuestionnaire() {
  const navigate = useNavigate();
  const { updateBusinessInfo } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    experienceTypes: [] as string[],
    interestedIndustries: [] as string[],
    businessModels: [] as string[],
    dealStructures: [] as string[],
    investmentRange: '',
    introduction: ''
  });

  const handleMultiSelect = (field: keyof typeof formData, value: string) => {
    setFormData(prev => {
      const currentValues = prev[field] as string[];
      return {
        ...prev,
        [field]: currentValues.includes(value)
          ? currentValues.filter(v => v !== value)
          : [...currentValues, value]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateBusinessInfo(formData);
    navigate('/app/deals');
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Tell us about your investment preferences</h2>
          <p className="text-slate-400">This information helps us find the right businesses for you</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 bg-slate-800 rounded-xl p-8">
          {/* Company Info */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Company Name
              </label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-slate-700 text-white rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  placeholder="Enter company name"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Location
              </label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <select
                  value={formData.location}
                  onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                  className="w-full bg-slate-700 text-white rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  required
                >
                  <option value="">Select location</option>
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Investment Range */}
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">
              Investment Range
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <select
                value={formData.investmentRange}
                onChange={(e) => setFormData(prev => ({ ...prev, investmentRange: e.target.value }))}
                className="w-full bg-slate-700 text-white rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              >
                <option value="">Select investment range</option>
                <option value="$1M - $5M">$1M - $5M</option>
                <option value="$5M - $10M">$5M - $10M</option>
                <option value="$10M - $25M">$10M - $25M</option>
                <option value="$25M - $50M">$25M - $50M</option>
              </select>
            </div>
          </div>

          {/* Industries */}
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">
              Interested Industries
            </label>
            <div className="relative">
              <Target className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <div className="pl-10 space-y-2">
                <div className="flex flex-wrap gap-2">
                  {industries.map(industry => (
                    <button
                      key={industry}
                      type="button"
                      onClick={() => handleMultiSelect('interestedIndustries', industry)}
                      className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                        formData.interestedIndustries.includes(industry)
                          ? 'bg-indigo-500 text-white'
                          : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                      }`}
                    >
                      {industry}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Business Models */}
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">
              Preferred Business Models
            </label>
            <div className="relative">
              <Briefcase className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <div className="pl-10 space-y-2">
                <div className="flex flex-wrap gap-2">
                  {businessModels.map(model => (
                    <button
                      key={model}
                      type="button"
                      onClick={() => handleMultiSelect('businessModels', model)}
                      className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                        formData.businessModels.includes(model)
                          ? 'bg-indigo-500 text-white'
                          : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                      }`}
                    >
                      {model}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Deal Structures */}
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">
              Preferred Deal Structures
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <div className="pl-10 space-y-2">
                <div className="flex flex-wrap gap-2">
                  {dealStructures.map(structure => (
                    <button
                      key={structure}
                      type="button"
                      onClick={() => handleMultiSelect('dealStructures', structure)}
                      className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                        formData.dealStructures.includes(structure)
                          ? 'bg-indigo-500 text-white'
                          : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                      }`}
                    >
                      {structure}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">
              Introduction
            </label>
            <textarea
              value={formData.introduction}
              onChange={(e) => setFormData(prev => ({ ...prev, introduction: e.target.value }))}
              className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none min-h-[120px]"
              placeholder="Tell us about your company and investment strategy..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-medium bg-indigo-500 text-white hover:bg-indigo-600 transition-colors"
          >
            Complete Profile
          </button>
        </form>
      </div>
    </div>
  );
}