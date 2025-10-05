// API Usage Page Component
const ApiUsagePage = {
    template: `
        <div>
            <div class="page-header">
                <h1>API Usage</h1>
                <p>Monitor API performance, usage patterns, and rate limits</p>
            </div>

            <!-- Stats Cards -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <p style="font-size: 0.875rem; font-weight: 500; color: #6b7280;">Total API Calls</p>
                            <p style="font-size: 1.875rem; font-weight: bold; color: #111827; margin-top: 0.5rem;">2.4M</p>
                            <div style="display: flex; align-items: center; margin-top: 0.75rem;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #10b981;"><polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/></svg>
                                <span style="font-size: 0.875rem; font-weight: 500; color: #10b981; margin-left: 0.25rem;">+18.2%</span>
                                <span style="font-size: 0.875rem; color: #6b7280; margin-left: 0.25rem;">vs last month</span>
                            </div>
                        </div>
                        <div style="background: #3b82f6; padding: 0.75rem; border-radius: 8px;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: white;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/></svg>
                        </div>
                    </div>
                </div>
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <p style="font-size: 0.875rem; font-weight: 500; color: #6b7280;">Success Rate</p>
                            <p style="font-size: 1.875rem; font-weight: bold; color: #111827; margin-top: 0.5rem;">99.2%</p>
                            <div style="display: flex; align-items: center; margin-top: 0.75rem;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #10b981;"><polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/></svg>
                                <span style="font-size: 0.875rem; font-weight: 500; color: #10b981; margin-left: 0.25rem;">+0.8%</span>
                                <span style="font-size: 0.875rem; color: #6b7280; margin-left: 0.25rem;">vs last month</span>
                            </div>
                        </div>
                        <div style="background: #10b981; padding: 0.75rem; border-radius: 8px;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: white;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg>
                        </div>
                    </div>
                </div>
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <p style="font-size: 0.875rem; font-weight: 500; color: #6b7280;">Avg Response Time</p>
                            <p style="font-size: 1.875rem; font-weight: bold; color: #111827; margin-top: 0.5rem;">245ms</p>
                            <div style="display: flex; align-items: center; margin-top: 0.75rem;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #f59e0b;"><polyline points="22,17 13.5,8.5 8.5,13.5 2,7"/><polyline points="16,17 22,17 22,11"/></svg>
                                <span style="font-size: 0.875rem; font-weight: 500; color: #f59e0b; margin-left: 0.25rem;">-12.3%</span>
                                <span style="font-size: 0.875rem; color: #6b7280; margin-left: 0.25rem;">vs last month</span>
                            </div>
                        </div>
                        <div style="background: #f59e0b; padding: 0.75rem; border-radius: 8px;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: white;"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                        </div>
                    </div>
                </div>
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <p style="font-size: 0.875rem; font-weight: 500; color: #6b7280;">Rate Limit Usage</p>
                            <p style="font-size: 1.875rem; font-weight: bold; color: #111827; margin-top: 0.5rem;">67%</p>
                            <div style="display: flex; align-items: center; margin-top: 0.75rem;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #3b82f6;"><polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/></svg>
                                <span style="font-size: 0.875rem; font-weight: 500; color: #3b82f6; margin-left: 0.25rem;">+5.2%</span>
                                <span style="font-size: 0.875rem; color: #6b7280; margin-left: 0.25rem;">vs last month</span>
                            </div>
                        </div>
                        <div style="background: #3b82f6; padding: 0.75rem; border-radius: 8px;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: white;"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Endpoint Performance Table -->
            <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; margin-bottom: 1.5rem;">
                <div style="padding: 1.5rem; border-bottom: 1px solid #e5e7eb;">
                    <h3 style="font-size: 1.125rem; font-weight: 600; color: #111827;">Endpoint Performance</h3>
                </div>
                <div style="overflow-x: auto;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead>
                            <tr style="background: #f9fafb; border-bottom: 1px solid #e5e7eb;">
                                <th style="padding: 1rem 1.5rem; text-align: left; font-size: 0.875rem; font-weight: 500; color: #374151;">Endpoint</th>
                                <th style="padding: 1rem 1.5rem; text-align: left; font-size: 0.875rem; font-weight: 500; color: #374151;">Method</th>
                                <th style="padding: 1rem 1.5rem; text-align: left; font-size: 0.875rem; font-weight: 500; color: #374151;">Calls</th>
                                <th style="padding: 1rem 1.5rem; text-align: left; font-size: 0.875rem; font-weight: 500; color: #374151;">Avg Response Time</th>
                                <th style="padding: 1rem 1.5rem; text-align: left; font-size: 0.875rem; font-weight: 500; color: #374151;">Success Rate</th>
                                <th style="padding: 1rem 1.5rem; text-align: left; font-size: 0.875rem; font-weight: 500; color: #374151;">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="endpoint in endpointData" :key="endpoint.name" 
                                style="transition: background-color 0.15s;" 
                                @mouseover="$event.target.style.backgroundColor = '#f9fafb'" 
                                @mouseout="$event.target.style.backgroundColor = 'transparent'">
                                <td style="padding: 1rem 1.5rem;">
                                    <p style="font-size: 0.875rem; font-weight: 500; color: #111827;">{{ endpoint.name }}</p>
                                </td>
                                <td style="padding: 1rem 1.5rem;">
                                    <span :style="'padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 500; background: ' + (endpoint.method === 'POST' ? '#dbeafe' : '#dcfce7') + '; color: ' + (endpoint.method === 'POST' ? '#1e40af' : '#166534') + ';'">
                                        {{ endpoint.method }}
                                    </span>
                                </td>
                                <td style="padding: 1rem 1.5rem;">
                                    <p style="font-size: 0.875rem; color: #111827;">{{ utils.formatNumber(endpoint.calls) }}</p>
                                </td>
                                <td style="padding: 1rem 1.5rem;">
                                    <p style="font-size: 0.875rem; color: #111827;">{{ endpoint.responseTime }}</p>
                                </td>
                                <td style="padding: 1rem 1.5rem;">
                                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                                        <div style="width: 3rem; height: 0.5rem; background: #e5e7eb; border-radius: 9999px; overflow: hidden;">
                                            <div :style="'width: ' + endpoint.successRate + '%; height: 100%; background: ' + (endpoint.successRate > 95 ? '#10b981' : endpoint.successRate > 90 ? '#f59e0b' : '#ef4444') + ';'"></div>
                                        </div>
                                        <span style="font-size: 0.875rem; color: #111827;">{{ endpoint.successRate }}%</span>
                                    </div>
                                </td>
                                <td style="padding: 1rem 1.5rem;">
                                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                                        <div :style="'width: 0.5rem; height: 0.5rem; background: ' + (endpoint.status === 'healthy' ? '#10b981' : endpoint.status === 'warning' ? '#f59e0b' : '#ef4444') + '; border-radius: 50%;'"></div>
                                        <span style="font-size: 0.875rem; color: #111827; text-transform: capitalize;">{{ endpoint.status }}</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Recent API Calls and Response Status Distribution -->
            <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
                <!-- Recent API Calls -->
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem;">
                    <h3 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 1.5rem;">Recent API Calls</h3>
                    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                        <div v-for="call in recentCalls" :key="call.id" style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: #f9fafb; border-radius: 8px;">
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <div :style="'width: 2rem; height: 2rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: ' + (call.status === 200 ? '#dcfce7' : call.status >= 400 ? '#fef2f2' : '#fef3c7') + ';'">
                                    <svg v-if="call.status === 200" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #166534;"><polyline points="20,6 9,17 4,12"/></svg>
                                    <svg v-else-if="call.status >= 400" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #dc2626;"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                                    <svg v-else width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #92400e;"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                                </div>
                                <div>
                                    <p style="font-size: 0.875rem; font-weight: 500; color: #111827;">{{ call.endpoint }}</p>
                                    <p style="font-size: 0.75rem; color: #6b7280;">{{ call.method }} • {{ call.responseTime }}</p>
                                </div>
                            </div>
                            <div style="text-align: right;">
                                <p style="font-size: 0.875rem; font-weight: 500; color: #111827;">{{ call.status }}</p>
                                <p style="font-size: 0.75rem; color: #6b7280;">{{ utils.formatTime(call.timestamp) }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Response Status Distribution -->
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem;">
                    <h3 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 1.5rem;">Response Status Distribution</h3>
                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                        <div v-for="status in statusDistribution" :key="status.code" style="display: flex; justify-content: space-between; align-items: center;">
                            <div style="display: flex; align-items: center; gap: 0.75rem;">
                                <div :style="'width: 0.75rem; height: 0.75rem; background: ' + status.color + '; border-radius: 50%;'"></div>
                                <span style="font-size: 0.875rem; color: #111827;">{{ status.code }}</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                <div style="width: 3rem; height: 0.5rem; background: #e5e7eb; border-radius: 9999px; overflow: hidden;">
                                    <div :style="'width: ' + status.percentage + '%; height: 100%; background: ' + status.color + ';'"></div>
                                </div>
                                <span style="font-size: 0.875rem; color: #6b7280;">{{ status.percentage }}%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- API Rate Limits -->
            <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem;">
                <h3 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 1.5rem;">API Rate Limits</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                    <div v-for="limit in rateLimits" :key="limit.plan" style="padding: 1.5rem; background: #f9fafb; border-radius: 8px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                            <h4 style="font-size: 1rem; font-weight: 600; color: #111827;">{{ limit.plan }}</h4>
                            <span :style="'padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 500; background: ' + limit.color + '; color: white;'">
                                {{ limit.usage }}% used
                            </span>
                        </div>
                        <div style="margin-bottom: 0.5rem;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
                                <span style="font-size: 0.875rem; color: #6b7280;">Requests per hour</span>
                                <span style="font-size: 0.875rem; font-weight: 500; color: #111827;">{{ utils.formatNumber(limit.current) }} / {{ utils.formatNumber(limit.limit) }}</span>
                            </div>
                            <div style="width: 100%; height: 0.5rem; background: #e5e7eb; border-radius: 9999px; overflow: hidden;">
                                <div :style="'width: ' + limit.usage + '%; height: 100%; background: ' + limit.color + ';'"></div>
                            </div>
                        </div>
                        <p style="font-size: 0.75rem; color: #6b7280;">Resets in {{ limit.resetTime }}</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            endpointData: [
                { name: '/api/verify', method: 'POST', calls: 1250000, responseTime: '245ms', successRate: 99.2, status: 'healthy' },
                { name: '/api/batch-verify', method: 'POST', calls: 450000, responseTime: '1.2s', successRate: 98.8, status: 'healthy' },
                { name: '/api/status', method: 'GET', calls: 320000, responseTime: '89ms', successRate: 99.9, status: 'healthy' },
                { name: '/api/health', method: 'GET', calls: 180000, responseTime: '45ms', successRate: 100, status: 'healthy' },
                { name: '/api/webhook', method: 'POST', calls: 89000, responseTime: '156ms', successRate: 97.5, status: 'warning' }
            ],
            recentCalls: [
                { id: 1, endpoint: '/api/verify', method: 'POST', status: 200, responseTime: '245ms', timestamp: new Date(Date.now() - 2 * 60 * 1000) },
                { id: 2, endpoint: '/api/batch-verify', method: 'POST', status: 200, responseTime: '1.1s', timestamp: new Date(Date.now() - 5 * 60 * 1000) },
                { id: 3, endpoint: '/api/verify', method: 'POST', status: 400, responseTime: '89ms', timestamp: new Date(Date.now() - 8 * 60 * 1000) },
                { id: 4, endpoint: '/api/status', method: 'GET', status: 200, responseTime: '45ms', timestamp: new Date(Date.now() - 12 * 60 * 1000) },
                { id: 5, endpoint: '/api/webhook', method: 'POST', status: 500, responseTime: '2.3s', timestamp: new Date(Date.now() - 15 * 60 * 1000) }
            ],
            statusDistribution: [
                { code: '200 OK', percentage: 99.2, color: '#10b981' },
                { code: '400 Bad Request', percentage: 0.5, color: '#f59e0b' },
                { code: '429 Rate Limited', percentage: 0.2, color: '#ef4444' },
                { code: '500 Server Error', percentage: 0.1, color: '#ef4444' }
            ],
            rateLimits: [
                { plan: 'Starter', current: 850, limit: 1000, usage: 85, color: '#3b82f6', resetTime: '23 minutes' },
                { plan: 'Professional', current: 4500, limit: 10000, usage: 45, color: '#10b981', resetTime: '23 minutes' },
                { plan: 'Enterprise', current: 45000, limit: 100000, usage: 45, color: '#E8C547', resetTime: '23 minutes' }
            ]
        }
    }
};

// Export for use in main dashboard
window.ApiUsagePage = ApiUsagePage;
