import { ReactNode } from 'react';

type UserType = 'startup' | 'investor';

type ThemeConfig = {
  primary: string;
  bg: {
    gradient: string;
    light: string;
    border: string;
  };
  icon: ReactNode;
  title: string;
  description: string;
  loginLink: string;
};

const themeConfigs: Record<UserType, ThemeConfig> = {
  startup: {
    primary: 'indigo',
    bg: {
      gradient: 'from-indigo-50 via-white to-indigo-50/50',
      light: 'bg-indigo-50',
      border: 'border-indigo-200',
    },
    icon: (
      <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
      </svg>
    ),
    title: 'Reset Startup Password',
    description: 'Enter your email to receive password reset instructions',
    loginLink: '/login/startup',
  },
  investor: {
    primary: 'indigo',
    bg: {
      gradient: 'from-indigo-50 via-white to-indigo-50/50',
      light: 'bg-indigo-50',
      border: 'border-indigo-200',
    },
    icon: (
      <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: 'Reset Investor Password',
    description: 'Enter your email to receive password reset instructions',
    loginLink: '/login/investor',
  },
};

export default themeConfigs;