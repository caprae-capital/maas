import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hexagon, ChevronRight, Shield, Rocket, Target, Users, ArrowRight, Globe, BarChart as ChartBar } from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Target className="h-6 w-6 text-indigo-400" />,
      title: "Smart Matching",
      description: "AI-powered algorithms match you with the perfect buyers based on your business profile and preferences."
    },
    {
      icon: <Shield className="h-6 w-6 text-indigo-400" />,
      title: "Secure Process",
      description: "End-to-end encryption and strict privacy controls protect your sensitive business information."
    },
    {
      icon: <Rocket className="h-6 w-6 text-indigo-400" />,
      title: "Fast Execution",
      description: "Streamlined processes and digital tools accelerate your M&A journey from months to weeks."
    }
  ];

  const stats = [
    { number: "500+", label: "Successful Matches" },
    { number: "$2.5B+", label: "Total Deal Value" },
    { number: "45 Days", label: "Average Time to Close" }
  ];

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      {/* Navigation */}
      <nav className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Hexagon className="h-8 w-8 text-indigo-500" />
              <span className="ml-2 text-xl font-bold text-white">MaaS</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/login')}
                className="text-slate-300 hover:text-white px-4 py-2 rounded-lg transition-colors"
              >
                Sign in
              </button>
              <button
                onClick={() => navigate('/signup')}
                className="bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-600 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
                Find a buyer that believes in your
                <span className="text-indigo-500"> Legacy</span>
              </h1>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Connect with qualified partners and transform your M&A process. Our AI-powered platform matches buyers and sellers for optimal business outcomes.
              </p>
              <button
                onClick={() => navigate('/signup')}
                className="bg-indigo-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-indigo-600 transition-colors inline-flex items-center group"
              >
                Start Your Journey
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-3xl filter blur-3xl"></div>
              <div className="relative bg-slate-800 rounded-3xl p-8 backdrop-blur-sm border border-slate-700">
                <div className="grid gap-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-xl">
                      <div className="h-12 w-12 rounded-full bg-indigo-500/20 flex items-center justify-center">
                        <Hexagon className="h-6 w-6 text-indigo-500" />
                      </div>
                      <div className="flex-1">
                        <div className="h-4 w-3/4 bg-slate-600 rounded"></div>
                        <div className="h-3 w-1/2 bg-slate-600 rounded mt-2"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-slate-800/50 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose MaaS?</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Our platform combines cutting-edge technology with industry expertise to deliver the best M&A outcomes.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-indigo-500/50 transition-colors group">
                  <div className="bg-indigo-500/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-indigo-500 mb-2">{stat.number}</div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Network Section */}
        <div className="bg-slate-800/50 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Global Network of Qualified Buyers</h2>
                <p className="text-slate-400 mb-8">
                  Access a curated network of strategic buyers and investors across industries. Our platform ensures you connect with partners who share your vision and values.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <Globe className="h-6 w-6 text-indigo-400" />
                    <div>
                      <h4 className="text-white font-medium mb-1">Global Reach</h4>
                      <p className="text-slate-400 text-sm">Access buyers worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-indigo-400" />
                    <div>
                      <h4 className="text-white font-medium mb-1">Vetted Network</h4>
                      <p className="text-slate-400 text-sm">Pre-qualified buyers only</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="h-6 w-6 text-indigo-400" />
                    <div>
                      <h4 className="text-white font-medium mb-1">Smart Matching</h4>
                      <p className="text-slate-400 text-sm">AI-powered connections</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ChartBar className="h-6 w-6 text-indigo-400" />
                    <div>
                      <h4 className="text-white font-medium mb-1">Data Insights</h4>
                      <p className="text-slate-400 text-sm">Market intelligence</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-3xl filter blur-3xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2070&q=80"
                  alt="Global Network"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful businesses who have found their perfect match through our platform.
            </p>
            <button
              onClick={() => navigate('/signup')}
              className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-indigo-50 transition-colors inline-flex items-center group"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}