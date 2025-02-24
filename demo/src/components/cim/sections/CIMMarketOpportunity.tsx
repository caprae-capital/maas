import React from 'react';

export function CIMMarketOpportunity() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">
        Market Opportunity
      </h2>
      <div className="grid grid-cols-2 gap-8 mb-8">
        <div>
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
            alt="Market Growth"
            className="rounded-lg shadow-lg mb-4"
          />
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Market Growth</h3>
          <p className="text-slate-600">
            The enterprise SaaS market is experiencing unprecedented growth, with a projected CAGR of 24% through 2026.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=800&q=80"
            alt="Competitive Position"
            className="rounded-lg shadow-lg mb-4"
          />
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Competitive Position</h3>
          <p className="text-slate-600">
            Our platform's unique capabilities and deep market penetration create significant barriers to entry.
          </p>
        </div>
      </div>

      <div className="bg-slate-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Key Market Insights</h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-medium text-slate-900 mb-2">Market Size & Growth</h4>
              <p className="text-slate-600">Total addressable market of $47B by 2025, growing at 22% CAGR</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-medium text-slate-900 mb-2">Regional Expansion</h4>
              <p className="text-slate-600">APAC market growing 1.5x faster than global average</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-medium text-slate-900 mb-2">Competitive Landscape</h4>
              <p className="text-slate-600">Top 3 player in enterprise segment with 18% market share</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-medium text-slate-900 mb-2">Industry Trends</h4>
              <p className="text-slate-600">Leading adoption of AI/ML in core product offerings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}