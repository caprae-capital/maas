import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, BookOpen, Calculator, ChevronRight } from 'lucide-react';

export default function ToolsPage() {
  const navigate = useNavigate();

  const tools = [
    {
      icon: <FileText className="h-6 w-6 text-blue-500" />,
      name: 'Document Store',
      description: 'Securely store and manage all deal-related documents',
      features: [
        'Secure storage',
        'Version control',
        'Access management'
      ],
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      onClick: () => navigate('/app/tools/documents')
    },
    {
      icon: <BookOpen className="h-6 w-6 text-emerald-500" />,
      name: 'CIM Generator',
      description: 'Create professional Confidential Information Memorandums',
      features: [
        'AI assisted interface',
        'Auto-formatting',
        'Export to PDF'
      ],
      bgColor: 'bg-emerald-50',
      iconBg: 'bg-emerald-100',
      onClick: () => navigate('/app/tools/cim')
    },
    {
      icon: <Calculator className="h-6 w-6 text-purple-500" />,
      name: 'Valuation Tool',
      description: 'Calculate and analyze business valuations',
      features: [
        'Multiple methods',
        'Industry comparables',
        'Scenario analysis'
      ],
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      onClick: () => navigate('/app/tools/valuation')
    }
  ];

  return (
    <div className="p-8 bg-slate-50 dark:bg-slate-900">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Deal Room Tools</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-8">Everything you need to manage your deals efficiently</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 hover:shadow-lg transition-all duration-300"
          >
            <div className={`${tool.bgColor} dark:bg-opacity-10 w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
              {tool.icon}
            </div>
            
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              {tool.name}
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              {tool.description}
            </p>

            <ul className="space-y-2 mb-6">
              {tool.features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              onClick={tool.onClick}
              className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Launch tool
              <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}