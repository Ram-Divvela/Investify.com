'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Startup {
  id: string;
  name: string;
  description: string;
  logo: string;
  sector: string;
  stage: string;
  location: string;
  fundingGoal: number;
  raised: number;
  employees: number;
}

const SAMPLE_STARTUPS = [
  {
    id: '1',
    name: 'EcoCharge',
    description: 'Revolutionary wireless charging technology using sustainable materials',
    logo: '🔋',
    sector: 'Clean Energy',
    stage: 'Series A',
    location: 'San Francisco, CA',
    fundingGoal: 5000000,
    raised: 3200000,
    employees: 28
  },
  {
    id: '2',
    name: 'GreenBuild',
    description: 'Sustainable construction materials and smart building solutions',
    logo: '🏗️',
    sector: 'Construction Tech',
    stage: 'Seed',
    location: 'Austin, TX',
    fundingGoal: 2000000,
    raised: 800000,
    employees: 15
  },
  {
    id: '3',
    name: 'AquaTech',
    description: 'AI-powered water conservation and management systems',
    logo: '💧',
    sector: 'Water Tech',
    stage: 'Pre-seed',
    location: 'Boston, MA',
    fundingGoal: 1000000,
    raised: 300000,
    employees: 8
  },
  // Add more sample startups here
];

export default function StartupSearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sector, setSector] = useState('all');
  const [stage, setStage] = useState('all');
  const [startups, setStartups] = useState<Startup[]>(SAMPLE_STARTUPS);
  const [filteredStartups, setFilteredStartups] = useState<Startup[]>(SAMPLE_STARTUPS);

  // Filter startups based on search term and filters
  useEffect(() => {
    let filtered = startups;

    if (searchTerm) {
      filtered = filtered.filter(startup =>
        startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        startup.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sector !== 'all') {
      filtered = filtered.filter(startup => startup.sector === sector);
    }

    if (stage !== 'all') {
      filtered = filtered.filter(startup => startup.stage === stage);
    }

    setFilteredStartups(filtered);
  }, [searchTerm, sector, stage, startups]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search startups..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 pl-12 text-lg border border-teal-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
          <svg
            className="absolute left-4 top-4 w-6 h-6 text-teal-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <div className="flex gap-4">
          <select
            value={sector}
            onChange={(e) => setSector(e.target.value)}
            className="px-4 py-2 border border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          >
            <option value="all">All Sectors</option>
            <option value="Clean Energy">Clean Energy</option>
            <option value="Construction Tech">Construction Tech</option>
            <option value="Water Tech">Water Tech</option>
            {/* Add more sectors */}
          </select>

          <select
            value={stage}
            onChange={(e) => setStage(e.target.value)}
            className="px-4 py-2 border border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          >
            <option value="all">All Stages</option>
            <option value="Pre-seed">Pre-seed</option>
            <option value="Seed">Seed</option>
            <option value="Series A">Series A</option>
            <option value="Series B">Series B</option>
            {/* Add more stages */}
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStartups.map((startup) => (
          <div
            key={startup.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-teal-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl">{startup.logo}</div>
                <div>
                  <h3 className="text-xl font-semibold text-teal-900">{startup.name}</h3>
                  <p className="text-teal-600">{startup.location}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-4 line-clamp-2">{startup.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-teal-50 p-3 rounded-lg">
                  <p className="text-sm text-teal-600">Funding Goal</p>
                  <p className="font-semibold text-teal-900">
                    ${(startup.fundingGoal / 1000000).toFixed(1)}M
                  </p>
                </div>
                <div className="bg-teal-50 p-3 rounded-lg">
                  <p className="text-sm text-teal-600">Raised</p>
                  <p className="font-semibold text-teal-900">
                    ${(startup.raised / 1000000).toFixed(1)}M
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">
                    {startup.sector}
                  </span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">
                    {startup.stage}
                  </span>
                </div>
                <button className="text-teal-600 hover:text-teal-800 font-medium">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredStartups.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-900">No startups found</h3>
          <p className="mt-2 text-gray-500">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}