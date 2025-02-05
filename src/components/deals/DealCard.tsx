import React, { useState } from 'react';
import { Clock, CheckCircle, Users, ChevronRight, XCircle, FileText, Calculator, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Deal } from '@/types/deal';

interface DealCardProps {
  deal: Deal;
  onRemove: (id: string) => void;
}

export function DealCard({ deal, onRemove }: DealCardProps) {
  const navigate = useNavigate();
  const [expandedMilestone, setExpandedMilestone] = useState<string | null>(null);
  const [assetsSentTimestamp, setAssetsSentTimestamp] = useState<string | null>(null);
  const [valuationSentTimestamp, setValuationSentTimestamp] = useState<string | null>(null);

  const handleSendAssets = () => {
    setAssetsSentTimestamp(new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }));
  };

  const handleSendValuation = () => {
    setValuationSentTimestamp(new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }));
  };

  const toggleMilestone = (name: string) => {
    setExpandedMilestone(expandedMilestone === name ? null : name);
  };

  return (
    <div className="bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-200/60 dark:border-slate-700/60 overflow-hidden shadow-xl shadow-slate-200/20 dark:shadow-slate-900/20">
      <div className="p-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <img
              src={deal.logo}
              alt={deal.company}
              className="w-16 h-16 rounded-lg object-cover ring-2 ring-slate-100 dark:ring-slate-800"
            />
            <div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{deal.company}</h2>
              <div className="flex items-center space-x-2 mt-1">
                <Clock className="h-4 w-4 text-purple-400" />
                <span className="text-sm text-slate-600 dark:text-slate-400">{deal.lastActivity}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              deal.status === "On Track" 
                ? "bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 ring-1 ring-green-100 dark:ring-green-900"
                : "bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 ring-1 ring-amber-100 dark:ring-amber-900"
            }`}>
              {deal.status}
            </span>
            <button
              onClick={() => onRemove(deal.id)}
              className="p-1.5 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-full text-slate-400 hover:text-red-500 transition-all duration-200"
              title="Remove deal"
            >
              <XCircle className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-6">
          {[
            { label: "Stage", value: deal.stage },
            { label: "Deal Size", value: deal.dealSize },
            { label: "Due Date", value: deal.dueDate }
          ].map((item, index) => (
            <div key={index} className="bg-slate-50 dark:bg-slate-700/30 rounded-lg p-3 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors">
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{item.label}</p>
              <p className="font-medium text-slate-900 dark:text-white">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Deal Progress Timeline */}
        <div className="mb-8">
          <h3 className="font-medium text-slate-900 dark:text-white mb-4">Deal Progress</h3>
          <div className="relative">
            <div className="absolute top-4 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-700"></div>
            <div className="relative flex justify-between">
              {deal.milestones.map((milestone, index) => (
                <div key={index} className="flex flex-col items-center">
                  <button
                    onClick={() => milestone.name === 'Asset Delivery' && toggleMilestone(milestone.name)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                      milestone.status === 'completed' ? 'bg-green-500 shadow-lg shadow-green-500/20' :
                      milestone.status === 'in-progress' ? 'bg-purple-500 shadow-lg shadow-purple-500/20' :
                      'bg-slate-200 dark:bg-slate-700'
                    } ${milestone.name === 'Asset Delivery' ? 'cursor-pointer hover:ring-2 hover:ring-purple-200 dark:hover:ring-purple-800' : ''}`}
                  >
                    {milestone.status === 'completed' ? (
                      <CheckCircle className="h-5 w-5 text-white" />
                    ) : milestone.status === 'in-progress' ? (
                      <Clock className="h-5 w-5 text-white" />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500" />
                    )}
                  </button>
                  <span className="text-xs text-slate-600 dark:text-slate-400 mt-2 text-center w-20">
                    {milestone.name}
                    {milestone.name === 'Asset Delivery' && (assetsSentTimestamp || valuationSentTimestamp) && (
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                        {assetsSentTimestamp && <div>CIM: {assetsSentTimestamp}</div>}
                        {valuationSentTimestamp && <div>Valuation: {valuationSentTimestamp}</div>}
                      </div>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Asset Generation & Delivery Section */}
          {expandedMilestone === 'Asset Delivery' && (
            <div className="mt-8 bg-slate-50 dark:bg-slate-700/30 rounded-lg p-6 animate-slide-up">
              <div className="space-y-4">
                {/* CIM Generator Button with Send Button */}
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => navigate('/app/tools/cim')}
                    className="flex-1 flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-purple-300 dark:hover:border-purple-700 transition-colors group"
                  >
                    <div className="flex items-center">
                      <div className="p-2 bg-purple-50 dark:bg-purple-900/30 rounded-lg mr-4">
                        <FileText className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div className="text-left">
                        <h5 className="font-medium text-slate-900 dark:text-white mb-1">Generate CIM</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Use AI to create a professional CIM
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-purple-500 transition-colors" />
                  </button>
                  {!assetsSentTimestamp && (
                    <button
                      onClick={handleSendAssets}
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center whitespace-nowrap"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send CIM
                    </button>
                  )}
                </div>

                {/* Valuation Tool Button with Send Button */}
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => navigate('/app/tools/valuation')}
                    className="flex-1 flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-purple-300 dark:hover:border-purple-700 transition-colors group"
                  >
                    <div className="flex items-center">
                      <div className="p-2 bg-purple-50 dark:bg-purple-900/30 rounded-lg mr-4">
                        <Calculator className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div className="text-left">
                        <h5 className="font-medium text-slate-900 dark:text-white mb-1">Generate Valuation</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Calculate business valuation
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-purple-500 transition-colors" />
                  </button>
                  {!valuationSentTimestamp && (
                    <button
                      onClick={handleSendValuation}
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center whitespace-nowrap"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Valuation
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Team Section */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-purple-400" />
            <h3 className="font-medium text-slate-900 dark:text-white">Deal Team</h3>
          </div>
          <div className="flex flex-wrap gap-4">
            {deal.team.map((member, index) => (
              <div key={index} className="flex items-center space-x-3 bg-purple-50/50 dark:bg-purple-900/20 rounded-lg p-3 hover:bg-purple-100/50 dark:hover:bg-purple-900/30 transition-all duration-200">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-10 h-10 rounded-full ring-2 ring-purple-100 dark:ring-purple-800"
                />
                <div>
                  <div className="text-sm font-medium text-slate-900 dark:text-white">{member.name}</div>
                  <div className="text-xs text-purple-600 dark:text-purple-400">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
          <button className="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors">
            View Deal Details
            <ChevronRight className="h-5 w-5 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}