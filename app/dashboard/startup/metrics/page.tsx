'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';

interface MetricData {
  name: string;
  current: number;
  previous: number;
  change: number;
}

export default function StartupMetrics() {
  const [metrics, setMetrics] = useState<MetricData[]>([]);

  useEffect(() => {
    // TODO: Fetch actual metrics from API
    setMetrics([
      {
        name: 'Monthly Revenue',
        current: 25000,
        previous: 20000,
        change: 25,
      },
      {
        name: 'Active Users',
        current: 1200,
        previous: 1000,
        change: 20,
      },
      {
        name: 'Customer Retention',
        current: 85,
        previous: 80,
        change: 6.25,
      },
      {
        name: 'Burn Rate',
        current: 15000,
        previous: 18000,
        change: -16.67,
      },
    ]);
  }, []);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-indigo-900">Startup Metrics</h1>
        <select className="border border-indigo-200 rounded-lg px-4 py-2 text-indigo-900 focus:ring-2 focus:ring-indigo-500">
          <option value="month">Last Month</option>
          <option value="quarter">Last Quarter</option>
          <option value="year">Last Year</option>
        </select>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <Card key={index} className="p-6 bg-white border-indigo-100">
            <h3 className="text-sm font-medium text-indigo-600 mb-2">{metric.name}</h3>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-2xl font-semibold text-indigo-900">
                  {metric.name.includes('Rate') || metric.name.includes('Retention') 
                    ? `${metric.current}%` 
                    : `$${metric.current.toLocaleString()}`}
                </p>
                <p className="text-sm text-indigo-600">
                  Previously: {metric.name.includes('Rate') || metric.name.includes('Retention')
                    ? `${metric.previous}%`
                    : `$${metric.previous.toLocaleString()}`}
                </p>
              </div>
              <span className={`text-sm font-medium ${
                metric.change > 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.change > 0 ? '+' : ''}{metric.change}%
              </span>
            </div>
          </Card>
        ))}
      </div>

      {/* Growth Charts - Placeholder */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-indigo-900 mb-4">Growth Trends</h2>
        <Card className="p-6 bg-white border-indigo-100 h-72 flex items-center justify-center">
          <p className="text-indigo-600">Growth chart will be implemented here</p>
        </Card>
      </section>

      {/* Key Performance Indicators */}
      <section>
        <h2 className="text-xl font-semibold text-indigo-900 mb-4">Key Performance Indicators</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-white border-indigo-100">
            <h3 className="text-sm font-medium text-indigo-600 mb-2">Customer Acquisition Cost</h3>
            <p className="text-2xl font-semibold text-indigo-900">$125</p>
            <p className="text-sm text-indigo-600">Per customer</p>
          </Card>
          <Card className="p-6 bg-white border-indigo-100">
            <h3 className="text-sm font-medium text-indigo-600 mb-2">Lifetime Value</h3>
            <p className="text-2xl font-semibold text-indigo-900">$850</p>
            <p className="text-sm text-indigo-600">Per customer</p>
          </Card>
          <Card className="p-6 bg-white border-indigo-100">
            <h3 className="text-sm font-medium text-indigo-600 mb-2">Conversion Rate</h3>
            <p className="text-2xl font-semibold text-indigo-900">3.2%</p>
            <p className="text-sm text-indigo-600">From trial to paid</p>
          </Card>
        </div>
      </section>
    </div>
  );
}