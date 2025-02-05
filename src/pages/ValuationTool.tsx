import React, { useState, useEffect } from 'react';
import { ArrowLeft, TrendingUp, DollarSign, BarChart3, PieChart, Building2, Users, Target, Scale, Globe, Database, Award, Zap, Briefcase, ChevronRight, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

export default function ValuationTool() {
  const navigate = useNavigate();
  const { userProfile } = useAuth();
  const [valuation, setValuation] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  const businessInfo = userProfile?.businessInfo;

  // Mock valuation metrics
  const valuationMetrics = {
    ebitdaMultiple: 8.5,
    revenueMultiple: 4.2,
    peRatio: 22.4,
    evToRevenue: 3.8,
    discountRate: '12.5%',
    terminalGrowth: '3.2%',
    riskPremium: '5.8%'
  };

  // Mock valuation factors with sources
  const valuationFactors = {
    revenue: {
      weight: 0.35,
      value: 15000000,
      source: 'Historical Financial Data',
      trend: '+12% YoY',
      details: {
        current: '$15M',
        growth: '12%',
        margin: '28%',
        recurring: '85%'
      }
    },
    industry: {
      weight: 0.25,
      value: 8.5,
      source: 'Industry Reports (McKinsey)',
      trend: 'Stable',
      details: {
        multiple: '8.5x',
        growth: '15%',
        consolidation: 'High',
        barriers: 'Medium'
      }
    },
    growth: {
      weight: 0.15,
      value: 0.24,
      source: 'Market Analysis (Goldman Sachs)',
      trend: 'Increasing',
      details: {
        historical: '24%',
        projected: '28%',
        organic: '18%',
        inorganic: '10%'
      }
    },
    market: {
      weight: 0.15,
      value: 47.8,
      source: 'Market Research (Gartner)',
      trend: 'Expanding',
      details: {
        size: '$47.8B',
        share: '3.2%',
        growth: '14%',
        concentration: 'Medium'
      }
    },
    team: {
      weight: 0.10,
      value: 95,
      source: 'Internal Assessment',
      trend: 'Strong',
      details: {
        experience: '15+ years',
        retention: '92%',
        expertise: 'High',
        succession: 'Strong'
      }
    }
  };

  // Mock comparable companies with more details
  const comparables = [
    {
      name: 'TechCorp Solutions',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=64&h=64&q=80',
      multiple: 9.2,
      marketCap: '2.1B',
      details: {
        revenue: '$245M',
        growth: '18%',
        margin: '32%',
        employees: '850'
      },
      metrics: {
        ebitdaMultiple: 8.8,
        revenueMultiple: 4.5,
        peRatio: 24.2
      }
    },
    {
      name: 'Innovate Systems',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=64&h=64&q=80',
      multiple: 8.7,
      marketCap: '1.8B',
      details: {
        revenue: '$198M',
        growth: '22%',
        margin: '29%',
        employees: '720'
      },
      metrics: {
        ebitdaMultiple: 8.2,
        revenueMultiple: 4.1,
        peRatio: 22.8
      }
    },
    {
      name: 'Digital Dynamics',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=64&h=64&q=80',
      multiple: 7.9,
      marketCap: '1.5B',
      details: {
        revenue: '$175M',
        growth: '16%',
        margin: '27%',
        employees: '650'
      },
      metrics: {
        ebitdaMultiple: 7.6,
        revenueMultiple: 3.8,
        peRatio: 20.5
      }
    }
  ];

  // Mock market insights with detailed categories
  const marketInsights = {
    market: {
      size: '$47.8B',
      growth: '24%',
      concentration: 'Medium',
      barriers: 'High',
      lifecycle: 'Growth',
      volatility: 'Low'
    },
    competitive: {
      position: 'Strong',
      marketShare: '3.2%',
      competitors: 12,
      advantages: ['Technology', 'Brand', 'Distribution'],
      threats: ['New Entrants', 'Substitutes']
    },
    financial: {
      revenue: '$15M',
      margin: '28%',
      growth: '12%',
      cashFlow: 'Strong',
      debt: 'Low',
      workingCapital: 'Optimal'
    },
    operational: {
      efficiency: 'High',
      scalability: 'Strong',
      technology: 'Advanced',
      processes: 'Optimized',
      risks: 'Managed'
    }
  };

  useEffect(() => {
    // Simulate API call for valuation
    const timer = setTimeout(() => {
      const baseValue = 15000000;
      setValuation(baseValue);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="p-8 bg-slate-50 dark:bg-slate-900 min-h-screen">
      <div className="mb-8">
        <button
          onClick={() => navigate('/app/tools')}
          className="flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white mb-4"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Tools
        </button>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Business Valuation</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Valuation Card */}
        <div className="lg:col-span-2 space-y-8">
          {/* Valuation Summary */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="p-6 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Estimated Valuation</h2>
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm">
                    AI Generated
                  </span>
                  <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-sm">
                    High Confidence
                  </span>
                </div>
              </div>
              
              {loading ? (
                <div className="flex items-center justify-center h-40">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                    {formatCurrency(valuation!)}
                  </div>
                  <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
                    <div className="bg-slate-50 dark:bg-slate-700/30 rounded-lg p-3">
                      <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">EBITDA Multiple</div>
                      <div className="font-semibold text-slate-900 dark:text-white">{valuationMetrics.ebitdaMultiple}x</div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-700/30 rounded-lg p-3">
                      <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">Revenue Multiple</div>
                      <div className="font-semibold text-slate-900 dark:text-white">{valuationMetrics.revenueMultiple}x</div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-700/30 rounded-lg p-3">
                      <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">P/E Ratio</div>
                      <div className="font-semibold text-slate-900 dark:text-white">{valuationMetrics.peRatio}</div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-700/30 rounded-lg p-3">
                      <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">EV/Revenue</div>
                      <div className="font-semibold text-slate-900 dark:text-white">{valuationMetrics.evToRevenue}x</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Valuation Breakdown */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Valuation Factors</h3>
              <div className="space-y-6">
                {Object.entries(valuationFactors).map(([factor, data]) => (
                  <div key={factor} className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 capitalize">
                          {factor}
                        </span>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          Source: {data.source}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-medium text-slate-900 dark:text-white">
                          {(data.weight * 100).toFixed(0)}%
                        </span>
                        <div className="text-xs text-emerald-500">
                          {data.trend}
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
                        style={{ width: `${data.weight * 100}%` }}
                      />
                    </div>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      {Object.entries(data.details).map(([key, value]) => (
                        <div key={key} className="text-xs">
                          <span className="text-slate-500 dark:text-slate-400 capitalize">{key}: </span>
                          <span className="text-slate-700 dark:text-slate-300">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Comparable Companies */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Comparable Companies</h3>
            <div className="space-y-4">
              {comparables.map((company) => (
                <div 
                  key={company.name}
                  className="bg-slate-50 dark:bg-slate-700/30 rounded-lg p-4 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="w-10 h-10 rounded-lg"
                      />
                      <div>
                        <h4 className="font-medium text-slate-900 dark:text-white">{company.name}</h4>
                        <div className="text-sm text-slate-500 dark:text-slate-400">Market Cap: {company.marketCap}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-slate-900 dark:text-white">{company.multiple}x</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">Multiple</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="text-sm">
                        <span className="text-slate-500 dark:text-slate-400">Revenue: </span>
                        <span className="text-slate-900 dark:text-white font-medium">{company.details.revenue}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-slate-500 dark:text-slate-400">Growth: </span>
                        <span className="text-slate-900 dark:text-white font-medium">{company.details.growth}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm">
                        <span className="text-slate-500 dark:text-slate-400">Margin: </span>
                        <span className="text-slate-900 dark:text-white font-medium">{company.details.margin}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-slate-500 dark:text-slate-400">Employees: </span>
                        <span className="text-slate-900 dark:text-white font-medium">{company.details.employees}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-600">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-sm font-medium text-slate-900 dark:text-white">
                          {company.metrics.ebitdaMultiple}x
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">EBITDA Multiple</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-medium text-slate-900 dark:text-white">
                          {company.metrics.revenueMultiple}x
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Revenue Multiple</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-medium text-slate-900 dark:text-white">
                          {company.metrics.peRatio}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">P/E Ratio</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Market Insights */}
        <div className="space-y-6">
          {/* Key Metrics */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Market Analysis</h3>
            
            {/* Market Overview */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Market Overview</h4>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(marketInsights.market).map(([key, value]) => (
                  <div key={key} className="bg-slate-50 dark:bg-slate-700/30 rounded-lg p-3">
                    <div className="text-xs text-slate-500 dark:text-slate-400 capitalize mb-1">{key}</div>
                    <div className="font-medium text-slate-900 dark:text-white">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Competitive Position */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Competitive Position</h4>
              <div className="bg-slate-50 dark:bg-slate-700/30 rounded-lg p-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Market Position</div>
                    <div className="font-medium text-slate-900 dark:text-white">{marketInsights.competitive.position}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Market Share</div>
                    <div className="font-medium text-slate-900 dark:text-white">{marketInsights.competitive.marketShare}</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Competitive Advantages</div>
                    <div className="flex flex-wrap gap-2">
                      {marketInsights.competitive.advantages.map((advantage) => (
                        <span key={advantage} className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded text-xs">
                          {advantage}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Potential Threats</div>
                    <div className="flex flex-wrap gap-2">
                      {marketInsights.competitive.threats.map((threat) => (
                        <span key={threat} className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded text-xs">
                          {threat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Performance */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Financial Performance</h4>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(marketInsights.financial).map(([key, value]) => (
                  <div key={key} className="bg-slate-50 dark:bg-slate-700/30 rounded-lg p-3">
                    <div className="text-xs text-slate-500 dark:text-slate-400 capitalize mb-1">{key}</div>
                    <div className="font-medium text-slate-900 dark:text-white">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Operational Metrics */}
            <div>
              <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Operational Metrics</h4>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(marketInsights.operational).map(([key, value]) => (
                  <div key={key} className="bg-slate-50 dark:bg-slate-700/30 rounded-lg p-3">
                    <div className="text-xs text-slate-500 dark:text-slate-400 capitalize mb-1">{key}</div>
                    <div className="font-medium text-slate-900 dark:text-white">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Data Sources */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Data Sources</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Database className="h-5 w-5 text-slate-400" />
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">Financial Data</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Bloomberg Terminal, S&P Capital IQ</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-slate-400" />
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">Market Research</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Gartner, McKinsey, Goldman Sachs</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-slate-400" />
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">Industry Reports</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">PwC, Deloitte, EY</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Recommendations */}
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-6 text-white">
            <h3 className="font-semibold mb-4">AI Recommendations</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Scale className="h-4 w-4 mt-0.5" />
                <span className="text-sm">Consider strategic partnerships to increase market share and accelerate growth</span>
              </li>
              <li className="flex items-start space-x-2">
                <Users className="h-4 w-4 mt-0.5" />
                <span className="text-sm">Invest in key talent acquisition to strengthen competitive position</span>
              </li>
              <li className="flex items-start space-x-2">
                <Target className="h-4 w-4 mt-0.5" />
                <span className="text-sm">Focus on emerging market segments with high growth potential</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}