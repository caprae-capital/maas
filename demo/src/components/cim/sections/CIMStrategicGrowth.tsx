import React from 'react';

export function CIMStrategicGrowth() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">
        Strategic Growth Initiatives
      </h2>
      
      <div className="grid grid-cols-2 gap-8 mb-8">
        {[
          {
            title: 'Market Expansion',
            description: 'Targeting 5 new market verticals with $8.2B TAM opportunity',
            image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
            details: [
              'Healthcare technology market penetration with specialized compliance features',
              'Financial services expansion through strategic partnerships',
              'Manufacturing sector digitization initiatives'
            ]
          },
          {
            title: 'Product Innovation',
            description: 'Launch of 3 new product lines with 65% projected gross margins',
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
            details: [
              'AI-powered predictive analytics platform',
              'Advanced automation and workflow engine',
              'Industry-specific solution templates'
            ]
          }
        ].map((initiative) => (
          <div key={initiative.title} className="group">
            <div className="aspect-video rounded-lg overflow-hidden mb-4">
              <img
                src={initiative.image}
                alt={initiative.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">{initiative.title}</h3>
            <p className="text-slate-600 mb-4">{initiative.description}</p>
            <div className="space-y-2">
              {initiative.details.map((detail, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2" />
                  <p className="text-slate-700">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-indigo-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-indigo-900 mb-4">Technology Roadmap</h3>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-medium text-indigo-900 mb-2">Q3 2024</h4>
              <p className="text-indigo-800">Launch of AI-powered analytics platform with predictive capabilities</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-medium text-indigo-900 mb-2">Q4 2024</h4>
              <p className="text-indigo-800">Enhanced automation engine with advanced workflow capabilities</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-medium text-indigo-900 mb-2">Q1 2025</h4>
              <p className="text-indigo-800">Industry-specific solution templates and integrations</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-purple-900 mb-4">Market Expansion</h3>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-medium text-purple-900 mb-2">APAC Growth</h4>
              <p className="text-purple-800">Expansion into Singapore, Japan, and Australia markets</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-medium text-purple-900 mb-2">Industry Focus</h4>
              <p className="text-purple-800">Dedicated solutions for healthcare and financial services</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-medium text-purple-900 mb-2">Channel Strategy</h4>
              <p className="text-purple-800">Strategic partnerships with system integrators and consultants</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Operational Scale</h3>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-medium text-blue-900 mb-2">Infrastructure</h4>
              <p className="text-blue-800">Global cloud infrastructure expansion for improved performance</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-medium text-blue-900 mb-2">Team Growth</h4>
              <p className="text-blue-800">Hiring key positions in product and engineering</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-medium text-blue-900 mb-2">Process Optimization</h4>
              <p className="text-blue-800">Implementation of automated testing and deployment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}