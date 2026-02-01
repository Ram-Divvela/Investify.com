'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function StartupDashboardLayout({
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
          <Link href="/dashboard/startup" className="flex items-center space-x-2">
            <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
            <span className="text-xl font-bold text-indigo-900">Startup Hub</span>
          </Link>
        </div>
        <div className="p-4">
          <div className="space-y-2">
            <Link
              href="/dashboard/startup"
              className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                pathname === '/dashboard/startup'
                  ? 'bg-indigo-50 text-indigo-900'
                  : 'text-gray-600 hover:bg-indigo-50/50 hover:text-indigo-900'
              }`}
            >
              <svg className="w-5 h-5 mr-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
              Overview
            </Link>
            <Link
              href="/dashboard/startup/metrics"
              className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                pathname === '/dashboard/startup/metrics'
                  ? 'bg-indigo-50 text-indigo-900'
                  : 'text-gray-600 hover:bg-indigo-50/50 hover:text-indigo-900'
              }`}
            >
              <svg className="w-5 h-5 mr-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
              Metrics
            </Link>
            <Link
              href="/dashboard/startup/pitch-deck"
              className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                pathname === '/dashboard/startup/pitch-deck'
                  ? 'bg-indigo-50 text-indigo-900'
                  : 'text-gray-600 hover:bg-indigo-50/50 hover:text-indigo-900'
              }`}
            >
              <svg className="w-5 h-5 mr-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
              </svg>
              Pitch Deck
            </Link>
            <Link
              href="/dashboard/startup/investors"
              className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                pathname === '/dashboard/startup/investors'
                  ? 'bg-indigo-50 text-indigo-900'
                  : 'text-gray-600 hover:bg-indigo-50/50 hover:text-indigo-900'
              }`}
            >
              <svg className="w-5 h-5 mr-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
              Investors
            </Link>
            <Link
              href="/dashboard/startup/settings"
              className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                pathname === '/dashboard/startup/settings'
                  ? 'bg-indigo-50 text-indigo-900'
                  : 'text-gray-600 hover:bg-indigo-50/50 hover:text-indigo-900'
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