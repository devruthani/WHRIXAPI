// Analytics Page Component
const AnalyticsPage = {
    template: `
        <div>
            <div class="page-header">
                <h1>Analytics</h1>
                <p>Comprehensive insights into your verification system performance</p>
            </div>

            <!-- Stats Cards -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 12px; padding: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <p style="font-size: 0.875rem; opacity: 0.9;">Total Verifications</p>
                            <p style="font-size: 1.875rem; font-weight: bold; margin-top: 0.5rem;">45,678</p>
                            <div style="display: flex; align-items: center; margin-top: 0.75rem;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="opacity: 0.9;"><polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/></svg>
                                <span style="font-size: 0.875rem; margin-left: 0.25rem; opacity: 0.9;">+24.3% vs last month</span>
                            </div>
                        </div>
                        <div style="background: rgba(255, 255, 255, 0.2); padding: 0.75rem; border-radius: 8px;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>
                        </div>
                    </div>
                </div>
                <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; border-radius: 12px; padding: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <p style="font-size: 0.875rem; opacity: 0.9;">Success Rate</p>
                            <p style="font-size: 1.875rem; font-weight: bold; margin-top: 0.5rem;">98.7%</p>
                            <div style="display: flex; align-items: center; margin-top: 0.75rem;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="opacity: 0.9;"><polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/></svg>
                                <span style="font-size: 0.875rem; margin-left: 0.25rem; opacity: 0.9;">+2.1% vs last month</span>
                            </div>
                        </div>
                        <div style="background: rgba(255, 255, 255, 0.2); padding: 0.75rem; border-radius: 8px;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                        </div>
                    </div>
                </div>
                <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; border-radius: 12px; padding: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <p style="font-size: 0.875rem; opacity: 0.9;">Avg Response Time</p>
                            <p style="font-size: 1.875rem; font-weight: bold; margin-top: 0.5rem;">245ms</p>
                            <div style="display: flex; align-items: center; margin-top: 0.75rem;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="opacity: 0.9;"><polyline points="22,17 13.5,8.5 8.5,13.5 2,7"/><polyline points="16,17 22,17 22,11"/></svg>
                                <span style="font-size: 0.875rem; margin-left: 0.25rem; opacity: 0.9;">-12.3% vs last month</span>
                            </div>
                        </div>
                        <div style="background: rgba(255, 255, 255, 0.2); padding: 0.75rem; border-radius: 8px;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                        </div>
                    </div>
                </div>
                <div style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); color: white; border-radius: 12px; padding: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <p style="font-size: 0.875rem; opacity: 0.9;">API Calls Today</p>
                            <p style="font-size: 1.875rem; font-weight: bold; margin-top: 0.5rem;">12,456</p>
                            <div style="display: flex; align-items: center; margin-top: 0.75rem;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="opacity: 0.9;"><polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/></svg>
                                <span style="font-size: 0.875rem; margin-left: 0.25rem; opacity: 0.9;">+15.8% vs yesterday</span>
                            </div>
                        </div>
                        <div style="background: rgba(255, 255, 255, 0.2); padding: 0.75rem; border-radius: 8px;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Charts and Analytics Grid -->
            <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
                <!-- Monthly Trends Chart -->
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                        <h3 style="font-size: 1.125rem; font-weight: 600; color: #111827;">Monthly Trends</h3>
                        <select style="padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 0.875rem; outline: none;"
                                @focus="$event.target.style.borderColor = '#E8C547'; $event.target.style.boxShadow = '0 0 0 2px rgba(232, 197, 71, 0.2)'"
                                @blur="$event.target.style.borderColor = '#d1d5db'; $event.target.style.boxShadow = 'none'">
                            <option>Last 6 months</option>
                            <option>Last 12 months</option>
                            <option>This year</option>
                        </select>
                    </div>
                    <div style="height: 300px; display: flex; align-items: end; justify-content: space-between; padding: 1rem; background: #f9fafb; border-radius: 8px;">
                        <div v-for="(month, index) in monthlyData" :key="index" style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                            <div :style="'width: 20px; height: ' + (month.verifications / 1000) + 'px; background: linear-gradient(to top, #E8C547, #f4d03f); border-radius: 4px 4px 0 0; margin-bottom: 0.5rem;'"></div>
                            <span style="font-size: 0.75rem; color: #6b7280;">{{ month.name }}</span>
                        </div>
                    </div>
                </div>

                <!-- Geographic Distribution -->
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem;">
                    <h3 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 1.5rem;">Geographic Distribution</h3>
                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                        <div v-for="region in geographicData" :key="region.name" style="display: flex; justify-content: space-between; align-items: center;">
                            <div style="display: flex; align-items: center; gap: 0.75rem;">
                                <div :style="'width: 0.75rem; height: 0.75rem; background: ' + region.color + '; border-radius: 50%;'"></div>
                                <span style="font-size: 0.875rem; color: #111827;">{{ region.name }}</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                <div style="width: 3rem; height: 0.5rem; background: #e5e7eb; border-radius: 9999px; overflow: hidden;">
                                    <div :style="'width: ' + region.percentage + '%; height: 100%; background: ' + region.color + ';'"></div>
                                </div>
                                <span style="font-size: 0.875rem; color: #6b7280;">{{ region.percentage }}%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Industry Breakdown and Performance Metrics -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
                <!-- Industry Breakdown -->
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem;">
                    <h3 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 1.5rem;">Industry Breakdown</h3>
                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                        <div v-for="industry in industryData" :key="industry.name" style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; background: #f9fafb; border-radius: 8px;">
                            <div>
                                <p style="font-size: 0.875rem; font-weight: 500; color: #111827;">{{ industry.name }}</p>
                                <p style="font-size: 0.75rem; color: #6b7280;">{{ industry.verifications }} verifications</p>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                <div style="width: 3rem; height: 0.5rem; background: #e5e7eb; border-radius: 9999px; overflow: hidden;">
                                    <div :style="'width: ' + industry.percentage + '%; height: 100%; background: ' + industry.color + ';'"></div>
                                </div>
                                <span style="font-size: 0.875rem; color: #6b7280;">{{ industry.percentage }}%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Performance Metrics -->
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem;">
                    <h3 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 1.5rem;">Performance Metrics</h3>
                    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                        <div>
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                <span style="font-size: 0.875rem; color: #6b7280;">Uptime</span>
                                <span style="font-size: 0.875rem; font-weight: 500; color: #111827;">99.9%</span>
                            </div>
                            <div style="width: 100%; height: 0.5rem; background: #e5e7eb; border-radius: 9999px; overflow: hidden;">
                                <div style="width: 99.9%; height: 100%; background: #10b981;"></div>
                            </div>
                        </div>
                        <div>
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                <span style="font-size: 0.875rem; color: #6b7280;">Error Rate</span>
                                <span style="font-size: 0.875rem; font-weight: 500; color: #111827;">0.1%</span>
                            </div>
                            <div style="width: 100%; height: 0.5rem; background: #e5e7eb; border-radius: 9999px; overflow: hidden;">
                                <div style="width: 0.1%; height: 100%; background: #ef4444;"></div>
                            </div>
                        </div>
                        <div>
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                <span style="font-size: 0.875rem; color: #6b7280;">Cache Hit Rate</span>
                                <span style="font-size: 0.875rem; font-weight: 500; color: #111827;">87.3%</span>
                            </div>
                            <div style="width: 100%; height: 0.5rem; background: #e5e7eb; border-radius: 9999px; overflow: hidden;">
                                <div style="width: 87.3%; height: 100%; background: #3b82f6;"></div>
                            </div>
                        </div>
                        <div>
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                <span style="font-size: 0.875rem; color: #6b7280;">API Response Time</span>
                                <span style="font-size: 0.875rem; font-weight: 500; color: #111827;">245ms</span>
                            </div>
                            <div style="width: 100%; height: 0.5rem; background: #e5e7eb; border-radius: 9999px; overflow: hidden;">
                                <div style="width: 75%; height: 100%; background: #E8C547;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom Stats Grid -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem;">
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem; text-align: center;">
                    <div style="width: 3rem; height: 3rem; background: #dbeafe; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #3b82f6;"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </div>
                    <p style="font-size: 1.5rem; font-weight: bold; color: #111827;">1,247</p>
                    <p style="font-size: 0.875rem; color: #6b7280;">Active Businesses</p>
                </div>
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem; text-align: center;">
                    <div style="width: 3rem; height: 3rem; background: #dcfce7; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #10b981;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg>
                    </div>
                    <p style="font-size: 1.5rem; font-weight: bold; color: #111827;">42,156</p>
                    <p style="font-size: 0.875rem; color: #6b7280;">Successful Verifications</p>
                </div>
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem; text-align: center;">
                    <div style="width: 3rem; height: 3rem; background: #fef3c7; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #92400e;"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                    </div>
                    <p style="font-size: 1.5rem; font-weight: bold; color: #111827;">2,288</p>
                    <p style="font-size: 0.875rem; color: #6b7280;">Pending Verifications</p>
                </div>
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem; text-align: center;">
                    <div style="width: 3rem; height: 3rem; background: #f3e8ff; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #9333ea;"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                    </div>
                    <p style="font-size: 1.5rem; font-weight: bold; color: #111827;">12,456</p>
                    <p style="font-size: 0.875rem; color: #6b7280;">API Calls Today</p>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            monthlyData: [
                { name: 'Jan', verifications: 3200 },
                { name: 'Feb', verifications: 3800 },
                { name: 'Mar', verifications: 4200 },
                { name: 'Apr', verifications: 4500 },
                { name: 'May', verifications: 4800 },
                { name: 'Jun', verifications: 5200 }
            ],
            geographicData: [
                { name: 'North America', percentage: 45, color: '#3b82f6' },
                { name: 'Europe', percentage: 28, color: '#10b981' },
                { name: 'Asia Pacific', percentage: 18, color: '#f59e0b' },
                { name: 'Others', percentage: 9, color: '#ef4444' }
            ],
            industryData: [
                { name: 'E-commerce', verifications: 18500, percentage: 40, color: '#3b82f6' },
                { name: 'Financial Services', verifications: 12300, percentage: 27, color: '#10b981' },
                { name: 'Healthcare', verifications: 9200, percentage: 20, color: '#f59e0b' },
                { name: 'Real Estate', verifications: 6200, percentage: 13, color: '#ef4444' }
            ]
        }
    }
};

// Export for use in main dashboard
window.AnalyticsPage = AnalyticsPage;
