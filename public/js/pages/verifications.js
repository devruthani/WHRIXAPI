// Verifications Page Component
const VerificationsPage = {
    template: `
        <div>
            <div class="page-header">
                <h1>Verifications</h1>
                <p>Monitor and manage address verification requests</p>
            </div>

            <!-- Stats Cards -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <p style="font-size: 0.875rem; font-weight: 500; color: #6b7280;">Total Verified</p>
                            <p style="font-size: 1.875rem; font-weight: bold; color: #111827; margin-top: 0.5rem;">42,156</p>
                        </div>
                        <div style="background: #dcfce7; padding: 0.75rem; border-radius: 8px; border: 1px solid #bbf7d0;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #166534;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg>
                        </div>
                    </div>
                </div>
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <p style="font-size: 0.875rem; font-weight: 500; color: #6b7280;">Failed</p>
                            <p style="font-size: 1.875rem; font-weight: bold; color: #111827; margin-top: 0.5rem;">1,234</p>
                        </div>
                        <div style="background: #fef2f2; padding: 0.75rem; border-radius: 8px; border: 1px solid #fecaca;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #dc2626;"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                        </div>
                    </div>
                </div>
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <p style="font-size: 0.875rem; font-weight: 500; color: #6b7280;">Pending</p>
                            <p style="font-size: 1.875rem; font-weight: bold; color: #111827; margin-top: 0.5rem;">2,288</p>
                        </div>
                        <div style="background: #fef3c7; padding: 0.75rem; border-radius: 8px; border: 1px solid #fed7aa;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #92400e;"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Search and Filters -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; gap: 1rem; flex-wrap: wrap;">
                <div style="display: flex; gap: 1rem; flex: 1; min-width: 300px;">
                    <div style="position: relative; flex: 1;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="position: absolute; left: 0.75rem; top: 50%; transform: translateY(-50%); color: #6b7280;"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                        <input type="text" v-model="searchTerm" placeholder="Search verifications..." 
                               style="width: 100%; padding: 0.75rem 0.75rem 0.75rem 2.75rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 0.875rem; outline: none;"
                               @focus="$event.target.style.borderColor = '#E8C547'; $event.target.style.boxShadow = '0 0 0 2px rgba(232, 197, 71, 0.2)'"
                               @blur="$event.target.style.borderColor = '#d1d5db'; $event.target.style.boxShadow = 'none'">
                    </div>
                    <select v-model="statusFilter" 
                            style="padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 0.875rem; outline: none; min-width: 120px;"
                            @focus="$event.target.style.borderColor = '#E8C547'; $event.target.style.boxShadow = '0 0 0 2px rgba(232, 197, 71, 0.2)'"
                            @blur="$event.target.style.borderColor = '#d1d5db'; $event.target.style.boxShadow = 'none'">
                        <option value="all">All Status</option>
                        <option value="verified">Verified</option>
                        <option value="failed">Failed</option>
                        <option value="pending">Pending</option>
                    </select>
                    <select v-model="methodFilter" 
                            style="padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 0.875rem; outline: none; min-width: 120px;"
                            @focus="$event.target.style.borderColor = '#E8C547'; $event.target.style.boxShadow = '0 0 0 2px rgba(232, 197, 71, 0.2)'"
                            @blur="$event.target.style.borderColor = '#d1d5db'; $event.target.style.boxShadow = 'none'">
                        <option value="all">All Methods</option>
                        <option value="API">API</option>
                        <option value="Webhook">Webhook</option>
                    </select>
                </div>
                <button style="padding: 0.75rem 1.5rem; background: #E8C547; color: #111827; border: none; border-radius: 8px; font-weight: 500; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"
                        @mouseover="$event.target.style.backgroundColor = '#eab308'"
                        @mouseout="$event.target.style.backgroundColor = '#E8C547'">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27,6.96 12,12.01 20.73,6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                    Export Data
                </button>
            </div>

            <!-- Verifications Table -->
            <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; overflow: hidden;">
                <div style="padding: 1.5rem; border-bottom: 1px solid #e5e7eb;">
                    <h3 style="font-size: 1.125rem; font-weight: 600; color: #111827;">Recent Verifications</h3>
                </div>
                <div style="overflow-x: auto;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead>
                            <tr style="background: #f9fafb; border-bottom: 1px solid #e5e7eb;">
                                <th style="padding: 1rem 1.5rem; text-align: left; font-size: 0.875rem; font-weight: 500; color: #374151;">Business</th>
                                <th style="padding: 1rem 1.5rem; text-align: left; font-size: 0.875rem; font-weight: 500; color: #374151;">Address</th>
                                <th style="padding: 1rem 1.5rem; text-align: left; font-size: 0.875rem; font-weight: 500; color: #374151;">Status</th>
                                <th style="padding: 1rem 1.5rem; text-align: left; font-size: 0.875rem; font-weight: 500; color: #374151;">Method</th>
                                <th style="padding: 1rem 1.5rem; text-align: left; font-size: 0.875rem; font-weight: 500; color: #374151;">Response Time</th>
                                <th style="padding: 1rem 1.5rem; text-align: left; font-size: 0.875rem; font-weight: 500; color: #374151;">Confidence</th>
                                <th style="padding: 1rem 1.5rem; text-align: left; font-size: 0.875rem; font-weight: 500; color: #374151;">Timestamp</th>
                                <th style="padding: 1rem 1.5rem; text-align: left; font-size: 0.875rem; font-weight: 500; color: #374151;">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="verification in filteredVerifications" :key="verification.id" 
                                style="transition: background-color 0.15s;" 
                                @mouseover="$event.target.style.backgroundColor = '#f9fafb'" 
                                @mouseout="$event.target.style.backgroundColor = 'transparent'">
                                <td style="padding: 1rem 1.5rem;">
                                    <div>
                                        <p style="font-size: 0.875rem; font-weight: 500; color: #111827;">{{ verification.businessName }}</p>
                                    </div>
                                </td>
                                <td style="padding: 1rem 1.5rem;">
                                    <p style="font-size: 0.875rem; color: #6b7280; max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">{{ verification.address }}</p>
                                </td>
                                <td style="padding: 1rem 1.5rem;">
                                    <span :style="utils.getVerificationStatusColor(verification.status)" 
                                          style="padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 500; text-transform: capitalize;">
                                        {{ verification.status }}
                                    </span>
                                </td>
                                <td style="padding: 1rem 1.5rem;">
                                    <span style="padding: 0.25rem 0.75rem; background: #f3f4f6; color: #374151; border-radius: 9999px; font-size: 0.75rem; font-weight: 500;">
                                        {{ verification.method }}
                                    </span>
                                </td>
                                <td style="padding: 1rem 1.5rem;">
                                    <p style="font-size: 0.875rem; color: #111827;">{{ verification.responseTime }}</p>
                                </td>
                                <td style="padding: 1rem 1.5rem;">
                                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                                        <div style="width: 3rem; height: 0.5rem; background: #e5e7eb; border-radius: 9999px; overflow: hidden;">
                                            <div :style="'width: ' + verification.confidence + '%; height: 100%; background: ' + (verification.confidence > 80 ? '#10b981' : verification.confidence > 60 ? '#f59e0b' : '#ef4444') + ';'"></div>
                                        </div>
                                        <span style="font-size: 0.875rem; color: #111827;">{{ verification.confidence }}%</span>
                                    </div>
                                </td>
                                <td style="padding: 1rem 1.5rem;">
                                    <p style="font-size: 0.875rem; color: #6b7280;">{{ utils.formatTime(verification.timestamp) }}</p>
                                </td>
                                <td style="padding: 1rem 1.5rem;">
                                    <div style="display: flex; gap: 0.5rem;">
                                        <button style="padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 6px; background: white; cursor: pointer;"
                                                @mouseover="$event.target.style.backgroundColor = '#f9fafb'"
                                                @mouseout="$event.target.style.backgroundColor = 'white'">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                                        </button>
                                        <button style="padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 6px; background: white; cursor: pointer;"
                                                @mouseover="$event.target.style.backgroundColor = '#f9fafb'"
                                                @mouseout="$event.target.style.backgroundColor = 'white'">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16,6 12,2 8,6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Empty State -->
            <div v-if="filteredVerifications.length === 0" style="text-align: center; padding: 3rem; color: #6b7280;">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin: 0 auto 1rem; color: #d1d5db;"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                <h3 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 0.5rem;">No verifications found</h3>
                <p>Try adjusting your search or filter criteria.</p>
            </div>
        </div>
    `,
    data() {
        return {
            searchTerm: '',
            statusFilter: 'all',
            methodFilter: 'all'
        }
    },
    computed: {
        filteredVerifications() {
            let filtered = mockData.verifications;
            
            if (this.searchTerm) {
                filtered = filtered.filter(verification => 
                    verification.businessName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                    verification.address.toLowerCase().includes(this.searchTerm.toLowerCase())
                );
            }
            
            if (this.statusFilter !== 'all') {
                filtered = filtered.filter(verification => verification.status === this.statusFilter);
            }
            
            if (this.methodFilter !== 'all') {
                filtered = filtered.filter(verification => verification.method === this.methodFilter);
            }
            
            return filtered;
        }
    }
};

// Export for use in main dashboard
window.VerificationsPage = VerificationsPage;
