import React from 'react';

export function CIMCoverPage() {
  return (
    <div className="relative h-[400px] bg-gradient-to-br from-indigo-600 to-blue-700 rounded-t-lg overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80')] opacity-20 bg-cover bg-center" />
      <div className="relative h-full flex flex-col items-center justify-center text-white p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">TechCraft Solutions</h1>
          <h2 className="text-2xl font-light mb-8">Confidential Information Memorandum</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8" />
          <p className="text-lg opacity-90">
            {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long'
            })}
          </p>
        </div>
      </div>
    </div>
  );
}