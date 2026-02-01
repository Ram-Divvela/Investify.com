'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';

interface Slide {
  id: number;
  title: string;
  lastModified: string;
}

export default function PitchDeck() {
  const [slides, setSlides] = useState<Slide[]>([
    { id: 1, title: 'Problem Statement', lastModified: '2h ago' },
    { id: 2, title: 'Solution Overview', lastModified: '2h ago' },
    { id: 3, title: 'Market Size', lastModified: '1d ago' },
    { id: 4, title: 'Business Model', lastModified: '1d ago' },
    { id: 5, title: 'Competition', lastModified: '1d ago' },
    { id: 6, title: 'Traction', lastModified: '3d ago' },
    { id: 7, title: 'Team', lastModified: '3d ago' },
    { id: 8, title: 'Financials', lastModified: '3d ago' },
    { id: 9, title: 'Investment Ask', lastModified: '3d ago' },
  ]);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-indigo-900">Pitch Deck</h1>
        <div className="space-x-4">
          <button className="px-4 py-2 text-indigo-700 hover:bg-indigo-50 rounded-lg transition-colors">
            Preview
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Share Deck
          </button>
        </div>
      </div>

      {/* Deck Overview */}
      <Card className="p-6 bg-white border-indigo-100 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-sm font-medium text-indigo-600 mb-1">Last Updated</h3>
            <p className="text-lg text-indigo-900">2 hours ago</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-indigo-600 mb-1">Total Slides</h3>
            <p className="text-lg text-indigo-900">{slides.length}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-indigo-600 mb-1">Share Status</h3>
            <p className="text-lg text-indigo-900">Private</p>
          </div>
        </div>
      </Card>

      {/* Slides List */}
      <div className="space-y-4">
        {slides.map((slide) => (
          <Card key={slide.id} className="p-4 bg-white border-indigo-100 hover:border-indigo-300 transition-colors">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <span className="text-indigo-400">{slide.id}</span>
                <h3 className="text-indigo-900">{slide.title}</h3>
              </div>
              <div className="flex items-center space-x-6">
                <span className="text-sm text-indigo-600">{slide.lastModified}</span>
                <button className="text-indigo-600 hover:text-indigo-800">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Add Slide Button */}
      <button className="mt-6 w-full py-4 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors flex items-center justify-center">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Add New Slide
      </button>
    </div>
  );
}