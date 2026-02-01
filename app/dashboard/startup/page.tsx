'use client';

import Link from 'next/link';

export default function StartupDashboardPage() {
  // Sample data - replace with real data
  const startupData = {
    name: 'EcoTech Solutions',
    fundingGoal: 1000000,
    currentFunding: 750000,
    investors: 12,
    pitchViews: 450,
    interestedInvestors: 28,
    metrics: {
      mrr: 25000,
      growth: 15,
      runway: 18
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50/50 to-white">
      {/* Main Content */}
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Startup Dashboard</h1>
          <p className="text-indigo-600 mt-2">Track your progress and connect with investors</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-indigo-100">
            <h3 className="text-sm font-medium text-indigo-600 mb-4">Funding Progress</h3>
            <div className="mb-2">
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-900">${startupData.currentFunding.toLocaleString()}</span>
                <span className="text-indigo-600">${startupData.fundingGoal.toLocaleString()}</span>
              </div>
              <div className="h-2 bg-indigo-100 rounded-full">
                <div 
                  className="h-2 bg-indigo-500 rounded-full" 
                  style={{ width: `${(startupData.currentFunding / startupData.fundingGoal) * 100}%` }}
                ></div>
              </div>
            </div>
            <p className="text-sm text-indigo-600">{((startupData.currentFunding / startupData.fundingGoal) * 100).toFixed(1)}% of goal</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-indigo-100">
            <h3 className="text-sm font-medium text-indigo-600 mb-4">Investor Interest</h3>
            <p className="text-2xl font-bold text-gray-900 mb-1">{startupData.interestedInvestors}</p>
            <p className="text-sm text-indigo-600">Interested investors</p>
            <div className="mt-4">
              <Link href="/dashboard/startup/investors" className="text-indigo-600 text-sm hover:text-indigo-700">
                View all →
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-indigo-100">
            <h3 className="text-sm font-medium text-indigo-600 mb-4">Pitch Performance</h3>
            <p className="text-2xl font-bold text-gray-900 mb-1">{startupData.pitchViews}</p>
            <p className="text-sm text-indigo-600">Pitch deck views</p>
            <div className="mt-4">
              <Link href="/dashboard/startup/pitch" className="text-indigo-600 text-sm hover:text-indigo-700">
                Update pitch →
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-indigo-100">
            <h3 className="text-sm font-medium text-indigo-600 mb-4">Current Investors</h3>
            <p className="text-2xl font-bold text-gray-900 mb-1">{startupData.investors}</p>
            <p className="text-sm text-indigo-600">Active investors</p>
            <div className="mt-4">
              <Link href="/dashboard/startup/investors" className="text-indigo-600 text-sm hover:text-indigo-700">
                View details →
              </Link>
            </div>
          </div>
        </div>

        {/* Metrics and Growth */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-indigo-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Key Metrics</h3>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-indigo-600 mb-1">Monthly Revenue</p>
                <p className="text-xl font-bold text-gray-900">${startupData.metrics.mrr.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-indigo-600 mb-1">Growth Rate</p>
                <p className="text-xl font-bold text-gray-900">{startupData.metrics.growth}%</p>
              </div>
              <div>
                <p className="text-sm text-indigo-600 mb-1">Runway</p>
                <p className="text-xl font-bold text-gray-900">{startupData.metrics.runway} months</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-indigo-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 text-left rounded-lg hover:bg-indigo-50 transition-colors">
                <svg className="w-6 h-6 text-indigo-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                <h4 className="font-medium text-gray-900">Update Profile</h4>
                <p className="text-sm text-indigo-600">Keep your info current</p>
              </button>
              <button className="p-4 text-left rounded-lg hover:bg-indigo-50 transition-colors">
                <svg className="w-6 h-6 text-indigo-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
                <h4 className="font-medium text-gray-900">Add Metrics</h4>
                <p className="text-sm text-indigo-600">Update your numbers</p>
              </button>
              <button className="p-4 text-left rounded-lg hover:bg-indigo-50 transition-colors">
                <svg className="w-6 h-6 text-indigo-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
                </svg>
                <h4 className="font-medium text-gray-900">Update Pitch</h4>
                <p className="text-sm text-indigo-600">Improve your deck</p>
              </button>
              <button className="p-4 text-left rounded-lg hover:bg-indigo-50 transition-colors">
                <svg className="w-6 h-6 text-indigo-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                </svg>
                <h4 className="font-medium text-gray-900">Message Investors</h4>
                <p className="text-sm text-indigo-600">Reach out to leads</p>
              </button>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-indigo-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center p-4 rounded-lg hover:bg-indigo-50 transition-colors">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-gray-900">New investor viewed your pitch</p>
                <p className="text-sm text-indigo-600">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center p-4 rounded-lg hover:bg-indigo-50 transition-colors">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-gray-900">New message from potential investor</p>
                <p className="text-sm text-indigo-600">5 hours ago</p>
              </div>
            </div>
            <div className="flex items-center p-4 rounded-lg hover:bg-indigo-50 transition-colors">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-gray-900">Monthly metrics updated</p>
                <p className="text-sm text-indigo-600">Yesterday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}