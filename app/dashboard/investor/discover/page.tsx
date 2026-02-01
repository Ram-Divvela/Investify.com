'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';

interface Startup {
  id: number;
  name: string;
  description: string;
  industry: string;
  stage: string;
  fundingGoal: number;
  raised: number;
  location: string;
  foundedYear: number;
}

export default function DiscoverStartups() {
  const [startups, setStartups] = useState<Startup[]>([
    {
      id: 1,
      name: 'AI Analytics Pro',
      description: 'AI-powered business analytics platform for enterprise clients',
      industry: 'Artificial Intelligence',
      stage: 'Seed',
      fundingGoal: 1000000,
      raised: 750000,
      location: 'San Francisco, CA',
      foundedYear: 2023,
    },
    {
      id: 2,
      name: 'GreenTech Solutions',
      description: 'Sustainable energy solutions for residential buildings',
      industry: 'CleanTech',
      stage: 'Series A',
      fundingGoal: 5000000,
      raised: 2000000,
      location: 'Austin, TX',
      foundedYear: 2022,
    },
    {
      id: 3,
      name: 'Healthcare AI',
      description: 'AI-driven diagnostics for healthcare providers',
      industry: 'Healthcare',
      stage: 'Pre-seed',
      fundingGoal: 500000,
      raised: 200000,
      location: 'Boston, MA',
      foundedYear: 2024,
    },
  ]);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-indigo-900">Discover Startups</h1>
        <div className="flex space-x-4">
          <select className="border border-indigo-200 rounded-lg px-4 py-2 text-indigo-900 focus:ring-2 focus:ring-indigo-500">
            <option>All Industries</option>
            <option>Technology</option>
            <option>Healthcare</option>
            <option>Finance</option>
            <option>Education</option>
          </select>
          <select className="border border-indigo-200 rounded-lg px-4 py-2 text-indigo-900 focus:ring-2 focus:ring-indigo-500">
            <option>All Stages</option>
            <option>Pre-seed</option>
            <option>Seed</option>
            <option>Series A</option>
            <option>Series B</option>
          </select>
        </div>
      </div>

      {/* Startups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {startups.map((startup) => (
          <Card key={startup.id} className="bg-white border-indigo-100">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-indigo-900">{startup.name}</h3>
                  <p className="text-indigo-600 text-sm">{startup.location}</p>
                </div>
                <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">
                  {startup.stage}
                </span>
              </div>

              <p className="text-gray-600 mb-4 line-clamp-2">{startup.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-indigo-600">Funding Goal</p>
                  <p className="font-semibold text-indigo-900">
                    ${startup.fundingGoal.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-indigo-600">Raised</p>
                  <p className="font-semibold text-indigo-900">
                    ${startup.raised.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="w-full bg-indigo-100 rounded-full h-2 mb-4">
                <div
                  className="bg-indigo-600 h-2 rounded-full"
                  style={{ width: `${(startup.raised / startup.fundingGoal) * 100}%` }}
                ></div>
              </div>

              <div className="flex justify-between items-center text-sm">
                <div>
                  <span className="text-indigo-600">Industry:</span>
                  <span className="ml-2 text-gray-600">{startup.industry}</span>
                </div>
                <div>
                  <span className="text-indigo-600">Founded:</span>
                  <span className="ml-2 text-gray-600">{startup.foundedYear}</span>
                </div>
              </div>

              <div className="mt-6 flex space-x-4">
                <button className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  View Details
                </button>
                <button className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                  Save
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="mt-8 text-center">
        <button className="px-6 py-3 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors">
          Load More Startups
        </button>
      </div>
    </div>
  );
}