import React, { useState } from 'react';
import { Camera, Building2, Brain } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { PersonalitySettings } from '@/components/settings/PersonalitySettings';
import type { PersonalityTraits } from '@/types/personality';

const industries = [
  'Technology',
  'E-commerce',
  'Manufacturing',
  'Healthcare',
  'Financial Services',
  'Real Estate',
  'Retail',
  'Other'
];

export default function ProfilePage() {
  const { userProfile, updateProfile, updateBusinessInfo } = useAuth();
  const [activeTab, setActiveTab] = useState('business');
  const [personalInfo, setPersonalInfo] = useState({
    name: userProfile?.name || '',
    email: userProfile?.email || '',
    avatar: userProfile?.avatar || ''
  });
  
  const [businessInfo, setBusinessInfo] = useState(
    userProfile?.businessInfo || {
      name: '',
      industry: '',
      revenue: '',
      employees: '',
      location: '',
      description: ''
    }
  );

  const [personalityTraits, setPersonalityTraits] = useState<PersonalityTraits>(
    userProfile?.personalityTraits || {
      riskTolerance: 5,
      innovationStyle: 'moderate',
      decisionMaking: 'analytical',
      growthStrategy: 'hybrid',
      managementStyle: 'strategic',
      workCulture: [],
      industryFocus: [],
      dealBreakers: []
    }
  );

  const handlePersonalityUpdate = (traits: PersonalityTraits) => {
    setPersonalityTraits(traits);
    updateProfile({ ...userProfile, personalityTraits: traits });
  };

  const handleBusinessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateBusinessInfo(businessInfo);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Profile</h1>
      </div>

      {/* Profile Header */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 mb-8">
        <div className="flex items-center space-x-6">
          <div className="relative">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="h-24 w-24 rounded-full ring-4 ring-indigo-100 dark:ring-indigo-900"
            />
            <button className="absolute bottom-0 right-0 p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors">
              <Camera className="h-5 w-5" />
            </button>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{personalInfo.name}</h2>
            <p className="text-slate-600 dark:text-slate-400">{personalInfo.email}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('business')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
            activeTab === 'business'
              ? 'bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-400'
              : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800'
          }`}
        >
          <Building2 className="h-5 w-5" />
          <span>Business Information</span>
        </button>
        <button
          onClick={() => setActiveTab('personality')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
            activeTab === 'personality'
              ? 'bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-400'
              : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800'
          }`}
        >
          <Brain className="h-5 w-5" />
          <span>Personality & Preferences</span>
        </button>
      </div>

      {/* Business Information */}
      {activeTab === 'business' && (
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
          <form onSubmit={handleBusinessSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  value={businessInfo.name}
                  onChange={(e) => setBusinessInfo(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Industry
                </label>
                <select
                  value={businessInfo.industry}
                  onChange={(e) => setBusinessInfo(prev => ({ ...prev, industry: e.target.value }))}
                  className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5"
                >
                  <option value="">Select industry</option>
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Annual Revenue
                </label>
                <input
                  type="text"
                  value={businessInfo.revenue}
                  onChange={(e) => setBusinessInfo(prev => ({ ...prev, revenue: e.target.value }))}
                  className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Number of Employees
                </label>
                <input
                  type="text"
                  value={businessInfo.employees}
                  onChange={(e) => setBusinessInfo(prev => ({ ...prev, employees: e.target.value }))}
                  className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  value={businessInfo.location}
                  onChange={(e) => setBusinessInfo(prev => ({ ...prev, location: e.target.value }))}
                  className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Business Description
              </label>
              <textarea
                value={businessInfo.description}
                onChange={(e) => setBusinessInfo(prev => ({ ...prev, description: e.target.value }))}
                className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 min-h-[120px]"
              />
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Save Changes
            </button>
          </form>
        </div>
      )}

      {/* Personality Settings */}
      {activeTab === 'personality' && (
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
          <PersonalitySettings
            traits={personalityTraits}
            onUpdate={handlePersonalityUpdate}
          />
        </div>
      )}
    </div>
  );
}