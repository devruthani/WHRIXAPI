// Businesses Page Component
const BusinessesPage = {
    template: `
        <div>
            <div class="page-header">
                <h1>Businesses</h1>
                <p>Manage and monitor your business integrations</p>
            </div>

            <!-- Search and Filters -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; gap: 1rem; flex-wrap: wrap;">
                <div style="display: flex; gap: 1rem; flex: 1; min-width: 300px;">
                    <div style="position: relative; flex: 1;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="position: absolute; left: 0.75rem; top: 50%; transform: translateY(-50%); color: #6b7280;"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                        <input type="text" v-model="searchTerm" placeholder="Search businesses..." 
                               style="width: 100%; padding: 0.75rem 0.75rem 0.75rem 2.75rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 0.875rem; outline: none;"
                               @focus="$event.target.style.borderColor = '#E8C547'; $event.target.style.boxShadow = '0 0 0 2px rgba(232, 197, 71, 0.2)'"
                               @blur="$event.target.style.borderColor = '#d1d5db'; $event.target.style.boxShadow = 'none'">
                    </div>
                    <select v-model="statusFilter" 
                            style="padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 0.875rem; outline: none; min-width: 120px;"
                            @focus="$event.target.style.borderColor = '#E8C547'; $event.target.style.boxShadow = '0 0 0 2px rgba(232, 197, 71, 0.2)'"
                            @blur="$event.target.style.borderColor = '#d1d5db'; $event.target.style.boxShadow = 'none'">
                        <option value="all">All Status</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                        <option value="suspended">Suspended</option>
                    </select>
                    <select v-model="planFilter" 
                            style="padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 0.875rem; outline: none; min-width: 120px;"
                            @focus="$event.target.style.borderColor = '#E8C547'; $event.target.style.boxShadow = '0 0 0 2px rgba(232, 197, 71, 0.2)'"
                            @blur="$event.target.style.borderColor = '#d1d5db'; $event.target.style.boxShadow = 'none'">
                        <option value="all">All Plans</option>
                        <option value="starter">Starter</option>
                        <option value="professional">Professional</option>
                        <option value="enterprise">Enterprise</option>
                    </select>
                </div>
                <button style="padding: 0.75rem 1.5rem; background: #E8C547; color: #111827; border: none; border-radius: 8px; font-weight: 500; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;"
                        @mouseover="$event.target.style.backgroundColor = '#eab308'"
                        @mouseout="$event.target.style.backgroundColor = '#E8C547'">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    Add Business
                </button>
            </div>

            <!-- Business Cards Grid -->
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 1.5rem;">
                <div v-for="business in filteredBusinesses" :key="business.id" 
                     style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem; transition: all 0.2s;"
                     @mouseover="$event.target.style.transform = 'translateY(-2px)'; $event.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)'"
                     @mouseout="$event.target.style.transform = 'translateY(0)'; $event.target.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)'">
                    
                    <!-- Business Header -->
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                        <div style="flex: 1;">
                            <h3 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 0.25rem;">{{ business.name }}</h3>
                            <p style="font-size: 0.875rem; color: #6b7280;">{{ business.industry }}</p>
                        </div>
                        <div style="display: flex; gap: 0.5rem;">
                            <button style="padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 6px; background: white; cursor: pointer;"
                                    @mouseover="$event.target.style.backgroundColor = '#f9fafb'"
                                    @mouseout="$event.target.style.backgroundColor = 'white'">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                            </button>
                            <button style="padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 6px; background: white; cursor: pointer;"
                                    @mouseover="$event.target.style.backgroundColor = '#f9fafb'"
                                    @mouseout="$event.target.style.backgroundColor = 'white'">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                            </button>
                        </div>
                    </div>

                    <!-- Business Info -->
                    <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1rem;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 0.875rem; color: #6b7280;">Contact</span>
                            <span style="font-size: 0.875rem; font-weight: 500; color: #111827;">{{ business.contact }}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 0.875rem; color: #6b7280;">Email</span>
                            <span style="font-size: 0.875rem; font-weight: 500; color: #111827;">{{ business.email }}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 0.875rem; color: #6b7280;">Created</span>
                            <span style="font-size: 0.875rem; font-weight: 500; color: #111827;">{{ utils.formatDate(business.createdAt) }}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 0.875rem; color: #6b7280;">Last Activity</span>
                            <span style="font-size: 0.875rem; font-weight: 500; color: #111827;">{{ utils.formatTime(business.lastActivity) }}</span>
                        </div>
                    </div>

                    <!-- Stats -->
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem; padding: 1rem; background: #f9fafb; border-radius: 8px;">
                        <div style="text-align: center;">
                            <p style="font-size: 1.5rem; font-weight: bold; color: #111827;">{{ utils.formatNumber(business.totalVerifications) }}</p>
                            <p style="font-size: 0.75rem; color: #6b7280;">Verifications</p>
                        </div>
                        <div style="text-align: center;">
                            <p style="font-size: 1.5rem; font-weight: bold; color: #111827;">{{ business.successRate }}%</p>
                            <p style="font-size: 0.75rem; color: #6b7280;">Success Rate</p>
                        </div>
                    </div>

                    <!-- Status and Plan -->
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span :style="utils.getStatusColor(business.status)" 
                              style="padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 500; text-transform: capitalize;">
                            {{ business.status }}
                        </span>
                        <span :style="utils.getPlanColor(business.plan)" 
                              style="padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 500; text-transform: capitalize;">
                            {{ business.plan }}
                        </span>
                    </div>
                </div>
            </div>

            <!-- Empty State -->
            <div v-if="filteredBusinesses.length === 0" style="text-align: center; padding: 3rem; color: #6b7280;">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin: 0 auto 1rem; color: #d1d5db;"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                <h3 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 0.5rem;">No businesses found</h3>
                <p>Try adjusting your search or filter criteria.</p>
            </div>
        </div>
    `,
    data() {
        return {
            searchTerm: '',
            statusFilter: 'all',
            planFilter: 'all'
        }
    },
    computed: {
        filteredBusinesses() {
            let filtered = mockData.businesses;
            
            if (this.searchTerm) {
                filtered = filtered.filter(business => 
                    business.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                    business.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                    business.contact.toLowerCase().includes(this.searchTerm.toLowerCase())
                );
            }
            
            if (this.statusFilter !== 'all') {
                filtered = filtered.filter(business => business.status === this.statusFilter);
            }
            
            if (this.planFilter !== 'all') {
                filtered = filtered.filter(business => business.plan === this.planFilter);
            }
            
            return filtered;
        }
    }
};

// Export for use in main dashboard
window.BusinessesPage = BusinessesPage;
