import React from 'react';
import { Heart, X, MapPin, Building2, Briefcase, Target, Users, MessageSquare } from 'lucide-react';
import { Buyer } from '@/types/buyer';

interface BuyerCardProps {
  buyer: Buyer;
  onAccept: (buyer: Buyer) => void;
  onDecline: (buyer: Buyer) => void;
}

export function BuyerCard({ buyer, onAccept, onDecline }: BuyerCardProps) {
  return (
    <div className="group bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 dark:border-slate-700/60 overflow-hidden shadow-xl shadow-slate-200/20 dark:shadow-slate-900/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex">
        {/* Left side - Company Image */}
        <div className="w-[200px] relative flex-shrink-0">
          <div className="relative h-full group-hover:scale-105 transition-transform duration-500">
            <img
              src={buyer.companyImage}
              alt={buyer.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-xl font-bold text-white mb-2">{buyer.name}</h3>
            <div className="flex items-center text-slate-200">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{buyer.location}</span>
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="flex-1 p-6">
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <div className="flex items-center text-slate-600 dark:text-slate-400 mb-2">
                <Building2 className="h-4 w-4 mr-2" />
                <h4 className="font-medium">Experience In</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {buyer.experienceTypes.map((type, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center text-slate-600 dark:text-slate-400 mb-2">
                <Target className="h-4 w-4 mr-2" />
                <h4 className="font-medium">Target Industries</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {buyer.interestedIndustries.map((industry, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center text-slate-600 dark:text-slate-400 mb-2">
                <Briefcase className="h-4 w-4 mr-2" />
                <h4 className="font-medium">Business Models</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {buyer.businessModels.map((model, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-sm"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center text-slate-600 dark:text-slate-400 mb-2">
                <Users className="h-4 w-4 mr-2" />
                <h4 className="font-medium">Deal Structures</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {buyer.dealStructures.map((structure, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                  >
                    {structure}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Key People Section */}
          <div className="mb-6">
            <div className="flex items-center text-slate-600 dark:text-slate-400 mb-3">
              <Users className="h-5 w-5 mr-2" />
              <h4 className="font-medium">Key Team Members</h4>
            </div>
            <div className="flex flex-wrap gap-4">
              {buyer.keyPeople.map((person, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 bg-purple-50/50 dark:bg-purple-900/20 rounded-lg p-3 hover:bg-purple-100/50 dark:hover:bg-purple-900/30 transition-all duration-200"
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-10 h-10 rounded-full ring-2 ring-purple-100 dark:ring-purple-800"
                  />
                  <div>
                    <div className="text-sm font-medium text-slate-900 dark:text-white">{person.name}</div>
                    <div className="text-xs text-purple-600 dark:text-purple-400">{person.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-6 bg-slate-50 dark:bg-slate-700/30 rounded-lg p-4">
            <div className="flex items-center text-slate-600 dark:text-slate-400 mb-2">
              <MessageSquare className="h-4 w-4 mr-2" />
              <h4 className="font-medium">About Us</h4>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {buyer.introduction}
            </p>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-700">
            <div className="bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-full">
              <span className="text-slate-600 dark:text-slate-300 font-medium">Investment Range: </span>
              <span className="text-slate-900 dark:text-white font-bold">{buyer.investmentRange}</span>
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={() => onDecline(buyer)}
                className="px-6 py-2 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors flex items-center font-medium"
              >
                <X className="h-5 w-5 mr-2" />
                Decline
              </button>
              <button
                onClick={() => onAccept(buyer)}
                className="px-6 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors flex items-center font-medium shadow-lg shadow-purple-500/20"
              >
                <Heart className="h-5 w-5 mr-2" />
                Accept Match
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}