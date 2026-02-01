'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ForgotPasswordPage({ params }: { params: { type: 'startup' | 'investor' } }) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // TODO: Add actual password reset logic
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const theme = params.type === 'startup' ? 'emerald' : 'teal';
  const Icon = params.type === 'startup' ? (
    <svg className={`w-12 h-12 text-${theme}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
    </svg>
  ) : (
    <svg className={`w-12 h-12 text-${theme}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  );

  return (
    <div className={`min-h-screen bg-gradient-to-br from-${theme}-50 via-white to-${theme}-50/50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-md mx-auto w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            {Icon}
          </div>
          <h2 className={`text-3xl font-bold text-${theme}-900`}>
            Reset Your Password
          </h2>
          <p className={`text-${theme}-600 mt-2`}>
            {isSubmitted ? 'Check your email for reset instructions' : 'Enter your email to receive password reset instructions'}
          </p>
        </div>

        <div className={`bg-white p-8 rounded-2xl shadow-xl border border-${theme}-100`}>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className={`block text-sm font-medium text-${theme}-900`}>
                  Email Address
                </label>
                <div className="mt-1 relative rounded-xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className={`h-5 w-5 text-${theme}-400`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`block w-full pl-10 px-4 py-3 bg-${theme}-50 border border-${theme}-200 rounded-xl focus:ring-2 focus:ring-${theme}-500 focus:border-${theme}-500 transition-colors`}
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-${theme}-600 hover:bg-${theme}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${theme}-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed group`}
              >
                {isLoading ? (
                  <svg className={`animate-spin -ml-1 mr-3 h-5 w-5 text-white group-hover:text-${theme}-100`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : null}
                Send Reset Instructions
              </button>
            </form>
          ) : (
            <div className="text-center">
              <svg className={`mx-auto h-12 w-12 text-${theme}-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <p className="mt-4 text-sm text-gray-500">
                If an account exists with that email, we'll send you instructions to reset your password.
              </p>
            </div>
          )}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Remember your password?{' '}
          <Link
            href={`/login/${params.type}`}
            className={`font-medium text-${theme}-600 hover:text-${theme}-500 transition-colors`}
          >
            Back to login
          </Link>
        </p>
      </div>
    </div>
  );
}