import React, { useState } from 'react';
import { Brain, ArrowRight, Sparkles } from 'lucide-react';
import { CIMProgress } from './CIMProgress';
import { InsightCard } from './InsightCard';
import { CIMDocument } from './CIMDocument';
import { cimSections } from './data';
import type { CIMInsight } from './types';

export function CIMGenerator() {
  const [currentSection, setCurrentSection] = useState(0);
  const [selectedInsights, setSelectedInsights] = useState<string[]>([]);
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);

  const totalInsights = cimSections.reduce((acc, section) => acc + section.insights.length, 0);

  const toggleInsight = (insightId: string) => {
    setSelectedInsights(prev =>
      prev.includes(insightId)
        ? prev.filter(id => id !== insightId)
        : [...prev, insightId]
    );
  };

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      setGenerated(true);
    }, 2000);
  };

  const handleDownload = () => {
    const selectedInsightDetails = cimSections.flatMap(section =>
      section.insights.filter(insight => selectedInsights.includes(insight.id))
    );

    const blob = new Blob([generateDocument(selectedInsightDetails)], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `CIM_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const generateDocument = (insights: CIMInsight[]) => {
    return '';
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-xl">
      {/* Header */}
      <div className="relative px-8 py-6 border-b border-slate-200 dark:border-slate-700 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 dark:from-blue-950/50 dark:to-indigo-950/50">
        <div className="relative flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-3 mb-1">
              <Brain className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                AI-Powered CIM Generator
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Transform your business data into a compelling story
            </p>
          </div>
          <CIMProgress
            selectedCount={selectedInsights.length}
            totalCount={totalInsights}
          />
        </div>
      </div>

      <div className="p-8">
        {!generating && !generated ? (
          <>
            {/* Section Navigation */}
            <div className="flex space-x-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
              {cimSections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => setCurrentSection(index)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    currentSection === index
                      ? 'text-white bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/20'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-700'
                  }`}
                >
                  {section.title}
                  {currentSection === index && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white" />
                  )}
                </button>
              ))}
            </div>

            {/* Current Section Content */}
            <div className="mb-8">
              <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                {cimSections[currentSection].title}
              </h4>
              <p className="text-slate-600 dark:text-slate-400">
                {cimSections[currentSection].description}
              </p>
            </div>

            {/* Insights Grid */}
            <div className="grid gap-4">
              {cimSections[currentSection].insights.map((insight) => (
                <InsightCard
                  key={insight.id}
                  insight={insight}
                  isSelected={selectedInsights.includes(insight.id)}
                  onToggle={toggleInsight}
                />
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setCurrentSection(prev => Math.max(0, prev - 1))}
                disabled={currentSection === 0}
                className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              {currentSection === cimSections.length - 1 ? (
                <button
                  onClick={handleGenerate}
                  disabled={selectedInsights.length === 0}
                  className="relative px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 flex items-center space-x-2"
                >
                  <Sparkles className="h-5 w-5" />
                  <span>Generate CIM</span>
                </button>
              ) : (
                <button
                  onClick={() => setCurrentSection(prev => Math.min(cimSections.length - 1, prev + 1))}
                  className="relative px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 flex items-center space-x-2"
                >
                  <span>Next</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              )}
            </div>
          </>
        ) : generating ? (
          <div className="py-24 text-center">
            <div className="relative w-20 h-20 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 animate-ping opacity-20" />
              <div className="relative rounded-full p-4 bg-gradient-to-r from-blue-500 to-indigo-600">
                <Brain className="h-12 w-12 text-white animate-pulse" />
              </div>
            </div>
            <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-2">
              Generating Your CIM
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Our AI is crafting a compelling story from your selected insights...
            </p>
          </div>
        ) : (
          <CIMDocument onDownload={handleDownload} />
        )}
      </div>
    </div>
  );
}