'use client';

import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="ml-64 min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="flex justify-between items-center px-8 py-4">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                Add New
              </button>
              <div className="flex items-center">
                <span className="mr-2 text-sm font-medium text-gray-900">Demo User</span>
                <div className="h-8 w-8 rounded-full bg-teal-100 border-2 border-teal-200 flex items-center justify-center text-teal-600 font-medium">
                  DU
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-8">
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-teal-50 to-white rounded-xl shadow-lg p-6 border border-teal-100">
              <h3 className="text-sm font-medium text-teal-800">Total Startups</h3>
              <p className="mt-2 text-3xl font-semibold text-gray-900">24</p>
              <div className="mt-2 flex items-center text-sm text-teal-600">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
                </svg>
                <span>12% increase</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-white rounded-xl shadow-lg p-6 border border-teal-100">
              <h3 className="text-sm font-medium text-teal-800">Active Investors</h3>
              <p className="mt-2 text-3xl font-semibold text-gray-900">156</p>
              <div className="mt-2 flex items-center text-sm text-teal-600">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
                </svg>
                <span>8% increase</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-white rounded-xl shadow-lg p-6 border border-teal-100">
              <h3 className="text-sm font-medium text-teal-800">Total Investments</h3>
              <p className="mt-2 text-3xl font-semibold text-gray-900">$12.4M</p>
              <div className="mt-2 flex items-center text-sm text-teal-600">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
                </svg>
                <span>23% increase</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-white rounded-xl shadow-lg p-6 border border-teal-100">
              <h3 className="text-sm font-medium text-teal-800">Successful Matches</h3>
              <p className="mt-2 text-3xl font-semibold text-gray-900">89</p>
              <div className="mt-2 flex items-center text-sm text-teal-600">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
                </svg>
                <span>15% increase</span>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-teal-100">
            <div className="px-6 py-4 border-b border-teal-100 bg-gradient-to-r from-teal-50/50">
              <h2 className="text-lg font-semibold text-teal-900">Recent Activity</h2>
            </div>
            <div className="divide-y divide-teal-100">
              <div className="px-6 py-4 flex items-center hover:bg-teal-50/30 transition-colors">
                <div className="h-10 w-10 rounded-xl bg-teal-50 flex items-center justify-center mr-4 border border-teal-100">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-teal-900">New startup registered</p>
                  <p className="text-sm text-teal-600">TechCorp joined the platform</p>
                </div>
                <span className="ml-auto text-sm text-teal-600 bg-teal-50 px-2 py-1 rounded-full border border-teal-100">2h ago</span>
              </div>
              <div className="px-6 py-4 flex items-center hover:bg-teal-50/30 transition-colors">
                <div className="h-10 w-10 rounded-xl bg-teal-50 flex items-center justify-center mr-4 border border-teal-100">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-teal-900">Investment made</p>
                  <p className="text-sm text-teal-600">$2.5M invested in StartupX</p>
                </div>
                <span className="ml-auto text-sm text-teal-600 bg-teal-50 px-2 py-1 rounded-full border border-teal-100">5h ago</span>
              </div>
              <div className="px-6 py-4 flex items-center hover:bg-teal-50/30 transition-colors">
                <div className="h-10 w-10 rounded-xl bg-teal-50 flex items-center justify-center mr-4 border border-teal-100">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-teal-900">New connection</p>
                  <p className="text-sm text-teal-600">InvestCo connected with 3 startups</p>
                </div>
                <span className="ml-auto text-sm text-teal-600 bg-teal-50 px-2 py-1 rounded-full border border-teal-100">8h ago</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}