'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';

interface PerformanceMetric {
  name: string;
  value: number;
  change: number;
}

interface InvestmentDistribution {
  stage: string;
  percentage: number;
  amount: number;
}

export default function InvestorAnalytics() {
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([
    {
      name: 'Portfolio Value',
      value: 2500000,
      change: 15.5,
    },
    {
      name: 'Total Returns',
      value: 450000,
      change: 22.3,
    },
    {
      name: 'IRR',
      value: 18.5,
      change: 5.2,
    },
  ]);

  const [distribution, setDistribution] = useState<InvestmentDistribution[]>([
    {
      stage: 'Pre-seed',
      percentage: 20,
      amount: 500000,
    },
    {
      stage: 'Seed',
      percentage: 35,
      amount: 875000,
    },
    {
      stage: 'Series A',
      percentage: 45,
      amount: 1125000,
    },
  ]);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-indigo-900">Portfolio Analytics</h1>
        <select className="border border-indigo-200 rounded-lg px-4 py-2 text-indigo-900 focus:ring-2 focus:ring-indigo-500">
          <option value="all_time">All Time</option>
          <option value="year">This Year</option>
          <option value="quarter">This Quarter</option>
          <option value="month">This Month</option>
        </select>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <Card key={index} className="p-6 bg-white border-indigo-100">
            <h3 className="text-sm font-medium text-indigo-600 mb-2">{metric.name}</h3>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-semibold text-indigo-900">
                {metric.name === 'IRR' 
                  ? `${metric.value}%`
                  : `$${metric.value.toLocaleString()}`}
              </p>
              <span className={`text-sm font-medium ${
                metric.change >= 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.change > 0 ? '+' : ''}{metric.change}%
              </span>
            </div>
          </Card>
        ))}
      </div>

      {/* Portfolio Distribution */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-indigo-900 mb-4">Investment Distribution</h2>
        <Card className="p-6 bg-white border-indigo-100">
          {distribution.map((item, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <div className="flex justify-between items-center mb-2">
                <span className="text-indigo-900">{item.stage}</span>
                <span className="text-indigo-600">{item.percentage}%</span>
              </div>
              <div className="w-full bg-indigo-100 rounded-full h-2.5">
                <div
                  className="bg-indigo-600 h-2.5 rounded-full"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
              <p className="text-sm text-indigo-600 mt-1">
                ${item.amount.toLocaleString()}
              </p>
            </div>
          ))}
        </Card>
      </section>

      {/* Investment Timeline */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-indigo-900 mb-4">Investment Timeline</h2>
        <Card className="p-6 bg-white border-indigo-100 h-64 flex items-center justify-center">
          <p className="text-indigo-600">Investment timeline chart will be implemented here</p>
        </Card>
      </section>

      {/* Sector Analysis */}
      <section>
        <h2 className="text-xl font-semibold text-indigo-900 mb-4">Sector Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 bg-white border-indigo-100">
            <h3 className="text-lg font-medium text-indigo-900 mb-4">Top Performing Sectors</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-indigo-900">Technology</span>
                <span className="text-green-600">+24.5%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-indigo-900">Healthcare</span>
                <span className="text-green-600">+18.2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-indigo-900">Fintech</span>
                <span className="text-green-600">+15.7%</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white border-indigo-100">
            <h3 className="text-lg font-medium text-indigo-900 mb-4">Sector Allocation</h3>
            <div className="h-48 flex items-center justify-center">
              <p className="text-indigo-600">Sector allocation chart will be implemented here</p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}