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
                               @keyup.enter="searchBusinesses"
                               @focus="$event.target.style.borderColor = '#E8C547'; $event.target.style.boxShadow = '0 0 0 2px rgba(232, 197, 71, 0.2)'"
                               @blur="$event.target.style.borderColor = '#d1d5db'; $event.target.style.boxShadow = 'none'">
                    </div>
                    <select v-model="statusFilter" 
                            style="padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 0.875rem; outline: none; min-width: 120px;"
                            @change="searchBusinesses"
                            @focus="$event.target.style.borderColor = '#E8C547'; $event.target.style.boxShadow = '0 0 0 2px rgba(232, 197, 71, 0.2)'"
                            @blur="$event.target.style.borderColor = '#d1d5db'; $event.target.style.boxShadow = 'none'">
                        <option value="all">All Status</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                        <option value="suspended">Suspended</option>
                        <option value="pending_verification">Pending</option>
                    </select>
                    <select v-model="planFilter" 
                            style="padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 0.875rem; outline: none; min-width: 120px;"
                            @change="searchBusinesses"
                            @focus="$event.target.style.borderColor = '#E8C547'; $event.target.style.boxShadow = '0 0 0 2px rgba(232, 197, 71, 0.2)'"
                            @blur="$event.target.style.borderColor = '#d1d5db'; $event.target.style.boxShadow = 'none'">
                        <option value="all">All Plans</option>
                        <option value="free">Free</option>
                        <option value="starter">Starter</option>
                        <option value="professional">Professional</option>
                        <option value="enterprise">Enterprise</option>
                    </select>
                    <select v-model="industryFilter" 
                            style="padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 0.875rem; outline: none; min-width: 120px;"
                            @change="searchBusinesses"
                            @focus="$event.target.style.borderColor = '#E8C547'; $event.target.style.boxShadow = '0 0 0 2px rgba(232, 197, 71, 0.2)'"
                            @blur="$event.target.style.borderColor = '#d1d5db'; $event.target.style.boxShadow = 'none'">
                        <option value="all">All Industries</option>
                        <option value="Technology">Technology</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Finance">Finance</option>
                        <option value="E-commerce">E-commerce</option>
                        <option value="Education">Education</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div style="display: flex; gap: 1rem; align-items: center;">
                    <!-- View Toggle -->
                    <div style="display: flex; border: 1px solid #d1d5db; border-radius: 8px; overflow: hidden;">
                        <button @click="viewMode = 'grid'" 
                                :style="viewMode === 'grid' ? 'background: #E8C547; color: #111827;' : 'background: white; color: #6b7280;'"
                                style="padding: 0.5rem; border: none; cursor: pointer; display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                            Grid
                        </button>
                        <button @click="viewMode = 'list'" 
                                :style="viewMode === 'list' ? 'background: #E8C547; color: #111827;' : 'background: white; color: #6b7280;'"
                                style="padding: 0.5rem; border: none; cursor: pointer; display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
                            List
                        </button>
                    </div>
                    
                    <!-- Sort Dropdown -->
                    <select v-model="sortBy" @change="searchBusinesses" 
                            style="padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 0.875rem; outline: none; min-width: 120px;">
                        <option value="created_on">Created Date</option>
                        <option value="name">Name</option>
                        <option value="email">Email</option>
                        <option value="status">Status</option>
                        <option value="plan">Plan</option>
                        <option value="totalVerifications">Verifications</option>
                    </select>
                    
                    <!-- Sort Order -->
                    <button @click="toggleSortOrder" style="padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 8px; background: white; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
                        <svg v-if="sortOrder === 'ASC'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18,15 12,9 6,15"/></svg>
                        <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6,9 12,15 18,9"/></svg>
                        {{ sortOrder === 'ASC' ? 'Asc' : 'Desc' }}
                    </button>
                    
                    <!-- Export Button -->
                    <button @click="exportBusinesses" style="padding: 0.75rem 1rem; background: #6b7280; color: white; border: none; border-radius: 8px; font-weight: 500; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                        Export
                    </button>
                    
                    <!-- Add Business Button -->
                    <button @click="showAddBusinessModal" style="padding: 0.75rem 1.5rem; background: #E8C547; color: #111827; border: none; border-radius: 8px; font-weight: 500; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    Add Business
                </button>
                </div>
            </div>

            <!-- Loading State -->
            <div v-if="loading" style="text-align: center; padding: 3rem; color: #6b7280;">
                <div style="display: inline-block; width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #E8C547; border-radius: 50%; animation: spin 1s linear infinite;"></div>
                <p style="margin-top: 1rem;">Loading businesses...</p>
            </div>

            <!-- Business List View -->
            <div v-else-if="viewMode === 'list'" style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; overflow: hidden;">
                <div style="padding: 1.5rem; border-bottom: 1px solid #e5e7eb; background: #f9fafb;">
                    <h3 style="font-size: 1.125rem; font-weight: 600; color: #111827;">Businesses ({{ totalItems }} total)</h3>
                </div>
                <div style="overflow-x: auto;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead>
                            <tr style="background: #f9fafb; border-bottom: 1px solid #e5e7eb;">
                                <th style="padding: 1rem 1.5rem; text-align: left; font-size: 0.875rem; font-weight: 500; color: #374151;">Business</th>
                                <th style="padding: 1rem 1.5rem; text-align: left; font-size: 0.875rem; font-weight: 500; color: #374151;">Contact</th>
                                <th style="padding: 1rem 1.5rem; text-align: left; font-size: 0.875rem; font-weight: 500; color: #374151;">Status</th>
                                <th style="padding: 1rem 1.5rem; text-align: left; font-size: 0.875rem; font-weight: 500; color: #374151;">Plan</th>
                                <th style="padding: 1rem 1.5rem; text-align: left; font-size: 0.875rem; font-weight: 500; color: #374151;">Verifications</th>
                                <th style="padding: 1rem 1.5rem; text-align: left; font-size: 0.875rem; font-weight: 500; color: #374151;">Created</th>
                                <th style="padding: 1rem 1.5rem; text-align: left; font-size: 0.875rem; font-weight: 500; color: #374151;">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="business in filteredBusinesses" :key="business.id" 
                                style="border-bottom: 1px solid #f3f4f6; transition: background-color 0.15s;" 
                                @mouseover="$event.target.style.backgroundColor = '#f9fafb'" 
                                @mouseout="$event.target.style.backgroundColor = 'transparent'">
                                <td style="padding: 1rem 1.5rem;">
                                    <div>
                                        <p style="font-size: 0.875rem; font-weight: 500; color: #111827; margin-bottom: 0.25rem;">{{ business.name }}</p>
                                        <p style="font-size: 0.75rem; color: #6b7280;">{{ business.industry || 'No industry specified' }}</p>
                                    </div>
                                </td>
                                <td style="padding: 1rem 1.5rem;">
                                    <div>
                                        <p style="font-size: 0.875rem; color: #111827; margin-bottom: 0.25rem;">{{ business.email }}</p>
                                        <p v-if="business.phone" style="font-size: 0.75rem; color: #6b7280;">{{ business.phone }}</p>
                                    </div>
                                </td>
                                <td style="padding: 1rem 1.5rem;">
                                    <span :style="getStatusStyle(business.status)" 
                                          style="padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 500; text-transform: capitalize;">
                                        {{ business.status.replace('_', ' ') }}
                                    </span>
                                </td>
                                <td style="padding: 1rem 1.5rem;">
                                    <span :style="getPlanStyle(business.plan)" 
                                          style="padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 500; text-transform: capitalize;">
                                        {{ business.plan }}
                                    </span>
                                </td>
                                <td style="padding: 1rem 1.5rem;">
                                    <div>
                                        <p style="font-size: 0.875rem; font-weight: 500; color: #111827;">{{ business.totalVerifications || 0 }}</p>
                                        <p style="font-size: 0.75rem; color: #6b7280;">{{ business.successRate || 0 }}% success</p>
                                    </div>
                                </td>
                                <td style="padding: 1rem 1.5rem;">
                                    <p style="font-size: 0.875rem; color: #6b7280;">{{ formatDate(business.created_on) }}</p>
                                </td>
                                <td style="padding: 1rem 1.5rem;">
                                    <div style="display: flex; gap: 0.5rem;">
                                        <button @click="viewBusiness(business)" style="padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 6px; background: white; cursor: pointer;" title="View Details">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                                        </button>
                                        <button @click="editBusiness(business)" style="padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 6px; background: white; cursor: pointer;" title="Edit">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                                        </button>
                                        <div style="position: relative; display: inline-block;">
                                            <button @click="toggleBusinessMenu(business.id)" style="padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 6px; background: white; cursor: pointer;" title="More Actions">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                                            </button>
                                            <div v-if="activeMenu === business.id" style="position: absolute; right: 0; top: 100%; background: white; border: 1px solid #e5e7eb; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); z-index: 10; min-width: 150px; margin-top: 0.25rem;">
                                                <button @click="regenerateApiKey(business.id)" style="width: 100%; padding: 0.75rem 1rem; text-align: left; border: none; background: none; cursor: pointer; font-size: 0.875rem; color: #374151;" onmouseover="this.style.backgroundColor='#f9fafb'" onmouseout="this.style.backgroundColor='white'">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.5rem;"><path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                                                    Regenerate API Key
                                                </button>
                                                <button v-if="business.status === 'pending_verification'" @click="verifyBusiness(business.id)" style="width: 100%; padding: 0.75rem 1rem; text-align: left; border: none; background: none; cursor: pointer; font-size: 0.875rem; color: #059669;" onmouseover="this.style.backgroundColor='#f9fafb'" onmouseout="this.style.backgroundColor='white'">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.5rem;"><polyline points="20,6 9,17 4,12"/></svg>
                                                    Verify
                                                </button>
                                                <button v-if="business.status === 'active'" @click="suspendBusiness(business.id)" style="width: 100%; padding: 0.75rem 1rem; text-align: left; border: none; background: none; cursor: pointer; font-size: 0.875rem; color: #dc2626;" onmouseover="this.style.backgroundColor='#f9fafb'" onmouseout="this.style.backgroundColor='white'">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.5rem;"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
                                                    Suspend
                                                </button>
                                                <button @click="deleteBusiness(business.id)" style="width: 100%; padding: 0.75rem 1rem; text-align: left; border: none; background: none; cursor: pointer; font-size: 0.875rem; color: #dc2626;" onmouseover="this.style.backgroundColor='#f9fafb'" onmouseout="this.style.backgroundColor='white'">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.5rem;"><polyline points="3,6 5,6 21,6"/><path d="M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"/></svg>
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Business Cards Grid -->
            <div v-else style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 1.5rem;">
                <div v-for="business in filteredBusinesses" :key="business.id" 
                     style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem;">
                    
                    <!-- Business Header -->
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                        <div style="flex: 1;">
                            <h3 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 0.25rem;">{{ business.name }}</h3>
                            <p style="font-size: 0.875rem; color: #6b7280;">{{ business.industry || 'No industry specified' }}</p>
                        </div>
                        <div style="display: flex; gap: 0.5rem;">
                            <button @click="viewBusiness(business)" style="padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 6px; background: white; cursor: pointer;" title="View Details">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                            </button>
                            <div style="position: relative; display: inline-block;">
                                <button @click="toggleBusinessMenu(business.id)" style="padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 6px; background: white; cursor: pointer;" title="More Actions">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                            </button>
                                <div v-if="activeMenu === business.id" style="position: absolute; right: 0; top: 100%; background: white; border: 1px solid #e5e7eb; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); z-index: 10; min-width: 150px; margin-top: 0.25rem;">
                                    <button @click="editBusiness(business)" style="width: 100%; padding: 0.75rem 1rem; text-align: left; border: none; background: none; cursor: pointer; font-size: 0.875rem; color: #374151;" onmouseover="this.style.backgroundColor='#f9fafb'" onmouseout="this.style.backgroundColor='white'">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.5rem;"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                                        Edit
                                    </button>
                                    <button @click="regenerateApiKey(business.id)" style="width: 100%; padding: 0.75rem 1rem; text-align: left; border: none; background: none; cursor: pointer; font-size: 0.875rem; color: #374151;" onmouseover="this.style.backgroundColor='#f9fafb'" onmouseout="this.style.backgroundColor='white'">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.5rem;"><path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                                        Regenerate API Key
                                    </button>
                                    <button v-if="business.status === 'pending_verification'" @click="verifyBusiness(business.id)" style="width: 100%; padding: 0.75rem 1rem; text-align: left; border: none; background: none; cursor: pointer; font-size: 0.875rem; color: #059669;" onmouseover="this.style.backgroundColor='#f9fafb'" onmouseout="this.style.backgroundColor='white'">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.5rem;"><polyline points="20,6 9,17 4,12"/></svg>
                                        Verify
                                    </button>
                                    <button v-if="business.status === 'active'" @click="suspendBusiness(business.id)" style="width: 100%; padding: 0.75rem 1rem; text-align: left; border: none; background: none; cursor: pointer; font-size: 0.875rem; color: #dc2626;" onmouseover="this.style.backgroundColor='#f9fafb'" onmouseout="this.style.backgroundColor='white'">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.5rem;"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
                                        Suspend
                                    </button>
                                    <button @click="deleteBusiness(business.id)" style="width: 100%; padding: 0.75rem 1rem; text-align: left; border: none; background: none; cursor: pointer; font-size: 0.875rem; color: #dc2626;" onmouseover="this.style.backgroundColor='#f9fafb'" onmouseout="this.style.backgroundColor='white'">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.5rem;"><polyline points="3,6 5,6 21,6"/><path d="M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"/></svg>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Business Info -->
                    <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1rem;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 0.875rem; color: #6b7280;">Email</span>
                            <span style="font-size: 0.875rem; font-weight: 500; color: #111827;">{{ business.email }}</span>
                        </div>
                        <div v-if="business.phone" style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 0.875rem; color: #6b7280;">Phone</span>
                            <span style="font-size: 0.875rem; font-weight: 500; color: #111827;">{{ business.phone }}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 0.875rem; color: #6b7280;">Created</span>
                            <span style="font-size: 0.875rem; font-weight: 500; color: #111827;">{{ formatDate(business.created_on) }}</span>
                        </div>
                        <div v-if="business.lastActivityAt" style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 0.875rem; color: #6b7280;">Last Activity</span>
                            <span style="font-size: 0.875rem; font-weight: 500; color: #111827;">{{ formatDate(business.lastActivityAt) }}</span>
                        </div>
                    </div>

                    <!-- Stats -->
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem; padding: 1rem; background: #f9fafb; border-radius: 8px;">
                        <div style="text-align: center;">
                            <p style="font-size: 1.5rem; font-weight: bold; color: #111827;">{{ business.totalVerifications || 0 }}</p>
                            <p style="font-size: 0.75rem; color: #6b7280;">Verifications</p>
                        </div>
                        <div style="text-align: center;">
                            <p style="font-size: 1.5rem; font-weight: bold; color: #111827;">{{ business.successRate || 0 }}%</p>
                            <p style="font-size: 0.75rem; color: #6b7280;">Success Rate</p>
                        </div>
                    </div>

                    <!-- Status and Plan -->
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span :style="getStatusStyle(business.status)" 
                              style="padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 500; text-transform: capitalize;">
                            {{ business.status.replace('_', ' ') }}
                        </span>
                        <span :style="getPlanStyle(business.plan)" 
                              style="padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 500; text-transform: capitalize;">
                            {{ business.plan }}
                        </span>
                    </div>
                </div>
            </div>

            <!-- Pagination -->
            <div v-if="totalPages > 1" style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin-top: 2rem;">
                <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1" 
                        style="padding: 0.5rem 1rem; border: 1px solid #d1d5db; border-radius: 6px; background: white; cursor: pointer;"
                        :style="{ opacity: currentPage === 1 ? 0.5 : 1, cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }">
                    Previous
                </button>
                <span style="color: #6b7280; font-size: 0.875rem;">
                    Page {{ currentPage }} of {{ totalPages }} ({{ totalItems }} total)
                </span>
                <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages" 
                        style="padding: 0.5rem 1rem; border: 1px solid #d1d5db; border-radius: 6px; background: white; cursor: pointer;"
                        :style="{ opacity: currentPage === totalPages ? 0.5 : 1, cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }">
                    Next
                </button>
            </div>

            <!-- Empty State -->
            <div v-if="!loading && filteredBusinesses.length === 0" style="text-align: center; padding: 3rem; color: #6b7280;">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin: 0 auto 1rem; color: #d1d5db;"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                <h3 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 0.5rem;">No businesses found</h3>
                <p>Try adjusting your search or filter criteria.</p>
            </div>

            <!-- Add Business Modal -->
            <div v-if="showAddModal" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); display: flex; align-items: center; justify-content: center; z-index: 1000;">
                <div style="background: white; border-radius: 12px; padding: 2rem; max-width: 600px; width: 90%; max-height: 90vh; overflow-y: auto;">
                    <h3 style="font-size: 1.5rem; font-weight: 600; color: #111827; margin-bottom: 1.5rem;">Add New Business</h3>
                    
                    <form @submit.prevent="addBusiness" style="display: grid; gap: 1rem;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151;">Business Name *</label>
                                <input type="text" v-model="newBusiness.name" required style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 0.875rem;">
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151;">Email *</label>
                                <input type="email" v-model="newBusiness.email" required style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 0.875rem;">
                            </div>
                        </div>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151;">Industry</label>
                                <select v-model="newBusiness.industry" style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 0.875rem;">
                                    <option value="">Select Industry</option>
                                    <option value="Technology">Technology</option>
                                    <option value="Healthcare">Healthcare</option>
                                    <option value="Finance">Finance</option>
                                    <option value="E-commerce">E-commerce</option>
                                    <option value="Education">Education</option>
                                    <option value="Real Estate">Real Estate</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151;">Plan</label>
                                <select v-model="newBusiness.plan" style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 0.875rem;">
                                    <option value="free">Free</option>
                                    <option value="starter">Starter</option>
                                    <option value="professional">Professional</option>
                                    <option value="enterprise">Enterprise</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151;">Phone</label>
                            <input type="tel" v-model="newBusiness.phone" style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 0.875rem;">
                        </div>

                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151;">Website</label>
                            <input type="url" v-model="newBusiness.website" style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 0.875rem;">
                        </div>

                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151;">Address</label>
                            <textarea v-model="newBusiness.address" rows="3" style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 0.875rem; resize: vertical;"></textarea>
                        </div>

                        <div style="display: flex; justify-content: flex-end; gap: 1rem; margin-top: 1.5rem;">
                            <button type="button" @click="showAddModal = false" style="padding: 0.75rem 1.5rem; border: 1px solid #d1d5db; border-radius: 6px; background: white; cursor: pointer;">
                                Cancel
                            </button>
                            <button type="submit" style="padding: 0.75rem 1.5rem; background: #E8C547; color: #111827; border: none; border-radius: 6px; font-weight: 500; cursor: pointer;">
                                Create Business
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <!-- Edit Business Modal -->
            <div v-if="showEditModal" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); display: flex; align-items: center; justify-content: center; z-index: 1000;">
                <div style="background: white; border-radius: 12px; padding: 2rem; max-width: 600px; width: 90%; max-height: 90vh; overflow-y: auto;">
                    <h3 style="font-size: 1.5rem; font-weight: 600; color: #111827; margin-bottom: 1.5rem;">Edit Business</h3>
                    
                    <form @submit.prevent="updateBusiness" style="display: grid; gap: 1rem;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151;">Business Name *</label>
                                <input type="text" v-model="selectedBusiness.name" required style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 0.875rem;">
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151;">Email *</label>
                                <input type="email" v-model="selectedBusiness.email" required style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 0.875rem;">
                            </div>
                        </div>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151;">Industry</label>
                                <select v-model="selectedBusiness.industry" style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 0.875rem;">
                                    <option value="">Select Industry</option>
                                    <option value="Technology">Technology</option>
                                    <option value="Healthcare">Healthcare</option>
                                    <option value="Finance">Finance</option>
                                    <option value="E-commerce">E-commerce</option>
                                    <option value="Education">Education</option>
                                    <option value="Real Estate">Real Estate</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151;">Plan</label>
                                <select v-model="selectedBusiness.plan" style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 0.875rem;">
                                    <option value="free">Free</option>
                                    <option value="starter">Starter</option>
                                    <option value="professional">Professional</option>
                                    <option value="enterprise">Enterprise</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151;">Phone</label>
                            <input type="tel" v-model="selectedBusiness.phone" style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 0.875rem;">
                        </div>

                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151;">Website</label>
                            <input type="url" v-model="selectedBusiness.website" style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 0.875rem;">
                        </div>

                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #374151;">Address</label>
                            <textarea v-model="selectedBusiness.address" rows="3" style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 0.875rem; resize: vertical;"></textarea>
                        </div>

                        <div style="display: flex; justify-content: flex-end; gap: 1rem; margin-top: 1.5rem;">
                            <button type="button" @click="showEditModal = false" style="padding: 0.75rem 1.5rem; border: 1px solid #d1d5db; border-radius: 6px; background: white; cursor: pointer;">
                                Cancel
                            </button>
                            <button type="submit" style="padding: 0.75rem 1.5rem; background: #E8C547; color: #111827; border: none; border-radius: 6px; font-weight: 500; cursor: pointer;">
                                Update Business
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <!-- View Business Modal -->
            <div v-if="showViewModal" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); display: flex; align-items: center; justify-content: center; z-index: 1000;">
                <div style="background: white; border-radius: 12px; padding: 2rem; max-width: 800px; width: 90%; max-height: 90vh; overflow-y: auto;">
                    <h3 style="font-size: 1.5rem; font-weight: 600; color: #111827; margin-bottom: 1.5rem;">Business Details</h3>
                    
                    <div v-if="selectedBusiness" style="display: grid; gap: 1.5rem;">
                        <!-- Basic Info -->
                        <div style="background: #f9fafb; padding: 1.5rem; border-radius: 8px;">
                            <h4 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 1rem;">Basic Information</h4>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                                <div>
                                    <label style="font-size: 0.875rem; font-weight: 500; color: #6b7280;">Business Name</label>
                                    <p style="font-size: 0.875rem; color: #111827; margin-top: 0.25rem;">{{ selectedBusiness.name }}</p>
                                </div>
                                <div>
                                    <label style="font-size: 0.875rem; font-weight: 500; color: #6b7280;">Email</label>
                                    <p style="font-size: 0.875rem; color: #111827; margin-top: 0.25rem;">{{ selectedBusiness.email }}</p>
                                </div>
                                <div>
                                    <label style="font-size: 0.875rem; font-weight: 500; color: #6b7280;">Phone</label>
                                    <p style="font-size: 0.875rem; color: #111827; margin-top: 0.25rem;">{{ selectedBusiness.phone || 'Not provided' }}</p>
                                </div>
                                <div>
                                    <label style="font-size: 0.875rem; font-weight: 500; color: #6b7280;">Website</label>
                                    <p style="font-size: 0.875rem; color: #111827; margin-top: 0.25rem;">{{ selectedBusiness.website || 'Not provided' }}</p>
                                </div>
                            </div>
                        </div>

                        <!-- Status & Plan -->
                        <div style="background: #f9fafb; padding: 1.5rem; border-radius: 8px;">
                            <h4 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 1rem;">Status & Plan</h4>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                                <div>
                                    <label style="font-size: 0.875rem; font-weight: 500; color: #6b7280;">Status</label>
                                    <div style="margin-top: 0.25rem;">
                                        <span :style="getStatusStyle(selectedBusiness.status)" 
                                              style="padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 500; text-transform: capitalize;">
                                            {{ selectedBusiness.status.replace('_', ' ') }}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <label style="font-size: 0.875rem; font-weight: 500; color: #6b7280;">Plan</label>
                                    <div style="margin-top: 0.25rem;">
                                        <span :style="getPlanStyle(selectedBusiness.plan)" 
                                              style="padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 500; text-transform: capitalize;">
                                            {{ selectedBusiness.plan }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Statistics -->
                        <div style="background: #f9fafb; padding: 1.5rem; border-radius: 8px;">
                            <h4 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 1rem;">Statistics</h4>
                            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem;">
                                <div>
                                    <label style="font-size: 0.875rem; font-weight: 500; color: #6b7280;">Total Verifications</label>
                                    <p style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-top: 0.25rem;">{{ selectedBusiness.totalVerifications || 0 }}</p>
                                </div>
                                <div>
                                    <label style="font-size: 0.875rem; font-weight: 500; color: #6b7280;">Success Rate</label>
                                    <p style="font-size: 1.5rem; font-weight: bold; color: #111827; margin-top: 0.25rem;">{{ selectedBusiness.successRate || 0 }}%</p>
                                </div>
                                <div>
                                    <label style="font-size: 0.875rem; font-weight: 500; color: #6b7280;">Created</label>
                                    <p style="font-size: 0.875rem; color: #111827; margin-top: 0.25rem;">{{ formatDate(selectedBusiness.created_on) }}</p>
                                </div>
                            </div>
                        </div>

                        <!-- API Key -->
                        <div style="background: #f9fafb; padding: 1.5rem; border-radius: 8px;">
                            <h4 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 1rem;">API Key</h4>
                            <div style="display: flex; gap: 0.5rem; align-items: center;">
                                <input type="text" :value="selectedBusiness.apiKey" readonly 
                                       style="flex: 1; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 0.875rem; background: #f3f4f6;">
                                <button @click="copyApiKey" style="padding: 0.75rem; background: #E8C547; color: #111827; border: none; border-radius: 6px; cursor: pointer;">
                                    Copy
                                </button>
                            </div>
                        </div>
                    </div>

                    <div style="display: flex; justify-content: flex-end; gap: 1rem; margin-top: 1.5rem;">
                        <button @click="showViewModal = false" style="padding: 0.75rem 1.5rem; border: 1px solid #d1d5db; border-radius: 6px; background: white; cursor: pointer;">
                            Close
                        </button>
                        <button @click="editBusiness(selectedBusiness)" style="padding: 0.75rem 1.5rem; background: #E8C547; color: #111827; border: none; border-radius: 6px; font-weight: 500; cursor: pointer;">
                            Edit Business
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            searchTerm: '',
            statusFilter: 'all',
            planFilter: 'all',
            industryFilter: 'all',
            businesses: [],
            loading: false,
            currentPage: 1,
            totalPages: 1,
            totalItems: 0,
            itemsPerPage: 10,
            sortBy: 'created_on',
            sortOrder: 'DESC',
            showAddModal: false,
            showEditModal: false,
            showViewModal: false,
            activeMenu: null,
            viewMode: 'grid', // 'grid' or 'list'
            selectedBusiness: null,
            newBusiness: {
                name: '',
                email: '',
                industry: '',
                plan: 'free',
                status: 'pending_verification',
                monthlyLimit: 1000,
                contactPerson: '',
                phone: '',
                website: '',
                address: '',
                city: '',
                state: '',
                country: '',
                postalCode: '',
                businessType: 'small_business',
                integrationMethod: 'api',
                webhookUrl: '',
                billingEmail: '',
                billingAddress: '',
                notes: ''
            }
        }
    },
    async mounted() {
        await this.loadBusinesses();
    },
    computed: {
        filteredBusinesses() {
            return this.businesses;
        }
    },
    methods: {
        async loadBusinesses() {
            try {
                this.loading = true;
                const token = localStorage.getItem('adminToken');
                
                const params = new URLSearchParams({
                    page: this.currentPage,
                    limit: this.itemsPerPage,
                    search: this.searchTerm,
                    status: this.statusFilter,
                    plan: this.planFilter,
                    industry: this.industryFilter,
                    sortBy: this.sortBy,
                    sortOrder: this.sortOrder
                });

                const response = await fetch(`/api/businesses?${params}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    if (response.status === 401) {
                        localStorage.removeItem('adminToken');
                        localStorage.removeItem('adminUser');
                        window.location.href = 'index.html';
                        return;
                    }
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }

                const data = await response.json();
                
                if (data.success) {
                    this.businesses = data.data;
                    this.totalPages = data.pagination.totalPages;
                    this.totalItems = data.pagination.totalItems;
                } else {
                    throw new Error(data.message || 'Failed to load businesses');
                }
            } catch (error) {
                console.error('Error loading businesses:', error);
                this.$parent.alert = {
                    message: 'Error loading businesses: ' + error.message,
                    type: 'error'
                };
            } finally {
                this.loading = false;
            }
        },

        async searchBusinesses() {
            this.currentPage = 1;
            await this.loadBusinesses();
        },

        async changePage(page) {
            this.currentPage = page;
            await this.loadBusinesses();
        },

        async changeSorting(field) {
            if (this.sortBy === field) {
                this.sortOrder = this.sortOrder === 'ASC' ? 'DESC' : 'ASC';
            } else {
                this.sortBy = field;
                this.sortOrder = 'ASC';
            }
            await this.loadBusinesses();
        },

        showAddBusinessModal() {
            this.showAddModal = true;
            this.newBusiness = {
                name: '',
                email: '',
                industry: '',
                plan: 'free',
                status: 'pending_verification',
                monthlyLimit: 1000,
                contactPerson: '',
                phone: '',
                website: '',
                address: '',
                city: '',
                state: '',
                country: '',
                postalCode: '',
                businessType: 'small_business',
                integrationMethod: 'api',
                webhookUrl: '',
                billingEmail: '',
                billingAddress: '',
                notes: ''
            };
        },

        async addBusiness() {
            try {
                const token = localStorage.getItem('adminToken');
                
                // Clean up the data - convert empty strings to null for optional fields
                const cleanedBusiness = { ...this.newBusiness };
                
                // Convert empty strings to null for optional fields
                const optionalFields = ['webhookUrl', 'billingEmail', 'billingAddress', 'phone', 'website', 'address', 'city', 'state', 'country', 'postalCode', 'industry', 'contactPerson', 'contactTitle', 'notes'];
                optionalFields.forEach(field => {
                    if (cleanedBusiness[field] === '' || cleanedBusiness[field] === undefined) {
                        cleanedBusiness[field] = null;
                    }
                });
                
                const response = await fetch('/api/businesses', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(cleanedBusiness)
                });

                if (!response.ok) {
                    if (response.status === 401) {
                        localStorage.removeItem('adminToken');
                        localStorage.removeItem('adminUser');
                        window.location.href = 'index.html';
                        return;
                    }
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }

                const data = await response.json();
                
                if (data.success) {
                    this.$parent.alert = {
                        message: 'Business created successfully!',
                        type: 'success'
                    };
                    this.showAddModal = false;
                    await this.loadBusinesses();
                } else {
                    throw new Error(data.message || 'Failed to create business');
                }
            } catch (error) {
                console.error('Error creating business:', error);
                this.$parent.alert = {
                    message: 'Error creating business: ' + error.message,
                    type: 'error'
                };
            }
        },

        async deleteBusiness(businessId) {
            if (!confirm('Are you sure you want to delete this business? This action cannot be undone.')) {
                return;
            }

            try {
                const token = localStorage.getItem('adminToken');
                
                const response = await fetch(`/api/businesses/${businessId}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    if (response.status === 401) {
                        localStorage.removeItem('adminToken');
                        localStorage.removeItem('adminUser');
                        window.location.href = 'index.html';
                        return;
                    }
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }

                const data = await response.json();
                
                if (data.success) {
                    this.$parent.alert = {
                        message: 'Business deleted successfully!',
                        type: 'success'
                    };
                    await this.loadBusinesses();
                } else {
                    throw new Error(data.message || 'Failed to delete business');
                }
            } catch (error) {
                console.error('Error deleting business:', error);
                this.$parent.alert = {
                    message: 'Error deleting business: ' + error.message,
                    type: 'error'
                };
            }
        },

        async regenerateApiKey(businessId) {
            try {
                const token = localStorage.getItem('adminToken');
                
                const response = await fetch(`/api/businesses/${businessId}/regenerate-api-key`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    if (response.status === 401) {
                        localStorage.removeItem('adminToken');
                        localStorage.removeItem('adminUser');
                        window.location.href = 'index.html';
                        return;
                    }
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }

                const data = await response.json();
                
                if (data.success) {
                    this.$parent.alert = {
                        message: 'API key regenerated successfully!',
                        type: 'success'
                    };
                    await this.loadBusinesses();
                } else {
                    throw new Error(data.message || 'Failed to regenerate API key');
                }
            } catch (error) {
                console.error('Error regenerating API key:', error);
                this.$parent.alert = {
                    message: 'Error regenerating API key: ' + error.message,
                    type: 'error'
                };
            }
        },

        async verifyBusiness(businessId) {
            try {
                const token = localStorage.getItem('adminToken');
                
                const response = await fetch(`/api/businesses/${businessId}/verify`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    if (response.status === 401) {
                        localStorage.removeItem('adminToken');
                        localStorage.removeItem('adminUser');
                        window.location.href = 'index.html';
                        return;
                    }
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }

                const data = await response.json();
                
                if (data.success) {
                    this.$parent.alert = {
                        message: 'Business verified successfully!',
                        type: 'success'
                    };
                    await this.loadBusinesses();
                } else {
                    throw new Error(data.message || 'Failed to verify business');
                }
            } catch (error) {
                console.error('Error verifying business:', error);
                this.$parent.alert = {
                    message: 'Error verifying business: ' + error.message,
                    type: 'error'
                };
            }
        },

        async suspendBusiness(businessId) {
            const reason = prompt('Enter reason for suspension (optional):');
            if (reason === null) return; // User cancelled

            try {
                const token = localStorage.getItem('adminToken');
                
                const response = await fetch(`/api/businesses/${businessId}/suspend`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ reason })
                });

                if (!response.ok) {
                    if (response.status === 401) {
                        localStorage.removeItem('adminToken');
                        localStorage.removeItem('adminUser');
                        window.location.href = 'index.html';
                        return;
                    }
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }

                const data = await response.json();
                
                if (data.success) {
                    this.$parent.alert = {
                        message: 'Business suspended successfully!',
                        type: 'success'
                    };
                    await this.loadBusinesses();
                } else {
                    throw new Error(data.message || 'Failed to suspend business');
                }
            } catch (error) {
                console.error('Error suspending business:', error);
                this.$parent.alert = {
                    message: 'Error suspending business: ' + error.message,
                    type: 'error'
                };
            }
        },

        toggleBusinessMenu(businessId) {
            this.activeMenu = this.activeMenu === businessId ? null : businessId;
        },

        toggleSortOrder() {
            this.sortOrder = this.sortOrder === 'ASC' ? 'DESC' : 'ASC';
            this.searchBusinesses();
        },

        viewBusiness(business) {
            this.selectedBusiness = business;
            this.showViewModal = true;
        },

        editBusiness(business) {
            this.selectedBusiness = { ...business };
            this.showEditModal = true;
        },

        async updateBusiness() {
            try {
                const token = localStorage.getItem('adminToken');
                
                // Clean up the data - convert empty strings to null for optional fields
                const cleanedBusiness = { ...this.selectedBusiness };
                
                // Convert empty strings to null for optional fields
                const optionalFields = ['webhookUrl', 'billingEmail', 'billingAddress', 'phone', 'website', 'address', 'city', 'state', 'country', 'postalCode', 'industry', 'contactPerson', 'contactTitle', 'notes'];
                optionalFields.forEach(field => {
                    if (cleanedBusiness[field] === '' || cleanedBusiness[field] === undefined) {
                        cleanedBusiness[field] = null;
                    }
                });
                
                const response = await fetch(`/api/businesses/${this.selectedBusiness.id}`, {
                    method: 'PUT',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(cleanedBusiness)
                });

                if (!response.ok) {
                    if (response.status === 401) {
                        localStorage.removeItem('adminToken');
                        localStorage.removeItem('adminUser');
                        window.location.href = 'index.html';
                        return;
                    }
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }

                const data = await response.json();
                
                if (data.success) {
                    this.$parent.alert = {
                        message: 'Business updated successfully!',
                        type: 'success'
                    };
                    this.showEditModal = false;
                    await this.loadBusinesses();
                } else {
                    throw new Error(data.message || 'Failed to update business');
                }
            } catch (error) {
                console.error('Error updating business:', error);
                this.$parent.alert = {
                    message: 'Error updating business: ' + error.message,
                    type: 'error'
                };
            }
        },

        exportBusinesses() {
            try {
                const csvContent = this.generateCSV();
                const blob = new Blob([csvContent], { type: 'text/csv' });
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `businesses-${new Date().toISOString().split('T')[0]}.csv`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
                
                this.$parent.alert = {
                    message: 'Businesses exported successfully!',
                    type: 'success'
                };
            } catch (error) {
                console.error('Error exporting businesses:', error);
                this.$parent.alert = {
                    message: 'Error exporting businesses: ' + error.message,
                    type: 'error'
                };
            }
        },

        generateCSV() {
            const headers = ['Name', 'Email', 'Phone', 'Industry', 'Plan', 'Status', 'Verifications', 'Success Rate', 'Created'];
            const rows = this.businesses.map(business => [
                business.name,
                business.email,
                business.phone || '',
                business.industry || '',
                business.plan,
                business.status,
                business.totalVerifications || 0,
                business.successRate || 0,
                this.formatDate(business.created_on)
            ]);
            
            return [headers, ...rows].map(row => 
                row.map(field => `"${field}"`).join(',')
            ).join('\n');
        },

        copyApiKey() {
            if (this.selectedBusiness && this.selectedBusiness.apiKey) {
                navigator.clipboard.writeText(this.selectedBusiness.apiKey).then(() => {
                    this.$parent.alert = {
                        message: 'API key copied to clipboard!',
                        type: 'success'
                    };
                }).catch(() => {
                    // Fallback for older browsers
                    const textArea = document.createElement('textarea');
                    textArea.value = this.selectedBusiness.apiKey;
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);
                    this.$parent.alert = {
                        message: 'API key copied to clipboard!',
                        type: 'success'
                    };
                });
            }
        },

        formatDate(dateString) {
            if (!dateString) return 'Never';
            const date = new Date(dateString);
            return date.toLocaleDateString();
        },

        getStatusStyle(status) {
            const styles = {
                active: 'background: #dcfce7; color: #166534;',
                inactive: 'background: #fef3c7; color: #92400e;',
                suspended: 'background: #fee2e2; color: #991b1b;',
                pending_verification: 'background: #dbeafe; color: #1e40af;'
            };
            return styles[status] || 'background: #f3f4f6; color: #374151;';
        },

        getPlanStyle(plan) {
            const styles = {
                free: 'background: #f3f4f6; color: #374151;',
                starter: 'background: #dbeafe; color: #1e40af;',
                professional: 'background: #e0e7ff; color: #3730a3;',
                enterprise: 'background: #fce7f3; color: #be185d;'
            };
            return styles[plan] || 'background: #f3f4f6; color: #374151;';
        }
    }
};

// Export for use in main dashboard
window.BusinessesPage = BusinessesPage;