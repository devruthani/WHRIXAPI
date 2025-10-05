export interface Business {
  id: string;
  name: string;
  email: string;
  apiKey: string;
  status: 'active' | 'inactive' | 'suspended';
  plan: 'starter' | 'professional' | 'enterprise';
  createdAt: string;
  totalVerifications: number;
  successRate: number;
  lastActivity: string;
  industry: string;
  contact: string;
}

export interface VerificationAttempt {
  id: string;
  businessId: string;
  businessName: string;
  address: string;
  status: 'verified' | 'failed' | 'pending' | 'partial';
  method: 'api' | 'sdk';
  timestamp: string;
  confidence: number;
  location: {
    lat: number;
    lng: number;
  };
  metadata: {
    ip?: string;
    device?: string;
    duration?: number;
  };
}

export interface ApiUsage {
  businessId: string;
  date: string;
  requests: number;
  successful: number;
  failed: number;
  avgResponseTime: number;
}

export interface DashboardStats {
  totalBusinesses: number;
  activeBusinesses: number;
  totalVerifications: number;
  successRate: number;
  apiCalls: number;
  sdkCalls: number;
  avgResponseTime: number;
}
