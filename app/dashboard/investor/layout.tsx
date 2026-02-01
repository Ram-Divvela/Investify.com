'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function InvestorDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50/50 to-white">
      {/* Sidebar */}
      <nav className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg border-r border-indigo-100">
        <div className="p-6 border-b border-indigo-100">
          <Link href="/dashboard/investor" className="flex items-center space-x-2">
            <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span className="text-xl font-bold text-gray-900">Investor Portal</span>
          </Link>
        </div>
        <div className="p-4">
          <div className="space-y-2">
            <Link
              href="/dashboard/investor"
              className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                pathname === '/dashboard/investor'
                  ? 'bg-indigo-50 text-gray-900'
                  : 'text-gray-600 hover:bg-indigo-50/50 hover:text-gray-900'
              }`}
            >
              <svg className="w-5 h-5 mr-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
              Portfolio
            </Link>
            <Link
              href="/dashboard/investor/discover"
              className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                pathname === '/dashboard/investor/discover'
                  ? 'bg-indigo-50 text-gray-900'
                  : 'text-gray-600 hover:bg-indigo-50/50 hover:text-gray-900'
              }`}
            >
              <svg className="w-5 h-5 mr-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              Discover
            </Link>
            <Link
              href="/dashboard/investor/analytics"
              className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                pathname === '/dashboard/investor/analytics'
                  ? 'bg-indigo-50 text-gray-900'
                  : 'text-gray-600 hover:bg-indigo-50/50 hover:text-gray-900'
              }`}
            >
              <svg className="w-5 h-5 mr-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
              Analytics
            </Link>
            <Link
              href="/dashboard/investor/deal-flow"
              className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                pathname === '/dashboard/investor/deal-flow'
                  ? 'bg-indigo-50 text-gray-900'
                  : 'text-gray-600 hover:bg-indigo-50/50 hover:text-gray-900'
              }`}
            >
              <svg className="w-5 h-5 mr-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Active Deals
            </Link>
            <Link
              href="/dashboard/investor/settings"
              className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                pathname === '/dashboard/investor/settings'
                  ? 'bg-indigo-50 text-gray-900'
                  : 'text-gray-600 hover:bg-indigo-50/50 hover:text-gray-900'
              }`}
            >
              <svg className="w-5 h-5 mr-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              Settings
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="ml-64 min-h-screen">
        {children}
      </div>
    </div>
  );
}