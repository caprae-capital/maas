import React from 'react';

export function CIMFinancialPerformance() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">
        Financial Performance
      </h2>
      
      <div className="overflow-hidden rounded-lg border border-slate-200 mb-8">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50">
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Metric</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">2021</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">2022</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">2023</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {[
              { metric: 'Revenue', y1: '$9.2M', y2: '$19.8M', y3: '$28.5M' },
              { metric: 'Gross Margin', y1: '87%', y2: '89%', y3: '92%' },
              { metric: 'EBITDA', y1: '$1.8M', y2: '$4.2M', y3: '$6.8M' },
              { metric: 'Customer Count', y1: '156', y2: '284', y3: '412' },
              { metric: 'ARR', y1: '$11.5M', y2: '$23.2M', y3: '$34.8M' },
              { metric: 'CAC Payback', y1: '12 months', y2: '10 months', y3: '8 months' },
              { metric: 'LTV/CAC', y1: '3.2x', y2: '4.1x', y3: '5.3x' },
              { metric: 'Net Revenue Retention', y1: '112%', y2: '118%', y3: '128%' }
            ].map((row) => (
              <tr key={row.metric} className="hover:bg-slate-50">
                <td className="px-6 py-4 text-sm font-medium text-slate-900">{row.metric}</td>
                <td className="px-6 py-4 text-sm text-slate-600 text-right">{row.y1}</td>
                <td className="px-6 py-4 text-sm text-slate-600 text-right">{row.y2}</td>
                <td className="px-6 py-4 text-sm text-slate-600 text-right">{row.y3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="bg-emerald-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-emerald-900 mb-4">Revenue Growth Drivers</h3>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-medium text-emerald-900 mb-2">Enterprise Expansion</h4>
              <p className="text-emerald-800">47% YoY growth in enterprise segment with 95% retention rate</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-medium text-emerald-900 mb-2">Product Innovation</h4>
              <p className="text-emerald-800">New product launches driving 32% of incremental revenue</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-medium text-emerald-900 mb-2">Geographic Expansion</h4>
              <p className="text-emerald-800">International revenue grew 85% YoY, now 35% of total revenue</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Operational Efficiency</h3>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-medium text-blue-900 mb-2">Margin Improvement</h4>
              <p className="text-blue-800">500bps gross margin expansion through automation</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-medium text-blue-900 mb-2">Sales Efficiency</h4>
              <p className="text-blue-800">33% improvement in sales cycle duration</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-medium text-blue-900 mb-2">Customer Success</h4>
              <p className="text-blue-800">Net revenue retention increased to 128% through expansion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}