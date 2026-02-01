'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';

interface Investor {
  id: number;
  name: string;
  company: string;
  amount: number;
  equity: number;
  status: 'interested' | 'in_discussion' | 'committed' | 'passed';
}

export default function InvestorsPage() {
  const [investors, setInvestors] = useState<Investor[]>([
    {
      id: 1,
      name: 'John Smith',
      company: 'Tech Ventures',
      amount: 250000,
      equity: 5,
      status: 'committed',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      company: 'Innovation Capital',
      amount: 500000,
      equity: 8,
      status: 'in_discussion',
    },
    {
      id: 3,
      name: 'Michael Chen',
      company: 'Growth Fund',
      amount: 750000,
      equity: 10,
      status: 'interested',
    },
  ]);

  const getStatusColor = (status: Investor['status']) => {
    switch (status) {
      case 'committed':
        return 'bg-green-100 text-green-800';
      case 'in_discussion':
        return 'bg-yellow-100 text-yellow-800';
      case 'interested':
        return 'bg-blue-100 text-blue-800';
      case 'passed':
        return 'bg-red-100 text-red-800';
    }
  };

  const getStatusText = (status: Investor['status']) => {
    return status.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-indigo-900">Investors</h1>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          Add Investor
        </button>
      </div>

      {/* Investment Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 bg-white border-indigo-100">
          <h3 className="text-sm font-medium text-indigo-600 mb-1">Total Investment</h3>
          <p className="text-2xl font-semibold text-indigo-900">
            ${investors.reduce((sum, inv) => sum + inv.amount, 0).toLocaleString()}
          </p>
        </Card>
        <Card className="p-6 bg-white border-indigo-100">
          <h3 className="text-sm font-medium text-indigo-600 mb-1">Total Equity</h3>
          <p className="text-2xl font-semibold text-indigo-900">
            {investors.reduce((sum, inv) => sum + inv.equity, 0)}%
          </p>
        </Card>
        <Card className="p-6 bg-white border-indigo-100">
          <h3 className="text-sm font-medium text-indigo-600 mb-1">Active Discussions</h3>
          <p className="text-2xl font-semibold text-indigo-900">
            {investors.filter(inv => inv.status === 'in_discussion').length}
          </p>
        </Card>
      </div>

      {/* Investors List */}
      <div className="space-y-4">
        {investors.map((investor) => (
          <Card key={investor.id} className="p-6 bg-white border-indigo-100">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-indigo-900">{investor.name}</h3>
                <p className="text-indigo-600">{investor.company}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(investor.status)}`}>
                {getStatusText(investor.status)}
              </span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-indigo-600">Investment Amount</p>
                <p className="text-indigo-900 font-medium">${investor.amount.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-indigo-600">Equity</p>
                <p className="text-indigo-900 font-medium">{investor.equity}%</p>
              </div>
            </div>
            <div className="mt-4 flex space-x-4">
              <button className="text-indigo-600 hover:text-indigo-800 text-sm">
                View Details
              </button>
              <button className="text-indigo-600 hover:text-indigo-800 text-sm">
                Schedule Meeting
              </button>
              <button className="text-indigo-600 hover:text-indigo-800 text-sm">
                Update Status
              </button>
            </div>
          </Card>
        ))}
      </div>

      {/* Add Investor CTA */}
      {investors.length === 0 && (
        <div className="text-center py-16">
          <h3 className="text-lg font-medium text-indigo-900">No investors yet</h3>
          <p className="text-indigo-600 mt-2">Start by adding your first investor</p>
          <button className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Add Your First Investor
          </button>
        </div>
      )}
    </div>
  );
}