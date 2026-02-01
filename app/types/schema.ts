export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  startups: Startup[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Startup {
  id: string;
  name: string;
  description: string;
  industry: string;
  fundingStage: FundingStage;
  fundingAmount: number;
  equity: number;
  pitch: string;
  location: string;
  website?: string;
  logo?: string;
  teamSize: number;
  founded: Date;
  metrics: Metrics;
  documents: Document[];
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum FundingStage {
  IDEA = 'IDEA',
  PRE_SEED = 'PRE_SEED',
  SEED = 'SEED',
  SERIES_A = 'SERIES_A',
  SERIES_B = 'SERIES_B',
  SERIES_C = 'SERIES_C',
  LATER_STAGE = 'LATER_STAGE'
}

export interface Metrics {
  id: string;
  startupId: string;
  revenue: number;
  customers: number;
  growth: number;
  burn: number;
  runway: number;
  updatedAt: Date;
}

export interface Document {
  id: string;
  startupId: string;
  name: string;
  type: DocumentType;
  url: string;
  uploadedAt: Date;
}

export enum DocumentType {
  PITCH_DECK = 'PITCH_DECK',
  FINANCIAL_STATEMENT = 'FINANCIAL_STATEMENT',
  BUSINESS_PLAN = 'BUSINESS_PLAN',
  LEGAL_DOCUMENT = 'LEGAL_DOCUMENT',
  OTHER = 'OTHER'
}