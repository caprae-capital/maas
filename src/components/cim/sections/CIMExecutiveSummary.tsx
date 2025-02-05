import React from 'react';

export function CIMExecutiveSummary() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">
        Executive Summary
      </h2>
      <div className="prose prose-slate max-w-none">
        <p className="text-slate-600 leading-relaxed mb-6">
          TechCraft Solutions is a rapidly growing enterprise software company that has established itself as 
          a market leader in the B2B SaaS space. Our innovative solutions and strong market position present 
          a compelling opportunity for strategic investment or acquisition.
        </p>

        <div className="grid grid-cols-3 gap-6 my-8">
          {[
            { label: 'Annual Revenue', value: '$28.5M', growth: '+47% YoY' },
            { label: 'Gross Margin', value: '92%', growth: '+5pts YoY' },
            { label: 'Customer Retention', value: '95%', growth: '+3pts YoY' }
          ].map((metric) => (
            <div key={metric.label} className="bg-slate-50 rounded-lg p-6 text-center">
              <p className="text-sm text-slate-600 mb-1">{metric.label}</p>
              <p className="text-3xl font-bold text-slate-900 mb-1">{metric.value}</p>
              <p className="text-sm font-medium text-emerald-600">{metric.growth}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}