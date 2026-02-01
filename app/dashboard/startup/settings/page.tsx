'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';

export default function StartupSettings() {
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    investmentUpdates: true,
    monthlyReports: false,
  });
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-indigo-900 mb-6">Settings</h1>

      {/* Profile Settings */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-indigo-900 mb-4">Startup Profile</h2>
        <Card className="p-6 bg-white border-indigo-100">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-indigo-700 mb-2">
                Startup Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter startup name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-indigo-700 mb-2">
                Description
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter startup description"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-indigo-700 mb-2">
                  Industry
                </label>
                <select className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                  <option>Select industry</option>
                  <option>Technology</option>
                  <option>Healthcare</option>
                  <option>Finance</option>
                  <option>Education</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-indigo-700 mb-2">
                  Company Stage
                </label>
                <select className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                  <option>Select stage</option>
                  <option>Idea</option>
                  <option>Pre-seed</option>
                  <option>Seed</option>
                  <option>Series A</option>
                  <option>Series B</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-indigo-700 mb-2">
                Website
              </label>
              <input
                type="url"
                className="w-full px-4 py-2 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="https://"
              />
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
                <h3 className="text-indigo-900 font-medium">Email Notifications</h3>
                <p className="text-indigo-600 text-sm">Receive updates about investor interest</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={notifications.emailNotifications}
                  onChange={(e) => setNotifications(prev => ({ ...prev, emailNotifications: e.target.checked }))}
                />
                <div className="w-11 h-6 bg-indigo-600 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-indigo-900 font-medium">Investment Updates</h3>
                <p className="text-indigo-600 text-sm">Get notified about new investments</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={notifications.investmentUpdates}
                  onChange={(e) => setNotifications(prev => ({ ...prev, investmentUpdates: e.target.checked }))}
                />
                <div className="w-11 h-6 bg-indigo-600 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-indigo-900 font-medium">Monthly Reports</h3>
                <p className="text-indigo-600 text-sm">Receive monthly performance reports</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={notifications.monthlyReports}
                  onChange={(e) => setNotifications(prev => ({ ...prev, monthlyReports: e.target.checked }))}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-indigo-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>
          </div>
        </Card>
      </section>

      {/* Danger Zone */}
      <section>
        <h2 className="text-xl font-semibold text-red-600 mb-4">Danger Zone</h2>
        <Card className="p-6 bg-white border-red-100">
          <div className="space-y-6">
            <div>
              <h3 className="text-red-600 font-medium">Delete Account</h3>
              <p className="text-red-600 text-sm mt-1">
                Once you delete your account, there is no going back. Please be certain.
              </p>
              <button className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                Delete Account
              </button>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}