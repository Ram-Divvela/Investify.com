'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface ProfileData {
  name: string;
  bio: string;
  location: string;
  website: string;
  company: string;
  role: string;
  interests: string[];
  avatarUrl: string;
}

export default function Profile() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<ProfileData>({
    name: '',
    bio: '',
    location: '',
    website: '',
    company: '',
    role: '',
    interests: [],
    avatarUrl: '',
  });

  // Redirect if not logged in
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {!isEditing ? (
        // Profile View
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-700 h-32"></div>
          <div className="px-6 py-4 relative">
            <div className="absolute -top-16 left-6">
              <div className="h-32 w-32 rounded-full border-4 border-white overflow-hidden bg-gray-200">
                {profile.avatarUrl ? (
                  <Image
                    src={profile.avatarUrl}
                    alt="Profile"
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-gray-500">
                    <svg className="h-16 w-16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-16">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold">{profile.name || session?.user?.name}</h1>
                  <p className="text-gray-600">{profile.role} at {profile.company}</p>
                  <p className="text-gray-500 mt-1">{profile.location}</p>
                </div>
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
                >
                  Edit Profile
                </button>
              </div>

              {profile.bio && (
                <div className="mt-6">
                  <h2 className="text-lg font-semibold mb-2">About</h2>
                  <p className="text-gray-600">{profile.bio}</p>
                </div>
              )}

              {profile.website && (
                <div className="mt-4">
                  <a
                    href={profile.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline"
                  >
                    {profile.website}
                  </a>
                </div>
              )}

              {profile.interests.length > 0 && (
                <div className="mt-6">
                  <h2 className="text-lg font-semibold mb-2">Interests</h2>
                  <div className="flex flex-wrap gap-2">
                    {profile.interests.map((interest, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        // Profile Edit Form
        <ProfileEditForm
          profile={profile}
          setProfile={setProfile}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
}

interface ProfileEditFormProps {
  profile: ProfileData;
  setProfile: (profile: ProfileData) => void;
  setIsEditing: (isEditing: boolean) => void;
}

function ProfileEditForm({ profile, setProfile, setIsEditing }: ProfileEditFormProps) {
  const [tempProfile, setTempProfile] = useState(profile);
  const [interestInput, setInterestInput] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically save to your backend
    setProfile(tempProfile);
    setIsEditing(false);
  };

  const addInterest = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && interestInput.trim()) {
      e.preventDefault();
      setTempProfile({
        ...tempProfile,
        interests: [...tempProfile.interests, interestInput.trim()],
      });
      setInterestInput('');
    }
  };

  const removeInterest = (indexToRemove: number) => {
    setTempProfile({
      ...tempProfile,
      interests: tempProfile.interests.filter((_, index) => index !== indexToRemove),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-6">Edit Profile</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            value={tempProfile.name}
            onChange={(e) => setTempProfile({ ...tempProfile, name: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bio
          </label>
          <textarea
            value={tempProfile.bio}
            onChange={(e) => setTempProfile({ ...tempProfile, bio: e.target.value })}
            rows={4}
            className="w-full px-3 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              value={tempProfile.location}
              onChange={(e) => setTempProfile({ ...tempProfile, location: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Website
            </label>
            <input
              type="url"
              value={tempProfile.website}
              onChange={(e) => setTempProfile({ ...tempProfile, website: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company
            </label>
            <input
              type="text"
              value={tempProfile.company}
              onChange={(e) => setTempProfile({ ...tempProfile, company: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Role
            </label>
            <input
              type="text"
              value={tempProfile.role}
              onChange={(e) => setTempProfile({ ...tempProfile, role: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Interests (Press Enter to add)
          </label>
          <input
            type="text"
            value={interestInput}
            onChange={(e) => setInterestInput(e.target.value)}
            onKeyDown={addInterest}
            className="w-full px-3 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Add an interest..."
          />
          <div className="mt-2 flex flex-wrap gap-2">
            {tempProfile.interests.map((interest, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center"
              >
                {interest}
                <button
                  type="button"
                  onClick={() => removeInterest(index)}
                  className="ml-2 text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="px-4 py-2 border rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Save Changes
          </button>
        </div>
      </div>
    </form>
  );
}
