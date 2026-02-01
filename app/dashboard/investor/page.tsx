'use client';

import Link from 'next/link';

export default function InvestorDashboardPage() {
  // Sample data - replace with real data
  const portfolioData = {
    totalInvested: 500000,
    activeInvestments: 8,
    potentialDeals: 15,
    returns: 22.5,
    watchlist: 12,
    portfolioCompanies: [
      {
        name: 'EcoTech Solutions',
        investment: 100000,
        growth: 15,
        stage: 'Series A'
      },
      {
        name: 'GreenBuild',
        investment: 75000,
        growth: 25,
        stage: 'Seed'
      },
      {
        name: 'AquaTech',
        investment: 50000,
        growth: 10,
        stage: 'Pre-seed'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50/50 to-white">
      {/* Main Content */}
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Investor Dashboard</h1>
          <p className="text-indigo-600 mt-2">Track your investments and discover new opportunities</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-indigo-100">
            <h3 className="text-sm font-medium text-indigo-600 mb-4">Total Invested</h3>
            <p className="text-2xl font-bold text-gray-900">${portfolioData.totalInvested.toLocaleString()}</p>
            <p className="text-sm text-indigo-600 mt-1">Across {portfolioData.activeInvestments} startups</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-indigo-100">
            <h3 className="text-sm font-medium text-indigo-600 mb-4">Portfolio Returns</h3>
            <p className="text-2xl font-bold text-gray-900">+{portfolioData.returns}%</p>
            <p className="text-sm text-indigo-600 mt-1">Average return rate</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-indigo-100">
            <h3 className="text-sm font-medium text-indigo-600 mb-4">Potential Deals</h3>
            <p className="text-2xl font-bold text-gray-900">{portfolioData.potentialDeals}</p>
            <p className="text-sm text-indigo-600 mt-1">New opportunities</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-indigo-100">
            <h3 className="text-sm font-medium text-indigo-600 mb-4">Watchlist</h3>
            <p className="text-2xl font-bold text-gray-900">{portfolioData.watchlist}</p>
            <p className="text-sm text-indigo-600 mt-1">Tracked startups</p>
          </div>
        </div>

        {/* Portfolio Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-indigo-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Portfolio Companies</h3>
                <Link href="/dashboard/investor/portfolio" className="text-indigo-600 hover:text-indigo-700 text-sm">
                  View all →
                </Link>
              </div>
              <div className="space-y-4">
                {portfolioData.portfolioCompanies.map((company, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg hover:bg-indigo-50 transition-colors">
                    <div>
                      <h4 className="font-medium text-gray-900">{company.name}</h4>
                      <p className="text-sm text-indigo-600">{company.stage}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">${company.investment.toLocaleString()}</p>
                      <p className="text-sm text-indigo-500">+{company.growth}% growth</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-indigo-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
            <div className="space-y-4">
              <button className="w-full p-4 text-left rounded-lg hover:bg-indigo-50 transition-colors">
                <svg className="w-6 h-6 text-indigo-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
                <h4 className="font-medium text-gray-900">Find Startups</h4>
                <p className="text-sm text-indigo-600">Discover new opportunities</p>
              </button>
              <button className="w-full p-4 text-left rounded-lg hover:bg-indigo-50 transition-colors">
                <svg className="w-6 h-6 text-indigo-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                </svg>
                <h4 className="font-medium text-gray-900">Messages</h4>
                <p className="text-sm text-indigo-600">Connect with founders</p>
              </button>
              <button className="w-full p-4 text-left rounded-lg hover:bg-indigo-50 transition-colors">
                <svg className="w-6 h-6 text-indigo-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
                <h4 className="font-medium text-gray-900">Analytics</h4>
                <p className="text-sm text-indigo-600">View portfolio metrics</p>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-gray-900">EcoTech Solutions reported 15% growth</p>
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
                <p className="text-gray-900">New message from GreenBuild founder</p>
                <p className="text-sm text-indigo-600">5 hours ago</p>
              </div>
            </div>
            <div className="flex items-center p-4 rounded-lg hover:bg-indigo-50 transition-colors">
              <div className="flex-shrink-0 mr-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-gray-900">New investment opportunity in AquaTech</p>
                <p className="text-sm text-indigo-600">Yesterday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}