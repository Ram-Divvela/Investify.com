'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';

interface StartupMetrics {
  monthlyGrowth: number;
  totalFunding: number;
  investors: number;
  runway: number;
}

export default function StartupOverview() {
  const [metrics, setMetrics] = useState<StartupMetrics>({
    monthlyGrowth: 0,
    totalFunding: 0,
    investors: 0,
    runway: 0,
  });

  useEffect(() => {
    // TODO: Fetch actual metrics from API
    setMetrics({
      monthlyGrowth: 15.5,
      totalFunding: 500000,
      investors: 3,
      runway: 18,
    });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-indigo-900 mb-6">Startup Overview</h1>
      
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6 bg-white border-indigo-100">
          <h3 className="text-sm font-medium text-indigo-600 mb-1">Monthly Growth</h3>
          <p className="text-2xl font-semibold text-indigo-900">{metrics.monthlyGrowth}%</p>
        </Card>

        <Card className="p-6 bg-white border-indigo-100">
          <h3 className="text-sm font-medium text-indigo-600 mb-1">Total Funding</h3>
          <p className="text-2xl font-semibold text-indigo-900">
            ${metrics.totalFunding.toLocaleString()}
          </p>
        </Card>

        <Card className="p-6 bg-white border-indigo-100">
          <h3 className="text-sm font-medium text-indigo-600 mb-1">Investors</h3>
          <p className="text-2xl font-semibold text-indigo-900">{metrics.investors}</p>
        </Card>

        <Card className="p-6 bg-white border-indigo-100">
          <h3 className="text-sm font-medium text-indigo-600 mb-1">Runway</h3>
          <p className="text-2xl font-semibold text-indigo-900">{metrics.runway} months</p>
        </Card>
      </div>

      {/* Recent Activity */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-indigo-900 mb-4">Recent Activity</h2>
        <Card className="p-6 bg-white border-indigo-100">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
              <div>
                <p className="text-indigo-900">New investor meeting scheduled</p>
                <p className="text-sm text-indigo-600">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
              <div>
                <p className="text-indigo-900">Updated pitch deck</p>
                <p className="text-sm text-indigo-600">1 day ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
              <div>
                <p className="text-indigo-900">Funding milestone reached</p>
                <p className="text-sm text-indigo-600">3 days ago</p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Quick Actions */}
      <section>
        <h2 className="text-xl font-semibold text-indigo-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button className="p-4 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg transition-colors">
            Update Metrics
          </button>
          <button className="p-4 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg transition-colors">
            Schedule Investor Meeting
          </button>
          <button className="p-4 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg transition-colors">
            Update Pitch Deck
          </button>
        </div>
      </section>
    </div>
  );
}