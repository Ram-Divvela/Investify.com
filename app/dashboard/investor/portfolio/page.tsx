'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';

interface Investment {
  id: number;
  startupName: string;
  amount: number;
  equity: number;
  stage: string;
  valuation: number;
  invested: string;
  performance: number;
}

export default function InvestorPortfolio() {
  const [investments, setInvestments] = useState<Investment[]>([
    {
      id: 1,
      startupName: 'TechCo',
      amount: 500000,
      equity: 10,
      stage: 'Series A',
      valuation: 5000000,
      invested: '6 months ago',
      performance: 15,
    },
    {
      id: 2,
      startupName: 'HealthInnovate',
      amount: 250000,
      equity: 5,
      stage: 'Seed',
      valuation: 2500000,
      invested: '1 year ago',
      performance: 25,
    },
    {
      id: 3,
      startupName: 'EduTech',
      amount: 100000,
      equity: 8,
      stage: 'Pre-seed',
      valuation: 1000000,
      invested: '3 months ago',
      performance: -5,
    },
  ]);

  const totalInvested = investments.reduce((sum, inv) => sum + inv.amount, 0);
  const averagePerformance = investments.reduce((sum, inv) => sum + inv.performance, 0) / investments.length;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-indigo-900 mb-6">Investment Portfolio</h1>

      {/* Portfolio Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 bg-white border-indigo-100">
          <h3 className="text-sm font-medium text-indigo-600 mb-1">Total Invested</h3>
          <p className="text-2xl font-semibold text-indigo-900">
            ${totalInvested.toLocaleString()}
          </p>
        </Card>
        
        <Card className="p-6 bg-white border-indigo-100">
          <h3 className="text-sm font-medium text-indigo-600 mb-1">Active Investments</h3>
          <p className="text-2xl font-semibold text-indigo-900">{investments.length}</p>
        </Card>

        <Card className="p-6 bg-white border-indigo-100">
          <h3 className="text-sm font-medium text-indigo-600 mb-1">Average Performance</h3>
          <p className={`text-2xl font-semibold ${
            averagePerformance >= 0 ? 'text-green-600' : 'text-red-600'
          }`}>
            {averagePerformance > 0 ? '+' : ''}{averagePerformance.toFixed(1)}%
          </p>
        </Card>
      </div>

      {/* Portfolio Details */}
      <div className="space-y-6">
        {investments.map((investment) => (
          <Card key={investment.id} className="p-6 bg-white border-indigo-100">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-medium text-indigo-900">{investment.startupName}</h3>
                <p className="text-indigo-600">{investment.stage}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  investment.performance >= 0 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {investment.performance > 0 ? '+' : ''}{investment.performance}%
                </span>
                <button className="text-indigo-600 hover:text-indigo-800">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-indigo-600">Investment Amount</p>
                <p className="font-medium text-indigo-900">${investment.amount.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-indigo-600">Equity</p>
                <p className="font-medium text-indigo-900">{investment.equity}%</p>
              </div>
              <div>
                <p className="text-sm text-indigo-600">Current Valuation</p>
                <p className="font-medium text-indigo-900">${investment.valuation.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-indigo-600">Invested</p>
                <p className="font-medium text-indigo-900">{investment.invested}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Add Investment Button */}
      <button className="mt-8 w-full py-4 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors flex items-center justify-center">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Add New Investment
      </button>
    </div>
  );
}