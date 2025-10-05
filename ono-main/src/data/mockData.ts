import { Business, VerificationAttempt, DashboardStats } from '../types';

export const mockBusinesses: Business[] = [
  {
    id: '1',
    name: 'TechCorp Solutions',
    email: 'contact@techcorp.com',
    apiKey: 'tc_live_9k2m3n4p5q6r7s8t',
    status: 'active',
    plan: 'enterprise',
    createdAt: '2024-01-15',
    totalVerifications: 45230,
    successRate: 94.5,
    lastActivity: '2025-10-05T10:30:00',
    industry: 'Technology',
    contact: 'John Smith'
  },
  {
    id: '2',
    name: 'DeliveryHub Inc',
    email: 'api@deliveryhub.com',
    apiKey: 'dh_live_1a2b3c4d5e6f7g8h',
    status: 'active',
    plan: 'professional',
    createdAt: '2024-03-22',
    totalVerifications: 28450,
    successRate: 91.2,
    lastActivity: '2025-10-05T09:15:00',
    industry: 'Logistics',
    contact: 'Sarah Johnson'
  },
  {
    id: '3',
    name: 'FinanceFirst Bank',
    email: 'dev@financefirst.com',
    apiKey: 'ff_live_8h7g6f5e4d3c2b1a',
    status: 'active',
    plan: 'enterprise',
    createdAt: '2023-11-08',
    totalVerifications: 67890,
    successRate: 96.8,
    lastActivity: '2025-10-05T11:45:00',
    industry: 'Finance',
    contact: 'Michael Chen'
  },
  {
    id: '4',
    name: 'RetailMax',
    email: 'tech@retailmax.com',
    apiKey: 'rm_live_5t6y7u8i9o0p1q2w',
    status: 'inactive',
    plan: 'starter',
    createdAt: '2024-06-12',
    totalVerifications: 5420,
    successRate: 87.3,
    lastActivity: '2025-09-28T14:20:00',
    industry: 'Retail',
    contact: 'Emily Davis'
  },
  {
    id: '5',
    name: 'HealthCare Plus',
    email: 'support@healthcareplus.com',
    apiKey: 'hc_live_3e4r5t6y7u8i9o0p',
    status: 'active',
    plan: 'professional',
    createdAt: '2024-02-18',
    totalVerifications: 15670,
    successRate: 93.1,
    lastActivity: '2025-10-05T08:30:00',
    industry: 'Healthcare',
    contact: 'Dr. Robert Wilson'
  },
  {
    id: '6',
    name: 'QuickShip Logistics',
    email: 'api@quickship.com',
    apiKey: 'qs_live_7u8i9o0p1q2w3e4r',
    status: 'suspended',
    plan: 'professional',
    createdAt: '2024-04-05',
    totalVerifications: 12340,
    successRate: 82.5,
    lastActivity: '2025-09-15T16:45:00',
    industry: 'Logistics',
    contact: 'Amanda Brown'
  }
];

export const mockVerifications: VerificationAttempt[] = [
  {
    id: 'v1',
    businessId: '1',
    businessName: 'TechCorp Solutions',
    address: '123 Silicon Valley Blvd, San Francisco, CA 94105',
    status: 'verified',
    method: 'api',
    timestamp: '2025-10-05T11:45:23',
    confidence: 98.5,
    location: { lat: 37.7749, lng: -122.4194 },
    metadata: { ip: '192.168.1.1', device: 'Server', duration: 234 }
  },
  {
    id: 'v2',
    businessId: '2',
    businessName: 'DeliveryHub Inc',
    address: '456 Commerce St, New York, NY 10013',
    status: 'verified',
    method: 'sdk',
    timestamp: '2025-10-05T11:30:15',
    confidence: 95.2,
    location: { lat: 40.7128, lng: -74.0060 },
    metadata: { ip: '10.0.0.5', device: 'Mobile', duration: 189 }
  },
  {
    id: 'v3',
    businessId: '3',
    businessName: 'FinanceFirst Bank',
    address: '789 Wall Street, New York, NY 10005',
    status: 'verified',
    method: 'api',
    timestamp: '2025-10-05T11:15:42',
    confidence: 99.1,
    location: { lat: 40.7074, lng: -74.0113 },
    metadata: { ip: '172.16.0.1', device: 'Server', duration: 156 }
  },
  {
    id: 'v4',
    businessId: '2',
    businessName: 'DeliveryHub Inc',
    address: '321 Oak Ave, Chicago, IL 60601',
    status: 'failed',
    method: 'sdk',
    timestamp: '2025-10-05T10:58:31',
    confidence: 45.3,
    location: { lat: 41.8781, lng: -87.6298 },
    metadata: { ip: '10.0.0.8', device: 'Mobile', duration: 412 }
  },
  {
    id: 'v5',
    businessId: '5',
    businessName: 'HealthCare Plus',
    address: '555 Medical Center Dr, Boston, MA 02115',
    status: 'verified',
    method: 'api',
    timestamp: '2025-10-05T10:42:18',
    confidence: 97.8,
    location: { lat: 42.3601, lng: -71.0589 },
    metadata: { ip: '192.168.50.10', device: 'Server', duration: 201 }
  },
  {
    id: 'v6',
    businessId: '1',
    businessName: 'TechCorp Solutions',
    address: '888 Innovation Way, Austin, TX 78701',
    status: 'pending',
    method: 'sdk',
    timestamp: '2025-10-05T10:25:09',
    confidence: 0,
    location: { lat: 30.2672, lng: -97.7431 },
    metadata: { ip: '10.1.1.5', device: 'Mobile', duration: 0 }
  },
  {
    id: 'v7',
    businessId: '3',
    businessName: 'FinanceFirst Bank',
    address: '999 Bank Plaza, Seattle, WA 98101',
    status: 'partial',
    method: 'api',
    timestamp: '2025-10-05T10:10:55',
    confidence: 72.4,
    location: { lat: 47.6062, lng: -122.3321 },
    metadata: { ip: '172.16.1.20', device: 'Server', duration: 387 }
  },
  {
    id: 'v8',
    businessId: '2',
    businessName: 'DeliveryHub Inc',
    address: '147 Market St, Miami, FL 33130',
    status: 'verified',
    method: 'sdk',
    timestamp: '2025-10-05T09:55:33',
    confidence: 94.7,
    location: { lat: 25.7617, lng: -80.1918 },
    metadata: { ip: '10.0.0.12', device: 'Mobile', duration: 178 }
  }
];

export const mockDashboardStats: DashboardStats = {
  totalBusinesses: 156,
  activeBusinesses: 142,
  totalVerifications: 1245678,
  successRate: 93.7,
  apiCalls: 845230,
  sdkCalls: 400448,
  avgResponseTime: 245
};
