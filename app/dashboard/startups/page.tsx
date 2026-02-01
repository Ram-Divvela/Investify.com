'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Startup } from '@/app/types/schema';

export default function StartupListPage() {
  const [startups, setStartups] = useState<Startup[]>([]);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStartups = async () => {
      try {
        const response = await fetch('/api/startups');
        if (!response.ok) throw new Error('Failed to fetch startups');
        const data = await response.json();
        setStartups(data);
      } catch (error) {
        console.error('Error fetching startups:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStartups();
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Sustainable Startups</h1>
          <p className="text-indigo-600 mt-1">Discover innovative startups making a positive impact</p>
        </div>
        <Link
          href="/dashboard/startups/new"
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
          </svg>
          Add Startup
        </Link>
      </div>

      {/* Filters and Sort */}
      <div className="flex gap-4 pb-6 border-b border-indigo-100">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-indigo-200 rounded-lg px-4 py-2 text-indigo-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="all">All Stages</option>
          <option value="IDEA">Idea Stage</option>
          <option value="PRE_SEED">Pre-Seed</option>
          <option value="SEED">Seed</option>
          <option value="SERIES_A">Series A</option>
          <option value="SERIES_B">Series B</option>
          <option value="SERIES_C">Series C</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-indigo-200 rounded-lg px-4 py-2 text-indigo-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="name">Name</option>
          <option value="funding">Funding Amount</option>
        </select>
      </div>

      {/* Startup List */}
      {startups.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {startups.map((startup) => (
            <div
              key={startup.id}
              className="bg-gradient-to-br from-white to-indigo-50/30 rounded-xl shadow-lg overflow-hidden border border-indigo-100 hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-indigo-900">{startup.name}</h3>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full border border-indigo-200">
                    {startup.fundingStage.replace('_', ' ')}
                  </span>
                </div>
                <p className="text-indigo-700 mb-4 line-clamp-2">{startup.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="bg-white p-3 rounded-lg border border-indigo-100">
                    <span className="block text-indigo-600 mb-1">Funding Goal</span>
                    <span className="font-semibold text-indigo-900">${startup.fundingAmount.toLocaleString()}</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-indigo-100">
                    <span className="block text-indigo-600 mb-1">Team Size</span>
                    <span className="font-semibold text-indigo-900">{startup.teamSize} members</span>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-indigo-100 mb-4">
                  <div className="flex justify-between items-center text-sm">
                    <div>
                      <span className="block text-indigo-600 mb-1">Monthly Growth</span>
                      <span className="font-semibold text-indigo-900">{startup.metrics.growth}%</span>
                    </div>
                    <div>
                      <span className="block text-indigo-600 mb-1">Runway</span>
                      <span className="font-semibold text-indigo-900">{startup.metrics.runway} months</span>
                    </div>
                    <div>
                      <span className="block text-indigo-600 mb-1">Equity</span>
                      <span className="font-semibold text-indigo-900">{startup.equity}%</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <Link
                    href={startup.website || '#'}
                    className="text-indigo-600 hover:text-indigo-800 text-sm flex items-center"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                    </svg>
                    Website
                  </Link>
                  <div className="flex space-x-3">
                    <Link
                      href={`/dashboard/startups/${startup.id}/edit`}
                      className="text-indigo-600 hover:text-indigo-800 text-sm flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                      </svg>
                      Edit
                    </Link>
                    <button
                      onClick={() => {/* Handle delete */}}
                      className="text-indigo-600 hover:text-indigo-800 text-sm flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                      </svg>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-gradient-to-br from-white to-indigo-50 rounded-xl border border-indigo-100">
          <svg className="w-16 h-16 mx-auto text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
          </svg>
          <h3 className="mt-4 text-lg font-medium text-indigo-900">No startups yet</h3>
          <p className="mt-2 text-indigo-600">Get started by adding your first startup</p>
          <div className="mt-6">
            <Link
              href="/dashboard/startups/new"
              className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
              </svg>
              Add Startup
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}