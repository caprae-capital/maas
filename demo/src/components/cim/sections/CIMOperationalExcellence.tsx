import React from 'react';

export function CIMOperationalExcellence() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">
        Operational Excellence
      </h2>
      
      <div className="grid grid-cols-3 gap-6 mb-8">
        {[
          { metric: 'Platform Uptime', value: '99.99%', change: '+0.1% YoY' },
          { metric: 'Customer Onboarding', value: '-73% Time', change: 'From 45 to 12 days' },
          { metric: 'Support Response', value: '<15 mins', change: '-40% response time' },
          { metric: 'API Performance', value: '45ms', change: '-25% latency' },
          { metric: 'Security Score', value: '98/100', change: '+5 points YoY' },
          { metric: 'Cost Efficiency', value: '-35%', change: 'Operating costs' }
        ].map((metric) => (
          <div key={metric.metric} className="bg-orange-50 rounded-lg p-6 text-center">
            <p className="text-sm text-orange-800 mb-1">{metric.metric}</p>
            <p className="text-3xl font-bold text-orange-900">{metric.value}</p>
            <p className="text-sm text-orange-700">{metric.change}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="bg-slate-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Technology Infrastructure</h3>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-medium text-slate-900 mb-2">Cloud Architecture</h4>
              <p className="text-slate-600">Multi-region deployment with automatic failover and 99.99% uptime SLA</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {['AWS', 'Azure', 'Kubernetes', 'Terraform'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-slate-100 text-slate-600 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-medium text-slate-900 mb-2">Security & Compliance</h4>
              <p className="text-slate-600">SOC 2 Type II certified with advanced threat detection</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {['SOC2', 'GDPR', 'ISO27001', 'HIPAA'].map((cert) => (
                  <span key={cert} className="px-2 py-1 bg-slate-100 text-slate-600 rounded-full text-sm">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Customer Success</h3>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-medium text-slate-900 mb-2">Onboarding Excellence</h4>
              <p className="text-slate-600">Reduced implementation time by 73% through automation</p>
              <div className="mt-2">
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '73%' }} />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-medium text-slate-900 mb-2">Support Metrics</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-600">First Response</p>
                  <p className="text-lg font-semibold text-slate-900">5 mins</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Resolution Time</p>
                  <p className="text-lg font-semibold text-slate-900">4 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-orange-900 mb-4">Operational Highlights</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-medium text-orange-900 mb-2">Process Automation</h4>
            <ul className="space-y-2 text-orange-800">
              <li>• 85% of routine tasks automated</li>
              <li>• 92% reduction in manual errors</li>
              <li>• 65% faster deployment cycles</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-medium text-orange-900 mb-2">Quality Assurance</h4>
            <ul className="space-y-2 text-orange-800">
              <li>• 99.9% test coverage</li>
              <li>• 78% reduction in bugs</li>
              <li>• 24/7 monitoring</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-medium text-orange-900 mb-2">Team Excellence</h4>
            <ul className="space-y-2 text-orange-800">
              <li>• 95% team retention</li>
              <li>• 40+ certifications</li>
              <li>• 12 industry awards</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}