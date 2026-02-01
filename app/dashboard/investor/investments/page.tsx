'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';

interface Investment {
  id: number;
  startupName: string;
  amount: number;
  equity: number;
  investedDate: string;
  currentValue: number;
  return: number;
  lastReport: string;
  status: 'performing' | 'overperforming' | 'underperforming';
}

export default function MyInvestments() {
  const [investments, setInvestments] = useState<Investment[]>([
    {
      id: 1,
      startupName: 'DataAI Solutions',
      amount: 750000,
      equity: 12,
      investedDate: '2024-06-15',
      currentValue: 900000,
      return: 20,
      lastReport: '2024-10-15',
      status: 'overperforming',
    },
    {
      id: 2,
      startupName: 'MedTech Innovations',
      amount: 500000,
      equity: 8,
      investedDate: '2024-03-01',
      currentValue: 475000,
      return: -5,
      lastReport: '2024-10-01',
      status: 'underperforming',
    },
    {
      id: 3,
      startupName: 'Green Energy Co',
      amount: 1000000,
      equity: 15,
      investedDate: '2024-01-15',
      currentValue: 1100000,
      return: 10,
      lastReport: '2024-10-10',
      status: 'performing',
    },
  ]);

  const getStatusColor = (status: Investment['status']) => {
    switch (status) {
      case 'performing':
        return 'bg-blue-100 text-blue-800';
      case 'overperforming':
        return 'bg-green-100 text-green-800';
      case 'underperforming':
        return 'bg-red-100 text-red-800';
    }
  };

  const totalInvested = investments.reduce((sum, inv) => sum + inv.amount, 0);
  const totalValue = investments.reduce((sum, inv) => sum + inv.currentValue, 0);
  const totalReturn = ((totalValue - totalInvested) / totalInvested) * 100;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-indigo-900 mb-6">My Investments</h1>

      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6 bg-white border-indigo-100">
          <h3 className="text-sm font-medium text-indigo-600 mb-1">Total Invested</h3>
          <p className="text-2xl font-semibold text-indigo-900">
            ${totalInvested.toLocaleString()}
          </p>
        </Card>

        <Card className="p-6 bg-white border-indigo-100">
          <h3 className="text-sm font-medium text-indigo-600 mb-1">Current Value</h3>
          <p className="text-2xl font-semibold text-indigo-900">
            ${totalValue.toLocaleString()}
          </p>
        </Card>

        <Card className="p-6 bg-white border-indigo-100">
          <h3 className="text-sm font-medium text-indigo-600 mb-1">Total Return</h3>
          <p className={`text-2xl font-semibold ${totalReturn >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {totalReturn > 0 ? '+' : ''}{totalReturn.toFixed(1)}%
          </p>
        </Card>

        <Card className="p-6 bg-white border-indigo-100">
          <h3 className="text-sm font-medium text-indigo-600 mb-1">Active Investments</h3>
          <p className="text-2xl font-semibold text-indigo-900">{investments.length}</p>
        </Card>
      </div>

      {/* Investments List */}
      <div className="space-y-6">
        {investments.map((investment) => (
          <Card key={investment.id} className="p-6 bg-white border-indigo-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center space-x-3">
                  <h3 className="text-lg font-medium text-indigo-900">
                    {investment.startupName}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(investment.status)}`}>
                    {investment.status.charAt(0).toUpperCase() + investment.status.slice(1)}
                  </span>
                </div>
                <p className="text-indigo-600 mt-1">
                  Invested on {new Date(investment.investedDate).toLocaleDateString()}
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <button className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                  View Details
                </button>
                <button className="ml-3 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  Contact Startup
                </button>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-indigo-600">Investment Amount</p>
                <p className="font-medium text-indigo-900">
                  ${investment.amount.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-indigo-600">Current Value</p>
                <p className="font-medium text-indigo-900">
                  ${investment.currentValue.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-indigo-600">Return</p>
                <p className={`font-medium ${
                  investment.return >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {investment.return > 0 ? '+' : ''}{investment.return}%
                </p>
              </div>
              <div>
                <p className="text-sm text-indigo-600">Equity Held</p>
                <p className="font-medium text-indigo-900">{investment.equity}%</p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-indigo-100">
              <p className="text-sm text-indigo-600">
                Last report received on {new Date(investment.lastReport).toLocaleDateString()}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Investment Reports */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-indigo-900 mb-4">Recent Reports</h2>
        <Card className="p-6 bg-white border-indigo-100">
          <div className="space-y-4">
            {investments.map((investment) => (
              <div key={investment.id} className="flex items-center justify-between">
                <div>
                  <h4 className="text-indigo-900">{investment.startupName}</h4>
                  <p className="text-sm text-indigo-600">
                    Quarterly Report - Q3 2024
                  </p>
                </div>
                <button className="text-indigo-600 hover:text-indigo-800">
                  View Report
                </button>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
}