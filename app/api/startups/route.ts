import { NextResponse } from 'next/server';
import type { Startup } from '@/app/types/schema';
import { FundingStage } from '@/app/types/schema';

// GET /api/startups - Get mock startups for now
export async function GET() {
  const mockStartups: Startup[] = [
    {
      id: '1',
      name: 'EcoCharge',
      description: 'Revolutionary wireless charging technology using renewable energy',
      industry: 'Clean Technology',
      fundingStage: FundingStage.SEED,
      fundingAmount: 750000,
      equity: 12,
      pitch: 'Making wireless charging sustainable and efficient',
      location: 'San Francisco, CA',
      website: 'https://ecocharge.example.com',
      logo: '/logos/ecocharge.png',
      teamSize: 8,
      founded: new Date('2023-06-01'),
      metrics: {
        id: '1',
        startupId: '1',
        revenue: 120000,
        customers: 1200,
        growth: 40,
        burn: 35000,
        runway: 15,
        updatedAt: new Date()
      },
      documents: [],
      userId: 'user1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '2',
      name: 'AgriTech Solutions',
      description: 'AI-powered farming optimization platform',
      industry: 'Agriculture',
      fundingStage: FundingStage.SERIES_A,
      fundingAmount: 2500000,
      equity: 15,
      pitch: 'Revolutionizing agriculture with AI and IoT',
      location: 'Austin, TX',
      website: 'https://agritech.example.com',
      logo: '/logos/agritech.png',
      teamSize: 25,
      founded: new Date('2022-03-15'),
      metrics: {
        id: '2',
        startupId: '2',
        revenue: 800000,
        customers: 150,
        growth: 85,
        burn: 120000,
        runway: 18,
        updatedAt: new Date()
      },
      documents: [],
      userId: 'user1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '3',
      name: 'BioInnovate',
      description: 'Sustainable packaging solutions using biodegradable materials',
      industry: 'Biotechnology',
      fundingStage: FundingStage.PRE_SEED,
      fundingAmount: 300000,
      equity: 8,
      pitch: 'Creating a world without plastic waste',
      location: 'Boston, MA',
      website: 'https://bioinnovate.example.com',
      logo: '/logos/bioinnovate.png',
      teamSize: 6,
      founded: new Date('2024-01-15'),
      metrics: {
        id: '3',
        startupId: '3',
        revenue: 50000,
        customers: 15,
        growth: 120,
        burn: 25000,
        runway: 12,
        updatedAt: new Date()
      },
      documents: [],
      userId: 'user1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '4',
      name: 'GreenBuild',
      description: 'Sustainable construction materials and methods',
      industry: 'Construction',
      fundingStage: FundingStage.SEED,
      fundingAmount: 1200000,
      equity: 10,
      pitch: 'Building a sustainable future with eco-friendly construction',
      location: 'Portland, OR',
      website: 'https://greenbuild.example.com',
      logo: '/logos/greenbuild.png',
      teamSize: 12,
      founded: new Date('2023-08-01'),
      metrics: {
        id: '4',
        startupId: '4',
        revenue: 250000,
        customers: 30,
        growth: 60,
        burn: 45000,
        runway: 20,
        updatedAt: new Date()
      },
      documents: [],
      userId: 'user1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '5',
      name: 'WaterWise',
      description: 'Smart water management and conservation technology',
      industry: 'Water Technology',
      fundingStage: FundingStage.SERIES_A,
      fundingAmount: 3000000,
      equity: 18,
      pitch: 'Revolutionizing water conservation with IoT',
      location: 'San Diego, CA',
      website: 'https://waterwise.example.com',
      logo: '/logos/waterwise.png',
      teamSize: 20,
      founded: new Date('2022-11-01'),
      metrics: {
        id: '5',
        startupId: '5',
        revenue: 1200000,
        customers: 45,
        growth: 90,
        burn: 150000,
        runway: 16,
        updatedAt: new Date()
      },
      documents: [],
      userId: 'user1',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  return NextResponse.json(mockStartups);
}

// POST /api/startups - Temporarily just return the posted data
export async function POST(request: Request) {
  try {
    const data = await request.json();
    return NextResponse.json({ ...data, id: Date.now().toString() }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}