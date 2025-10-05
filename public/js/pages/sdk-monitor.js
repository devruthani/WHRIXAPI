// SDK Monitor Page Component
const SdkMonitorPage = {
    template: `
        <div>
            <div class="page-header">
                <h1>SDK Monitor</h1>
                <p>Monitor SDK usage, performance, and health across all platforms</p>
            </div>

            <!-- Stats Cards -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <p style="font-size: 0.875rem; font-weight: 500; color: #6b7280;">Total Downloads</p>
                            <p style="font-size: 1.875rem; font-weight: bold; color: #111827; margin-top: 0.5rem;">2.4M</p>
                            <div style="display: flex; align-items: center; margin-top: 0.75rem;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #10b981;"><polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/></svg>
                                <span style="font-size: 0.875rem; font-weight: 500; color: #10b981; margin-left: 0.25rem;">+24.3%</span>
                                <span style="font-size: 0.875rem; color: #6b7280; margin-left: 0.25rem;">vs last month</span>
                            </div>
                        </div>
                        <div style="background: #3b82f6; padding: 0.75rem; border-radius: 8px;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: white;"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27,6.96 12,12.01 20.73,6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                        </div>
                    </div>
                </div>
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <p style="font-size: 0.875rem; font-weight: 500; color: #6b7280;">Active Installs</p>
                            <p style="font-size: 1.875rem; font-weight: bold; color: #111827; margin-top: 0.5rem;">1.8M</p>
                            <div style="display: flex; align-items: center; margin-top: 0.75rem;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #10b981;"><polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/></svg>
                                <span style="font-size: 0.875rem; font-weight: 500; color: #10b981; margin-left: 0.25rem;">+18.7%</span>
                                <span style="font-size: 0.875rem; color: #6b7280; margin-left: 0.25rem;">vs last month</span>
                            </div>
                        </div>
                        <div style="background: #10b981; padding: 0.75rem; border-radius: 8px;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: white;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/></svg>
                        </div>
                    </div>
                </div>
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <p style="font-size: 0.875rem; font-weight: 500; color: #6b7280;">API Calls Today</p>
                            <p style="font-size: 1.875rem; font-weight: bold; color: #111827; margin-top: 0.5rem;">456K</p>
                            <div style="display: flex; align-items: center; margin-top: 0.75rem;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #10b981;"><polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/></svg>
                                <span style="font-size: 0.875rem; font-weight: 500; color: #10b981; margin-left: 0.25rem;">+12.5%</span>
                                <span style="font-size: 0.875rem; color: #6b7280; margin-left: 0.25rem;">vs yesterday</span>
                            </div>
                        </div>
                        <div style="background: #E8C547; padding: 0.75rem; border-radius: 8px;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #333;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/></svg>
                        </div>
                    </div>
                </div>
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <p style="font-size: 0.875rem; font-weight: 500; color: #6b7280;">Mobile Usage</p>
                            <p style="font-size: 1.875rem; font-weight: bold; color: #111827; margin-top: 0.5rem;">67%</p>
                            <div style="display: flex; align-items: center; margin-top: 0.75rem;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #10b981;"><polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/></svg>
                                <span style="font-size: 0.875rem; font-weight: 500; color: #10b981; margin-left: 0.25rem;">+5.2%</span>
                                <span style="font-size: 0.875rem; color: #6b7280; margin-left: 0.25rem;">vs last month</span>
                            </div>
                        </div>
                        <div style="background: #06b6d4; padding: 0.75rem; border-radius: 8px;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: white;"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Platform Distribution and SDK Version Distribution -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
                <!-- Platform Distribution -->
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem;">
                    <h3 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 1.5rem;">Platform Distribution</h3>
                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                        <div v-for="platform in platformData" :key="platform.name" style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: #f9fafb; border-radius: 8px;">
                            <div style="display: flex; align-items: center; gap: 0.75rem;">
                                <div :style="'width: 2.5rem; height: 2.5rem; background: ' + platform.gradient + '; border-radius: 8px; display: flex; align-items: center; justify-content: center;'">
                                    <span style="color: white; font-weight: bold; font-size: 0.875rem;">{{ platform.icon }}</span>
                                </div>
                                <div>
                                    <p style="font-size: 0.875rem; font-weight: 500; color: #111827;">{{ platform.name }}</p>
                                    <p style="font-size: 0.75rem; color: #6b7280;">{{ utils.formatNumber(platform.downloads) }} downloads</p>
                                </div>
                            </div>
                            <div style="text-align: right;">
                                <p style="font-size: 1.125rem; font-weight: bold; color: #111827;">{{ platform.percentage }}%</p>
                                <p style="font-size: 0.75rem; color: #6b7280;">{{ platform.businesses }} businesses</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- SDK Version Distribution -->
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem;">
                    <h3 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 1.5rem;">SDK Version Distribution</h3>
                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                        <div v-for="version in versionData" :key="version.number" style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: #f9fafb; border-radius: 8px;">
                            <div>
                                <p style="font-size: 0.875rem; font-weight: 500; color: #111827;">v{{ version.number }}</p>
                                <p style="font-size: 0.75rem; color: #6b7280;">Released {{ version.released }}</p>
                            </div>
                            <div style="text-align: right;">
                                <span :style="'padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 500; ' + version.statusStyle">
                                    {{ version.status }}
                                </span>
                                <p style="font-size: 0.75rem; color: #6b7280; margin-top: 0.25rem;">{{ version.downloads }} downloads</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Recent SDK Activity -->
            <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; margin-bottom: 1.5rem;">
                <div style="padding: 1.5rem; border-bottom: 1px solid #e5e7eb;">
                    <h3 style="font-size: 1.125rem; font-weight: 600; color: #111827;">Recent SDK Activity</h3>
                </div>
                <div style="overflow-x: auto;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead>
                            <tr style="background: #f9fafb; border-bottom: 1px solid #e5e7eb;">
                                <th style="padding: 1rem 1.5rem; text-align: left; font-size: 0.875rem; font-weight: 500; color: #374151;">Platform</th>
                                <th style="padding: 1rem 1.5rem; text-align: left; font-size: 0.875rem; font-weight: 500; color: #374151;">Version</th>
                                <th style="padding: 1rem 1.5rem; text-align: left; font-size: 0.875rem; font-weight: 500; color: #374151;">Event</th>
                                <th style="padding: 1rem 1.5rem; text-align: left; font-size: 0.875rem; font-weight: 500; color: #374151;">Status</th>
                                <th style="padding: 1rem 1.5rem; text-align: left; font-size: 0.875rem; font-weight: 500; color: #374151;">Timestamp</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="activity in recentActivity" :key="activity.id" 
                                style="transition: background-color 0.15s;" 
                                @mouseover="$event.target.style.backgroundColor = '#f9fafb'" 
                                @mouseout="$event.target.style.backgroundColor = 'transparent'">
                                <td style="padding: 1rem 1.5rem;">
                                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                                        <div :style="'width: 2rem; height: 2rem; background: ' + activity.platformColor + '; border-radius: 6px; display: flex; align-items: center; justify-content: center;'">
                                            <span style="color: white; font-weight: bold; font-size: 0.75rem;">{{ activity.platformIcon }}</span>
                                        </div>
                                        <span style="font-size: 0.875rem; font-weight: 500; color: #111827;">{{ activity.platform }}</span>
                                    </div>
                                </td>
                                <td style="padding: 1rem 1.5rem;">
                                    <span style="padding: 0.25rem 0.75rem; background: #f3f4f6; color: #374151; border-radius: 9999px; font-size: 0.75rem; font-weight: 500;">
                                        v{{ activity.version }}
                                    </span>
                                </td>
                                <td style="padding: 1rem 1.5rem;">
                                    <p style="font-size: 0.875rem; color: #111827;">{{ activity.event }}</p>
                                </td>
                                <td style="padding: 1rem 1.5rem;">
                                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                                        <svg v-if="activity.status === 'success'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #10b981;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg>
                                        <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #f59e0b;"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                                        <span style="font-size: 0.875rem; color: #111827; text-transform: capitalize;">{{ activity.status }}</span>
                                    </div>
                                </td>
                                <td style="padding: 1rem 1.5rem;">
                                    <p style="font-size: 0.875rem; color: #6b7280;">{{ utils.formatTime(activity.timestamp) }}</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Feature Usage Analytics and SDK Health Status -->
            <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 1.5rem;">
                <!-- Feature Usage Analytics -->
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem;">
                    <h3 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 1.5rem;">Feature Usage Analytics</h3>
                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                        <div v-for="feature in featureUsage" :key="feature.name" style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: #f9fafb; border-radius: 8px;">
                            <div>
                                <p style="font-size: 0.875rem; font-weight: 500; color: #111827;">{{ feature.name }}</p>
                                <p style="font-size: 0.75rem; color: #6b7280;">{{ utils.formatNumber(feature.usage) }} calls</p>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                <div style="width: 4rem; height: 0.5rem; background: #e5e7eb; border-radius: 9999px; overflow: hidden;">
                                    <div :style="'width: ' + feature.percentage + '%; height: 100%; background: ' + feature.color + ';'"></div>
                                </div>
                                <span style="font-size: 0.875rem; color: #6b7280;">{{ feature.percentage }}%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- SDK Health Status -->
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem;">
                    <h3 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 1.5rem;">SDK Health Status</h3>
                    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                        <div style="text-align: center; padding: 1.5rem; background: #dcfce7; border-radius: 8px; border: 1px solid #bbf7d0;">
                            <div style="width: 3rem; height: 3rem; background: #10b981; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: white;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg>
                            </div>
                            <p style="font-size: 1.125rem; font-weight: bold; color: #166534;">Overall Health</p>
                            <p style="font-size: 0.875rem; color: #166534;">All systems operational</p>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 1rem;">
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <span style="font-size: 0.875rem; color: #6b7280;">Error Rate</span>
                                <span style="font-size: 0.875rem; font-weight: 500; color: #10b981;">0.02%</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <span style="font-size: 0.875rem; color: #6b7280;">Uptime</span>
                                <span style="font-size: 0.875rem; font-weight: 500; color: #10b981;">99.98%</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <span style="font-size: 0.875rem; color: #6b7280;">Deprecation Warnings</span>
                                <span style="font-size: 0.875rem; font-weight: 500; color: #f59e0b;">3</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            platformData: [
                { name: 'JavaScript', icon: 'JS', downloads: 1200000, percentage: 50, businesses: 1247, gradient: 'linear-gradient(135deg, #f7df1e 0%, #f0db4f 100%)' },
                { name: 'Python', icon: 'PY', downloads: 480000, percentage: 20, businesses: 523, gradient: 'linear-gradient(135deg, #3776ab 0%, #4b8bbe 100%)' },
                { name: 'PHP', icon: 'PHP', downloads: 360000, percentage: 15, businesses: 389, gradient: 'linear-gradient(135deg, #777bb4 0%, #8892be 100%)' },
                { name: 'Java', icon: 'J', downloads: 240000, percentage: 10, businesses: 267, gradient: 'linear-gradient(135deg, #ed8b00 0%, #f89820 100%)' },
                { name: 'Others', icon: '...', downloads: 120000, percentage: 5, businesses: 134, gradient: 'linear-gradient(135deg, #6b7280 0%, #9ca3af 100%)' }
            ],
            versionData: [
                { number: '2.1.0', released: '2 weeks ago', status: 'Latest', statusStyle: 'background: #dcfce7; color: #166534; border: 1px solid #bbf7d0;', downloads: 450000 },
                { number: '2.0.5', released: '1 month ago', status: 'Stable', statusStyle: 'background: #dbeafe; color: #1e40af; border: 1px solid #93c5fd;', downloads: 320000 },
                { number: '1.9.8', released: '3 months ago', status: 'Deprecated', statusStyle: 'background: #fef3c7; color: #92400e; border: 1px solid #fed7aa;', downloads: 180000 },
                { number: '1.8.2', released: '6 months ago', status: 'Deprecated', statusStyle: 'background: #fef3c7; color: #92400e; border: 1px solid #fed7aa;', downloads: 95000 }
            ],
            recentActivity: [
                { id: 1, platform: 'JavaScript', platformIcon: 'JS', platformColor: '#f7df1e', version: '2.1.0', event: 'SDK Initialization', status: 'success', timestamp: new Date(Date.now() - 2 * 60 * 1000) },
                { id: 2, platform: 'Python', platformIcon: 'PY', platformColor: '#3776ab', version: '2.0.5', event: 'Address Verification', status: 'success', timestamp: new Date(Date.now() - 5 * 60 * 1000) },
                { id: 3, platform: 'PHP', platformIcon: 'PHP', platformColor: '#777bb4', version: '1.9.8', event: 'Deprecated Method Call', status: 'warning', timestamp: new Date(Date.now() - 8 * 60 * 1000) },
                { id: 4, platform: 'Java', platformIcon: 'J', platformColor: '#ed8b00', version: '2.1.0', event: 'Batch Verification', status: 'success', timestamp: new Date(Date.now() - 12 * 60 * 1000) },
                { id: 5, platform: 'JavaScript', platformIcon: 'JS', platformColor: '#f7df1e', version: '2.1.0', event: 'Error Handling', status: 'success', timestamp: new Date(Date.now() - 15 * 60 * 1000) }
            ],
            featureUsage: [
                { name: 'Address Verification', usage: 1250000, percentage: 85, color: '#3b82f6' },
                { name: 'Batch Verification', usage: 450000, percentage: 30, color: '#10b981' },
                { name: 'Geocoding', usage: 320000, percentage: 22, color: '#f59e0b' },
                { name: 'Address Validation', usage: 280000, percentage: 19, color: '#ef4444' },
                { name: 'Reverse Geocoding', usage: 180000, percentage: 12, color: '#8b5cf6' }
            ]
        }
    }
};

// Export for use in main dashboard
window.SdkMonitorPage = SdkMonitorPage;
