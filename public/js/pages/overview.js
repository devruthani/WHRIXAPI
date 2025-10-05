// Overview Page Component
const OverviewPage = {
    template: `
        <div>
            <div class="page-header">
                <h1>Dashboard Overview</h1>
                <p>Monitor your address verification system performance</p>
            </div>

            <!-- Stats Cards Grid -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                        <div>
                            <p style="font-size: 0.875rem; font-weight: 500; color: #6b7280;">Total Businesses</p>
                            <p style="font-size: 1.875rem; font-weight: bold; color: #111827; margin-top: 0.5rem;">1,247</p>
                            <div style="display: flex; align-items: center; margin-top: 0.75rem;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #10b981;"><polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/></svg>
                                <span style="font-size: 0.875rem; font-weight: 500; color: #10b981; margin-left: 0.25rem;">+12.5%</span>
                                <span style="font-size: 0.875rem; color: #6b7280; margin-left: 0.25rem;">vs last month</span>
                            </div>
                        </div>
                        <div style="background: #3b82f6; padding: 0.75rem; border-radius: 8px;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: white;"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                        </div>
                    </div>
                </div>
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                        <div>
                            <p style="font-size: 0.875rem; font-weight: 500; color: #6b7280;">Active Businesses</p>
                            <p style="font-size: 1.875rem; font-weight: bold; color: #111827; margin-top: 0.5rem;">1,089</p>
                            <div style="display: flex; align-items: center; margin-top: 0.75rem;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #10b981;"><polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/></svg>
                                <span style="font-size: 0.875rem; font-weight: 500; color: #10b981; margin-left: 0.25rem;">+8.2%</span>
                                <span style="font-size: 0.875rem; color: #6b7280; margin-left: 0.25rem;">vs last month</span>
                            </div>
                        </div>
                        <div style="background: #10b981; padding: 0.75rem; border-radius: 8px;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: white;"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                        </div>
                    </div>
                </div>
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                        <div>
                            <p style="font-size: 0.875rem; font-weight: 500; color: #6b7280;">Total Verifications</p>
                            <p style="font-size: 1.875rem; font-weight: bold; color: #111827; margin-top: 0.5rem;">45,678</p>
                            <div style="display: flex; align-items: center; margin-top: 0.75rem;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #10b981;"><polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/></svg>
                                <span style="font-size: 0.875rem; font-weight: 500; color: #10b981; margin-left: 0.25rem;">+24.3%</span>
                                <span style="font-size: 0.875rem; color: #6b7280; margin-left: 0.25rem;">vs last month</span>
                            </div>
                        </div>
                        <div style="background: #E8C547; padding: 0.75rem; border-radius: 8px;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #333;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg>
                        </div>
                    </div>
                </div>
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                        <div>
                            <p style="font-size: 0.875rem; font-weight: 500; color: #6b7280;">Success Rate</p>
                            <p style="font-size: 1.875rem; font-weight: bold; color: #111827; margin-top: 0.5rem;">98.7%</p>
                            <div style="display: flex; align-items: center; margin-top: 0.75rem;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #10b981;"><polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/></svg>
                                <span style="font-size: 0.875rem; font-weight: 500; color: #10b981; margin-left: 0.25rem;">+2.1%</span>
                                <span style="font-size: 0.875rem; color: #6b7280; margin-left: 0.25rem;">vs last month</span>
                            </div>
                        </div>
                        <div style="background: #10b981; padding: 0.75rem; border-radius: 8px;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: white;"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                        </div>
                    </div>
                </div>
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                        <div>
                            <p style="font-size: 0.875rem; font-weight: 500; color: #6b7280;">API Calls Today</p>
                            <p style="font-size: 1.875rem; font-weight: bold; color: #111827; margin-top: 0.5rem;">12,456</p>
                            <div style="display: flex; align-items: center; margin-top: 0.75rem;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #10b981;"><polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/></svg>
                                <span style="font-size: 0.875rem; font-weight: 500; color: #10b981; margin-left: 0.25rem;">+15.8%</span>
                                <span style="font-size: 0.875rem; color: #6b7280; margin-left: 0.25rem;">vs yesterday</span>
                            </div>
                        </div>
                        <div style="background: #06b6d4; padding: 0.75rem; border-radius: 8px;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: white;"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        </div>
                    </div>
                </div>
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
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
            </div>

            <!-- Recent Activity -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
                <!-- Recent Verifications -->
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem;">
                    <h3 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 1rem;">Recent Verifications</h3>
                    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                        <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background: #f9fafb; border-radius: 8px;">
                            <div style="width: 2rem; height: 2rem; background: #10b981; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: white;"><polyline points="20,6 9,17 4,12"/></svg>
                            </div>
                            <div style="flex: 1;">
                                <p style="font-size: 0.875rem; font-weight: 500; color: #111827;">TechCorp Solutions</p>
                                <p style="font-size: 0.75rem; color: #6b7280; margin-top: 0.25rem;">123 Tech Street, San Francisco, CA</p>
                                <p style="font-size: 0.75rem; color: #6b7280;">Verified • 245ms</p>
                            </div>
                            <span style="font-size: 0.75rem; color: #6b7280;">2m ago</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: #f9fafb; border-radius: 8px;">
                            <div style="width: 2rem; height: 2rem; background: #ef4444; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: white;"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                            </div>
                            <div style="flex: 1;">
                                <p style="font-size: 0.875rem; font-weight: 500; color: #111827;">DeliveryHub Inc</p>
                                <p style="font-size: 0.75rem; color: #6b7280; margin-top: 0.25rem;">456 Delivery Ave, New York, NY</p>
                                <p style="font-size: 0.75rem; color: #6b7280;">Failed • 1.2s</p>
                            </div>
                            <span style="font-size: 0.75rem; color: #6b7280;">5m ago</span>
                        </div>
                    </div>
                </div>

                <!-- System Health -->
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem;">
                    <h3 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 1rem;">System Health</h3>
                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 0.875rem; color: #6b7280;">API Status</span>
                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                <div style="width: 0.5rem; height: 0.5rem; background: #10b981; border-radius: 50%;"></div>
                                <span style="font-size: 0.875rem; font-weight: 500; color: #10b981;">Operational</span>
                            </div>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 0.875rem; color: #6b7280;">Database</span>
                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                <div style="width: 0.5rem; height: 0.5rem; background: #10b981; border-radius: 50%;"></div>
                                <span style="font-size: 0.875rem; font-weight: 500; color: #10b981;">Healthy</span>
                            </div>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 0.875rem; color: #6b7280;">Cache</span>
                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                <div style="width: 0.5rem; height: 0.5rem; background: #f59e0b; border-radius: 50%;"></div>
                                <span style="font-size: 0.875rem; font-weight: 500; color: #f59e0b;">Warning</span>
                            </div>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 0.875rem; color: #6b7280;">CDN</span>
                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                <div style="width: 0.5rem; height: 0.5rem; background: #10b981; border-radius: 50%;"></div>
                                <span style="font-size: 0.875rem; font-weight: 500; color: #10b981;">Optimal</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
};

// Export for use in main dashboard
window.OverviewPage = OverviewPage;
