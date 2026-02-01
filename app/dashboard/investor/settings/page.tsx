'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';

export default function InvestorSettings() {
  const [notifications, setNotifications] = useState({
    dealFlow: true,
    portfolioUpdates: true,
    financialReports: false,
  });
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-indigo-900 mb-6">Settings</h1>

      {/* Profile Settings */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-indigo-900 mb-4">Investor Profile</h2>
        <Card className="p-6 bg-white border-indigo-100">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-indigo-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-indigo-700 mb-2">
                  Company/Firm
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter company name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-indigo-700 mb-2">
                Professional Bio
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Tell startups about yourself"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-indigo-700 mb-2">
                  Investment Focus
                </label>
                <select className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                  <option>Select focus area</option>
                  <option>Technology</option>
                  <option>Healthcare</option>
                  <option>Finance</option>
                  <option>Consumer</option>
                  <option>Enterprise</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-indigo-700 mb-2">
                  Investment Stage
                </label>
                <select className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                  <option>Select preferred stage</option>
                  <option>Pre-seed</option>
                  <option>Seed</option>
                  <option>Series A</option>
                  <option>Series B</option>
                  <option>Growth</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-indigo-700 mb-2">
                  Minimum Investment
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter amount"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-indigo-700 mb-2">
                  Maximum Investment
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter amount"
                />
              </div>
            </div>

            <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Save Changes
            </button>
          </form>
        </Card>
      </section>

      {/* Notification Settings */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-indigo-900 mb-4">Notifications</h2>
        <Card className="p-6 bg-white border-indigo-100">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-indigo-900 font-medium">Deal Flow Alerts</h3>
                <p className="text-indigo-600 text-sm">Get notified about new investment opportunities</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={notifications.dealFlow}
                  onChange={(e) => setNotifications(prev => ({ ...prev, dealFlow: e.target.checked }))}
                />
                <div className="w-11 h-6 bg-indigo-600 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-indigo-900 font-medium">Portfolio Updates</h3>
                <p className="text-indigo-600 text-sm">Receive updates from your investments</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={notifications.portfolioUpdates}
                  onChange={(e) => setNotifications(prev => ({ ...prev, portfolioUpdates: e.target.checked }))}
                />
                <div className="w-11 h-6 bg-indigo-600 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-indigo-900 font-medium">Financial Reports</h3>
                <p className="text-indigo-600 text-sm">Monthly portfolio performance reports</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={notifications.financialReports}
                  onChange={(e) => setNotifications(prev => ({ ...prev, financialReports: e.target.checked }))}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-indigo-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>
          </div>
        </Card>
      </section>

      {/* Privacy & Security */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-indigo-900 mb-4">Privacy & Security</h2>
        <Card className="p-6 bg-white border-indigo-100">
          <div className="space-y-6">
            <div>
              <h3 className="text-indigo-900 font-medium mb-2">Change Password</h3>
              <div className="space-y-4">
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Current password"
                />
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="New password"
                />
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Confirm new password"
                />
                <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  Update Password
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-indigo-900 font-medium mb-2">Two-Factor Authentication</h3>
              <p className="text-indigo-600 text-sm mb-4">Secure your account with 2FA</p>
              <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Enable 2FA
              </button>
            </div>
          </div>
        </Card>
      </section>

      {/* Danger Zone */}
      <section>
        <h2 className="text-xl font-semibold text-red-600 mb-4">Danger Zone</h2>
        <Card className="p-6 bg-white border-red-100">
          <div>
            <h3 className="text-red-600 font-medium">Deactivate Account</h3>
            <p className="text-red-600 text-sm mt-1">
              Temporarily disable your account and hide your profile from startups
            </p>
            <button className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              Deactivate Account
            </button>
          </div>
        </Card>
      </section>
    </div>
  );
}