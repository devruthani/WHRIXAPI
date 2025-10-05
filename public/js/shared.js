// Shared utilities and components for the WHRIX Admin Dashboard

// Mock data for all pages
const mockData = {
    businesses: [
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
    ],
    
    verifications: [
        {
            id: '1',
            businessName: 'TechCorp Solutions',
            address: '123 Tech Street, San Francisco, CA 94105',
            status: 'verified',
            method: 'API',
            timestamp: '2025-10-05T10:30:00',
            responseTime: '245ms',
            confidence: 98.5
        },
        {
            id: '2',
            businessName: 'DeliveryHub Inc',
            address: '456 Delivery Ave, New York, NY 10001',
            status: 'failed',
            method: 'Webhook',
            timestamp: '2025-10-05T09:15:00',
            responseTime: '1.2s',
            confidence: 23.1
        },
        {
            id: '3',
            businessName: 'FinanceFirst Bank',
            address: '789 Finance Blvd, Chicago, IL 60601',
            status: 'verified',
            method: 'API',
            timestamp: '2025-10-05T11:45:00',
            responseTime: '189ms',
            confidence: 99.2
        },
        {
            id: '4',
            businessName: 'RetailMax',
            address: '321 Retail Road, Los Angeles, CA 90210',
            status: 'pending',
            method: 'API',
            timestamp: '2025-10-05T08:20:00',
            responseTime: '2.1s',
            confidence: 67.8
        },
        {
            id: '5',
            businessName: 'HealthCare Plus',
            address: '654 Health Lane, Boston, MA 02101',
            status: 'verified',
            method: 'Webhook',
            timestamp: '2025-10-05T08:30:00',
            responseTime: '312ms',
            confidence: 95.7
        }
    ],

    apiEndpoints: [
        {
            endpoint: '/api/v1/verify',
            method: 'POST',
            requests: 15420,
            avgResponseTime: '245ms',
            successRate: 98.5,
            lastUsed: '2025-10-05T10:30:00'
        },
        {
            endpoint: '/api/v1/batch-verify',
            method: 'POST',
            requests: 8920,
            avgResponseTime: '1.2s',
            successRate: 94.2,
            lastUsed: '2025-10-05T09:15:00'
        },
        {
            endpoint: '/api/v1/status',
            method: 'GET',
            requests: 23450,
            avgResponseTime: '89ms',
            successRate: 99.8,
            lastUsed: '2025-10-05T11:45:00'
        }
    ],

    recentApiCalls: [
        {
            id: '1',
            endpoint: '/api/v1/verify',
            method: 'POST',
            status: 200,
            responseTime: '245ms',
            timestamp: '2025-10-05T10:30:00',
            business: 'TechCorp Solutions'
        },
        {
            id: '2',
            endpoint: '/api/v1/batch-verify',
            method: 'POST',
            status: 400,
            responseTime: '1.2s',
            timestamp: '2025-10-05T09:15:00',
            business: 'DeliveryHub Inc'
        },
        {
            id: '3',
            endpoint: '/api/v1/status',
            method: 'GET',
            status: 200,
            responseTime: '89ms',
            timestamp: '2025-10-05T11:45:00',
            business: 'FinanceFirst Bank'
        }
    ],

    recentIntegrations: [
        {
            id: '1',
            business: 'TechCorp Solutions',
            platform: 'React',
            version: '2.1.0',
            status: 'active',
            lastUpdate: '2025-10-05T10:30:00'
        },
        {
            id: '2',
            business: 'DeliveryHub Inc',
            platform: 'Vue.js',
            version: '1.8.5',
            status: 'active',
            lastUpdate: '2025-10-05T09:15:00'
        },
        {
            id: '3',
            business: 'FinanceFirst Bank',
            platform: 'Angular',
            version: '3.0.2',
            status: 'active',
            lastUpdate: '2025-10-05T11:45:00'
        }
    ]
};

// Utility functions
const utils = {
    formatNumber(num) {
        return num.toLocaleString();
    },
    
    formatTime(timestamp) {
        const date = new Date(timestamp);
        const now = new Date();
        const diffInMinutes = Math.floor((now - date) / (1000 * 60));
        
        if (diffInMinutes < 1) return 'Just now';
        if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
        if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
        return `${Math.floor(diffInMinutes / 1440)}d ago`;
    },
    
    formatDate(dateString) {
        return new Date(dateString).toLocaleDateString();
    },
    
    formatDateTime(dateString) {
        return new Date(dateString).toLocaleString();
    },
    
    getVerificationStatusColor(status) {
        switch (status) {
            case 'verified': return 'background: #dcfce7; color: #166534; border: 1px solid #bbf7d0;';
            case 'failed': return 'background: #fef2f2; color: #dc2626; border: 1px solid #fecaca;';
            case 'pending': return 'background: #fef3c7; color: #92400e; border: 1px solid #fed7aa;';
            case 'partial': return 'background: #dbeafe; color: #1e40af; border: 1px solid #93c5fd;';
            default: return 'background: #f3f4f6; color: #374151; border: 1px solid #d1d5db;';
        }
    },
    
    getStatusColor(status) {
        switch (status) {
            case 'active': return 'background: #dcfce7; color: #166534; border: 1px solid #bbf7d0;';
            case 'inactive': return 'background: #f3f4f6; color: #374151; border: 1px solid #d1d5db;';
            case 'suspended': return 'background: #fef2f2; color: #dc2626; border: 1px solid #fecaca;';
            default: return 'background: #f3f4f6; color: #374151; border: 1px solid #d1d5db;';
        }
    },
    
    getPlanColor(plan) {
        switch (plan) {
            case 'enterprise': return 'background: #e0e7ff; color: #3730a3; border: 1px solid #c7d2fe;';
            case 'professional': return 'background: #f0fdf4; color: #166534; border: 1px solid #bbf7d0;';
            case 'starter': return 'background: #fef3c7; color: #92400e; border: 1px solid #fed7aa;';
            default: return 'background: #f3f4f6; color: #374151; border: 1px solid #d1d5db;';
        }
    }
};

// Export for use in other files
window.mockData = mockData;
window.utils = utils;
