'use client';

import { useState } from 'react';

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: 'Govind Divvela',
    email: 'govindramdivvela@gmail.com',
    role: 'Investor',
    investmentPreference: 'Sustainable Tech',
    bio: 'Passionate about investing in sustainable and impactful startups.',
    investmentCapacity: '$50,000 - $100,000',
    portfolioSize: 5,
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    // Here you would typically save to your backend
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="bg-gradient-to-br from-white to-teal-50/30 rounded-xl shadow-lg p-8 border border-teal-100">
        <div className="flex justify-between items-start mb-8">
          <h1 className="text-2xl font-bold text-teal-900">My Profile</h1>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>

        <div className="space-y-6">
          {/* Profile Picture */}
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            {isEditing && (
              <button className="text-teal-600 hover:text-teal-800">
                Change Photo
              </button>
            )}
          </div>

          {/* Profile Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-teal-700">Name</label>
              {isEditing ? (
                <input
                  type="text"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  className="w-full px-3 py-2 border border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              ) : (
                <p className="text-teal-900">{user.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-teal-700">Email</label>
              {isEditing ? (
                <input
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  className="w-full px-3 py-2 border border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              ) : (
                <p className="text-teal-900">{user.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-teal-700">Role</label>
              {isEditing ? (
                <select
                  value={user.role}
                  onChange={(e) => setUser({ ...user, role: e.target.value })}
                  className="w-full px-3 py-2 border border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                >
                  <option>Investor</option>
                  <option>Founder</option>
                  <option>Advisor</option>
                </select>
              ) : (
                <p className="text-teal-900">{user.role}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-teal-700">Investment Preference</label>
              {isEditing ? (
                <input
                  type="text"
                  value={user.investmentPreference}
                  onChange={(e) => setUser({ ...user, investmentPreference: e.target.value })}
                  className="w-full px-3 py-2 border border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              ) : (
                <p className="text-teal-900">{user.investmentPreference}</p>
              )}
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="block text-sm font-medium text-teal-700">Bio</label>
              {isEditing ? (
                <textarea
                  value={user.bio}
                  onChange={(e) => setUser({ ...user, bio: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 border border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              ) : (
                <p className="text-teal-900">{user.bio}</p>
              )}
            </div>
          </div>

          {/* Investment Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-teal-100">
            <div className="bg-white p-4 rounded-lg border border-teal-100">
              <h3 className="text-sm font-medium text-teal-700 mb-2">Investment Capacity</h3>
              {isEditing ? (
                <input
                  type="text"
                  value={user.investmentCapacity}
                  onChange={(e) => setUser({ ...user, investmentCapacity: e.target.value })}
                  className="w-full px-3 py-2 border border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              ) : (
                <p className="text-lg font-semibold text-teal-900">{user.investmentCapacity}</p>
              )}
            </div>

            <div className="bg-white p-4 rounded-lg border border-teal-100">
              <h3 className="text-sm font-medium text-teal-700 mb-2">Portfolio Companies</h3>
              <p className="text-lg font-semibold text-teal-900">{user.portfolioSize} companies</p>
            </div>
          </div>

          {/* Save Button */}
          {isEditing && (
            <div className="flex justify-end pt-6">
              <button
                onClick={handleSave}
                className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}