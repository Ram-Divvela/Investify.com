'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';

interface Deal {
  id: number;
  startupName: string;
  industry: string;
  stage: string;
  askAmount: number;
  equity: number;
  status: 'new' | 'reviewing' | 'meeting_scheduled' | 'due_diligence' | 'negotiating' | 'passed';
  lastActivity: string;
}

export default function DealFlow() {
  const [deals, setDeals] = useState<Deal[]>([
    {
      id: 1,
      startupName: 'CloudTech Solutions',
      industry: 'SaaS',
      stage: 'Seed',
      askAmount: 500000,
      equity: 10,
      status: 'reviewing',
      lastActivity: '2 hours ago',
    },
    {
      id: 2,
      startupName: 'GreenEnergy',
      industry: 'CleanTech',
      stage: 'Series A',
      askAmount: 2000000,
      equity: 15,
      status: 'meeting_scheduled',
      lastActivity: '1 day ago',
    },
    {
      id: 3,
      startupName: 'FinTech Pro',
      industry: 'Finance',
      stage: 'Pre-seed',
      askAmount: 250000,
      equity: 8,
      status: 'new',
      lastActivity: 'Just now',
    },
  ]);

  const getStatusColor = (status: Deal['status']) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800';
      case 'reviewing':
        return 'bg-yellow-100 text-yellow-800';
      case 'meeting_scheduled':
        return 'bg-purple-100 text-purple-800';
      case 'due_diligence':
        return 'bg-orange-100 text-orange-800';
      case 'negotiating':
        return 'bg-green-100 text-green-800';
      case 'passed':
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: Deal['status']) => {
    return status.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-indigo-900">Deal Flow</h1>
        <div className="flex space-x-4">
          <select className="border border-indigo-200 rounded-lg px-4 py-2 text-indigo-900 focus:ring-2 focus:ring-indigo-500">
            <option value="all">All Stages</option>
            <option value="pre_seed">Pre-seed</option>
            <option value="seed">Seed</option>
            <option value="series_a">Series A</option>
            <option value="series_b">Series B</option>
          </select>
          <select className="border border-indigo-200 rounded-lg px-4 py-2 text-indigo-900 focus:ring-2 focus:ring-indigo-500">
            <option value="all">All Industries</option>
            <option value="saas">SaaS</option>
            <option value="fintech">FinTech</option>
            <option value="healthcare">Healthcare</option>
            <option value="cleantech">CleanTech</option>
          </select>
        </div>
      </div>

      {/* Deal Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6 bg-white border-indigo-100">
          <h3 className="text-sm font-medium text-indigo-600 mb-1">Active Deals</h3>
          <p className="text-2xl font-semibold text-indigo-900">
            {deals.filter(d => d.status !== 'passed').length}
          </p>
        </Card>
        <Card className="p-6 bg-white border-indigo-100">
          <h3 className="text-sm font-medium text-indigo-600 mb-1">New This Week</h3>
          <p className="text-2xl font-semibold text-indigo-900">
            {deals.filter(d => d.status === 'new').length}
          </p>
        </Card>
        <Card className="p-6 bg-white border-indigo-100">
          <h3 className="text-sm font-medium text-indigo-600 mb-1">In Due Diligence</h3>
          <p className="text-2xl font-semibold text-indigo-900">
            {deals.filter(d => d.status === 'due_diligence').length}
          </p>
        </Card>
        <Card className="p-6 bg-white border-indigo-100">
          <h3 className="text-sm font-medium text-indigo-600 mb-1">Total Deal Value</h3>
          <p className="text-2xl font-semibold text-indigo-900">
            ${deals.reduce((sum, deal) => sum + deal.askAmount, 0).toLocaleString()}
          </p>
        </Card>
      </div>

      {/* Deal List */}
      <div className="space-y-4">
        {deals.map((deal) => (
          <Card key={deal.id} className="p-6 bg-white border-indigo-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <div className="flex items-center space-x-3">
                  <h3 className="text-lg font-medium text-indigo-900">{deal.startupName}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(deal.status)}`}>
                    {getStatusText(deal.status)}
                  </span>
                </div>
                <div className="flex items-center space-x-3 mt-1">
                  <span className="text-indigo-600">{deal.industry}</span>
                  <span className="text-indigo-400">•</span>
                  <span className="text-indigo-600">{deal.stage}</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="text-indigo-600 hover:text-indigo-800">
                  View Details
                </button>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  Take Action
                </button>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-indigo-600">Ask Amount</p>
                <p className="font-medium text-indigo-900">${deal.askAmount.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-indigo-600">Equity Offered</p>
                <p className="font-medium text-indigo-900">{deal.equity}%</p>
              </div>
              <div>
                <p className="text-sm text-indigo-600">Last Activity</p>
                <p className="font-medium text-indigo-900">{deal.lastActivity}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Add Deal Button */}
      <button className="mt-8 w-full py-4 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors flex items-center justify-center">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Add New Deal
      </button>
    </div>
  );
}